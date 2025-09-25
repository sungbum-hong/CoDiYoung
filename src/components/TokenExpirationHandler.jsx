import { useEffect } from 'react';
import { AuthService } from '../services/authService';

export default function TokenExpirationHandler() {
  useEffect(() => {
    // 앱 시작 시 토큰 유효성 검사
    AuthService.initializeTokenCheck();

    // 토큰 만료 이벤트 리스너
    const handleTokenExpired = (event) => {
      console.log('토큰 만료 이벤트 수신:', event.detail);
      alert(event.detail.message);
      
      // 로그인 페이지로 리다이렉트 (필요시)
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    };

    // 토큰 만료 경고 이벤트 리스너  
    const handleTokenExpireWarning = (event) => {
      console.log('토큰 만료 경고:', event.detail);
      
      // 사용자에게 경고 메시지 표시
      if (confirm('로그인이 곧 만료됩니다. 계속 사용하시겠습니까?')) {
        // 사용자가 계속 사용하겠다고 하면 토큰 갱신 시도 (필요시)
        console.log('사용자가 계속 사용 선택');
      }
    };

    // 이벤트 리스너 등록
    window.addEventListener('tokenExpired', handleTokenExpired);
    window.addEventListener('tokenExpireWarning', handleTokenExpireWarning);

    // 페이지 포커스 시 토큰 재검사
    const handleFocus = () => {
      const token = localStorage.getItem('auth_token');
      if (token && AuthService.isTokenExpired(token)) {
        AuthService.handleTokenExpiration();
      }
    };

    window.addEventListener('focus', handleFocus);

    // 컴포넌트 언마운트 시 이벤트 리스너 정리
    return () => {
      window.removeEventListener('tokenExpired', handleTokenExpired);
      window.removeEventListener('tokenExpireWarning', handleTokenExpireWarning);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  // 이 컴포넌트는 UI를 렌더링하지 않음
  return null;
}