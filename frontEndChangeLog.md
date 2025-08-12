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

## [2025-08-11] - 비밀번호 재설정 플로우 완성 및 모달 시스템 개선

### 📝 작업 내용
- **비밀번호 재설정 성공 페이지 구현**
  - SuccessResetPassword 컴포넌트 생성 (`src/pages/SuccessResetPassword.jsx`)
  - 간단한 완료 메시지와 확인 버튼만 포함

- **모달 시스템 구조 개선**
  - 중복 모달 문제 해결 (Modal 안에 Modal 구조 제거)
  - SignIn.jsx에서 내부 Modal 제거, 조건부 렌더링으로 변경
  - Header.jsx에서 단일 Modal로 모든 인증 플로우 관리

- **동적 모달 제목 시스템 구현**
  - AuthContext의 currentStep에 따라 모달 제목 자동 변경
  - 로그인 → 비밀번호 찾기 → 비밀번호 재설정 → 비밀번호 재설정 완료

- **Modal 컴포넌트 크기 조정**
  - 피그마 디자인 기준으로 모달 크기 수정 (1316 x 939)
  - 반응형 크기 조정 (68.5vw, 최대 1316px)
  - 모달 위치를 상대적 위치로 조정

### 🔧 기술적 개선사항
- **중첩 form 태그 문제 해결**
  - ResetPassword에서 form → div 변경
  - onSubmit → onClick 이벤트 변경

- **플로우 연결 최적화**
  - ResetPassword → SuccessResetPassword 연결
  - SuccessResetPassword를 모달이 아닌 전체 화면으로 표시

- **상태 관리 개선**
  - currentStep: 'signin' | 'findPassword' | 'resetPassword' | 'successResetPassword'
  - 각 단계별 명확한 상태 전환 로직

### 🐛 버그 수정
- 모달 중복 렌더링 문제 해결
- SuccessResetPassword가 표시되지 않는 문제 해결
- form 중첩으로 인한 hydration 오류 해결
- 모달 크기가 화면을 벗어나는 문제 해결

## [2025-08-12] - 컴포넌트 리팩토링 및 라우터 기능 추가

### 📝 작업 내용
- **Banner.jsx 컴포넌트 분리 및 리팩토링**
  - 76줄의 모놀리식 컴포넌트를 5개의 작은 컴포넌트로 분리
  - MainBanner, StudyCategory, Partners, Footer, ProjectSection 컴포넌트로 분리
  - 재사용성 및 유지보수성 향상


- **라우터 기능 구현**
  - StudyChannel 페이지 생성 (`src/pages/StudyChannel.jsx`)
  - App.jsx에 `/study/:category` 경로 추가
  - StudyCategory.jsx에 클릭 이벤트 및 네비게이션 기능 추가

- **컴포넌트 구조 개선**
  - Banner.jsx를 5개의 독립적인 컴포넌트로 분리
  - props를 통한 데이터 전달 구조 구현
  - 컴포넌트 간 의존성 최소화

- **프로젝트 구조 조정**
  - feature 기반 폴더 구조 적용
  - MainHome 폴더에 홈 관련 컴포넌트 정리

### 파일 구조 변경
- `src/feature/MainHome/MainBanner.jsx` - 메인 배너 컴포넌트
- `src/feature/MainHome/StudyCategory.jsx` - 스터디 카테고리 선택
- `src/feature/MainHome/Partners.jsx` - 파트너 섹션
- `src/feature/MainHome/ProjectSection.jsx` - 프로젝트 섹션
- `src/pages/StudyChannel.jsx` - 스터디 채널 페이지 생성

## [2025-08-12] - 인증 시스템 라우터 기반 리팩터링

### 📝 작업 내용
- **모달 내 라우터 시스템 구현**
  - 모달창 내에서 `/signin` → `/findpassword` → `/resetpassword` 라우터 플로우
  - Header 로그인 버튼 클릭 시 모달 + 라우터 네비게이션
  - URL 변경에 따른 모달 내용 동적 업데이트

- **StudyChannel 컴포넌트 리팩터링**
  - 모놀리식 컴포넌트를 5개의 독립적인 섹션으로 분리
  - `StudyChannelHeader.jsx` - 상단 헤더
  - `ProfileSection.jsx` - 프로필 + 정보 표시  
  - `AttendanceSection.jsx` - 출석체크 (StarIcon 포함)
  - `StudySection.jsx` - 스터디 카드 그리드
  - `ProjectSection.jsx` - 참여 프로젝트 섹션

### 파일 구조 변경
- `src/components/Header.jsx` - 라우터 기반 모달 시스템으로 업데이트
- `src/pages/SignIn.jsx` - 라우터 네비게이션 로직 추가  
- `src/feature/SignIn/FindPassword.jsx` - `useNavigate()` 훅 사용
- `src/feature/SignIn/ResetPassword.jsx` - 라우터 기반 네비게이션
- `src/feature/SignIn/SuccessResetPassword.jsx` - 완료 후 라우터 이동
- `src/contexts/AuthContext.jsx` - `currentStep` 관련 코드 제거
- `src/feature/StudyChannel/` - 새 폴더 생성 및 컴포넌트 분리

### 🔧 기술적 개선사항
- **Feature 기반 구조**: 기능별 폴더 구조로 프로젝트 구조 개선
- **재사용성 증대**: Props 기반 데이터 전달로 컴포넌트 재사용성 향상  
- **동적 카테고리**: URL 파라미터 기반 카테고리 동적 표시
- **코드 분리**: 각 섹션별 독립 컴포넌트로 유지보수성 개선

## [2025-08-13] - StudyChannel페이지 모달 구현 및 프로젝트페이지 구현