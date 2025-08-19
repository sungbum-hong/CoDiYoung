// SignIn feature specific constants
export const SIGNIN_CONSTANTS = {
  // Timer settings
  RESEND_TIMER_SECONDS: 60,
  
  // API endpoints
  ENDPOINTS: {
    SEND_RESET_CODE: '/auth/reset/send-code',
    VERIFY_CODE: '/auth/reset/verify-code',
    RESET_PASSWORD: '/auth/reset/password'
  },
  
  // Routes
  ROUTES: {
    SIGN_IN: '/signin',
    FIND_PASSWORD: '/findpassword',
    RESET_PASSWORD: '/resetpassword',
    SUCCESS_RESET_PASSWORD: '/successresetpassword'
  },
  
  // Messages
  MESSAGES: {
    SENDING: '전송중...',
    VERIFYING: '인증 확인 중...',
    CODE_SENT: '인증번호를 전송했습니다. 메일함을 확인해 주세요.',
    CODE_VERIFIED: '인증이 완료되었습니다.',
    PASSWORD_RESET_SUCCESS: '비밀번호 변경 완료!!',
    RESEND_FORMAT: (seconds) => `다시 전송 (${seconds}s)`,
    SEND_CODE: '인증번호 보내기',
    RESEND: '재전송',
    CONFIRM: '확인',
    RESET_PASSWORD: '비밀번호 재설정',
    BACK: '이전으로'
  }
};