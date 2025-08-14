// 모든 텍스트 메시지 상수
export const MESSAGES = {
  // 검증 메시지
  VALIDATION: {
    EMAIL_REQUIRED: "이메일을 입력해주세요.",
    EMAIL_INVALID: "올바른 이메일 형식이 아닙니다.",
    PASSWORD_REQUIRED: "비밀번호를 입력해주세요.",
    PASSWORD_MIN_LENGTH: "비밀번호는 최소 8자 이상이어야 합니다.",
    PASSWORD_NEED_LOWERCASE: "비밀번호에 소문자를 포함해야 합니다.",
    PASSWORD_NEED_UPPERCASE: "비밀번호에 대문자를 포함해야 합니다.",
    PASSWORD_NEED_NUMBER: "비밀번호에 숫자를 포함해야 합니다.",
    PASSWORD_NEED_SPECIAL: "비밀번호에 특수문자(!@#$%^&*)를 포함해야 합니다.",
    PASSWORD_CONFIRM_REQUIRED: "비밀번호 확인을 입력해주세요.",
    PASSWORD_NOT_MATCH: "비밀번호가 일치하지 않습니다.",
    VERIFICATION_CODE_REQUIRED: "인증번호를 입력해주세요.",
  },

  // UI 메시지
  UI: {
    LOADING: "로딩 중...",
    LOGIN: "로그인",
    LOGOUT: "로그아웃", 
    SIGNUP: "회원가입",
    FIND_PASSWORD: "비밀번호 찾기",
    RESET_PASSWORD: "비밀번호 재설정",
    CONFIRM: "확인",
    CANCEL: "취소",
    CLOSE: "닫기",
    SUBMIT: "제출",
    APPLY: "신청하기",
    EDIT: "수정",
    DELETE: "삭제",
    SAVE: "저장",
    RECORD: "기록하기",
    EXPLORE: "구경하기",
    AUTO_LOGIN: "자동 로그인",
    BACK_TO_LOGIN: "로그인으로 돌아가기",
    PREVIOUS: "이전으로",
    SEND_VERIFICATION: "인증번호보내기",
    SENT_COMPLETE: "전송완료",
    VERIFY_CODE: "인증확인",
    CHANGE_COMPLETE: "변경 완료",
    CHANGE_IMAGE: "이미지 찾기",
    PASSWORD_RESET_COMPLETE: "비밀번호 변경 완료!!",
    MY_PROFILE: "내 프로필",
  },

  // 모달 제목
  MODAL_TITLES: {
    LOGIN: "로그인",
    FIND_PASSWORD: "비밀번호 찾기",
    RESET_PASSWORD: "비밀번호 재설정",
    RECORD: "기록",
    PROJECT_DETAIL: "프로젝트 상세",
    STUDY_DETAIL: "스터디 상세",
    PROFILE: "프로필",
    LOGIN_REQUIRED: "로그인 후 사용 가능한 서비스 입니다",
  },

  // 섹션 제목
  SECTIONS: {
    PARTNERS_SUPPORTERS: "파트너 & 서포터",
    ATTENDANCE_CHECK: "출석체크",
    STUDY_LIST: "스터디 목록",
    PROJECT_LIST: "프로젝트 목록",
    TEAM_MEMBERS: "팀원",
    TECH_STACK: "기술 스택",
    PROJECT_DESCRIPTION: "프로젝트 설명",
    PROFILE_INFO: "프로필 정보",
  },

  // Footer
  FOOTER: {
    LOGO: "로고",
    CUSTOMER_SERVICE: "고객센터",
    PARTNERSHIP: "제휴",
    NOTICE: "공지사항",
    COPYRIGHT: "© 2025 YourCompany. All rights reserved.",
  },

  // 페이지 제목/설명
  PAGES: {
    HOME_TITLE: "코디영에 오신 것을 환영합니다",
    HOME_SUBTITLE: "함께 성장하는 코딩 커뮤니티",
    STUDY_SUBTITLE: "함께 성장하는 스터디에 참여하세요",
  },

  // 카테고리
  CATEGORIES: {
    CODING: "코딩",
    DESIGN: "디자인",
    BUSINESS: "비즈니스",
    VIDEO: "영상",
  },

  // 플레이스홀더
  PLACEHOLDERS: {
    EMAIL: "아이디를 입력하세요",
    PASSWORD: "비밀번호를 입력하세요",
    NEW_PASSWORD: "새 비밀번호를 입력하세요",
    CONFIRM_PASSWORD: "비밀번호를 다시 입력하세요",
    VERIFICATION_CODE: "인증번호를 입력하세요",
    PROJECT_IMAGE: "프로젝트 이미지",
    PROJECT_NAME: "프로젝트 이름",
    PROJECT_SLOGAN: "프로젝트 슬로건",
    PROJECT_DESCRIPTION: "프로젝트 설명 또는 이미지가 들어갈 영역입니다.",
  },

  // 에디터 관련
  EDITOR: {
    HELP_MESSAGE: "Ctrl + / 를 눌러 명령어 도움말을 확인하세요.",
    INSERT_TABLE: "테이블 삽입",
    INSERT_IMAGE: "이미지 삽입",
    INSERT_LINK: "링크 삽입",
    TOGGLE_FULLSCREEN: "전체화면 토글",
    SHOW_HTML: "HTML 보기",
    ALIGN_LEFT: "왼쪽 정렬",
    ALIGN_CENTER: "가운데 정렬",
    ALIGN_RIGHT: "오른쪽 정렬",
    ALIGN_JUSTIFY: "양쪽 정렬",
  }
}