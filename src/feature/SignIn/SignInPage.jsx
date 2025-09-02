// src/feature/Auth/SignInPage.jsx
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";               // ⬅ 추가
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
  const { login, isLoading, error, clearError } = useUI();
  const {
    email, password, emailError, passwordError,
    setEmail, setPassword, setEmailError, setPasswordError, resetErrors
  } = useAuth();

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    if (v) setEmailError(validateEmail(v));
    if (error) clearError();
  };

  const handlePasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    if (v) setPasswordError(validatePassword(v));
    if (error) clearError();
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailError(eErr);
    setPasswordError(pErr);

    if (eErr || pErr) return;

    try {
      const result = await login(email, password);
      if (result.success) {
        navigate(ROUTES.HOME);
        onClose?.();
      }
    } catch (error) {
      // handled in UI context
    }
  };

  const handleFindPassword = () => {
    resetErrors();
    navigate(ROUTES.FIND_PASSWORD);
  };

  return (
    <div className={`min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)] grid place-items-center overflow-hidden`}>
      <div className={`w-full max-w-[${CONFIG.LAYOUT.AUTH_MAX_WIDTH}px]`}>
        <h2 className="text-2xl font-bold mb-[48px] text-center">
          {MESSAGES.UI.LOGIN}
        </h2>

        <form
          onSubmit={onSubmit}
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

            {/* ⬇ 인라인 에러 제거, 대신 모달로 표출 */}
            {false && error && (
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

      {/* 에러 모달 (포털) */}
      <ErrorModal
        open={!!error}
        message={error}
        primary={COLORS.PRIMARY}
        onClose={clearError}
        onFindPassword={() => {
          clearError();
          handleFindPassword();
        }}
      />
    </div>
  );
}

/* ---- lightweight ErrorModal (no deps) ---- */
function ErrorModal({ open, message, onClose, onFindPassword, primary }) {
  if (!open) return null;
  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />
      {/* dialog */}
      <div
        role="alertdialog"
        aria-labelledby="signin-error-title"
        aria-describedby="signin-error-desc"
        className="absolute left-1/2 top-[40%] -translate-x-1/2
                   w-[90%] max-w-[420px] rounded-2xl bg-white shadow-2xl
                   border border-red-200 p-5"
      >
        <div className="grid place-items-center">
          <p id="signin-error-desc" className="text-center text-sm text-red-700">
            {message}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}
