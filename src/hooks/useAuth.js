import { useAuth as useAuthContext } from '../contexts/AuthContext';

export function useAuthActions() {
  const { setUser, logout, resetState } = useAuthContext();

  const loginWithTestData = () => {
    const testUser = {
      name: "김지호",
      email: "test@example.com",
      avatar: null
    };
    setUser(testUser);
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