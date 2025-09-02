import { CONFIG } from '../constants/config.js';
import { MESSAGES } from '../constants/messages.js';

export class AuthService {
  // 로그인 함수
  static async login(email, password) {
    console.log('🔄 AuthService.login 호출:', { email, password });
    
    try {
      console.log('📡 API 요청 URL:', CONFIG.API.AUTH.LOGIN);
      console.log('📡 요청 데이터:', { email, password });
      
      // 다른 일반적인 로그인 형식도 시도해보자
      const requestBody = JSON.stringify({ email, password });
      console.log('📡 요청 본문:', requestBody);
      
      // 서버 상태 확인을 위해 간단한 GET 요청도 시도
      console.log('📡 서버 접근 테스트 시작...');
      try {
        const testResponse = await fetch(`http://15.164.125.28:8080/`, {
          method: 'GET',
          mode: 'cors',
        });
        console.log('📡 서버 접근 테스트 결과:', testResponse.status);
      } catch (testError) {
        console.log('📡 서버 접근 테스트 실패:', testError.message);
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

      console.log('📡 응답 상태:', response.status, response.statusText);
      console.log('📡 응답 헤더:', Object.fromEntries(response.headers));

      if (!response.ok) {
        let errorData = {};
        const contentType = response.headers.get('content-type');
        console.log('📡 응답 Content-Type:', contentType);
        
        if (contentType && contentType.includes('application/json')) {
          errorData = await response.json().catch(() => ({}));
        } else {
          const textError = await response.text().catch(() => '');
          console.error('📡 응답 텍스트 에러:', textError);
          errorData = { message: textError };
        }
        
        console.error('📡 응답 에러 데이터:', errorData);
        
        if (response.status === 403) {
          throw new Error(`접근이 거부되었습니다. 계정 정보를 확인해주세요.\n사용한 계정: ${email}\n\n다른 계정들을 시도해보세요:\n- admin@test.com\n- user@example.com\n- test@test.com`);
        }
        
        throw new Error(errorData.message || MESSAGES.ERRORS.LOGIN_FAILED);
      }

      const userData = await response.json();
      console.log('📡 응답 성공 데이터:', userData);
      
      // JWT 토큰 저장
      if (userData.accessToken) {
        console.log('🔑 새로 받은 JWT 토큰:', userData.accessToken);
        console.log('🔑 토큰 앞부분:', userData.accessToken.substring(0, 50) + '...');
        
        // JWT 토큰 디코딩해서 만료시간 확인
        try {
          const payload = JSON.parse(atob(userData.accessToken.split('.')[1]));
          const now = Math.floor(Date.now() / 1000);
          console.log('🔑 토큰 정보:', payload);
          console.log('🔑 현재 시간:', now, '만료 시간:', payload.exp);
          console.log('🔑 남은 시간:', Math.floor((payload.exp - now) / 60), '분');
        } catch (e) {
          console.log('🔑 토큰 디코딩 실패:', e);
        }
        
        localStorage.setItem('auth_token', userData.accessToken);
        localStorage.setItem('user_info', JSON.stringify({
          userId: userData.userId,
          email: userData.email
        }));
        console.log('💾 토큰 및 사용자 정보 저장 완료');
      }
      
      return userData;
    } catch (error) {
      console.error('💥 AuthService.login 에러:', error);
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        console.error('💥 네트워크 에러 발생');
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }
      throw error;
    }
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
      
      // 로컬 스토리지 정리
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_info');
    } catch (error) {
      // 서버 요청 실패해도 로컬 정리는 수행
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_info');
    }
  }

  // 현재 로그인된 사용자 정보 확인
  static getCurrentUser() {
    try {
      const userInfo = localStorage.getItem('user_info');
      return userInfo ? JSON.parse(userInfo) : null;
    } catch (error) {
      console.error(MESSAGES.ERRORS.GET_CURRENT_USER_FAILED, error);
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