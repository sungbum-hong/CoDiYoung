import Button from "../../ui/Button.jsx";
import FormInput from "../../ui/FormInput";
import { COLORS } from "../../constants/colors.js";
import { MESSAGES } from "../../constants/messages.js";
import { CONFIG } from "../../constants/config.js";
import ErrorModal from "./components/ErrorModal.jsx";
import { useSignInForm } from "./hooks/useSignInForm.js";
import { useSignInAuth } from "./hooks/useSignInAuth.js";


import { Link } from "react-router-dom";

export default function SignInPage({ onClose }) {
  const {
    email, password, emailError, passwordError,
    handleEmailChange, handlePasswordChange, validateForm, resetErrors,
    error, clearError
  } = useSignInForm();
  
  const { isLoading, handleLogin, handleFindPassword } = useSignInAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    await handleLogin(email, password, onClose);
  };

  return (
    <div className={`w-full min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)] flex flex-col items-center justify-center`}>
      <div 
        className="w-full px-4 flex flex-col items-center"
        style={{ maxWidth: '600px' }}
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10">
          {/* Logo */}
          <div className="mb-4">
            <Link to="/">
              <img 
                src="/cdylogo.png" 
                alt="CoDiYoung Logo" 
                className="h-12 w-auto object-contain cursor-pointer hover:opacity-80 transition-opacity"
              />
            </Link>
          </div>
          
          {/* Title */}
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            코디영 로그인하기
          </h1>
          
          {/* Subtitle */}
          <p className="text-sm text-gray-600 flex items-center gap-1">
            <span>💡</span>
            코디영에서 스터디를 시작해보세요!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-900">이메일</label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-400"
              disabled={isLoading}
            />
            {emailError && <p className="text-xs text-red-500">{emailError}</p>}
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-bold text-gray-900">비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all placeholder-gray-400"
              disabled={isLoading}
            />
            {passwordError && <p className="text-xs text-red-500">{passwordError}</p>}
          </div>

          {/* Keep Login Checkbox */}
          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="keepLogin"
              className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
            />
            <label htmlFor="keepLogin" className="text-sm text-gray-600 select-none cursor-pointer">
              로그인 상태 유지
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 rounded-lg font-bold text-white transition-colors mt-2"
            style={{
              backgroundColor: '#D9D9D9', // Image shows a gray button initially
              color: '#717171'
            }}
            onMouseOver={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                e.currentTarget.style.color = 'white';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#D9D9D9';
                e.currentTarget.style.color = '#717171';
              }
            }}
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </button>
        </form>
      </div>

      {/* Error Modal */}
      <ErrorModal
        open={!!error}
        message={error}
        primary={COLORS.PRIMARY}
        onClose={clearError}
        onFindPassword={() => {
          clearError();
          handleFindPassword(resetErrors);
        }}
      />
    </div>
  );
}

