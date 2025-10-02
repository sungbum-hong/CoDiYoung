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

  // 프로젝트 완료 핸들러 - 개선된 처리 로직
  const handleProjectComplete = async () => {
    if (!progressingProjects || progressingProjects.length === 0) {
      alert('완료할 프로젝트가 없습니다.');
      return;
    }

    const project = progressingProjects[0];
    const projectId = project.id;

    console.log('=== 프로젝트 완료 처리 시작 ===');
    console.log('프로젝트 ID:', projectId);
    console.log('프로젝트 정보:', project);

    // 백엔드 API 호출로 완료 처리
    const result = await completeProject(projectId, {
      onSuccess: async (apiResult, completionResult) => {
        console.log('=== 완료 처리 성공 ===');
        console.log('API 응답:', apiResult);
        console.log('처리된 결과:', completionResult);
        
        // OpenAPI 응답 구조 기반 상태 업데이트
        const { data } = apiResult || {};
        const { userRole, completedMembers, totalMembers, completionRate } = data || {};
        
        console.log(`사용자 역할: ${userRole}, 완료 멤버: ${completedMembers}/${totalMembers}, 완료율: ${Math.round((completionRate || 0) * 100)}%`);
        
        // OpenAPI 응답 기반 상태에 따른 UI 업데이트
        if (completionResult.isWaiting) {
          // 팀원이 완료하고 팀장의 최종 승인 대기
          setProjectCompletionState(prev => ({
            ...prev,
            [projectId]: {
              status: 'member_completed', // 팀원 완료 상태
              message: completionResult.message,
              userRole,
              completedMembers,
              totalMembers,
              completionRate,
              timestamp: new Date().toISOString()
            }
          }));
          
          // 팀원 완료 시에는 데이터 새로고침 하지 않음 (프로젝트가 사라지는 것을 방지)
          console.log('팀원 완료 처리 - 프로젝트 목록 유지');
          
        } else if (completionResult.isCompleted) {
          // 프로젝트 완전 완료 - 상태 초기화 후 데이터 새로고침
          setProjectCompletionState(prev => {
            const newState = { ...prev };
            delete newState[projectId];
            return newState;
          });
          
          // 최종 완료 시에만 데이터 새로고침
          await fetchAllProjects();
          console.log('프로젝트 최종 완료 - 데이터 새로고침 완료');
          
        } else if (completionResult.isPartial) {
          // 팀장 관점: 일부 팀원만 완료, 나머지 팀원들 완료 대기 중
          setProjectCompletionState(prev => ({
            ...prev,
            [projectId]: {
              status: 'waiting_members', // 팀원들 완료 대기 상태
              message: completionResult.message,
              userRole,
              completedMembers,
              totalMembers,
              completionRate,
              timestamp: new Date().toISOString()
            }
          }));
          
          // 부분 완료 시에는 데이터 새로고침 하지 않음
          console.log('팀장 부분 완료 처리 - 프로젝트 목록 유지');
          
        } else {
          // 기타 상태 - 기본 처리
          setProjectCompletionState(prev => ({
            ...prev,
            [projectId]: {
              status: 'in_progress',
              message: completionResult.message || '진행 중',
              userRole,
              completedMembers,
              totalMembers,
              completionRate,
              timestamp: new Date().toISOString()
            }
          }));
          
          // 기타 상태는 안전하게 새로고침
          await fetchAllProjects();
          console.log('기타 상태 처리 - 데이터 새로고침 완료');
        }
      },
      onError: (error, errorResult) => {
        console.error('=== 완료 처리 실패 ===');
        console.error('에러:', error);
        console.error('에러 상세:', errorResult);
        
        // 에러 상태 설정
        setProjectCompletionState(prev => ({
          ...prev,
          [projectId]: {
            status: 'error',
            message: errorResult?.error || error.message,
            timestamp: new Date().toISOString()
          }
        }));
      }
    });

    console.log('프로젝트 완료 처리 최종 결과:', result);
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
                    
                    {/* 완료 버튼 - 개선된 상태 표시 */}
                    {(() => {
                      const project = progressingProjects[0];
                      const projectId = project.id;
                      const memberCount = project.memberCount || 0;
                      const completionState = projectCompletionState[projectId];
                      
                      // 현재 사용자가 프로젝트 팀장인지 확인
                      const isProjectLeader = user && project && (
                        project.creatorId === user.id || 
                        project.leaderId === user.id ||
                        project.userId === user.id ||
                        project.ownerId === user.id
                      );
                      
                      // 현재 사용자가 신청 중인 상태인지 확인 (아직 승인되지 않음)
                      const isApplicant = appliedProjects && appliedProjects.length > 0 && 
                        appliedProjects.some(applied => applied.id === projectId);
                      
                      // 승인된 팀원이 있는지 확인 (멤버수가 1보다 크면 팀장 외에 팀원이 있다는 뜻)
                      const hasApprovedMembers = memberCount > 1;
                      
                      // 완료 버튼 접근 권한 체크 (비즈니스 로직)
                      // 1. 신청자는 완료 버튼 접근 불가
                      // 2. 반드시 승인된 팀원이 있어야 완료 가능 (팀장 혼자는 완료 불가)
                      // 3. 현재 사용자가 팀장이거나 승인된 팀원이어야 함
                      const canAccessCompleteButton = !isApplicant && hasApprovedMembers;
                      
                      // 디버그: 완료 버튼 권한 체크 정보
                      console.log('=== 완료 버튼 권한 체크 ===', {
                        canAccessCompleteButton,
                        isApplicant,
                        isProjectLeader, 
                        hasApprovedMembers,
                        memberCount,
                        userId: user?.id,
                        project: {
                          id: project?.id,
                          creatorId: project?.creatorId,
                          leaderId: project?.leaderId,
                          userId: project?.userId,
                          ownerId: project?.ownerId
                        }
                      });
                      
                      if (!canAccessCompleteButton) {
                        console.log('완료 버튼 접근 불가 - 숨김 처리');
                        return null; // 신청자이거나 권한이 없으면 완료 버튼 표시 안함
                      }
                      
                      // 완료 상태에 따른 버튼 렌더링
                      if (completionState?.status === 'member_completed') {
                        // 팀원이 완료 버튼을 눌러서 대기 상태 (개인 완료 완료)
                        const { completedMembers = 0, totalMembers = 0, completionRate = 0 } = completionState;
                        const percentage = Math.round(completionRate * 100);
                        
                        return (
                          <div className="flex flex-col items-center gap-1">
                            <button
                              disabled={true}
                              className="w-[58px] h-[58px] rounded-full bg-orange-400 
                               flex items-center justify-center cursor-not-allowed relative"
                              title={`완료 완료! 팀장의 최종 승인을 기다리는 중입니다 (${completedMembers}/${totalMembers}명 완료, ${percentage}%)`}
                            >
                              <ClockIcon className="w-7 h-7 text-white animate-pulse" />
                              <div className="absolute -bottom-1 -right-1 bg-white text-orange-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {percentage}
                              </div>
                            </button>
                            <span className="text-xs text-orange-600 font-medium">
                              완료대기 ({completedMembers}/{totalMembers})
                            </span>
                          </div>
                        );
                      } else if (completionState?.status === 'waiting_members') {
                        // 팀장 관점: 일부 팀원은 완료했지만 나머지 팀원들이 아직 완료하지 않음
                        const { completedMembers = 0, totalMembers = 0, completionRate = 0 } = completionState;
                        const percentage = Math.round(completionRate * 100);
                        const allMembersCompleted = completedMembers >= totalMembers - 1; // 팀장 제외한 모든 팀원 완료
                        
                        if (allMembersCompleted && isProjectLeader) {
                          // 모든 팀원이 완료했으면 팀장 최종 완료 버튼 활성화
                          return (
                            <div className="flex flex-col items-center gap-1">
                              <button
                                onClick={handleProjectComplete}
                                disabled={isAnyLoading}
                                className={`w-[58px] h-[58px] rounded-full bg-green-500 hover:bg-green-600 
                                 flex items-center justify-center transition-all hover:scale-105 relative
                                 ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                title={isAnyLoading ? "처리 중..." : `모든 팀원이 완료했습니다! 최종 승인하세요 (${completedMembers}/${totalMembers-1}명 완료)`}
                              >
                                {isAnyLoading ? (
                                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                ) : (
                                  <CheckCircleIcon className="w-7 h-7 text-white" />
                                )}
                                <div className="absolute -bottom-1 -right-1 bg-white text-green-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                  100
                                </div>
                              </button>
                              <span className="text-xs text-green-600 font-medium">
                                최종승인
                              </span>
                            </div>
                          );
                        } else {
                          // 아직 일부 팀원이 완료하지 않음
                          return (
                            <div className="flex flex-col items-center gap-1">
                              <button
                                disabled={true}
                                className="w-[58px] h-[58px] rounded-full bg-blue-400 
                                 flex items-center justify-center cursor-not-allowed relative"
                                title={`팀원들의 완료를 기다리는 중입니다 (${completedMembers}/${totalMembers-1}명 완료, ${percentage}%)`}
                              >
                                <ClockIcon className="w-7 h-7 text-white animate-pulse" />
                                <div className="absolute -bottom-1 -right-1 bg-white text-blue-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                  {percentage}
                                </div>
                              </button>
                              <span className="text-xs text-blue-600 font-medium">
                                대기중 ({completedMembers}/{totalMembers-1})
                              </span>
                            </div>
                          );
                        }
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
                              title={`완료 실패: ${completionState.message || '알 수 없는 오류'}`}
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
                        // 일반 완료 버튼 - 백엔드에서 역할과 상태 자동 판단
                        return (
                          <div className="flex flex-col items-center gap-1">
                            <button
                              onClick={handleProjectComplete}
                              disabled={isAnyLoading}
                              className={`w-[58px] h-[58px] rounded-full bg-green-500 hover:bg-green-600 
                               flex items-center justify-center transition-all hover:scale-105
                               ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                              title={isAnyLoading ? "처리 중..." : 
                                isProjectLeader 
                                  ? "프로젝트 완료 (팀장: 모든 팀원 완료 후 최종 승인)" 
                                  : "프로젝트 완료 (팀원: 완료 표시 후 팀장 승인 대기)"
                              }
                            >
                              {isAnyLoading ? (
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                              ) : (
                                <CheckCircleIcon className="w-7 h-7 text-white" />
                              )}
                            </button>
                            <span className="text-xs text-green-600 font-medium">완료</span>
                          </div>
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