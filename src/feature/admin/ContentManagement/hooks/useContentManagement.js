import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminApiService } from '../../../../services/admin/adminApi';
import { getStudyListResponse, getStudyById } from '../../../../mock/studyData';
import { getProjectListResponse, getProjectById } from '../../../../mock/projectData';

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
    queryFn: () => {
      // Mock 데이터 사용
      const mockResponse = getStudyListResponse(page, size, sort);
      // API 응답 형태로 변환
      return {
        content: mockResponse.studies,
        totalPages: mockResponse.totalPages,
        totalElements: mockResponse.totalElements,
        number: mockResponse.currentPage,
        size: mockResponse.pageSize,
        last: !mockResponse.hasNext,
        first: !mockResponse.hasPrevious,
        empty: mockResponse.isEmpty
      };
    },
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
    queryFn: () => {
      // Mock 데이터 사용
      const mockResponse = getProjectListResponse(page, size, sort);
      // API 응답 형태로 변환
      return {
        content: mockResponse.projects,
        totalPages: mockResponse.totalPages,
        totalElements: mockResponse.totalElements,
        number: mockResponse.currentPage,
        size: mockResponse.pageSize,
        last: !mockResponse.hasNext,
        first: !mockResponse.hasPrevious,
        empty: mockResponse.isEmpty
      };
    },
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

/**
 * 스터디 상세 조회 훅
 */
export function useStudyDetail(studyId, options = {}) {
  return useQuery({
    queryKey: ['admin', 'content', 'study', studyId],
    queryFn: () => {
      // Mock 데이터에서 조회
      const study = getStudyById(studyId);
      if (!study) {
        throw new Error('스터디를 찾을 수 없습니다.');
      }
      return study;
    },
    staleTime: 5 * 60 * 1000, // 5분
    enabled: !!studyId, // studyId가 있을 때만 실행
    ...options,
  });
}

/**
 * 프로젝트 상세 조회 훅
 */
export function useProjectDetail(projectId, options = {}) {
  return useQuery({
    queryKey: ['admin', 'content', 'project', projectId],
    queryFn: () => {
      // Mock 데이터에서 조회
      const project = getProjectById(projectId);
      if (!project) {
        throw new Error('프로젝트를 찾을 수 없습니다.');
      }
      return project;
    },
    staleTime: 5 * 60 * 1000, // 5분
    enabled: !!projectId, // projectId가 있을 때만 실행
    ...options,
  });
}

/**
 * 스터디 삭제 훅
 */
export function useDeleteStudy() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (deleteData) => {
      // Mock 데이터에서는 실제로 삭제하지 않고 성공 응답만 반환
      return Promise.resolve({ success: true, message: '스터디가 삭제되었습니다.' });
    },
    onSuccess: () => {
      // 스터디 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['admin', 'content', 'studies']
      });
    }
  });
}

/**
 * 프로젝트 삭제 훅
 */
export function useDeleteProject() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (deleteData) => {
      // Mock 데이터에서는 실제로 삭제하지 않고 성공 응답만 반환
      return Promise.resolve({ success: true, message: '프로젝트가 삭제되었습니다.' });
    },
    onSuccess: () => {
      // 프로젝트 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['admin', 'content', 'projects']
      });
    }
  });
}