/**
 * 통합 이미지 업로드 서비스
 * 모든 이미지 업로드 관련 로직을 중앙화하여 관리
 */

import { CONFIG } from '../constants/config.js';

const BASE_URL = CONFIG.API.BASE_URL;

export class ImageService {
  /**
   * 공통 헤더 생성
   * @param {boolean} includeContentType - Content-Type 헤더 포함 여부
   * @param {boolean} includeAuth - Authorization 헤더 포함 여부
   * @returns {Object} 헤더 객체
   */
  static getCommonHeaders(includeContentType = true, includeAuth = true) {
    const headers = {};
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }
    
    if (includeAuth) {
      const token = localStorage.getItem('auth_token');
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }
    
    return headers;
  }

  /**
   * 파일 유효성 검사
   * @param {File} file - 검사할 파일
   * @param {Object} options - 검사 옵션
   * @param {number} options.maxSize - 최대 파일 크기 (바이트, 기본: 5MB)
   * @param {string[]} options.allowedTypes - 허용된 MIME 타입 배열
   * @throws {Error} 유효하지 않은 파일인 경우
   */
  static validateFile(file, options = {}) {
    const {
      maxSize = 5 * 1024 * 1024, // 5MB
      allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    } = options;

    if (!file) {
      throw new Error('파일이 선택되지 않았습니다.');
    }

    // 파일 크기 검사
    if (file.size > maxSize) {
      const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(1);
      throw new Error(`파일 크기는 ${maxSizeMB}MB 이하여야 합니다.`);
    }

    // 파일 타입 검사
    if (!allowedTypes.includes(file.type)) {
      throw new Error('지원하지 않는 파일 형식입니다. JPG, PNG, WebP, GIF 파일만 업로드 가능합니다.');
    }

    return true;
  }

  /**
   * Presigned URL 발급 요청
   * @param {string} filename - 파일명
   * @param {string} contentType - 파일 MIME 타입
   * @returns {Promise<Object>} { url, key } 형태의 응답
   */
  static async getPresignedUploadUrl(filename, contentType) {
    try {
      const params = new URLSearchParams({
        filename: filename,
        contentType: contentType
      });

      const url = `${BASE_URL}/api/storage/presign-put?${params}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: this.getCommonHeaders(false, true) // Content-Type 제거, 인증만 포함
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`Presigned URL 발급 실패 (${response.status}): ${errorText || response.statusText}`);
      }

      const data = await response.json();

      // 응답 구조 정규화
      if (data.uploadUrl) {
        return { url: data.uploadUrl, key: data.key };
      } else if (data.url) {
        return { url: data.url, key: data.key };
      } else {
        throw new Error('Presigned URL을 찾을 수 없습니다.');
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * Presigned URL을 사용하여 S3/R2에 직접 업로드
   * @param {string} presignedUrl - Presigned URL
   * @param {File} file - 업로드할 파일
   * @returns {Promise<boolean>} 업로드 성공 여부
   */
  static async uploadToStorage(presignedUrl, file) {
    try {

      // 여러 업로드 옵션 시도 (기존 서비스들의 방식을 통합)
      const uploadOptions = [
        // 옵션 1: PUT + Content-Type 헤더 (표준 방식)
        {
          method: 'PUT',
          body: file,
          headers: { 'Content-Type': file.type },
          mode: 'cors',
          credentials: 'omit'
        },
        // 옵션 2: PUT 헤더 없이 (auto-detection)
        {
          method: 'PUT',
          body: file,
          mode: 'cors',
          credentials: 'omit'
        }
      ];

      let lastError;
      
      for (let i = 0; i < uploadOptions.length; i++) {
        try {
          const option = uploadOptions[i];

          const response = await fetch(presignedUrl, option);

          if (response.ok) {
            return true;
          } else {
            const errorText = await response.text().catch(() => '');
            throw new Error(`업로드 실패 (${response.status}): ${errorText || response.statusText}`);
          }
        } catch (error) {
          lastError = error;
          
          // 마지막 시도가 아니면 계속 진행
          if (i < uploadOptions.length - 1) {
            continue;
          }
        }
      }

      // 모든 시도 실패
      throw lastError;
      
    } catch (error) {
      
      // CORS 오류 처리
      if (error.message.includes('CORS') || 
          error.message.includes('NetworkError') || 
          error.message.includes('cross-origin')) {
        throw new Error('CORS 정책으로 인해 이미지 업로드에 실패했습니다. 서버 관리자에게 문의해주세요.');
      }
      
      throw error;
    }
  }

  /**
   * 이미지 업로드 전체 플로우 (Presigned URL 발급 + 업로드)
   * @param {File} file - 업로드할 파일
   * @param {Object} options - 업로드 옵션
   * @returns {Promise<string>} 업로드된 이미지의 키
   */
  static async uploadImage(file, options = {}) {
    try {
      
      // 1. 파일 유효성 검사
      this.validateFile(file, options);
      
      // 2. Presigned URL 발급
      const { url: uploadUrl, key: imageKey } = await this.getPresignedUploadUrl(file.name, file.type);
      
      if (!uploadUrl || !imageKey) {
        throw new Error('Presigned URL 또는 이미지 키를 받지 못했습니다.');
      }
      
      // 3. 스토리지에 직접 업로드
      await this.uploadToStorage(uploadUrl, file);
      
      return imageKey;
      
    } catch (error) {
      throw error;
    }
  }

  /**
   * 이미지 조회용 Presigned URL 발급
   * @param {string} key - 이미지 키
   * @returns {Promise<string>} 조회용 URL
   */
  static async getImageUrl(key) {
    try {
      if (!key) {
        throw new Error('이미지 키가 제공되지 않았습니다.');
      }

      const url = `${BASE_URL}/api/storage/presign-get?key=${encodeURIComponent(key)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      if (!response.ok) {
        const errorText = await response.text().catch(() => '');
        throw new Error(`이미지 URL 발급 실패 (${response.status}): ${errorText || response.statusText}`);
      }

      const data = await response.json();
      
      return data.url || data.downloadUrl;
      
    } catch (error) {
      throw error;
    }
  }

  /**
   * 여러 이미지를 배치로 업로드
   * @param {File[]} files - 업로드할 파일 배열
   * @param {Function} onProgress - 진행률 콜백 (uploadedCount, totalCount) => void
   * @param {Object} options - 업로드 옵션
   * @returns {Promise<string[]>} 업로드된 이미지 키 배열
   */
  static async uploadImages(files, onProgress = null, options = {}) {
    const results = [];
    const totalCount = files.length;
    
    
    for (let i = 0; i < files.length; i++) {
      try {
        const file = files[i];
        
        const imageKey = await this.uploadImage(file, options);
        results.push(imageKey);
        
        if (onProgress) {
          onProgress(i + 1, totalCount);
        }
        
      } catch (error) {
        throw new Error(`이미지 "${files[i].name}" 업로드 실패: ${error.message}`);
      }
    }
    
    return results;
  }

  /**
   * 이미지 미리보기 URL 생성 (로컬)
   * @param {File} file - 미리보기할 파일
   * @returns {Promise<string>} 로컬 미리보기 URL
   */
  static async createPreviewUrl(file) {
    return new Promise((resolve, reject) => {
      this.validateFile(file);
      
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = () => reject(new Error('파일 읽기 실패'));
      reader.readAsDataURL(file);
    });
  }
}

export default ImageService;