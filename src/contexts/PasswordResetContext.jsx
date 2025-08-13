import { createContext, useContext, useReducer } from 'react';

const PasswordResetContext = createContext();

const initialState = {
  email: '',
  verificationCode: '',
  newPassword: '',
  confirmPassword: '',
  isCodeSent: false,
  emailError: '',
  verificationCodeError: '',
  newPasswordError: '',
  confirmPasswordError: '',
};

const passwordResetReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload, emailError: '' };
    
    case 'SET_VERIFICATION_CODE':
      return { ...state, verificationCode: action.payload, verificationCodeError: '' };
    
    case 'SET_NEW_PASSWORD':
      return { ...state, newPassword: action.payload, newPasswordError: '' };
    
    case 'SET_CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload, confirmPasswordError: '' };
    
    case 'SET_EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    
    case 'SET_VERIFICATION_CODE_ERROR':
      return { ...state, verificationCodeError: action.payload };
    
    case 'SET_NEW_PASSWORD_ERROR':
      return { ...state, newPasswordError: action.payload };
    
    case 'SET_CONFIRM_PASSWORD_ERROR':
      return { ...state, confirmPasswordError: action.payload };
    
    case 'SET_CODE_SENT':
      return { ...state, isCodeSent: action.payload };
    
    case 'RESET_ERRORS':
      return {
        ...state,
        emailError: '',
        verificationCodeError: '',
        newPasswordError: '',
        confirmPasswordError: '',
      };

    case 'RESET_STATE':
      return { ...initialState };
    
    default:
      return state;
  }
};

export function PasswordResetProvider({ children }) {
  const [state, dispatch] = useReducer(passwordResetReducer, initialState);

  const actions = {
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: email }),
    setVerificationCode: (code) => dispatch({ type: 'SET_VERIFICATION_CODE', payload: code }),
    setNewPassword: (password) => dispatch({ type: 'SET_NEW_PASSWORD', payload: password }),
    setConfirmPassword: (password) => dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: password }),
    setEmailError: (error) => dispatch({ type: 'SET_EMAIL_ERROR', payload: error }),
    setVerificationCodeError: (error) => dispatch({ type: 'SET_VERIFICATION_CODE_ERROR', payload: error }),
    setNewPasswordError: (error) => dispatch({ type: 'SET_NEW_PASSWORD_ERROR', payload: error }),
    setConfirmPasswordError: (error) => dispatch({ type: 'SET_CONFIRM_PASSWORD_ERROR', payload: error }),
    setCodeSent: (sent) => dispatch({ type: 'SET_CODE_SENT', payload: sent }),
    resetErrors: () => dispatch({ type: 'RESET_ERRORS' }),
    resetState: () => dispatch({ type: 'RESET_STATE' }),
  };

  const value = {
    ...state,
    ...actions,
  };

  return <PasswordResetContext.Provider value={value}>{children}</PasswordResetContext.Provider>;
}

export function usePasswordReset() {
  const context = useContext(PasswordResetContext);
  if (context === undefined) {
    throw new Error('usePasswordReset must be used within a PasswordResetProvider');
  }
  return context;
}