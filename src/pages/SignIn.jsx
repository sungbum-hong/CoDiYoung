import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { validateEmail, validatePassword } from "../utils/validation";
import NonColorButton from "../ui/NonColorButton";
import FormInput from "../ui/FormInput";

export default function SignIn({ onClose }) {
  const navigate = useNavigate();
  const {
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    setEmailError,
    setPasswordError,
    resetErrors
  } = useAuth();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value) {
      const error = validateEmail(value);
      setEmailError(error);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    
    if (value) {
      const error = validatePassword(value);
      setPasswordError(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    
    if (!emailValidation && !passwordValidation) {
      if (onClose) onClose();
    }
  };

  const handleFindPassword = () => {
    resetErrors();
    navigate('/findpassword');
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-10 mt-10">
      <FormInput
        type="email"
        placeholder="아이디를 입력하세요"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        required
        variant="signin"
      />

      <FormInput
        type="password"
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
        required
        variant="signin"
      />

      <div className="flex flex-row gap-2 justify-between">
        <div className="flex flex-row gap-2">
          <input type="checkbox" className="w-4 h-4" />
          <p className="text-sm text-[#6E6E6E]">자동 로그인</p>
        </div>
        <span
          className="text-sm text-[#6E6E6E] cursor-pointer"
          onClick={handleFindPassword}
        >
          비밀번호 찾기
        </span>
      </div>

      <div className="flex justify-center mt-10">
        <NonColorButton
          type="submit"
          className="w-96 p-4 text-center rounded-[10px]"
        >
          로그인
        </NonColorButton>
      </div>
    </form>
  );
}
