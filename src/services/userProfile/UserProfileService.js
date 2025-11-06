import { ApiUtils } from '../common/api.utils.js';
import { ValidationUtils } from '../common/validation.utils.js';
import { BASE_URL, ENDPOINTS, USER_PROFILE_CONSTANTS } from './userProfile.constants.js';
import { ImageService } from '../imageService.js';

/**
 * 사용자 프로필 관련 서비스 클래스
 * - 프로필 정보 조회/수정
 * - 이미지 업로드/변경
 * - 계정 설정 관리
 */
export class UserProfileService {
  // === 프로필 조회 ===

  /**
   * 마이페이지 정보 조회
   * @returns {Promise<Object>} { imageKey, nickName, email }
   */
  static async getMyProfile() {
    try {
      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions('GET', headers);

      const response = await fetch(`${BASE_URL}${ENDPOINTS.MYPAGE_GET}`, options);

      return await ApiUtils.handleResponse(response, '프로필 조회 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  // === 프로필 수정 ===

  /**
   * 닉네임 변경
   * @param {Object} nicknameData - { nickname: string }
   * @returns {Promise<Object>} 변경 결과
   */
  static async updateNickname(nicknameData) {
    try {
      const { nickname } = nicknameData;
      // 유효성 검사
      ValidationUtils.validateStringLength(
        nickname,
        '닉네임',
        USER_PROFILE_CONSTANTS.MAX_NICKNAME_LENGTH,
        USER_PROFILE_CONSTANTS.MIN_NICKNAME_LENGTH
      );

      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions('PATCH', headers, { nickname });

      const response = await fetch(`${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_NICKNAME}`, options);

      return await ApiUtils.handleResponse(response, '닉네임 변경 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 이메일 변경
   * @param {string} newEmail - 새로운 이메일
   * @returns {Promise<Object>} 변경 결과
   */
  static async updateEmail(newEmail) {
    try {
      // 유효성 검사
      ValidationUtils.validateEmail(newEmail);

      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions('PATCH', headers, { email: newEmail });

      const response = await fetch(`${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_EMAIL}`, options);

      return await ApiUtils.handleResponse(response, '이메일 변경 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 비밀번호 변경
   * @param {Object} passwordData - { currentPassword: string, newPassword: string }
   * @returns {Promise<Object>} 변경 결과
   */
  static async updatePassword(passwordData) {
    try {
      const { currentPassword, newPassword } = passwordData;
      // 유효성 검사
      ValidationUtils.validateStringLength(
        currentPassword,
        '현재 비밀번호',
        USER_PROFILE_CONSTANTS.MAX_PASSWORD_LENGTH,
        USER_PROFILE_CONSTANTS.MIN_PASSWORD_LENGTH
      );

      ValidationUtils.validateStringLength(
        newPassword,
        '새 비밀번호',
        USER_PROFILE_CONSTANTS.MAX_PASSWORD_LENGTH,
        USER_PROFILE_CONSTANTS.MIN_PASSWORD_LENGTH
      );

      if (currentPassword === newPassword) {
        throw new Error('새 비밀번호는 현재 비밀번호와 달라야 합니다.');
      }

      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions('PATCH', headers, {
        currentPassword,
        newPassword
      });

      const response = await fetch(`${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_PASSWORD}`, options);

      return await ApiUtils.handleResponse(response, '비밀번호 변경 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 프로필 이미지 변경
   * @param {File} imageFile - 새로운 프로필 이미지 파일
   * @returns {Promise<Object>} 변경 결과
   */
  static async updateProfileImage(imageFile) {
    try {
      // 이미지 파일 유효성 검사
      ValidationUtils.validateImageFile(
        imageFile,
        USER_PROFILE_CONSTANTS.MAX_IMAGE_SIZE,
        USER_PROFILE_CONSTANTS.ALLOWED_IMAGE_TYPES
      );

      // 1. 이미지 업로드
      const imageKey = await ImageService.uploadImage(imageFile);

      // 2. 프로필 이미지 키 업데이트
      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions('PATCH', headers, { imageKey });

      const response = await fetch(`${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_IMAGE}`, options);

      return await ApiUtils.handleResponse(response, '프로필 이미지 변경 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 프로필 정보 일괄 업데이트
   * @param {Object} profileData - 업데이트할 프로필 데이터
   * @param {string} [profileData.nickName] - 닉네임
   * @param {string} [profileData.email] - 이메일
   * @param {File} [imageFile] - 프로필 이미지 파일
   * @returns {Promise<Object>} 업데이트 결과
   */
  static async updateProfile(profileData, imageFile = null) {
    try {
      const updatePromises = [];

      // 닉네임 업데이트
      if (profileData.nickName) {
        updatePromises.push(this.updateNickname(profileData.nickName));
      }

      // 이메일 업데이트
      if (profileData.email) {
        updatePromises.push(this.updateEmail(profileData.email));
      }

      // 이미지 업데이트
      if (imageFile) {
        updatePromises.push(this.updateProfileImage(imageFile));
      }

      // 모든 업데이트 병렬 실행
      const results = await Promise.allSettled(updatePromises);

      // 결과 분석
      const successes = results.filter(result => result.status === 'fulfilled');
      const failures = results.filter(result => result.status === 'rejected');

      // failures.length > 0 이면 일부 업데이트 실패

      return {
        success: successes.length > 0,
        successCount: successes.length,
        failureCount: failures.length,
        results: results
      };
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  // === 이미지 관련 헬퍼 메서드 ===

  /**
   * 프로필 이미지 URL 가져오기
   * @param {string} imageKey - 이미지 키
   * @returns {Promise<string>} 이미지 URL
   */
  static async getProfileImageUrl(imageKey) {
    try {
      return await ImageService.getImageUrl(imageKey);
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 프로필 이미지 삭제 (기본 이미지로 변경)
   * @returns {Promise<Object>} 삭제 결과
   */
  static async deleteProfileImage() {
    try {
      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions('PUT', headers, { imageKey: null });

      const response = await fetch(`${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_IMAGE}`, options);

      return await ApiUtils.handleResponse(response, '프로필 이미지 삭제 실패');
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  // === 유틸리티 메서드 ===

  /**
   * 프로필 데이터 유효성 검사
   * @param {Object} profileData - 검사할 프로필 데이터
   * @throws {Error} 유효성 검사 실패 시 에러
   */
  static validateProfileData(profileData) {
    if (profileData.nickName) {
      ValidationUtils.validateStringLength(
        profileData.nickName,
        '닉네임',
        USER_PROFILE_CONSTANTS.MAX_NICKNAME_LENGTH,
        USER_PROFILE_CONSTANTS.MIN_NICKNAME_LENGTH
      );
    }

    if (profileData.email) {
      ValidationUtils.validateEmail(profileData.email);
    }

    return true;
  }

  /**
   * 비밀번호 강도 검사
   * @param {string} password - 검사할 비밀번호
   * @returns {Object} { score: number, feedback: string[] }
   */
  static checkPasswordStrength(password) {
    const feedback = [];
    let score = 0;

    // 길이 검사
    if (password.length >= USER_PROFILE_CONSTANTS.MIN_PASSWORD_LENGTH) {
      score += 1;
    } else {
      feedback.push(`최소 ${USER_PROFILE_CONSTANTS.MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`);
    }

    // 대문자 포함
    if (/[A-Z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('대문자를 포함해야 합니다.');
    }

    // 소문자 포함
    if (/[a-z]/.test(password)) {
      score += 1;
    } else {
      feedback.push('소문자를 포함해야 합니다.');
    }

    // 숫자 포함
    if (/\d/.test(password)) {
      score += 1;
    } else {
      feedback.push('숫자를 포함해야 합니다.');
    }

    // 특수문자 포함
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score += 1;
    } else {
      feedback.push('특수문자를 포함해야 합니다.');
    }

    return {
      score,
      maxScore: 5,
      strength: score <= 2 ? '약함' : score <= 3 ? '보통' : score <= 4 ? '강함' : '매우 강함',
      feedback
    };
  }
}

export default UserProfileService;