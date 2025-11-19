import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button.jsx";
import FormInput from "../../../ui/FormInput";
import { COLORS } from "../../../constants/colors.js";
import { MESSAGES } from "../../../constants/messages.js";
import { CONFIG } from "../../../constants/config.js";
import ErrorModal from "../../SignIn/components/ErrorModal.jsx";
import { AdminApiService } from "../../../services/admin/adminApi.js";
import { AuthService } from "../../../services/authService.js";
import useAuthStore from "../../../stores/authStore.js";

export default function AdminLoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { setUser, isAuthenticated, user } = useAuthStore();

  // 이미 로그인된 admin 사용자는 자동으로 대시보드로 리다이렉트
  useEffect(() => {
    if (isAuthenticated && user && isAdminUser(user)) {
      navigate("/admin/home", { replace: true });
    }
  }, [isAuthenticated, user, navigate]);

  // 관리자 권한 확인 함수
  const isAdminUser = (user) => {
    return (
      user?.role === 'ADMIN' ||
      user?.isAdmin === true ||
      user?.userRole === 'ADMIN' ||
      user?.authority === 'ADMIN'
    );
  };

  const handleUserIdChange = (e) => {
    setUserId(e.target.value);
    if (userIdError) setUserIdError("");
    if (error) setError(null);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) setPasswordError("");
    if (error) setError(null);
  };

  const validateForm = () => {
    let isValid = true;

    if (!userId.trim()) {
      setUserIdError("아이디를 입력해주세요.");
      isValid = false;
    } else if (userId.length < 4) {
      setUserIdError("아이디는 4자 이상이어야 합니다.");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("비밀번호를 입력해주세요.");
      isValid = false;
    }

    return isValid;
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      // admin 전용 로그인 API 사용 (userId를 email 파라미터로 전달)
      const loginResult = await AdminApiService.adminLogin(userId, password);

      // 새로운 응답 구조 처리: { userId, email, accessToken }
      if (loginResult && loginResult.accessToken) {
        // JWT 토큰 저장
        localStorage.setItem('admin_access_token', loginResult.accessToken);

        // admin 토큰 만료 타이머 설정
        AuthService.setupAdminTokenExpirationTimer(loginResult.accessToken);

        // 관리자 사용자 정보 설정
        const adminUser = {
          id: loginResult.userId,
          userId: loginResult.userId,
          email: loginResult.email,
          name: loginResult.email,
          role: 'ADMIN',
          isAdmin: true,
          accessToken: loginResult.accessToken
        };

        // admin 사용자 정보도 localStorage에 저장
        localStorage.setItem('admin_user_info', JSON.stringify(adminUser));

        setUser(adminUser);

        // 로그인 성공 시 admin 대시보드로 이동
        navigate("/admin/home");
      } else {
        throw new Error('로그인에 실패했습니다. 응답에 토큰이 없습니다.');
      }
    } catch (error) {
      setError(error.message || "관리자 로그인에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <div className={`min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)] grid place-items-center overflow-hidden`}>
      <div className={`w-full max-w-[${CONFIG.LAYOUT.AUTH_MAX_WIDTH}px]`}>
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: COLORS.PRIMARY }}>
            CoDiYoung
          </h1>
          <h2 className="text-2xl font-bold mb-4">
            관리자 로그인
          </h2>
          <p className="text-gray-600">
            관리자 계정으로 로그인해주세요
          </p>
        </div>

        <form
          onSubmit={handleLogin}
          className="
            mx-auto
            w-[360px] md:w-[560px] lg:w-[660px]
            border-2 rounded-2xl shadow-sm
            px-10 md:px-12 py-10
            flex flex-col justify-between gap-5
            min-h-[360px] md:min-h-[450px]
            h-[min(86dvh,46px)]
          "
          style={{ borderColor: COLORS.PRIMARY }}
        >
          {/* 입력 영역 */}
          <div className="
            grid gap-13
            min-h-[230px]
            [&_input]:h-13
            md:[&_input]:h-12
            [&_input]:text-lg
          ">
            <FormInput
              type="text"
              placeholder="관리자 아이디"
              value={userId}
              onChange={handleUserIdChange}
              error={userIdError}
              required
              variant="signin"
              size="lg"
              disabled={isLoading}
            />

            <FormInput
              type="password"
              placeholder="관리자 비밀번호"
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
              required
              variant="signin"
              size="lg"
              disabled={isLoading}
            />

            {/* 관리자용 로그인이므로 자동 로그인, 비밀번호 찾기 제거 */}
            <div className="text-center text-sm text-gray-500">
              관리자 전용 로그인 페이지입니다
            </div>
          </div>

          {/* 액션 영역 */}
          <div className="flex justify-center pt-2">
            <Button
              variant="secondary"
              type="submit"
              disabled={isLoading}
              className="w-64 py-3 font-semibold cursor-pointer"
              style={{
                color: isLoading ? COLORS.GRAY_400 : COLORS.PRIMARY,
                transition: "all 0.2s",
                opacity: isLoading ? 0.6 : 1,
              }}
            >
              {isLoading ? "로그인 중..." : "관리자 로그인"}
            </Button>
          </div>
        </form>
      </div>

      {/* 에러 모달 */}
      <ErrorModal
        open={!!error}
        message={error}
        primary={COLORS.PRIMARY}
        onClose={clearError}
        // 관리자용이므로 비밀번호 찾기 제거
        hideActions={true}
      />
    </div>
  );
}