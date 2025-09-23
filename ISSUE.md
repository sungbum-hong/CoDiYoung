# 프로젝트 이슈 정리

## 테스트 일자: 2025-09-22


### 1. 프로젝트 imageKey API 스펙 불일치 (우선순위: Medium)
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

**실제 결과**: imageKey가 전체 URL로 반환되어 프론트엔드에서 추가 URL 처리 로직 필요

**임시 해결**: 프론트엔드에서 두 형식 모두 지원하도록 조건부 처리
```javascript
src={project.imageKey.startsWith('http') ? project.imageKey : `http://15.164.125.28:8080/storage/${project.imageKey}`}
```

**권장 해결책**: 
1. 백엔드에서 상대 경로 형식으로 통일 OR
2. 전체 URL 형식으로 스펙 변경

**담당**: 백엔드 개발자 + 기획자 (스펙 결정)

---

### 2. 사용자 카테고리 선택 기능 누락 (우선순위: High)
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
     "categories": ["CODING", "DESIGN"], // 사용자 관심 카테고리
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

3. **활용 방안**:
   - 사용자 맞춤형 스터디 추천
   - 카테고리별 전문가 표시
   - 스터디 매칭 알고리즘 개선
   - 관심 분야별 알림 기능

**담당**: 백엔드 개발자 + 프론트엔드 개발자 (UI 설계)

**우선순위**: High (사용자 경험 개선에 필수적)

---

## TODO: 추가 테스트 예정
- [ ] 메인 페이지 네비게이션 테스트
- [ ] 프로젝트 목록 및 상세 모달 테스트
- [ ] 사용자 프로필 기능 테스트
- [ ] 인증 시스템 테스트
- [ ] 반응형 디자인 테스트
- [ ] 크로스 브라우저 호환성 테스트

---

## 해결된 이슈
- [x] 프론트엔드 스터디 수정 API 호출 로직 최적화 (중복 요청 제거)
- [x] 프로젝트 이미지 업로드 기능 구현 (드래그 앤 드롭 + 파일 선택)
- [x] 프로젝트 참여 인원 표시 형식 개선 (1/5명 형식)
- [x] 카카오톡 오픈채팅 링크 유효성 검사 추가

## 최근 수정사항 (2025-09-23)

### 3. 프로젝트 이미지 업로드 기능 구현
**구현 내용**: 프로젝트 생성 폼에 이미지 업로드 기능 추가

**주요 기능**:
- 드래그 앤 드롭 이미지 업로드
- 파일 선택 버튼을 통한 업로드
- 이미지 미리보기 및 삭제 기능
- 파일 타입 검증 (JPG, PNG, GIF, WEBP)
- 파일 크기 제한 (5MB 이하)
- StudyService의 기존 이미지 업로드 로직 재사용

**수정된 파일**: 
- `ProjectCreateForm.jsx` - 이미지 업로드 UI 및 로직
- 모든 프로젝트 카드 컴포넌트 - 이미지 표시 기능

### 4. 참여 인원 표시 형식 개선
**변경 내용**: 참여 인원을 현재/총원 형식으로 표시

**Before**: `참여 인원: 1명`
**After**: `참여 인원: 1/5명`

**수정된 파일**: `ProjectInfo.jsx:12`

### 5. 카카오톡 오픈채팅 링크 유효성 검사
**구현 내용**: 오픈톡 링크 입력 필드에 유효성 검사 추가

**주요 기능**:
- 정규식 검증: `^https://open\.kakao\.com/o/[a-zA-Z0-9]+$`
- 실시간 유효성 검사 (입력 중 즉시 피드백)
- 시각적 피드백 (잘못된 링크 시 빨간 테두리)
- 안내 메시지 및 예시 제공
- 제출 시 최종 검증

**허용되는 형식**: `https://open.kakao.com/o/g6RZJeyg`
**거부되는 형식**: 일반 텍스트, 다른 도메인 링크

**수정된 파일**: `ProjectCreateForm.jsx:556-776`

---

## API 테스트 페이지 구축 및 스펙 이슈 해결 (2025-09-23)

### 6. API 테스트 통합 페이지 구현
**구현 목적**: 모든 API를 한 곳에서 테스트할 수 있는 중앙화된 테스트 환경 구축

**주요 기능**:
- 3개 탭으로 분류된 API 테스트 (스터디/출석, 프로젝트/신청, 인증/마이페이지)
- 각 API별 개별 입력 폼 및 실시간 결과 표시
- 전역 API 응답 로그 (최근 50개 결과 유지)
- 상세한 요청/응답 정보 표시 (메서드, 엔드포인트, 상태코드, 응답시간)
- JSON 응답 데이터 접기/펼치기 뷰어

**구현된 파일**:
- `/src/feature/TestPage/TestPage.jsx` - 메인 테스트 페이지
- `/src/feature/TestPage/components/StudyApiTest.jsx` - 스터디 API 테스트
- `/src/feature/TestPage/components/ProjectApiTest.jsx` - 프로젝트 API 테스트 
- `/src/feature/TestPage/components/AuthApiTest.jsx` - 인증 API 테스트

