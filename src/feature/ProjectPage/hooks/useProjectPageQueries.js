import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { MOCK_PROJECTS } from "../../../mock/projects.js";

// ========== 조회 훅들 ==========

/**
 * 프로젝트 질문 목록 조회
 */
export const useProjectQuestions = (projectId, options = {}) => {
  return useQuery({
    queryKey: ["projectPage", "project", projectId, "questions"],
    queryFn: async () => [], // Mock: Empty questions
    enabled: !!projectId,
    staleTime: Infinity,
    ...options,
  });
};

/**
 * 특정 프로젝트 상세 정보 조회
 */
export const useProjectDetail = (projectId, options = {}) => {
  return useQuery({
    queryKey: ["projectPage", "project", projectId],
    queryFn: async () => {
      if (!projectId) return null;
      // Mock data find
      const project = MOCK_PROJECTS.find((p) => p.id === Number(projectId));
      return project || MOCK_PROJECTS[0]; // Fallback to first mock project if ID not found
    },
    enabled: !!projectId,
    staleTime: Infinity,
    ...options,
  });
};

/**
 * 프로젝트 신청자 목록 조회 (팀장용)
 */
export const useProjectApplicants = (projectId, options = {}) => {
  return useQuery({
    queryKey: ["projectPage", "project", projectId, "applicants"],
    queryFn: async () => [
      {
        id: 101,
        nickname: "Applicant 1",
        position: "Frontend",
        status: "pending",
      },
      {
        id: 102,
        nickname: "Applicant 2",
        position: "Backend",
        status: "pending",
      },
    ],
    enabled: !!projectId,
    staleTime: Infinity,
    ...options,
  });
};

/**
 * 프로젝트 신청 가능 여부 확인
 */
export const useProjectApplicationStatus = (projectId, options = {}) => {
  return useQuery({
    queryKey: ["projectPage", "project", projectId, "applicationStatus"],
    queryFn: async () => ({
      canApply: true,
      isAlreadyApplied: false,
      isFull: false,
      isExpired: false,
      isOwner: false,
    }),
    enabled: !!projectId,
    staleTime: Infinity,
    ...options,
  });
};

// ========== Mutation 훅들 (No-op Mocks) ==========

/**
 * 프로젝트 신청
 */
export const useProjectApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ projectId, applicationData }) => {
      await new Promise((r) => setTimeout(r, 500)); // Simulate delay
      return { success: true };
    },
    onSuccess: (result, { projectId }) => {
      queryClient.invalidateQueries({
        queryKey: ["projectPage", "project", projectId],
      });
    },
  });
};

/**
 * 프로젝트 신청 취소
 */
export const useProjectApplicationCancel = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (projectId) => {
      await new Promise((r) => setTimeout(r, 500));
      return { success: true };
    },
    onSuccess: (result, projectId) => {
      queryClient.invalidateQueries({
        queryKey: ["projectPage", "project", projectId],
      });
    },
  });
};

/**
 * 신청자 승인/거부 (팀장용)
 */
export const useApplicantDecision = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ projectId, applicantId, decision }) => {
      await new Promise((r) => setTimeout(r, 500));
      return { success: true };
    },
    onSuccess: (result, { projectId }) => {
      queryClient.invalidateQueries({
        queryKey: ["projectPage", "project", projectId],
      });
    },
  });
};

// ========== 복합 훅들 ==========

export const useProjectPageData = (projectId) => {
  const projectQuery = useProjectDetail(projectId);
  const applicationStatusQuery = useProjectApplicationStatus(projectId);
  const applicantsQuery = useProjectApplicants(projectId, {
    enabled: !!projectId,
  });

  const isLoading = projectQuery.isLoading || applicationStatusQuery.isLoading;

  return {
    project: projectQuery.data,
    applicationStatus: applicationStatusQuery.data,
    applicants: applicantsQuery.data || [],
    isLoading,
    isProjectLoading: projectQuery.isLoading,
    isApplicationStatusLoading: applicationStatusQuery.isLoading,
    isApplicantsLoading: applicantsQuery.isLoading,
    error: projectQuery.error,
    refetchProject: projectQuery.refetch,
    refetchApplicationStatus: applicationStatusQuery.refetch,
    refetchApplicants: applicantsQuery.refetch,
    refetchAll: () => {
      projectQuery.refetch();
      applicationStatusQuery.refetch();
      applicantsQuery.refetch();
    },
  };
};

export const useProjectPageActions = () => {
  const applicationMutation = useProjectApplication();
  const cancelMutation = useProjectApplicationCancel();
  const decisionMutation = useApplicantDecision();

  const isLoading =
    applicationMutation.isPending ||
    cancelMutation.isPending ||
    decisionMutation.isPending;

  return {
    applyToProject: applicationMutation.mutate,
    cancelApplication: cancelMutation.mutate,
    handleApplicantDecision: decisionMutation.mutate,
    applyToProjectAsync: applicationMutation.mutateAsync,
    cancelApplicationAsync: cancelMutation.mutateAsync,
    handleApplicantDecisionAsync: decisionMutation.mutateAsync,
    isLoading,
    isApplying: applicationMutation.isPending,
    isCancelling: cancelMutation.isPending,
    isProcessingDecision: decisionMutation.isPending,
    applicationError: applicationMutation.error,
    cancelError: cancelMutation.error,
    decisionError: decisionMutation.error,
    resetApplication: applicationMutation.reset,
    resetCancel: cancelMutation.reset,
    resetDecision: decisionMutation.reset,
    resetAll: () => {
      applicationMutation.reset();
      cancelMutation.reset();
      decisionMutation.reset();
    },
  };
};
