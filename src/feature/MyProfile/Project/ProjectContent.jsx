import { UserIcon, CheckCircleIcon, XMarkIcon, ClockIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import ProjectCreateForm from "./ProjectCreateForm";
import ApplicantListView from "./components/ApplicantListView";
import ProjectCard from "../components/ProjectCard.jsx";
import { useProjectData } from "../hooks/useProjectData.js";
import { useApplicantData } from "../hooks/useApplicantData.js";
import { useProjectNavigation } from "../hooks/useProjectNavigation.js";
import { useProjectActions } from "../hooks/useProjectActions.js";
import { useAuthState } from "../../../hooks/useAuth.js";

export default function ProjectContent() {
  // 프로젝트 완료 상태 관리
  const [projectCompletionState, setProjectCompletionState] = useState({});
  
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

  // 프로젝트 데이터가 로드된 후 신청자 데이터 조회
  useEffect(() => {
    if (progressingProjects.length > 0) {
      fetchMultipleProjectApplicants(progressingProjects);
    }
  }, [progressingProjects]);

  // 신청 프로젝트 취소 핸들러
  const handleAppliedProjectCancel = async () => {
    if (!appliedProjects || appliedProjects.length === 0) {
      alert('취소할 신청 프로젝트가 없습니다.');
      return;
    }

    const projectId = appliedProjects[0].id;
    console.log('=== 신청 프로젝트 취소 시작 ===');
    console.log('취소할 프로젝트 ID:', projectId);
    console.log('프로젝트 정보:', appliedProjects[0]);

    const success = await cancelProjectApplication(projectId, {
      onSuccess: async (result) => {
        console.log('취소 성공, 데이터 새로고침 중...');
        // fetchAllProjects로 데이터 새로고침
        await fetchAllProjects();
        console.log('데이터 새로고침 완료');
      },
      onError: (error) => {
        console.error('취소 실패:', error);
      }
    });

    if (success) {
      console.log('신청 프로젝트 취소 완료');
    }
  };

  // 진행 프로젝트 취소 핸들러
  const handleProgressingProjectCancel = async () => {
    if (!progressingProjects || progressingProjects.length === 0) {
      alert('취소할 진행 프로젝트가 없습니다.');
      return;
    }

    const projectId = progressingProjects[0].id;
    console.log('=== 진행 프로젝트 취소 시작 ===');
    console.log('취소할 프로젝트 ID:', projectId);
    console.log('프로젝트 정보:', progressingProjects[0]);

    const success = await cancelProgressingProject(projectId, {
      onSuccess: async (result) => {
        console.log('진행 프로젝트 취소 성공, 데이터 새로고침 중...');
        await fetchAllProjects();
        console.log('데이터 새로고침 완료');
      },
      onError: (error) => {
        console.error('진행 프로젝트 취소 실패:', error);
      }
    });

    if (success) {
      console.log('진행 프로젝트 취소 완료');
    }
  };

  // 프로젝트 완료 핸들러 (백엔드 의존적 처리)
  const handleProjectComplete = async () => {
    if (!progressingProjects || progressingProjects.length === 0) {
      alert('완료할 프로젝트가 없습니다.');
      return;
    }

    const project = progressingProjects[0];
    const projectId = project.id;

    console.log('=== 프로젝트 완료 처리 시작 ===');
    console.log('프로젝트 ID:', projectId);
    console.log('현재 사용자 역할: 백엔드에서 자동 판단');

    // 백엔드에서 완료 처리 (명세서대로)
    const result = await completeProject(projectId, {
      onSuccess: async (apiResult, completionResult) => {
        console.log('프로젝트 완료 처리 성공:', apiResult);
        console.log('완료 상태:', completionResult);
        
        // 완료 상태에 따른 UI 업데이트
        if (completionResult.isWaiting) {
          // 대기 상태로 표시
          setProjectCompletionState(prev => ({
            ...prev,
            [projectId]: {
              status: 'waiting',
              message: completionResult.message,
              timestamp: new Date().toISOString()
            }
          }));
        } else if (completionResult.isCompleted) {
          // 완료된 경우 - 프로젝트 목록에서 제거됨
          setProjectCompletionState(prev => {
            const newState = { ...prev };
            delete newState[projectId];
            return newState;
          });
        }
        
        await fetchAllProjects();
        console.log('데이터 새로고침 완료');
      },
      onError: (error, errorResult) => {
        console.error('프로젝트 완료 처리 실패:', error);
        console.error('에러 상세:', errorResult);
        
        // 에러 상태 설정
        setProjectCompletionState(prev => ({
          ...prev,
          [projectId]: {
            status: 'error',
            message: errorResult.error || error.message,
            timestamp: new Date().toISOString()
          }
        }));
      }
    });

    console.log('프로젝트 완료 처리 결과:', result);
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
                    
                    {/* 완료 버튼 - 승인된 팀원이 있을 때만 표시 */}
                    {(() => {
                      const project = progressingProjects[0];
                      const projectId = project.id;
                      const applicantCount = projectApplicants[projectId]?.length || 0;
                      const memberCount = project.memberCount || 0;
                      
                      // 승인된 팀원이 있는지 확인 (멤버수가 1보다 크면 팀장 외에 팀원이 있다는 뜻)
                      const hasApprovedMembers = memberCount > 1;
                      const completionState = projectCompletionState[projectId];
                      
                      if (!hasApprovedMembers) return null; // 승인된 팀원이 없으면 완료 버튼 표시 안함
                      
                      // 완료 상태에 따른 버튼 렌더링
                      if (completionState?.status === 'waiting') {
                        // 팀원이 완료하고 팀장 완료 대기 중
                        return (
                          <div className="flex flex-col items-center gap-1">
                            <button
                              disabled={true}
                              className="w-[58px] h-[58px] rounded-full bg-orange-400 
                               flex items-center justify-center cursor-not-allowed"
                              title="팀장의 최종 완료를 기다리는 중입니다"
                            >
                              <ClockIcon className="w-7 h-7 text-white animate-pulse" />
                            </button>
                            <span className="text-xs text-orange-600 font-medium">대기중</span>
                          </div>
                        );
                      } else if (completionState?.status === 'error') {
                        // 완료 처리 중 에러 발생
                        return (
                          <div className="flex flex-col items-center gap-1">
                            <button
                              onClick={handleProjectComplete}
                              disabled={isAnyLoading}
                              className={`w-[58px] h-[58px] rounded-full bg-red-500 hover:bg-red-600 
                               flex items-center justify-center transition-all hover:scale-105
                               ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                              title={`완료 실패: ${completionState.message}`}
                            >
                              {isAnyLoading ? (
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                              ) : (
                                <XMarkIcon className="w-7 h-7 text-white" />
                              )}
                            </button>
                            <span className="text-xs text-red-600 font-medium">재시도</span>
                          </div>
                        );
                      } else {
                        // 일반 완료 버튼 - 백엔드에서 팀장/팀원 구분하여 처리
                        return (
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
                        );
                      }
                    })()}
                    
                    {/* 취소 버튼 - 조건부 표시 */}
                    {(() => {
                      const project = progressingProjects[0];
                      const memberCount = project.memberCount || 0;
                      
                      // 승인된 팀원이 있으면 취소 버튼 숨김 (팀장 혼자인 경우에만 취소 가능)
                      const hasApprovedMembers = memberCount > 1;
                      
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

      {/* 프로젝트 - 페이지네이션 */}
      <div>
        <h2 className="text-sm font-semibold mb-3">프로젝트</h2>
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}