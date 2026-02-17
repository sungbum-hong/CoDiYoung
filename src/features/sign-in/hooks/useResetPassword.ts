import { useRouter, useSearchParams } from "next/navigation";
import { usePasswordValidation, usePasswordConfirmValidation } from "../../../hooks/useFormValidation";
import { validatePassword, validatePasswordConfirmation } from "../../../shared/utils/validation";
import { SIGNIN_CONSTANTS } from "../constants";
import { useState } from "react"; // Added useState import

/**
 * 비밀번호 재설정 폼을 관리하는 훅
 * 새 비밀번호 입력 및 검증을 처리
 */
export function useResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailVal = searchParams.get('email');
  const tokenVal = searchParams.get('resetToken');
  
  // Form validation hooks
  const passwordValidation = usePasswordValidation();
  const confirmPasswordValidation = usePasswordConfirmValidation(passwordValidation.password); // Keep the argument for confirm password validation
  
  // Local state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");

  const email = emailVal || "";
  const resetToken = tokenVal || "";
  
  // Update confirm password validation when main password changes
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    passwordValidation.handleChange(e);
    confirmPasswordValidation.updateError(e.target.value);
  };

  const handleResetPassword = async () => {
    setIsSubmitting(true);
    setServerError("");
    setServerSuccess("");

    // Validate forms
    passwordValidation.setTouched();
    confirmPasswordValidation.setTouched();
    
    const passwordError = validatePassword(passwordValidation.password);
    const confirmError = validatePasswordConfirmation(passwordValidation.password, confirmPasswordValidation.confirmPassword);
    
    passwordValidation.setError(passwordError);
    confirmPasswordValidation.setError(confirmError);
    
    if (!passwordError && !confirmError) {
      // TODO: Implement actual API call when backend is ready
      // try {
      //   const res = await fetch(SIGNIN_CONSTANTS.ENDPOINTS.RESET_PASSWORD, {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify({ 
      //       email, 
      //       resetToken, 
      //       newPassword: passwordValidation.password 
      //     }),
      //   });
      //   
      //   if (!res.ok) {
      //     throw new Error("비밀번호 재설정에 실패했습니다.");
      //   }
      // } catch (error) {
      //   return;
      // }
      
      //   return;
      // }
      
      router.push(SIGNIN_CONSTANTS.ROUTES.SUCCESS_RESET_PASSWORD);
    }
  };

  const isFormValid = () => {
    return passwordValidation.password && 
           confirmPasswordValidation.confirmPassword && 
           !passwordValidation.error && 
           !confirmPasswordValidation.error &&
           validatePassword(passwordValidation.password) === "" &&
           validatePasswordConfirmation(passwordValidation.password, confirmPasswordValidation.confirmPassword) === "";
  };

  const handleBack = () => {
    router.push(SIGNIN_CONSTANTS.ROUTES.FIND_PASSWORD);
  };

  return {
    // Form data
    email,
    resetToken,
    
    // Form validation
    passwordValidation,
    confirmPasswordValidation,
    
    // Computed
    isFormValid,
    
    // Handlers
    handlePasswordChange,
    handleResetPassword,
    handleBack
  };
}