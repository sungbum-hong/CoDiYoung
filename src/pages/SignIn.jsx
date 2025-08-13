// src/pages/SignIn.jsx
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { validateEmail, validatePassword } from "../utils/validation";
import NonColorButton from "../ui/NonColorButton";
import FormInput from "../ui/FormInput";

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
    navigate("/findpassword");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex justify-center">
      <div className="w-full max-w-[1120px] px-6 pt-10 pb-32">
        <h2 className="text-2xl font-bold mb-[63px] text-center">로그인</h2>

        {/* 주의: className 문자열 안에는 주석 넣지 마세요 */}
        <form
          onSubmit={onSubmit}
          className="
            w-full
            border-2 border-[#722EFF] rounded-2xl bg-white shadow-sm
            px-[50px] py-[60px]
            flex flex-col gap-8
            max-w-[720px] mx-auto
            min-h-[350px]
          "
        >
          <FormInput
            type="email"
            placeholder="아이디를 입력하세요"
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
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
            required
            variant="signin"
            size="lg"
            className="mb-3"
          />

          <div className="flex justify-between items-center text-sm text-[#6E6E6E] mb-5">
            <label className="flex items-center gap-2 select-none">
              <input type="checkbox" className="w-4 h-4" />
              자동 로그인
            </label>
            <button type="button" onClick={handleFindPassword} className="hover:text-[#722EFF]">
              비밀번호 찾기
            </button>
          </div>

          {/* 버튼 가로 중앙 배치 */}
          <div className="flex justify-center">
            <NonColorButton
              type="submit"
              className="w-64 py-3 text-[#15267E] font-semibold hover:bg-[#722EFF] hover:text-white cursor-pointer" 
            >
              로그인
            </NonColorButton>
          </div>
        </form>
      </div>
    </div>
  );
}
