import useAuthStore from "../features/auth/model/authStore";

export const useAuthState = () => {
  const { isAuthenticated, user, isLoading, error } = useAuthStore();
  return { isAuthenticated, user, isLoading, error };
};

export const useAuthActions = () => {
  const { login, logout, loadProfile } = useAuthStore();
  return {
    handleLogin: login,
    handleLogout: logout,
    fetchProfile: loadProfile,
  };
};
