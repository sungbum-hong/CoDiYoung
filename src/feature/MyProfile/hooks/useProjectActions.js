import { useState, useCallback } from 'react';
import { ProjectService } from '../../../services/projectService.js';

/**
 * 프로젝트 액션 관련 훅 (취소, 완료 등)
 * 
 * @returns {Object} 프로젝트 액션 함수들과 상태
 */
export function useProjectActions() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * 프로젝트 신청 취소
   * @param {number} projectId - 취소할 프로젝트 ID
   * @param {Object} options - 옵션
   * @param {boolean} options.showConfirm - 확인 창 표시 여부 (기본: true)
   * @param {function} options.onSuccess - 성공 시 콜백 함수
   * @param {function} options.onError - 실패 시 콜백 함수
   * @returns {Promise<boolean>} 성공 여부
   */
  const cancelProjectApplication = useCallback(async (projectId, options = {}) => {
    const {
      showConfirm = true,
      onSuccess,
      onError
    } = options;

    try {
      // 확인 창 표시
      if (showConfirm) {
        const confirmed = window.confirm('프로젝트 신청을 취소하시겠습니까?\n취소 후에는 다시 신청해야 합니다.');
        if (!confirmed) {
          return false; // 사용자가 취소한 경우
        }
      }

      setIsLoading(true);
      setError(null);

      console.log('=== 프로젝트 신청 취소 시작 ===');
      console.log('프로젝트 ID:', projectId);

      // ProjectService를 통한 취소 API 호출
      const result = await ProjectService.cancelProjectApplication(projectId);
      
      console.log('=== 프로젝트 신청 취소 성공 ===');
      console.log('취소 결과:', result);

      // 성공 콜백 호출
      if (onSuccess) {
        await onSuccess(result);
      }

      // 성공 알림
      alert('프로젝트 신청이 취소되었습니다.');
      
      return true;
    } catch (error) {
      console.error('=== 프로젝트 신청 취소 실패 ===');
      console.error('에러:', error);
      
      setError(error.message);
      
      // 실패 콜백 호출
      if (onError) {
        onError(error);
      } else {
        // 기본 에러 처리
        alert(`프로젝트 신청 취소에 실패했습니다.\n${error.message}`);
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * 진행 중인 프로젝트 취소 (팀장이 프로젝트 자체를 취소)
   * @param {number} projectId - 취소할 프로젝트 ID
   * @param {Object} options - 옵션
   * @returns {Promise<boolean>} 성공 여부
   */
  const cancelProgressingProject = useCallback(async (projectId, options = {}) => {
    const {
      showConfirm = true,
      onSuccess,
      onError
    } = options;

    try {
      if (showConfirm) {
        const confirmed = window.confirm(
          '진행 중인 프로젝트를 취소하시겠습니까?\n' +
          '프로젝트가 취소되면 모든 신청자에게 알림이 전송됩니다.\n' +
          '이 작업은 되돌릴 수 없습니다.'
        );
        if (!confirmed) {
          return false;
        }
      }

      setIsLoading(true);
      setError(null);

      console.log('=== 진행 프로젝트 취소 시작 ===');
      console.log('프로젝트 ID:', projectId);

      // 진행 프로젝트 취소는 별도 API가 필요할 수 있음
      // 현재는 신청 취소와 동일한 API 사용
      const result = await ProjectService.cancelProjectApplication(projectId);
      
      console.log('=== 진행 프로젝트 취소 성공 ===');
      
      if (onSuccess) {
        await onSuccess(result);
      }

      alert('프로젝트가 취소되었습니다.');
      
      return true;
    } catch (error) {
      console.error('=== 진행 프로젝트 취소 실패 ===');
      console.error('에러:', error);
      
      setError(error.message);
      
      if (onError) {
        onError(error);
      } else {
        alert(`프로젝트 취소에 실패했습니다.\n${error.message}`);
      }
      
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * 프로젝트 완료 처리
   * @param {number} projectId - 완료할 프로젝트 ID
   * @param {Object} options - 옵션
   * @returns {Promise<Object>} 완료 결과 { success: boolean, isWaiting?: boolean, message?: string }
   */
  const completeProject = useCallback(async (projectId, options = {}) => {
    const {
      showConfirm = true,
      onSuccess,
      onError
    } = options;

    try {
      if (showConfirm) {
        const confirmed = window.confirm(
          '프로젝트를 완료 처리하시겠습니까?\n\n' +
          '• 팀원: 완료 버튼을 누르면 팀장의 최종 완료를 기다립니다.\n' +
          '• 팀장: 모든 팀원이 완료한 후에만 최종 완료할 수 있습니다.\n\n' +
          '계속하시겠습니까?'
        );
        if (!confirmed) {
          return { success: false, cancelled: true };
        }
      }

      setIsLoading(true);
      setError(null);

      console.log('=== 프로젝트 완료 처리 시작 ===');
      console.log('프로젝트 ID:', projectId);

      const result = await ProjectService.completeProject(projectId);
      
      console.log('=== 프로젝트 완료 처리 성공 ===');
      console.log('완료 결과 (전체):', result);
      console.log('결과 타입:', typeof result);
      console.log('결과가 객체인가?', result && typeof result === 'object');
      console.log('result.message:', result?.message);
      console.log('result.data:', result?.data);
      console.log('result 키들:', result ? Object.keys(result) : 'null/undefined');

      // OpenAPI 명세서 기준 응답 처리 (ProjectCompleteResponse)
      let completionResult = { success: true };
      
      console.log('응답 구조 분석:');
      console.log('- result.success:', result?.success);
      console.log('- result.status:', result?.status);
      console.log('- result.message:', result?.message);
      console.log('- result.data:', result?.data);
      
      // OpenAPI 명세서 구조에 맞는 응답 처리
      if (result && typeof result === 'object' && result.success !== undefined) {
        // 명세서 구조: { success, status, message, data: { userRole, completedMembers, totalMembers, completionRate } }
        const { success, status, message, data } = result;
        
        console.log('OpenAPI 응답 구조 감지됨');
        console.log('- 사용자 역할:', data?.userRole);
        console.log('- 완료한 멤버:', data?.completedMembers);
        console.log('- 전체 멤버:', data?.totalMembers);
        console.log('- 완료율:', data?.completionRate);
        
        if (success) {
          // 완료율 기반 상태 판단
          const completionRate = data?.completionRate || 0;
          const userRole = data?.userRole || '';
          const completedMembers = data?.completedMembers || 0;
          const totalMembers = data?.totalMembers || 0;
          
          if (completionRate >= 1.0 || completionRate === 100) {
            // 100% 완료 - 프로젝트 완전 완료
            completionResult = {
              success: true,
              isCompleted: true,
              message: '🎉 프로젝트가 완전히 완료되었습니다!',
              data: { userRole, completedMembers, totalMembers, completionRate }
            };
            console.log('→ 완전 완료 상태 (100%)');
          } else if (userRole.toLowerCase() === 'member' || userRole.toLowerCase() === 'participant') {
            // 팀원이 완료한 경우 - 팀장의 최종 완료 대기
            completionResult = {
              success: true,
              isWaiting: true,
              message: `✅ 완료 처리되었습니다. 팀장의 최종 완료를 기다리고 있습니다.\n(${completedMembers}/${totalMembers}명 완료, ${Math.round(completionRate * 100)}%)`,
              data: { userRole, completedMembers, totalMembers, completionRate }
            };
            console.log('→ 팀원 완료 대기 상태');
          } else if (userRole.toLowerCase() === 'leader' || userRole.toLowerCase() === 'owner') {
            // 팀장의 경우
            if (completedMembers < totalMembers) {
              completionResult = {
                success: true,
                isPartial: true,
                message: `⏳ 일부 팀원의 완료를 기다리고 있습니다.\n(${completedMembers}/${totalMembers}명 완료, ${Math.round(completionRate * 100)}%)`,
                data: { userRole, completedMembers, totalMembers, completionRate }
              };
              console.log('→ 팀장 - 일부 완료 상태');
            } else {
              completionResult = {
                success: true,
                isCompleted: true,
                message: '🎉 모든 팀원이 완료했습니다! 프로젝트가 완전히 완료되었습니다!',
                data: { userRole, completedMembers, totalMembers, completionRate }
              };
              console.log('→ 팀장 - 최종 완료 상태');
            }
          } else {
            // 기본 상태
            completionResult = {
              success: true,
              message: message || '완료 처리되었습니다.',
              data: { userRole, completedMembers, totalMembers, completionRate }
            };
            console.log('→ 기본 완료 상태');
          }
        } else {
          completionResult = {
            success: false,
            message: message || '완료 처리에 실패했습니다.'
          };
          console.log('→ 실패 상태');
        }
      } else {
        // 기존 문자열 응답 처리 (하위 호환성)
        const responseMessage = result?.message || result?.data?.message || result || '';
        console.log('기존 방식 응답 처리:', responseMessage);
        
        if (responseMessage && typeof responseMessage === 'string') {
          const message = responseMessage.toLowerCase();
          
          if (message.includes('대기') || message.includes('waiting') || message.includes('팀장')) {
            completionResult = {
              success: true,
              isWaiting: true,
              message: '완료 처리되었습니다. 팀장의 최종 완료를 기다리고 있습니다.'
            };
          } else if (message.includes('완료') || message.includes('complete')) {
            completionResult = {
              success: true,
              isCompleted: true,
              message: '프로젝트가 완전히 완료되었습니다!'
            };
          } else if (message.includes('이미') || message.includes('already')) {
            completionResult = {
              success: true,
              alreadyCompleted: true,
              message: '이미 완료 처리된 프로젝트입니다.'
            };
          } else {
            completionResult.message = responseMessage;
          }
        } else {
          completionResult.message = '완료 처리되었습니다.';
        }
      }
      
      console.log('최종 completionResult:', completionResult);

      if (onSuccess) {
        await onSuccess(result, completionResult);
      }

      // 사용자에게 적절한 메시지 표시
      console.log('Alert 표시 시작...');
      
      // Alert 차단 대비용 강제 표시 (OpenAPI 데이터 포함)
      let alertMessage = '';
      if (completionResult.isWaiting) {
        console.log('대기 상태 Alert 표시');
        alertMessage = completionResult.message;
      } else if (completionResult.isCompleted) {
        console.log('완료 상태 Alert 표시');
        alertMessage = completionResult.message;
      } else if (completionResult.isPartial) {
        console.log('부분 완료 상태 Alert 표시');
        alertMessage = completionResult.message;
      } else if (completionResult.alreadyCompleted) {
        console.log('이미 완료 상태 Alert 표시');
        alertMessage = 'ℹ️ ' + completionResult.message;
      } else {
        console.log('기본 Alert 표시:', completionResult.message);
        alertMessage = completionResult.message;
      }
      
      // 여러 방법으로 메시지 표시 시도
      try {
        console.log('Alert 시도 1: alert() 함수');
        alert(alertMessage);
      } catch (e) {
        console.log('Alert 실패, 대안 시도:', e);
        // alert이 차단된 경우 콘솔에 크게 표시
        console.log(
          '%c' + alertMessage,
          'background: #4CAF50; color: white; padding: 10px 20px; font-size: 16px; font-weight: bold;'
        );
        
        // 확인을 위한 confirm도 시도
        try {
          const confirmed = confirm(alertMessage + '\n\n(확인을 누르세요)');
          console.log('Confirm 결과:', confirmed);
        } catch (e2) {
          console.log('Confirm도 차단됨:', e2);
        }
      }
      
      console.log('Alert 표시 완료');
      
      return completionResult;
    } catch (error) {
      console.error('=== 프로젝트 완료 처리 실패 ===');
      console.error('에러:', error);
      
      setError(error.message);
      
      // 에러 메시지 분석해서 적절한 피드백 제공
      let errorMessage = error.message;
      if (errorMessage.includes('권한') || errorMessage.includes('authorization')) {
        errorMessage = '프로젝트 완료 권한이 없습니다.';
      } else if (errorMessage.includes('not found')) {
        errorMessage = '프로젝트를 찾을 수 없습니다.';
      } else if (errorMessage.includes('이미')) {
        errorMessage = '이미 완료된 프로젝트입니다.';
      } else if (errorMessage.includes('팀원') || errorMessage.includes('모든') || errorMessage.includes('완료')) {
        errorMessage = '모든 팀원이 완료 버튼을 눌러야 팀장이 최종 완료할 수 있습니다.';
      } else if (errorMessage.includes('member') || errorMessage.includes('complete') || errorMessage.includes('all')) {
        errorMessage = '모든 팀원이 완료 버튼을 눌러야 팀장이 최종 완료할 수 있습니다.';
      }
      
      const errorResult = { success: false, error: errorMessage };
      
      if (onError) {
        console.log('onError 콜백 호출');
        onError(error, errorResult);
      } else {
        console.log('에러 Alert 표시:', errorMessage);
        alert(`❌ 프로젝트 완료 처리에 실패했습니다.\n${errorMessage}`);
      }
      
      return errorResult;
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * 에러 상태 초기화
   */
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  /**
   * 로딩 상태 초기화
   */
  const clearLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    // 액션 함수들
    cancelProjectApplication,
    cancelProgressingProject,
    completeProject,
    
    // 상태
    isLoading,
    error,
    
    // 유틸리티 함수들
    clearError,
    clearLoading
  };
}