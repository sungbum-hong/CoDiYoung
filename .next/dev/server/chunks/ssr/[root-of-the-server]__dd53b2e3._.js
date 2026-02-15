module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/providers/QueryProvider.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QueryProvider,
    "queryClient",
    ()=>queryClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/@tanstack/react-query-devtools/build/modern/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
// React Query 클라이언트 설정
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: [
            children,
            ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$tanstack$2f$react$2d$query$2d$devtools$2f$build$2f$modern$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ReactQueryDevtools"], {
                initialIsOpen: false,
                position: "bottom-right"
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/providers/QueryProvider.jsx",
                lineNumber: 28,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/providers/QueryProvider.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/프로젝트/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/프로젝트/CoDiYoung/src/services/authService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthService",
    ()=>AuthService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)");
;
;
class AuthService {
    // 로그인 함수
    static async login(email, password) {
        const fullUrl = `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.AUTH.LOGIN}`;
        try {
            const response = await fetch(fullUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                mode: "cors",
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (!response.ok) {
                let errorData = {};
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    errorData = await response.json().catch(()=>({}));
                } else {
                    const textError = await response.text().catch(()=>"");
                    errorData = {
                        message: textError
                    };
                }
                if (response.status === 403) {
                    throw new Error(`접근이 거부되었습니다. 계정 정보를 확인해주세요.\n사용한 계정: ${email}\n\n다른 계정들을 시도해보세요:\n- admin@test.com\n- user@example.com\n- test@test.com`);
                }
                throw new Error(errorData.message || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.LOGIN_FAILED);
            }
            const userData = await response.json();
            // JWT 토큰 저장
            if (userData.accessToken) {
                // JWT 토큰 디코딩해서 만료시간 확인
                try {
                    const payload = JSON.parse(atob(userData.accessToken.split(".")[1]));
                    const now = Math.floor(Date.now() / 1000);
                } catch (e) {
                // JWT 디코딩 실패 시 무시
                }
                // saveUserToStorage 메서드 사용으로 통합
                this.saveUserToStorage({
                    userId: userData.userId,
                    email: userData.email,
                    accessToken: userData.accessToken
                });
            }
            return userData;
        } catch (error) {
            if (error.name === "TypeError" && error.message.includes("fetch")) {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.NETWORK_ERROR);
            }
            throw error;
        }
    }
    // 로컬 스토리지 정리 (private 메서드)
    static clearUserStorage() {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("user_info");
    }
    // 로그아웃 함수
    static async logout() {
        try {
            const token = localStorage.getItem("auth_token");
            // 서버에 로그아웃 요청
            await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.AUTH.LOGOUT}`, {
                method: "POST",
                headers: {
                    Authorization: token ? `Bearer ${token}` : "",
                    "Content-Type": "application/json"
                }
            });
        } catch (error) {
        // 서버 요청 실패해도 로컬 정리는 수행 (무시)
        } finally{
            // 성공/실패 관계없이 로컬 스토리지 정리
            this.clearUserStorage();
        }
    }
    // 현재 로그인된 사용자 정보 확인
    static getCurrentUser() {
        try {
            const token = localStorage.getItem("auth_token");
            // 토큰이 있다면 만료 체크
            if (token && this.isTokenExpired(token)) {
                this.handleTokenExpiration();
                return null;
            }
            const userInfo = localStorage.getItem("user_info");
            return userInfo ? JSON.parse(userInfo) : null;
        } catch (error) {
            return null;
        }
    }
    // API 요청 전 토큰 유효성 검사
    static validateTokenBeforeRequest(requireToken = true) {
        const token = localStorage.getItem("auth_token");
        // 토큰이 없고 필수가 아닌 경우 (조회 API 등)
        if (!token && !requireToken) {
            return null;
        }
        // 토큰이 없고 필수인 경우
        if (!token && requireToken) {
            throw new Error("로그인이 필요합니다.");
        }
        // 토큰이 있는 경우 만료 체크
        if (token && this.isTokenExpired(token)) {
            this.handleTokenExpiration();
            throw new Error("로그인이 만료되었습니다. 다시 로그인해주세요.");
        }
        return token;
    }
    // 사용자 정보를 로컬 스토리지에 저장
    static saveUserToStorage(user) {
        try {
            localStorage.setItem("user_info", JSON.stringify(user));
            if (user.accessToken) {
                localStorage.setItem("auth_token", user.accessToken);
                // JWT 토큰 만료시간 확인 및 자동 로그아웃 타이머 설정
                this.setupTokenExpirationTimer(user.accessToken);
            }
        } catch (error) {
        // 저장 실패 시 무시
        }
    }
    // JWT 토큰 디코딩 및 만료시간 확인
    static decodeJWTToken(token) {
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            return payload;
        } catch (error) {
            return null;
        }
    }
    // 토큰 만료 확인
    static isTokenExpired(token) {
        const payload = this.decodeJWTToken(token);
        if (!payload || !payload.exp) return true;
        const now = Math.floor(Date.now() / 1000);
        return now >= payload.exp;
    }
    // 토큰 만료 타이머 설정
    static setupTokenExpirationTimer(token) {
        // 기존 타이머가 있으면 클리어
        if (this.expirationTimer) {
            clearTimeout(this.expirationTimer);
        }
        const payload = this.decodeJWTToken(token);
        if (!payload || !payload.exp) return;
        const now = Math.floor(Date.now() / 1000);
        const expiration = payload.exp;
        const timeUntilExpiration = (expiration - now) * 1000; // 밀리초로 변환
        // 만료 2분 전에 조용한 경고 (덜 방해적)
        const warningTime = Math.max(timeUntilExpiration - 2 * 60 * 1000, 0);
        if (warningTime > 0) {
            setTimeout(()=>{
                // 현재 페이지가 활성 상태일 때만 경고
                if (!document.hidden && window.dispatchEvent) {
                    window.dispatchEvent(new CustomEvent("tokenExpireWarning", {
                        detail: {
                            remainingTime: 2 * 60 * 1000
                        }
                    }));
                }
            }, warningTime);
        }
        // 토큰 만료 시 자동 로그아웃
        if (timeUntilExpiration > 0) {
            this.expirationTimer = setTimeout(()=>{
                this.handleTokenExpiration();
            }, timeUntilExpiration);
        } else {
            // 이미 만료된 토큰
            this.handleTokenExpiration();
        }
    }
    // 토큰 만료 처리
    static handleTokenExpiration() {
        // 로컬 스토리지 정리
        this.clearUserStorage();
        // 토큰 만료 이벤트 발생
        if (window.dispatchEvent) {
            window.dispatchEvent(new CustomEvent("tokenExpired", {
                detail: {
                    message: "로그인이 만료되었습니다. 다시 로그인해주세요.",
                    timestamp: new Date().toISOString()
                }
            }));
        }
        // 타이머 정리
        if (this.expirationTimer) {
            clearTimeout(this.expirationTimer);
            this.expirationTimer = null;
        }
    }
    // admin 토큰 만료 처리
    static handleAdminTokenExpiration() {
        // admin 로컬 스토리지 정리
        localStorage.removeItem("admin_access_token");
        localStorage.removeItem("admin_user_info");
        // admin 토큰 만료 이벤트 발생
        if (window.dispatchEvent) {
            window.dispatchEvent(new CustomEvent("adminTokenExpired", {
                detail: {
                    message: "관리자 로그인이 만료되었습니다. 다시 로그인해주세요.",
                    timestamp: new Date().toISOString()
                }
            }));
        }
        // admin 타이머 정리
        if (this.adminExpirationTimer) {
            clearTimeout(this.adminExpirationTimer);
            this.adminExpirationTimer = null;
        }
    }
    // admin 토큰 만료 타이머 설정 (경고 없이 바로 로그아웃)
    static setupAdminTokenExpirationTimer(token) {
        // 기존 타이머가 있으면 클리어
        if (this.adminExpirationTimer) {
            clearTimeout(this.adminExpirationTimer);
        }
        const payload = this.decodeJWTToken(token);
        if (!payload || !payload.exp) return;
        const now = Math.floor(Date.now() / 1000);
        const expiration = payload.exp;
        const timeUntilExpiration = (expiration - now) * 1000; // 밀리초로 변환
        // 어드민 토큰은 경고 없이 만료 시 즉시 로그아웃 (보안상 더 안전)
        if (timeUntilExpiration > 0) {
            this.adminExpirationTimer = setTimeout(()=>{
                this.handleAdminTokenExpiration();
            }, timeUntilExpiration);
        } else {
            // 이미 만료된 토큰
            this.handleAdminTokenExpiration();
        }
    }
    // === 유틸리티 메서드 ===
    /**
   * 회원가입 데이터 유효성 검사 (OpenAPI SignUpRequest 스키마 기준)
   * @param {Object} signUpData - 검사할 회원가입 데이터
   */ static validateSignUpData(signUpData) {
        const required = [
            "email",
            "password",
            "nickname"
        ];
        const missing = required.filter((field)=>!signUpData[field]);
        if (missing.length > 0) {
            throw new Error(`필수 필드가 누락되었습니다: ${missing.join(", ")}`);
        }
        // 이메일 형식 검증
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(signUpData.email)) {
            throw new Error("올바른 이메일 형식이 아닙니다.");
        }
        // 비밀번호 길이 검증
        if (signUpData.password.length < 8) {
            throw new Error("비밀번호는 8자 이상이어야 합니다.");
        }
        // 닉네임 길이 검증
        if (signUpData.nickname.length < 2 || signUpData.nickname.length > 50) {
            throw new Error("닉네임은 2-50자 사이여야 합니다.");
        }
        // 전화번호 검증 (선택사항)
        if (signUpData.phoneNumber) {
            const phoneRegex = /^[0-9-+() ]+$/;
            if (!phoneRegex.test(signUpData.phoneNumber)) {
                throw new Error("올바른 전화번호 형식이 아닙니다.");
            }
        }
        // 사용자 카테고리 검증 (선택사항)
        if (signUpData.userCategory) {
            const validCategories = [
                "video_editing",
                "coding",
                "design"
            ];
            if (!validCategories.includes(signUpData.userCategory.toLowerCase())) {
                throw new Error(`유효하지 않은 사용자 카테고리입니다. (허용: ${validCategories.join(", ")})`);
            }
        }
        return true;
    }
    // 앱 시작 시 토큰 유효성 검사
    static initializeTokenCheck() {
        const token = localStorage.getItem("auth_token");
        if (token) {
            if (this.isTokenExpired(token)) {
                this.handleTokenExpiration();
            } else {
                this.setupTokenExpirationTimer(token);
            }
        }
        // admin 토큰도 함께 검사
        const adminToken = localStorage.getItem("admin_access_token");
        if (adminToken) {
            if (this.isTokenExpired(adminToken)) {
                this.handleAdminTokenExpiration();
            } else {
                this.setupAdminTokenExpirationTimer(adminToken);
            }
        }
    }
    // 회원가입 (Admin 방식: /api/admin/create - Query Parameter)
    static async signUpAdmin(signUpData) {
        try {
            // 1. 데이터 유효성 검사
            this.validateSignUpData(signUpData);
            // 2. OpenAPI 명세서 기준: Query Parameter로 전송
            const params = new URLSearchParams({
                email: signUpData.email,
                password: signUpData.password,
                phoneNumber: signUpData.phoneNumber || "",
                userCategory: signUpData.userCategory || "coding",
                nickname: signUpData.nickname
            });
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.AUTH.SIGNUP_ADMIN}?${params}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                mode: "cors"
            });
            if (!response.ok) {
                let errorData = {};
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    errorData = await response.json().catch(()=>({}));
                } else {
                    const textError = await response.text().catch(()=>"");
                    errorData = {
                        message: textError
                    };
                }
                // 상태 코드별 에러 처리
                if (response.status === 400) {
                    throw new Error(errorData.message || "입력 데이터가 올바르지 않습니다.");
                }
                if (response.status === 409) {
                    throw new Error("이미 존재하는 이메일입니다.");
                }
                throw new Error(errorData.message || "회원가입에 실패했습니다.");
            }
            // 성공 응답 처리 (OpenAPI 명세서: string 응답)
            const responseText = await response.text();
            return {
                success: true,
                message: responseText || "회원가입이 완료되었습니다.",
                data: signUpData.email
            };
        } catch (error) {
            if (error.name === "TypeError" && error.message.includes("fetch")) {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.NETWORK_ERROR);
            }
            throw error;
        }
    }
    // 회원가입 (일반 방식: /api/auth/join - Request Body)
    static async signUp(signUpData) {
        try {
            // 1. 데이터 유효성 검사
            this.validateSignUpData(signUpData);
            // 2. OpenAPI 명세서 기준: Request Body로 전송
            const requestBody = {
                email: signUpData.email,
                password: signUpData.password,
                phoneNumber: signUpData.phoneNumber || "",
                userCategory: signUpData.userCategory || "coding",
                nickname: signUpData.nickname
            };
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.AUTH.SIGNUP}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                mode: "cors",
                body: JSON.stringify(requestBody)
            });
            if (!response.ok) {
                let errorData = {};
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    errorData = await response.json().catch(()=>({}));
                } else {
                    const textError = await response.text().catch(()=>"");
                    errorData = {
                        message: textError
                    };
                }
                // 상태 코드별 에러 처리
                if (response.status === 400) {
                    throw new Error(errorData.message || "입력 데이터가 올바르지 않습니다.");
                }
                if (response.status === 409) {
                    throw new Error("이미 존재하는 이메일입니다.");
                }
                throw new Error(errorData.message || "회원가입에 실패했습니다.");
            }
            // 성공 응답 처리 (OpenAPI 명세서: string 응답)
            const responseText = await response.text();
            return {
                success: true,
                message: responseText || "회원가입이 완료되었습니다.",
                data: signUpData.email
            };
        } catch (error) {
            if (error.name === "TypeError" && error.message.includes("fetch")) {
                throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.NETWORK_ERROR);
            }
            throw error;
        }
    }
    // 프로필 정보 조회 (API 완성 후 구현)
    static async getMyProfile() {
        const token = localStorage.getItem("auth_token");
        if (!token) {
            throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.LOGIN_REQUIRED);
        }
        // API 완성 후 실제 구현 예정
        throw new Error(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.PROFILE_API_NOT_IMPLEMENTED);
    }
    // 이메일 인증 코드 발송
    static async sendVerificationCode(email) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject(new Error(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.API_INTEGRATION_REQUIRED));
            }, 1000);
        });
    }
    // 비밀번호 재설정
    static async resetPassword(email, verificationCode, newPassword) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject(new Error(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].ERRORS.API_INTEGRATION_REQUIRED));
            }, 1000);
        });
    }
}
const __TURBOPACK__default__export__ = AuthService;
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/authService.js [app-ssr] (ecmascript)");
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
        // 로그인
        login: async (email, password)=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].login(email, password);
                set({
                    isAuthenticated: true,
                    user,
                    isLoading: false,
                    error: null
                });
                return {
                    success: true,
                    user
                };
            } catch (error) {
                set({
                    isAuthenticated: false,
                    user: null,
                    isLoading: false,
                    error: error.message
                });
                return {
                    success: false,
                    error: error.message
                };
            }
        },
        // 로그아웃
        logout: async ()=>{
            set({
                isLoading: true
            });
            try {
                await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].logout();
                // admin 토큰 및 정보도 함께 정리
                localStorage.removeItem("admin_access_token");
                localStorage.removeItem("admin_user_info");
                set({
                    isAuthenticated: false,
                    user: null,
                    isLoading: false,
                    error: null
                });
                return {
                    success: true
                };
            } catch (error) {
                // 에러가 발생해도 로컬 토큰은 정리
                localStorage.removeItem("admin_access_token");
                localStorage.removeItem("admin_user_info");
                set({
                    isAuthenticated: false,
                    user: null,
                    error: error.message,
                    isLoading: false
                });
                return {
                    success: false,
                    error: error.message
                };
            }
        },
        // 프로필 로드
        loadProfile: async ()=>{
            set({
                isLoading: true,
                error: null
            });
            try {
                const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].getMyProfile();
                set({
                    isAuthenticated: true,
                    user: profile,
                    isLoading: false
                });
                return {
                    success: true,
                    profile
                };
            } catch (error) {
                set({
                    error: error.message,
                    isLoading: false
                });
                return {
                    success: false,
                    error: error.message
                };
            }
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
                confirmPasswordError: ''
            }),
        resetErrors: ()=>set({
                error: null,
                emailError: '',
                passwordError: '',
                verificationCodeError: '',
                newPasswordError: '',
                confirmPasswordError: ''
            }),
        resetForm: ()=>set({
                email: '',
                password: '',
                emailError: '',
                passwordError: ''
            }),
        resetPasswordResetState: ()=>set({
                verificationCode: '',
                newPassword: '',
                confirmPassword: '',
                isCodeSent: false,
                verificationCodeError: '',
                newPasswordError: '',
                confirmPasswordError: ''
            }),
        // === 초기화 (앱 시작 시 로그인 상태 확인) ===
        initialize: ()=>{
            // 일반 사용자 로그인 확인
            const currentUser = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].getCurrentUser();
            if (currentUser) {
                set({
                    isAuthenticated: true,
                    user: currentUser
                });
                return;
            }
            // admin 토큰 확인
            const adminToken = localStorage.getItem("admin_access_token");
            const adminUserInfo = localStorage.getItem("admin_user_info");
            if (adminToken && adminUserInfo) {
                try {
                    const adminUser = JSON.parse(adminUserInfo);
                    set({
                        isAuthenticated: true,
                        user: {
                            ...adminUser,
                            isAdmin: true,
                            role: 'ADMIN'
                        }
                    });
                } catch (error) {
                    // admin 정보 파싱 실패 시 정리
                    localStorage.removeItem("admin_access_token");
                    localStorage.removeItem("admin_user_info");
                }
            }
        }
    }));
const __TURBOPACK__default__export__ = useAuthStore;
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/components/AuthInitializer.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthInitializer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
"use client";
;
;
function AuthInitializer() {
    const initialize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.initialize);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        initialize();
    }, [
        initialize
    ]);
    return null;
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/components/TokenExpirationHandler.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TokenExpirationHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/authService.js [app-ssr] (ecmascript)");
"use client";
;
;
function TokenExpirationHandler() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 앱 시작 시 토큰 유효성 검사
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].initializeTokenCheck();
        // 일반 토큰 만료 이벤트 리스너
        const handleTokenExpired = (event)=>{
            alert(event.detail.message);
            // 로그인 페이지로 리다이렉트 (필요시)
            if (window.location.pathname !== '/signin') {
                window.location.href = '/signin';
            }
        };
        // admin 토큰 만료 이벤트 리스너
        const handleAdminTokenExpired = (event)=>{
            alert(event.detail.message);
            // admin 로그인 페이지로 리다이렉트
            if (window.location.pathname !== '/admin/login') {
                window.location.href = '/admin/login';
            }
        };
        // 일반 토큰 만료 경고 이벤트 리스너 (덜 방해적)
        const handleTokenExpireWarning = (event)=>{
            // 작업 중인 사용자를 방해하지 않도록 조용한 알림
            console.info('토큰이 2분 후 만료됩니다.');
        // 필요시 상단에 작은 배너나 토스트 메시지로 대체 가능
        // 예: showToast('로그인이 곧 만료됩니다.', { duration: 5000, type: 'warning' });
        };
        // 이벤트 리스너 등록 (admin 경고는 제거)
        window.addEventListener('tokenExpired', handleTokenExpired);
        window.addEventListener('adminTokenExpired', handleAdminTokenExpired);
        window.addEventListener('tokenExpireWarning', handleTokenExpireWarning);
        // 페이지 포커스 시 토큰 재검사
        const handleFocus = ()=>{
            const token = localStorage.getItem('auth_token');
            if (token && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].isTokenExpired(token)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].handleTokenExpiration();
            }
            // admin 토큰도 함께 재검사
            const adminToken = localStorage.getItem('admin_access_token');
            if (adminToken && __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].isTokenExpired(adminToken)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].handleAdminTokenExpiration();
            }
        };
        window.addEventListener('focus', handleFocus);
        // 컴포넌트 언마운트 시 이벤트 리스너 정리
        return ()=>{
            window.removeEventListener('tokenExpired', handleTokenExpired);
            window.removeEventListener('adminTokenExpired', handleAdminTokenExpired);
            window.removeEventListener('tokenExpireWarning', handleTokenExpireWarning);
            window.removeEventListener('focus', handleFocus);
        };
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
"[project]/Desktop/프로젝트/CoDiYoung/src/hooks/useAuth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthActions",
    ()=>useAuthActions,
    "useAuthState",
    ()=>useAuthState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
;
;
function useAuthActions() {
    const setUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.setUser);
    const logout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.logout);
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.resetState);
    const loginWithTestData = ()=>{
        setUser(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].TEST_USER);
    };
    const handleLogout = async ()=>{
        await logout();
    };
    const resetAuthState = ()=>{
        resetState();
    };
    return {
        loginWithTestData,
        handleLogout,
        resetAuthState
    };
}
function useAuthState() {
    const isAuthenticated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.isAuthenticated);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.user);
    const isLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.isLoading);
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.error);
    return {
        isAuthenticated,
        user,
        isLoading,
        error
    };
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/services/common/api.utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiUtils",
    ()=>ApiUtils
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/authService.js [app-ssr] (ecmascript)");
;
class ApiUtils {
    /**
   * 공통 헤더 생성
   * @param {boolean} includeContentType - Content-Type 헤더 포함 여부
   * @param {boolean} requireAuth - 인증 토큰 필수 여부
   * @returns {Object} HTTP 헤더 객체
   */ static getCommonHeaders(includeContentType = true, requireAuth = true) {
        const headers = {};
        if (includeContentType) {
            headers['Content-Type'] = 'application/json';
        }
        headers['Accept'] = 'application/json';
        if (requireAuth) {
            try {
                // admin 토큰을 먼저 확인하고, 없으면 일반 토큰 사용
                let token = localStorage.getItem("admin_access_token");
                if (token) {
                // admin 토큰 만료 검증 로직 제거 (서버 401 응답에 의존)
                // 클라이언트 시간과 서버 시간 차이로 인한 오작동 방지
                } else {
                    token = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].validateTokenBeforeRequest(true);
                }
                if (token) {
                    headers['Authorization'] = `Bearer ${token}`;
                }
            } catch (error) {
                throw error;
            }
        } else {
            // requireAuth=false일 때는 토큰이 있으면 추가하고, 없거나 만료되었으면 무시
            let token = localStorage.getItem("admin_access_token");
            if (token) {
                // admin 토큰 만료 검증 (에러가 발생해도 무시)
                try {
                    if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].isTokenExpired(token)) {
                        localStorage.removeItem("admin_access_token");
                        localStorage.removeItem("admin_user_info");
                        token = null; // 만료된 토큰은 사용하지 않음
                    }
                } catch (error) {
                    token = null; // 토큰 검증 실패 시에도 무시
                }
            }
            if (!token) {
                token = localStorage.getItem("auth_token");
                // 토큰이 있는 경우에만 만료 검증 (에러가 발생해도 무시)
                if (token) {
                    try {
                        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].isTokenExpired(token)) {
                            token = null; // 만료된 토큰은 사용하지 않음
                        }
                    } catch (error) {
                        token = null; // 토큰 검증 실패 시에도 무시
                    }
                }
            }
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return headers;
    }
    /**
   * API 에러 핸들링
   * @param {Error} error - 발생한 에러
   * @param {string} context - 에러 발생 컨텍스트
   */ static handleApiError(error, context = '') {
        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            throw new Error('네트워크 연결 오류가 발생했습니다.');
        }
        if (error.name === 'AbortError') {
            throw new Error('요청이 취소되었습니다.');
        }
        if (error.message.includes('timeout')) {
            throw new Error('요청 시간이 초과되었습니다. 다시 시도해주세요.');
        }
        throw error;
    }
    /**
   * HTTP 응답 상태 코드별 인증 에러 처리
   * @param {Response} response - Fetch Response 객체
   */ static handleAuthError(response) {
        console.error('Auth Error detected:', {
            url: response.url,
            status: response.status,
            statusText: response.statusText
        });
        if (response.status === 401 || response.status === 403) {
            // admin 토큰이 있는지 확인
            const adminToken = localStorage.getItem("admin_access_token");
            if (adminToken) {
                // admin 토큰 관련 401/403 에러
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].handleAdminTokenExpiration();
                throw new Error('관리자 세션이 만료되었습니다. 다시 로그인해주세요.');
            } else {
                // 일반 유저 토큰 관련 401/403 에러
                __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$authService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthService"].handleTokenExpiration();
                throw new Error('로그인 세션이 만료되었습니다. 다시 로그인해주세요.');
            }
        }
    }
    /**
   * 공통 응답 처리
   * @param {Response} response - Fetch Response 객체
   * @param {string} errorMessage - 에러 시 표시할 기본 메시지
   * @param {string} expectedSchema - 예상되는 응답 스키마 타입
   * @returns {Promise<any>} 파싱된 응답 데이터
   */ static async handleResponse(response, errorMessage = 'API 요청 실패', expectedSchema = null, ignoreAuthError = false) {
        if (!response.ok) {
            // 401/403 에러 시 자동 로그아웃 처리 (ignoreAuthError가 false일 때만)
            if (!ignoreAuthError) {
                this.handleAuthError(response);
            }
            let errorData = {};
            let errorText = '';
            try {
                errorText = await response.text();
                if (errorText.trim()) {
                    // JSON 형식인지 확인
                    const trimmedText = errorText.trim();
                    if (trimmedText.startsWith('{') || trimmedText.startsWith('[')) {
                        errorData = JSON.parse(errorText);
                    } else {
                        errorData = {
                            message: errorText
                        };
                    }
                }
            } catch (e) {
                errorData = {
                    message: errorText || '서버 에러가 발생했습니다.'
                };
            }
            const finalErrorMessage = errorData.message || `${errorMessage} (${response.status})`;
            throw new Error(finalErrorMessage);
        }
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            try {
                const text = await response.text();
                if (text.trim() === '') {
                    return {
                        success: true
                    };
                }
                const trimmedText = text.trim();
                if (trimmedText.startsWith('{') || trimmedText.startsWith('[')) {
                    const parsedData = JSON.parse(text);
                    // 특정 응답 스키마 검증
                    if (expectedSchema === 'ProjectCompleteResponse') {
                        if (parsedData.success !== undefined && parsedData.data !== undefined) {
                            return parsedData;
                        }
                    }
                    return parsedData;
                } else {
                    return {
                        success: true,
                        message: text
                    };
                }
            } catch (e) {
                throw new Error('서버 응답을 파싱할 수 없습니다.');
            }
        } else {
            const text = await response.text();
            return text || {
                success: true
            };
        }
    }
    /**
   * 요청 옵션 생성
   * @param {string} method - HTTP 메서드
   * @param {Object} headers - 헤더 객체
   * @param {any} body - 요청 바디
   * @returns {Object} fetch 옵션 객체
   */ static createRequestOptions(method, headers, body = null) {
        const options = {
            method,
            headers,
            mode: 'cors',
            credentials: 'include'
        };
        if (body) {
            options.body = typeof body === 'string' ? body : JSON.stringify(body);
        }
        return options;
    }
    /**
   * fetchWrapper - 통합 fetch 유틸리티
   * @param {string} url - API 엔드포인트
   * @param {Object} options - fetch 옵션
   * @returns {Promise<any>} API 응답 데이터
   */ static async fetchWrapper(url, options = {}) {
        try {
            const headers = this.getCommonHeaders(options.includeContentType !== false, options.requireAuth !== false);
            const requestOptions = this.createRequestOptions(options.method || 'GET', {
                ...headers,
                ...options.headers
            }, options.body);
            const response = await fetch(url, requestOptions);
            return await this.handleResponse(response, options.errorMessage || 'API 요청 실패', null, options.ignoreAuthError);
        } catch (error) {
            this.handleApiError(error, options.context || '');
            throw error;
        }
    }
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/services/common/validation.utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * 공통 유효성 검사 유틸리티
 * 모든 서비스에서 공통으로 사용되는 검증 로직
 */ __turbopack_context__.s([
    "ValidationUtils",
    ()=>ValidationUtils
]);
class ValidationUtils {
    /**
   * 필수 필드 검증
   * @param {Object} data - 검증할 데이터 객체
   * @param {string[]} requiredFields - 필수 필드 배열
   * @throws {Error} 필수 필드 누락 시 에러
   */ static validateRequired(data, requiredFields) {
        const missing = requiredFields.filter((field)=>!data[field]);
        if (missing.length > 0) {
            throw new Error(`필수 필드가 누락되었습니다: ${missing.join(', ')}`);
        }
    }
    /**
   * 이미지 파일 유효성 검사
   * @param {File} file - 검사할 파일
   * @param {number} maxSize - 최대 파일 크기 (바이트)
   * @param {string[]} allowedTypes - 허용되는 MIME 타입 배열
   * @throws {Error} 파일 검증 실패 시 에러
   */ static validateImageFile(file, maxSize = 5 * 1024 * 1024, allowedTypes = [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp'
    ]) {
        if (!file) {
            throw new Error('파일이 선택되지 않았습니다.');
        }
        if (file.size > maxSize) {
            throw new Error(`파일 크기가 너무 큽니다. 최대 ${Math.round(maxSize / 1024 / 1024)}MB까지 업로드 가능합니다.`);
        }
        if (!allowedTypes.includes(file.type)) {
            throw new Error(`지원하지 않는 파일 형식입니다. (지원 형식: ${allowedTypes.join(', ')})`);
        }
        return true;
    }
    /**
   * 문자열 길이 검증
   * @param {string} value - 검증할 문자열
   * @param {string} fieldName - 필드명
   * @param {number} maxLength - 최대 길이
   * @param {number} minLength - 최소 길이
   * @throws {Error} 길이 검증 실패 시 에러
   */ static validateStringLength(value, fieldName, maxLength, minLength = 0) {
        if (typeof value !== 'string') {
            throw new Error(`${fieldName}은(는) 문자열이어야 합니다.`);
        }
        if (value.length < minLength) {
            throw new Error(`${fieldName}은(는) ${minLength}자 이상이어야 합니다.`);
        }
        if (value.length > maxLength) {
            throw new Error(`${fieldName}은(는) ${maxLength}자 이하여야 합니다.`);
        }
        return true;
    }
    /**
   * 숫자 범위 검증
   * @param {number} value - 검증할 숫자
   * @param {string} fieldName - 필드명
   * @param {number} min - 최소값
   * @param {number} max - 최대값
   * @throws {Error} 범위 검증 실패 시 에러
   */ static validateNumberRange(value, fieldName, min = 1, max = Number.MAX_SAFE_INTEGER) {
        if (typeof value !== 'number') {
            throw new Error(`${fieldName}은(는) 숫자여야 합니다.`);
        }
        if (value < min) {
            throw new Error(`${fieldName}은(는) ${min} 이상이어야 합니다.`);
        }
        if (value > max) {
            throw new Error(`${fieldName}은(는) ${max} 이하여야 합니다.`);
        }
        return true;
    }
    /**
   * 배열 검증
   * @param {any} value - 검증할 값
   * @param {string} fieldName - 필드명
   * @param {boolean} required - 필수 여부
   * @throws {Error} 배열 검증 실패 시 에러
   */ static validateArray(value, fieldName, required = true) {
        if (required && (!value || !Array.isArray(value))) {
            throw new Error(`${fieldName}은(는) 배열이어야 합니다.`);
        }
        if (value && !Array.isArray(value)) {
            throw new Error(`${fieldName}은(는) 배열이어야 합니다.`);
        }
        return true;
    }
    /**
   * 이메일 형식 검증
   * @param {string} email - 검증할 이메일
   * @throws {Error} 이메일 형식 오류 시 에러
   */ static validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error('유효하지 않은 이메일 형식입니다.');
        }
        return true;
    }
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/services/userProfile/userProfile.constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "ENDPOINTS",
    ()=>ENDPOINTS,
    "USER_PROFILE_CONSTANTS",
    ()=>USER_PROFILE_CONSTANTS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
;
const BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL;
const ENDPOINTS = {
    MYPAGE_GET: '/api/mypage',
    MYPAGE_UPDATE_NICKNAME: '/api/mypage/nickname',
    MYPAGE_UPDATE_EMAIL: '/api/mypage/email',
    MYPAGE_UPDATE_PASSWORD: '/api/mypage/password',
    MYPAGE_UPDATE_IMAGE: '/api/mypage/image',
    // 이미지 관련 (다른 서비스와 공통 사용)
    STORAGE_PRESIGN_PUT: '/api/storage/presign-put',
    STORAGE_PRESIGN: '/storage/presign',
    STORAGE_PRESIGN_GET: '/api/storage/presign-get',
    STORAGE_PUBLIC_URL: '/api/storage/public-url'
};
const USER_PROFILE_CONSTANTS = {
    MAX_NICKNAME_LENGTH: 50,
    MIN_NICKNAME_LENGTH: 2,
    MAX_PASSWORD_LENGTH: 128,
    MIN_PASSWORD_LENGTH: 8,
    MAX_IMAGE_SIZE: 5 * 1024 * 1024,
    ALLOWED_IMAGE_TYPES: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/gif',
        'image/webp'
    ]
};
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/services/imageService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageService",
    ()=>ImageService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
/**
 * 통합 이미지 업로드 서비스
 * 모든 이미지 업로드 관련 로직을 중앙화하여 관리
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
;
const BASE_URL = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].API.BASE_URL;
class ImageService {
    /**
   * 공통 헤더 생성
   * @param {boolean} includeContentType - Content-Type 헤더 포함 여부
   * @param {boolean} includeAuth - Authorization 헤더 포함 여부
   * @returns {Object} 헤더 객체
   */ static getCommonHeaders(includeContentType = true, includeAuth = true) {
        const headers = {};
        if (includeContentType) {
            headers['Content-Type'] = 'application/json';
        }
        if (includeAuth) {
            // admin 토큰을 먼저 확인하고, 없으면 일반 토큰 사용 (ApiUtils와 동일한 로직)
            const token = localStorage.getItem('admin_access_token') || localStorage.getItem('auth_token');
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }
        return headers;
    }
    /**
   * 파일 유효성 검사
   * @param {File} file - 검사할 파일
   * @param {Object} options - 검사 옵션
   * @param {number} options.maxSize - 최대 파일 크기 (바이트, 기본: 5MB)
   * @param {string[]} options.allowedTypes - 허용된 MIME 타입 배열
   * @throws {Error} 유효하지 않은 파일인 경우
   */ static validateFile(file, options = {}) {
        const { maxSize = 5 * 1024 * 1024, allowedTypes = [
            'image/jpeg',
            'image/jpg',
            'image/png',
            'image/webp',
            'image/gif'
        ] } = options;
        if (!file) {
            throw new Error('파일이 선택되지 않았습니다.');
        }
        // 파일 크기 검사
        if (file.size > maxSize) {
            const maxSizeMB = (maxSize / (1024 * 1024)).toFixed(1);
            throw new Error(`파일 크기는 ${maxSizeMB}MB 이하여야 합니다.`);
        }
        // 파일 타입 검사
        if (!allowedTypes.includes(file.type)) {
            throw new Error('지원하지 않는 파일 형식입니다. JPG, PNG, WebP, GIF 파일만 업로드 가능합니다.');
        }
        return true;
    }
    /**
   * Presigned URL 발급 요청
   * @param {string} filename - 파일명
   * @param {string} contentType - 파일 MIME 타입
   * @returns {Promise<Object>} { url, key } 형태의 응답
   */ static async getPresignedUploadUrl(filename, contentType) {
        try {
            const params = new URLSearchParams({
                filename: filename,
                contentType: contentType
            });
            const url = `${BASE_URL}/api/storage/presign-put?${params}`;
            const headers = this.getCommonHeaders(false, true);
            const response = await fetch(url, {
                method: 'POST',
                headers: headers
            });
            if (!response.ok) {
                const errorText = await response.text().catch(()=>'');
                throw new Error(`Presigned URL 발급 실패 (${response.status}): ${errorText || response.statusText}`);
            }
            const data = await response.json();
            // 응답 구조 정규화
            if (data.uploadUrl) {
                return {
                    url: data.uploadUrl,
                    key: data.key
                };
            } else if (data.url) {
                return {
                    url: data.url,
                    key: data.key
                };
            } else {
                throw new Error('Presigned URL을 찾을 수 없습니다.');
            }
        } catch (error) {
            throw error;
        }
    }
    /**
   * Presigned URL을 사용하여 S3/R2에 직접 업로드
   * @param {string} presignedUrl - Presigned URL
   * @param {File} file - 업로드할 파일
   * @returns {Promise<boolean>} 업로드 성공 여부
   */ static async uploadToStorage(presignedUrl, file) {
        try {
            console.log('Uploading to Presigned URL:', presignedUrl);
            const response = await fetch(presignedUrl, {
                method: 'PUT',
                body: file,
                headers: {
                    'Content-Type': file.type
                },
                mode: 'cors',
                credentials: 'omit'
            });
            if (!response.ok) {
                const errorText = await response.text().catch(()=>'');
                throw new Error(`업로드 실패 (${response.status}): ${errorText || response.statusText}`);
            }
            return true;
        } catch (error) {
            throw error;
        }
    }
    /**
   * 이미지 업로드 전체 플로우 (Presigned URL 발급 + 업로드)
   * @param {File} file - 업로드할 파일
   * @param {Object} options - 업로드 옵션
   * @returns {Promise<string>} 업로드된 이미지의 키
   */ static async uploadImage(file, options = {}) {
        try {
            // 1. 파일 유효성 검사
            this.validateFile(file, options);
            // 2. Presigned URL 발급
            const { url: uploadUrl, key: imageKey } = await this.getPresignedUploadUrl(file.name, file.type);
            if (!uploadUrl || !imageKey) {
                throw new Error('Presigned URL 또는 이미지 키를 받지 못했습니다.');
            }
            // 3. 스토리지에 직접 업로드
            await this.uploadToStorage(uploadUrl, file);
            return imageKey;
        } catch (error) {
            throw new Error(`이미지 업로드 실패: ${error.message}`);
        }
    }
    /**
   * 이미지 조회용 Presigned URL 발급
   * @param {string} key - 이미지 키
   * @returns {Promise<string>} 조회용 URL
   */ static async getImageUrl(key) {
        try {
            if (!key) {
                throw new Error('이미지 키가 제공되지 않았습니다.');
            }
            const url = `${BASE_URL}/api/storage/presign-get?key=${encodeURIComponent(key)}`;
            const headers = this.getCommonHeaders();
            const response = await fetch(url, {
                method: 'GET',
                headers: headers
            });
            if (!response.ok) {
                const errorText = await response.text().catch(()=>'');
                throw new Error(`이미지 URL 발급 실패 (${response.status}): ${errorText || response.statusText}`);
            }
            const data = await response.json();
            return data.url || data.downloadUrl;
        } catch (error) {
            throw error;
        }
    }
    /**
   * 여러 이미지를 배치로 업로드
   * @param {File[]} files - 업로드할 파일 배열
   * @param {Function} onProgress - 진행률 콜백 (uploadedCount, totalCount) => void
   * @param {Object} options - 업로드 옵션
   * @returns {Promise<string[]>} 업로드된 이미지 키 배열
   */ static async uploadImages(files, onProgress = null, options = {}) {
        const results = [];
        const totalCount = files.length;
        for(let i = 0; i < files.length; i++){
            try {
                const file = files[i];
                const imageKey = await this.uploadImage(file, options);
                results.push(imageKey);
                if (onProgress) {
                    onProgress(i + 1, totalCount);
                }
            } catch (error) {
                throw new Error(`이미지 "${files[i].name}" 업로드 실패: ${error.message}`);
            }
        }
        return results;
    }
    /**
   * 이미지 미리보기 URL 생성 (로컬)
   * @param {File} file - 미리보기할 파일
   * @returns {Promise<string>} 로컬 미리보기 URL
   */ static async createPreviewUrl(file) {
        return new Promise((resolve, reject)=>{
            this.validateFile(file);
            const reader = new FileReader();
            reader.onload = (e)=>resolve(e.target.result);
            reader.onerror = ()=>reject(new Error('파일 읽기 실패'));
            reader.readAsDataURL(file);
        });
    }
}
const __TURBOPACK__default__export__ = ImageService;
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/services/userProfile/UserProfileService.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UserProfileService",
    ()=>UserProfileService,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/common/api.utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$validation$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/common/validation.utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/userProfile/userProfile.constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$imageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/imageService.js [app-ssr] (ecmascript)");
;
;
;
;
class UserProfileService {
    // === 프로필 조회 ===
    /**
   * 마이페이지 정보 조회
   * @returns {Promise<Object>} { imageKey, nickName, email }
   */ static async getMyProfile() {
        try {
            const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].getCommonHeaders();
            const options = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].createRequestOptions('GET', headers);
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MYPAGE_GET}`, options);
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleResponse(response, '프로필 조회 실패');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    // === 프로필 수정 ===
    /**
   * 닉네임 변경
   * @param {Object} nicknameData - { nickname: string }
   * @returns {Promise<Object>} 변경 결과
   */ static async updateNickname(nicknameData) {
        try {
            const { nickname } = nicknameData;
            // 유효성 검사
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$validation$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationUtils"].validateStringLength(nickname, '닉네임', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MAX_NICKNAME_LENGTH, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MIN_NICKNAME_LENGTH);
            const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].getCommonHeaders();
            const options = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].createRequestOptions('PATCH', headers, {
                nickname
            });
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MYPAGE_UPDATE_NICKNAME}`, options);
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleResponse(response, '닉네임 변경 실패');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    /**
   * 이메일 변경
   * @param {string} newEmail - 새로운 이메일
   * @returns {Promise<Object>} 변경 결과
   */ static async updateEmail(newEmail) {
        try {
            // 유효성 검사
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$validation$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationUtils"].validateEmail(newEmail);
            const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].getCommonHeaders();
            const options = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].createRequestOptions('PATCH', headers, {
                email: newEmail
            });
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MYPAGE_UPDATE_EMAIL}`, options);
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleResponse(response, '이메일 변경 실패');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    /**
   * 비밀번호 변경
   * @param {Object} passwordData - { currentPassword: string, newPassword: string }
   * @returns {Promise<Object>} 변경 결과
   */ static async updatePassword(passwordData) {
        try {
            const { currentPassword, newPassword } = passwordData;
            // 유효성 검사
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$validation$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationUtils"].validateStringLength(currentPassword, '현재 비밀번호', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MAX_PASSWORD_LENGTH, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MIN_PASSWORD_LENGTH);
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$validation$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationUtils"].validateStringLength(newPassword, '새 비밀번호', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MAX_PASSWORD_LENGTH, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MIN_PASSWORD_LENGTH);
            if (currentPassword === newPassword) {
                throw new Error('새 비밀번호는 현재 비밀번호와 달라야 합니다.');
            }
            const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].getCommonHeaders();
            const options = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].createRequestOptions('PATCH', headers, {
                currentPassword,
                newPassword
            });
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MYPAGE_UPDATE_PASSWORD}`, options);
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleResponse(response, '비밀번호 변경 실패');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    /**
   * 프로필 이미지 변경
   * @param {Object} params - 이미지 키 객체
   * @param {string} params.imageKey - 이미지 키
   * @returns {Promise<Object>} 변경 결과
   */ static async updateProfileImage({ imageKey }) {
        try {
            if (!imageKey || imageKey.trim().length === 0) {
                throw new Error('이미지 키가 필요합니다.');
            }
            // 프로필 이미지 키 업데이트
            const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].getCommonHeaders();
            const options = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].createRequestOptions('PATCH', headers, {
                imageKey: imageKey.trim()
            });
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MYPAGE_UPDATE_IMAGE}`, options);
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleResponse(response, '프로필 이미지 변경 실패');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    /**
   * 프로필 정보 일괄 업데이트
   * @param {Object} profileData - 업데이트할 프로필 데이터
   * @param {string} [profileData.nickName] - 닉네임
   * @param {string} [profileData.email] - 이메일
   * @param {File} [imageFile] - 프로필 이미지 파일
   * @returns {Promise<Object>} 업데이트 결과
   */ static async updateProfile(profileData, imageFile = null) {
        try {
            const updatePromises = [];
            // 닉네임 업데이트
            if (profileData.nickName) {
                updatePromises.push(this.updateNickname(profileData.nickName));
            }
            // 이메일 업데이트
            if (profileData.email) {
                updatePromises.push(this.updateEmail(profileData.email));
            }
            // 이미지 업데이트
            if (imageFile) {
                updatePromises.push(this.updateProfileImage(imageFile));
            }
            // 모든 업데이트 병렬 실행
            const results = await Promise.allSettled(updatePromises);
            // 결과 분석
            const successes = results.filter((result)=>result.status === 'fulfilled');
            const failures = results.filter((result)=>result.status === 'rejected');
            // failures.length > 0 이면 일부 업데이트 실패
            return {
                success: successes.length > 0,
                successCount: successes.length,
                failureCount: failures.length,
                results: results
            };
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    // === 이미지 관련 헬퍼 메서드 ===
    /**
   * 프로필 이미지 URL 가져오기
   * @param {string} imageKey - 이미지 키
   * @returns {Promise<string>} 이미지 URL
   */ static async getProfileImageUrl(imageKey) {
        try {
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$imageService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageService"].getImageUrl(imageKey);
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    /**
   * 프로필 이미지 삭제 (기본 이미지로 변경)
   * @returns {Promise<Object>} 삭제 결과
   */ static async deleteProfileImage() {
        try {
            const headers = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].getCommonHeaders();
            const options = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].createRequestOptions('PUT', headers, {
                imageKey: null
            });
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"]}${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ENDPOINTS"].MYPAGE_UPDATE_IMAGE}`, options);
            return await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleResponse(response, '프로필 이미지 삭제 실패');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$api$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiUtils"].handleApiError(error);
        }
    }
    // === 유틸리티 메서드 ===
    /**
   * 프로필 데이터 유효성 검사
   * @param {Object} profileData - 검사할 프로필 데이터
   * @throws {Error} 유효성 검사 실패 시 에러
   */ static validateProfileData(profileData) {
        if (profileData.nickName) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$validation$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationUtils"].validateStringLength(profileData.nickName, '닉네임', __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MAX_NICKNAME_LENGTH, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MIN_NICKNAME_LENGTH);
        }
        if (profileData.email) {
            __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$common$2f$validation$2e$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationUtils"].validateEmail(profileData.email);
        }
        return true;
    }
    /**
   * 비밀번호 강도 검사
   * @param {string} password - 검사할 비밀번호
   * @returns {Object} { score: number, feedback: string[] }
   */ static checkPasswordStrength(password) {
        const feedback = [];
        let score = 0;
        // 길이 검사
        if (password.length >= __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MIN_PASSWORD_LENGTH) {
            score += 1;
        } else {
            feedback.push(`최소 ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$userProfile$2e$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["USER_PROFILE_CONSTANTS"].MIN_PASSWORD_LENGTH}자 이상이어야 합니다.`);
        }
        // 대문자 포함
        if (/[A-Z]/.test(password)) {
            score += 1;
        } else {
            feedback.push('대문자를 포함해야 합니다.');
        }
        // 소문자 포함
        if (/[a-z]/.test(password)) {
            score += 1;
        } else {
            feedback.push('소문자를 포함해야 합니다.');
        }
        // 숫자 포함
        if (/\d/.test(password)) {
            score += 1;
        } else {
            feedback.push('숫자를 포함해야 합니다.');
        }
        // 특수문자 포함
        if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            score += 1;
        } else {
            feedback.push('특수문자를 포함해야 합니다.');
        }
        return {
            score,
            maxScore: 5,
            strength: score <= 2 ? '약함' : score <= 3 ? '보통' : score <= 4 ? '강함' : '매우 강함',
            feedback
        };
    }
}
const __TURBOPACK__default__export__ = UserProfileService;
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/constants/routes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js [app-ssr] (ecmascript) <export default as UserCircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/hooks/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/stores/authStore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$UserProfileService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/services/userProfile/UserProfileService.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function UserProfile() {
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthState"])();
    const { handleLogout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthActions"])();
    const resetState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$stores$2f$authStore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])((state)=>state.resetState);
    const [profileImage, setProfileImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [nickname, setNickname] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    // 프로필 정보 로드
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadProfile = async ()=>{
            try {
                const profileData = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$UserProfileService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserProfileService"].getMyProfile();
                if (profileData.imageKey) {
                    // imageKey가 이미 완전한 URL인지 확인
                    if (profileData.imageKey.startsWith('http')) {
                        setProfileImage(profileData.imageKey);
                    } else {
                        const imageUrl = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$services$2f$userProfile$2f$UserProfileService$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UserProfileService"].getImageUrl(profileData.imageKey);
                        setProfileImage(imageUrl);
                    }
                }
                if (profileData.nickName) {
                    setNickname(profileData.nickName);
                }
            } catch (error) {
            // 헤더 프로필 정보 로드 실패
            }
        };
        loadProfile();
    }, []);
    const onLogout = async ()=>{
        await handleLogout();
        resetState(); // 폼 상태 초기화 (이메일, 비밀번호 등)
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].HOME);
    };
    const onProfileClick = ()=>{
        router.push(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROUTES"].PROFILE);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative group",
        ref: dropdownRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "p-1 rounded-full hover:ring-2 hover:ring-gray-300 transition-all",
                children: [
                    profileImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: profileImage,
                        alt: nickname || user?.name || '프로필',
                        className: "w-8 h-8 rounded-full object-cover",
                        onError: (e)=>{
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }
                    }, void 0, false, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$UserCircleIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCircleIcon$3e$__["UserCircleIcon"], {
                        className: `w-8 h-8 text-gray-500 ${profileImage ? 'hidden' : 'block'}`
                    }, void 0, false, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-1 z-50 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onProfileClick,
                        className: "btn-menu-item",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].UI.MY_PROFILE
                    }, void 0, false, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onLogout,
                        className: "btn-menu-item",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].UI.LOGOUT
                    }, void 0, false, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/프로젝트/CoDiYoung/src/components/LoginButton.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/colors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/messages.js [app-ssr] (ecmascript)");
;
;
;
function LoginButton({ onLoginClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            onClick: onLoginClick,
            className: "btn-nav",
            style: {
                color: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_700
            },
            onMouseEnter: (e)=>e.target.style.backgroundColor = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$colors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["COLORS"].GRAY_100,
            onMouseLeave: (e)=>e.target.style.backgroundColor = 'transparent',
            "aria-label": "로그인 모달 열기",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$messages$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MESSAGES"].UI.LOGIN
        }, void 0, false, {
            fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/LoginButton.jsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/LoginButton.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/components/AuthStatusBar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthStatusBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/hooks/useAuth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$UserProfile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/components/UserProfile.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$LoginButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/components/LoginButton.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function AuthStatusBar() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$hooks$2f$useAuth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthState"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const handleLoginClick = ()=>{
        router.push("/signin");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex items-center",
        children: isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$UserProfile$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/AuthStatusBar.jsx",
            lineNumber: 19,
            columnNumber: 11
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$LoginButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onLoginClick: handleLoginClick
        }, void 0, false, {
            fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/AuthStatusBar.jsx",
            lineNumber: 21,
            columnNumber: 11
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/AuthStatusBar.jsx",
        lineNumber: 17,
        columnNumber: 7
    }, this);
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/components/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$AuthStatusBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/components/AuthStatusBar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
function Header({ disableAuthModal = false }) {
    const goToHomeHandle = ()=>{
        window.location.href = "/"; // 홈으로 이동 + 새로고침
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "relative z-[1000] px-4 sm:px-6 lg:px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-12 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: goToHomeHandle,
                    className: "flex items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/cdylogo.png",
                        alt: "CoDiYoung Logo",
                        className: "h-9 w-auto"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/Header.jsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/Header.jsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                !disableAuthModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$AuthStatusBar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/Header.jsx",
                    lineNumber: 17,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/Header.jsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/Header.jsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/프로젝트/CoDiYoung/src/components/ClientAppLayout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientAppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/components/Header.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/프로젝트/CoDiYoung/src/constants/config.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ClientAppLayout({ children }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isAuthRoute = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AUTH_ROUTES"].includes(pathname);
    // user로 시작하는 경로 패턴 매칭
    const hideHeaderOnUser = pathname.startsWith("/user/");
    const hideHeader = hideHeaderOnUser || isAuthRoute;
    // ✅ 인증 페이지일 때 페이지 스크롤 완전 차단 (html/body)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
    const authLayout = `min-h-[calc(100dvh-${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].LAYOUT.HEADER_TOTAL_HEIGHT}px)] grid place-items-center overflow-hidden`;
    // Using style object for dynamic values is safer in Tailwind if arbitrary values are not detected at build time
    // But JIT might pick it up if the config file is constant. 
    // Let's keep it as string class for now, but if it fails, we move to style={{ maxWidth: ... }}
    const normalLayout = `max-w-[${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$constants$2f$config$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].LAYOUT.MAX_CONTENT_WIDTH}px] mx-auto px-6 md:px-24 lg:px-36`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen overflow-x-hidden",
        children: [
            !hideHeader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$src$2f$components$2f$Header$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                disableAuthModal: isAuthRoute
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/ClientAppLayout.jsx",
                lineNumber: 47,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f_1111$$_1173$$_1105$$_1169$$_110c$$_1166$$_11a8$$_1110$$_1173$$2f$CoDiYoung$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: `${base} ${isAuthRoute ? authLayout : normalLayout}`,
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/ClientAppLayout.jsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/프로젝트/CoDiYoung/src/components/ClientAppLayout.jsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__dd53b2e3._.js.map