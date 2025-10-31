import { ApiUtils } from '../common/api.utils.js';
import { BASE_URL, ENDPOINTS } from './project.constants.js';
import { ImageService } from '../imageService.js';

/**
 * 프로젝트 이미지 업로드 관련 기능
 */
export class ProjectImage {
  /**
   * 이미지 업로드용 Presigned URL 발급
   * @param {string} filename - 파일명
   * @param {string} contentType - 파일 MIME 타입 (예: 'image/jpeg')
   * @returns {Object} { url, key } - 업로드 URL과 이미지 키
   */
  static async getPresignedUploadUrl(filename, contentType) {
    try {
      const params = new URLSearchParams({
        filename: filename,
        contentType: contentType
      });

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_PUT}?${params}`,
        {
          method: 'POST',
          headers: ApiUtils.getCommonHeaders(false) // Content-Type 제외
        }
      );

      const result = await ApiUtils.handleResponse(response, 'Presigned URL 발급 실패');
      return result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * Presigned URL을 사용하여 이미지 직접 업로드
   * @param {string} presignedUrl - 발급받은 presigned URL
   * @param {File} file - 업로드할 파일
   * @param {string} contentType - 파일 MIME 타입
   * @returns {Promise<boolean>} 업로드 성공 여부
   */
  static async uploadImageToS3(presignedUrl, file, contentType) {
    try {
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': contentType
        },
        body: file
      });

      if (!response.ok) {
        throw new Error(`이미지 업로드 실패: ${response.status} ${response.statusText}`);
      }

      return true;
    } catch (error) {
      throw error;
    }
  }

  /**
   * 이미지 업로드 전체 플로우 (Presigned URL 발급 + 업로드)
   * @param {File} file - 업로드할 파일
   * @returns {string} imageKey - 업로드된 이미지의 키
   */
  static async uploadProjectImage(file) {
    return ImageService.uploadImage(file);
  }

  /**
   * 이미지 조회용 URL 가져오기
   * @param {string} imageKey - 이미지 키
   * @returns {string} 조회 가능한 URL
   */
  static async getImageUrl(imageKey) {
    try {
      const params = new URLSearchParams({ key: imageKey });

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_GET}?${params}`,
        {
          method: 'GET',
          headers: ApiUtils.getCommonHeaders(false, false) // 인증 불필요
        }
      );

      const result = await ApiUtils.handleResponse(response, '이미지 URL 발급 실패');
      return result.url || result;
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }
}