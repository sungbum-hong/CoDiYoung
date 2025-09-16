import { useAuth } from "../../../contexts/AuthContext";
import { useUI } from "../../../contexts/UIContext";
import { validateEmail, validatePassword } from "../../../utils/validation";

export function useSignInForm() {
  const { clearError, error } = useUI();
  const {
    email, password, emailError, passwordError,
    setEmail, setPassword, setEmailError, setPasswordError, resetErrors
  } = useAuth();

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