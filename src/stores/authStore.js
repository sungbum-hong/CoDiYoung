import { create } from 'zustand';
import { AuthService } from '../services/authService.js';

const useAuthStore = create((set, get) => ({
  // === 인증 상태 ===
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,

  // === 로그인 폼 상태 ===
  email: '',
  password: '',
  emailError: '',
  passwordError: '',

  // === 비밀번호 재설정 상태 ===
  verificationCode: '',
  newPassword: '',
  confirmPassword: '',
  isCodeSent: false,
  verificationCodeError: '',
  newPasswordError: '',
  confirmPasswordError: '',

  // === 인증 액션 ===
  setLoading: (loading) => set({ isLoading: loading }),
  setError: (error) => set({ error }),
  clearError: () => set({ error: null }),
  setUser: (user) => set({
    isAuthenticated: true,
    user,
    isLoading: false,
    error: null
  }),

  // 로그인
  login: async (email, password) => {
    set({ isLoading: true, error: null });

    try {
      const user = await AuthService.login(email, password);
      set({
        isAuthenticated: true,
        user,
        isLoading: false,
        error: null
      });
      return { success: true, user };
    } catch (error) {
      set({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: error.message
      });
      return { success: false, error: error.message };
    }
  },

  // 로그아웃
  logout: async () => {
    set({ isLoading: true });

    try {
      await AuthService.logout();
      set({
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: null
      });
      return { success: true };
    } catch (error) {
      set({ error: error.message, isLoading: false });
      return { success: false, error: error.message };
    }
  },

  // 프로필 로드
  loadProfile: async () => {
    set({ isLoading: true, error: null });

    try {
      const profile = await AuthService.getMyProfile();
      set({
        isAuthenticated: true,
        user: profile,
        isLoading: false
      });
      return { success: true, profile };
    } catch (error) {
      set({ error: error.message, isLoading: false });
      return { success: false, error: error.message };
    }
  },

  // === 로그인 폼 액션 ===
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setEmailError: (error) => set({ emailError: error }),
  setPasswordError: (error) => set({ passwordError: error }),

  // === 비밀번호 재설정 액션 ===
  setVerificationCode: (code) => set({ verificationCode: code }),
  setNewPassword: (password) => set({ newPassword: password }),
  setConfirmPassword: (password) => set({ confirmPassword: password }),
  setVerificationCodeError: (error) => set({ verificationCodeError: error }),
  setNewPasswordError: (error) => set({ newPasswordError: error }),
  setConfirmPasswordError: (error) => set({ confirmPasswordError: error }),
  setCodeSent: (sent) => set({ isCodeSent: sent }),

  // === 초기화 액션 ===
  resetState: () => set({
    isAuthenticated: false,
    user: null,
    isLoading: false,
    error: null,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    verificationCode: '',
    newPassword: '',
    confirmPassword: '',
    isCodeSent: false,
    verificationCodeError: '',
    newPasswordError: '',
    confirmPasswordError: '',
  }),

  resetErrors: () => set({
    error: null,
    emailError: '',
    passwordError: '',
    verificationCodeError: '',
    newPasswordError: '',
    confirmPasswordError: '',
  }),

  resetForm: () => set({
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  }),

  resetPasswordResetState: () => set({
    verificationCode: '',
    newPassword: '',
    confirmPassword: '',
    isCodeSent: false,
    verificationCodeError: '',
    newPasswordError: '',
    confirmPasswordError: '',
  }),

  // === 초기화 (앱 시작 시 로그인 상태 확인) ===
  initialize: () => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      set({
        isAuthenticated: true,
        user: currentUser
      });
    }
  },
}));

export default useAuthStore;