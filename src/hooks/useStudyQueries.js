import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { StudyService } from '../services/studyService.js';
import { QUERY_KEYS } from '../utils/queryKeys.js';
import { useCallback, useMemo, useState } from 'react';

// === 조회 훅들 ===

/**
 * 개별 스터디 상세 조회
 * @param {number} studyId - 스터디 ID
 * @param {Object} options - 쿼리 옵션
 */
export const useStudyDetail = (studyId, options = {}) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.detail(studyId),
    queryFn: () => StudyService.getStudyById(studyId),
    enabled: !!studyId,
    staleTime: 10 * 60 * 1000, // 10분간 캐시
    retry: (failureCount, error) => {
      // 404 에러는 재시도하지 않음
      if (error?.message?.includes('404')) return false;
      return failureCount < 1;
    },
    ...options
  });
};

/**
 * 유저의 스터디 채널 조회
 * @param {number} userId - 유저 ID
 * @param {Object} options - 쿼리 옵션
 */
export const useUserStudyChannel = (userId, options = {}) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.my(userId),
    queryFn: () => StudyService.getUserStudyChannel(userId),
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5분간 캐시
    ...options
  });
};

/**
 * 유저의 스터디 목록 조회 (페이지네이션)
 * @param {Object} params - 페이지네이션 파라미터
 * @param {number} params.page - 페이지 번호
 * @param {number} params.size - 페이지 크기
 * @param {Array<string>} params.sort - 정렬 조건
 */
export const useUserStudies = ({ page = 0, size = 10, sort = ['createdAt,DESC'] } = {}) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.list({ type: 'user', page, size, sort }),
    queryFn: () => StudyService.getUserStudies(page, size, sort),
    staleTime: 3 * 60 * 1000, // 3분간 캐시
    select: (data) => {
      return {
        studies: data?.content || [],
        totalElements: data?.totalElements || 0,
        totalPages: data?.totalPages || 0,
        currentPage: data?.number || 0,
        hasNext: !data?.last,
        hasPrevious: !data?.first,
        isEmpty: data?.empty || false
      };
    },
    keepPreviousData: true // 페이지 전환 시 이전 데이터 유지
  });
};

/**
 * 페이지네이션을 위한 유저 스터디 목록 조회 (고급 옵션)
 * @param {Object} params - 쿼리 파라미터
 * @param {number} params.page - 페이지 번호
 * @param {number} params.size - 페이지 크기
 * @param {Array<string>} params.sort - 정렬 조건
 * @param {Object} options - 쿼리 옵션
 */
export const useUserStudiesWithPagination = ({ page = 0, size = 10, sort = ['createdAt,DESC'] } = {}, options = {}) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.list({ type: 'paginated', page, size, sort }),
    queryFn: () => StudyService.getUserStudies(page, size, sort),
    staleTime: 3 * 60 * 1000,
    keepPreviousData: true, // 페이지 전환 시 이전 데이터 유지
    select: (data) => {
      return {
        studies: data?.content || [],
        totalElements: data?.totalElements || 0,
        totalPages: data?.totalPages || 0,
        currentPage: data?.number || 0,
        pageSize: data?.size || size,
        hasNext: !data?.last,
        hasPrevious: !data?.first,
        isEmpty: data?.empty || false,
        isFirstPage: data?.first || false,
        isLastPage: data?.last || false,
        numberOfElements: data?.numberOfElements || 0
      };
    },
    ...options
  });
};

/**
 * 카테고리별 그룹화된 스터디 조회
 * @param {Object} params - 카테고리별 페이지네이션 파라미터
 */
export const useGroupedStudies = (params = {}) => {
  const defaultParams = {
    codingPage: 0,
    codingSize: 10,
    designPage: 0,
    designSize: 10,
    videoPage: 0,
    videoSize: 10
  };

  const queryParams = { ...defaultParams, ...params };

  return useQuery({
    queryKey: QUERY_KEYS.studies.category('grouped', queryParams),
    queryFn: () => StudyService.getGroupedStudies(queryParams),
    staleTime: 5 * 60 * 1000,
    select: (data) => {
      return {
        coding: {
          studies: data?.coding?.content || [],
          totalElements: data?.coding?.totalElements || 0,
          hasNext: !data?.coding?.last,
          currentPage: data?.coding?.number || 0
        },
        design: {
          studies: data?.design?.content || [],
          totalElements: data?.design?.totalElements || 0,
          hasNext: !data?.design?.last,
          currentPage: data?.design?.number || 0
        },
        video: {
          studies: data?.video?.content || [],
          totalElements: data?.video?.totalElements || 0,
          hasNext: !data?.video?.last,
          currentPage: data?.video?.number || 0
        }
      };
    },
    retry: 1
  });
};

