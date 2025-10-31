import { ProjectCreate } from './project.create.js';
import { ProjectGet } from './project.get.js';
import { ProjectApply } from './project.apply.js';
import { ProjectComplete } from './project.complete.js';
import { ProjectImage } from './project.image.js';
import { ProjectUtils } from './project.utils.js';

/**
 * 프로젝트 서비스 메인 클래스
 * 하위 모듈들을 통합하여 외부에 일관된 인터페이스 제공
 */
export class ProjectService {
  // === 프로젝트 생성 ===
  static async createProject(projectData, imageFile = null) {
    return ProjectCreate.createProject(projectData, imageFile);
  }

  // === 프로젝트 조회 ===
  static async getProject(projectId) {
    return ProjectGet.getProject(projectId);
  }

  static async getAllProjects(options = {}) {
    return ProjectGet.getAllProjects(options);
  }

  static async getProgressingProjects() {
    return ProjectGet.getProgressingProjects();
  }

  static async getAppliedProjects() {
    return ProjectGet.getAppliedProjects();
  }

  static async getCompletedProjects(options = {}) {
    return ProjectGet.getCompletedProjects(options);
  }

  static async getProjectQuestions(projectId) {
    return ProjectGet.getProjectQuestions(projectId);
  }

  // === 프로젝트 신청 관리 ===
  static async applyToProject(projectId, applicationData) {
    return ProjectApply.applyToProject(projectId, applicationData);
  }

  static async cancelProjectApplication(projectId) {
    return ProjectApply.cancelProjectApplication(projectId);
  }

  static async getProjectApplicants(projectId) {
    return ProjectApply.getProjectApplicants(projectId);
  }

  static async approveApplicant(projectId, userId) {
    return ProjectApply.approveApplicant(projectId, userId);
  }

  static async rejectApplicant(projectId, userId) {
    return ProjectApply.rejectApplicant(projectId, userId);
  }

  // === 프로젝트 완료 ===
  static async completeProject(projectId) {
    return ProjectComplete.completeProject(projectId);
  }

  static async deleteProjectByLeader(projectId) {
    return ProjectComplete.deleteProjectByLeader(projectId);
  }

  // === 이미지 관리 ===
  static async getPresignedUploadUrl(filename, contentType) {
    return ProjectImage.getPresignedUploadUrl(filename, contentType);
  }

  static async uploadImageToS3(presignedUrl, file, contentType) {
    return ProjectImage.uploadImageToS3(presignedUrl, file, contentType);
  }

  static async uploadProjectImage(file) {
    return ProjectImage.uploadProjectImage(file);
  }

  static async getImageUrl(imageKey) {
    return ProjectImage.getImageUrl(imageKey);
  }

  // === 유틸리티 메서드 (하위 호환성) ===
  static normalizeTechsToString(techs) {
    return ProjectUtils.normalizeTechsToString(techs);
  }

  static normalizeTechsToArray(techs) {
    return ProjectUtils.normalizeTechsToArray(techs);
  }

  static validateImageFile(file, maxSize, allowedTypes) {
    return ProjectUtils.validateImageFile(file, maxSize, allowedTypes);
  }

  static validateProjectData(projectData) {
    return ProjectUtils.validateProjectData(projectData);
  }

  static validateApplicationData(applicationData) {
    return ProjectUtils.validateApplicationData(applicationData);
  }

  // === 레거시 지원 메서드 ===
  // 기존 코드와의 호환성을 위해 유지
  static getCommonHeaders(includeContentType = true, requireAuth = true) {
    // 이 메서드는 deprecated. ApiUtils.getCommonHeaders 사용 권장
    const { ApiUtils } = require('../common/api.utils.js');
    return ApiUtils.getCommonHeaders(includeContentType, requireAuth);
  }

  static handleApiError(error, context = '') {
    // 이 메서드는 deprecated. ApiUtils.handleApiError 사용 권장
    const { ApiUtils } = require('../common/api.utils.js');
    return ApiUtils.handleApiError(error, context);
  }

  static async handleResponse(response, errorMessage = 'API 요청 실패', expectedSchema = null) {
    // 이 메서드는 deprecated. ApiUtils.handleResponse 사용 권장
    const { ApiUtils } = require('../common/api.utils.js');
    return ApiUtils.handleResponse(response, errorMessage, expectedSchema);
  }
}

export default ProjectService;