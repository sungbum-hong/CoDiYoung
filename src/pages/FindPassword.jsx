import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { validateEmail, validateVerificationCode } from "../utils/validation";
import ColorButton from "../ui/ColorButton";
import FormInput from "../ui/FormInput";
import ResetPassword from "./ResetPassword";

export default function FindPassword({ onClose }) {
  const {
    email,
    verificationCode,
    emailError,
    verificationCodeError,
    isCodeSent,
    currentStep,
    setEmail,
    setVerificationCode,
    setEmailError,
    setVerificationCodeError,
    setCodeSent,
    setCurrentStep
  } = useAuth();

  const showResetPassword = currentStep === 'resetPassword';


  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    if (value) {
      const error = validateEmail(value);
      setEmailError(error);
    }
  };

  const handleSendVerification = () => {
    const error = validateEmail(email);
    setEmailError(error);
    
    if (!error) {
      setCodeSent(true);
    }
  };

  const handleVerifyCode = () => {
    const error = validateVerificationCode(verificationCode);
    setVerificationCodeError(error);
    
    if (!error) {
      setCurrentStep('resetPassword');
    }
  };

  const handleVerificationCodeChange = (e) => {
    const value = e.target.value;
    setVerificationCode(value);
    
    if (value) {
      const error = validateVerificationCode(value);
      setVerificationCodeError(error);
    }
  };

  const handleResetPasswordSuccess = () => {
    setCurrentStep('successResetPassword');
  };

  if (showResetPassword) {
    return <ResetPassword onClose={handleResetPasswordSuccess} />;
  }

  return (
    <div className="flex flex-col h-full p-4 md:p-6">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">이메일 인증</h3>
        <p className="text-sm md:text-base text-gray-600">등록된 이메일로 인증번호를 받으세요</p>
      </div>

      <div className="flex flex-col gap-4 md:gap-6 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div className="flex-1">
            <FormInput
              type="email"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={handleEmailChange}
              disabled={isCodeSent}
              error={emailError}
              required
              className="text-sm md:text-base"
            />
          </div>
          <ColorButton
            onClick={handleSendVerification}
            type="button"
            disabled={isCodeSent}
            className="whitespace-nowrap px-3 py-2 md:px-5 md:py-2.5 text-xs md:text-sm w-full sm:w-auto"
          >
            {isCodeSent ? "전송완료" : "인증번호보내기"}
          </ColorButton>
        </div>

        <AnimatePresence>
          {isCodeSent && (
            <motion.div
              key="verification-input"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ 
                duration: 0.3,
                ease: "easeOut"
              }}
            >
              <FormInput
                type="text"
                placeholder="인증번호를 입력하세요"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                error={verificationCodeError}
                required
                className="text-sm md:text-base"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex justify-center" style={{ marginTop: "30px" }}>
          <ColorButton 
            type="button"
            onClick={handleVerifyCode}
            disabled={!isCodeSent || !verificationCode}
            className="px-8 py-3 md:px-12 md:py-3 rounded-[5px] w-full sm:w-auto text-sm md:text-base"
          >
            인증확인
          </ColorButton>
        </div>
      </div>
    </div>
  );
}
  