# UI 테스트 분석 및 우선순위

## 🎯 전체 JSX 컴포넌트 분석 (83개)

### 1. 기본 UI 컴포넌트 (우선순위: 최고)
**이유: 가장 많이 재사용되며, 모든 다른 컴포넌트의 기반**

#### `/src/ui/` (3개)
- ✅ `Button.jsx` - 기본 버튼 컴포넌트
- ✅ `BaseModal.jsx` - 모달 기반 컴포넌트  
- ✅ `FormInput.jsx` - 폼 입력 컴포넌트

#### `/src/components/` (8개)
- ✅ `Header.jsx` - 메인 헤더
- ✅ `Footer.jsx` - 메인 푸터
- ✅ `LoadingFallback.jsx` - 로딩 컴포넌트
- ✅ `LoginButton.jsx` - 로그인 버튼
- ✅ `UserProfile.jsx` - 사용자 프로필
- ✅ `AuthModal.jsx` - 인증 모달
- ✅ `AuthModalManager.jsx` - 인증 모달 관리자
- ⚠️ `Auth*.jsx` - 인증 관련 컴포넌트들

### 2. 리팩토링된 재사용 컴포넌트 (우선순위: 높음)
**이유: 리팩토링으로 새로 생성된 컴포넌트들로 테스트가 필수**

#### MainHome 컴포넌트 (4개)
- 🆕 `CategoryCard.jsx` - 카테고리 카드
- 🆕 `ProjectCard.jsx` - 프로젝트 카드
- 🆕 `ProjectDetailModal.jsx` - 프로젝트 상세 모달
- 🆕 `ScrollArrowButton.jsx` - 스크롤 화살표 버튼

#### MyProfile 컴포넌트 (3개)
- 🆕 `ProjectCard.jsx` - 프로젝트 카드 (MyProfile용)
- 🆕 `ProjectInfo.jsx` - 프로젝트 정보
- 🆕 `MemberDisplay.jsx` - 멤버 표시

#### ProjectPage 컴포넌트 (6개)
- 🆕 `Dropdown.jsx` - 단일 선택 드롭다운
- 🆕 `MultiSelectDropdown.jsx` - 다중 선택 드롭다운
- 🆕 `MemberList.jsx` - 멤버 목록
- 🆕 `TechList.jsx` - 기술 목록
- ✅ `ApplicationModal.jsx` - 신청 모달
- ✅ `LoginModal.jsx` - 로그인 모달

#### StudyChannel 컴포넌트 (4개)
- 🆕 `NavigationButton.jsx` - 네비게이션 버튼
- 🆕 `ModalOverlay.jsx` - 모달 오버레이
- 🆕 `StudyCard.jsx` - 스터디 카드
- ✅ `ProjectGalleryModal.jsx` - 프로젝트 갤러리 모달

#### WritePage 컴포넌트 (9개)
- 🆕 `AlignmentDropdown.jsx` - 정렬 드롭다운
- 🆕 `ConfirmModal.jsx` - 확인 모달
- 🆕 `EditorStyles.jsx` - 에디터 스타일
- 🆕 `EditorToolbar.jsx` - 에디터 툴바
- 🆕 `ToolbarButton.jsx` - 툴바 버튼
- 🆕 `ToolbarDivider.jsx` - 툴바 구분선
- 🆕 `WritePageHeader.jsx` - 작성 페이지 헤더
- ✅ `LinkModal.jsx` - 링크 모달
- ✅ `VideoModal.jsx` - 비디오 모달
- ✅ `RecordModal.jsx` - 기록 모달

### 3. 페이지 레벨 컴포넌트 (우선순위: 중간)
**이유: 통합 테스트 관점에서 중요하지만 단위 테스트는 복잡**

#### 메인 페이지 (5개)
- ✅ `HomePage.jsx` - 홈페이지
- ✅ `Partners.jsx` - 파트너 섹션
- ✅ `StudyCategory.jsx` - 스터디 카테고리
- ✅ `ProjectSection.jsx` - 프로젝트 섹션
- ✅ `ProjectsPage.jsx` - 프로젝트 목록 페이지

#### 프로필 페이지 (15개)
- ✅ `MyProfileLayout.jsx` - 프로필 레이아웃
- ✅ `ProfileSidebar.jsx` - 프로필 사이드바
- ✅ `AttendanceContent.jsx` - 출석 컨텐츠
- ✅ `AttendanceStars.jsx` - 출석 별점
- ✅ `ProfileContent.jsx` - 프로필 컨텐츠
- ✅ `ProfileField.jsx` - 프로필 필드
- ✅ `ProfileImageSection.jsx` - 프로필 이미지 섹션
- ✅ `ProjectContent.jsx` - 프로젝트 컨텐츠
- ✅ `ProjectCreateForm.jsx` - 프로젝트 생성 폼
- ✅ `StudyContent.jsx` - 스터디 컨텐츠
- + 기타 Study, Project 관련 컴포넌트들

#### 인증 페이지 (5개)
- ✅ `SignInPage.jsx` - 로그인 페이지
- ✅ `FindPassword.jsx` - 비밀번호 찾기
- ✅ `ResetPassword.jsx` - 비밀번호 재설정
- ✅ `SuccessResetPassword.jsx` - 재설정 성공
- 🆕 `ErrorModal.jsx` - 에러 모달

