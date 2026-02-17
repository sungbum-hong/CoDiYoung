// 중앙화된 Query Key 관리
export const QUERY_KEYS = {
  // === 스터디 관련 ===
  studies: {
    all: ['studies'],
    lists: () => [...QUERY_KEYS.studies.all, 'list'],
    list: (filters: any = {}) => [...QUERY_KEYS.studies.lists(), filters],
    details: () => [...QUERY_KEYS.studies.all, 'detail'],
    detail: (id: string | number) => [...QUERY_KEYS.studies.details(), id],
    my: (userId: string | number) => [...QUERY_KEYS.studies.all, 'my', userId],
    category: (category: string) => [...QUERY_KEYS.studies.all, 'category', category],
  },
  users: {
    all: ['users'],
    detail: (id: string | number) => [...QUERY_KEYS.users.all, 'detail', id],
  },
  // === 프로젝트 관련 ===
  projects: {
    all: ['projects'],
    lists: () => [...QUERY_KEYS.projects.all, 'list'],
    list: (filters: any = {}) => [...QUERY_KEYS.projects.lists(), filters],
    details: () => [...QUERY_KEYS.projects.all, 'detail'],
    detail: (id: string | number) => [...QUERY_KEYS.projects.details(), id],
    my: (userId: string | number) => [...QUERY_KEYS.projects.all, 'my', userId],
    applied: (userId: string | number) => [...QUERY_KEYS.projects.all, 'applied', userId],
    progressing: (userId: string | number) => [...QUERY_KEYS.projects.all, 'progressing', userId],
    applicants: (projectId: string | number) => [...QUERY_KEYS.projects.all, 'applicants', projectId],
  },

  // === 출석 관련 ===
  attendance: {
    all: ['attendance'],
    calendar: (month: string) => [...QUERY_KEYS.attendance.all, 'calendar', month],
    check: () => [...QUERY_KEYS.attendance.all, 'check'],
  },
};

// 필터 타입 (JSDoc으로 문서화)
/**
 * 스터디 필터 옵션
 * @typedef {Object} StudyFilters
 * @property {string} [category] - 카테고리 필터
 * @property {string} [author] - 작성자 ID
 * @property {number} [page=0] - 페이지 번호
 * @property {number} [size=30] - 페이지 크기
 * @property {string} [sort='latest'] - 정렬 방식
 */

/**
 * 프로젝트 필터 옵션
 * @typedef {Object} ProjectFilters
 * @property {string} [status] - 프로젝트 상태
 * @property {string} [category] - 카테고리
 * @property {number} [page=0] - 페이지 번호
 * @property {number} [size=10] - 페이지 크기
 */