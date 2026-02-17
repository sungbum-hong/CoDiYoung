import { MESSAGES } from '../../constants/messages';
import { CONFIG } from '../../constants/config';

export const validateEmail = (email: string) => {
  if (!email) {
    return MESSAGES.VALIDATION.EMAIL_REQUIRED;
  }
  
  const emailRegex = CONFIG.VALIDATION.EMAIL_REGEX;
  if (!emailRegex.test(email)) {
    return MESSAGES.VALIDATION.EMAIL_INVALID;
  }
  
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) {
    return MESSAGES.VALIDATION.PASSWORD_REQUIRED;
  }
  
  if (password.length < CONFIG.VALIDATION.PASSWORD_MIN_LENGTH) {
    return MESSAGES.VALIDATION.PASSWORD_MIN_LENGTH;
  }
  
  // 8자 이상, 영문/숫자/특수문자 중 2가지 이상 조합
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  
  const validCount = [hasLetter, hasNumber, hasSpecial].filter(Boolean).length;
  
  if (password.length < 8 || validCount < 2) {
    return MESSAGES.VALIDATION.PASSWORD_INVALID;
  }
  
  return "";
};

export const validatePasswordConfirmation = (password: string, confirmPassword: string) => {
  if (!confirmPassword) {
    return MESSAGES.VALIDATION.PASSWORD_CONFIRM_REQUIRED;
  }
  
  if (password !== confirmPassword) {
    return MESSAGES.VALIDATION.PASSWORD_NOT_MATCH;
  }
  
  return "";
};

export const validateVerificationCode = (code: string) => {
  if (!code) {
    return MESSAGES.VALIDATION.VERIFICATION_CODE_REQUIRED;
  }
  
  // 개발 단계에서는 임의 길이 허용 (최소 1자리 이상)
  if (code.length < 1) {
    return MESSAGES.VALIDATION.VERIFICATION_CODE_REQUIRED;
  }
  
  return "";
};