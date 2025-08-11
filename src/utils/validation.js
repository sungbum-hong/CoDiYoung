export const validateEmail = (email) => {
  if (!email) {
    return "이메일을 입력해주세요.";
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "올바른 이메일 형식이 아닙니다.";
  }
  
  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return "비밀번호를 입력해주세요.";
  }
  
  if (password.length < 8) {
    return "비밀번호는 최소 8자 이상이어야 합니다.";
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return "비밀번호에 소문자를 포함해야 합니다.";
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return "비밀번호에 대문자를 포함해야 합니다.";
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return "비밀번호에 숫자를 포함해야 합니다.";
  }
  
  if (!/(?=.*[!@#$%^&*])/.test(password)) {
    return "비밀번호에 특수문자(!@#$%^&*)를 포함해야 합니다.";
  }
  
  return "";
};

export const validatePasswordConfirmation = (password, confirmPassword) => {
  if (!confirmPassword) {
    return "비밀번호 확인을 입력해주세요.";
  }
  
  if (password !== confirmPassword) {
    return "비밀번호가 일치하지 않습니다.";
  }
  
  return "";
};

export const validateVerificationCode = (code) => {
  if (!code) {
    return "인증번호를 입력해주세요.";
  }
  
  // 개발 단계에서는 임의 길이 허용 (최소 1자리 이상)
  if (code.length < 1) {
    return "인증번호를 입력해주세요.";
  }
  
  return "";
};