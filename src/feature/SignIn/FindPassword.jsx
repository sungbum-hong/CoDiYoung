import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { validateEmail, validateVerificationCode } from "../../utils/validation";
import { MESSAGES } from "../../constants/messages";
import { COLORS } from '../../constants/colors.js';
import Button from "../../ui/Button.jsx";
import FormInput from "../../ui/FormInput";

/** FindPassword (touched + single error) */
export default function FindPassword() {
  const navigate = useNavigate();
  const {
    email,
    verificationCode,
    emailError,
    verificationCodeError,
    isCodeSent,
    setEmail,
    setVerificationCode,
    setEmailError,
    setVerificationCodeError,
    setCodeSent,
  } = useAuth();

  const [isSending, setIsSending] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");
  const [resendSeconds, setResendSeconds] = useState(0);

  // 👇 입력 상호작용 여부
  const [emailTouched, setEmailTouched] = useState(false);
  const [codeTouched, setCodeTouched] = useState(false);

  const codeInputRef = useRef(null);

  // resend 타이머
  useEffect(() => {
    if (resendSeconds <= 0) return;
    const id = setInterval(() => setResendSeconds((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [resendSeconds]);

  // 서버 메시지 초기화
  useEffect(() => {
    setServerError("");
    setServerSuccess("");
  }, [email, verificationCode]);

  // 인증칸 리셋: 코드 전송 취소/초기 상태에서 깔끔히
  useEffect(() => {
    if (!isCodeSent) {
      setCodeTouched(false);
      setVerificationCode("");
      setVerificationCodeError("");
    }
  }, [isCodeSent, setVerificationCode, setVerificationCodeError]);

  const canSendCode = useMemo(() => {
    return !isSending && resendSeconds === 0 && !isCodeSent && !validateEmail(email);
  }, [isSending, resendSeconds, isCodeSent, email]);

  const canVerify = useMemo(() => {
    return (
      isCodeSent &&
      !isVerifying &&
      verificationCode?.trim().length > 0 &&
      !validateVerificationCode(verificationCode)
    );
  }, [isCodeSent, isVerifying, verificationCode]);

  // 👇 에러는 상태로 유지하되, "보여줄지"는 touched로 제어
  const emailErrToShow = emailTouched ? emailError : "";
  const codeErrToShow = codeTouched ? verificationCodeError : "";

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!emailTouched) setEmailTouched(true);
    setEmailError(value ? validateEmail(value) : "이메일을 입력해 주세요.");
  };

  const handleEmailBlur = () => {
    setEmailTouched(true);
    setEmailError(email ? validateEmail(email) : "이메일을 입력해 주세요.");
  };

  const handleVerificationCodeChange = (e) => {
    const value = e.target.value;
    setVerificationCode(value);
    if (!codeTouched) setCodeTouched(true);
    setVerificationCodeError(value ? validateVerificationCode(value) : "인증번호를 입력해 주세요.");
  };

  const handleCodeBlur = () => {
    setCodeTouched(true);
    setVerificationCodeError(
      verificationCode ? validateVerificationCode(verificationCode) : "인증번호를 입력해 주세요."
    );
  };

  const focusCodeInput = () => {
    requestAnimationFrame(() => codeInputRef.current?.focus());
  };

  // 인증번호 전송
  const handleSendVerification = async () => {
    const err = validateEmail(email);
    setEmailError(err);
    setEmailTouched(true); // 전송 시도시 에러 노출
    setServerError("");
    setServerSuccess("");

    if (err || isSending || resendSeconds > 0) return;

    try {
      setIsSending(true);
      const res = await fetch("/auth/reset/send-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.message || "인증번호 전송에 실패했습니다.");
      }

      setCodeSent(true);
      setServerSuccess("인증번호를 전송했습니다. 메일함을 확인해 주세요.");
      setResendSeconds(60);
      focusCodeInput();
    } catch (e) {
      setServerError(e.message);
    } finally {
      setIsSending(false);
    }
  };

  // 인증 확인
  const handleVerifyCode = async () => {
    // 제출 시에도 touched 처리 → 에러가 있으면 노출
    setEmailTouched(true);
    setCodeTouched(true);

    const err = validateVerificationCode(verificationCode);
    setVerificationCodeError(err);
    setServerError("");
    setServerSuccess("");

    if (err || isVerifying) return;

    try {
      setIsVerifying(true);
      const res = await fetch("/auth/reset/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: verificationCode }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data?.message || "인증에 실패했습니다. 다시 시도해 주세요.");
      }

      const resetToken = data?.resetToken;
      setServerSuccess("인증이 완료되었습니다.");
      navigate("/resetpassword", { replace: true, state: { email, resetToken } });
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

  return (
    <div className="min-h-screen flex" role="main" aria-labelledby="find-password-heading">
      <div className="w-full max-w-[1120px] px-6 pt-1 pb-1">
        <h2 className="text-2xl font-bold mb-[48px] text-center">
          {MESSAGES.UI?.FIND_PASSWORD ?? "비밀번호 찾기"}
        </h2>

        <form
          onSubmit={onSubmit}
          className="
           mx-auto 
            w-[360px] md:w-[560px] lg:w-[660px]   /* 가로 폭 */
            border-2 rounded-2xl shadow-sm
            px-10 md:px-12 py-10
            flex flex-col justify-between gap-5
            min-h-[360px] md:min-h-[460px]                    /* 최소 높이 보장 */
            h-[min(86dvh,46px)]                               /* 화면 대비 최대 높이 */
          "
          style={{ borderColor: COLORS.PRIMARY }}
        >
          {/* 이메일 + 버튼 (한 줄 고정) + 아래 전폭 인증칸 */}
          <div className="grid grid-cols-[minmax(0,1fr)_200px] gap-x-6 items-start gap-y-7">
            {/* 왼쪽: 이메일 입력 (에러는 FormInput 내부에서만 표시 → 1개만) */}
            <div className="flex-1">
              <FormInput
                type="email"
                placeholder="이메일을 입력하세요"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailBlur}
                disabled={isCodeSent}
                error={emailErrToShow}       // 👈 touched일 때만 전달
                required
                aria-invalid={!!emailErrToShow}
                className="text-sm md:text-base h-11 mb-1"
              />
              {/* 외부 <p> 에러 제거 → 중복 방지 */}
            </div>

            {/* 오른쪽: 인증번호 보내기 버튼 */}
<div className="self-start w-[200px]">
  <Button
    type="button"
    onClick={handleSendVerification}
    disabled={!canSendCode}
    className="
      w-full h-11 text-sm mb-3 rounded-[15px]
      transition-colors duration-200
      !bg-white !text-[#722EFF] !border !border-[#722EFF]
      hover:!bg-[#722EFF] hover:!text-[#FFF]
      focus-visible:!ring-2 focus-visible:!ring-[#722EFF]/40 focus-visible:!ring-offset-2
      disabled:opacity-50 disabled:pointer-events-none
    "
  >
    {isSending
      ? "전송중..."
      : isCodeSent
      ? (resendSeconds > 0 ? `다시 전송 (${resendSeconds}s)` : "재전송")
      : "인증번호 보내기"}
  </Button>
</div>

            {/* 아래 전폭: 인증번호 입력 (항상 렌더, 전송 전 disabled) */}
            <div className="col-span-2">
              <div className={isCodeSent ? "" : "opacity-50"}>
                <FormInput
                  ref={codeInputRef}
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  placeholder="인증번호를 입력하세요"
                  value={verificationCode}
                  onChange={handleVerificationCodeChange}
                  onBlur={handleCodeBlur}
                  onKeyDown={onKeyDownInCode}
                  error={codeErrToShow}      // 👈 touched일 때만 전달
                  required
                  disabled={!isCodeSent}
                  aria-disabled={!isCodeSent}
                  className="text-sm md:text-base w-full h-11 mt-5 mb-20" 
                />
              </div>
            </div>
          </div>

          {/* 확인 버튼 */}
          <div className="mt-2 flex justify-center">
          <Button
            variant="primary"
            type="submit"
            disabled={!canVerify}
            className="
              w-64 h-11 rounded-[15px] font-semibold cursor-pointer
              transition-colors duration-200
              !bg-[#722EFF] hover:!bg-[#5B24D6]
              !text-white !border-transparent
              focus-visible:!ring-2 focus-visible:!ring-[#722EFF]/40 focus-visible:!ring-offset-2
              disabled:!bg-[#722EFF]/50 disabled:cursor-not-allowed
            "
          >
             {isVerifying ? "인증 확인 중..." : "확인"}
                </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
