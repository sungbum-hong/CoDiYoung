/**
 * 프로젝트 관련 유틸리티 함수들
 */
export class ProjectUtils {
  /**
   * 현재 사용자가 프로젝트 팀장인지 확인
   */
  static isProjectLeader(user, project) {
    return user && project && user.userId &&
           project.leaderInfoProjection?.managerId === user.userId;
  }

  /**
   * 프로젝트 정원 정보 계산 (API 스펙 기반)
   */
  static getCapacityInfo(project) {
    // API 스펙에 따른 정확한 필드 사용
    const memberCount = project.memberCount || 0;
    const totalCapacity = project.capacity || 0;
    const remainingSlots = totalCapacity - memberCount;
    const isCapacityFull = totalCapacity > 0 && remainingSlots <= 0;

    // 완료된 멤버 수 (API 스펙의 complicatedCount 사용)
    const completedMemberCount = project.complicatedCount || 0;

    return {
      memberCount,
      totalCapacity,
      remainingSlots,
      isCapacityFull,
      completedMemberCount
    };
  }

  /**
   * 신청자 관련 정보 계산
   */
  static getApplicantInfo(applicants, capacityInfo) {
    const applicantCount = applicants?.length || 0;
    const hasPendingApplicants = applicantCount > 0;

    return {
      applicantCount,
      hasPendingApplicants
    };
  }

  /**
   * 프로젝트 완료 진행률 계산
   */
  static getCompletionProgress(project) {
    const { memberCount, completedMemberCount } = this.getCapacityInfo(project);

    if (memberCount === 0) return { completionRate: 0, isFullyCompleted: false };

    const completionRate = completedMemberCount / memberCount;
    const isFullyCompleted = completionRate >= 1.0;

    return {
      completionRate,
      isFullyCompleted,
      completedCount: completedMemberCount,
      totalCount: memberCount
    };
  }

  /**
   * 완료 버튼 접근 권한 확인
   */
  static canAccessCompleteButton(user, project, appliedProjects, isAuthenticated) {
    if (!isAuthenticated) return false;

    const projectId = project.id;
    const isApplicant = appliedProjects && appliedProjects.length > 0 &&
      appliedProjects.some(applied => applied.id === projectId);

    const isProjectLeader = this.isProjectLeader(user, project);
    const { memberCount, isCapacityFull } = this.getCapacityInfo(project);

    // 팀장인 경우: 정원이 꽉 찼을 때만 완료 버튼 표시
    if (isProjectLeader) {
      return isCapacityFull;
    }

    // 팀원인 경우: 신청자가 아니고 팀에 소속되어 있으면 완료요청 버튼 표시
    return !isApplicant && memberCount >= 1;
  }

  /**
   * 완료 처리 결과 메시지 생성
   */
  static generateCompletionMessage(result) {
    if (!result?.success) {
      return result?.message || '완료 처리되었습니다.';
    }

    const { data, message } = result;
    const {
      userRole,
      completedMembers,
      totalMembers,
      completionRate,
      completionPercent
    } = data || {};

    const normalizedRole = (userRole || '').toUpperCase();
    const rawPercent = typeof completionPercent === 'number'
      ? completionPercent
      : (typeof completionRate === 'number' ? (completionRate <= 1 ? completionRate * 100 : completionRate) : NaN);
    const hasNumericCompletion = !Number.isNaN(rawPercent);
    const percentValue = hasNumericCompletion ? Math.min(Math.max(rawPercent, 0), 100) : 0;
    const ratioValue = percentValue / 100;

    let alertMessage = message || '완료 처리되었습니다.';

    if (hasNumericCompletion) {
      // 리더를 포함한 실제 인원 계산
      const rawCompleted = typeof completedMembers === 'number' ? completedMembers : 0;
      const rawTotal = typeof totalMembers === 'number' ? totalMembers : 0;
      const actualCompleted = rawCompleted + 1; // 리더 포함
      const actualTotal = rawTotal + 1; // 리더 포함
      const actualPercent = actualTotal > 0 ? Math.round((actualCompleted / actualTotal) * 100) : 0;

      alertMessage += `\n\n진행률: ${actualCompleted}/${actualTotal} (${actualPercent}%)`;

      if (actualPercent >= 100) {
        if (normalizedRole === 'LEADER') {
          alertMessage = '🎉 프로젝트가 완전히 완료되었습니다!\n' + alertMessage;
        } else {
          alertMessage += '\n모든 팀원의 완료 요청이 접수되었습니다. 팀장의 최종 완료를 기다립니다.';
        }
      } else if (normalizedRole === 'MEMBER') {
        alertMessage += '\n팀장의 최종 완료를 기다리고 있습니다.';
      } else {
        alertMessage += '\n일부 팀원의 완료를 기다리고 있습니다.';
      }
    }

    return alertMessage;
  }

