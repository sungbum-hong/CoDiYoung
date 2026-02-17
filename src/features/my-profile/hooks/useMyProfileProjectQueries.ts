import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectService } from '../../../services/project/ProjectService';
import { useAuthState } from '../../../hooks/useAuth';

/**
 * MyProfile 전용 프로젝트 React Query 훅들
 */

// ========== 조회 훅들 ==========

/**
 * 진행 중인 프로젝트 조회
 */
export const useProgressingProjects = (userId?: number | null, options: any = {}) => {
  const { enabled, ...queryOptions } = options;
  const queryEnabled = enabled ?? !!userId;

  return useQuery({
    queryKey: ['myProfile', 'projects', 'progressing', userId ?? 'guest'],
    queryFn: async () => {
      const response = await ProjectService.getProgressingProjects();

      // 배열 형태로 정규화
      const normalizedData = Array.isArray(response) ? response : response ? [response] : [];

      // currentUserStatus 정규화 처리
      const processedData = normalizedData.map((project, index) => {
        const originalStatus = project.currentUserStatus;
        let normalizedStatus = originalStatus;

        // 서버에서 "COMPLICATED"를 "WAITING"으로 매핑
        if (originalStatus === 'COMPLICATED') {
          normalizedStatus = 'WAITING';
          
        } else {
        }

        const processedProject = {
          ...project,
          currentUserStatus: normalizedStatus,
          originalCurrentUserStatus: originalStatus // 원본 상태 보존
        };

        return processedProject;
      });
      

      return processedData;
    },
    staleTime: 3 * 60 * 1000, // 3분 캐시
    retry: (failureCount, error) => {
      // 404나 "없습니다" 에러는 재시도하지 않음
      if (error?.message?.includes('404') || error?.message?.includes('없습니다')) {
        return false;
      }
      return failureCount < 1;
    },
    enabled: queryEnabled,
    ...queryOptions
  });
};

/**
 * 신청한 프로젝트 조회
 */
export const useAppliedProjects = (userId?: number | null, options: any = {}) => {
  const { enabled, ...queryOptions } = options;
  const queryEnabled = enabled ?? !!userId;

  return useQuery({
    queryKey: ['myProfile', 'projects', 'applied', userId ?? 'guest'],
    queryFn: async () => {
      const response = await ProjectService.getAppliedProjects();

      // 새로운 API 스펙에 따라 단일 객체를 배열로 정규화
      const normalizedData = Array.isArray(response) ? response : response ? [response] : [];

      // 신청중인 프로젝트 데이터 구조 확인 및 매핑
      const processedData = normalizedData.map((project, index) => {
        // 새로운 API 스펙에 맞는 데이터 구조로 정규화
        const processedProject = {
          ...project,
          // 기존 필드명과 호환성 유지
          memberBriefs: project.memberBriefs || [],
          techs: project.techs || [],
          position: project.position || [],
          // 이미지 URL 정규화
          imageKey: project.imageKey,
          // 리더 정보 정규화
          leaderInfoProjection: project.leaderInfoProjection || {}
        };

        
        return processedProject;
      });

      

      return processedData;
    },
    staleTime: 3 * 60 * 1000, // 3분 캐시
    retry: (failureCount, error) => {
      // 404나 "신청중인 프로젝트가 없습니다" 에러는 정상 상황
      if (
        error?.message?.includes('신청중인 프로젝트가 없습니다') ||
        error?.message?.includes('404')
      ) {
        return false;
      }
      return failureCount < 1;
    },
    enabled: queryEnabled,
    ...queryOptions
  });
};

/**
 * 완료된 프로젝트 조회 (페이지네이션 지원)
 */
export const useCompletedProjects = (options: any = {}) => {
  const {
    page = 0,
    size = 6,
    userId,
    enabled,
    ...queryOptions
  } = options;

  const queryEnabled = enabled ?? !!userId;

  return useQuery({
    queryKey: ['myProfile', 'projects', 'completed', userId ?? 'guest', { page, size }],
    queryFn: () => ProjectService.getCompletedProjects({
      page,
      size,
      sort: ['createdAt,DESC']
    }),
    staleTime: 5 * 60 * 1000, // 5분 캐시 (완료된 프로젝트는 변경이 적음)
    keepPreviousData: true, // 페이지 전환 시 이전 데이터 유지
    enabled: queryEnabled,
    ...queryOptions
  });
};

/**
 * 특정 프로젝트의 신청자 목록 조회
 */
export const useProjectApplicants = (projectId?: number, options: any = {}) => {
  return useQuery({
    queryKey: ['myProfile', 'projects', projectId, 'applicants'],
    queryFn: async () => {
      if (!projectId) return [];

      const response = await ProjectService.getProjectApplicants(projectId);
      // 배열 형태로 정규화
      return Array.isArray(response) ? response : response ? [response] : [];
    },
    enabled: !!projectId, // projectId가 있을 때만 실행
    staleTime: 2 * 60 * 1000, // 2분 캐시 (신청자는 자주 변경될 수 있음)
    retry: (failureCount, error) => {
      // 인증 에러나 신청자 없음 에러는 재시도하지 않음
      if (
        error?.message?.includes('로그인이 필요합니다') ||
        error?.message?.includes('401') ||
        error?.message?.includes('인증') ||
        error?.message?.includes('신청자가 없습니다') ||
        error?.message?.includes('404')
      ) {
        return false;
      }
      return failureCount < 1;
    },
    ...options
  });
};

