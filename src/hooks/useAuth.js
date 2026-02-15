import useAuthStore from "../stores/authStore.js";

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
