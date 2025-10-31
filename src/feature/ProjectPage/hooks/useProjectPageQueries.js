import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProjectService } from '../../../services/project/ProjectService.js';
import { useAuthState } from '../../../hooks/useAuth.js';

/**
 * ProjectPage 전용 React Query 훅들
 */

// ========== 조회 훅들 ==========

/**
 * 프로젝트 질문 목록 조회
 */
export const useProjectQuestions = (projectId, options = {}) => {
  return useQuery({
    queryKey: ['projectPage', 'project', projectId, 'questions'],
    queryFn: async () => {
      if (!projectId) return [];

      const response = await ProjectService.getProjectQuestions(projectId);
      return response;
    },
    enabled: !!projectId, // projectId가 있을 때만 실행
    staleTime: 5 * 60 * 1000, // 5분 캐시
    retry: 2,
    ...options
  });
};

/**
 * 특정 프로젝트 상세 정보 조회
 */
export const useProjectDetail = (projectId, options = {}) => {
  return useQuery({
    queryKey: ['projectPage', 'project', projectId],
    queryFn: async () => {
      if (!projectId) return null;

      const response = await ProjectService.getProject(projectId);
      return response;
    },
    enabled: !!projectId, // projectId가 있을 때만 실행
    staleTime: 3 * 60 * 1000, // 3분 캐시
    retry: (failureCount, error) => {
      // 404나 삭제된 프로젝트는 재시도하지 않음
      if (
        error?.message?.includes('404') ||
        error?.message?.includes('존재하지 않습니다') ||
        error?.message?.includes('삭제된')
      ) {
        return false;
      }
      return failureCount < 2;
    },
    ...options
  });
};

/**
 * 프로젝트 신청자 목록 조회 (팀장용)
 */
export const useProjectApplicants = (projectId, options = {}) => {
  return useQuery({
    queryKey: ['projectPage', 'project', projectId, 'applicants'],
    queryFn: async () => {
      if (!projectId) return [];

      const response = await ProjectService.getProjectApplicants(projectId);
      // 배열 형태로 정규화
      return Array.isArray(response) ? response : response ? [response] : [];
    },
    enabled: !!projectId, // projectId가 있을 때만 실행
    staleTime: 2 * 60 * 1000, // 2분 캐시 (신청자는 자주 변경될 수 있음)
    retry: (failureCount, error) => {
      // 인증 에러나 권한 에러는 재시도하지 않음
      if (
        error?.message?.includes('로그인이 필요합니다') ||
        error?.message?.includes('401') ||
        error?.message?.includes('권한이 없습니다') ||
        error?.message?.includes('403') ||
        error?.message?.includes('신청자가 없습니다')
      ) {
        return false;
      }
      return failureCount < 1;
    },
    ...options
  });
};

/**
 * 프로젝트 신청 가능 여부 확인
 */
export const useProjectApplicationStatus = (projectId, options = {}) => {
  return useQuery({
    queryKey: ['projectPage', 'project', projectId, 'applicationStatus'],
    queryFn: async () => {
      if (!projectId) return null;

      try {
        // 프로젝트 상세 정보에서 신청 상태 확인
        const project = await ProjectService.getProject(projectId);

        return {
          canApply: project?.canApply || false,
          isAlreadyApplied: project?.isAlreadyApplied || false,
          isFull: project?.isFull || false,
          isExpired: project?.isExpired || false,
          isOwner: project?.isOwner || false
        };
      } catch (error) {
        
        return {
          canApply: false,
          isAlreadyApplied: false,
          isFull: false,
          isExpired: false,
          isOwner: false
        };
      }
    },
    enabled: !!projectId,
    staleTime: 1 * 60 * 1000, // 1분 캐시 (신청 상태는 자주 변경될 수 있음)
    ...options
  });
};

// ========== Mutation 훅들 ==========

/**
 * 프로젝트 신청
 */
