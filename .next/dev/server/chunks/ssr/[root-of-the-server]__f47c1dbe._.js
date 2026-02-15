module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/Project/CoDiYoung/src/providers/QueryProvider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider,
    "queryClient",
    ()=>queryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@tanstack/react-query-devtools/build/modern/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// React Query 클라이언트 설정
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
    defaultOptions: {
        queries: {
            // 기본 설정
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            retry: 1,
            refetchOnWindowFocus: false
        },
        mutations: {
            retry: 0
        }
    }
});
function QueryProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: [
            children,
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactQueryDevtools"], {
                initialIsOpen: false,
                position: "bottom-right"
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/providers/QueryProvider.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/providers/QueryProvider.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/Project/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // === 인증 상태 ===
        isAuthenticated: true,
        user: {
            id: 1,
            email: "mock@example.com",
            name: "Mock User",
            role: "USER"
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
        setLoading: (loading)=>set({
                isLoading: loading
            }),
        setError: (error)=>set({
                error
            }),
        clearError: ()=>set({
                error: null
            }),
        setUser: (user)=>set({
                isAuthenticated: true,
                user,
                isLoading: false,
                error: null
            }),
        // 로그인 (목업)
        login: async (email, password)=>{
            set({
                isLoading: true,
                error: null
            });
            // 심플한 목업 로그인 지연
            await new Promise((resolve)=>setTimeout(resolve, 500));
            const mockUser = {
                id: 1,
                email: email,
                name: "Mock User",
                role: "USER"
            };
            set({
                isAuthenticated: true,
                user: mockUser,
                isLoading: false,
                error: null
            });
            return {
                success: true,
                user: mockUser
            };
        },
        // 로그아웃 (목업)
        logout: async ()=>{
            set({
                isLoading: true
            });
            await new Promise((resolve)=>setTimeout(resolve, 300));
            set({
                isAuthenticated: false,
                user: null,
                isLoading: false,
                error: null
            });
            return {
                success: true
            };
        },
        // 프로필 로드 (목업)
        loadProfile: async ()=>{
            set({
                isLoading: true,
                error: null
            });
            await new Promise((resolve)=>setTimeout(resolve, 300));
            const profile = {
                id: 1,
                name: "Mock User",
                email: "mock@example.com",
                nickName: "Mock Nickname",
                imageKey: "https://api.dicebear.com/9.x/avataaars/svg?seed=Felix"
            };
            set({
                isAuthenticated: true,
                user: profile,
                isLoading: false
            });
            return {
                success: true,
                profile
            };
        },
        // === 로그인 폼 액션 ===
        setEmail: (email)=>set({
                email
            }),
        setPassword: (password)=>set({
                password
            }),
        setEmailError: (error)=>set({
                emailError: error
            }),
        setPasswordError: (error)=>set({
                passwordError: error
            }),
        // === 비밀번호 재설정 액션 ===
        setVerificationCode: (code)=>set({
                verificationCode: code
            }),
        setNewPassword: (password)=>set({
                newPassword: password
            }),
        setConfirmPassword: (password)=>set({
                confirmPassword: password
            }),
        setVerificationCodeError: (error)=>set({
                verificationCodeError: error
            }),
        setNewPasswordError: (error)=>set({
                newPasswordError: error
            }),
        setConfirmPasswordError: (error)=>set({
                confirmPasswordError: error
            }),
        setCodeSent: (sent)=>set({
                isCodeSent: sent
            }),
        // === 초기화 액션 ===
        resetState: ()=>set({
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
                confirmPasswordError: ""
            }),
        resetErrors: ()=>set({
                error: null,
                emailError: "",
                passwordError: "",
                verificationCodeError: "",
                newPasswordError: "",
                confirmPasswordError: ""
            }),
        resetForm: ()=>set({
                email: "",
                password: "",
                emailError: "",
                passwordError: ""
            }),
        resetPasswordResetState: ()=>set({
                verificationCode: "",
                newPassword: "",
                confirmPassword: "",
                isCodeSent: false,
                verificationCodeError: "",
                newPasswordError: "",
                confirmPasswordError: ""
            }),
        // === 초기화 (앱 시작 시 로그인 상태 확인 - 목업은 항상 true 또는 로컬 스토리지 체크 흉내) ===
        initialize: ()=>{
        // 목업: 항상 로그인 상태 유지하거나, 필요 시 false로 변경 가능
        // 여기서는 기본값을 true로 설정해둠
        }
    }));
