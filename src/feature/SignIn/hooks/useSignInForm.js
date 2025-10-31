import useAuthStore from "../../../stores/authStore.js";
import { validateEmail, validatePassword } from "../../../utils/validation";

export function useSignInForm() {
  const email = useAuthStore((state) => state.email);
  const password = useAuthStore((state) => state.password);
  const emailError = useAuthStore((state) => state.emailError);
  const passwordError = useAuthStore((state) => state.passwordError);
  const error = useAuthStore((state) => state.error);

  const setEmail = useAuthStore((state) => state.setEmail);
  const setPassword = useAuthStore((state) => state.setPassword);
  const setEmailError = useAuthStore((state) => state.setEmailError);
  const setPasswordError = useAuthStore((state) => state.setPasswordError);
  const resetErrors = useAuthStore((state) => state.resetErrors);
  const clearError = useAuthStore((state) => state.clearError);

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    if (v) setEmailError(validateEmail(v));
    if (error) clearError();
  };

  const handlePasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    if (v) setPasswordError(validatePassword(v));
    if (error) clearError();
  };

  const validateForm = () => {
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailError(eErr);
    setPasswordError(pErr);

    return !eErr && !pErr;
  };

  return {
    // Form state
    email,
    password,
    emailError,
    passwordError,

    // Form handlers
    handleEmailChange,
    handlePasswordChange,
    validateForm,
    resetErrors,

    // Error handling
    error,
    clearError
  };
}