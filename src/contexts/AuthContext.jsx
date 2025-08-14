import { createContext, useContext } from 'react';
import { AuthFormProvider, useAuthForm } from './AuthFormContext';
import { PasswordResetProvider, usePasswordReset } from './PasswordResetContext';
import { UIProvider, useUI } from './UIContext';

const AuthContext = createContext();

// 통합된 AuthProvider - 기존 API와 호환성 유지
export function AuthProvider({ children }) {
  return (
    <UIProvider>
      <AuthFormProvider>
        <PasswordResetProvider>
          {children}
        </PasswordResetProvider>
      </AuthFormProvider>
    </UIProvider>
  );
}

// 기존 useAuth 훅과 호환되도록 통합된 훅 제공
export function useAuth() {
  const authForm = useAuthForm();
  const passwordReset = usePasswordReset();
  const ui = useUI();

  // 기존 API와 동일하게 모든 상태와 액션을 합쳐서 반환
  return {
    // AuthForm 상태
    email: authForm.email,
    password: authForm.password,
    emailError: authForm.emailError,
    passwordError: authForm.passwordError,
    
    // PasswordReset 상태 (email은 AuthForm과 별도로 관리)
    verificationCode: passwordReset.verificationCode,
    newPassword: passwordReset.newPassword,
    confirmPassword: passwordReset.confirmPassword,
    isCodeSent: passwordReset.isCodeSent,
    verificationCodeError: passwordReset.verificationCodeError,
    newPasswordError: passwordReset.newPasswordError,
    confirmPasswordError: passwordReset.confirmPasswordError,
    
    // UI 상태
    isLoading: ui.isLoading,
    error: ui.error,
    isAuthenticated: ui.isAuthenticated,
    user: ui.user,
    
    // AuthForm 액션
    setEmail: authForm.setEmail,
    setPassword: authForm.setPassword,
    setEmailError: authForm.setEmailError,
    setPasswordError: authForm.setPasswordError,
    
    // PasswordReset 액션
    setVerificationCode: passwordReset.setVerificationCode,
    setNewPassword: passwordReset.setNewPassword,
    setConfirmPassword: passwordReset.setConfirmPassword,
    setVerificationCodeError: passwordReset.setVerificationCodeError,
    setNewPasswordError: passwordReset.setNewPasswordError,
    setConfirmPasswordError: passwordReset.setConfirmPasswordError,
    setCodeSent: passwordReset.setCodeSent,
    
    // UI 액션
    setLoading: ui.setLoading,
    setError: ui.setError,
    setUser: ui.setUser,
    logout: ui.logout,
    
    // 통합 액션들
    resetState: () => {
      authForm.resetForm();
      passwordReset.resetState();
      ui.resetUI();
    },
    resetErrors: () => {
      authForm.resetErrors();
      passwordReset.resetErrors();
      ui.clearError();
    },
  };
}