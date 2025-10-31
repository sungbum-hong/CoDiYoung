import { ProjectApi } from './project.api.js';
import { ProjectUtils } from './project.utils.js';
import { ApiUtils } from '../common/api.utils.js';
import { ImageService } from '../imageService.js';

/**
 * 프로젝트 생성 관련 기능
 */
export class ProjectCreate {
  /**
   * 프로젝트 생성 (이미지 포함)
   * @param {Object} projectData - 프로젝트 데이터
   * @param {File} [imageFile] - 프로젝트 이미지 파일 (선택사항)
   * @returns {Promise<Object>} 생성된 프로젝트 정보
   */
  static async createProject(projectData, imageFile = null) {
    try {
      // 1. 데이터 유효성 검사
      ProjectUtils.validateProjectData(projectData);

      // 2. 이미지 파일 검증 (있는 경우)
      if (imageFile) {
        ProjectUtils.validateImageFile(imageFile);
      }

      let finalProjectData = { ...projectData };

      // 3. 이미지가 있으면 먼저 업로드
      if (imageFile) {
        const imageKey = await ImageService.uploadImage(imageFile);
        finalProjectData.imageKey = imageKey;
      }

      // 4. 프로젝트 생성 API 호출
      const response = await ProjectApi.createProject(finalProjectData);

      // 5. 응답 처리
      return await ApiUtils.handleResponse(response, '프로젝트 생성 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }
}