// ========== Mutation 훅들 ==========

/**
 * 프로젝트 신청 취소
 */
export const useCancelProjectApplication = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthState();
  const userId = user?.id ?? null;

  return useMutation({
    mutationFn: (projectId: number) => ProjectService.cancelProjectApplication(projectId),
    onMutate: async (projectId) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: ['myProfile', 'projects', 'applied', userId ?? 'guest']
      });

      // 이전 데이터 백업
      const previousAppliedProjects = queryClient.getQueryData(['myProfile', 'projects', 'applied', userId ?? 'guest']);

      // Optimistic update: 신청한 프로젝트에서 제거
      queryClient.setQueryData(
        ['myProfile', 'projects', 'applied', userId ?? 'guest'],
        (oldData: any[]) => {
          if (!oldData) return [];
          return oldData.filter((project: any) => project.id !== projectId);
        }
      );

      return { previousAppliedProjects };
    },
    onError: (error, projectId, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousAppliedProjects) {
        queryClient.setQueryData(
          ['myProfile', 'projects', 'applied', userId ?? 'guest'],
          context.previousAppliedProjects
        );
      }
      
    },
    onSuccess: () => {
      // 관련 쿼리들 무효화 (해당 사용자의 쿼리만)
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'progressing', userId ?? 'guest']
      });
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'applied', userId ?? 'guest']
      });
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'completed', userId ?? 'guest']
      });
    }
  });
};

/**
 * 진행 중인 프로젝트 취소 (팀장용)
 */
export const useCancelProgressingProject = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthState();
  const userId = user?.id ?? null;

  return useMutation({
    mutationFn: (projectId: number) => ProjectService.deleteProjectByLeader(projectId),
    onMutate: async (projectId) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: ['myProfile', 'projects', 'progressing', userId ?? 'guest']
      });

      // 이전 데이터 백업
      const previousProgressingProjects = queryClient.getQueryData(['myProfile', 'projects', 'progressing', userId ?? 'guest']);

      // Optimistic update: 진행 중인 프로젝트에서 제거
      queryClient.setQueryData(
        ['myProfile', 'projects', 'progressing', userId ?? 'guest'],
        (oldData: any[]) => {
          if (!oldData) return [];
          return oldData.filter((project: any) => project.id !== projectId);
        }
      );

      return { previousProgressingProjects };
    },
    onError: (error, projectId, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousProgressingProjects) {
        queryClient.setQueryData(
          ['myProfile', 'projects', 'progressing', userId ?? 'guest'],
          context.previousProgressingProjects
        );
      }
      
    },
    onSuccess: () => {
      // 관련 쿼리들 무효화 (해당 사용자의 쿼리만)
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'progressing', userId ?? 'guest']
      });
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'applied', userId ?? 'guest']
      });
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'completed', userId ?? 'guest']
      });

      // 전체 프로젝트 목록도 무효화 (MainHome에서 사용)
      queryClient.invalidateQueries({
        queryKey: ['mainHome', 'projects']
      });
    }
  });
};

/**
 * 프로젝트 완료 처리
 */
export const useCompleteProject = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthState();
  const userId = user?.id ?? null;

  return useMutation({
    mutationFn: (projectId: number) => ProjectService.completeProject(projectId),
    onSuccess: (result, projectId) => {
      


      // API 응답 전체 구조 디버깅
      

      // 완료 처리 결과에 따라 다른 동작 수행
      const responseData = result?.data || {};
      const normalizedRole = (responseData.userRole || '').toUpperCase();
      const completionPercent = typeof responseData.completionRate === 'number'
        ? responseData.completionRate
        : (typeof result?.completionRate === 'number' ? result.completionRate : 0);
      const completionRate = completionPercent > 1 ? completionPercent / 100 : completionPercent;
      const status = (result?.status || '').toUpperCase();


      const isFullyCompleted =
        result?.isCompleted === true ||
        status === 'COMPLETED' ||
        (normalizedRole === 'LEADER' && completionRate >= 1.0);


      // 팀원 완료 요청일 때는 진행 목록에서 제거하거나 즉시 refetch하지 않고
      // 캐시 안의 해당 프로젝트에 완료 상태 정보만 덧붙인다.
      if (!isFullyCompleted && normalizedRole === 'MEMBER') {
        

        queryClient.setQueryData(
          ['myProfile', 'projects', 'progressing', userId ?? 'guest'],
          (oldData: any) => {
            

            if (!Array.isArray(oldData)) return oldData;

            const updatedData = oldData.map((project: any) => {
              if (project.id !== projectId) return project;

              const updatedProject = {
                ...project,
                completionStatus: status || 'WAITING',
                currentUserStatus: 'WAITING',
                originalCurrentUserStatus: 'COMPLICATED', // 서버의 실제 상태
                completionSummary: {
                  completedMembers: responseData.completedMembers,
                  totalMembers: responseData.totalMembers,
                  completionRate,
                  completionPercent
                }
              };


              return updatedProject;
            });

            
            return updatedData;
          }
        );

        
        return;
      }

      if (isFullyCompleted) {
        

        // 완전히 완료된 경우: 진행 중에서 제거하고 완료 목록에 추가
        queryClient.setQueryData(
          ['myProfile', 'projects', 'progressing', userId ?? 'guest'],
          (oldData: any) => {
            
            const filteredData = oldData ? oldData.filter((project: any) => project.id !== projectId) : [];
            
            return filteredData;
          }
        );
      }

      

      // 해당 사용자의 프로젝트 관련 쿼리만 무효화
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'progressing', userId ?? 'guest']
      });
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'applied', userId ?? 'guest']
      });
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'completed', userId ?? 'guest']
      });

      // 신청자 정보도 무효화 (프로젝트 상태 변경 시)
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', projectId, 'applicants']
      });

      
    },
    onError: (error) => {
      
      
      
      
    }
  });
};

