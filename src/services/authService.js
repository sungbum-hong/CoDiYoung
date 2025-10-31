import { CONFIG } from "../constants/config.js";
import { MESSAGES } from "../constants/messages.js";

export class AuthService {
  // 로그인 함수
  static async login(email, password) {
    const fullUrl = `${CONFIG.API.BASE_URL}${CONFIG.API.AUTH.LOGIN}`;

    try {
      const response = await fetch(fullUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        let errorData = {};
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          errorData = await response.json().catch(() => ({}));
        } else {
          const textError = await response.text().catch(() => "");

          errorData = { message: textError };
        }

        if (response.status === 403) {
          throw new Error(
            `접근이 거부되었습니다. 계정 정보를 확인해주세요.\n사용한 계정: ${email}\n\n다른 계정들을 시도해보세요:\n- admin@test.com\n- user@example.com\n- test@test.com`
          );
        }

        throw new Error(errorData.message || MESSAGES.ERRORS.LOGIN_FAILED);
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
          accessToken: userData.accessToken,
        });
      }

      return userData;
    } catch (error) {
      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
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
      await fetch(`${CONFIG.API.BASE_URL}${CONFIG.API.AUTH.LOGOUT}`, {
        method: "POST",
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      // 서버 요청 실패해도 로컬 정리는 수행 (무시)
    } finally {
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

    // 만료 5분 전에 경고
    const warningTime = Math.max(timeUntilExpiration - 5 * 60 * 1000, 0);

    if (warningTime > 0) {
      setTimeout(() => {
        // 필요시 사용자에게 알림 표시
        if (window.dispatchEvent) {
          window.dispatchEvent(
            new CustomEvent("tokenExpireWarning", {
              detail: { remainingTime: 5 * 60 * 1000 },
            })
          );
        }
      }, warningTime);
    }

    // 토큰 만료 시 자동 로그아웃
    if (timeUntilExpiration > 0) {
      this.expirationTimer = setTimeout(() => {
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
      window.dispatchEvent(
        new CustomEvent("tokenExpired", {
          detail: {
            message: "로그인이 만료되었습니다. 다시 로그인해주세요.",
            timestamp: new Date().toISOString(),
          },
        })
      );
    }

    // 타이머 정리
    if (this.expirationTimer) {
      clearTimeout(this.expirationTimer);
      this.expirationTimer = null;
    }
  }

  // === 유틸리티 메서드 ===

  /**
   * 회원가입 데이터 유효성 검사 (OpenAPI SignUpRequest 스키마 기준)
   * @param {Object} signUpData - 검사할 회원가입 데이터
   */
  static validateSignUpData(signUpData) {
    const required = ["email", "password", "nickname"];
    const missing = required.filter((field) => !signUpData[field]);

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
      const validCategories = ["video_editing", "coding", "design"];
      if (!validCategories.includes(signUpData.userCategory.toLowerCase())) {
        throw new Error(
          `유효하지 않은 사용자 카테고리입니다. (허용: ${validCategories.join(
            ", "
          )})`
        );
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
        nickname: signUpData.nickname,
      });

      const response = await fetch(
        `${CONFIG.API.BASE_URL}${CONFIG.API.AUTH.SIGNUP_ADMIN}?${params}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          mode: "cors",
        }
      );

      if (!response.ok) {
        let errorData = {};
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          errorData = await response.json().catch(() => ({}));
        } else {
          const textError = await response.text().catch(() => "");
          errorData = { message: textError };
        }

        // 상태 코드별 에러 처리
        if (response.status === 400) {
          throw new Error(
            errorData.message || "입력 데이터가 올바르지 않습니다."
          );
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
        data: signUpData.email,
      };
    } catch (error) {

      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
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
        nickname: signUpData.nickname,
      };

      const response = await fetch(`${CONFIG.API.BASE_URL}${CONFIG.API.AUTH.SIGNUP}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        mode: "cors",
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        let errorData = {};
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          errorData = await response.json().catch(() => ({}));
        } else {
          const textError = await response.text().catch(() => "");
          errorData = { message: textError };
        }

        // 상태 코드별 에러 처리
        if (response.status === 400) {
          throw new Error(
            errorData.message || "입력 데이터가 올바르지 않습니다."
          );
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
        data: signUpData.email,
      };
    } catch (error) {

      if (error.name === "TypeError" && error.message.includes("fetch")) {
        throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
      }

      throw error;
    }
  }

  // 프로필 정보 조회 (API 완성 후 구현)
  static async getMyProfile() {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      throw new Error(MESSAGES.ERRORS.LOGIN_REQUIRED);
    }

    // API 완성 후 실제 구현 예정
    throw new Error(MESSAGES.ERRORS.PROFILE_API_NOT_IMPLEMENTED);
  }

  // 이메일 인증 코드 발송
  static async sendVerificationCode(email) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(MESSAGES.ERRORS.API_INTEGRATION_REQUIRED));
      }, 1000);
    });
  }

  // 비밀번호 재설정
  static async resetPassword(email, verificationCode, newPassword) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error(MESSAGES.ERRORS.API_INTEGRATION_REQUIRED));
      }, 1000);
    });
  }
}

export default AuthService;
