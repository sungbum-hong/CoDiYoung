import { useResetPassword } from "./hooks/useResetPassword";
import { SIGNIN_CONSTANTS } from "./constants";
import { authStyles } from "./styles/authStyles";
import { MESSAGES } from "../../constants/messages.js";
import Button from "../../shared/ui/Button";
import FormInput from "../../shared/ui/FormInput";

export default function ResetPassword() {
  const {
    // Form data
    email,
    resetToken,
    
    // Form validation
    passwordValidation,
    confirmPasswordValidation,
    
    // Computed
    isFormValid,
    
    // Handlers
    handlePasswordChange,
    handleResetPassword,
    handleBack
  } = useResetPassword();

  return (
    <div className={authStyles.layout.flexColumn}>
      <div className="text-center mb-6 md:mb-8">
        <h3 className={authStyles.typography.subheading}>{MESSAGES.UI.NEW_PASSWORD_SETUP}</h3>
        <p className={authStyles.typography.description}>
          {email}으로 새로운 비밀번호를 설정해주세요
        </p>
      </div>

      <div className={authStyles.layout.gap}>
        <FormInput
          type="password"
          placeholder="새 비밀번호 (8자 이상, 대소문자, 숫자, 특수문자 포함)"
          value={passwordValidation.password}
          onChange={handlePasswordChange}
          onBlur={passwordValidation.handleBlur}
          error={passwordValidation.error}
          required
          className={authStyles.input.base}
        />

        <FormInput
          type="password"
          placeholder="새 비밀번호 확인"
          value={confirmPasswordValidation.confirmPassword}
          onChange={confirmPasswordValidation.handleChange}
          onBlur={confirmPasswordValidation.handleBlur}
          error={confirmPasswordValidation.error}
          required
          className={authStyles.input.base}
        />

        <div className={authStyles.layout.centerContent} style={authStyles.layout.marginTopLarge}>
          <Button 
            variant="primary" 
            onClick={handleResetPassword}
            disabled={!isFormValid()}
            className={authStyles.button.fullWidth}
          >
            {SIGNIN_CONSTANTS.MESSAGES.RESET_PASSWORD}
          </Button>
        </div>

        <div className={`${authStyles.layout.centerContent} ${authStyles.layout.marginTop}`}>
          <button
            onClick={handleBack}
            className={authStyles.button.text}
          >
            {SIGNIN_CONSTANTS.MESSAGES.BACK}
          </button>
        </div>
      </div>
    </div>
  );
}