  /**
   * 에러 메시지 정규화
   */
  static normalizeErrorMessage(error) {
    let errorMessage = error.message;

    if (errorMessage.includes('권한') || errorMessage.includes('authorization')) {
      return '프로젝트 완료 권한이 없습니다.';
    } else if (errorMessage.includes('팀원') || errorMessage.includes('모든')) {
      return '모든 팀원이 완료 버튼을 눌러야 팀장이 최종 완료할 수 있습니다.';
    }

    return errorMessage;
  }

  /**
   * 스토리지 키 또는 절대 URL을 받아 실제 이미지 URL을 반환
   * @param {string} key - 스토리지 키 또는 URL
   * @returns {string|null} 정규화된 이미지 URL
   */
  static resolveImageUrl(key) {
    if (!key || typeof key !== 'string') return null;

    const trimmed = key.trim();
    if (!trimmed) return null;

    if (/^https?:\/\//i.test(trimmed) || trimmed.startsWith('data:')) {
      return trimmed;
    }

    return `http://15.164.125.28:8080/storage/${trimmed}`;
  }

  /**
   * 멤버 객체에서 사용 가능한 이미지 URL을 추출
   * @param {Object} member - 멤버 정보 객체
   * @returns {string|null} 이미지 URL
   */
  static getMemberImageUrl(member) {
    if (!member || typeof member !== 'object') return null;

    const candidates = [
      member.profileKey,
      member.profileUrl,
      member.profileURL,
      member.avatarUrl,
      member.avatarURL,
      member.profileImage,
      member.imageUrl
    ];

    const imageKey = candidates.find((value) => typeof value === 'string' && value.trim() !== '');
    return this.resolveImageUrl(imageKey);
  }

  /**
   * 멤버 객체에서 표시할 이름을 추출
   * @param {Object} member - 멤버 정보 객체
   * @returns {string} 멤버 이름
   */
  static getMemberDisplayName(member) {
    if (!member || typeof member !== 'object') return '';

    return (
      member.name ??
      member.nickname ??
      member.userName ??
      member.username ??
      member.displayName ??
      ''
    );
  }

  /**
   * 리더 정보를 포함한 표시용 멤버 목록 생성
   * @param {Object} project - 프로젝트 데이터
   * @param {Object} options - 옵션
   * @param {boolean} options.includeLeader - 리더 포함 여부 (기본 true)
   * @returns {Array<Object>} 표시용 멤버 목록
   */
  static getDisplayMembers(project, options = {}) {
    if (!project || typeof project !== 'object') {
      return [];
    }

    const { includeLeader = true } = options;
    const members = Array.isArray(project.memberBriefs)
      ? [...project.memberBriefs]
      : [];

    if (includeLeader && project.leaderInfoProjection) {
      const leaderImage = project.leaderInfoProjection.avatarURL;
      const leaderId = project.leaderInfoProjection.managerId;

      const leaderName =
        project.leaderInfoProjection.managerName ??
        project.leaderInfoProjection.name ??
        project.leaderName ??
        project.leader ??
        project.managerName ??
        '팀장';

      members.unshift({
        userId: leaderId,
        name: leaderName,
        avatarURL: leaderImage,
        isLeader: true
      });
    }

    return members;
  }
}