// === 변경 훅들 ===

/**
 * 스터디 생성
 */
export const useCreateStudy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ content, images = [] }) => {
      return StudyService.createStudy(content, images);
    },
    onMutate: async ({ content, images }) => {
      // Optimistic update를 위한 준비
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.studies.lists()
      });

      // 이전 데이터 백업
      const previousData = queryClient.getQueryData(
        QUERY_KEYS.studies.list({ type: 'user', page: 0 })
      );

      // Optimistic update
      const tempStudy = {
        id: `temp-${Date.now()}`,
        content,
        images: images.map(img => ({ url: img.key, sortOrder: img.sortOrder })),
        createdAt: new Date().toISOString(),
        isOptimistic: true
      };

      queryClient.setQueryData(
        QUERY_KEYS.studies.list({ type: 'user', page: 0 }),
        (oldData) => {
          if (!oldData) return { content: [tempStudy] };
          return {
            ...oldData,
            content: [tempStudy, ...oldData.content],
            totalElements: (oldData.totalElements || 0) + 1
          };
        }
      );

      return { previousData };
    },
    onError: (error, variables, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousData) {
        queryClient.setQueryData(
          QUERY_KEYS.studies.list({ type: 'user', page: 0 }),
          context.previousData
        );
      }
      console.error('스터디 생성 실패:', error);
    },
    onSuccess: (newStudy) => {
      // 모든 스터디 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.studies.all,
        exact: false
      });

      // 새 스터디를 상세 캐시에 미리 저장
      if (newStudy?.id) {
        queryClient.setQueryData(
          QUERY_KEYS.studies.detail(newStudy.id),
          newStudy
        );
      }
    },
    onSettled: () => {
      // 페이지네이션 쿼리들도 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.studies.list({ type: 'paginated' }),
        exact: false
      });
    }
  });
};

/**
 * 스터디 수정
 */
export const useUpdateStudy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ studyId, content, images = [] }) => {
      return StudyService.updateStudy(studyId, content, images);
    },
    onMutate: async ({ studyId, content, images }) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.studies.detail(studyId)
      });

      // 이전 데이터 백업
      const previousDetail = queryClient.getQueryData(
        QUERY_KEYS.studies.detail(studyId)
      );

      // Optimistic update
      queryClient.setQueryData(
        QUERY_KEYS.studies.detail(studyId),
        (oldData) => ({
          ...oldData,
          content,
          images: images.map(img => ({ url: img.key, sortOrder: img.sortOrder })),
          updatedAt: new Date().toISOString()
        })
      );

      return { previousDetail };
    },
    onError: (error, variables, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousDetail) {
        queryClient.setQueryData(
          QUERY_KEYS.studies.detail(variables.studyId),
          context.previousDetail
        );
      }
      console.error('스터디 수정 실패:', error);
    },
    onSuccess: (updatedStudy, { studyId }) => {
      // 상세 캐시 업데이트
      queryClient.setQueryData(
        QUERY_KEYS.studies.detail(studyId),
        updatedStudy
      );

      // 목록 캐시들 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.studies.lists(),
        exact: false
      });
    }
  });
};

/**
 * 스터디 삭제
 */
export const useDeleteStudy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (studyId) => StudyService.deleteStudy(studyId),
    onMutate: async (studyId) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: QUERY_KEYS.studies.all
      });

      // 이전 데이터들 백업
      const previousDetail = queryClient.getQueryData(
        QUERY_KEYS.studies.detail(studyId)
      );
      
      const previousLists = new Map();
      
      // 모든 리스트 쿼리 데이터 백업
      queryClient.getQueryCache().findAll({
        queryKey: QUERY_KEYS.studies.lists()
      }).forEach(query => {
        previousLists.set(query.queryKey, query.state.data);
      });

      // Optimistic delete - 목록에서 제거
      previousLists.forEach((data, queryKey) => {
        if (data?.content) {
          queryClient.setQueryData(queryKey, {
            ...data,
            content: data.content.filter(study => study.id !== studyId),
            totalElements: Math.max((data.totalElements || 1) - 1, 0)
          });
        }
      });

      return { previousDetail, previousLists };
    },
    onError: (error, studyId, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousDetail) {
        queryClient.setQueryData(
          QUERY_KEYS.studies.detail(studyId),
          context.previousDetail
        );
      }
      
      if (context?.previousLists) {
        context.previousLists.forEach((data, queryKey) => {
          queryClient.setQueryData(queryKey, data);
        });
      }
      
      console.error('스터디 삭제 실패:', error);
    },
    onSuccess: (_, studyId) => {
      // 상세 캐시 제거
      queryClient.removeQueries({
        queryKey: QUERY_KEYS.studies.detail(studyId)
      });

      // 모든 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.studies.all,
        exact: false
      });
    }
  });
};

