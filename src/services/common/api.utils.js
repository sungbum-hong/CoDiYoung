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
        // admin 토큰을 먼저 확인하고, 없으면 일반 토큰 사용
        let token = localStorage.getItem("admin_access_token");

        if (token) {
          // admin 토큰 만료 검증 로직 제거 (서버 401 응답에 의존)
          // 클라이언트 시간과 서버 시간 차이로 인한 오작동 방지
        } else {
          token = AuthService.validateTokenBeforeRequest(true);
        }

        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        throw error;
      }
    } else {
      // requireAuth=false일 때는 토큰이 있으면 추가하고, 없거나 만료되었으면 무시
      let token = localStorage.getItem("admin_access_token");

      if (token) {
        // admin 토큰 만료 검증 (에러가 발생해도 무시)
        try {
          if (AuthService.isTokenExpired(token)) {
            localStorage.removeItem("admin_access_token");
            localStorage.removeItem("admin_user_info");
            token = null; // 만료된 토큰은 사용하지 않음
          }
        } catch (error) {
          token = null; // 토큰 검증 실패 시에도 무시
        }
      }

      if (!token) {
        token = localStorage.getItem("auth_token");
        // 토큰이 있는 경우에만 만료 검증 (에러가 발생해도 무시)
        if (token) {
          try {
            if (AuthService.isTokenExpired(token)) {
              token = null; // 만료된 토큰은 사용하지 않음
            }
          } catch (error) {
            token = null; // 토큰 검증 실패 시에도 무시
          }
        }
      }

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
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
   * HTTP 응답 상태 코드별 인증 에러 처리
   * @param {Response} response - Fetch Response 객체
   */
  static handleAuthError(response) {
    console.error('Auth Error detected:', {
      url: response.url,
      status: response.status,
      statusText: response.statusText
    });

    if (response.status === 401 || response.status === 403) {
      // admin 토큰이 있는지 확인
      const adminToken = localStorage.getItem("admin_access_token");

      if (adminToken) {
        // admin 토큰 관련 401/403 에러
        AuthService.handleAdminTokenExpiration();
        throw new Error('관리자 세션이 만료되었습니다. 다시 로그인해주세요.');
      } else {
        // 일반 유저 토큰 관련 401/403 에러
        AuthService.handleTokenExpiration();
        throw new Error('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
      }
    }
  }

  /**
   * 공통 응답 처리
   * @param {Response} response - Fetch Response 객체
   * @param {string} errorMessage - 에러 시 표시할 기본 메시지
   * @param {string} expectedSchema - 예상되는 응답 스키마 타입
   * @returns {Promise<any>} 파싱된 응답 데이터
   */
  static async handleResponse(response, errorMessage = 'API 요청 실패', expectedSchema = null, ignoreAuthError = false) {

    if (!response.ok) {
      // 401/403 에러 시 자동 로그아웃 처리 (ignoreAuthError가 false일 때만)
      if (!ignoreAuthError) {
        this.handleAuthError(response);
      }

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

      return await this.handleResponse(
        response,
        options.errorMessage || 'API 요청 실패',
        null,
        options.ignoreAuthError
      );
    } catch (error) {
      this.handleApiError(error, options.context || '');
      throw error;
    }
  }
}