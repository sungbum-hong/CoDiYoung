// General auth related constants (shared across features)
export const AUTH_CONSTANTS = {
  // Common API endpoints
  ENDPOINTS: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    PROFILE: '/auth/profile'
  },
  
  // Common routes
  ROUTES: {
    SIGN_IN: '/signin',
    SIGN_UP: '/signup',
    PROFILE: '/profile'
  },
  
  // Token storage keys
  STORAGE_KEYS: {
    ACCESS_TOKEN: 'accessToken',
    REFRESH_TOKEN: 'refreshToken',
    USER: 'user'
  },
  
  // General auth messages
  MESSAGES: {
    LOGIN_SUCCESS: '로그인 성공',
    LOGOUT_SUCCESS: '로그아웃 되었습니다',
    LOGIN_REQUIRED: '로그인이 필요합니다',
    SESSION_EXPIRED: '세션이 만료되었습니다'
  }
};