// === 편의 훅들 ===

/**
 * 스터디 관련 모든 작업을 포함하는 복합 훅
 */
export const useStudyOperations = () => {
  const createMutation = useCreateStudy();
  const updateMutation = useUpdateStudy();
  const deleteMutation = useDeleteStudy();

  const isLoading = useMemo(() => {
    return createMutation.isPending || updateMutation.isPending || deleteMutation.isPending;
  }, [createMutation.isPending, updateMutation.isPending, deleteMutation.isPending]);

  const createStudy = useCallback(async (content, images = []) => {
    return createMutation.mutateAsync({ content, images });
  }, [createMutation]);

  const updateStudy = useCallback(async (studyId, content, images = []) => {
    return updateMutation.mutateAsync({ studyId, content, images });
  }, [updateMutation]);

  const deleteStudy = useCallback(async (studyId) => {
    return deleteMutation.mutateAsync(studyId);
  }, [deleteMutation]);

  return {
    // 액션 함수들
    createStudy,
    updateStudy,
    deleteStudy,
    
    // 상태들
    isLoading,
    isCreating: createMutation.isPending,
    isUpdating: updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
    
    // 에러들
    createError: createMutation.error,
    updateError: updateMutation.error,
    deleteError: deleteMutation.error,
    
    // 성공 상태들
    isCreateSuccess: createMutation.isSuccess,
    isUpdateSuccess: updateMutation.isSuccess,
    isDeleteSuccess: deleteMutation.isSuccess,
    
    // 리셋 함수들
    resetCreate: createMutation.reset,
    resetUpdate: updateMutation.reset,
    resetDelete: deleteMutation.reset,
    resetAll: () => {
      createMutation.reset();
      updateMutation.reset();
      deleteMutation.reset();
    }
  };
};

/**
 * 페이지네이션과 필터링을 포함한 스터디 리스트 관리 훅
 * @param {Object} initialFilters - 초기 필터 설정
 */
export const useStudyListManager = (initialFilters = {}) => {
  const [filters, setFilters] = useState({
    page: 0,
    size: 10,
    sort: ['createdAt,DESC'],
    ...initialFilters
  });

  const query = useUserStudiesWithPagination(filters);

  const goToPage = useCallback((page) => {
    setFilters(prev => ({ ...prev, page }));
  }, []);

  const changePageSize = useCallback((size) => {
    setFilters(prev => ({ ...prev, size, page: 0 }));
  }, []);

  const changeSortOrder = useCallback((sort) => {
    setFilters(prev => ({ ...prev, sort: Array.isArray(sort) ? sort : [sort], page: 0 }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  return {
    // 데이터
    ...query.data,
    
    // 상태
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    isFetching: query.isFetching,
    
    // 필터
    filters,
    setFilters,
    
    // 페이지네이션 액션
    goToPage,
    changePageSize,
    changeSortOrder,
    resetFilters,
    
    // 편의 기능
    goToNextPage: () => goToPage(filters.page + 1),
    goToPreviousPage: () => goToPage(Math.max(filters.page - 1, 0)),
    goToFirstPage: () => goToPage(0),
    goToLastPage: () => query.data?.totalPages ? goToPage(query.data.totalPages - 1) : null,
    
    // 새로고침
    refetch: query.refetch
  };
};

export default {
  useStudyDetail,
  useUserStudyChannel,
  useUserStudies,
  useUserStudiesWithPagination,
  useGroupedStudies,
  useCreateStudy,
  useUpdateStudy,
  useDeleteStudy,
  useStudyOperations,
  useStudyListManager
};