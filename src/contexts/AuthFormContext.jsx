import { createContext, useContext, useReducer } from 'react';

const AuthFormContext = createContext();

const initialState = {
  email: '',
  password: '',
  emailError: '',
  passwordError: '',
};

const authFormReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    
    case 'SET_EMAIL_ERROR':
      return { ...state, emailError: action.payload };
    
    case 'SET_PASSWORD_ERROR':
      return { ...state, passwordError: action.payload };
    
    case 'RESET_ERRORS':
      return {
        ...state,
        emailError: '',
        passwordError: '',
      };

    case 'RESET_FORM':
      return { ...initialState };
    
    default:
      return state;
  }
};

export function AuthFormProvider({ children }) {
  const [state, dispatch] = useReducer(authFormReducer, initialState);

  const actions = {
    setEmail: (email) => dispatch({ type: 'SET_EMAIL', payload: email }),
    setPassword: (password) => dispatch({ type: 'SET_PASSWORD', payload: password }),
    setEmailError: (error) => dispatch({ type: 'SET_EMAIL_ERROR', payload: error }),
    setPasswordError: (error) => dispatch({ type: 'SET_PASSWORD_ERROR', payload: error }),
    resetErrors: () => dispatch({ type: 'RESET_ERRORS' }),
    resetForm: () => dispatch({ type: 'RESET_FORM' }),
  };

  const value = {
    ...state,
    ...actions,
  };

  return <AuthFormContext.Provider value={value}>{children}</AuthFormContext.Provider>;
}

export function useAuthForm() {
  const context = useContext(AuthFormContext);
  if (context === undefined) {
    throw new Error('useAuthForm must be used within an AuthFormProvider');
  }
  return context;
}