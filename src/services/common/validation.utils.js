/**
 * 공통 유효성 검사 유틸리티
 * 모든 서비스에서 공통으로 사용되는 검증 로직
 */
export class ValidationUtils {
  /**
   * 필수 필드 검증
   * @param {Object} data - 검증할 데이터 객체
   * @param {string[]} requiredFields - 필수 필드 배열
   * @throws {Error} 필수 필드 누락 시 에러
   */
  static validateRequired(data, requiredFields) {
    const missing = requiredFields.filter(field => !data[field]);
    if (missing.length > 0) {
      throw new Error(`필수 필드가 누락되었습니다: ${missing.join(', ')}`);
    }
  }

  /**
   * 이미지 파일 유효성 검사
   * @param {File} file - 검사할 파일
   * @param {number} maxSize - 최대 파일 크기 (바이트)
   * @param {string[]} allowedTypes - 허용되는 MIME 타입 배열
   * @throws {Error} 파일 검증 실패 시 에러
   */
  static validateImageFile(file, maxSize = 5 * 1024 * 1024, allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']) {
    if (!file) {
      throw new Error('파일이 선택되지 않았습니다.');
    }

    if (file.size > maxSize) {
      throw new Error(`파일 크기가 너무 큽니다. 최대 ${Math.round(maxSize / 1024 / 1024)}MB까지 업로드 가능합니다.`);
    }

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`지원하지 않는 파일 형식입니다. (지원 형식: ${allowedTypes.join(', ')})`);
    }

    return true;
  }

  /**
   * 문자열 길이 검증
   * @param {string} value - 검증할 문자열
   * @param {string} fieldName - 필드명
   * @param {number} maxLength - 최대 길이
   * @param {number} minLength - 최소 길이
   * @throws {Error} 길이 검증 실패 시 에러
   */
  static validateStringLength(value, fieldName, maxLength, minLength = 0) {
    if (typeof value !== 'string') {
      throw new Error(`${fieldName}은(는) 문자열이어야 합니다.`);
    }

    if (value.length < minLength) {
      throw new Error(`${fieldName}은(는) ${minLength}자 이상이어야 합니다.`);
    }

    if (value.length > maxLength) {
      throw new Error(`${fieldName}은(는) ${maxLength}자 이하여야 합니다.`);
    }

    return true;
  }

  /**
   * 숫자 범위 검증
   * @param {number} value - 검증할 숫자
   * @param {string} fieldName - 필드명
   * @param {number} min - 최소값
   * @param {number} max - 최대값
   * @throws {Error} 범위 검증 실패 시 에러
   */
  static validateNumberRange(value, fieldName, min = 1, max = Number.MAX_SAFE_INTEGER) {
    if (typeof value !== 'number') {
      throw new Error(`${fieldName}은(는) 숫자여야 합니다.`);
    }

    if (value < min) {
      throw new Error(`${fieldName}은(는) ${min} 이상이어야 합니다.`);
    }

    if (value > max) {
      throw new Error(`${fieldName}은(는) ${max} 이하여야 합니다.`);
    }

    return true;
  }

  /**
   * 배열 검증
   * @param {any} value - 검증할 값
   * @param {string} fieldName - 필드명
   * @param {boolean} required - 필수 여부
   * @throws {Error} 배열 검증 실패 시 에러
   */
  static validateArray(value, fieldName, required = true) {
    if (required && (!value || !Array.isArray(value))) {
      throw new Error(`${fieldName}은(는) 배열이어야 합니다.`);
    }

    if (value && !Array.isArray(value)) {
      throw new Error(`${fieldName}은(는) 배열이어야 합니다.`);
    }

    return true;
  }

  /**
   * 이메일 형식 검증
   * @param {string} email - 검증할 이메일
   * @throws {Error} 이메일 형식 오류 시 에러
   */
  static validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('유효하지 않은 이메일 형식입니다.');
    }
    return true;
  }
}