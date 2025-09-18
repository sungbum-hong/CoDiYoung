import { CONFIG } from '../constants/config.js';
import { MESSAGES } from '../constants/messages.js';

const BASE_URL = 'http://15.164.125.28:8080';

// API 엔드포인트 상수
const ENDPOINTS = {
  PROJECT_CREATE: '/api/project/create',
  PROJECT_CREATE_ALT: '/api/projects/create', // 대안 엔드포인트
  PROJECT_GET: '/api/project',
  PROJECT_GET_ALL: '/api/project/getAll',
  PROJECT_DELETE: '/api/project/delete',
  PROJECT_GET_PROGRESSING: '/api/project/find/progressing',
  PROJECT_GET_APPLIED: '/api/project/find/applied', // 신청한 프로젝트 조회
  PROJECT_APPLY: '/api/project/apply',
  PROJECT_GET_APPLICANTS: '/api/project/projectApplication', // 신청자 조회
  PROJECT_APPROVE_APPLICANT: '/api/projectApplication', // 신청자 승인
  PROJECT_REJECT_APPLICANT: '/api/projectApplication' // 신청자 거절
};

export class ProjectService {
  // 공통 헤더 생성
  static getCommonHeaders(includeContentType = true) {
    const token = localStorage.getItem('auth_token');
    const headers = {};
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }
    
    headers['Accept'] = 'application/json';
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }

  // 공통 에러 핸들링
  static handleApiError(error, context = '') {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('네트워크 연결 오류가 발생했습니다.');
    }
    throw error;
  }

  // 공통 응답 처리
  static async handleResponse(response, errorMessage = 'API 요청 실패') {
    if (!response.ok) {
      let errorData = {};
      try {
        const errorText = await response.text();
        if (errorText.trim()) {
          errorData = JSON.parse(errorText);
        }
      } catch (e) {
        console.error('JSON 파싱 오류:', e);
        errorData = { message: errorText || '서버 에러가 발생했습니다.' };
      }
      throw new Error(errorData.message || `${errorMessage} (${response.status})`);
    }

    const contentType = response.headers.get('content-type');
    console.log('응답 Content-Type:', contentType);
    console.log('응답 상태:', response.status);
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const text = await response.text();
        console.log('JSON 응답 텍스트:', text);
        if (text.trim() === '') {
          console.log('빈 JSON 응답 - 성공으로 처리');
          return { success: true };
        }
        
        // JSON 형태인지 확인 (첫 글자가 { 또는 [로 시작)
        const trimmedText = text.trim();
        if (trimmedText.startsWith('{') || trimmedText.startsWith('[')) {
          return JSON.parse(text);
        } else {
          // JSON이 아닌 텍스트지만 Content-Type이 JSON인 경우
          console.log('서버가 텍스트를 JSON Content-Type으로 반환:', text);
          return { success: true, message: text };
        }
      } catch (e) {
        console.error('성공 응답 JSON 파싱 오류:', e);
        throw new Error('서버 응답을 파싱할 수 없습니다.');
      }
    } else {
      const text = await response.text();
      console.log('비JSON 응답:', text);
      return text || { success: true };
    }
  }

  // === 프로젝트 관련 메서드 ===

  // 프로젝트 생성
  static async createProject(projectData) {
    try {
      const headers = this.getCommonHeaders();

      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_CREATE}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(projectData),
        mode: 'cors',
        credentials: 'include'
      });

      return await this.handleResponse(response, '프로젝트 생성 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 프로젝트 조회 (단일)
  static async getProject(projectId) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET}/${projectId}`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '프로젝트 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 모든 프로젝트 조회
  static async getAllProjects() {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_ALL}`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '프로젝트 목록 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 프로젝트 삭제
  static async deleteProject(projectId) {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_DELETE}/${projectId}`, {
        method: 'DELETE',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '프로젝트 삭제 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 진행 중인 프로젝트 조회
  static async getProgressingProjects() {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_PROGRESSING}`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '진행 프로젝트 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 신청한 프로젝트 조회
  static async getAppliedProjects() {
    try {
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_APPLIED}`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '신청 프로젝트 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 프로젝트 신청
  static async applyToProject(projectId, applicationData) {
    try {
      const headers = this.getCommonHeaders();

      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_APPLY}/${projectId}`, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(applicationData),
        mode: 'cors',
        credentials: 'include'
      });

      return await this.handleResponse(response, '프로젝트 신청 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  // 프로젝트 신청자 조회
  static async getProjectApplicants(projectId) {
    try {
      console.log("===== 신청자 조회 API 호출 =====");
      console.log(`API 엔드포인트: GET /api/project/projectApplication/${projectId}/applicants`);
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_APPLICANTS}/${projectId}/applicants`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      console.log("===== 신청자 조회 API 응답 =====");
      const result = await this.handleResponse(response, '신청자 조회 실패');
      console.log("신청자 데이터:", result);
      console.log("신청자 수:", Array.isArray(result) ? result.length : 'N/A');
      
      return result;
    } catch (error) {
      console.log("===== 신청자 조회 API 에러 =====");
      console.error("신청자 조회 실패:", error);
      this.handleApiError(error);
    }
  }

  // 신청자 승인
  static async approveApplicant(projectId, userId) {
    try {
      console.log("===== 신청자 승인 API 호출 =====");
      console.log(`API 엔드포인트: POST /api/projectApplication/${projectId}/applicants/${userId}/approve`);
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_APPROVE_APPLICANT}/${projectId}/applicants/${userId}/approve`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      console.log("===== 신청자 승인 API 응답 =====");
      const result = await this.handleResponse(response, '신청자 승인 실패');
      console.log("승인 결과:", result);
      
      return result;
    } catch (error) {
      console.log("===== 신청자 승인 API 에러 =====");
      console.error("신청자 승인 실패:", error);
      this.handleApiError(error);
    }
  }

  // 신청자 거절
  static async rejectApplicant(projectId, userId) {
    try {
      console.log("===== 신청자 거절 API 호출 =====");
      console.log(`API 엔드포인트: POST /api/projectApplication/${projectId}/applicants/${userId}/reject`);
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_REJECT_APPLICANT}/${projectId}/applicants/${userId}/reject`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      console.log("===== 신청자 거절 API 응답 =====");
      const result = await this.handleResponse(response, '신청자 거절 실패');
      console.log("거절 결과:", result);
      
      return result;
    } catch (error) {
      console.log("===== 신청자 거절 API 에러 =====");
      console.error("신청자 거절 실패:", error);
      this.handleApiError(error);
    }
  }
}

export default ProjectService;