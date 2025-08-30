// src/feature/Auth/SignInPage.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useUI } from "../../contexts/UIContext";
import { validateEmail, validatePassword } from "../../utils/validation";
import Button from "../../ui/Button.jsx";
import FormInput from "../../ui/FormInput";
import { COLORS } from "../../utils/colors.js";
import { ROUTES } from "../../constants/routes.js";
import { MESSAGES } from "../../constants/messages.js";
import { CONFIG } from "../../constants/config.js";

export default function SignInPage({ onClose }) {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError, setError } = useUI();
  const {
    email, password, emailError, passwordError,
    setEmail, setPassword, setEmailError, setPasswordError, resetErrors
  } = useAuth();

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    if (error) clearError(); // 입력 시 에러 메시지 클리어
  };

  const handlePasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    if (error) clearError(); // 입력 시 에러 메시지 클리어
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // 클라이언트 측 검증 (빈값만 체크)
    if (!email || !password) {
      setError("아이디와 비밀번호를 입력해주세요.");
      return;
    }

    // 서버 측 로그인 시도
    try {
      const result = await login(email, password);
      
      if (result.success) {
        // 로그인 성공 시 홈으로 이동
        navigate(ROUTES.HOME);
        onClose?.(); // 모달이 있다면 닫기
      }
    } catch (error) {
      // 에러는 UI Context에서 처리됨
    }
  };

  const handleFindPassword = () => {
    resetErrors();
    navigate(ROUTES.FIND_PASSWORD);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-12 text-center">
        {MESSAGES.UI.LOGIN}
      </h2>

      <form
        onSubmit={onSubmit}
        className="
          w-[360px] md:w-[560px] lg:w-[660px]
          border-2 rounded-2xl shadow-sm
          px-10 md:px-12 py-10
          flex flex-col justify-between gap-5
          min-h-[360px] md:min-h-[460px]
          max-h-[80vh]
        "
        style={{ borderColor: COLORS.PRIMARY }}
      >
          {/* 입력 영역 */}
          <div className="
          grid gap-6
          min-h-[230px]
          [&_input]:h-12 md:[&_input]:h-14
          [&_input]:text-lg
        ">
            <FormInput
              type="email"
              placeholder={MESSAGES.PLACEHOLDERS.EMAIL}
              value={email}
              onChange={handleEmailChange}
              required
              variant="signin"
              size="lg"
              disabled={isLoading}
            />

            <FormInput
              type="password"
              placeholder={MESSAGES.PLACEHOLDERS.PASSWORD}
              value={password}
              onChange={handlePasswordChange}
              required
              variant="signin"
              size="lg"
              disabled={isLoading}
            />

            {/* 서버 에러 메시지 */}
            {error && (
              <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded border border-red-200">
                {error}
              </div>
            )}

            <div
              className="flex justify-between items-center text-sm"
              style={{ color: COLORS.CUSTOM_GRAY }}
            >
              <label className="flex items-center gap-2 select-none">
                <input type="checkbox" className="w-4 h-4" />
                {MESSAGES.UI.AUTO_LOGIN}
              </label>

              <button
                type="button"
                onClick={handleFindPassword}
                className="
                  text-black hover:text-[var(--primary)]
                  focus-visible:text-[var(--primary)] focus-visible:underline
                  transition-colors duration-200
                "
                style={{ "--primary": COLORS.PRIMARY }}
              >
                {MESSAGES.UI.FIND_PASSWORD}
              </button>
            </div>
          </div>

          {/* 액션 영역 */}
          <div className="flex justify-center pt-2">
            <Button
              variant="secondary"
              type="submit"
              disabled={isLoading}
              className="w-64 py-3 font-semibold cursor-pointer"
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.PRIMARY;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = COLORS.PRIMARY;
              }}
              style={{
                color: isLoading ? COLORS.GRAY_400 : COLORS.PRIMARY,
                transition: "all 0.2s",
                opacity: isLoading ? 0.6 : 1,
              }}
            >
              {isLoading ? MESSAGES.UI.LOGGING_IN : MESSAGES.UI.LOGIN}
            </Button>
          </div>
        </form>
      </div>
  );
}
