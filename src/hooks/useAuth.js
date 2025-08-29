import { useAuth } from '../contexts/AuthContext';
import { CONFIG } from '../constants/config.js';

export function useAuthActions() {
  const { setUser, logout, resetState } = useAuth();

  const loginWithTestData = () => {
    setUser(CONFIG.TEST_USER);
  };

  const handleLogout = async () => {
    await logout();
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
  const { isAuthenticated, user, isLoading, error } = useAuth();

  return {
    isAuthenticated,
    user,
    isLoading,
    error
  };
}