export const useProjectApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ projectId, applicationData }) => {
      return await ProjectService.applyToProject(projectId, applicationData);
    },
    onMutate: async ({ projectId }) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: ['projectPage', 'project', projectId]
      });

      // 이전 데이터 백업
      const previousProject = queryClient.getQueryData(['projectPage', 'project', projectId]);
      const previousApplicationStatus = queryClient.getQueryData(['projectPage', 'project', projectId, 'applicationStatus']);

      // Optimistic update: 신청 상태 업데이트
      queryClient.setQueryData(
        ['projectPage', 'project', projectId, 'applicationStatus'],
        (oldData) => ({
          ...oldData,
          isAlreadyApplied: true,
          canApply: false
        })
      );

      return { previousProject, previousApplicationStatus };
    },
    onError: (error, { projectId }, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousProject) {
        queryClient.setQueryData(
          ['projectPage', 'project', projectId],
          context.previousProject
        );
      }
      if (context?.previousApplicationStatus) {
        queryClient.setQueryData(
          ['projectPage', 'project', projectId, 'applicationStatus'],
          context.previousApplicationStatus
        );
      }
      
    },
    onSuccess: (result, { projectId }) => {
      // 관련 쿼리들 무효화
      queryClient.invalidateQueries({
        queryKey: ['projectPage', 'project', projectId],
        exact: false
      });

      // 신청자 목록도 무효화 (팀장이 보는 경우)
      queryClient.invalidateQueries({
        queryKey: ['projectPage', 'project', projectId, 'applicants']
      });

      // MyProfile의 신청한 프로젝트 목록도 무효화 (사용자별로)
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'applied'],
        exact: false
      });
    }
  });
};

/**
 * 프로젝트 신청 취소
 */
export const useProjectApplicationCancel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectId) => ProjectService.cancelProjectApplication(projectId),
    onMutate: async (projectId) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: ['projectPage', 'project', projectId]
      });

      // 이전 데이터 백업
      const previousApplicationStatus = queryClient.getQueryData(['projectPage', 'project', projectId, 'applicationStatus']);

      // Optimistic update: 신청 취소 상태 업데이트
      queryClient.setQueryData(
        ['projectPage', 'project', projectId, 'applicationStatus'],
        (oldData) => ({
          ...oldData,
          isAlreadyApplied: false,
          canApply: true
        })
      );

      return { previousApplicationStatus };
    },
    onError: (error, projectId, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousApplicationStatus) {
        queryClient.setQueryData(
          ['projectPage', 'project', projectId, 'applicationStatus'],
          context.previousApplicationStatus
        );
      }
      
    },
    onSuccess: (result, projectId) => {
      // 관련 쿼리들 무효화
      queryClient.invalidateQueries({
        queryKey: ['projectPage', 'project', projectId],
        exact: false
      });

      // MyProfile의 신청한 프로젝트 목록도 무효화 (사용자별로)
      queryClient.invalidateQueries({
        queryKey: ['myProfile', 'projects', 'applied'],
        exact: false
      });
    }
  });
};

/**
 * 신청자 승인/거부 (팀장용)
 */
export const useApplicantDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ projectId, applicantId, decision }) => {
      if (decision === 'approve') {
        return await ProjectService.approveApplicant(projectId, applicantId);
      } else {
        return await ProjectService.rejectApplicant(projectId, applicantId);
      }
    },
    onMutate: async ({ projectId, applicantId, decision }) => {
      // 진행 중인 쿼리 취소
      await queryClient.cancelQueries({
        queryKey: ['projectPage', 'project', projectId, 'applicants']
      });

      // 이전 데이터 백업
      const previousApplicants = queryClient.getQueryData(['projectPage', 'project', projectId, 'applicants']);

      // Optimistic update: 신청자 목록에서 상태 업데이트 또는 제거
      queryClient.setQueryData(
        ['projectPage', 'project', projectId, 'applicants'],
        (oldData) => {
          if (!oldData) return [];

          if (decision === 'approve') {
            // 승인 시: 해당 신청자의 상태를 승인으로 변경
            return oldData.map(applicant =>
              applicant.id === applicantId
                ? { ...applicant, status: 'approved' }
                : applicant
            );
          } else {
            // 거부 시: 신청자 목록에서 제거
            return oldData.filter(applicant => applicant.id !== applicantId);
          }
        }
      );

      return { previousApplicants };
    },
    onError: (error, { projectId }, context) => {
      // 실패 시 이전 상태로 복원
      if (context?.previousApplicants) {
        queryClient.setQueryData(
          ['projectPage', 'project', projectId, 'applicants'],
          context.previousApplicants
        );
      }
      
    },
    onSuccess: (result, { projectId }) => {
      // 신청자 목록 무효화
      queryClient.invalidateQueries({
        queryKey: ['projectPage', 'project', projectId, 'applicants']
      });

      // 프로젝트 상세 정보도 무효화 (참여자 수 변경 가능)
      queryClient.invalidateQueries({
        queryKey: ['projectPage', 'project', projectId]
      });
    }
  });
};

