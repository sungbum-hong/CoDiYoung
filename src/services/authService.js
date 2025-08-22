import { mockData } from '../data/mockData.js';

// Mock 인증 서비스
export class AuthService {
  // 로그인 함수
  static async login(email, password) {
    return new Promise((resolve, reject) => {
      // 실제 API 호출을 시뮬레이션하기 위한 딜레이
      setTimeout(() => {
        // Mock 데이터에서 사용자 찾기
        const user = mockData.users.find(u => u.email === email);
        
        if (!user) {
          reject(new Error('존재하지 않는 이메일입니다.'));
          return;
        }

        // 실제로는 bcrypt로 비밀번호를 비교하지만, 여기서는 간단히 처리
        // Mock에서는 비밀번호가 "Password123!"인 것으로 가정
        if (password !== 'Password123!') {
          reject(new Error('비밀번호가 일치하지 않습니다.'));
          return;
        }

        // 사용자 역할 정보 가져오기
        const userRole = mockData.user_roles.find(ur => ur.user_id === user.id);
        
        // 사용자 프로젝트 정보 가져오기
        const userProjects = mockData.project_members
          .filter(pm => pm.user_id === user.id && !pm.left_at)
          .map(pm => {
            const project = mockData.projects.find(p => p.id === pm.project_id);
            const role = mockData.project_member_roles.find(r => r.id === pm.role_id);
            return { ...project, memberRole: role.role_name };
          });

        // 출석 통계
        const attendanceStats = this.getAttendanceStats(user.id);

        // 비밀번호를 제외한 사용자 정보 반환
        const userInfo = {
          id: user.id,
          email: user.email,
          nickname: user.nickname,
          role: userRole?.role_name || 'MEMBER',
          projects: userProjects,
          attendance: attendanceStats,
          created_at: user.created_at,
          updated_at: user.updated_at
        };

        resolve(userInfo);
      }, 800); // 800ms 딜레이로 실제 API 호출 시뮬레이션
    });
  }

  // 로그아웃 함수
  static async logout() {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 로컬 스토리지에서 토큰 제거 (실제 구현에서는)
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
      localStorage.setItem('auth_token', 'mock_token_' + user.id);
    } catch (error) {
      console.error('Failed to save user to storage:', error);
    }
  }

  // 출석 통계 계산
  static getAttendanceStats(userId) {
    const attendances = mockData.daily_attendance.filter(a => a.user_id === userId);
    const totalDays = attendances.length;
    const presentDays = attendances.filter(a => a.status === 'PRESENT').length;
    const lateDays = attendances.filter(a => a.status === 'LATE').length;
    const absentDays = attendances.filter(a => a.status === 'ABSENT').length;
    
    return {
      totalDays,
      presentDays,
      lateDays,
      absentDays,
      attendanceRate: totalDays > 0 ? Math.round((presentDays / totalDays) * 100) : 0
    };
  }

  // 이메일 인증 코드 발송 (Mock)
  static async sendVerificationCode(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find(u => u.email === email);
        if (!user) {
          reject(new Error('존재하지 않는 이메일입니다.'));
          return;
        }

        // Mock 인증 코드는 항상 "123456"
        resolve({ message: '인증 코드가 발송되었습니다.', code: '123456' });
      }, 1000);
    });
  }

  // 비밀번호 재설정 (Mock)
  static async resetPassword(email, verificationCode, newPassword) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = mockData.users.find(u => u.email === email);
        if (!user) {
          reject(new Error('존재하지 않는 이메일입니다.'));
          return;
        }

        // Mock에서는 인증 코드가 "123456"이어야 함
        if (verificationCode !== '123456') {
          reject(new Error('인증 코드가 일치하지 않습니다.'));
          return;
        }

        // 실제로는 데이터베이스에 새 비밀번호를 저장하지만, Mock에서는 로그만 출력
        console.log(`Password reset for user ${user.email}: ${newPassword}`);
        resolve({ message: '비밀번호가 성공적으로 변경되었습니다.' });
      }, 1000);
    });
  }
}

// 개발용 헬퍼 - 로그인 가능한 계정들 표시
export const DEV_ACCOUNTS = [
  { email: 'john.dev@gmail.com', nickname: '코딩존', password: 'Password123!' },
  { email: 'sarah.designer@naver.com', nickname: '디자인사라', password: 'Password123!' },
  { email: 'mike.video@kakao.com', nickname: '영상마이크', password: 'Password123!' },
  { email: 'emma.leader@gmail.com', nickname: '리더엠마', password: 'Password123!' },
  { email: 'alex.fullstack@outlook.com', nickname: '풀스택알렉스', password: 'Password123!' }
];

export default AuthService;