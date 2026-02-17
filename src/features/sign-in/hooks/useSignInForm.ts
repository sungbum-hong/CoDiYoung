import { type ChangeEvent } from 'react';
import useAuthStore from "../../../features/auth/model/authStore"; // 경로 수정 (stores/ -> features/auth/model/)
import { validateEmail, validatePassword } from "../../../shared/utils/validation"; // 경로 수정 (utils/ -> shared/utils/)

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

  // e: ChangeEvent<HTMLInputElement> 로 타입 지정 -> e.target.value 자동완성 됨
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setEmail(v);
    if (v) setEmailError(validateEmail(v));
    if (error) clearError();
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setPassword(v);
    if (v) setPasswordError(validatePassword(v));
    if (error) clearError();
  };

  const validateForm = () => {
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    // string | null | undefined 처리를 위해 명확하게 타입 캐스팅이나 가드 필요할 수 있음
    setEmailError(eErr || ""); 
    setPasswordError(pErr || "");

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
