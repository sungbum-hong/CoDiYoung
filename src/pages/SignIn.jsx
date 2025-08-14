// src/pages/SignIn.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { validateEmail, validatePassword } from "../utils/validation";
import Button from "../ui/Button.jsx";
import FormInput from "../ui/FormInput";
import { COLORS } from '../constants/colors.js';
import { ROUTES } from '../constants/routes.js';
import { MESSAGES } from '../constants/messages.js';

export default function SignIn({ onClose }) {
  const navigate = useNavigate();
  const {
    email, password, emailError, passwordError,
    setEmail, setPassword, setEmailError, setPasswordError, resetErrors
  } = useAuth();

  const handleEmailChange = (e) => {
    const v = e.target.value;
    setEmail(v);
    if (v) setEmailError(validateEmail(v));
  };

  const handlePasswordChange = (e) => {
    const v = e.target.value;
    setPassword(v);
    if (v) setPasswordError(validatePassword(v));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const eErr = validateEmail(email);
    const pErr = validatePassword(password);
    setEmailError(eErr);
    setPasswordError(pErr);
    if (!eErr && !pErr) onClose?.();
  };

  const handleFindPassword = () => {
    resetErrors();
    navigate(ROUTES.FIND_PASSWORD);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center">
      <div className="w-full max-w-[1120px] px-6 pt-10 pb-32">
        <h2 className="text-2xl font-bold mb-[63px] text-center">{MESSAGES.UI.LOGIN}</h2>

        {/* 주의: className 문자열 안에는 주석 넣지 마세요 */}
        <form
          onSubmit={onSubmit}
          className="
            w-full
            border-2 rounded-2xl bg-white shadow-sm
            px-[50px] py-[60px]
            flex flex-col gap-8
            max-w-[720px] mx-auto
            min-h-[350px]
          "
          style={{ borderColor: COLORS.PRIMARY }}
        >
          <FormInput
            type="email"
            placeholder={MESSAGES.PLACEHOLDERS.EMAIL}
            value={email}
            onChange={handleEmailChange}
            error={emailError}
            required
            variant="signin"
            size="lg"
            className="mb-3"
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
            className="mb-3"
          />

          <div 
            className="flex justify-between items-center text-sm mb-5"
            style={{ color: COLORS.CUSTOM_GRAY }}
          >
            <label className="flex items-center gap-2 select-none">
              <input type="checkbox" className="w-4 h-4" />
              {MESSAGES.UI.AUTO_LOGIN}
            </label>
            <button type="button" onClick={handleFindPassword} className="hover:underline" style={{ color: COLORS.PRIMARY }}>
              {MESSAGES.UI.FIND_PASSWORD}
            </button>
          </div>

          {/* 버튼 가로 중앙 배치 */}
          <div className="flex justify-center">
            <Button variant="secondary"
              type="submit"
              className="w-64 py-3 font-semibold hover:text-white cursor-pointer"
              style={{ 
                color: COLORS.ACCENT,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.PRIMARY;
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = COLORS.ACCENT;
              }} 
            >
              {MESSAGES.UI.LOGIN}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
