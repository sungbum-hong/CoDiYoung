import { useAuth } from "../../contexts/AuthContext";
import { useUI } from "../../contexts/UIContext";
import { validateEmail, validatePassword } from "../../utils/validation";
import Button from "../../ui/Button.jsx";
import FormInput from "../../ui/FormInput";
import { COLORS } from "../../utils/colors.js";
import { MESSAGES } from "../../constants/messages.js";

export default function SignInModal({ onClose }) {
  const { login, isLoading, error, clearError } = useUI();
  const {
    email, password, emailError, passwordError,
    setEmail, setPassword, setEmailError, setPasswordError
  } = useAuth();

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    if (error) clearError();
  };

  const handlePasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    if (error) clearError();
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailError(eErr);
    setPasswordError(pErr);
    
    if (eErr || pErr) {
      return;
    }

    try {
      const result = await login(email, password);
      
      if (result.success) {
        onClose?.();
      }
    } catch (error) {
      // 에러는 UI Context에서 처리됨
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <FormInput
        type="email"
        placeholder={MESSAGES.PLACEHOLDERS.EMAIL}
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        required
        disabled={isLoading}
      />

      <FormInput
        type="password"
        placeholder={MESSAGES.PLACEHOLDERS.PASSWORD}
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
        required
        disabled={isLoading}
      />

      {error && (
        <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded border border-red-200">
          {error}
        </div>
      )}

      <div className="flex justify-between items-center text-sm">
        <label className="flex items-center gap-2 select-none">
          <input type="checkbox" className="w-4 h-4" />
          {MESSAGES.UI.AUTO_LOGIN}
        </label>
      </div>

      <Button
        variant="secondary"
        type="submit"
        disabled={isLoading}
        className="w-full py-3 font-semibold"
        style={{
          color: isLoading ? COLORS.GRAY_400 : COLORS.PRIMARY,
          opacity: isLoading ? 0.6 : 1,
        }}
      >
        {isLoading ? MESSAGES.UI.LOGGING_IN : MESSAGES.UI.LOGIN}
      </Button>
    </form>
  );
}