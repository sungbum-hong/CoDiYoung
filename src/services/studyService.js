import { MESSAGES } from '../constants/messages.js';
import { AuthService } from './authService.js';

const BASE_URL = 'http://15.164.125.28:8080';

// API 엔드포인트 상수 - 명세서 기반으로 정확히 매핑
const ENDPOINTS = {
  // 스터디 관련
  STUDY_CREATE: '/api/study/create',
  STUDY_GET_BY_ID: '/api/study',                    // /{studyId}
  STUDY_GET_BY_USER: '/api/study',                  // /{userId}
  STUDY_UPDATE: '/api/study/update/study',          // /{studyId}
  STUDY_DELETE: '/api/study/delete',                // /{studyId}
  STUDY_GET_USER_STUDIES: '/api/study/users/studies',
  STUDY_GET_GROUPED: '/api/study/category/grouped',

  // 이미지 관련
  STORAGE_PRESIGN: '/storage/presign',
  STORAGE_PRESIGN_GET: '/api/storage/presign-get',
  STORAGE_PUBLIC_URL: '/api/storage/public-url'
};

// 요청 캐시 및 중복 방지를 위한 Map
const requestCache = new Map();
const pendingRequests = new Map();

// AbortController 관리
const abortControllers = new Map();

/**
 * 최적화된 스터디 서비스 클래스
 * - 성능 최적화 (캐싱, 중복 방지, 요청 취소)
 * - Hook 분리를 위한 구조적 설계
 * - API 명세서 기반 정확한 매핑
 */
export class StudyService {
  // === 공통 유틸리티 메서드 ===

  /**
   * 공통 헤더 생성
   * @param {boolean} includeContentType - Content-Type 헤더 포함 여부
   * @param {boolean} requireAuth - 인증 필수 여부
   * @returns {Object} 헤더 객체
   */
  static getCommonHeaders(includeContentType = true, requireAuth = true) {
    const headers = {};

    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
      headers['Accept'] = 'application/json';
    }

    if (requireAuth) {
      try {
        const token = AuthService.validateTokenBeforeRequest(true);
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const token = AuthService.validateTokenBeforeRequest(false);
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        // 선택적 인증이므로 만료 에러만 throw
        if (error.message.includes('만료')) throw error;
      }
    }

