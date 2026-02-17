import { UserIcon, CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { ProjectUtils } from "../utils/ProjectUtils";
import { BUTTON_COLORS, BUTTON_SIZES, ANIMATIONS, TEXT_COLORS, ICON_SIZES } from "../constants/ProjectConstants";

export default function ProjectIcons({
  project,
  user,
  projectApplicants,
  appliedProjects,
  isAuthenticated,
  isAnyLoading,
  memberCompletionRequests,
  setMemberCompletionRequests,
  completeProjectAsync,
  onApplicantIconClick,
  onComplete,
  onCancel,
  refetchAllProjects
}: {
  project: any;
  user: any;
  projectApplicants: any;
  appliedProjects: any[];
  isAuthenticated: boolean;
  isAnyLoading: boolean;
  memberCompletionRequests: Record<string, boolean>;
  setMemberCompletionRequests: (fn: (prev: Record<string, boolean>) => Record<string, boolean>) => void;
  completeProjectAsync: (projectId: any) => Promise<any>;
  onApplicantIconClick: (projectId: any) => void;
  onComplete: (projectId: any) => void;
  onCancel: (projectId: any) => void;
  refetchAllProjects: () => void;
}) {
  if (!project) return null;

  const isProjectLeader = ProjectUtils.isProjectLeader(user, project);
  const capacityInfo = ProjectUtils.getCapacityInfo(project);
  const applicantInfo = ProjectUtils.getApplicantInfo(projectApplicants, capacityInfo);

  // 팀원이 완료요청을 보낸 상태인지 확인
  const hasMemberCompletionRequest = project.currentUserStatus === 'COMPLICATED' ||
                                     project.currentUserStatus === 'WAITING' ||
                                     project.complicatedCount > 0;

  // 팀장을 제외한 팀원 수 계산 (memberCount에는 팀장도 포함되어 있음)
  const teamMemberCount = capacityInfo.memberCount - 1;

  return (
    <div className="flex gap-2">
      {/* 신청자 아이콘 - 팀원이 1명이라도 있으면 숨김 */}
      {teamMemberCount === 0 && (
        <ApplicantIcon
          project={project}
          isProjectLeader={isProjectLeader}
          capacityInfo={capacityInfo}
          applicantInfo={applicantInfo}
          isAnyLoading={isAnyLoading}
          onApplicantIconClick={onApplicantIconClick}
        />
      )}

      {/* 완료 버튼 - 팀원이 1명이라도 있으면 표시 */}
      {teamMemberCount > 0 && (
        <CompleteButton
          project={project}
          user={user}
          isProjectLeader={isProjectLeader}
          appliedProjects={appliedProjects}
          isAuthenticated={isAuthenticated}
          isAnyLoading={isAnyLoading}
          memberCompletionRequests={memberCompletionRequests}
          setMemberCompletionRequests={setMemberCompletionRequests}
          completeProjectAsync={completeProjectAsync}
          onComplete={onComplete}
          refetchAllProjects={refetchAllProjects}
          hasMemberCompletionRequest={hasMemberCompletionRequest}
          teamMemberCount={teamMemberCount}
        />
      )}

      {/* 취소 버튼 - 팀원이 1명도 없을 때만 표시 */}
      {teamMemberCount === 0 && (
        <CancelButton
          project={project}
          isProjectLeader={isProjectLeader}
          capacityInfo={capacityInfo}
          isAnyLoading={isAnyLoading}
          onCancel={onCancel}
        />
      )}
    </div>
  );
}

// 신청자 아이콘 컴포넌트
function ApplicantIcon({
  project,
  isProjectLeader,
  capacityInfo,
  applicantInfo,
  isAnyLoading,
  onApplicantIconClick
}: {
  project: any;
  isProjectLeader: boolean;
  capacityInfo: any;
  applicantInfo: any;
  isAnyLoading: boolean;
  onApplicantIconClick: (projectId: any) => void;
}) {
  const { isCapacityFull, totalCapacity, memberCount, remainingSlots } = capacityInfo;
  const { applicantCount, hasPendingApplicants } = applicantInfo;

  // 팀원일 때만 아이콘 숨김 (팀장은 항상 보임)
  if (!isProjectLeader) {
    return null;
  }

  // 정원이 꽉 찼을 때는 아이콘 숨김
  if (isCapacityFull) {
    return null;
  }

  const canViewApplicants = isProjectLeader && hasPendingApplicants && !isAnyLoading;

  let buttonTitle = "";
  if (isAnyLoading) {
    buttonTitle = "처리 중...";
  } else if (!isProjectLeader) {
    buttonTitle = "팀장만 신청자 목록을 볼 수 있습니다";
  } else if (isCapacityFull) {
    buttonTitle = `정원 마감 (정원: ${totalCapacity}명, 현재: ${memberCount}명)`;
  } else if (!hasPendingApplicants) {
    buttonTitle = "대기중인 신청자가 없습니다";
  } else {
    buttonTitle = `신청자 승인/거절 (${applicantCount}명 대기중, 남은자리: ${remainingSlots}명)`;
  }

  return (
    <button
      onClick={canViewApplicants ? () => onApplicantIconClick(project.id) : undefined}
      disabled={!canViewApplicants}
      className={`${BUTTON_SIZES.ICON} rounded-full flex items-center justify-center text-sm font-bold ${TEXT_COLORS.WHITE} ${ANIMATIONS.TRANSITION} ${
        canViewApplicants
          ? `${ANIMATIONS.HOVER_SCALE} cursor-pointer`
          : 'cursor-not-allowed opacity-50'
      }`}
      style={{
        backgroundColor: canViewApplicants
          ? BUTTON_COLORS.APPLICANT_ACTIVE
          : BUTTON_COLORS.APPLICANT_DISABLED
      }}
      title={buttonTitle}
    >
      <UserIcon className={`${ICON_SIZES.MEDIUM} ${TEXT_COLORS.WHITE}`} />
    </button>
  );
}

// 완료 버튼 컴포넌트
function CompleteButton({
  project,
  user,
  isProjectLeader,
  appliedProjects,
  isAuthenticated,
  isAnyLoading,
  memberCompletionRequests,
  setMemberCompletionRequests,
  completeProjectAsync,
  onComplete,
  refetchAllProjects,
  hasMemberCompletionRequest,
  teamMemberCount
}: {
  project: any;
  user: any;
  isProjectLeader: boolean;
  appliedProjects: any[];
  isAuthenticated: boolean;
  isAnyLoading: boolean;
  memberCompletionRequests: Record<string, boolean>;
  setMemberCompletionRequests: (fn: (prev: Record<string, boolean>) => Record<string, boolean>) => void;
  completeProjectAsync: (projectId: any) => Promise<any>;
  onComplete: (projectId: any) => void;
  refetchAllProjects: () => void;
  hasMemberCompletionRequest: boolean;
  teamMemberCount: number;
}) {
  // 팀원이 1명이라도 있으면 완료 버튼 표시 (팀장/팀원 모두)
  // 인증되지 않은 사용자는 제외
  if (!isAuthenticated || teamMemberCount === 0) {
    return null;
  }

  const projectId = project.id;
  const currentStatus = (project?.currentUserStatus || '').toUpperCase();
  const hasRequestedCompletion = memberCompletionRequests[projectId] || currentStatus === 'WAITING';
  const isMemberCompleted = !isProjectLeader && currentStatus === 'COMPLETED';

  const handleMemberCompletionRequest = async () => {
    try {
      const result = await completeProjectAsync(projectId);
      

      // 성공 시 상태 업데이트
      setMemberCompletionRequests(prev => ({
        ...prev,
        [projectId]: true
      }));

      const responseData = result?.data || {};
      const {
        completedMembers,
        totalMembers,
        completionRate,
        completionPercent,
        status
      } = responseData;

      const normalizedPercent = typeof completionPercent === 'number'
        ? completionPercent
        : (typeof completionRate === 'number'
            ? (completionRate > 1 ? completionRate : completionRate * 100)
            : NaN);

      const hasProgressNumbers =
        typeof completedMembers === 'number' &&
        typeof totalMembers === 'number' &&
        !Number.isNaN(normalizedPercent);

      // 리더를 포함한 실제 인원 계산
      const actualCompletedMembers = hasProgressNumbers ? completedMembers + 1 : 0; // 리더 포함
      const actualTotalMembers = hasProgressNumbers ? totalMembers + 1 : 0; // 리더 포함
      const actualProgressPercent = actualTotalMembers > 0
        ? Math.round((actualCompletedMembers / actualTotalMembers) * 100)
        : 0;

      const progressText = hasProgressNumbers
        ? `\n\n진행률: ${actualCompletedMembers}/${actualTotalMembers} (${actualProgressPercent}%)`
        : '';

      const statusText = status ? `\n현재 상태: ${status}` : '';

      const baseMessage = result?.message || '완료 요청이 전송되었습니다.';
      alert(`${baseMessage}${progressText}\n팀장의 최종 완료를 기다려주세요.${statusText}`);

      const normalizedRole = (responseData.userRole || '').toUpperCase();
      const normalizedStatus = (result?.status || '').toUpperCase();

      if (normalizedRole === 'LEADER' || normalizedStatus === 'COMPLETED') {
        refetchAllProjects();
      }
    } catch (error: any) {
      alert(`완료 요청 전송에 실패했습니다.\n${error.message}`);
    }
  };

  const buttonTitle = isProjectLeader
    ? (isAnyLoading ? "처리 중..." : hasMemberCompletionRequest ? "팀원 완료요청 승인 (최종완료)" : "프로젝트 최종 완료")
    : (isMemberCompleted
        ? "프로젝트 완료됨"
        : hasRequestedCompletion
          ? "완료 요청 완료"
          : "완료 요청 전송");

  const handleClick = isProjectLeader ? () => onComplete(projectId) : handleMemberCompletionRequest;
  const isButtonDisabled = isAnyLoading || (!isProjectLeader && (hasRequestedCompletion || isMemberCompleted));

  return (
    <div className="flex flex-col items-center gap-1">
      <button
        onClick={handleClick}
        disabled={isButtonDisabled}
        className={`${BUTTON_SIZES.ICON} rounded-full flex items-center justify-center ${ANIMATIONS.TRANSITION} ${ANIMATIONS.HOVER_SCALE}
         ${isButtonDisabled
           ? `opacity-50 cursor-not-allowed ${BUTTON_COLORS.COMPLETE_DISABLED}`
           : BUTTON_COLORS.COMPLETE_ACTIVE
         }`}
        title={buttonTitle}
      >
        {isAnyLoading ? (
          <div className={`${ANIMATIONS.SPIN} ${ICON_SIZES.MEDIUM} border-b-2 border-white`}></div>
        ) : (
          <CheckCircleIcon className={`${ICON_SIZES.LARGE} ${TEXT_COLORS.WHITE}`} />
        )}
      </button>
      <span className={`text-xs font-medium ${
        (hasRequestedCompletion && !isProjectLeader) || isMemberCompleted
          ? TEXT_COLORS.COMPLETION_INACTIVE
          : TEXT_COLORS.COMPLETION_ACTIVE
      }`}>
        {!isProjectLeader
          ? (isMemberCompleted ? '완료됨' : hasRequestedCompletion ? '요청완료' : '완료요청')
          : (hasMemberCompletionRequest ? '최종완료' : '완료')
        }
      </span>
    </div>
  );
}

// 취소 버튼 컴포넌트
function CancelButton({
  project,
  isProjectLeader,
  capacityInfo,
  isAnyLoading,
  onCancel
}: {
  project: any;
  isProjectLeader: boolean;
  capacityInfo: any;
  isAnyLoading: boolean;
  onCancel: (projectId: any) => void;
}) {
  // 팀장이 아니면 취소 버튼 숨김
  if (!isProjectLeader) {
    return null;
  }

  return (
    <button
      onClick={() => onCancel(project.id)}
      disabled={isAnyLoading}
      className={`${BUTTON_SIZES.ICON} rounded-full bg-white border-2 ${BUTTON_COLORS.CANCEL_BORDER}
       ${ANIMATIONS.TRANSITION} ${ANIMATIONS.HOVER_SCALE} flex items-center justify-center
       ${isAnyLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      title={isAnyLoading ? "처리 중..." : "프로젝트 취소"}
    >
      {isAnyLoading ? (
        <div className={`${ANIMATIONS.SPIN} ${ICON_SIZES.SMALL} border-b-2 border-red-600`}></div>
      ) : (
        <XMarkIcon className={ICON_SIZES.MEDIUM} />
      )}
    </button>
  );
}
