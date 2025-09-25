# 프로젝트 이슈 정리

## 테스트 일자: 2025-09-25

---

## 🚨 **Critical Issues** - 즉시 해결 필요

### 1. 스터디/프로젝트 조회 API 401 인증 에러 (우선순위: Critical)
**문제**: 비로그인 상태에서도 접근 가능해야 하는 조회 API에서 401 Unauthorized 에러 지속 발생

**발견된 API들**:
```
GET /api/study/1 - 401 Unauthorized
GET /api/study?userId=1 - 401 Unauthorized  
GET /api/project/findAll - 401 Unauthorized (추정)
GET /api/study/category/grouped - 401 Unauthorized (추정)
```

**현재 상황**:
- ✅ 프론트엔드에서 Authorization 헤더 완전 제거 처리 완료
- ✅ 토큰 만료 자동 로그아웃 시스템 구현 완료
- ❌ 여전히 백엔드에서 401 에러 반환
- ❌ 비로그인 사용자가 조회 기능 사용 불가능

**시도한 해결방법** (모두 실패):
- ✗ 프론트엔드 Authorization 헤더 제거
- ✗ 토큰 검증 로직 수정
- ✗ 완전 비인증 요청으로 변경
- ✗ 헤더 최소화 (`Content-Type`, `Accept`만 포함)

**API 스펙 vs 실제 동작 불일치**:
```
API 명세서: "비로그인 조회 가능"
실제 동작: "모든 조회 API에서 인증 요구"
```

**프론트엔드 수정 완료 사항**:
1. **StudyService 조회 메서드들**:
   - `getStudy()`, `getUserStudyChannel()`, `getAllStudies()`
   - `getGroupedStudies()`, `getStudiesByCategory()`
   - 모두 Authorization 헤더 제거로 수정

2. **ProjectService 조회 메서드들**:
   - `getProject()`, `getAllProjects()`
   - Authorization 헤더 제거로 수정

3. **현재 사용 헤더**:
   ```javascript
   headers: {
     'Content-Type': 'application/json',
     'Accept': 'application/json'
     // Authorization 완전 제거
   }
   ```

**영향도**: 
- 비로그인 사용자가 메인페이지에서 스터디/프로젝트를 볼 수 없음
- 전체 사이트 사용성 심각히 저하
- 사용자 유입 차단 (회원가입 전 컨텐츠 확인 불가)

**백엔드 확인 필요사항**:
1. 조회 API들이 실제로 인증 없이 접근 가능한지 확인
2. Spring Security 설정에서 해당 엔드포인트들이 `permitAll()` 처리되었는지 확인
3. JWT 토큰이 없을 때도 정상 동작하도록 설정되었는지 확인

**담당**: 백엔드 개발자 (Spring Security 설정 검토)

---

## 🔧 **High Priority Issues**

### 2. 토큰 만료 자동 로그아웃 시스템 구현 완료 ✅
**구현 완료**: JWT 토큰 만료 시 자동 로그아웃 및 사용자 알림 시스템

**구현된 기능들**:
- ✅ JWT 토큰 디코딩 및 만료시간 체크
- ✅ 로그인 시 자동 만료 타이머 설정
- ✅ 만료 5분 전 사용자 경고
- ✅ 만료 시 자동 로컬스토리지 정리 및 로그인 페이지 리다이렉트
- ✅ 앱 시작/페이지 포커스 시 토큰 재검증
- ✅ API 요청 전 토큰 유효성 사전 체크

**추가된 파일들**:
- `src/components/TokenExpirationHandler.jsx`
- `AuthService.js`에 토큰 관리 메서드 추가

### 3. 스터디 API 엔드포인트 명세 일치 수정 완료 ✅
**문제**: API 명세서와 테스트 코드 간 엔드포인트 불일치

**수정 완료**:
- ✅ `GET /api/study?userId={userId}` - 유저의 스터디채널 반환 (query parameter)
- ✅ `GET /api/study/{studyId}` - 특정 스터디 조회 (path parameter)
- ✅ `PUT /api/study/update/study/{studyId}` - images 구조에 `id` 필드 추가
- ✅ `StudyService.getUserStudyChannel()` 메서드 추가

---

## 📋 **Medium Priority Issues**

### 4. API 테스트 자동화 시스템 구현 완료 ✅
**구현 완료**: 원클릭으로 모든 API를 자동 테스트하는 시스템

**주요 기능**:
- ✅ "🚀 전체 테스트 실행" 버튼으로 모든 탭의 API 자동 실행
- ✅ 인증 → 스터디 → 프로젝트 → 스토리지 순서로 논리적 실행
- ✅ 실시간 진행 상황 표시 및 결과 로깅
- ✅ 결과 저장 확장 (50개 → 100개)

