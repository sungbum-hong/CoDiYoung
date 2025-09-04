import { CONFIG } from '../constants/config.js';
import { MESSAGES } from '../constants/messages.js';

export class AuthService {
  // 로그인 함수
  static async login(email, password) {

    
    try {


      
      // 다른 일반적인 로그인 형식도 시도해보자
      const requestBody = JSON.stringify({ email, password });

      
      // 서버 상태 확인을 위해 간단한 GET 요청도 시도

      try {
        const testResponse = await fetch(`http://15.164.125.28:8080/`, {
          method: 'GET',
          mode: 'cors',
        });

      } catch (testError) {

      }
      
      const response = await fetch(CONFIG.API.AUTH.LOGIN, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        credentials: 'include',
        body: JSON.stringify({ email, password })
      });




      if (!response.ok) {
        let errorData = {};
        const contentType = response.headers.get('content-type');

        
        if (contentType && contentType.includes('application/json')) {
          errorData = await response.json().catch(() => ({}));
        } else {
          const textError = await response.text().catch(() => '');

          errorData = { message: textError };
        }
        

        
        if (response.status === 403) {
          throw new Error(`접근이 거부되었습니다. 계정 정보를 확인해주세요.\n사용한 계정: ${email}\n\n다른 계정들을 시도해보세요:\n- admin@test.com\n- user@example.com\n- test@test.com`);
        }
        
        throw new Error(errorData.message || MESSAGES.ERRORS.LOGIN_FAILED);
      }

      const userData = await response.json();

      
      // JWT 토큰 저장
      if (userData.accessToken) {
        // JWT 토큰 디코딩해서 만료시간 확인
        try {
          const payload = JSON.parse(atob(userData.accessToken.split('.')[1]));
          const now = Math.floor(Date.now() / 1000);
        } catch (e) {
          // JWT 디코딩 실패 시 무시
        }
        
        // saveUserToStorage 메서드 사용으로 통합
        this.saveUserToStorage({
          userId: userData.userId,
          email: userData.email,
          accessToken: userData.accessToken
        });
      }
      
      return userData;
    } catch (error) {

      if (error.name === 'TypeError' && error.message.includes('fetch')) {

        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }
      throw error;
    }
  }

  // 로컬 스토리지 정리 (private 메서드)
  static clearUserStorage() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_info');
  }

  // 로그아웃 함수
  static async logout() {
    try {
      const token = localStorage.getItem('auth_token');
      
      // 서버에 로그아웃 요청
      await fetch(CONFIG.API.AUTH.LOGOUT, {
        method: 'POST',
        headers: {
          'Authorization': token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json',
        }
      });
    } catch (error) {
      // 서버 요청 실패해도 로컬 정리는 수행 (무시)
    } finally {
      // 성공/실패 관계없이 로컬 스토리지 정리
      this.clearUserStorage();
    }
  }

  // 현재 로그인된 사용자 정보 확인
  static getCurrentUser() {
    try {
      const userInfo = localStorage.getItem('user_info');
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {

      return null;
    }
  }

  // 사용자 정보를 로컬 스토리지에 저장
  static saveUserToStorage(user) {
    try {
      localStorage.setItem('user_info', JSON.stringify(user));
      if (user.accessToken) {
        localStorage.setItem('auth_token', user.accessToken);
      }
    } catch (error) {
      // 저장 실패 시 무시
    }
  }

  // 프로필 정보 조회 (API 완성 후 구현)
  static async getMyProfile() {
    const token = localStorage.getItem('auth_token');
    if (!token) {
      throw new Error(MESSAGES.ERRORS.LOGIN_REQUIRED);
    }
    
    // API 완성 후 실제 구현 예정
    throw new Error(MESSAGES.ERRORS.PROFILE_API_NOT_IMPLEMENTED);
  }

  // 이메일 인증 코드 발송
  static async sendVerificationCode(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(MESSAGES.ERRORS.API_INTEGRATION_REQUIRED));
      }, 1000);
    });
  }

  // 비밀번호 재설정
  static async resetPassword(email, verificationCode, newPassword) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(MESSAGES.ERRORS.API_INTEGRATION_REQUIRED));
      }, 1000);
    });
  }
}

export default AuthService;