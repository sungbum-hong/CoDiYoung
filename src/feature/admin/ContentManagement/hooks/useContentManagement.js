import { useQuery } from '@tanstack/react-query';
import { AdminApiService } from '../../../../services/admin/adminApi';

/**
 * 스터디 목록 조회 React Query 훅
 * @param {Object} params - 조회 파라미터
 * @param {number} params.page - 페이지 번호 (0-based)
 * @param {number} params.size - 페이지 크기
 * @param {string[]} params.sort - 정렬 조건 배열
 * @param {Object} options - React Query 옵션
 * @returns {Object} React Query 결과 객체
 */
export function useStudyList(params = {}, options = {}) {
  const { page = 0, size = 10, sort = ['createdAt,DESC'] } = params;

  const query = useQuery({
    queryKey: ['admin', 'content', 'studies', { page, size, sort }],
    queryFn: () => AdminApiService.getStudyList({ page, size, sort }),
    staleTime: 5 * 60 * 1000, // 5분
    cacheTime: 10 * 60 * 1000, // 10분
    retry: (failureCount, error) => {
      // 권한 관련 에러는 재시도하지 않음
      if (error?.message?.includes('권한') || error?.message?.includes('403')) {
        return false;
      }
      return failureCount < 3;
    },
    refetchOnWindowFocus: false,
    ...options, // 추가 옵션 (enabled 등)
  });

  return {
    // 페이징 데이터 (API 응답 구조에 맞춤)
    studies: query.data?.content || [],
    totalPages: query.data?.totalPages || 0,
    totalElements: query.data?.totalElements || 0,
    currentPage: query.data?.number || 0,
    pageSize: query.data?.size || 10,
    hasNext: !query.data?.last,
    hasPrevious: !query.data?.first,
    isEmpty: query.data?.empty || false,

    // React Query 상태
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,

    // 편의 메서드
    retry: () => query.refetch(),
  };
}

/**
 * 프로젝트 목록 조회 React Query 훅
 * @param {Object} params - 조회 파라미터
 * @param {number} params.page - 페이지 번호 (0-based)
 * @param {number} params.size - 페이지 크기
 * @param {string[]} params.sort - 정렬 조건 배열
 * @param {Object} options - React Query 옵션
 * @returns {Object} React Query 결과 객체
 */
export function useProjectList(params = {}, options = {}) {
  const { page = 0, size = 10, sort = ['createdAt,DESC'] } = params;

  const query = useQuery({
    queryKey: ['admin', 'content', 'projects', { page, size, sort }],
    queryFn: () => AdminApiService.getProjectList({ page, size, sort }),
    staleTime: 5 * 60 * 1000, // 5분
    cacheTime: 10 * 60 * 1000, // 10분
    retry: (failureCount, error) => {
      // 권한 관련 에러는 재시도하지 않음
      if (error?.message?.includes('권한') || error?.message?.includes('403')) {
        return false;
      }
      return failureCount < 3;
    },
    refetchOnWindowFocus: false,
    ...options, // 추가 옵션 (enabled 등)
  });

  return {
    // 페이징 데이터 (API 응답 구조에 맞춤)
    projects: query.data?.content || [],
    totalPages: query.data?.totalPages || 0,
    totalElements: query.data?.totalElements || 0,
    currentPage: query.data?.number || 0,
    pageSize: query.data?.size || 10,
    hasNext: !query.data?.last,
    hasPrevious: !query.data?.first,
    isEmpty: query.data?.empty || false,

    // React Query 상태
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,

    // 편의 메서드
    retry: () => query.refetch(),
  };
}