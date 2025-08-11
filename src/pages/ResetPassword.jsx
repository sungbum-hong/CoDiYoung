import { useAuth } from "../contexts/AuthContext";
import { validatePassword, validatePasswordConfirmation } from "../utils/validation";
import ColorButton from "../ui/ColorButton";
import FormInput from "../ui/FormInput";

export default function ResetPassword({ onClose }) {
  const {
    email,
    newPassword,
    confirmPassword,
    passwordError,
    confirmPasswordError,
    setNewPassword,
    setConfirmPassword,
    setPasswordError,
    setConfirmPasswordError
  } = useAuth();


  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setNewPassword(value);
    
    const error = validatePassword(value);
    setPasswordError(error);
    
    if (confirmPassword) {
      const confirmError = validatePasswordConfirmation(value, confirmPassword);
      setConfirmPasswordError(confirmError);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    
    const error = validatePasswordConfirmation(newPassword, value);
    setConfirmPasswordError(error);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    
    const passwordValidation = validatePassword(newPassword);
    const confirmValidation = validatePasswordConfirmation(newPassword, confirmPassword);
    
    setPasswordError(passwordValidation);
    setConfirmPasswordError(confirmValidation);
    
    if (!passwordValidation && !confirmValidation) {
      onClose();
    }
  };

  const isFormValid = () => {
    return newPassword && 
           confirmPassword && 
           !passwordError && 
           !confirmPasswordError &&
           validatePassword(newPassword) === "" &&
           validatePasswordConfirmation(newPassword, confirmPassword) === "";
  };

  return (
    <div className="flex flex-col h-full p-4 md:p-6">
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2">새 비밀번호 설정</h3>
        <p className="text-sm md:text-base text-gray-600">
          {email}으로 새로운 비밀번호를 설정해주세요
        </p>
      </div>

      <form onSubmit={handleResetPassword} className="flex flex-col gap-4 md:gap-6 flex-1">
        <FormInput
          type="password"
          placeholder="새 비밀번호 (8자 이상, 대소문자, 숫자, 특수문자 포함)"
          value={newPassword}
          onChange={handlePasswordChange}
          error={passwordError}
          required
          className="text-sm md:text-base"
        />

        <FormInput
          type="password"
          placeholder="새 비밀번호 확인"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          error={confirmPasswordError}
          required
          className="text-sm md:text-base"
        />

        <div className="flex justify-center" style={{ marginTop: "30px" }}>
          <ColorButton 
            type="submit"
            disabled={!isFormValid()}
            className="px-8 py-3 md:px-12 md:py-3 rounded-[5px] w-full sm:w-auto text-sm md:text-base"
          >
            비밀번호 재설정
          </ColorButton>
        </div>
      </form>
    </div>
  );
}