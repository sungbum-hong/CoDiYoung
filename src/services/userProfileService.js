import { MESSAGES } from '../constants/messages.js';
import { AuthService } from './authService.js';
import { ImageService } from './imageService.js';

const BASE_URL = 'http://15.164.125.28:8080';

// 프로필 관련 API 엔드포인트
const ENDPOINTS = {
  MYPAGE_GET: '/api/mypage',
  MYPAGE_UPDATE_NICKNAME: '/api/mypage/nickname',
  MYPAGE_UPDATE_EMAIL: '/api/mypage/email',
  MYPAGE_UPDATE_PASSWORD: '/api/mypage/password',
  MYPAGE_UPDATE_IMAGE: '/api/mypage/image',
  
  // 이미지 관련 (StudyService와 공통 사용)
  STORAGE_PRESIGN_PUT: '/api/storage/presign-put',
  STORAGE_PRESIGN: '/storage/presign',                    // 대체 API
  STORAGE_PRESIGN_GET: '/api/storage/presign-get',
  STORAGE_PUBLIC_URL: '/api/storage/public-url'
};

/**
 * 사용자 프로필 관련 서비스 클래스
 * - 프로필 정보 조회/수정
 * - 이미지 업로드/변경
 * - 계정 설정 관리
 */
export class UserProfileService {
  // 공통 헤더 생성 (AuthService 의존)
  static getCommonHeaders(includeContentType = true, requireAuth = true) {
    const headers = {};

    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
      headers['Accept'] = 'application/json';
    }

    if (requireAuth) {
      try {
        const token = AuthService.validateTokenBeforeRequest(true);
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        throw error;
      }
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
        if (errorText) {
          errorData = JSON.parse(errorText);
        }
      } catch (e) {
        // JSON 파싱 실패시 기본 에러 메시지 사용
      }