### 7. 중복 회원가입 응답 코드 불일치 이슈 발견
**문제**: 실제 에러 상황에서 HTTP 상태코드와 UI 표시가 일치하지 않음

**발견된 사례**:
```
UI 표시: "Status: 200 OK"
실제 응답: {"status": 400, "body": "{\"status\":400,\"message\":\"이미 가입된 이메일입니다.\"}"}
```

**원인**: executeTest 함수에서 HTTP 상태코드를 하드코딩으로 "200 OK"로 표시
**해결**: 실제 response.status 값을 사용하도록 수정

### 8. 프로젝트 생성 API 스펙 불일치 해결 ⭐
**문제**: "요청 본문을 읽을 수 없습니다" 오류 발생

**원인 분석**:
- 클라이언트에서 `questions: "자기소개를 해주세요"` (문자열)로 전송
- 서버 스펙에서 `questions: ["string"]` (배열) 요구

**해결 방법**:
```javascript
// Before
questions: testInputs.questions  // string

// After  
questions: Array.isArray(testInputs.questions) ? testInputs.questions : [String(testInputs.questions)]  // array
```

**수정된 컴포넌트**: `ProjectApiTest.jsx`

### 9. 프로젝트 신청 API 스펙 불일치 해결 ⭐
**문제**: "서버 오류가 발생했습니다" 오류 발생

**원인 분석**:
- 클라이언트에서 `answer: "답변내용"` (단일 문자열)로 전송
- 서버 스펙에서 `answers: [{"questionId": 0, "answer": "string"}]` (배열) 요구

**해결 방법**:
```javascript
// Before
{
  projectId: parseInt(testInputs.projectId),
  position: testInputs.applyPosition,
  techs: testInputs.applyTechs,
  answer: testInputs.answer
}

// After
{
  projectId: parseInt(testInputs.projectId),
  position: testInputs.applyPosition,
  techs: testInputs.applyTechs,
  answers: [{
    questionId: parseInt(testInputs.questionId) || 1,
    answer: testInputs.answer
  }]
}
```

**추가된 입력 필드**: 질문 ID 입력 필드

### 10. API 디버깅 로그 시스템 강화
**구현 내용**: 요청/응답 추적을 위한 상세 로깅 시스템

**추가된 로그 정보**:
- 요청 데이터 타입 및 값 검증
- JSON 직렬화 테스트 및 문자열 길이
- Content-Length 헤더 자동 추가
- 오류 응답 원문 및 파싱 결과
- 에러 스택 트레이스

**수정된 파일**: `projectService.js`

---

## 오늘 작업 내용 (2025-09-23)

### 12. 프로젝트 신청 폼 질문/답변 매칭 시스템 구현 ⭐
**문제**: "질문 [프로젝트 슬로건 입니다!!] 에 대한 답변이 누락되었습니다" 에러 발생

**원인 분석**:
- ApplicationModal에서 API로 받은 질문 대신 하드코딩된 description이 표시됨
- 질문 ID와 답변 매칭이 제대로 안 됨
- formData.answers 구조가 배열에서 객체로 변경 필요

**해결 과정**:
1. **ApplicationModal.jsx 수정** - 질문 표시 로직 개선
   - API 질문 대신 props로 받은 description 사용
   - 질문 ID 기반 답변 객체 구조로 변경
   - `{questionId: answer}` 형태로 formData.answers 구조화

2. **ProjectCard.jsx 수정** - description props 전달
   - ApplicationModal에 description props 추가 전달
   - 프로젝트 상세 정보와 신청 폼 연동

3. **useApplicationForm.js 수정** - 폼 데이터 구조 개선
   - answers 필드를 배열에서 객체로 변경: `answers: {}`
   - 질문별 답변 검증 로직 추가

4. **useApplicationSubmit.js 수정** - API 요청 데이터 변환
   - 객체 형태 answers를 배열로 변환하여 API 호출
   - `Object.entries(formData.answers).map()` 활용
   - 빈 답변 필터링 및 questionId 파싱

**수정된 파일들**:
- `src/feature/ProjectPage/components/ApplicationModal.jsx`
- `src/feature/ProjectPage/ProjectCard.jsx`
- `src/feature/ProjectPage/hooks/useApplicationForm.js`
- `src/feature/ProjectPage/hooks/useApplicationSubmit.js`

**결과**: 프로젝트 신청 시 올바른 질문 표시 및 답변 매칭 완료

### 13. StudyCategory API 연동 및 실시간 데이터 표시
**구현 내용**: 하드코딩된 스터디 카테고리를 실제 API 데이터로 교체

**주요 변경사항**:
- `StudyCategory.jsx` 완전 리팩토링
- `useStudyQueries` 훅 활용하여 그룹화된 스터디 데이터 조회
- 로딩/에러 상태 처리 추가
- 카테고리별 실제 스터디 개수 표시