// ========== 복합 훅들 ==========

/**
 * ProjectPage에서 사용하는 모든 데이터를 한 번에 가져오는 복합 훅
 */
export const useProjectPageData = (projectId) => {
  const projectQuery = useProjectDetail(projectId);
  const applicationStatusQuery = useProjectApplicationStatus(projectId);
  const applicantsQuery = useProjectApplicants(projectId, {
    enabled: !!projectId && projectQuery.data?.isOwner
  });

  const isLoading = projectQuery.isLoading || applicationStatusQuery.isLoading;
  const error = projectQuery.error || applicationStatusQuery.error || applicantsQuery.error;

  return {
    // 데이터
    project: projectQuery.data,
    applicationStatus: applicationStatusQuery.data,
    applicants: applicantsQuery.data || [],

    // 로딩 상태
    isLoading,
    isProjectLoading: projectQuery.isLoading,
    isApplicationStatusLoading: applicationStatusQuery.isLoading,
    isApplicantsLoading: applicantsQuery.isLoading,

    // 에러 상태
    error,
    projectError: projectQuery.error,
    applicationStatusError: applicationStatusQuery.error,
    applicantsError: applicantsQuery.error,

    // 새로고침 함수들
    refetchProject: projectQuery.refetch,
    refetchApplicationStatus: applicationStatusQuery.refetch,
    refetchApplicants: applicantsQuery.refetch,
    refetchAll: () => {
      projectQuery.refetch();
      applicationStatusQuery.refetch();
      if (projectQuery.data?.isOwner) {
        applicantsQuery.refetch();
      }
    }
  };
};

/**
 * ProjectPage 액션들을 모두 포함하는 복합 훅
 */
export const useProjectPageActions = () => {
  const applicationMutation = useProjectApplication();
  const cancelMutation = useProjectApplicationCancel();
  const decisionMutation = useApplicantDecision();

  const isLoading =
    applicationMutation.isPending ||
    cancelMutation.isPending ||
    decisionMutation.isPending;

  return {
    // 액션 함수들
    applyToProject: applicationMutation.mutate,
    cancelApplication: cancelMutation.mutate,
    handleApplicantDecision: decisionMutation.mutate,

    // 비동기 액션 함수들
    applyToProjectAsync: applicationMutation.mutateAsync,
    cancelApplicationAsync: cancelMutation.mutateAsync,
    handleApplicantDecisionAsync: decisionMutation.mutateAsync,

    // 상태들
    isLoading,
    isApplying: applicationMutation.isPending,
    isCancelling: cancelMutation.isPending,
    isProcessingDecision: decisionMutation.isPending,

    // 에러들
    applicationError: applicationMutation.error,
    cancelError: cancelMutation.error,
    decisionError: decisionMutation.error,

    // 리셋 함수들
    resetApplication: applicationMutation.reset,
    resetCancel: cancelMutation.reset,
    resetDecision: decisionMutation.reset,
    resetAll: () => {
      applicationMutation.reset();
      cancelMutation.reset();
      decisionMutation.reset();
    }
  };
};