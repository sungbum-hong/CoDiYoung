import { CONFIG } from '../constants/config.js';
import { MESSAGES } from '../constants/messages.js';

const BASE_URL = 'http://15.164.125.28:8080';

// API 엔드포인트 상수
const ENDPOINTS = {
  PRESIGN: '/storage/presign',
  STUDY_CREATE: '/api/study/create',
  STUDY_GET: '/api/study',
  STUDY_UPDATE: '/api/study/update/study',
  STUDY_DELETE: '/api/study/delete',
  STUDY_GET_ALL: '/api/study/getAll',
  ATTENDANCE_CHECK: '/api/attendance/check',
  ATTENDANCE_CALENDAR: '/api/attendance/calendar',
  UPLOAD_ENDPOINTS: [
    '/api/storage/upload',
    '/storage/upload', 
    '/api/upload',
    '/upload',
    '/api/files/upload',
    '/files/upload'
  ]
};

export class StudyService {
  // 공통 헤더 생성
  static getCommonHeaders(includeContentType = true) {
    const token = localStorage.getItem('auth_token');
    const headers = {};
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }

  // 공통 에러 핸들링
  static handleApiError(error, context = '') {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
    }
    throw error;
  }

  // 공통 응답 처리
  static async handleResponse(response, errorMessage = 'API 요청 실패') {
    if (!response.ok) {
      let errorData = {};
      try {
        const errorText = await response.text();
        errorData = JSON.parse(errorText);
      } catch (e) {
        // JSON 파싱 실패 시 기본 에러 메시지
      }
      throw new Error(errorData.message || `${errorMessage} (${response.status})`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      const text = await response.text();
      return text || { success: true };
    }
  }

  // === 이미지 업로드 관련 메서드 ===

  // presigned URL 요청
  static async getPresignedUrl(originalFilename, contentType) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PRESIGN}`, {
        method: 'POST',
        headers: this.getCommonHeaders(),
        body: JSON.stringify({ originalFilename, contentType })
      });

      return await this.handleResponse(response, 'Presigned URL 요청 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // S3 직접 업로드
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

  // 서버 경유 이미지 업로드
  static async uploadImageViaServer(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('originalFilename', file.name);
    
    for (const endpoint of ENDPOINTS.UPLOAD_ENDPOINTS) {
      try {
        const response = await fetch(`${BASE_URL}${endpoint}`, {
          method: 'POST',
          headers: this.getCommonHeaders(false), // FormData는 Content-Type 자동 설정
          body: formData
        });
        
        if (response.ok) {
          return await response.json();
        }
        
        // 403, 404가 아니면 에러 발생
        if (response.status !== 403 && response.status !== 404) {
          const errorText = await response.text();
          throw new Error(`서버 업로드 실패 (${response.status}): ${errorText}`);
        }
      } catch (error) {
        if (error.name !== 'TypeError') {
          throw error;
        }
        // 네트워크 에러면 다음 엔드포인트 시도
      }
    }
    
    throw new Error('사용 가능한 업로드 엔드포인트를 찾을 수 없습니다.');
  }

  // Base64 변환
  static async convertToBase64DataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // 통합 이미지 업로드
  static async uploadImage(file) {
    try {
      // 1. 서버 경유 업로드 시도
      try {
        return await this.uploadImageViaServer(file);
      } catch (serverError) {
        // 서버 업로드 실패 시 Base64 변환으로 대체
      }
      
      // 2. Base64 변환
      const dataUrl = await this.convertToBase64DataURL(file);
      
      // 3. presigned URL 정보도 저장 시도
      try {
        const presignedData = await this.getPresignedUrl(file.name, file.type);
        return {
          url: dataUrl,
          key: presignedData.key,
          isTemporary: true,
          originalFile: file.name
        };
      } catch (presignedError) {
        return {
          url: dataUrl,
          key: `temp_${Date.now()}_${file.name}`,
          isTemporary: true,
          originalFile: file.name
        };
      }
    } catch (error) {
      throw new Error(`이미지 업로드 프로세스 실패: ${error.message}`);
    }
  }

  // === 스터디 관련 메서드 ===

  // 스터디 생성
  static async createStudy(content, images = []) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.STUDY_CREATE}`, {
        method: 'POST',
        headers: this.getCommonHeaders(),
        body: JSON.stringify({ content, images })
      });

      return await this.handleResponse(response, '스터디 작성 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 스터디 조회 (단일)
  static async getStudy(studyId) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.STUDY_GET}/${studyId}`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '스터디 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 스터디 수정
  static async updateStudy(studyId, content, images = []) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.STUDY_UPDATE}`, {
        method: 'PUT',
        headers: this.getCommonHeaders(),
        body: JSON.stringify({ 
          content, 
          images 
        })
      });

      return await this.handleResponse(response, '스터디 수정 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 스터디 삭제
  static async deleteStudy(studyId) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.STUDY_DELETE}/${studyId}`, {
        method: 'DELETE',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '스터디 삭제 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 모든 스터디 조회 (페이징)
  static async getAllStudies(page = 0, size = 30) {
    try {
      const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_ALL}?page=${page}&size=${size}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '스터디 목록 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 개별 스터디 상세 조회
  static async getStudyById(id) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.STUDY_GET}/${id}`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '스터디 상세 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 내 스터디 조회 (작성자별)
  static async getMyStudies(userId, page = 0, size = 30) {
    try {
      const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_ALL}?author=${userId}&page=${page}&size=${size}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '내 스터디 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 카테고리별 스터디 조회
  static async getStudiesByCategory(category, page = 0, size = 30) {
    try {
      const url = `${BASE_URL}${ENDPOINTS.STUDY_GET_ALL}?category=${category}&page=${page}&size=${size}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '카테고리별 스터디 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // === 출석 관련 메서드 ===

  // 출석체크
  static async checkAttendance() {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.ATTENDANCE_CHECK}`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      if (!response.ok) {
        const responseText = await response.text();
        let errorData = {};
        try {
          errorData = JSON.parse(responseText);
        } catch (e) {
          // JSON 파싱 실패 시 기본 처리
        }
        throw new Error(errorData.message || `출석체크 실패 (${response.status}): ${responseText}`);
      }

      // 성공 응답 처리 - 빈 응답 허용
      const responseText = await response.text();
      if (!responseText || responseText.trim() === '') {
        return { success: true, message: '출석체크 완료' };
      }
      
      try {
        return JSON.parse(responseText);
      } catch (parseError) {
        return { success: true, message: '출석체크 완료', rawResponse: responseText };
      }
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 출석 달력 조회
  static async getAttendanceCalendar(month) {
    try {
      const url = month ? 
        `${BASE_URL}${ENDPOINTS.ATTENDANCE_CALENDAR}?month=${month}` : 
        `${BASE_URL}${ENDPOINTS.ATTENDANCE_CALENDAR}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '출석 달력 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }
}

export default StudyService;