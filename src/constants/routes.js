// 모든 라우트 경로 상수
export const ROUTES = {
  // 메인 페이지
  HOME: "/",
  
  // 인증 관련 페이지
  SIGNIN: "/signin",
  FIND_PASSWORD: "/findpassword",
  RESET_PASSWORD: "/resetpassword",
  SUCCESS_RESET_PASSWORD: "/successresetpassword",
  
  // 동적 라우트
  STUDY_CHANNEL: "/study/:userId",
  PROJECTS: "/projects",
  PROJECT_DETAIL: "/project/:projectId", 
  
  // 사용자 기능
  WRITE: "/write",
  PROFILE: "/profile",

  //어드민 페이지
  ADMIN_PAGE: "/admin"
}


// 인증 관련 경로들 (로그인 후 리다이렉트 제외 대상)
export const AUTH_ROUTES = [
  ROUTES.SIGNIN,
  ROUTES.FIND_PASSWORD,
  ROUTES.RESET_PASSWORD,
  ROUTES.SUCCESS_RESET_PASSWORD,
]