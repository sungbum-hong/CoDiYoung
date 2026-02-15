import { useRouter } from "next/navigation";
import useAuthStore from "../../../stores/authStore.js";
import { ROUTES } from "../../../constants/routes.js";

export function useSignInAuth() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);

  const handleLogin = async (email, password, onClose) => {
    try {
      const result = await login(email, password);
      if (result.success) {
        router.push(ROUTES.HOME);
        onClose?.();
      }
    } catch (error) {
      // Error is handled in auth store
    }
  };

  const handleFindPassword = (resetErrors) => {
    resetErrors();
    router.push(ROUTES.FIND_PASSWORD);
  };

  return {
    isLoading,
    handleLogin,
    handleFindPassword,
  };
}
