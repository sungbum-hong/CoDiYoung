// Mock 서비스 설정

// 개발 환境에서 Mock 데이터 사용 여부
export const USE_MOCK_DATA = true;

// Mock API 응답 딜레이 설정 (밀리초)
export const MOCK_DELAYS = {
  GET_ALL_PROJECTS: 300,
  GET_PROJECT: 400, 
  GET_PROGRESSING_PROJECTS: 500,
  GET_APPLIED_PROJECTS: 400,
  GET_PROJECT_APPLICANTS: 600,
  CREATE_PROJECT: 800,
  APPLY_TO_PROJECT: 700
};

// 현재 로그인한 사용자 정보 (Mock)
export const CURRENT_USER = {
  id: 1,
  name: "김지호",
  nickname: "현재사용자",
  email: "test@example.com",
  profileUrl: null
};