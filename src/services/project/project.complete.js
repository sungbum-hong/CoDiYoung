import { ProjectApi } from './project.api.js';
import { ApiUtils } from '../common/api.utils.js';

/**
 * 프로젝트 완료 관련 기능
 */
export class ProjectComplete {
  /**
   * 프로젝트 완료 처리
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Object>} 완료 처리 결과
   */
  static async completeProject(projectId) {
    try {
      const response = await ProjectApi.completeProject(projectId);
      const result = await ApiUtils.handleResponse(response, '프로젝트 완료 처리 실패', 'ProjectCompleteResponse');
      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 프로젝트 취소 (개설자 전용)
   * 팀원이 1명이라도 있으면 취소 불가능
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Object>} 취소 결과
   */
  static async deleteProjectByLeader(projectId) {
    try {
      // 유효성 검사
      if (!projectId || typeof projectId !== 'number') {
        throw new Error('유효하지 않은 프로젝트 ID입니다.');
      }

      const response = await ProjectApi.deleteProjectByLeader(projectId);

      return await ApiUtils.handleResponse(response, '프로젝트 취소 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }
}