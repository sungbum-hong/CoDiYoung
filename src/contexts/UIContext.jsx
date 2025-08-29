import { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import { AuthService } from '../services/authService.js';

const UIContext = createContext();

const initialState = {
  isLoading: false,
  error: null,
  isAuthenticated: false,
  user: null,
};

const uiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'CLEAR_ERROR':
      return { ...state, error: null };

    case 'LOGIN_SUCCESS':
      // 로그인 성공 시 사용자 정보 저장
      AuthService.saveUserToStorage(action.payload);
      return { 
        ...state, 
        isAuthenticated: true, 
        user: action.payload,
        isLoading: false,
        error: null
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        isLoading: false,
        error: action.payload
      };

    case 'SET_USER':
      return { 
        ...state, 
        isAuthenticated: true, 
        user: action.payload 
      };
    
    case 'LOGOUT':
      return { 
        ...state, 
        isAuthenticated: false, 
        user: null,
        isLoading: false,
        error: null
      };

    case 'RESET_UI':
      return { ...initialState };
    
    default:
      return state;
  }
};

export function UIProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  // 앱 초기화 시 로그인 상태 확인
  useEffect(() => {
    const currentUser = AuthService.getCurrentUser();
    if (currentUser) {
      dispatch({ type: 'SET_USER', payload: currentUser });
    }
  }, []);

  const actions = {
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
    setUser: (user) => dispatch({ type: 'SET_USER', payload: user }),
    
    // Mock 로그인 함수
    login: async (email, password) => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });
      
      try {
        const user = await AuthService.login(email, password);
        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        return { success: true, user };
      } catch (error) {
        dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
        return { success: false, error: error.message };
      }
    },

    // 로그아웃 함수
    logout: async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      try {
        await AuthService.logout();
        dispatch({ type: 'LOGOUT' });
        return { success: true };
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
        dispatch({ type: 'SET_LOADING', payload: false });
        return { success: false, error: error.message };
      }
    },

    resetUI: () => dispatch({ type: 'RESET_UI' }),

    // 프로필 정보 로드
    loadProfile: useCallback(async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'CLEAR_ERROR' });
      
      try {
        const profile = await AuthService.getMyProfile();
        dispatch({ type: 'SET_USER', payload: profile });
        return { success: true, profile };
      } catch (error) {
        dispatch({ type: 'SET_ERROR', payload: error.message });
        return { success: false, error: error.message };
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    }, []),
  };

  const value = {
    ...state,
    ...actions,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
}

export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
}