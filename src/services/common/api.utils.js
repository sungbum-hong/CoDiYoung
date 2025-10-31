import { AuthService } from '../authService.js';

/**
 * API 공통 유틸리티 클래스
 * 모든 서비스에서 공통으로 사용되는 HTTP 관련 로직
 */
export class ApiUtils {
  /**
   * 공통 헤더 생성
   * @param {boolean} includeContentType - Content-Type 헤더 포함 여부
   * @param {boolean} requireAuth - 인증 토큰 필수 여부
   * @returns {Object} HTTP 헤더 객체
   */
  static getCommonHeaders(includeContentType = true, requireAuth = true) {
    const headers = {};

    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }

    headers['Accept'] = 'application/json';

    if (requireAuth) {
      try {
        const token = AuthService.validateTokenBeforeRequest(true);
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const token = AuthService.validateTokenBeforeRequest(false);
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        if (error.message.includes('만료')) {
          throw error;
        }
      }
    }

    return headers;
  }

  /**
   * API 에러 핸들링
   * @param {Error} error - 발생한 에러
   * @param {string} context - 에러 발생 컨텍스트
   */
  static handleApiError(error, context = '') {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('네트워크 연결 오류가 발생했습니다.');
    }

    if (error.name === 'AbortError') {
      throw new Error('요청이 취소되었습니다.');
    }

    if (error.message.includes('timeout')) {
      throw new Error('요청 시간이 초과되었습니다. 다시 시도해주세요.');
    }

    throw error;
  }

  /**
   * 공통 응답 처리
   * @param {Response} response - Fetch Response 객체
   * @param {string} errorMessage - 에러 시 표시할 기본 메시지
   * @param {string} expectedSchema - 예상되는 응답 스키마 타입
   * @returns {Promise<any>} 파싱된 응답 데이터
   */
  static async handleResponse(response, errorMessage = 'API 요청 실패', expectedSchema = null) {

    if (!response.ok) {
      let errorData = {};
      let errorText = '';
      try {
        errorText = await response.text();
        if (errorText.trim()) {
          // JSON 형식인지 확인
          const trimmedText = errorText.trim();
          if (trimmedText.startsWith('{') || trimmedText.startsWith('[')) {
            errorData = JSON.parse(errorText);
          } else {
            errorData = { message: errorText };
          }
        }
      } catch (e) {
        errorData = { message: errorText || '서버 에러가 발생했습니다.' };
      }
      const finalErrorMessage = errorData.message || `${errorMessage} (${response.status})`;
      throw new Error(finalErrorMessage);
    }

    const contentType = response.headers.get('content-type');

    if (contentType && contentType.includes('application/json')) {
      try {
        const text = await response.text();

        if (text.trim() === '') {
          return { success: true };
        }

        const trimmedText = text.trim();
        if (trimmedText.startsWith('{') || trimmedText.startsWith('[')) {
          const parsedData = JSON.parse(text);

          // 특정 응답 스키마 검증
          if (expectedSchema === 'ProjectCompleteResponse') {
            if (parsedData.success !== undefined && parsedData.data !== undefined) {
              return parsedData;
            }
          }

          return parsedData;
        } else {
          return { success: true, message: text };
        }
      } catch (e) {
        throw new Error('서버 응답을 파싱할 수 없습니다.');
      }
    } else {
      const text = await response.text();
      return text || { success: true };
    }
  }

  /**
   * 요청 옵션 생성
   * @param {string} method - HTTP 메서드
   * @param {Object} headers - 헤더 객체
   * @param {any} body - 요청 바디
   * @returns {Object} fetch 옵션 객체
   */
  static createRequestOptions(method, headers, body = null) {
    const options = {
      method,
      headers,
      mode: 'cors',
      credentials: 'include'
    };

    if (body) {
      options.body = typeof body === 'string' ? body : JSON.stringify(body);
    }

    return options;
  }

  /**
   * fetchWrapper - 통합 fetch 유틸리티
   * @param {string} url - API 엔드포인트
   * @param {Object} options - fetch 옵션
   * @returns {Promise<any>} API 응답 데이터
   */
  static async fetchWrapper(url, options = {}) {
    try {
      const headers = this.getCommonHeaders(
        options.includeContentType !== false,
        options.requireAuth !== false
      );

      const requestOptions = this.createRequestOptions(
        options.method || 'GET',
        { ...headers, ...options.headers },
        options.body
      );

      const response = await fetch(url, requestOptions);

      return await this.handleResponse(response, options.errorMessage || 'API 요청 실패');
    } catch (error) {
      this.handleApiError(error, options.context || '');
      throw error;
    }
  }
}