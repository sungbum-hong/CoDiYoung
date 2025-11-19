import { useEffect } from 'react';
import { AuthService } from '../services/authService';

export default function TokenExpirationHandler() {
  useEffect(() => {
    // 앱 시작 시 토큰 유효성 검사
    AuthService.initializeTokenCheck();

    // 일반 토큰 만료 이벤트 리스너
    const handleTokenExpired = (event) => {
      alert(event.detail.message);

      // 로그인 페이지로 리다이렉트 (필요시)
      if (window.location.pathname !== '/signin') {
        window.location.href = '/signin';
      }
    };

    // admin 토큰 만료 이벤트 리스너
    const handleAdminTokenExpired = (event) => {
      alert(event.detail.message);

      // admin 로그인 페이지로 리다이렉트
      if (window.location.pathname !== '/admin/login') {
        window.location.href = '/admin/login';
      }
    };

    // 일반 토큰 만료 경고 이벤트 리스너 (덜 방해적)
    const handleTokenExpireWarning = (event) => {
      // 작업 중인 사용자를 방해하지 않도록 조용한 알림
      console.info('토큰이 2분 후 만료됩니다.');

      // 필요시 상단에 작은 배너나 토스트 메시지로 대체 가능
      // 예: showToast('로그인이 곧 만료됩니다.', { duration: 5000, type: 'warning' });
    };

    // 이벤트 리스너 등록 (admin 경고는 제거)
    window.addEventListener('tokenExpired', handleTokenExpired);
    window.addEventListener('adminTokenExpired', handleAdminTokenExpired);
    window.addEventListener('tokenExpireWarning', handleTokenExpireWarning);

    // 페이지 포커스 시 토큰 재검사
    const handleFocus = () => {
      const token = localStorage.getItem('auth_token');
      if (token && AuthService.isTokenExpired(token)) {
        AuthService.handleTokenExpiration();
      }

      // admin 토큰도 함께 재검사
      const adminToken = localStorage.getItem('admin_access_token');
      if (adminToken && AuthService.isTokenExpired(adminToken)) {
        AuthService.handleAdminTokenExpiration();
      }
    };

    window.addEventListener('focus', handleFocus);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener('tokenExpired', handleTokenExpired);
      window.removeEventListener('adminTokenExpired', handleAdminTokenExpired);
      window.removeEventListener('tokenExpireWarning', handleTokenExpireWarning);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // 이 컴포넌트는 UI를 렌더링하지 않음
  return null;
}