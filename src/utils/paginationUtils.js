/**
 * 페이지네이션 관련 유틸리티
 */

/**
 * 정렬 문자열을 배열로 변환
 * @param {string} sortString - "property,direction" 형태의 문자열
 * @returns {Object} { property, direction } 객체
 */
export function parseSortString(sortString) {
  const [property, direction = 'ASC'] = sortString.split(',');
  return {
    property: property?.trim(),
    direction: direction?.trim().toUpperCase()
  };
}

/**
 * 정렬 배열을 쿼리 문자열로 변환
 * @param {string[]} sortArray - 정렬 배열
 * @returns {string} 쿼리 문자열
 */
export function formatSortForQuery(sortArray) {
  return sortArray.map(sort => {
    const { property, direction } = parseSortString(sort);
    return `${property},${direction}`;
  }).join('&sort=');
}

/**
 * 페이지 정보 계산
 * @param {Object} pageData - Spring Boot 페이지 응답 데이터
 * @returns {Object} 계산된 페이지 정보
 */
export function calculatePageInfo(pageData) {
  if (!pageData) {
    return {
      currentPage: 0,
      totalPages: 0,
      totalElements: 0,
      pageSize: 10,
      hasNext: false,
      hasPrevious: false,
      isEmpty: true,
      isFirst: true,
      isLast: true
    };
  }

  return {
    currentPage: pageData.number || 0,
    totalPages: pageData.totalPages || 0,
    totalElements: pageData.totalElements || 0,
    pageSize: pageData.size || 10,
    hasNext: !pageData.last,
    hasPrevious: !pageData.first,
    isEmpty: pageData.empty || false,
    isFirst: pageData.first || false,
    isLast: pageData.last || false,
    numberOfElements: pageData.numberOfElements || 0
  };
}

/**
 * 정렬 옵션 생성
 * @param {string} property - 정렬할 속성
 * @param {string} direction - 정렬 방향 (ASC, DESC)
 * @returns {string} 정렬 문자열
 */
export function createSortOption(property, direction = 'ASC') {
  return `${property},${direction.toUpperCase()}`;
}

/**
 * 일반적인 정렬 옵션들
 */
export const SORT_OPTIONS = {
  CREATED_AT_DESC: 'createdAt,DESC',
  CREATED_AT_ASC: 'createdAt,ASC',
  ID_DESC: 'id,DESC',
  ID_ASC: 'id,ASC',
  NAME_ASC: 'name,ASC',
  NAME_DESC: 'name,DESC'
};

/**
 * 페이지 범위 계산 (페이지네이션 UI용)
 * @param {number} currentPage - 현재 페이지 (0-based)
 * @param {number} totalPages - 총 페이지 수
 * @param {number} visiblePages - 표시할 페이지 수 (기본: 5)
 * @returns {number[]} 표시할 페이지 번호 배열
 */
export function calculatePageRange(currentPage, totalPages, visiblePages = 5) {
  if (totalPages <= visiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i);
  }

  const half = Math.floor(visiblePages / 2);
  let start = Math.max(0, currentPage - half);
  let end = Math.min(totalPages - 1, start + visiblePages - 1);

  // 끝에서 부족한 만큼 앞에서 보충
  if (end - start + 1 < visiblePages) {
    start = Math.max(0, end - visiblePages + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}