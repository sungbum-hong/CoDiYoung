import { useAuth as useAuthContext } from '../contexts/AuthContext';
import { CONFIG } from '../constants/config.js';

export function useAuthActions() {
  const { setUser, logout, resetState } = useAuthContext();

  const loginWithTestData = () => {
    setUser(CONFIG.TEST_USER);
  };

  const handleLogout = () => {
    logout();
  };

  const resetAuthState = () => {
    resetState();
  };

  return {
    loginWithTestData,
    handleLogout,
    resetAuthState
  };
}

export function useAuthState() {
  const { isAuthenticated, user, isLoading, error } = useAuthContext();

  return {
    isAuthenticated,
    user,
    isLoading,
    error
  };
}