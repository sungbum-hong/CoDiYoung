# Frontend Changelog

## [2025-08-11] - 로그인 페이지 구현 및 리팩토링

### 📝 작업 내용
- **공통 UI 컴포넌트 제작**
  - FormInput 컴포넌트 (`src/ui/FormInput.jsx`)
  - 재사용 가능한 입력 필드

- **로그인 관련 페이지 제작**
  - 로그인 페이지 (`src/pages/SignIn.jsx`)
  - 인증번호 페이지 (`src/pages/FindPassword.jsx`) 
  - 비밀번호 찾기 페이지 (`src/pages/ResetPassword.jsx`)

- **유효성 검사 코드 구현**
  - 이메일, 비밀번호, 인증번호 검증 (`src/utils/validation.js`)

- **전체 리팩토링**
  - AuthContext를 통한 상태 관리 (`src/contexts/AuthContext.jsx`)
  - 중복 코드 제거 및 컴포넌트 구조 개선
  - 디버그 로그 및 불필요한 코드 정리

### 🐛 버그 수정
- FindPassword에서 ResetPassword로 전환되지 않는 문제 해결
- AuthContext에서 newPassword와 password 에러 상태 분리
- 무한 렌더링 루프 해결