/**
 * 프로젝트 생성
 */
export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { user } = useAuthState();
  const userId = user?.id ?? null;

  return useMutation({
    mutationFn: (projectData: any) => ProjectService.createProject(projectData),
    onSuccess: () => {
      // 해당 사용자의 진행 중인 프로젝트 목록 무효화
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'progressing', userId ?? 'guest']
      });

      // 전체 프로젝트 목록도 무효화 (MainHome에서 사용)
      queryClient.invalidateQueries({
        queryKey: ['mainHome', 'projects']
      });
    },
    onError: (error) => {
      
    }
  });
};

// ========== 복합 훅들 ==========

/**
 * 모든 프로젝트 데이터를 한 번에 가져오는 복합 훅
 */
export const useMyProfileProjects = () => {
  const { user } = useAuthState();
  const userId = user?.id ?? null;

  const progressingQuery = useProgressingProjects(userId);
  const appliedQuery = useAppliedProjects(userId);
  const completedQuery = useCompletedProjects({ userId });

  const isLoading = progressingQuery.isLoading || appliedQuery.isLoading || completedQuery.isLoading;
  const error = progressingQuery.error || appliedQuery.error || completedQuery.error;

  return {
    progressingProjects: progressingQuery.data || [],
    appliedProjects: appliedQuery.data || [],
    completedProjects: (completedQuery.data as any)?.content || [],

    // 로딩 상태
    isLoading,
    isProgressingLoading: progressingQuery.isLoading,
    isAppliedLoading: appliedQuery.isLoading,
    isCompletedLoading: completedQuery.isLoading,

    // 에러 상태
    error,
    progressingError: progressingQuery.error,
    appliedError: appliedQuery.error,
    completedError: completedQuery.error,

    // 새로고침 함수들
    refetchProgressing: progressingQuery.refetch,
    refetchApplied: appliedQuery.refetch,
    refetchCompleted: completedQuery.refetch,
    refetchAll: () => {
      progressingQuery.refetch();
      appliedQuery.refetch();
      completedQuery.refetch();
    }
  };
};

/**
 * 프로젝트 액션들을 모두 포함하는 복합 훅
 */
export const useProjectActions = () => {
  const cancelApplicationMutation = useCancelProjectApplication();
  const cancelProgressingMutation = useCancelProgressingProject();
  const completeMutation = useCompleteProject();
  const createMutation = useCreateProject();

  const isLoading =
    cancelApplicationMutation.isPending ||
    cancelProgressingMutation.isPending ||
    completeMutation.isPending ||
    createMutation.isPending;

  return {
    // 액션 함수들
    cancelProjectApplication: cancelApplicationMutation.mutate,
    cancelProgressingProject: cancelProgressingMutation.mutate,
    completeProject: completeMutation.mutate,
    createProject: createMutation.mutate,

    // 비동기 액션 함수들
    cancelProjectApplicationAsync: cancelApplicationMutation.mutateAsync,
    cancelProgressingProjectAsync: cancelProgressingMutation.mutateAsync,
    completeProjectAsync: completeMutation.mutateAsync,
    createProjectAsync: createMutation.mutateAsync,

    // 상태들
    isLoading,
    isCancellingApplication: cancelApplicationMutation.isPending,
    isCancellingProgressing: cancelProgressingMutation.isPending,
    isCompleting: completeMutation.isPending,
    isCreating: createMutation.isPending,

    // 에러들
    cancelApplicationError: cancelApplicationMutation.error,
    cancelProgressingError: cancelProgressingMutation.error,
    completeError: completeMutation.error,
    createError: createMutation.error,

    // 리셋 함수들
    resetCancelApplication: cancelApplicationMutation.reset,
    resetCancelProgressing: cancelProgressingMutation.reset,
    resetComplete: completeMutation.reset,
    resetCreate: createMutation.reset,
    resetAll: () => {
      cancelApplicationMutation.reset();
      cancelProgressingMutation.reset();
      completeMutation.reset();
      createMutation.reset();
    }
  };
};
