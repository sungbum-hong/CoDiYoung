import { create } from "zustand";

// 사용자 타입 정의
interface User {
  id: number;
  email: string;
  name: string;
  role: string;
  nickName?: string;
  imageKey?: string;
}

// 인증 상태 타입 정의
interface AuthState {
  // 인증 상태
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;

  // 로그인 폼 상태
  email: string;
  password: string;
  emailError: string;
  passwordError: string;

  // 비밀번호 재설정 상태
  verificationCode: string;
  newPassword: string;
  confirmPassword: string;
  isCodeSent: boolean;
  verificationCodeError: string;
  newPasswordError: string;
  confirmPasswordError: string;
}

// 인증 액션 타입 정의
interface AuthActions {
  // 인증 액션
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  setUser: (user: User | null) => void;

  // 비동기 액션
  login: (email: string, password: string) => Promise<{ success: boolean; user?: User }>;
  logout: () => Promise<{ success: boolean }>;
  loadProfile: () => Promise<{ success: boolean; profile?: User }>;

  // 로그인 폼 액션
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setEmailError: (error: string) => void;
  setPasswordError: (error: string) => void;

  // 비밀번호 재설정 액션
  setVerificationCode: (code: string) => void;
  setNewPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  setVerificationCodeError: (error: string) => void;
  setNewPasswordError: (error: string) => void;
  setConfirmPasswordError: (error: string) => void;
  setCodeSent: (sent: boolean) => void;

  // 초기화 액션
  resetState: () => void;
  resetErrors: () => void;
  resetForm: () => void;
  resetPasswordResetState: () => void;
  initialize: () => void;
}

// 전체 스토어 타입
type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set, get) => ({
  // === 인증 상태 ===
  isAuthenticated: true, // 목업: 기본 로그인 상태
  user: {
    id: 1,
    email: "mock@example.com",
    name: "Mock User",
    role: "USER",
  },
  isLoading: false,
  error: null,

  // === 로그인 폼 상태 ===
  email: "",
  password: "",
  emailError: "",
  passwordError: "",

  // === 비밀번호 재설정 상태 ===
  verificationCode: "",
  newPassword: "",
  confirmPassword: "",
  isCodeSent: false,
  verificationCodeError: "",
  newPasswordError: "",
  confirmPasswordError: "",

  // === 인증 액션 ===
  setLoading: (loading: boolean) => set({ isLoading: loading }),
  setError: (error: string | null) => set({ error }),
  clearError: () => set({ error: null }),
  setUser: (user: User | null) =>
    set({
      isAuthenticated: !!user,
      user,
      isLoading: false,
      error: null,
    }),

  // 로그인 (목업)
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });

    // 심플한 목업 로그인 지연
    await new Promise((resolve) => setTimeout(resolve, 500));

    const mockUser: User = {
      id: 1,
      email: email,
      name: "Mock User",
      role: "USER",
    };

    set({
      isAuthenticated: true,
      user: mockUser,
      isLoading: false,
      error: null,
    });
    return { success: true, user: mockUser };
  },

  // 로그아웃 (목업)
  logout: async () => {
    set({ isLoading: true });
    await new Promise((resolve) => setTimeout(resolve, 300));

    set({
      isAuthenticated: false,
      user: null,
      isLoading: false,
      error: null,
    });
    return { success: true };
  },

  // 프로필 로드 (목업)
  loadProfile: async () => {
    set({ isLoading: true, error: null });
    await new Promise((resolve) => setTimeout(resolve, 300));

    const profile: User = {
      id: 1,
      name: "Mock User",
      email: "mock@example.com",
      nickName: "Mock Nickname",
      imageKey: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix",
      role: "USER",
    };

    set({
      isAuthenticated: true,
      user: profile,
      isLoading: false,
    });
    return { success: true, profile };
  },

  // === 로그인 폼 액션 ===
  setEmail: (email: string) => set({ email }),
  setPassword: (password: string) => set({ password }),
  setEmailError: (error: string) => set({ emailError: error }),
  setPasswordError: (error: string) => set({ passwordError: error }),

  // === 비밀번호 재설정 액션 ===
  setVerificationCode: (code: string) => set({ verificationCode: code }),
  setNewPassword: (password: string) => set({ newPassword: password }),
  setConfirmPassword: (password: string) => set({ confirmPassword: password }),
  setVerificationCodeError: (error: string) => set({ verificationCodeError: error }),
  setNewPasswordError: (error: string) => set({ newPasswordError: error }),
  setConfirmPasswordError: (error: string) => set({ confirmPasswordError: error }),
  setCodeSent: (sent: boolean) => set({ isCodeSent: sent }),

  // === 초기화 액션 ===
  resetState: () =>
    set({
      isAuthenticated: false,
      user: null,
      isLoading: false,
      error: null,
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      verificationCode: "",
      newPassword: "",
      confirmPassword: "",
      isCodeSent: false,
      verificationCodeError: "",
      newPasswordError: "",
      confirmPasswordError: "",
    }),

  resetErrors: () =>
    set({
      error: null,
      emailError: "",
      passwordError: "",
      verificationCodeError: "",
      newPasswordError: "",
      confirmPasswordError: "",
    }),

  resetForm: () =>
    set({
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
    }),

  resetPasswordResetState: () =>
    set({
      verificationCode: "",
      newPassword: "",
      confirmPassword: "",
      isCodeSent: false,
      verificationCodeError: "",
      newPasswordError: "",
      confirmPasswordError: "",
    }),

  // === 초기화 (앱 시작 시 로그인 상태 확인 - 목업은 항상 true 또는 로컬 스토리지 체크 흉내) ===
  initialize: () => {
    // 목업: 항상 로그인 상태 유지하거나, 필요 시 false로 변경 가능
    // 여기서는 기본값을 true로 설정해둠
  },
}));

export default useAuthStore;
