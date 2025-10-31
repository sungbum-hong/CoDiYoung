# 서비스 마이그레이션 가이드

## 📋 마이그레이션 단계

### Phase 1: 병렬 운영 (현재)
- 기존 코드와 새 구조가 동시에 존재
- 새로운 기능은 새 구조로 개발
- 기존 기능은 그대로 유지

### Phase 2: 점진적 교체
1. **테스트 코드부터 시작**
   ```javascript
   // 기존
   import { ProjectService } from '../services/projectService.js';

   // 새로운 방식
   import { ProjectService } from '../services/project/ProjectService.js';
   ```

2. **새로운 컴포넌트부터 적용**
   - 새로 만드는 컴포넌트는 새 구조 사용
   - 기존 컴포넌트는 수정 시에만 마이그레이션

3. **페이지별로 순차 마이그레이션**
   - 한 번에 하나의 페이지/기능씩 변경
   - 충분한 테스트 후 다음 단계 진행

### Phase 3: 기존 코드 제거
- 모든 import가 새 구조로 변경된 후
- 기존 파일들을 안전하게 삭제

## 🔍 마이그레이션 체크리스트

### 1. Import 문 찾기
```bash
# 기존 서비스를 사용하는 파일들 찾기
grep -r "from.*projectService" src/
grep -r "from.*studyService" src/
grep -r "from.*userProfileService" src/
```

### 2. 파일별 변경 작업
```javascript
// Before
import { ProjectService } from '../services/projectService.js';

// After
import { ProjectService } from '../services/project/ProjectService.js';
// 또는
import { ProjectService } from '../services/index.js';
```

### 3. 기능 검증
- 각 변경 후 해당 기능이 정상 작동하는지 확인
- 테스트 코드 실행
- 수동 테스트 수행

## 🚨 주의사항

1. **한 번에 모든 것을 바꾸지 마세요**
   - 작은 단위로 점진적 변경
   - 각 단계별로 충분한 테스트

2. **백업 유지**
   - 기존 파일들은 마이그레이션 완료 전까지 유지
   - Git 브랜치를 통한 안전한 작업

3. **팀원과 소통**
   - 변경 사항을 팀원들과 공유
   - 동시 작업 시 충돌 방지

## 📝 예시 마이그레이션

### 컴포넌트 파일 수정
```javascript
// src/components/ProjectCard.jsx
// Before
import { ProjectService } from '../services/projectService.js';

// After
import { ProjectService } from '../services/project/ProjectService.js';

// 코드 로직은 동일하게 유지
const handleApply = async () => {
  await ProjectService.applyToProject(projectId, applicationData);
};
```

### 새로운 기능 개발 시
```javascript
// 새로운 컴포넌트에서는 처음부터 새 구조 사용
import { ProjectCreate } from '../services/project/project.create.js';
import { ValidationUtils } from '../services/common/validation.utils.js';
```

## 🎯 우선순위

1. **높음**: 새로 개발하는 기능
2. **중간**: 자주 수정되는 컴포넌트
3. **낮음**: 안정적이고 수정이 적은 코드

## 📊 진행률 추적

- [ ] 프로젝트 관련 컴포넌트 (0/10)
- [ ] 스터디 관련 컴포넌트 (0/8)
- [ ] 프로필 관련 컴포넌트 (0/5)
- [ ] 테스트 코드 (0/15)
- [ ] 기존 서비스 파일 삭제 (0/3)