import { useNavigate } from "react-router-dom";
import useAuthStore from "../../../stores/authStore.js";
import { ROUTES } from "../../../constants/routes.js";

export function useSignInAuth() {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);

  const handleLogin = async (email, password, onClose) => {
    try {
      const result = await login(email, password);
      if (result.success) {
        navigate(ROUTES.HOME);
        onClose?.();
      }
    } catch (error) {
      // Error is handled in auth store
    }
  };

  const handleFindPassword = (resetErrors) => {
    resetErrors();
    navigate(ROUTES.FIND_PASSWORD);
  };

  return {
    isLoading,
    handleLogin,
    handleFindPassword
  };
}