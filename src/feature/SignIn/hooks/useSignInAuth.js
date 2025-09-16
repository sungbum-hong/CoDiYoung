import { useNavigate } from "react-router-dom";
import { useUI } from "../../../contexts/UIContext";
import { ROUTES } from "../../../constants/routes.js";

export function useSignInAuth() {
  const navigate = useNavigate();
  const { login, isLoading } = useUI();

  const handleLogin = async (email, password, onClose) => {
    try {
      const result = await login(email, password);
      if (result.success) {
        navigate(ROUTES.HOME);
        onClose?.();
      }
    } catch (error) {
      // Error is handled in UI context
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