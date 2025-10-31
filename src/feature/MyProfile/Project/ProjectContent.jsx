import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import ProjectCreateForm from "./ProjectCreateForm";
import ApplicantListView from "./components/ApplicantListView";
import ProjectCard from "../components/ProjectCard.jsx";
import { useMyProfileProjects, useProjectActions, useProjectApplicants, useCompletedProjects } from "../hooks/useMyProfileProjectQueries.js";
import { useProjectNavigation } from "../hooks/useProjectNavigation.js";
import { useAuthState } from "../../../hooks/useAuth.js";
import { ProjectUtils } from "./utils/ProjectUtils";
import ProjectIcons from "./components/ProjectIcons";
import { CONFIG } from "../../../constants/config.js";

export default function ProjectContent() {
  // 팀원 완료 요청 상태 관리 (API 반영 전 즉시 UI 업데이트용)
  const [memberCompletionRequests, setMemberCompletionRequests] = useState({});

  // 완료된 프로젝트 페이지 상태
  const [completedProjectsPage, setCompletedProjectsPage] = useState(0);

  // 인증 상태
  const { user, isAuthenticated } = useAuthState();

  // React Query를 사용한 프로젝트 데이터
  const {
    progressingProjects,
    appliedProjects,
    isLoading,
    refetchAll: refetchAllProjects
  } = useMyProfileProjects();

  // 완료된 프로젝트 데이터 (페이지네이션)
  const {
    data: completedProjectsData,
    isLoading: isCompletedLoading,
    error: completedError,
    refetch: refetchCompleted
  } = useCompletedProjects({
    page: completedProjectsPage,
    size: 6,
    userId: user?.userId ?? user?.id ?? null
  });

  // 프로젝트 액션들
  const {
    cancelProjectApplicationAsync,
    cancelProgressingProjectAsync,
    completeProjectAsync,
    isLoading: isActionLoading
  } = useProjectActions();

  // 진행 중인 프로젝트 선택 상태
  const [selectedProgressingProjectId, setSelectedProgressingProjectId] = useState(null);

  useEffect(() => {
    if (!progressingProjects?.length) {
      setSelectedProgressingProjectId(null);
      setMemberCompletionRequests({});
      return;
    }

    setSelectedProgressingProjectId((prev) => {
      if (prev && progressingProjects.some((project) => project.id === prev)) {
        return prev;
      }
      return progressingProjects[0].id;
    });
  }, [progressingProjects]);

  useEffect(() => {
    if (!progressingProjects?.length) return;

    setMemberCompletionRequests((prev) => {
      const next = { ...prev };
      const activeIds = new Set();

      progressingProjects.forEach((project) => {
        const status = (project?.currentUserStatus || '').toUpperCase();
        const projectId = project?.id;
        if (projectId == null) return;
        activeIds.add(projectId);

        if (status === 'WAITING' || status === 'COMPLETED') {
          next[projectId] = true;
        }
      });

      Object.keys(next).forEach((key) => {
        const numericKey = Number(key);
        if (!activeIds.has(numericKey) && !activeIds.has(key)) {
          delete next[key];
        }
      });

      return next;
    });
  }, [progressingProjects]);

  useEffect(() => {
    if (progressingProjects?.length) {
    }
  }, [progressingProjects]);

  const selectedProgressingProject = progressingProjects?.find(
    (project) => project.id === selectedProgressingProjectId
  );

  // 진행 중인 프로젝트의 신청자 데이터
  const isSelectedProjectLeader = ProjectUtils.isProjectLeader(user, selectedProgressingProject);
  const {
    data: projectApplicants = [],
    refetch: refetchApplicants
  } = useProjectApplicants(selectedProgressingProjectId, {
    enabled: !!selectedProgressingProjectId && isSelectedProjectLeader
  });
  
  // 네비게이션 훅
  const {
    showCreateForm,
    showApplicantList,
    currentProjectId,
    handleCreateClick,
    handleBackClick,
    handleApplicantIconClick: navigateToApplicants,
    handleBackToProjects,
  } = useProjectNavigation();

  // 완료된 프로젝트 페이지 변경 함수
  const handleCompletedProjectsPageChange = (newPage) => {
    const totalPages = completedProjectsData?.totalPages || 0;
    if (newPage >= 0 && newPage < totalPages) {
      setCompletedProjectsPage(newPage);
    }
  };

  // 신청 프로젝트 취소 핸들러
  const handleAppliedProjectCancel = async () => {
    if (!appliedProjects || appliedProjects.length === 0) {
      alert('취소할 신청 프로젝트가 없습니다.');
      return;
    }

    const confirmed = window.confirm('프로젝트 신청을 취소하시겠습니까?\n취소 후에는 다시 신청해야 합니다.');
    if (!confirmed) return;

    try {
      const projectId = appliedProjects[0].id;
      await cancelProjectApplicationAsync(projectId);

      alert('프로젝트 신청이 취소되었습니다.');

      // 다른 컴포넌트에게 프로젝트 취소 알림
      window.dispatchEvent(new CustomEvent('projectCancelled', {
        detail: { projectId, type: 'application' }
      }));
    } catch (error) {
      alert(`프로젝트 신청 취소에 실패했습니다.\n${error.message}`);
    }
  };

  // 진행 프로젝트 취소 핸들러 (개설자 전용)
  const handleProgressingProjectCancel = async (projectId = selectedProgressingProjectId) => {
    if (!projectId) {
      alert('취소할 진행 프로젝트가 없습니다.');
      return;
    }

    const project = progressingProjects.find((item) => item.id === projectId);
    if (!project) {
      alert('선택한 프로젝트를 찾을 수 없습니다.');
      return;
    }
    const { memberCount } = ProjectUtils.getCapacityInfo(project);

    // 팀원이 1명이라도 있으면 취소 불가능
    if (memberCount >= 2) {
      alert('팀원이 있는 프로젝트는 취소할 수 없습니다.');
      return;
    }

    const confirmed = window.confirm(
      '진행 중인 프로젝트를 취소하시겠습니까?\n' +
      '프로젝트가 취소되면 모든 신청자에게 알림이 전송됩니다.\n' +
      '이 작업은 되돌릴 수 없습니다.'
    );
    if (!confirmed) return;

    try {
      await cancelProgressingProjectAsync(projectId);

      alert('프로젝트가 취소되었습니다.');

      // 다른 컴포넌트에게 프로젝트 취소 알림
      window.dispatchEvent(new CustomEvent('projectCancelled', {
        detail: { projectId, type: 'progressing' }
      }));
    } catch (error) {
      alert(`프로젝트 취소에 실패했습니다.\n${error.message}`);
    }
  };

  // 프로젝트 완료 핸들러 - 리팩토링된 로직
  const handleProjectComplete = async (projectId = selectedProgressingProjectId) => {
    

    if (!projectId) {
      
      alert('완료할 프로젝트가 없습니다.');
      
      return;
    }

    const project = progressingProjects.find((item) => item.id === projectId);

    if (!project) {
      
      alert('선택한 프로젝트를 찾을 수 없습니다.');
      
      return;
    }

    const confirmed = window.confirm(
      '프로젝트를 완료 처리하시겠습니까?\n\n' +
      '• 팀원: 완료 버튼을 누르면 팀장의 최종 완료를 기다립니다.\n' +
      '• 팀장: 모든 팀원이 완료한 후에만 최종 완료할 수 있습니다.\n\n' +
      '계속하시겠습니까?'
    );

    if (!confirmed) {
      
      
      return;
    }

    try {
      
      const result = await completeProjectAsync(projectId);

      

      // 성공 메시지 표시
      const alertMessage = ProjectUtils.generateCompletionMessage(result);
      
      alert(alertMessage);

      
      // 프로젝트 데이터 새로고침
      refetchAllProjects();
      refetchApplicants();
      

    } catch (error) {
      
      const errorMessage = ProjectUtils.normalizeErrorMessage(error);
      
      alert(`❌ 프로젝트 완료 처리에 실패했습니다.\n${errorMessage}`);
    }

    
  };

  const handleProgressingProjectSelect = (projectId) => {
    if (!projectId || projectId === selectedProgressingProjectId) return;
    setSelectedProgressingProjectId(projectId);
  };

  const handleApplicantListOpen = (projectId) => {
    if (projectId) {
      setSelectedProgressingProjectId(projectId);
      navigateToApplicants(projectId);
    }
  };

  if (showCreateForm) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center p-6">
        <ProjectCreateForm onBack={handleBackClick} />
      </div>
    );
  }

  if (showApplicantList) {
    const currentProject = progressingProjects.find(
      (p) => p.id === currentProjectId
    );

    return (
      <ApplicantListView
        applicants={projectApplicants}
        projectTitle={currentProject?.title || "프로젝트"}
        projectId={currentProjectId}
        onBack={handleBackToProjects}
      />
    );
  }

  // 로딩 상태 처리 (데이터 로딩 또는 액션 로딩)
  const isAnyLoading = isLoading || isActionLoading;

  return (
    <div className="w-full min-h-screen flex flex-col py-6 px-24">

      {/* 신청 프로젝트 + 아이콘 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">신청 프로젝트</h2>
          {/* 신청자/완료 이미지를 제목 오른쪽에 배치 */}
          <div className="flex gap-4">
            {/* 프로젝트 생성/취소 버튼 */}
            <div className="flex gap-2">
              {(() => {
                // 진행 프로젝트가 있으면 아이콘 숨김
                if (progressingProjects && progressingProjects.length > 0) {
                  return null;
                }
                
                // 신청 프로젝트가 있으면 취소 아이콘
                if (appliedProjects && appliedProjects.length > 0) {
                  return (
                    <button
                      onClick={handleAppliedProjectCancel}
                      disabled={isAnyLoading}
                      className={`w-10 h-10 rounded-full bg-white border-2 border-red-600 text-red-600 
                       hover:bg-red-600 hover:text-white transition flex items-center justify-center text-sm shadow-sm
                       ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                      title={isAnyLoading ? "처리 중..." : "프로젝트 신청 취소"}
                    >
                      {isAnyLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
                      ) : (
                        <XMarkIcon className="w-5 h-5" />
                      )}
                    </button>
                  );
                }
                
                // 둘 다 없으면 개설 아이콘
                return (
                  <button
                    onClick={handleCreateClick}
                    disabled={isAnyLoading}
                    className={`w-10 h-10 rounded-full bg-white border-2 border-violet-600 text-violet-600 
                     hover:bg-violet-600 hover:text-white transition flex items-center justify-center text-sm shadow-sm
                     ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    title={isAnyLoading ? "처리 중..." : "새 프로젝트 개설"}
                  >
                    <span className="text-lg font-bold">+</span>
                  </button>
                );
              })()}
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md relative">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[var(--color-primary)]"></div>
                <span className="font-bold text-lg">로딩 중...</span>
              </div>
            </div>
          ) : appliedProjects && appliedProjects.length > 0 ? (
            <div className="w-full h-full overflow-y-auto">
              {appliedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">없음</span>
            </div>
          )}
        </div>
      </div>

      {/* 진행 프로젝트 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">진행 프로젝트</h2>
          {/* 진행 프로젝트가 있을 때만 아이콘들 표시 */}
          {progressingProjects && (
            <div className="flex gap-4">
              {selectedProgressingProject && (
                <ProjectIcons
                  project={selectedProgressingProject}
                  user={user}
                  projectApplicants={projectApplicants}
                  appliedProjects={appliedProjects}
                  isAuthenticated={isAuthenticated}
                  isAnyLoading={isAnyLoading}
                  memberCompletionRequests={memberCompletionRequests}
                  setMemberCompletionRequests={setMemberCompletionRequests}
                  completeProjectAsync={completeProjectAsync}
                  onApplicantIconClick={handleApplicantListOpen}
                  onComplete={handleProjectComplete}
                  onCancel={handleProgressingProjectCancel}
                  refetchAllProjects={refetchAllProjects}
                />
              )}
            </div>
          )}
        </div>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md relative">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-[var(--color-primary)]"></div>
                <span className="font-bold text-lg">로딩 중...</span>
              </div>
            </div>
          ) : progressingProjects && progressingProjects.length > 0 ? (
            <div className="w-full h-full overflow-y-auto">
              {progressingProjects.map((project, index) => (
                <ProjectCard
                  key={project?.id ?? index}
                  project={project}
                  isSelected={project?.id === selectedProgressingProjectId}
                  onSelect={handleProgressingProjectSelect}
                />
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">없음</span>
            </div>
          )}
        </div>
      </div>

      {/* 완료된 프로젝트 - 페이지네이션 */}
      {completedProjectsData?.content?.length > 0 && (
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">완료된 프로젝트</h2>
            <span className="text-sm text-gray-500">
              총 {completedProjectsData.totalElements}개
            </span>
          </div>

          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-6 gap-4 mb-6">
            {completedProjectsData.content.map((project, index) => (
              <div
                key={project.id || index}
                className="w-16 h-16 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden hover:shadow-md transition-all cursor-pointer"
                title={`완료된 프로젝트: ${project.title || `프로젝트 ${project.id}`}`}
              >
                {project.logoImageURL ? (
                  <img
                    src={project.logoImageURL.startsWith('http') ? project.logoImageURL : `${CONFIG.API.BASE_URL}/storage/${project.logoImageURL}`}
                    alt={`프로젝트 ${project.title || project.id} 이미지`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* 이미지 로드 실패시 또는 이미지가 없을 때 기본 표시 */}
                <div
                  className={`w-full h-full flex items-center justify-center text-xs font-bold text-gray-600 ${project.logoImageURL ? 'hidden' : 'flex'}`}
                >
                  {project.title?.[0] || `P${project.id}`}
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          {completedProjectsData.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => handleCompletedProjectsPageChange(completedProjectsPage - 1)}
                disabled={completedProjectsPage === 0}
                className={`p-2 rounded-full ${
                  completedProjectsPage === 0
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
                }`}
                title="이전 페이지"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>

              <span className="text-sm text-gray-600 px-2">
                {completedProjectsPage + 1} / {completedProjectsData.totalPages}
              </span>

              <button
                onClick={() => handleCompletedProjectsPageChange(completedProjectsPage + 1)}
                disabled={completedProjectsPage >= completedProjectsData.totalPages - 1}
                className={`p-2 rounded-full ${
                  completedProjectsPage >= completedProjectsData.totalPages - 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
                }`}
                title="다음 페이지"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* 에러 상태만 별도로 표시 */}
      {completedError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          완료된 프로젝트 조회 실패: {completedError.message}
          <button
            onClick={() => refetchCompleted()}
            className="ml-2 text-red-600 underline hover:text-red-800"
          >
            다시 시도
          </button>
        </div>
      )}
    </div>
  );
}