#### 기타 페이지 (10개)
- ✅ `ProjectPageLayout.jsx` - 프로젝트 페이지 레이아웃
- ✅ `StudyChannelPage.jsx` - 스터디 채널 페이지
- ✅ `WritePageLayout.jsx` - 작성 페이지 레이아웃
- ✅ `TiptapEditor.jsx` - TipTap 에디터
- ✅ `WriteForm.jsx` - 작성 폼
- + 기타 StudyChannel 관련 컴포넌트들

### 4. 시스템 컴포넌트 (우선순위: 낮음)
**이유: 테스트하기 복잡하고 비즈니스 로직이 적음**

#### 컨텍스트 & 레이아웃 (8개)
- ⚠️ `AuthContext.jsx` - 인증 컨텍스트
- ⚠️ `AuthFormContext.jsx` - 인증 폼 컨텍스트
- ⚠️ `PasswordResetContext.jsx` - 비밀번호 재설정 컨텍스트
- ⚠️ `UIContext.jsx` - UI 컨텍스트
- ⚠️ `AppLayout.jsx` - 앱 레이아웃
- ⚠️ `QueryProvider.jsx` - 쿼리 프로바이더
- ⚠️ `App.jsx` - 루트 앱 컴포넌트
- ⚠️ `main.jsx` - 엔트리 포인트

## 🚀 UI 테스트 실행 계획

### Phase 1: 기본 UI 컴포넌트 (11개)
1. Button.jsx - 다양한 variant, 클릭 이벤트
2. BaseModal.jsx - 열기/닫기, 크기, 오버레이
3. FormInput.jsx - 입력, 검증, 에러 상태
4. Header.jsx - 네비게이션, 로그인 상태
5. Footer.jsx - 링크, 정적 컨텐츠
6. LoadingFallback.jsx - 로딩 상태 표시
7. LoginButton.jsx - 로그인/로그아웃 상태
8. UserProfile.jsx - 사용자 정보 표시
9. AuthModal.jsx - 인증 모달 동작
10. AuthModalManager.jsx - 모달 관리 로직

### Phase 2: 리팩토링된 재사용 컴포넌트 (26개)
1. **MainHome 컴포넌트 (4개)**
   - CategoryCard.jsx - 카테고리 표시, 클릭 이벤트
   - ProjectCard.jsx - 프로젝트 정보, 호버 효과
   - ProjectDetailModal.jsx - 상세 정보 표시
   - ScrollArrowButton.jsx - 스크롤 네비게이션

2. **MyProfile 컴포넌트 (3개)**
   - ProjectCard.jsx - 프로젝트 카드 표시
   - ProjectInfo.jsx - 프로젝트 정보 표시
   - MemberDisplay.jsx - 멤버 아바타 표시

3. **ProjectPage 컴포넌트 (6개)**
   - Dropdown.jsx - 선택 옵션, 열기/닫기
   - MultiSelectDropdown.jsx - 다중 선택, 태그 표시
   - MemberList.jsx - 멤버 목록 표시
   - TechList.jsx - 기술 스택 표시
   - ApplicationModal.jsx - 신청 폼, 검증
   - LoginModal.jsx - 로그인 유도

4. **StudyChannel 컴포넌트 (4개)**
   - NavigationButton.jsx - 네비게이션 버튼
   - ModalOverlay.jsx - 모달 오버레이
   - StudyCard.jsx - 스터디 카드
   - ProjectGalleryModal.jsx - 갤러리 모달

5. **WritePage 컴포넌트 (9개)**
   - AlignmentDropdown.jsx - 정렬 옵션
   - ConfirmModal.jsx - 확인 대화상자
   - EditorToolbar.jsx - 툴바 버튼들
   - ToolbarButton.jsx - 개별 툴바 버튼
   - ToolbarDivider.jsx - 구분선
   - WritePageHeader.jsx - 페이지 헤더
   - LinkModal.jsx - 링크 삽입 모달
   - VideoModal.jsx - 비디오 삽입 모달
   - RecordModal.jsx - 기록 모달

### Phase 3: 통합 테스트 (필요시)
- 페이지 레벨 컴포넌트들의 통합 동작 테스트
- 사용자 플로우 테스트

## 📝 테스트 작성 기준

### 각 컴포넌트마다 테스트할 내용:
1. **기본 렌더링**: 컴포넌트가 에러 없이 렌더링되는지
2. **Props 전달**: 전달된 props가 올바르게 표시되는지  
3. **이벤트 처리**: 클릭, 입력 등의 이벤트가 올바르게 동작하는지
4. **조건부 렌더링**: 상태에 따른 UI 변화가 올바른지
5. **접근성**: 기본적인 접근성 요구사항 충족
6. **스타일링**: 중요한 스타일이 적용되는지

### 테스트하지 않을 내용:
- 복잡한 비즈니스 로직 (이미 훅 테스트에서 검증)
- 외부 라이브러리 동작 (TipTap, React Query 등)
- 실제 API 호출 (모킹 사용)

🎯 **목표: Phase 1과 Phase 2를 완료하여 핵심 UI 컴포넌트들의 안정성 확보**