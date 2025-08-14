import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES, AUTH_ROUTES } from '../constants/routes.js';
import { MESSAGES } from '../constants/messages.js';

export function useAuthModal() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const onAuthRoute = AUTH_ROUTES.includes(location.pathname);

  // 인증 경로 접근 시 모달 자동 오픈
  useEffect(() => {
    setIsSignInOpen(onAuthRoute);
  }, [onAuthRoute]);

  // 모달 열릴 때 바디 스크롤 잠금
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isSignInOpen ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev);
  }, [isSignInOpen]);

  const getModalTitle = () => {
    switch (location.pathname) {
      case ROUTES.FIND_PASSWORD:
        return MESSAGES.MODAL_TITLES.FIND_PASSWORD;
      case ROUTES.RESET_PASSWORD:
        return MESSAGES.MODAL_TITLES.RESET_PASSWORD;
      case ROUTES.SUCCESS_RESET_PASSWORD:
        return MESSAGES.UI.PASSWORD_RESET_COMPLETE;
      default:
        return MESSAGES.MODAL_TITLES.LOGIN;
    }
  };

  const openSignIn = () => {
    navigate(ROUTES.SIGNIN);
    setIsSignInOpen(true);
  };

  const closeModal = () => {
    setIsSignInOpen(false);
    navigate(ROUTES.HOME);
  };

  return {
    isSignInOpen,
    onAuthRoute,
    getModalTitle,
    openSignIn,
    closeModal,
    location
  };
}