    return headers;
  }

  /**
   * 향상된 에러 핸들링
   * @param {Error} error - 에러 객체
   * @param {string} context - 에러 발생 컨텍스트
   */
  static handleApiError(error, context = '') {
    // 네트워크 에러
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
    }

    // AbortError (요청 취소)
    if (error.name === 'AbortError') {
      throw new Error('요청이 취소되었습니다.');
    }

    // 타임아웃 에러
    if (error.message.includes('timeout')) {
      throw new Error('요청 시간이 초과되었습니다. 다시 시도해주세요.');
    }

    // 기타 에러는 그대로 전달
    throw error;
  }

  /**
   * 향상된 응답 처리
   * @param {Response} response - Fetch Response 객체
   * @param {string} errorMessage - 에러 메시지
   * @returns {Promise<any>} 파싱된 응답 데이터
   */
  static async handleResponse(response, errorMessage = 'API 요청 실패') {
    if (!response.ok) {
      let errorData = {};
      try {
        const errorText = await response.text();
        if (errorText) {
          errorData = JSON.parse(errorText);
        }
      } catch (e) {
        // JSON 파싱 실패시 기본 에러 메시지 사용
      }

      const message = errorData.message || `${errorMessage} (${response.status})`;
      throw new Error(message);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      const text = await response.text();
      return text || { success: true };
    }
  }

  /**
   * 캐시 키 생성
   * @param {string} method - HTTP 메서드
   * @param {string} url - 요청 URL
   * @param {string} body - 요청 본문 (선택적)
   * @returns {string} 캐시 키
   */
  static generateCacheKey(method, url, body = '') {
    return `${method}:${url}:${body}`;
  }

  /**
   * 중복 요청 방지 및 캐싱이 적용된 fetch
   * @param {string} url - 요청 URL
   * @param {Object} options - fetch 옵션
   * @param {boolean} useCache - 캐시 사용 여부 (GET 요청에만 적용)
   * @param {number} cacheTTL - 캐시 TTL (밀리초)
   * @returns {Promise<any>} 응답 데이터
   */
  static async optimizedFetch(url, options = {}, useCache = true, cacheTTL = 5 * 60 * 1000) {
    const method = options.method || 'GET';
    const cacheKey = this.generateCacheKey(method, url, options.body || '');

    // GET 요청에 대한 캐시 체크
    if (method === 'GET' && useCache) {
      const cached = requestCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < cacheTTL) {
        return cached.data;
      }
    }

    // 중복 요청 방지
    if (pendingRequests.has(cacheKey)) {
      return pendingRequests.get(cacheKey);
    }

    // AbortController 설정
    const abortController = new AbortController();
    const requestId = `${Date.now()}-${Math.random()}`;
    abortControllers.set(requestId, abortController);

    const fetchOptions = {
      ...options,
      signal: abortController.signal,
    };

    // 요청 실행
    const requestPromise = fetch(url, fetchOptions)
      .then(async (response) => {
        const data = await this.handleResponse(response);
        
        // GET 요청 결과 캐싱
        if (method === 'GET' && useCache) {
          requestCache.set(cacheKey, {
            data,
            timestamp: Date.now()
          });
        }

        return data;
      })
      .catch((error) => {
        this.handleApiError(error);
      })
      .finally(() => {
        // 정리
        pendingRequests.delete(cacheKey);
        abortControllers.delete(requestId);
      });

    pendingRequests.set(cacheKey, requestPromise);
    return requestPromise;
  }

  /**
   * 특정 요청 취소
   * @param {string} requestId - 요청 ID
   */
  static cancelRequest(requestId) {
    const controller = abortControllers.get(requestId);
    if (controller) {
      controller.abort();
      abortControllers.delete(requestId);
    }
  }

  /**
   * 모든 진행중인 요청 취소
   */
  static cancelAllRequests() {
    abortControllers.forEach((controller) => controller.abort());
    abortControllers.clear();
    pendingRequests.clear();
  }

  /**
   * 캐시 클리어
   * @param {string} pattern - 클리어할 캐시 키 패턴 (선택적)
   */
  static clearCache(pattern = null) {
    if (pattern) {
      Array.from(requestCache.keys())
        .filter(key => key.includes(pattern))
        .forEach(key => requestCache.delete(key));
    } else {
      requestCache.clear();
    }
  }

  // === 이미지 업로드 관련 메서드 ===

  /**
   * Presigned PUT URL 발급
   * @param {string} originalFilename - 원본 파일명
   * @param {string} contentType - 컨텐츠 타입
   * @returns {Promise<Object>} { key, uploadUrl, expiresIn }
   */
  static async getPresignedPutUrl(originalFilename, contentType) {
    const url = `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN}`;
    const requestBody = { originalFilename, contentType };

    return this.optimizedFetch(url, {
      method: 'POST',
      headers: this.getCommonHeaders(),
      body: JSON.stringify(requestBody)
    }, false); // POST 요청은 캐시하지 않음
  }

  /**
   * S3 직접 업로드
   * @param {string} presignedUrl - Presigned URL
   * @param {File} file - 업로드할 파일
   * @returns {Promise<boolean>} 업로드 성공 여부
   */
  static async uploadImageToS3(presignedUrl, file) {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        body: file,
        headers: { 'Content-Type': file.type },
        mode: 'cors',
        credentials: 'omit'
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`이미지 업로드 실패 (${response.status}): ${errorText || response.statusText}`);
      }

      return true;
    } catch (error) {
      if (error.message.includes('CORS') || error.message.includes('NetworkError')) {
        throw new Error('CORS 정책으로 인해 이미지 업로드에 실패했습니다. 서버 관리자에게 문의해주세요.');
      }
      throw new Error(`이미지 업로드 실패: ${error.message}`);
    }
  }

  /**
   * 이미지 조회 Presigned URL 발급
   * @param {string} key - 이미지 키
   * @returns {Promise<Object>} Presigned GET URL 정보
   */
  static async getPresignedGetUrl(key) {
    const url = `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_GET}?key=${encodeURIComponent(key)}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders()
    });
  }

  /**
   * 이미지 공개 URL 발급
   * @param {string} key - 이미지 키
   * @returns {Promise<Object>} 공개 URL 정보
   */
  static async getPublicUrl(key) {
    const url = `${BASE_URL}${ENDPOINTS.STORAGE_PUBLIC_URL}?key=${encodeURIComponent(key)}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders()
    });
  }

  // === 스터디 관련 메서드 (API 명세서 정확히 매핑) ===

  /**
   * 스터디 생성
   * @param {string} content - 스터디 내용
   * @param {Array} images - 이미지 배열 [{ key: string, sortOrder: number }]
   * @returns {Promise<Object>} 생성된 스터디 정보
   */
  static async createStudy(content, images = []) {
    const url = `${BASE_URL}${ENDPOINTS.STUDY_CREATE}`;
    const requestBody = { content, images };

    const result = await this.optimizedFetch(url, {
      method: 'POST',
      headers: this.getCommonHeaders(),
      body: JSON.stringify(requestBody)
    }, false);

    // 생성 후 관련 캐시 클리어
    this.clearCache('GET:/api/study');
    
    return result;
  }

  /**
   * 스터디 조회 (단일) - API 명세서 기준
   * @param {number} studyId - 스터디 ID
   * @returns {Promise<Object>} 스터디 상세 정보
   */
  static async getStudyById(studyId) {
    const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_BY_ID}/${studyId}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders(false, false) // 인증 선택적
    });
  }

  /**
   * 유저의 스터디 채널 반환 - API 명세서 기준 
   * @param {number} userId - 유저 ID
   * @returns {Promise<Object>} 유저 스터디 채널 정보
   */
  static async getUserStudyChannel(userId) {
    const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_BY_USER}/${userId}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders(false, false) // 인증 선택적
    });
  }

  /**
   * 스터디 수정
   * @param {number} studyId - 스터디 ID
   * @param {string} content - 수정할 내용
   * @param {Array} images - 수정할 이미지 배열
   * @returns {Promise<Object>} 수정 결과
   */
  static async updateStudy(studyId, content, images = []) {
    // 이미지 데이터 포맷팅 - API 명세서 구조에 맞춤
    const formattedImages = (images || []).map((img, index) => ({
      id: img.id || 0,
      key: img.key || '',
      sortOrder: img.sortOrder !== undefined ? img.sortOrder : index
    }));

    const url = `${BASE_URL}${ENDPOINTS.STUDY_UPDATE}/${studyId}`;
    const requestBody = { content, images: formattedImages };

    const result = await this.optimizedFetch(url, {
      method: 'PUT',
      headers: this.getCommonHeaders(),
      body: JSON.stringify(requestBody)
    }, false);

    // 수정 후 관련 캐시 클리어
    this.clearCache('GET:/api/study');
    
    return result;
  }

  /**
   * 스터디 삭제
   * @param {number} studyId - 스터디 ID
   * @returns {Promise<Object>} 삭제 결과
   */
  static async deleteStudy(studyId) {
    const url = `${BASE_URL}${ENDPOINTS.STUDY_DELETE}/${studyId}`;
    
    const result = await this.optimizedFetch(url, {
      method: 'DELETE',
      headers: this.getCommonHeaders()
    }, false);

    // 삭제 후 관련 캐시 클리어
    this.clearCache('GET:/api/study');
    
    return result;
  }

  /**
   * 유저의 스터디 목록 조회 - 페이지네이션 지원
   * @param {number} page - 페이지 번호 (0부터 시작)
   * @param {number} size - 페이지 크기
   * @param {Array<string>} sort - 정렬 조건 배열
   * @returns {Promise<Object>} 페이지네이션된 스터디 목록
   */
  static async getUserStudies(page = 0, size = 10, sort = ['createdAt,DESC']) {
    const searchParams = new URLSearchParams({
      page: page.toString(),
      size: size.toString()
    });

    // sort 파라미터는 배열로 처리
    sort.forEach(sortItem => {
      searchParams.append('sort', sortItem);
    });

    const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_USER_STUDIES}?${searchParams.toString()}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders()
    });
  }

  /**
   * 카테고리별 그룹화된 스터디 조회
   * @param {Object} params - 카테고리별 페이지네이션 파라미터
   * @returns {Promise<Object>} 그룹화된 스터디 데이터
   */
  static async getGroupedStudies(params = {}) {
    const defaultParams = {
      codingPage: 0,
      codingSize: 10,
      designPage: 0,
      designSize: 10,
      videoPage: 0,
      videoSize: 10
    };
    
    const queryParams = { ...defaultParams, ...params };
    const searchParams = new URLSearchParams();
    
    Object.entries(queryParams).forEach(([key, value]) => {
      searchParams.append(key, value.toString());
    });

    const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_GROUPED}?${searchParams.toString()}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders(false, false) // 인증 선택적
    });
  }

  // === 유틸리티 메서드 ===

  /**
   * 이미지 업로드 전체 플로우 (Presigned URL + S3 업로드)
   * @param {File} file - 업로드할 파일
   * @returns {Promise<string>} 업로드된 이미지의 key
   */
  static async uploadImageComplete(file) {
    try {
      // 1. Presigned URL 발급
      const { key, uploadUrl } = await this.getPresignedPutUrl(file.name, file.type);
      
      // 2. S3에 직접 업로드
      await this.uploadImageToS3(uploadUrl, file);
      
      return key;
    } catch (error) {
      throw new Error(`이미지 업로드 전체 프로세스 실패: ${error.message}`);
    }
  }

  /**
   * 배치 이미지 업로드
   * @param {File[]} files - 업로드할 파일들
   * @param {Function} onProgress - 진행률 콜백 (선택적)
   * @returns {Promise<Array<string>>} 업로드된 이미지들의 key 배열
   */
  static async uploadImagesInBatch(files, onProgress = null) {
    const uploadPromises = files.map(async (file, index) => {
      try {
        const key = await this.uploadImageComplete(file);
        if (onProgress) {
          onProgress(index + 1, files.length);
        }
        return { success: true, key, file };
      } catch (error) {
        return { success: false, error: error.message, file };
      }
    });

    return Promise.all(uploadPromises);
  }
}

export default StudyService;