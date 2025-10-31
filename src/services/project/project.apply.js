import { ProjectApi } from './project.api.js';
import { ProjectUtils } from './project.utils.js';
import { ApiUtils } from '../common/api.utils.js';

/**
 * 프로젝트 신청 관련 기능
 */
export class ProjectApply {
  /**
   * 프로젝트 신청
   * @param {number} projectId - 프로젝트 ID
   * @param {Object} applicationData - 신청 데이터
   * @returns {Promise<Object>} 신청 결과
   */
  static async applyToProject(projectId, applicationData) {
    try {
      // 1. 신청 데이터 유효성 검사
      ProjectUtils.validateApplicationData(applicationData);

      // 2. techs 필드 정규화 (배열로) - API 명세서에 따라 배열이어야 함
      const normalizedData = {
        ...applicationData,
        techs: ProjectUtils.normalizeTechsToArray(applicationData.techs)
      };

      // URL 파라미터에 이미 projectId가 있으므로 body에서 제거
      if (normalizedData.projectId !== undefined) {
        delete normalizedData.projectId;
      }

      const requestBody = JSON.stringify(normalizedData, null, 0);

      // JSON이 올바르게 파싱되는지 검증
      try {
        JSON.parse(requestBody);
      } catch (e) {
        throw new Error('JSON 직렬화 실패');
      }

      // 3. API 호출
      const response = await ProjectApi.applyToProject(projectId, normalizedData);

      // 4. 응답 처리
      const result = await ApiUtils.handleResponse(response, '프로젝트 신청 실패');
      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 프로젝트 신청 취소
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Object>} 취소 결과
   */
  static async cancelProjectApplication(projectId) {
    try {
      const response = await ProjectApi.cancelProjectApplication(projectId);
      return await ApiUtils.handleResponse(response, '프로젝트 신청 취소 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 프로젝트 신청자 조회
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Object>} 신청자 목록
   */
  static async getProjectApplicants(projectId) {
    try {
      const response = await ProjectApi.getProjectApplicants(projectId);
      const result = await ApiUtils.handleResponse(response, '신청자 조회 실패');

      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 신청자 승인
   * @param {number} projectId - 프로젝트 ID
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 승인 결과
   */
  static async approveApplicant(projectId, userId) {
    try {
      const response = await ProjectApi.approveApplicant(projectId, userId);
      const result = await ApiUtils.handleResponse(response, '신청자 승인 실패');

      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 신청자 거절
   * @param {number} projectId - 프로젝트 ID
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 거절 결과
   */
  static async rejectApplicant(projectId, userId) {
    try {
      const response = await ProjectApi.rejectApplicant(projectId, userId);
      const result = await ApiUtils.handleResponse(response, '신청자 거절 실패');

      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }
}