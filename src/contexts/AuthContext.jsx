import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  email: '',
  password: '',
  verificationCode: '',
  newPassword: '',
  confirmPassword: '',
  isLoading: false,
  error: null,
  isCodeSent: false,
  emailError: '',
  passwordError: '',
  newPasswordError: '',
  confirmPasswordError: '',
  verificationCodeError: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload, emailError: '' };
    
    case 'SET_PASSWORD':
      return { ...state, password: action.payload, passwordError: '' };
    
    case 'SET_VERIFICATION_CODE':
      return { ...state, verificationCode: action.payload, verificationCodeError: '' };
    
    case 'SET_NEW_PASSWORD':
      return { ...state, newPassword: action.payload, newPasswordError: '' };
    
    case 'SET_CONFIRM_PASSWORD':
      return { ...state, confirmPassword: action.payload, confirmPasswordError: '' };
    
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'SET_EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    
    case 'SET_PASSWORD_ERROR':
      return { ...state, passwordError: action.payload };
    
    case 'SET_NEW_PASSWORD_ERROR':
      return { ...state, newPasswordError: action.payload };
    
    case 'SET_CONFIRM_PASSWORD_ERROR':
      return { ...state, confirmPasswordError: action.payload };
    
    case 'SET_VERIFICATION_CODE_ERROR':
      return { ...state, verificationCodeError: action.payload };
    
    case 'SET_CODE_SENT':
      return { ...state, isCodeSent: action.payload };
    
    case 'RESET_STATE':
      return { ...initialState };
    
    case 'RESET_ERRORS':
      return {
        ...state,
        error: null,
        emailError: '',
        passwordError: '',
        newPasswordError: '',
        confirmPasswordError: '',
        verificationCodeError: '',
      };
    
    default:
      return state;
  }
};

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const actions = {
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: email }),
    setPassword: (password) => dispatch({ type: 'SET_PASSWORD', payload: password }),
    setVerificationCode: (code) => dispatch({ type: 'SET_VERIFICATION_CODE', payload: code }),
    setNewPassword: (password) => dispatch({ type: 'SET_NEW_PASSWORD', payload: password }),
    setConfirmPassword: (password) => dispatch({ type: 'SET_CONFIRM_PASSWORD', payload: password }),
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    setEmailError: (error) => dispatch({ type: 'SET_EMAIL_ERROR', payload: error }),
    setPasswordError: (error) => dispatch({ type: 'SET_PASSWORD_ERROR', payload: error }),
    setNewPasswordError: (error) => dispatch({ type: 'SET_NEW_PASSWORD_ERROR', payload: error }),
    setConfirmPasswordError: (error) => dispatch({ type: 'SET_CONFIRM_PASSWORD_ERROR', payload: error }),
    setVerificationCodeError: (error) => dispatch({ type: 'SET_VERIFICATION_CODE_ERROR', payload: error }),
    setCodeSent: (sent) => dispatch({ type: 'SET_CODE_SENT', payload: sent }),
    resetState: () => dispatch({ type: 'RESET_STATE' }),
    resetErrors: () => dispatch({ type: 'RESET_ERRORS' }),
  };

  const value = {
    ...state,
    ...actions,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}