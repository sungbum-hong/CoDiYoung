import { usePasswordReset } from "./hooks/usePasswordReset";
import { MESSAGES } from "../../constants/messages";
import { COLORS } from '../../constants/colors.js';
import { SIGNIN_CONSTANTS } from "./constants";
import { authStyles } from "./styles/authStyles";
import Button from "../../shared/ui/Button";
import FormInput from "../../shared/ui/FormInput";

export default function FindPassword() {
  const {
    // Form validation
    emailValidation,
    codeValidation,
    
    // State
    isSending,
    isVerifying,
    serverError,
    serverSuccess,
    resendSeconds,
    isCodeSent,
    
    // Computed
    canSendCode,
    canVerify,
    
    // Handlers
    handleSendVerification,
    handleVerifyCode,
    onKeyDownInCode,
    onSubmit,
    
    // Refs
    codeInputRef
  } = usePasswordReset();

  return (
    <div className={authStyles.container} role="main" aria-labelledby="find-password-heading">
      <div className={authStyles.wrapper}>
        <h2 className={authStyles.typography.heading}>
          {MESSAGES.UI?.FIND_PASSWORD ?? "비밀번호 찾기"}
        </h2>

        <form
          onSubmit={onSubmit}
          className={`${authStyles.form.base} ${authStyles.form.widths} ${authStyles.form.minHeights}`}
          style={{ borderColor: COLORS.PRIMARY }}
        >
          {/* 이메일 + 버튼 + 인증번호 입력 */}
          <div className={authStyles.grid.emailButton}>
            <div className="flex-1">
              <FormInput
                type="email"
                placeholder="이메일을 입력하세요"
                value={emailValidation.email}
                onChange={emailValidation.handleChange}
                onBlur={emailValidation.handleBlur}
                disabled={isCodeSent}
                error={emailValidation.error}
                required
                aria-invalid={!!emailValidation.error}
                className={authStyles.input.withMargin}
              />
            </div>
            <div className={authStyles.dimensions.buttonContainer}>
              <Button
                type="button"
                onClick={handleSendVerification}
                disabled={!canSendCode}
                className={authStyles.button.secondary}
              >
                {isSending
                  ? SIGNIN_CONSTANTS.MESSAGES.SENDING
                  : isCodeSent
                  ? (resendSeconds > 0 ? SIGNIN_CONSTANTS.MESSAGES.RESEND_FORMAT(resendSeconds) : SIGNIN_CONSTANTS.MESSAGES.RESEND)
                  : SIGNIN_CONSTANTS.MESSAGES.SEND_CODE}
              </Button>
            </div>
            <div className={authStyles.grid.fullWidth}>
              <div className={isCodeSent ? "" : authStyles.disabled}>
                <FormInput
                  ref={codeInputRef}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="인증번호를 입력하세요"
                  value={codeValidation.code}
                  onChange={codeValidation.handleChange}
                  onBlur={codeValidation.handleBlur}
                  onKeyDown={onKeyDownInCode}
                  error={codeValidation.error}
                  required
                  disabled={!isCodeSent}
                  aria-disabled={!isCodeSent}
                  className={authStyles.input.withTopMargin}
                />
              </div>
            </div>
          </div>

          <div className={authStyles.layout.centerButton}>
            <Button
              variant="primary"
              type="submit"
              disabled={!canVerify}
              className={authStyles.button.primary}
            >
              {isVerifying ? SIGNIN_CONSTANTS.MESSAGES.VERIFYING : SIGNIN_CONSTANTS.MESSAGES.CONFIRM}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
