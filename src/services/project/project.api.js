import { ApiUtils } from '../common/api.utils.js';
import { BASE_URL, ENDPOINTS } from './project.constants.js';

/**
 * 프로젝트 관련 API 호출 함수들
 * fetch 요청을 담당하는 순수 함수들
 */
export class ProjectApi {
  /**
   * 프로젝트 생성 API 호출
   * @param {Object} projectData - 프로젝트 데이터
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async createProject(projectData) {
    const url = `${BASE_URL}${ENDPOINTS.PROJECT_CREATE}`;
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('POST', headers, projectData);

    return await fetch(url, options);
  }

  /**
   * 단일 프로젝트 조회 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async getProject(projectId) {
    const url = `${BASE_URL}${ENDPOINTS.PROJECT_GET}/${projectId}`;
    const headers = ApiUtils.getCommonHeaders(true, false); // 인증 선택사항
    const options = ApiUtils.createRequestOptions('GET', headers);
    const response = await fetch(url, options);
    return response;
  }

  /**
   * 모든 프로젝트 조회 API 호출
   * @param {Object} params - URL 파라미터
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async getAllProjects(params) {
    const headers = ApiUtils.getCommonHeaders(true, false); // 인증 선택사항
    const options = ApiUtils.createRequestOptions('GET', headers);
    const queryString = new URLSearchParams(params).toString();

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_ALL}?${queryString}`, options);
  }

  /**
   * 진행 중인 프로젝트 조회 API 호출
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async getProgressingProjects() {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('GET', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_PROGRESSING}`, options);
  }

  /**
   * 신청한 프로젝트 조회 API 호출
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async getAppliedProjects() {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('GET', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_APPLIED}`, options);
  }

  /**
   * 완료된 프로젝트 조회 API 호출
   * @param {Object} params - URL 파라미터
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async getCompletedProjects(params) {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('GET', headers);
    const queryString = new URLSearchParams(params).toString();

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_COMPLETED}?${queryString}`, options);
  }

  /**
   * 프로젝트 신청 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @param {Object} applicationData - 신청 데이터
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async applyToProject(projectId, applicationData) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': ApiUtils.getCommonHeaders()['Authorization']
    };

    const options = {
      method: 'POST',
      headers,
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(applicationData)
    };

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_APPLY}/${projectId}`, options);
  }

  /**
   * 프로젝트 신청 취소 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async cancelProjectApplication(projectId) {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('POST', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_CANCEL}/${projectId}`, options);
  }

  /**
   * 프로젝트 완료 처리 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async completeProject(projectId) {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('POST', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_COMPLETE}/${projectId}`, options);
  }

  /**
   * 프로젝트 신청자 조회 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async getProjectApplicants(projectId) {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('GET', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_APPLICANTS}/${projectId}/applicants`, options);
  }

  /**
   * 신청자 승인 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async approveApplicant(projectId, userId) {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('POST', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_APPROVE_APPLICANT}/${projectId}/applicants/${userId}/approve`, options);
  }

  /**
   * 신청자 거절 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async rejectApplicant(projectId, userId) {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('POST', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_REJECT_APPLICANT}/${projectId}/applicants/${userId}/reject`, options);
  }

  /**
   * 프로젝트 질문 조회 API 호출
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async getProjectQuestions(projectId) {
    const headers = ApiUtils.getCommonHeaders(true, false); // 인증 선택사항
    const options = ApiUtils.createRequestOptions('GET', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_QUESTIONS}/${projectId}`, options);
  }

  /**
   * 프로젝트 취소 (개설자 전용) API 호출
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Response>} Fetch Response 객체
   */
  static async deleteProjectByLeader(projectId) {
    const headers = ApiUtils.getCommonHeaders();
    const options = ApiUtils.createRequestOptions('PUT', headers);

    return await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_DELETE_BY_LEADER}/${projectId}`, options);
  }
}