import { useState, useEffect, useMemo, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEmailValidation, useVerificationCodeValidation } from '../../../hooks/useFormValidation';
import { validateEmail, validateVerificationCode } from '../../../utils/validation';
import { SIGNIN_CONSTANTS } from '../constants';

/**
 * 비밀번호 찾기 플로우를 관리하는 훅
 * 이메일 인증부터 인증번호 검증까지의 전체 플로우를 처리
 */
export function usePasswordReset() {
  const navigate = useNavigate();
  
  // Form validation hooks
  const emailValidation = useEmailValidation();
  const codeValidation = useVerificationCodeValidation();
  
  // Local state
  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");
  const [resendSeconds, setResendSeconds] = useState(0);
  const [isCodeSent, setIsCodeSent] = useState(false);
  
  const codeInputRef = useRef(null);

  // resend 타이머
  useEffect(() => {
    if (resendSeconds <= 0) return;
    const id = setInterval(() => setResendSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [resendSeconds]);

  // 서버 메시지 초기화
  useEffect(() => {
    if (serverError !== "") setServerError("");
    if (serverSuccess !== "") setServerSuccess("");
  }, [emailValidation.email, codeValidation.code]);

  // 인증칸 초기화
  useEffect(() => {
    if (!isCodeSent) {
      codeValidation.reset();
    }
  }, [isCodeSent]);

  const canSendCode = useMemo(() => {
    return !isSending && resendSeconds === 0 && !isCodeSent && !validateEmail(emailValidation.email);
  }, [isSending, resendSeconds, isCodeSent, emailValidation.email]);

  const canVerify = useMemo(() => {
    return (
      isCodeSent &&
      !isVerifying &&
      codeValidation.code?.trim().length > 0 &&
      !validateVerificationCode(codeValidation.code)
    );
  }, [isCodeSent, isVerifying, codeValidation.code]);

  const focusCodeInput = () => {
    requestAnimationFrame(() => codeInputRef.current?.focus());
  };

  const handleSendVerification = async () => {
    const err = validateEmail(emailValidation.email);
    emailValidation.setError(err);
    setServerError("");
    setServerSuccess("");

    if (err || isSending || resendSeconds > 0) return;

    try {
      setIsSending(true);
      const res = await fetch(SIGNIN_CONSTANTS.ENDPOINTS.SEND_RESET_CODE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValidation.email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "인증번호 전송에 실패했습니다.");
      }

      setIsCodeSent(true);
      setServerSuccess(SIGNIN_CONSTANTS.MESSAGES.CODE_SENT);
      setResendSeconds(SIGNIN_CONSTANTS.RESEND_TIMER_SECONDS);
      focusCodeInput();
    } catch (e) {
      setServerError(e.message);
    } finally {
      setIsSending(false);
    }
  };

  const handleVerifyCode = async () => {
    const err = validateVerificationCode(codeValidation.code);
    codeValidation.setError(err);
    setServerError("");
    setServerSuccess("");

    if (err || isVerifying) return;

    try {
      setIsVerifying(true);
      const res = await fetch(SIGNIN_CONSTANTS.ENDPOINTS.VERIFY_CODE, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailValidation.email, code: codeValidation.code }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || "인증에 실패했습니다. 다시 시도해 주세요.");
      }

      const resetToken = data?.resetToken;
      setServerSuccess(SIGNIN_CONSTANTS.MESSAGES.CODE_VERIFIED);
      navigate(SIGNIN_CONSTANTS.ROUTES.RESET_PASSWORD, { 
        replace: true, 
        state: { email: emailValidation.email, resetToken } 
      });
    } catch (e) {
      setServerError(e.message);
    } finally {
      setIsVerifying(false);
    }
  };

  const onKeyDownInCode = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleVerifyCode();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleVerifyCode();
  };

  return {
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
  };
}