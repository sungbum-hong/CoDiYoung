import { MESSAGES } from '../constants/messages.js';
import { AuthService } from './authService.js';
import { ImageService } from './imageService.js';

const BASE_URL = 'http://15.164.125.28:8080';

// API 엔드포인트 상수 - 업데이트된 명세서 기반
const ENDPOINTS = {
  // 스터디 관련
  STUDY_CREATE: '/api/study/create',
  STUDY_GET_BY_ID: '/api/study',                    // /{studyId}
  STUDY_GET_USER_CHANNEL: '/api/study/user',        // /{userId} - 변경됨!
  STUDY_UPDATE: '/api/study/update/study',          // /{studyId}
  STUDY_DELETE: '/api/study/delete',                // /{studyId}
  STUDY_GET_USER_STUDIES: '/api/study/users/studies',
  STUDY_GET_GROUPED: '/api/study/category/grouped',

  // 이미지 관련
  STORAGE_PRESIGN_PUT: '/api/storage/presign-put',
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
 * - 업데이트된 API 명세서 기반
 */
export class StudyService {
  // === 공통 유틸리티 메서드 ===

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
        if (error.message.includes('만료')) throw error;
      }
    }

    return headers;
  }

  static handleApiError(error, context = '') {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
    }

    if (error.name === 'AbortError') {
      throw new Error('요청이 취소되었습니다.');
    }

    if (error.message.includes('timeout')) {
      throw new Error('요청 시간이 초과되었습니다. 다시 시도해주세요.');
    }

    throw error;
  }

  static async handleResponse(response, errorMessage = 'API 요청 실패') {
    if (!response.ok) {
      let errorData = {};
      try {
        const errorText = await response.text();
        if (errorText) {
          // JSON 형식인지 확인 후 파싱 시도
          if (errorText.trim().startsWith('{') || errorText.trim().startsWith('[')) {
            errorData = JSON.parse(errorText);
          } else {
            // JSON이 아닌 경우 텍스트 그대로 사용
            errorData = { message: errorText };
          }
        }
      } catch (e) {
        // JSON 파싱 실패시 원본 텍스트 사용
        console.warn('JSON 파싱 실패:', e);
        errorData = { message: errorText || '알 수 없는 오류' };
      }

      const message = errorData.message || `${errorMessage} (${response.status})`;
      throw new Error(message);
    }

    // 성공 응답 처리
    const contentType = response.headers.get('content-type');
    
    try {
      // 먼저 텍스트로 읽어서 내용 확인
      const text = await response.text();
      
      // 빈 응답이면 성공 객체 반환
      if (!text || text.trim() === '') {
        return { success: true };
      }
      
      // Content-Type이 JSON이고 실제로 JSON 형식인지 확인
      if (contentType && contentType.includes('application/json')) {
        try {
          return JSON.parse(text);
        } catch (e) {
          // Content-Type은 JSON이지만 실제로는 문자열 (백엔드 설정 오류)
          return text;
        }
      }
      
      // JSON 형식인지 확인 (Content-Type과 무관하게)
      const trimmedText = text.trim();
      if (trimmedText.startsWith('{') || trimmedText.startsWith('[')) {
        try {
          return JSON.parse(trimmedText);
        } catch (e) {
          return trimmedText;
        }
      }
      
      // 일반 문자열 응답
      return text;
      
    } catch (error) {
      console.error('응답 처리 중 치명적 오류:', error);
      console.error('응답 상태:', response.status);
      console.error('응답 상태 텍스트:', response.statusText);
      
      // 최후 수단: 성공으로 간주 (실제 수정은 되었으므로)
      console.warn('응답 처리 실패했지만 성공으로 간주');
      return { success: true, message: '응답 처리 오류 (실제 수정은 완료됨)' };
    }
  }

  static generateCacheKey(method, url, body = '') {
    return `${method}:${url}:${body}`;
  }

  static async optimizedFetch(url, options = {}, useCache = true, cacheTTL = 5 * 60 * 1000) {
    const method = options.method || 'GET';
    const cacheKey = this.generateCacheKey(method, url, options.body || '');

    if (method === 'GET' && useCache) {
      const cached = requestCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < cacheTTL) {
        return cached.data;
      }
    }

    if (pendingRequests.has(cacheKey)) {
      return pendingRequests.get(cacheKey);
    }

    const abortController = new AbortController();
    const requestId = `${Date.now()}-${Math.random()}`;
    abortControllers.set(requestId, abortController);

    const fetchOptions = {
      ...options,
      signal: abortController.signal,
    };

    const requestPromise = fetch(url, fetchOptions)
      .then(async (response) => {
        const data = await this.handleResponse(response);
        
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
        pendingRequests.delete(cacheKey);
        abortControllers.delete(requestId);
      });

    pendingRequests.set(cacheKey, requestPromise);
    return requestPromise;
  }

  static cancelRequest(requestId) {
    const controller = abortControllers.get(requestId);
    if (controller) {
      controller.abort();
      abortControllers.delete(requestId);
    }
  }

  static cancelAllRequests() {
    abortControllers.forEach((controller) => controller.abort());
    abortControllers.clear();
    pendingRequests.clear();
  }

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

  static async getPresignedPutUrl(filename, contentType) {
    // 쿼리 파라미터로 전송 (API 스펙에 맞게)
    const params = new URLSearchParams({
      filename: filename,
      contentType: contentType
    });
    
    const url = `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_PUT}?${params}`;
    console.log('StudyService - Presigned PUT URL 요청:', url);

    return this.optimizedFetch(url, {
      method: 'POST',
      headers: this.getCommonHeaders(false, true) // Content-Type 제거, 인증만 포함
    }, false);
  }

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

  static async getPresignedGetUrl(key) {
    const url = `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_GET}?key=${encodeURIComponent(key)}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders()
    });
  }

  static async getPublicUrl(key) {
    const url = `${BASE_URL}${ENDPOINTS.STORAGE_PUBLIC_URL}?key=${encodeURIComponent(key)}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders()
    });
  }

  // === 스터디 관련 메서드 (업데이트된 명세서 기준) ===

  /**
   * 스터디 생성
   * @param {string} content - 스터디 내용 (필수)
   * @param {Array} images - 이미지 배열 [{ key: string, sortOrder: number }]
   * @returns {Promise<Object>} 생성된 스터디 정보
   */
  static async createStudy(content, images = []) {
    const url = `${BASE_URL}${ENDPOINTS.STUDY_CREATE}`;
    const requestBody = { 
      content,  // 필수 필드
      images 
    };

    const result = await this.optimizedFetch(url, {
      method: 'POST',
      headers: this.getCommonHeaders(),
      body: JSON.stringify(requestBody)
    }, false);

    this.clearCache('GET:/api/study');
    
    return result;
  }

  /**
   * 스터디 단건 조회
   * @param {number} studyId - 스터디 ID
   * @returns {Promise<Object>} 스터디 상세 정보
   */
  static async getStudyById(studyId) {
    const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_BY_ID}/${studyId}`;
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders(true, false) // 인증 선택적
    });
  }

  /**
   * 유저의 상세 스터디 채널 반환 - 업데이트된 API
   * @param {number} userId - 유저 ID
   * @param {Object} pageable - 페이지네이션 옵션
   * @param {number} pageable.page - 페이지 번호
   * @param {number} pageable.size - 페이지 크기
   * @param {Array<string>} pageable.sort - 정렬 조건
   * @returns {Promise<Object>} 유저 상세 스터디 채널 정보
   * 
   * 응답 구조:
   * {
   *   category: string,
   *   userImageUrl: string,
   *   studyCount: number,
   *   completedProject: [{ id, logoImageURL }],
   *   month: { month, days: [{ date, checked }] },
   *   studies: { content, pageNumber, pageSize, totalElements, totalPages, last }
   * }
   */
  static async getUserStudyChannel(userId, pageable = { page: 0, size: 10, sort: ['createdAt,DESC'] }) {
    // Spring Boot Pageable 표준 형식으로 구성
    const searchParams = new URLSearchParams();
    searchParams.append('page', pageable.page.toString());
    searchParams.append('size', pageable.size.toString());
    
    // sort 파라미터 추가 (Spring Boot 표준 형식)
    if (pageable.sort && Array.isArray(pageable.sort)) {
      pageable.sort.forEach(sortItem => {
        searchParams.append('sort', sortItem);
      });
    }

    const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_USER_CHANNEL}/${userId}?${searchParams.toString()}`;
    
    console.log('=== getUserStudyChannel API 호출 ===');
    console.log('URL:', url);
    console.log('userId:', userId);
    console.log('pageable:', pageable);
    
    return this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders(true, false) // 인증 선택적으로 변경
    });
  }

  /**
   * 스터디 수정
   * @param {number} studyId - 스터디 ID
   * @param {string} content - 수정할 내용
   * @param {Array} images - 수정할 이미지 배열 [{ id, key, sortOrder }]
   * @returns {Promise<string>} 수정 결과 메시지
   */
  static async updateStudy(studyId, content, images = []) {
    const formattedImages = (images || []).map((img, index) => ({
      id: img.id || 0,
      key: img.key || '',
      sortOrder: img.sortOrder !== undefined ? img.sortOrder : index
    }));

    const url = `${BASE_URL}${ENDPOINTS.STUDY_UPDATE}/${studyId}`;
    const requestBody = { content, images: formattedImages };

    console.log('=== 스터디 수정 API 호출 ===');
    console.log('URL:', url);
    console.log('Request Body:', requestBody);

    const result = await this.optimizedFetch(url, {
      method: 'PUT',
      headers: this.getCommonHeaders(),
      body: JSON.stringify(requestBody)
    }, false);

    console.log('=== 스터디 수정 API 응답 ===');
    console.log('result:', result);

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

    this.clearCache('GET:/api/study');
    
    return result;
  }

  /**
   * 유저의 전체 스터디 목록 조회 - 페이지네이션 지원
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
   * @returns {Promise<Object>} 그룹화된 스터디 데이터 { coding, design, video }
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
    
    console.log('=== getGroupedStudies API 호출 ===');
    console.log('URL:', url);
    console.log('요청 파라미터:', queryParams);
    console.log('엔드포인트:', ENDPOINTS.STUDY_GET_GROUPED);
    
    const result = await this.optimizedFetch(url, {
      method: 'GET',
      headers: this.getCommonHeaders(true, false) // 인증 선택적
    });
    
    console.log('=== getGroupedStudies API 응답 ===');
    console.log('응답 데이터:', result);
    console.log('응답 타입:', typeof result);
    console.log('coding 데이터:', result?.coding);
    console.log('design 데이터:', result?.design);
    console.log('video 데이터:', result?.video);
    
    return result;
  }

  // === 유틸리티 메서드 ===

  /**
   * 이미지 업로드 전체 플로우
   * @param {File} file - 업로드할 파일
   * @returns {Promise<string>} 업로드된 이미지의 key
   */
  static async uploadImageComplete(file) {
    try {
      const { key, uploadUrl } = await this.getPresignedPutUrl(file.name, file.type);
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
   * @returns {Promise<Array>} 업로드 결과 배열
   */
  static async uploadImagesInBatch(files, onProgress = null) {
    try {
      const keys = await ImageService.uploadImages(files, onProgress);
      return keys.map((key, index) => ({ success: true, key, file: files[index] }));
    } catch (error) {
      console.error('배치 이미지 업로드 실패:', error);
      throw error;
    }
  }
}

export default StudyService;