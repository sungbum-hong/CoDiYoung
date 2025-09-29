# 🚨 PROJECT ISSUES

## 📋 개요
프로젝트 개발 과정에서 발견된 주요 이슈들과 해결 방안을 정리한 문서입니다.

---

## 🔥 CRITICAL ISSUES

### 1. **API 응답 구조 불완전 - 프론트엔드 상태 처리 불가**

#### 📝 **문제점:**
현재 API 명세서의 응답 구조가 단순한 `string` 타입으로 되어 있어, 프론트엔드에서 비즈니스 로직에 필요한 상태 구분이 불가능함.

#### 🎯 **영향받는 기능:**
1. **프로젝트 완료 처리**
   - 팀원 완료 vs 팀장 완료 구분 불가
   - 대기 상태 표시 불가
   - 적절한 사용자 피드백 제공 불가

2. **프로젝트 취소 처리**
   - 신청 취소 vs 진행중 프로젝트 취소 구분 불가
   - 취소 유형별 다른 처리 불가

#### 🔧 **현재 API 스펙:**
```yaml
# 완료 API
POST /api/projectApplication/complete/{projectId}
응답: 200 OK
Content-Type: string
Body: "프로젝트 완료"

# 취소 API  
POST /api/projectApplication/cancel/{projectId}
응답: 200 OK
Content-Type: string
Body: "취소 완료"
```

#### 💡 **제안 해결책:**

**1. 완료 API 응답 구조 개선:**
```json
{
  "success": true,
  "status": "WAITING" | "COMPLETED" | "ALREADY_COMPLETED",
  "message": "팀장의 최종 완료를 기다리고 있습니다",
  "data": {
    "userRole": "MEMBER" | "LEADER",
    "completedMembers": 2,
    "totalMembers": 3,
    "completionRate": 66.7
  }
}
```

**2. 취소 API 응답 구조 개선:**
```json
{
  "success": true,
  "cancelType": "APPLICATION_CANCEL" | "PROJECT_CANCEL", 
  "message": "프로젝트 신청이 취소되었습니다",
  "data": {
    "projectStatus": "RECRUITING" | "IN_PROGRESS",
    "affectedMembers": 3
  }
}
```

---

### 2. **API 명세서와 비즈니스 로직 불일치**

#### 📝 **문제점:**
회의에서 논의된 비즈니스 로직이 현재 API 명세서에 반영되지 않음.

#### 🎯 **구체적 불일치 사항:**

**1. 프로젝트 완료 순서:**
- **회의 내용:** "모든 팀원이 완료 → 팀장이 최종 완료" 순서
- **현재 명세:** "로그인된 유저가 진행중이면 완료" (순서 제약 없음)

**2. 프로젝트 취소 범위:**
- **회의 내용:** 신청중/진행중 모두 취소 가능
- **현재 명세:** "신청중이면 취소"만 명시

#### 💡 **제안 해결책:**

**1. 완료 API 명세 수정:**
```yaml
POST /api/projectApplication/complete/{projectId}
설명: |
  프로젝트 완료 처리
  - 팀원: 개별 완료 처리, 팀장의 최종 완료 대기
  - 팀장: 모든 팀원 완료 확인 후 최종 완료 또는 에러 응답
```

**2. 취소 API 명세 명확화:**
```yaml
POST /api/projectApplication/cancel/{projectId} 
설명: |
  프로젝트 취소 처리
  - 신청중인 프로젝트: 신청 취소
  - 진행중인 프로젝트: 프로젝트 전체 취소
```

---

## ⚠️ MEDIUM ISSUES

### 3. **권한 처리 로직 명세 부족**

#### 📝 **문제점:**
사용자 권한별 접근 제어에 대한 명세가 불충분함.

#### 🎯 **영향받는 기능:**
- 신청자 목록 조회 (팀장만 접근 가능)
- 프로젝트 취소 (팀장/팀원 권한 구분)
- 신청자 승인/거절 (팀장 전용)

#### 💡 **제안 해결책:**
각 API에 권한 요구사항 명시 및 403 에러 응답 구조화


---

### 4. **에러 응답 구조 표준화 부족**

#### 📝 **문제점:**
에러 상황별 일관된 응답 구조가 정의되지 않음.

#### 💡 **제안 해결책:**
표준 에러 응답 구조 정의:
```json
{
  "success": false,
  "errorCode": "PROJECT_001",
  "message": "모든 팀원이 완료해야 팀장이 최종 완료할 수 있습니다",
  "details": {
    "field": "teamCompletion",
    "reason": "INCOMPLETE_MEMBERS"
  }
}
```

---

## 📞 Contact

- **프론트엔드:** 지호
- **백엔드:** 이동익
- **문서 최종 업데이트:** 2025-09-29

---

## 📚 참고 자료

- [프로젝트 API 명세서](./docs/api-spec.md)