const __TURBOPACK__default__export__ = useAuthStore;
}),
"[project]/Desktop/Project/CoDiYoung/src/components/AuthInitializer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
"use client";
;
;
function AuthInitializer() {
    const initialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.initialize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initialize();
    }, [
        initialize
    ]);
    return null;
}
}),
"[project]/Desktop/Project/CoDiYoung/src/components/TokenExpirationHandler.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TokenExpirationHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
function TokenExpirationHandler() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Mock Mode: No token checks
        return ()=>{};
    }, []);
    // 이 컴포넌트는 UI를 렌더링하지 않음
    return null;
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/Project/CoDiYoung/src/hooks/useAuth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthActions",
    ()=>useAuthActions,
    "useAuthState",
    ()=>useAuthState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
;
const useAuthState = ()=>{
    const { isAuthenticated, user, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return {
        isAuthenticated,
        user,
        isLoading,
        error
    };
};
const useAuthActions = ()=>{
    const { login, logout, loadProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    return {
        handleLogin: login,
        handleLogout: logout,
        fetchProfile: loadProfile
    };
};
}),
"[project]/Desktop/Project/CoDiYoung/src/constants/routes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 모든 라우트 경로 상수
__turbopack_context__.s([
    "ADMIN_ROUTES",
    ()=>ADMIN_ROUTES,
    "AUTH_ROUTES",
    ()=>AUTH_ROUTES,
    "ROUTES",
    ()=>ROUTES
]);
const ROUTES = {
    // 메인 페이지
    HOME: "/",
    // 인증 관련 페이지
    SIGNIN: "/signin",
    FIND_PASSWORD: "/findpassword",
    RESET_PASSWORD: "/resetpassword",
    SUCCESS_RESET_PASSWORD: "/successresetpassword",
    // 동적 라우트
    STUDY_CHANNEL: "/study/:userId",
    PROJECTS: "/projects",
    PROJECT_DETAIL: "/project/:projectId",
    // 사용자 기능
    WRITE: "/write",
    WRITE_VIEW: "/write/:id",
    EDIT: "/edit/:id",
    PROFILE: "/profile",
    //어드민 페이지
    ADMIN_PAGE: "/admin"
};
const ADMIN_ROUTES = {
    HOME: "/admin/home",
    CONTENT: "/admin/content",
    USERS: "/admin/users",
    BANNER: "/admin/banner",
    SETTINGS: "/admin/settings"
};
const AUTH_ROUTES = [
    ROUTES.SIGNIN,
    ROUTES.FIND_PASSWORD,
    ROUTES.RESET_PASSWORD,
    ROUTES.SUCCESS_RESET_PASSWORD
];
}),
"[project]/Desktop/Project/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// 모든 텍스트 메시지 상수
__turbopack_context__.s([
    "MESSAGES",
    ()=>MESSAGES
]);
const MESSAGES = {
    // 검증 메시지
    VALIDATION: {
        EMAIL_REQUIRED: "이메일을 입력해주세요.",
        EMAIL_INVALID: "올바른 이메일 형식이 아닙니다.",
        PASSWORD_REQUIRED: "비밀번호를 입력해주세요.",
        PASSWORD_MIN_LENGTH: "비밀번호는 최소 8자 이상이어야 합니다.",
        PASSWORD_NEED_LOWERCASE: "비밀번호에 소문자를 포함해야 합니다.",
        PASSWORD_NEED_UPPERCASE: "비밀번호에 대문자를 포함해야 합니다.",
        PASSWORD_NEED_NUMBER: "비밀번호에 숫자를 포함해야 합니다.",
        PASSWORD_NEED_SPECIAL: "비밀번호에 특수문자(!@#$%^&*)를 포함해야 합니다.",
        PASSWORD_CONFIRM_REQUIRED: "비밀번호 확인을 입력해주세요.",
        PASSWORD_NOT_MATCH: "비밀번호가 일치하지 않습니다.",
        VERIFICATION_CODE_REQUIRED: "인증번호를 입력해주세요.",
        EMAIL_REQUIRED_INPUT: "이메일을 입력해 주세요."
    },
    // UI 메시지
    UI: {
        LOADING: "로딩 중...",
        LOGIN: "로그인",
        LOGOUT: "로그아웃",
        SIGNUP: "회원가입",
        FIND_PASSWORD: "비밀번호 찾기",
        RESET_PASSWORD: "비밀번호 재설정",
        CONFIRM: "확인",
        CANCEL: "취소",
        CLOSE: "닫기",
        SUBMIT: "제출",
        APPLY: "신청하기",
        EDIT: "수정",
        DELETE: "삭제",
        SAVE: "저장",
        RECORD: "기록하기",
        EXPLORE: "구경하기",
        AUTO_LOGIN: "자동 로그인",
        BACK_TO_LOGIN: "로그인으로 돌아가기",
        PREVIOUS: "이전으로",
        SEND_VERIFICATION: "인증번호보내기",
        SENT_COMPLETE: "전송완료",
        VERIFY_CODE: "인증확인",
        CHANGE_COMPLETE: "변경 완료",
        CHANGE_IMAGE: "이미지 찾기",
        PASSWORD_RESET_COMPLETE: "비밀번호 변경 완료!!",
        MY_PROFILE: "내 프로필",
        LOGGING_IN: "로그인 중...",
        NEW_PASSWORD_SETUP: "새 비밀번호 설정",
        EDIT_COMPLETE: "수정 완료",
        WRITE_COMPLETE: "새 글 작성 완료",
        DELETE_COMPLETE: "삭제 완료",
        DELETE_CONFIRM: "를 삭제하시겠습니까?"
    },
    // 에러 메시지
    ERRORS: {
        LOGIN_FAILED: "로그인에 실패했습니다.",
        NETWORK_ERROR: "서버에 연결할 수 없습니다. 네트워크를 확인해주세요.",
        LOGIN_REQUIRED: "로그인이 필요합니다.",
        PROFILE_API_NOT_IMPLEMENTED: "프로필 API가 구현되지 않았습니다.",
        API_INTEGRATION_REQUIRED: "API 연동이 필요합니다.",
        GET_CURRENT_USER_FAILED: "Failed to get current user:"
    },
    // 모달 제목
    MODAL_TITLES: {
        LOGIN: "로그인",
        FIND_PASSWORD: "비밀번호 찾기",
        RESET_PASSWORD: "비밀번호 재설정",
        RECORD: "기록",
        PROJECT_DETAIL: "프로젝트 상세",
        STUDY_DETAIL: "스터디 상세",
        PROFILE: "프로필",
        LOGIN_REQUIRED: "로그인 후 사용 가능한 서비스 입니다"
    },
    // 섹션 제목
    SECTIONS: {
        PARTNERS_SUPPORTERS: "파트너 & 서포터",
        ATTENDANCE_CHECK: "출석체크",
        STUDY_LIST: "스터디",
        PROJECT_LIST: "프로젝트",
        TEAM_MEMBERS: "팀원",
        TECH_STACK: "기술 스택",
        PROJECT_DESCRIPTION: "프로젝트 설명",
        PROFILE_INFO: "프로필"
    },
    // 플레이스홀더
    PLACEHOLDERS: {
        EMAIL: "아이디를 입력하세요",
        PASSWORD: "비밀번호를 입력하세요",
        NEW_PASSWORD: "새 비밀번호를 입력하세요",
        CONFIRM_PASSWORD: "비밀번호를 다시 입력하세요",
        VERIFICATION_CODE: "인증번호를 입력하세요",
        PROJECT_IMAGE: "프로젝트 이미지",
        PROJECT_NAME: "프로젝트 이름",
        PROJECT_SLOGAN: "프로젝트 슬로건",
        PROJECT_DESCRIPTION: "프로젝트 설명 또는 이미지가 들어갈 영역입니다."
    }
};
}),
"[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js [app-ssr] (ecmascript) <export default as UserCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/hooks/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function UserProfile() {
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthState"])();
    const { handleLogout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthActions"])();
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.resetState);
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // 프로필 정보 로드 (Mock)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Mock data for profile
        setProfileImage("https://api.dicebear.com/9.x/avataaars/svg?seed=Felix");
        setNickname("Mock User");
    }, []);
    const onLogout = async ()=>{
        await handleLogout();
        resetState(); // 폼 상태 초기화 (이메일, 비밀번호 등)
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].HOME);
    };
    const onProfileClick = ()=>{
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].PROFILE);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "p-1 rounded-full hover:ring-2 hover:ring-gray-300 transition-all",
                children: [
                    profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: profileImage,
                        alt: nickname || user?.name || '프로필',
                        className: "w-8 h-8 rounded-full object-cover",
                        onError: (e)=>{
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__["UserCircleIcon"], {
                        className: `w-8 h-8 text-gray-500 ${profileImage ? 'hidden' : 'block'}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onProfileClick,
                        className: "btn-menu-item",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].UI.MY_PROFILE
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "btn-menu-item",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].UI.LOGOUT
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// CSS 변수를 사용하는 색상 유틸리티 함수
__turbopack_context__.s([
    "COLORS",
    ()=>COLORS,
    "COLOR_VARIANTS",
    ()=>COLOR_VARIANTS,
    "getCSSVar",
    ()=>getCSSVar
]);
const getCSSVar = (varName)=>`var(--color-${varName})`;
const COLORS = {
    // 주요 브랜드 색상
    PRIMARY: getCSSVar('primary'),
    SECONDARY: getCSSVar('secondary'),
    ACCENT: getCSSVar('accent'),
    BORDER: getCSSVar('border'),
    // 기타 색상
    WHITE: getCSSVar('white'),
    BLACK: getCSSVar('black'),
    // 상태 색상
    ERROR: getCSSVar('error'),
    SUCCESS: getCSSVar('success'),
    WARNING: getCSSVar('warning'),
    // 회색 계열
    GRAY_50: getCSSVar('gray-50'),
    GRAY_100: getCSSVar('gray-100'),
    GRAY_200: getCSSVar('gray-200'),
    GRAY_300: getCSSVar('gray-300'),
    GRAY_400: getCSSVar('gray-400'),
    GRAY_500: getCSSVar('gray-500'),
    GRAY_600: getCSSVar('gray-600'),
    GRAY_700: getCSSVar('gray-700'),
    GRAY_800: getCSSVar('gray-800'),
    GRAY_900: getCSSVar('gray-900'),
    // 파스텔/기타 색상
    BLUE_600: getCSSVar('blue-600'),
    BLUE_800: getCSSVar('blue-800'),
    BLUE_900: getCSSVar('blue-900'),
    RED_600: getCSSVar('red-600'),
    // 테이블 및 에디터용 색상  
    TABLE_BORDER: getCSSVar('table-border'),
    TABLE_HEADER_BG: getCSSVar('table-header-bg'),
    EDITOR_BORDER: getCSSVar('editor-border'),
    // 특수 색상
    CUSTOM_GRAY: getCSSVar('custom-gray')
};
const COLOR_VARIANTS = {
    button: {
        primary: {
            background: COLORS.PRIMARY,
            text: COLORS.WHITE,
            hover: `color-mix(in srgb, ${COLORS.PRIMARY} 80%, transparent)`,
            focus: `color-mix(in srgb, ${COLORS.PRIMARY} 30%, transparent)`
        },
        secondary: {
            background: COLORS.WHITE,
            text: COLORS.SECONDARY,
            border: COLORS.PRIMARY,
            hover: COLORS.PRIMARY,
            hoverText: COLORS.WHITE
        }
    },
    input: {
        border: COLORS.PRIMARY,
        focus: COLORS.PRIMARY,
        error: COLORS.ERROR
    },
    modal: {
        border: COLORS.SECONDARY,
        background: COLORS.WHITE
    }
};
}),
"[project]/Desktop/Project/CoDiYoung/src/components/LoginButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)");
;
;
;
function LoginButton({ onLoginClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onLoginClick,
            className: "btn-nav",
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_700
            },
            onMouseEnter: (e)=>e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_100,
            onMouseLeave: (e)=>e.target.style.backgroundColor = 'transparent',
            "aria-label": "로그인 모달 열기",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].UI.LOGIN
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/LoginButton.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/LoginButton.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/components/AuthStatusBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthStatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/hooks/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$UserProfile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/components/UserProfile.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$LoginButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/components/LoginButton.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AuthStatusBar() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthState"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLoginClick = ()=>{
        router.push("/signin");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center",
        children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$UserProfile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/AuthStatusBar.jsx",
            lineNumber: 19,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$LoginButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLoginClick: handleLoginClick
        }, void 0, false, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/AuthStatusBar.jsx",
            lineNumber: 21,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/AuthStatusBar.jsx",
        lineNumber: 17,
        columnNumber: 7
    }, this);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$AuthStatusBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/components/AuthStatusBar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
function Header({ disableAuthModal = false }) {
    const goToHomeHandle = ()=>{
        window.location.href = "/"; // 홈으로 이동 + 새로고침
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative z-[1000] px-4 sm:px-6 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-12 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: goToHomeHandle,
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/cdylogo.png",
                        alt: "CoDiYoung Logo",
                        className: "h-9 w-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Header.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Header.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                !disableAuthModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$AuthStatusBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Header.jsx",
                    lineNumber: 17,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Header.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/Header.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/Project/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONFIG",
    ()=>CONFIG
]);
const CONFIG = {
    // 검증 설정
    VALIDATION: {
        PASSWORD_MIN_LENGTH: 8,
        EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        PASSWORD_PATTERNS: {
            LOWERCASE: /(?=.*[a-z])/,
            UPPERCASE: /(?=.*[A-Z])/,
            NUMBER: /(?=.*\d)/,
            SPECIAL: /(?=.*[!@#$%^&*()-_=+[\]{};:,.<>?])/
        }
    },
    // 에디터 설정
    EDITOR: {
        MIN_HEIGHT: 300,
        DEFAULT_PADDING: 16,
        LINE_HEIGHT: 1.6,
        HELP_TIMEOUT: 3000,
        VIDEO: {
            DEFAULT_WIDTH: "560",
            DEFAULT_HEIGHT: "315"
        },
        TABLE: {
            DEFAULT_ROWS: 3,
            DEFAULT_COLS: 3,
            DEFAULT_HTML: `
        <table class="editor-table">
          <tr>
            <th>헤더 1</th>
            <th>헤더 2</th>
            <th>헤더 3</th>
          </tr>
          <tr>
            <td>데이터 1</td>
            <td>데이터 2</td>
            <td>데이터 3</td>
          </tr>
          <tr>
            <td>데이터 4</td>
            <td>데이터 5</td>
            <td>데이터 6</td>
          </tr>
        </table>
      `
        }
    },
    // 레이아웃 설정
    LAYOUT: {
        HEADER_HEIGHT: 64,
        HEADER_TOTAL_HEIGHT: 96,
        MAX_CONTENT_WIDTH: 1240,
        AUTH_MAX_WIDTH: 1120,
        CONTAINER_PADDING: {
            MOBILE: 16,
            TABLET: 24,
            DESKTOP: 48
        },
        GRID: {
            STUDY_COLUMNS: 12,
            PROJECT_COLUMNS: 5,
            PARTNER_GAP: 128
        }
    },
    // 카드/아이템 설정
    CARD: {
        PROJECT: {
            WIDTH: 192,
            GAP: 70,
            HEIGHT: 256
        },
        STUDY: {
            DEFAULT_COUNT: 9,
            GRID_COLUMNS: 3
        },
        PARTNER: {
            WIDTH: 108,
            HEIGHT: 60,
            GAP: 32
        }
    },
    // 애니메이션 설정
    ANIMATION: {
        TRANSITION_DURATION: 200,
        FADE_DURATION: 300,
        SLIDE_DURATION: 250,
        BOUNCE_DURATION: 500
    },
    // 기본 카운트/제한값
    DEFAULTS: {
        STUDY_COUNT: 1234,
        PROJECT_COUNT: 10,
        TEAM_MEMBERS_COUNT: 5,
        TECH_STACK_COUNT: 3,
        PARTNERS_COUNT: 5,
        PAGINATION_SIZE: 10,
        SEARCH_MIN_LENGTH: 2
    },
    // Border Radius 설정
    BORDER_RADIUS: {
        SMALL: 5,
        MEDIUM: 15,
        LARGE: 20,
        EXTRA_LARGE: 25
    },
    // 버튼 크기 설정 (sizes.js에서 이동)
    BUTTON_SIZES: {
        sm: {
            padding: "0.5rem 1rem",
            fontSize: "0.875rem",
            height: "2rem"
        },
        md: {
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
            height: "2.75rem"
        },
        lg: {
            padding: "1rem 2rem",
            fontSize: "1.125rem",
            height: "3rem"
        }
    },
    // API 엔드포인트 설정
    API: {
        BASE_URL: ("TURBOPACK compile-time value", "http://15.164.125.28:8080"),
        AUTH: {
            LOGIN: "/api/auth/login",
            LOGOUT: "/api/auth/logout",
            PROFILE: "/api/auth/profile",
            SIGNUP: "/api/auth/join",
            SIGNUP_ADMIN: "/api/admin/create"
        }
    },
    // Z-Index 설정
    Z_INDEX: {
        MODAL_BACKDROP: 1100,
        MODAL_CONTENT: 1101,
        MODAL_TITLE: 1200
    },
    // Input 크기 설정
    INPUT_SIZES: {
        sm: "h-10 text-sm px-3",
        md: "h-12 text-base px-4",
        lg: "h-14 text-lg px-5",
        xl: "h-16 text-xl px-6"
    },
    // 모달 크기 설정
    MODAL_SIZES: {
        DEFAULT: {
            width: 1316,
            height: 939,
            ratio: 939 / 1316
        },
        PROJECT_DETAIL: {
            width: 704,
            height: 574,
            ratio: 574 / 704,
            startX: 416,
            startY: 1520,
            buttonWidth: 240,
            buttonHeight: 108
        },
        SMALL: {
            width: 400,
            height: 300
        }
    },
    // 반응형 브레이크포인트
    RESPONSIVE: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px"
    },
    // 아바타 크기 설정
    AVATAR_SIZES: {
        sm: "w-10 h-10",
        md: "w-12 h-12",
        lg: "w-56 h-56"
    },
    // 스터디 카테고리 설정
    STUDY_CATEGORIES: {
        coding: "코딩",
        design: "디자인",
        video: "영상"
    },
    // 테스트 사용자 데이터
    TEST_USER: {
        name: "김지호",
        email: "test@example.com",
        avatar: null
    }
};
}),
"[project]/Desktop/Project/CoDiYoung/src/components/ClientAppLayout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientAppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Project/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ClientAppLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isAuthRoute = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ROUTES"].includes(pathname);
    // user로 시작하는 경로 패턴 매칭
    const hideHeaderOnUser = pathname.startsWith("/user/");
    const hideHeader = hideHeaderOnUser || isAuthRoute;
    // ✅ 인증 페이지일 때 페이지 스크롤 완전 차단 (html/body)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthRoute) {
            const prevHtml = document.documentElement.style.overflowY;
            const prevBody = document.body.style.overflowY;
            document.documentElement.style.overflowY = "hidden";
            document.body.style.overflowY = "hidden";
            return ()=>{
                document.documentElement.style.overflowY = prevHtml;
                document.body.style.overflowY = prevBody;
            };
        }
    }, [
        isAuthRoute
    ]);
    // 레이아웃 스타일 정의 
    const base = "relative z-0";
    // NOTE: Tailwind does not support dynamic class names like start-[${val}]. 
    // We should ideally use style prop or predefined classes. 
    // However, keeping original logic for now, but converting config value usage if it was used in template literal.
    // The original used: min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)]
    // And: max-w-[${CONFIG.LAYOUT.MAX_CONTENT_WIDTH}px]
    const authLayout = `min-h-[calc(100dvh-${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].LAYOUT.HEADER_TOTAL_HEIGHT}px)] grid place-items-center overflow-hidden`;
    // Using style object for dynamic values is safer in Tailwind if arbitrary values are not detected at build time
    // But JIT might pick it up if the config file is constant. 
    // Let's keep it as string class for now, but if it fails, we move to style={{ maxWidth: ... }}
    const normalLayout = `max-w-[${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].LAYOUT.MAX_CONTENT_WIDTH}px] mx-auto px-6 md:px-24 lg:px-36`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-x-hidden",
        children: [
            !hideHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                disableAuthModal: isAuthRoute
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/components/ClientAppLayout.jsx",
                lineNumber: 47,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Project$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `${base} ${isAuthRoute ? authLayout : normalLayout}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/Project/CoDiYoung/src/components/ClientAppLayout.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/Project/CoDiYoung/src/components/ClientAppLayout.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f47c1dbe._.js.map