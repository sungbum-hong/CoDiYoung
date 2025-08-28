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
    EMAIL_REQUIRED_INPUT: "이메일을 입력해 주세요.",
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
    LOGGING_IN: "로그인 중...",
    NEW_PASSWORD_SETUP: "새 비밀번호 설정",
    EDIT_COMPLETE: "수정 완료",
    WRITE_COMPLETE: "새 글 작성 완료", 
    DELETE_COMPLETE: "삭제 완료",
    DELETE_CONFIRM: "를 삭제하시겠습니까?",
  },

  // 에러 메시지
  ERRORS: {
    LOGIN_FAILED: "로그인에 실패했습니다.",
    NETWORK_ERROR: "서버에 연결할 수 없습니다. 네트워크를 확인해주세요.",
    LOGIN_REQUIRED: "로그인이 필요합니다.",
    PROFILE_API_NOT_IMPLEMENTED: "프로필 API가 구현되지 않았습니다.",
    API_INTEGRATION_REQUIRED: "API 연동이 필요합니다.",
    GET_CURRENT_USER_FAILED: "Failed to get current user:",
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
    STUDY_LIST: "스터디",
    PROJECT_LIST: "프로젝트",
    TEAM_MEMBERS: "팀원",
    TECH_STACK: "기술 스택",
    PROJECT_DESCRIPTION: "프로젝트 설명",
    PROFILE_INFO: "프로필",
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

}