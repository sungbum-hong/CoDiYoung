import useAuthStore from '../stores/authStore.js';
import { CONFIG } from '../constants/config.js';

export function useAuthActions() {
  const setUser = useAuthStore((state) => state.setUser);
  const logout = useAuthStore((state) => state.logout);
  const resetState = useAuthStore((state) => state.resetState);

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
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const error = useAuthStore((state) => state.error);

  return {
    isAuthenticated,
    user,
    isLoading,
    error
  };
}