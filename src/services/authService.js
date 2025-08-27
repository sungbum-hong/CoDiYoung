export class AuthService {
  // 로그인 함수
  static async login(email, password) {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || '로그인에 실패했습니다.');
      }

      const userData = await response.json();
      
      // JWT 토큰 저장
      if (userData.accessToken) {
        localStorage.setItem('auth_token', userData.accessToken);
        localStorage.setItem('user_info', JSON.stringify({
          userId: userData.userId,
          email: userData.email
        }));
      }
      
      return userData;
    } catch (error) {
      if (error.name === 'TypeError' && error.message.includes('fetch')) {
        throw new Error('서버에 연결할 수 없습니다. 네트워크를 확인해주세요.');
      }
      throw error;
    }
  }

  // 로그아웃 함수
  static async logout() {
    try {
      const token = localStorage.getItem('auth_token');
      
      // 서버에 로그아웃 요청
      await fetch('/api/auth/logout', {
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
      console.error('Failed to get current user:', error);
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
      throw new Error('로그인이 필요합니다.');
    }
    
    // API 완성 후 실제 구현 예정
    throw new Error('프로필 API가 구현되지 않았습니다.');
  }

  // 이메일 인증 코드 발송
  static async sendVerificationCode(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('API 연동이 필요합니다.'));
      }, 1000);
    });
  }

  // 비밀번호 재설정
  static async resetPassword(email, verificationCode, newPassword) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('API 연동이 필요합니다.'));
      }, 1000);
    });
  }
}

export default AuthService;