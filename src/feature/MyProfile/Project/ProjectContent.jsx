import { UserIcon, CheckCircleIcon, XMarkIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import ProjectCreateForm from "./ProjectCreateForm";
import ApplicantListView from "./components/ApplicantListView";
import ProjectCard from "../components/ProjectCard.jsx";
import { useProjectData } from "../hooks/useProjectData.js";
import { useApplicantData } from "../hooks/useApplicantData.js";
import { useProjectNavigation } from "../hooks/useProjectNavigation.js";
import { useProjectActions } from "../hooks/useProjectActions.js";
import { useAuthState } from "../../../hooks/useAuth.js";
import { ProjectService } from "../../../services/projectService.js";

export default function ProjectContent() {
  // 프로젝트 완료 상태 관리
  const [projectCompletionState, setProjectCompletionState] = useState({});
  
  // 완료된 프로젝트 상태 관리
  const [completedProjects, setCompletedProjects] = useState({
    data: [],
    totalElements: 0,
    totalPages: 0,
    currentPage: 0,
    isLoading: false,
    error: null
  });
  
  // 인증 상태
  const { user, isAuthenticated } = useAuthState();
  
  
  // 프로젝트 데이터 훅
  const { progressingProjects, appliedProjects, isLoading, fetchAllProjects } = useProjectData();
  
  // 신청자 데이터 훅
  const { projectApplicants, fetchMultipleProjectApplicants } = useApplicantData();
  
  // 네비게이션 훅
  const {
    showCreateForm,
    showApplicantList,
    currentProjectId,
    handleCreateClick,
    handleBackClick,
    handleApplicantIconClick,
    handleBackToProjects,
  } = useProjectNavigation();
  
  // 프로젝트 액션 훅 (취소/완료)
  const {
    cancelProjectApplication,
    cancelProgressingProject,
    completeProject,
    isLoading: isActionLoading,
    error: actionError
  } = useProjectActions();

  // 완료된 프로젝트 조회 함수
  const fetchCompletedProjects = async (page = 0, size = 6) => {
    try {
      setCompletedProjects(prev => ({ ...prev, isLoading: true, error: null }));
      
      const response = await ProjectService.getCompletedProjects({
        page,
        size,
        sort: ['createdAt,DESC']
      });
      
      
      setCompletedProjects({
        data: response.content || [],
        totalElements: response.totalElements || 0,
        totalPages: response.totalPages || 0,
        currentPage: response.number || 0,
        isLoading: false,
        error: null
      });
    } catch (error) {
      setCompletedProjects(prev => ({
        ...prev,
        isLoading: false,
        error: error.message
      }));
    }
  };

  // 페이지 변경 함수
  const handleCompletedProjectsPageChange = (newPage) => {
    if (newPage >= 0 && newPage < completedProjects.totalPages) {
      fetchCompletedProjects(newPage);
    }
  };

  // 프로젝트 데이터가 로드된 후 신청자 데이터 조회
  useEffect(() => {
    if (progressingProjects.length > 0) {
      fetchMultipleProjectApplicants(progressingProjects);
    }
  }, [progressingProjects]);

  // 완료된 프로젝트 초기 로드
  useEffect(() => {
    if (isAuthenticated) {
      fetchCompletedProjects();
    }
  }, [isAuthenticated]);

  // 신청 프로젝트 취소 핸들러
  const handleAppliedProjectCancel = async () => {
    if (!appliedProjects || appliedProjects.length === 0) {
      alert('취소할 신청 프로젝트가 없습니다.');
      return;
    }

    const projectId = appliedProjects[0].id;
    const success = await cancelProjectApplication(projectId, {
      onSuccess: async (result) => {
        await fetchAllProjects();
        
        // 다른 컴포넌트에게 프로젝트 취소 알림
        window.dispatchEvent(new CustomEvent('projectCancelled', { 
          detail: { projectId, type: 'application' } 
        }));
      },
      onError: (error) => {
        // 에러는 useProjectActions 훅에서 처리됨
      }
    });
  };

  // 진행 프로젝트 취소 핸들러 (개설자 전용)
  const handleProgressingProjectCancel = async () => {
    if (!progressingProjects || progressingProjects.length === 0) {
      alert('취소할 진행 프로젝트가 없습니다.');
      return;
    }

    const project = progressingProjects[0];
    const projectId = project.id;
    const memberCount = project.memberBriefs?.length || project.memberCount || 0;
    
    // 팀원이 1명이라도 있으면 취소 불가능
    if (memberCount >= 2 || (project.memberBriefs && project.memberBriefs.length > 1)) {
      alert('팀원이 있는 프로젝트는 취소할 수 없습니다.');
      return;
    }

    const success = await cancelProgressingProject(projectId, {
      showConfirm: false,
      onSuccess: async (result) => {
        await fetchAllProjects();
        
        // 다른 컴포넌트에게 프로젝트 취소 알림
        window.dispatchEvent(new CustomEvent('projectCancelled', { 
          detail: { projectId, type: 'progressing' } 
        }));
      },
      onError: (error) => {
        // 에러는 useProjectActions 훅에서 처리됨
      }
    });
  };

  // 프로젝트 완료 핸들러 - 단순화된 처리 로직
  const handleProjectComplete = async () => {
    if (!progressingProjects || progressingProjects.length === 0) {
      alert('완료할 프로젝트가 없습니다.');
      return;
    }

    const project = progressingProjects[0];
    const projectId = project.id;


    // 백엔드 API 호출로 완료 처리
    const result = await completeProject(projectId, {
      onSuccess: async (apiResult, completionResult) => {
        
        // 상태 초기화
        setProjectCompletionState(prev => {
          const newState = { ...prev };
          delete newState[projectId];
          return newState;
        });
        
        // 항상 데이터 새로고침
        await fetchAllProjects();
        await fetchCompletedProjects(); // 완료된 프로젝트도 새로고침
      },
      onError: (error, errorResult) => {
        // 에러 발생시에도 새로고침
        fetchAllProjects();
        fetchCompletedProjects();
        
        alert('프로젝트 완료 처리 중 오류가 발생했습니다: ' + (errorResult?.error || error.message));
      }
    });

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
    const applicants = currentProjectId
      ? projectApplicants[currentProjectId] || []
      : [];

    return (
      <ApplicantListView
        applicants={applicants}
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
      {/* 액션 에러 표시 */}
      {actionError && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          오류: {actionError}
        </div>
      )}

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
          {progressingProjects && progressingProjects.length > 0 && (
            <div className="flex gap-4">
              {/* 신청자 아이콘 + 완료 버튼 + 취소 버튼 */}
              <div className="flex gap-2">
                {progressingProjects[0] && (
                  <>
                    {/* 신청자 아이콘 - 팀장만 접근 가능 */}
                    {(() => {
                      const project = progressingProjects[0];
                      const applicantCount = projectApplicants[project.id]?.length || 0;
                      const memberCount = project.memberCount || 0;
                      
                      // 대기중인 신청자가 있는지 확인
                      const hasPendingApplicants = applicantCount > 0;
                      
                      // 팀장 권한 체크 (프로젝트 생성자와 현재 사용자 비교)
                      const isProjectLeader = user && project && (
                        project.creatorId === user.id || 
                        project.leaderId === user.id ||
                        project.userId === user.id ||
                        project.ownerId === user.id
                      );
                      
                      // 신청자 목록 접근 가능 여부
                      const canViewApplicants = isProjectLeader && hasPendingApplicants && !isAnyLoading;
                      
                      let buttonTitle = "";
                      let displayCount = applicantCount;
                      
                      if (isAnyLoading) {
                        buttonTitle = "처리 중...";
                      } else if (!isProjectLeader) {
                        buttonTitle = "팀장만 신청자 목록을 볼 수 있습니다";
                      } else if (!hasPendingApplicants) {
                        buttonTitle = "대기중인 신청자가 없습니다";
                      } else {
                        buttonTitle = `신청자 승인/거절 (${displayCount}명 대기중)`;
                      }
                      
                      return (
                        <button
                          onClick={canViewApplicants ? () => handleApplicantIconClick(project.id) : undefined}
                          disabled={!canViewApplicants}
                          className={`w-[58px] h-[58px] rounded-full flex items-center justify-center text-sm font-bold text-white transition-transform ${
                            canViewApplicants
                              ? 'hover:scale-105 cursor-pointer' 
                              : 'cursor-not-allowed opacity-50'
                          }`}
                          style={{ backgroundColor: canViewApplicants ? "#6366F1" : "#9CA3AF" }}
                          title={buttonTitle}
                        >
                          <UserIcon className="w-6 h-6 text-white" />
                        </button>
                      );
                    })()}
                    
                    {/* 완료 버튼 - 단순화된 로직 */}
                    {(() => {
                      const project = progressingProjects[0];
                      const projectId = project.id;
                      const memberCount = project.memberBriefs?.length || project.memberCount || 0;
                      
                      // 현재 사용자가 신청 중인 상태인지 확인 (아직 승인되지 않음)
                      const isApplicant = appliedProjects && appliedProjects.length > 0 && 
                        appliedProjects.some(applied => applied.id === projectId);
                      
                      // 승인된 팀원이 있는지 확인 (멤버수가 2명 이상이면 팀장 외에 팀원이 있다는 뜻)
                      const hasApprovedMembers = memberCount >= 2;
                      
                      // 완료 버튼 접근 권한 체크
                      const canAccessCompleteButton = !isApplicant && isAuthenticated && hasApprovedMembers;
                      
                      if (!canAccessCompleteButton) {
                        return null; // 신청자이거나 권한이 없으면 완료 버튼 표시 안함
                      }
                      
                      // 단순한 완료 버튼
                      return (
                        <div className="flex flex-col items-center gap-1">
                          <button
                            onClick={handleProjectComplete}
                            disabled={isAnyLoading}
                            className={`w-[58px] h-[58px] rounded-full bg-green-500 hover:bg-green-600 
                             flex items-center justify-center transition-all hover:scale-105
                             ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            title={isAnyLoading ? "처리 중..." : "프로젝트 완료"}
                          >
                            {isAnyLoading ? (
                              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            ) : (
                              <CheckCircleIcon className="w-7 h-7 text-white" />
                            )}
                          </button>
                          <span className="text-xs text-green-600 font-medium">
                            완료
                          </span>
                        </div>
                      );
                    })()}
                    
                    {/* 취소 버튼 - 조건부 표시 */}
                    {(() => {
                      const project = progressingProjects[0];
                      const memberCount = project.memberBriefs?.length || project.memberCount || 0;
                      
                      // 승인된 팀원이 있으면 취소 버튼 숨김 (팀장 혼자인 경우에만 취소 가능)
                      const hasApprovedMembers = memberCount >= 2;
                      
                      if (hasApprovedMembers) {
                        return null; // 팀원이 있으면 취소 버튼 숨김
                      }
                      
                      return (
                        <button
                          onClick={handleProgressingProjectCancel}
                          disabled={isAnyLoading}
                          className={`w-[58px] h-[58px] rounded-full bg-white border-2 border-red-600 text-red-600 
                           hover:bg-red-600 hover:text-white transition-all hover:scale-105 flex items-center justify-center
                           ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                          title={isAnyLoading ? "처리 중..." : "프로젝트 취소"}
                        >
                          {isAnyLoading ? (
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-red-600"></div>
                          ) : (
                            <XMarkIcon className="w-6 h-6" />
                          )}
                        </button>
                      );
                    })()}
                  </>
                )}
              </div>
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

      {/* 완료된 프로젝트 - 페이지네이션 */}
      {completedProjects.data.length > 0 && (
        <div className="mb-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">완료된 프로젝트</h2>
            <span className="text-sm text-gray-500">
              총 {completedProjects.totalElements}개
            </span>
          </div>
          
          {/* 프로젝트 그리드 */}
          <div className="grid grid-cols-6 gap-4 mb-6">
            {completedProjects.data.map((project, index) => (
              <div
                key={project.id || index}
                className="w-16 h-16 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center overflow-hidden hover:shadow-md transition-all cursor-pointer"
                title={`완료된 프로젝트 ${project.id}`}
              >
                {project.logoImageURL ? (
                  <img 
                    src={project.logoImageURL}
                    alt={`프로젝트 ${project.id} 로고`}
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
                  P{project.id}
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          {completedProjects.totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => handleCompletedProjectsPageChange(completedProjects.currentPage - 1)}
                disabled={completedProjects.currentPage === 0}
                className={`p-2 rounded-full ${
                  completedProjects.currentPage === 0 
                    ? 'text-gray-400 cursor-not-allowed' 
                    : 'text-gray-600 hover:bg-gray-100 cursor-pointer'
                }`}
                title="이전 페이지"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              
              <span className="text-sm text-gray-600 px-2">
                {completedProjects.currentPage + 1} / {completedProjects.totalPages}
              </span>
              
              <button
                onClick={() => handleCompletedProjectsPageChange(completedProjects.currentPage + 1)}
                disabled={completedProjects.currentPage >= completedProjects.totalPages - 1}
                className={`p-2 rounded-full ${
                  completedProjects.currentPage >= completedProjects.totalPages - 1
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
      {completedProjects.error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          완료된 프로젝트 조회 실패: {completedProjects.error}
          <button 
            onClick={() => fetchCompletedProjects(completedProjects.currentPage)}
            className="ml-2 text-red-600 underline hover:text-red-800"
          >
            다시 시도
          </button>
        </div>
      )}
    </div>
  );
}