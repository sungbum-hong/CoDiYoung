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
  STUDY_CATEGORY: "/study/:category",
  PROJECT_DETAIL: "/project/:projectId", 
  
  // 사용자 기능
  WRITE: "/write",
  PROFILE: "/profile",
}

// 동적 라우트 생성 헬퍼 함수
export const generateRoute = {
  studyCategory: (category) => `/study/${category}`,
  projectDetail: (projectId) => `/project/${projectId}`,
}

// 인증이 필요한 경로들
export const AUTH_REQUIRED_ROUTES = [
  ROUTES.WRITE,
  ROUTES.PROFILE,
]

// 인증 관련 경로들 (로그인 후 리다이렉트 제외 대상)
export const AUTH_ROUTES = [
  ROUTES.SIGNIN,
  ROUTES.FIND_PASSWORD,
  ROUTES.RESET_PASSWORD,
  ROUTES.SUCCESS_RESET_PASSWORD,
]