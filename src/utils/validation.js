import { MESSAGES } from '../constants/messages.js';
import { CONFIG } from '../constants/config.js';

export const validateEmail = (email) => {
  if (!email) {
    return MESSAGES.VALIDATION.EMAIL_REQUIRED;
  }
  
  const emailRegex = CONFIG.VALIDATION.EMAIL_REGEX;
  if (!emailRegex.test(email)) {
    return MESSAGES.VALIDATION.EMAIL_INVALID;
  }
  
  return "";
};

export const validatePassword = (password) => {
  if (!password) {
    return MESSAGES.VALIDATION.PASSWORD_REQUIRED;
  }
  
  if (password.length < CONFIG.VALIDATION.PASSWORD_MIN_LENGTH) {
    return MESSAGES.VALIDATION.PASSWORD_MIN_LENGTH;
  }
  
  if (!/(?=.*[a-z])/.test(password)) {
    return MESSAGES.VALIDATION.PASSWORD_NEED_LOWERCASE;
  }
  
  if (!/(?=.*[A-Z])/.test(password)) {
    return MESSAGES.VALIDATION.PASSWORD_NEED_UPPERCASE;
  }
  
  if (!/(?=.*\d)/.test(password)) {
    return MESSAGES.VALIDATION.PASSWORD_NEED_NUMBER;
  }
  
  if (!/(?=.*[!@#$%^&*])/.test(password)) {
    return MESSAGES.VALIDATION.PASSWORD_NEED_SPECIAL;
  }
  
  return "";
};

export const validatePasswordConfirmation = (password, confirmPassword) => {
  if (!confirmPassword) {
    return MESSAGES.VALIDATION.PASSWORD_CONFIRM_REQUIRED;
  }
  
  if (password !== confirmPassword) {
    return MESSAGES.VALIDATION.PASSWORD_NOT_MATCH;
  }
  
  return "";
};

export const validateVerificationCode = (code) => {
  if (!code) {
    return MESSAGES.VALIDATION.VERIFICATION_CODE_REQUIRED;
  }
  
  // 개발 단계에서는 임의 길이 허용 (최소 1자리 이상)
  if (code.length < 1) {
    return MESSAGES.VALIDATION.VERIFICATION_CODE_REQUIRED;
  }
  
  return "";
};