      const message = errorData.message || `${errorMessage} (${response.status})`;
      throw new Error(message);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      const text = await response.text();
      return text || { success: true };
    }
  }

  // === 프로필 조회 ===

  /**
   * 마이페이지 정보 조회
   * @returns {Promise<Object>} { imageKey, nickName, email }
   */
  static async getMyProfile() {
    try {
      const url = `${BASE_URL}${ENDPOINTS.MYPAGE_GET}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders(false) // Content-Type 불필요
      });

      return await this.handleResponse(response, '프로필 조회 실패');
    } catch (error) {
      this.handleApiError(error, 'getMyProfile');
    }
  }

  // === 프로필 수정 ===

  /**
   * 닉네임 변경
   * @param {Object} data - { nickname: string }
   * @returns {Promise<Object>} 변경 결과
   */
  static async updateNickname(data) {
    if (!data.nickname || typeof data.nickname !== 'string') {
      throw new Error('유효한 닉네임을 입력해주세요.');
    }

    if (data.nickname.trim().length < 2) {
      throw new Error('닉네임은 2자 이상 입력해주세요.');
    }

    if (data.nickname.length > 20) {
      throw new Error('닉네임은 20자 이하로 입력해주세요.');
    }

    try {
      const url = `${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_NICKNAME}`;
      const response = await fetch(url, {
        method: 'PATCH',
        headers: this.getCommonHeaders(),
        body: JSON.stringify({ nickname: data.nickname.trim() })
      });

      return await this.handleResponse(response, '닉네임 변경 실패');
    } catch (error) {
      this.handleApiError(error, 'updateNickname');
    }
  }

  /**
   * 이메일 변경
   * @param {Object} data - { email: string }
   * @returns {Promise<Object>} 변경 결과
   */
  static async updateEmail(data) {
    if (!data.email || typeof data.email !== 'string') {
      throw new Error('유효한 이메일을 입력해주세요.');
    }

    // 기본적인 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      throw new Error('올바른 이메일 형식이 아닙니다.');
    }

    try {
      const url = `${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_EMAIL}`;
      const response = await fetch(url, {
        method: 'PATCH',
        headers: this.getCommonHeaders(),
        body: JSON.stringify({ email: data.email.trim() })
      });

      return await this.handleResponse(response, '이메일 변경 실패');
    } catch (error) {
      this.handleApiError(error, 'updateEmail');
    }
  }

  /**
   * 비밀번호 변경
   * @param {Object} data - { currentPassword: string, newPassword: string }
   * @returns {Promise<Object>} 변경 결과
   */
  static async updatePassword(data) {
    if (!data.currentPassword || typeof data.currentPassword !== 'string') {
      throw new Error('현재 비밀번호를 입력해주세요.');
    }

    if (!data.newPassword || typeof data.newPassword !== 'string') {
      throw new Error('새 비밀번호를 입력해주세요.');
    }

    if (data.newPassword.length < 8) {
      throw new Error('새 비밀번호는 8자 이상이어야 합니다.');
    }

    if (data.currentPassword === data.newPassword) {
      throw new Error('현재 비밀번호와 새 비밀번호가 동일합니다.');
    }

    try {
      const url = `${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_PASSWORD}`;
      const response = await fetch(url, {
        method: 'PATCH',
        headers: this.getCommonHeaders(),
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword
        })
      });

      return await this.handleResponse(response, '비밀번호 변경 실패');
    } catch (error) {
      this.handleApiError(error, 'updatePassword');
    }
  }

  /**
   * 프로필 이미지 변경
   * @param {Object} data - { imageKey: string }
   * @returns {Promise<Object>} 변경 결과
   */
  static async updateProfileImage(data) {
    if (!data.imageKey || typeof data.imageKey !== 'string') {
      throw new Error('유효한 이미지 키를 입력해주세요.');
    }

    try {
      const url = `${BASE_URL}${ENDPOINTS.MYPAGE_UPDATE_IMAGE}`;
      const response = await fetch(url, {
        method: 'PATCH',
        headers: this.getCommonHeaders(),
        body: JSON.stringify({ imageKey: data.imageKey.trim() })
      });

      return await this.handleResponse(response, '프로필 이미지 변경 실패');
    } catch (error) {
      this.handleApiError(error, 'updateProfileImage');
    }
  }

  // === 이미지 업로드 관련 (StudyService와 공통 로직) ===

  /**
   * Presigned PUT URL 발급 (기존 방식)
   * @param {string} filename - 파일명 
   * @param {string} contentType - 컨텐츠 타입
   * @returns {Promise<Object>} { key, uploadUrl, expiresIn }
   */
  static async getPresignedPutUrl(filename, contentType) {
    try {
      // 쿼리 파라미터로 전송 (API 스펙에 맞게)
      const params = new URLSearchParams({
        filename: filename,
        contentType: contentType
      });
      
      const url = `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_PUT}?${params}`;
      console.log('Presigned PUT URL 요청:', url);
      
      const response = await fetch(url, {
        method: 'POST',
        headers: this.getCommonHeaders(false, true) // Content-Type 제거, 인증만 포함
      });

      return await this.handleResponse(response, 'Presigned PUT URL 발급 실패');
    } catch (error) {
      this.handleApiError(error, 'getPresignedPutUrl');
    }
  }

  /**
   * Presigned URL 발급 (대체 API - /storage/presign)
   * @param {string} originalFilename - 원본 파일명
   * @param {string} contentType - 컨텐츠 타입
   * @returns {Promise<Object>} { key, uploadUrl, expiresIn }
   */
  static async getPresignedUrl(originalFilename, contentType) {
    try {
      console.log('=== 대체 Presigned URL 발급 시작 ===');
      console.log('API:', `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN}`);
      console.log('Request Body:', { originalFilename, contentType });
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN}`, {
        method: 'POST',
        headers: this.getCommonHeaders(), // JSON Content-Type 포함
        body: JSON.stringify({ originalFilename, contentType })
      });

      const result = await this.handleResponse(response, '대체 Presigned URL 발급 실패');
      console.log('대체 API 응답:', result);
      return result;
    } catch (error) {
      console.error('대체 Presigned URL 발급 실패:', error);
      this.handleApiError(error, 'getPresignedUrl');
    }
  }

  /**
   * S3 직접 업로드
   * @param {string} presignedUrl - Presigned URL
   * @param {File} file - 업로드할 파일
   * @returns {Promise<boolean>} 업로드 성공 여부
   */
  static async uploadImageToS3(presignedUrl, file) {
    return ImageService.uploadToStorage(presignedUrl, file);
  }

  // 이전 버전 (주석 처리)
  static async _uploadImageToS3_old(presignedUrl, file) {
    try {
      console.log('=== S3 업로드 시작 ===');
      console.log('Presigned URL:', presignedUrl);
      console.log('파일 타입:', file.type);
      console.log('파일 크기:', file.size);

      // presigned URL 업로드 방식 시도 (PUT이 표준)
      const uploadOptions = [
        // 옵션 1: PUT + Content-Type 헤더 (S3 표준 방식)
        {
          method: 'PUT',
          body: file,
          headers: { 
            'Content-Type': file.type 
          },
          mode: 'cors',
          credentials: 'omit'
        },
        // 옵션 2: PUT 헤더 없이
        {
          method: 'PUT',
          body: file,
          mode: 'cors',
          credentials: 'omit'
        },
        // 옵션 3: POST 방식 시도
        {
          method: 'POST',
          body: file,
          headers: { 
            'Content-Type': file.type 
          },
          mode: 'cors',
          credentials: 'omit'
        }
      ];

      let lastError;
      
      for (let i = 0; i < uploadOptions.length; i++) {
        try {
          const option = uploadOptions[i];
          console.log(`업로드 시도 ${i + 1}:`, option);
          console.log(`✅ 업로드 시 Content-Type:`, option.headers?.['Content-Type'] || 'auto-detected');
          console.log(`📤 전송할 헤더들:`, option.headers || '헤더 없음');
          console.log(`📤 요청 방식:`, option.method);
          console.log(`📤 요청 URL:`, presignedUrl);
          
          const response = await fetch(presignedUrl, option);
          
          console.log('응답 상태:', response.status);
          console.log('응답 타입:', response.type);
          
          // no-cors 모드에서는 response.ok를 확인할 수 없음
          if (uploadOptions[i].mode === 'no-cors') {
            console.log('no-cors 모드 업로드 완료 (상태 확인 불가)');
            return true;
          }
          
          if (!response.ok) {
            const errorText = await response.text().catch(() => '');
            throw new Error(`업로드 실패 (${response.status}): ${errorText || response.statusText}`);
          }

          console.log('업로드 성공!');
          return true;
          
        } catch (error) {
          console.log(`시도 ${i + 1} 실패:`, error.message);
          lastError = error;
          
          // CORS 에러가 아니면 다음 시도 안 함
          if (!error.message.includes('CORS') && !error.message.includes('NetworkError') && !error.message.includes('Failed to fetch')) {
            break;
          }
        }
      }

      throw lastError;
      
    } catch (error) {
      console.error('모든 업로드 시도 실패:', error);
      
      if (error.message.includes('CORS') || error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
        throw new Error('CORS 정책으로 인해 이미지 업로드에 실패했습니다. 백엔드 팀에 CORS 설정 확인을 요청하세요.');
      }
      throw new Error(`이미지 업로드 실패: ${error.message}`);
    }
  }

  /**
   * 완전한 이미지 업로드 프로세스 (파일 → S3 업로드 → 키 반환)
   * @param {File} file - 업로드할 이미지 파일
   * @returns {Promise<string>} 업로드된 이미지의 키
   */
  static async uploadImageFile(file) {
    try {
      console.log('=== 이미지 업로드 프로세스 시작 ===');
      console.log('파일 정보:', { name: file.name, size: file.size, type: file.type });
      console.log('✅ Presigned URL 요청할 contentType:', file.type);

      // 1. Presigned URL 발급 (/api/storage/presign-put 사용)
      const presignResponse = await fetch(`${BASE_URL}/api/storage/presign-put?filename=${encodeURIComponent(file.name)}&contentType=${encodeURIComponent(file.type)}`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });
      
      if (!presignResponse.ok) {
        throw new Error(`Presigned URL 발급 실패: ${presignResponse.status} ${presignResponse.statusText}`);
      }
      
      const presignedData = await presignResponse.json();
      
      console.log('=== Presigned URL 응답 분석 ===');
      console.log('전체 응답:', presignedData);
      console.log('응답 타입:', typeof presignedData);
      console.log('응답 키들:', presignedData ? Object.keys(presignedData) : 'null/undefined');
      
      // 응답 구조에 따른 데이터 추출 (StorageApiTest.jsx와 동일한 방식)
      let uploadUrl, imageKey;
      
      if (presignedData.url) {
        uploadUrl = presignedData.url;
        imageKey = presignedData.key;
      } else if (presignedData.uploadUrl) {
        uploadUrl = presignedData.uploadUrl;
        imageKey = presignedData.key;
      } else {
        console.log('응답 구조를 파악할 수 없음:', JSON.stringify(presignedData, null, 2));
        throw new Error('uploadUrl을 찾을 수 없습니다');
      }
      
      if (!uploadUrl || !imageKey) {
        throw new Error(`Presigned URL 또는 이미지 키를 받지 못했습니다. 응답: ${JSON.stringify(presignedData)}`);
      }
      
      console.log('추출된 데이터:', { uploadUrl: uploadUrl ? 'OK' : 'MISSING', imageKey });
      console.log('실제 presigned URL:', uploadUrl);
      
      // CORS 테스트: presigned URL에 직접 접근 테스트
      console.log('=== CORS 테스트: presigned URL 직접 접근 ===');
      try {
        const testResponse = await fetch(uploadUrl, {
          method: 'HEAD',
          mode: 'cors'
        });
        console.log('HEAD 요청 성공:', testResponse.status, testResponse.statusText);
      } catch (corsError) {
        console.log('HEAD 요청 CORS 에러:', corsError.message);
      }
      
      // 2. S3에 직접 업로드
      await this.uploadImageToS3(uploadUrl, file);
      
      console.log('이미지 업로드 완료, 키:', imageKey);
      return imageKey;
    } catch (error) {
      console.error('이미지 업로드 프로세스 실패:', error);
      throw new Error(`이미지 업로드 실패: ${error.message}`);
    }
  }

  /**
   * 이미지 조회용 URL 가져오기  
   * @param {string} imageKey - 이미지 키
   * @returns {string} 조회 가능한 URL
   */
  static async getImageUrl(imageKey) {
    try {
      console.log('=== 이미지 조회 URL 발급 ===');
      console.log('이미지 키:', imageKey);
      
      const params = new URLSearchParams({ key: imageKey });
      
      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_GET}?${params}`,
        {
          method: 'GET',
          headers: this.getCommonHeaders(false, false) // 인증 불필요
        }
      );

      const result = await this.handleResponse(response, '이미지 URL 발급 실패');
      return result.url || result;
    } catch (error) {
      console.error('이미지 URL 발급 에러:', error);
      this.handleApiError(error, 'getImageUrl');
    }
  }

  /**
   * 이미지 공개 URL 발급
   * @param {string} key - 이미지 키
   * @returns {Promise<Object>} 공개 URL 정보
   */
  static async getPublicUrl(key) {
    try {
      const url = `${BASE_URL}${ENDPOINTS.STORAGE_PUBLIC_URL}?key=${encodeURIComponent(key)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, 'Public URL 발급 실패');
    } catch (error) {
      this.handleApiError(error, 'getPublicUrl');
    }
  }

  // === 테스트 메서드들 ===
  
  /**
   * CORS 테스트용 메서드 - 브라우저 콘솔에서 직접 호출 가능
   */
  static async testPresignedUrlAccess() {
    try {
      console.log('=== Presigned URL CORS 테스트 ===');
      
      // 1. Presigned URL 받기
      const response = await this.getPresignedUrl('test-cors.jpg', 'image/jpeg');
      console.log('Presigned URL 응답:', response);
      
      const uploadUrl = response.uploadUrl;
      console.log('테스트할 URL:', uploadUrl);
      
      // 2. HEAD 요청으로 접근 가능한지 확인
      const headResponse = await fetch(uploadUrl, {
        method: 'HEAD',
        mode: 'cors'
      });
      
      console.log('HEAD 요청 성공:', {
        status: headResponse.status,
        statusText: headResponse.statusText,
        headers: Object.fromEntries(headResponse.headers.entries())
      });
      
      return { success: true, uploadUrl, headResponse: headResponse.status };
      
    } catch (error) {
      console.error('CORS 테스트 실패:', error);
      return { success: false, error: error.message };
    }
  }

  // === 편의 메서드들 ===

  /**
   * 이미지 업로드 전체 플로우
   * @param {File} file - 업로드할 파일
   * @returns {Promise<string>} 업로드된 이미지의 key
   */
  static async uploadImageComplete(file) {
    try {
      // 파일 유효성 검사
      if (!file || !file.type.startsWith('image/')) {
        throw new Error('유효한 이미지 파일을 선택해주세요.');
      }

      // 파일 크기 제한 (5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        throw new Error('이미지 크기는 5MB 이하여야 합니다.');
      }

      // 1. Presigned URL 발급
      const { key, uploadUrl } = await this.getPresignedPutUrl(file.name, file.type);
      
      // 2. S3에 직접 업로드
      await this.uploadImageToS3(uploadUrl, file);
      
      return key;
    } catch (error) {
      throw new Error(`이미지 업로드 전체 프로세스 실패: ${error.message}`);
    }
  }

  /**
   * 프로필 이미지 업로드 및 변경 (통합 메서드)
   * @param {File} file - 업로드할 이미지 파일
   * @returns {Promise<string>} 변경된 이미지 키
   */
  static async uploadAndUpdateProfileImage(file) {
    try {
      // 1. 이미지 업로드
      const imageKey = await this.uploadImageComplete(file);
      
      // 2. 프로필 이미지 변경
      await this.updateProfileImage({ imageKey });
      
      return imageKey;
    } catch (error) {
      throw new Error(`프로필 이미지 업로드 및 변경 실패: ${error.message}`);
    }
  }

  /**
   * 프로필 이미지 URL 생성
   * @param {string} imageKey - 이미지 키
   * @returns {Promise<string|null>} 이미지 URL
   */
  static async getProfileImageUrl(imageKey) {
    if (!imageKey) return null;
    
    try {
      const result = await this.getPublicUrl(imageKey);
      return result.url || result;
    } catch (error) {
      console.warn('프로필 이미지 URL 생성 실패:', error);
      return null;
    }
  }

  /**
   * 프로필 정보 유효성 검사
   * @param {Object} profileData - 검사할 프로필 데이터
   * @returns {Object} { isValid: boolean, errors: string[] }
   */
  static validateProfileData(profileData) {
    const errors = [];

    // 닉네임 검사
    if (profileData.nickname !== undefined) {
      if (!profileData.nickname || profileData.nickname.trim().length === 0) {
        errors.push('닉네임을 입력해주세요.');
      } else if (profileData.nickname.length > 20) {
        errors.push('닉네임은 20자 이하로 입력해주세요.');
      } else if (profileData.nickname.length < 2) {
        errors.push('닉네임은 2자 이상 입력해주세요.');
      }
    }

    // 이메일 검사
    if (profileData.email !== undefined) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!profileData.email || profileData.email.trim().length === 0) {
        errors.push('이메일을 입력해주세요.');
      } else if (!emailRegex.test(profileData.email)) {
        errors.push('올바른 이메일 형식이 아닙니다.');
      }
    }

    // 비밀번호 검사
    if (profileData.newPassword !== undefined) {
      if (!profileData.newPassword || profileData.newPassword.length < 8) {
        errors.push('비밀번호는 8자 이상 입력해주세요.');
      }
      
      // 비밀번호 강도 검사
      const hasUpperCase = /[A-Z]/.test(profileData.newPassword);
      const hasLowerCase = /[a-z]/.test(profileData.newPassword);
      const hasNumbers = /\d/.test(profileData.newPassword);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(profileData.newPassword);
      
      const strengthCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;
      
      if (strengthCount < 2) {
        errors.push('비밀번호는 대문자, 소문자, 숫자, 특수문자 중 최소 2가지를 포함해야 합니다.');
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export default UserProfileService;