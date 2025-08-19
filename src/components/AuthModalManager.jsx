import { useAuthModal } from '../hooks/useAuthModal';
import { useAuthState, useAuthActions } from '../hooks/useAuth';
import UserProfile from './UserProfile';
import LoginButtons from './LoginButtons';
import AuthModal from './AuthModal';

export default function AuthModalManager() {
  const { isAuthenticated } = useAuthState();
  const { resetAuthState } = useAuthActions();
  const { 
    isSignInOpen, 
    onAuthRoute, 
    getModalTitle, 
    openSignIn, 
    closeModal, 
    location 
  } = useAuthModal();

  const handleModalClose = () => {
    closeModal();
    resetAuthState();
  };

  return (
    <>
      {/* 로그인/사용자 프로필 영역 */}
      {!onAuthRoute && (
        <nav className="flex items-center">
          {isAuthenticated ? (
            <UserProfile />
          ) : (
            <LoginButtons onLoginClick={openSignIn} />
          )}
        </nav>
      )}

      {/* 인증 모달 */}
      <AuthModal
        isOpen={isSignInOpen}
        onClose={handleModalClose}
        title={getModalTitle()}
        currentPath={location.pathname}
      />
    </>
  );
}