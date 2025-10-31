import { ProjectApi } from './project.api.js';
import { ApiUtils } from '../common/api.utils.js';

/**
 * 프로젝트 조회 관련 기능
 */
export class ProjectGet {
  /**
   * 단일 프로젝트 조회 (OneProjectResponse 스키마)
   * @param {number} projectId - 프로젝트 ID
   * @returns {Object} OneProjectResponse - content, leaderImage, memberBriefs, techs(배열) 포함
   */
  static async getProject(projectId) {
    try {
      const response = await ProjectApi.getProject(projectId);
      const result = await ApiUtils.handleResponse(response, '프로젝트 조회 실패');

      // OpenAPI 스키마: OneProjectResponse
      // 필드: id, title, content, slogan, leaderImage, memberBriefs, techs(배열)
      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 모든 프로젝트 조회 (AllProjectResponse 스키마, 페이징 지원)
   * @param {Object} options - 페이징 옵션
   * @param {number} options.page - 페이지 번호 (0부터 시작)
   * @param {number} options.size - 페이지 크기
   * @param {string[]} options.sort - 정렬 조건 배열
   * @returns {Object} AllProjectResponse - id, slogan, title, imageKey, createdAt 포함
   */
  static async getAllProjects(options = {}) {
    try {
      const {
        page = 0,
        size = 10,
        sort = ['createdAt,DESC']
      } = options;

      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('size', size.toString());

      // 정렬 조건 추가
      sort.forEach(sortParam => {
        params.append('sort', sortParam);
      });

      const response = await ProjectApi.getAllProjects(Object.fromEntries(params));
      const result = await ApiUtils.handleResponse(response, '프로젝트 목록 조회 실패');

      // OpenAPI 스키마: AllProjectResponse
      // 필드: id, slogan, title, imageKey, createdAt
      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 진행 중인 프로젝트 조회
   * @returns {Promise<Object>} 진행 중인 프로젝트 목록
   */
  static async getProgressingProjects() {
    try {
      const response = await ProjectApi.getProgressingProjects();
      const result = await ApiUtils.handleResponse(response, '진행 프로젝트 조회 실패');
      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 신청한 프로젝트 조회
   * @returns {Promise<Object>} 신청한 프로젝트 목록
   */
  static async getAppliedProjects() {
    try {
      const response = await ProjectApi.getAppliedProjects();
      return await ApiUtils.handleResponse(response, '신청 프로젝트 조회 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 완료된 프로젝트 조회 (페이지네이션 지원)
   * @param {Object} options - 페이징 옵션
   * @param {number} options.page - 페이지 번호 (0부터 시작)
   * @param {number} options.size - 페이지 크기
   * @param {string[]} options.sort - 정렬 조건 배열
   * @returns {Object} 완료된 프로젝트 목록 (페이지네이션 포함)
   */
  static async getCompletedProjects(options = {}) {
    try {
      const {
        page = 0,
        size = 10,
        sort = ['createdAt,DESC']
      } = options;

      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('size', size.toString());

      // 정렬 조건 추가
      sort.forEach(sortParam => {
        params.append('sort', sortParam);
      });

      const response = await ProjectApi.getCompletedProjects(Object.fromEntries(params));
      const result = await ApiUtils.handleResponse(response, '완료된 프로젝트 조회 실패');

      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 프로젝트 질문 조회
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Object>} 프로젝트 질문 목록
   */
  static async getProjectQuestions(projectId) {
    try {
      const response = await ProjectApi.getProjectQuestions(projectId);
      const result = await ApiUtils.handleResponse(response, '프로젝트 질문 조회 실패');

      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }
}