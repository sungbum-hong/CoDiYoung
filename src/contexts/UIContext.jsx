import { createContext, useContext, useReducer } from 'react';

const UIContext = createContext();

const initialState = {
  isLoading: false,
  error: null,
};

const uiReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    
    case 'CLEAR_ERROR':
      return { ...state, error: null };

    case 'RESET_UI':
      return { ...initialState };
    
    default:
      return state;
  }
};

export function UIProvider({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initialState);

  const actions = {
    setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: loading }),
    setError: (error) => dispatch({ type: 'SET_ERROR', payload: error }),
    clearError: () => dispatch({ type: 'CLEAR_ERROR' }),
    resetUI: () => dispatch({ type: 'RESET_UI' }),
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