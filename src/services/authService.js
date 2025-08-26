export class AuthService {
  // 로그인 함수
  static async login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('API 연동이 필요합니다.'));
      }, 800);
    });
  }

  // 로그아웃 함수
  static async logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_info');
        resolve();
      }, 200);
    });
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
      localStorage.setItem('auth_token', 'token_' + user.id);
    } catch (error) {
      console.error('Failed to save user to storage:', error);
    }
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