**수정된 파일**: `src/feature/MainHome/StudyCategory.jsx`

### 14. 백엔드 API 장애 발견 및 문서화 🚨
**발견된 문제**: 프로젝트 조회 API들 갑작스런 500 에러 발생

**장애 현황**:
- `/api/project/find/progressing` - 500 에러
- `/api/project/find/applied` - 500 에러 (기존 404에서 변경됨)
- 기존에 정상 작동하던 API가 갑자기 장애 발생

**시도한 해결방법** (모두 실패):
- 로그아웃/재로그인
- JWT 토큰 재생성  
- 브라우저 캐시 삭제
- 다른 브라우저 테스트
- DB 초기화

**확인된 사실**:
- 마이페이지와 TestPage 모두에서 동일 에러 재현
- 다른 API들은 정상 작동 (로그인, 프로젝트 목록 등)
- 인증 토큰은 정상 전송됨
- 프론트엔드 코드에는 문제 없음

**문서화**: ISSUE.md에 상세한 장애 보고서 작성

### 15. ISSUE.md 종합 업데이트
**추가된 내용**:
- 사용자 카테고리 선택 기능 누락 이슈
- 프로젝트 신청 폼 수정 완료 보고
- 백엔드 API 장애 상세 문서화
- 해결된 이슈와 진행중인 이슈 분리
- 우선순위 재조정 (Critical 등급 추가)

---

## 해결된 API 스펙 이슈 요약

| API | 문제 | 해결 상태 |
|-----|------|-----------|
| 프로젝트 생성 | questions 필드 타입 불일치 (string → array) | ✅ 해결 |
| 프로젝트 신청 | answers 구조 불일치 (string → object array) | ✅ 해결 |
| 회원가입 | HTTP 상태코드 표시 오류 | ✅ 해결 |
| 스터디 수정 | images 배열 구조 불일치 | ✅ 해결 |

---

## 현재 진행중인 이슈

### 11. 프로젝트 조회 API 서버 에러 (우선순위: Critical)
**문제**: `/api/project/find/progressing`와 `/api/project/find/applied` API 호출 시 500 내부 서버 에러 발생

**에러 로그**:
```
GET http://15.164.125.28:8080/api/project/find/progressing [HTTP/1.1 500 25ms]
응답: {"status":500,"message":"서버 오류가 발생했습니다.","timestamp":"2025-09-22T20:35:51.712956562"}

GET http://15.164.125.28:8080/api/project/find/applied [HTTP/1.1 500 25ms]
응답: {"status":500,"message":"서버 오류가 발생했습니다.","timestamp":"2025-09-23T05:42:19"}
```

**현재 상황**:
- **기존에는 정상 작동했으나 갑자기 500 에러 발생** (돌발적 장애)
- 인증 토큰은 정상적으로 전송됨 (JWT 헤더 확인됨)
- 동일한 사용자로 다른 API들은 정상 작동 (로그인, 프로젝트 목록 등)
- 두 API 모두 500 에러 발생 (이전에는 applied API가 404였으나 현재는 500)
- 프론트엔드 코드는 올바르게 구현됨
- **TestPage에서도 동일한 500 에러 확인됨** (2025-09-23 05:42:19)
- 마이페이지와 테스트페이지 모두에서 재현 → 백엔드 서버 이슈 확실

**시도한 해결 방법들 (모두 실패)**:
- ✗ 로그아웃 후 재로그인
- ✗ JWT 토큰 재생성
- ✗ 브라우저 새로고침 및 캐시 삭제
- ✗ 다른 브라우저에서 테스트
- ✗ DB 초기화 시도

**API 스펙**:
```
GET /api/project/find/progressing
GET /api/project/find/applied
Authorization: Bearer {JWT토큰}

정상 응답:
200: 프로젝트 배열 반환
404: 해당 프로젝트 없음

현재 상태:
500: 서버 내부 오류 (두 API 모두 발생중)
```

**영향도**: 
- 사용자가 마이페이지에서 진행중인 프로젝트를 확인할 수 없음
- 신청한 프로젝트 목록도 조회 불가
- 프로젝트 관리 기능 전체적으로 마비

**담당**: 백엔드 개발자 (서버 내부 로직 디버깅 필요)

**추천 디버깅 방법**:
1. 백엔드 서버 로그 확인
2. 데이터베이스 쿼리 검증
3. 사용자별 프로젝트 데이터 상태 점검
4. 예외 처리 로직 검토

---

## 권장사항

1. **OpenAPI 스펙 문서화**: 모든 API 엔드포인트에 대한 정확한 스펙 문서 작성
2. **스펙 검증 자동화**: API 요청/응답이 스펙과 일치하는지 자동 검증하는 테스트 추가
3. **에러 응답 표준화**: 일관된 에러 응답 형식 적용
4. **개발 환경 API 테스트**: 정기적인 API 테스트를 통한 호환성 검증
5. **서버 에러 모니터링**: 500 에러 발생 시 자동 알림 및 로깅 시스템 구축