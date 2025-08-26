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

export default function SignInPage({ onClose }) {
  const navigate = useNavigate();
  const { login, isLoading, error, clearError } = useUI();
  const {
    email, password, emailError, passwordError,
    setEmail, setPassword, setEmailError, setPasswordError, resetErrors
  } = useAuth();

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    if (v) setEmailError(validateEmail(v));
    if (error) clearError(); // 입력 시 에러 메시지 클리어
  };

  const handlePasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    if (v) setPasswordError(validatePassword(v));
    if (error) clearError(); // 입력 시 에러 메시지 클리어
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted!', { email, password }); // 디버그 로그
    
    // 클라이언트 측 검증
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailError(eErr);
    setPasswordError(pErr);
    
    console.log('Validation errors:', { eErr, pErr }); // 디버그 로그
    
    if (eErr || pErr) {
      console.log('Validation failed, returning early');
      return;
    }

    console.log('Starting login process...'); // 디버그 로그
    
    // 서버 측 로그인 시도
    try {
      const result = await login(email, password);
      console.log('Login result:', result); // 디버그 로그
      
      if (result.success) {
        // 로그인 성공 시 홈으로 이동
        console.log('Login successful, navigating to home');
        navigate(ROUTES.HOME);
        onClose?.(); // 모달이 있다면 닫기
      }
    } catch (error) {
      console.error('Login error:', error);
    }
    // 실패 시 에러는 이미 UI Context에서 처리됨
  };

  const handleFindPassword = () => {
    resetErrors();
    navigate(ROUTES.FIND_PASSWORD);
  };

  return (
    <div className="min-h-[calc(100dvh-96px)] grid place-items-center overflow-hidden">
      <div className="w-full max-w-[1120px]">
        <h2 className="text-2xl font-bold mb-[48px] text-center">
          {MESSAGES.UI.LOGIN}
        </h2>


        <form
          onSubmit={onSubmit}
          className="
            mx-auto 
            w-[360px] md:w-[560px] lg:w-[660px]   /* 가로 폭 */
            border-2 rounded-2xl shadow-sm
            px-10 md:px-12 py-10
            flex flex-col justify-between gap-5
            min-h-[360px] md:min-h-[460px]                    /* 최소 높이 보장 */
            h-[min(86dvh,46px)]                               /* 화면 대비 최대 높이 */
          "
          style={{ borderColor: COLORS.PRIMARY }}
        >
          {/* 입력 영역 */}
          <div className="
          grid gap-13            /* 인풋들 세로 간격 */
          min-h-[230px]         /* 입력 영역 최소 높이 (원하면 숫자 바꿔도 됨) */
          [&_input]:h-13        /* 모든 FormInput 내부 input 높이 56px */
          md:[&_input]:h-12    /* md 이상 64px */
          [&_input]:text-lg
        ">
            <FormInput
              type="email"
              placeholder={MESSAGES.PLACEHOLDERS.EMAIL}
              value={email}
              onChange={handleEmailChange}
              error={emailError}
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
              error={passwordError}
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
              style={{
                color: isLoading ? COLORS.GRAY_400 : COLORS.ACCENT,
                transition: "all 0.2s",
                opacity: isLoading ? 0.6 : 1,
              }}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                  e.currentTarget.style.color = "white";
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = COLORS.ACCENT;
                }
              }}
            >
              {isLoading ? '로그인 중...' : MESSAGES.UI.LOGIN}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