### 5. ES6 모듈 호환성 이슈 해결 완료 ✅
**문제**: `require is not defined` 에러 발생

**해결 완료**:
- ✅ `require('./authService')` → `import { AuthService } from './authService.js'` 변경
- ✅ StudyService, ProjectService 모두 ES6 모듈로 통일

---

## 🎯 **낮은 우선순위 Issues**

### 6. 사용자 카테고리 선택 기능 누락 (우선순위: Medium)
**문제**: 사용자가 어떤 카테고리(코딩/디자인/영상편집)를 담당하는지 선택할 수 있는 기능이 없음

**현재 상황**:
- 스터디 카테고리별 그룹화된 조회 API는 구현됨
- 각 스터디에 카테고리 정보는 저장되고 있음
- 하지만 사용자 자체의 전문 분야/관심 카테고리 정보가 부족

**필요한 기능**:
1. **사용자 프로필에 카테고리 선택 필드 추가**
   - 회원가입 시 또는 프로필 수정 시 선택 가능
   - 다중 선택 지원 (예: 코딩 + 디자인)
   - 선택 옵션: CODING, DESIGN, VIDEO

2. **API 스펙 요청사항**:
   ```json
   // 사용자 프로필 업데이트 API
   PUT /api/users/profile
   {
     "categories": ["CODING", "DESIGN"],
     "nickname": "string",
     "bio": "string"
   }
   
   // 사용자 정보 조회 시 카테고리 포함
   GET /api/users/profile
   {
     "userId": 1,
     "nickname": "string", 
     "categories": ["CODING", "DESIGN"],
     "bio": "string"
   }
   ```

**담당**: 백엔드 개발자 + 프론트엔드 개발자

### 7. 프로젝트 imageKey API 스펙 불일치 (우선순위: Low)
**문제**: 프로젝트 이미지 API 응답과 설계 스펙이 일치하지 않음

**현재 API 응답**:
```json
{
  "imageKey": "https://cdy-img.ad63e3b7b23b3fd872430878c81af0f27.r2.cloudflarestorage.com/uploads/dc3d962b-3806-4c1b-9d21-599e92bb71d6.png?X-Amz-Algorithm=..."
}
```

**설계 스펙**:
```json
{
  "imageKey": "project/clone-shop.png"
}
```

**임시 해결**: 프론트엔드에서 두 형식 모두 지원하도록 조건부 처리
```javascript
src={project.imageKey.startsWith('http') ? project.imageKey : `http://15.164.125.28:8080/storage/${project.imageKey}`}
```

---

## ✅ **최근 해결된 Issues**

### 해결 완료 (2025-09-25)
- [x] JWT 토큰 만료 자동 로그아웃 시스템 구현
- [x] 스터디 API 엔드포인트 명세 일치 수정 
- [x] API 테스트 자동화 시스템 구현
- [x] ES6 모듈 require 에러 해결
- [x] 스터디 수정 API images 구조 수정 (`id` 필드 추가)

### 과거 해결 완료 (2025-09-22~24)
- [x] 프로젝트 신청 폼 질문/답변 매칭 시스템 구현
- [x] StudyCategory API 연동 및 실시간 데이터 표시
- [x] 프로젝트 생성 API 스펙 불일치 해결 (questions 배열화)
- [x] 프로젝트 신청 API 스펙 불일치 해결 (answers 구조 변경)
- [x] 중복 회원가입 응답 코드 불일치 이슈 해결
- [x] 프로젝트 이미지 업로드 기능 구현
- [x] 참여 인원 표시 형식 개선 (1/5명 형식)
- [x] 카카오톡 오픈채팅 링크 유효성 검사

---

## 🔍 **권장 사항**

### 백엔드 개발자에게
1. **Spring Security 설정 검토**: 조회 API들이 `permitAll()` 처리되었는지 확인
2. **JWT 토큰 Optional 처리**: 토큰이 없어도 조회 API 동작하도록 수정
3. **API 스펙 문서 업데이트**: 실제 구현과 명세서 일치시키기

### 전체 개발팀에게
1. **정기적 API 테스트**: 구현된 테스트 페이지를 활용한 주기적 검증
2. **CI/CD 파이프라인**: API 스펙 변경 시 자동 테스트 실행
3. **에러 모니터링**: 401, 500 에러 발생 시 즉시 알림 시스템 구축

---

## 📊 **Issue 통계**

- 🚨 Critical: 1개 (즉시 해결 필요)
- 🔧 High Priority: 0개 (모두 해결됨)
- 📋 Medium Priority: 2개
- 🎯 Low Priority: 1개
- ✅ 해결 완료: 15개

**다음 우선순위**: Critical Issue #1 (401 인증 에러) 백엔드 수정 필요