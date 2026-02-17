import type { FormEvent } from "react";
import Button from "../../shared/ui/Button"; // .jsx 제거
import FormInput from "../../shared/ui/FormInput"; // .tsx니까 확장자 X
import { COLORS } from "../../constants/colors"; // .js 제거
import { CONFIG } from "../../constants/config";
import { useSignInForm } from "./hooks/useSignInForm"; // .js 제거
// useSignInAuth도 .ts로 바뀌었을 테니 경로 확인 필요 (아직 안 바꿨다면 에러 날 수 있음)
import { useSignInAuth } from "./hooks/useSignInAuth"; 
import Link from "next/link";
import Image from "next/image"; // Next.js 이미지 최적화

// ErrorModal도 .tsx로 바뀌었는지 확인 필요. 없다면 any로 처리하거나 생성해야 함.
// 일단 import는 유지하되, 파일이 없으면 에러 날 수 있음.
// import ErrorModal from "./components/ErrorModal"; 

// Props 타입 정의
interface SignInPageProps {
  onClose?: () => void;
}

export default function SignInPage({ onClose }: SignInPageProps) {
  const {
    email, 
    password, 
    emailError, 
    passwordError,
    handleEmailChange, 
    handlePasswordChange, 
    validateForm, 
    error, 
    clearError
  } = useSignInForm();
  
  // useSignInAuth 훅이 TS로 되어있어야 함
  const { isLoading, handleLogin } = useSignInAuth();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    // handleLogin 타입에 맞춰서 호출
    if (onClose) {
        await handleLogin(email, password, onClose);
    } else {
        await handleLogin(email, password, () => {});
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white">
      <div 
        className="w-full px-4 flex flex-col items-center max-w-[400px]" // 모바일 친화적 max-w
      >
        {/* Header Section */}
        <div className="flex flex-col items-center mb-10 w-full">
          <Link href="/" className="mb-6">
            <div className="relative w-32 h-10">
                {/* Next/Image 사용 권장 */}
                <img 
                  src="/cdylogo.png" 
                  alt="CoDiYoung Logo" 
                  className="object-contain w-full h-full"
                />
            </div>
          </Link>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            코디영 로그인하기
          </h1>
          <p className="text-sm text-gray-500">
            코디영에서 스터디를 시작해보세요!
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
          
          {/* Email Input (FormInput 컴포넌트 활용) */}
          <FormInput
             type="email"
             placeholder="이메일을 입력해주세요"
             value={email}
             onChange={handleEmailChange}
             error={emailError}
             disabled={isLoading}
             variant="signin" // 아까 만든 variant 활용
             size="md"
          />

          {/* Password Input (FormInput 컴포넌트 활용) */}
          <FormInput
             type="password"
             placeholder="비밀번호를 입력해주세요"
             value={password}
             onChange={handlePasswordChange}
             error={passwordError}
             disabled={isLoading}
             variant="signin"
             size="md"
          />

          {/* Login Button (Button 컴포넌트 활용) */}
          <Button
            type="submit"
            disabled={isLoading}
            variant="primary"
            size="lg"
            className="w-full mt-4"
          >
            {isLoading ? "로그인 중..." : "로그인"}
          </Button>
          
          {/* 하단 링크들 */}
          <div className="flex justify-center gap-4 text-sm text-gray-500 mt-2">
             <Link href="/findpassword">비밀번호 찾기</Link>
             <span className="text-gray-300">|</span>
             <Link href="/signup">회원가입</Link>
          </div>

        </form>
      </div>

      {/* Error Modal (잠시 주석 처리: 컴포넌트 유무 확인 필요) */}
      {/* 
      <ErrorModal
        open={!!error}
        message={error}
        primary={COLORS.PRIMARY}
        onClose={clearError}
      /> 
      */}
    </div>
  );
}
