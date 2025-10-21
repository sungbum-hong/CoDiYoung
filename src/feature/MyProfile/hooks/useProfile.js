import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { UserProfileService } from '../../../services/userProfileService.js';
import { QUERY_KEYS } from '../../../utils/queryKeys.js';
import { useCallback, useMemo } from 'react';
import { ProjectUtils } from '../Project/utils/ProjectUtils.js';

// 프로필 관련 쿼리 키 (기존 QUERY_KEYS에 추가 필요)
const PROFILE_QUERY_KEYS = {
  all: ['profile'],
  detail: () => [...PROFILE_QUERY_KEYS.all, 'detail'],
};

/**
 * 프로필 데이터 조회 훅
 * API: GET /api/mypage
 */
export function useProfile() {
  return useQuery({
    queryKey: PROFILE_QUERY_KEYS.detail(),
    queryFn: () => UserProfileService.getMyProfile(),
    staleTime: 5 * 60 * 1000, // 5분 동안 fresh
    cacheTime: 10 * 60 * 1000, // 10분 동안 캐시 유지
    retry: (failureCount, error) => {
      // 401 에러는 재시도하지 않음
      if (error?.message?.includes('401')) return false;
      return failureCount < 2;
    },
    refetchOnWindowFocus: false,
    select: (data) => {
      // API 응답 구조 그대로 사용 (nickName 유지)
      return {
        imageKey: data?.imageKey || '',
        nickName: data?.nickName || '', // API 스펙대로 nickName 유지
        email: data?.email || '',
        profileImageUrl: ProjectUtils.resolveImageUrl(data?.imageKey)
      };
    }
  });
}

/**
 * 닉네임 변경 훅
 * API: PATCH /api/mypage/nickname
 */
export function useUpdateNickname() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (nickname) => {
      if (!nickname || nickname.trim().length === 0) {
        throw new Error('닉네임을 입력해주세요.');
      }
      if (nickname.length > 20) {
        throw new Error('닉네임은 20자 이하로 입력해주세요.');
      }
      
      return UserProfileService.updateNickname({ nickname: nickname.trim() });
    },
    onMutate: async (newNickname) => {
      // Optimistic update 준비
      await queryClient.cancelQueries({
        queryKey: PROFILE_QUERY_KEYS.detail()
      });

      // 이전 데이터 백업
      const previousProfile = queryClient.getQueryData(PROFILE_QUERY_KEYS.detail());

      // Optimistic update 적용
      queryClient.setQueryData(PROFILE_QUERY_KEYS.detail(), (oldData) => ({
        ...oldData,
        nickName: newNickname.trim() // API 스펙에 맞춰 nickName 사용
      }));

      return { previousProfile };
    },
    onError: (error, variables, context) => {
      // 실패 시 이전 상태로 롤백
      if (context?.previousProfile) {
        queryClient.setQueryData(PROFILE_QUERY_KEYS.detail(), context.previousProfile);
      }
    },
    onSuccess: () => {
      // 성공 시 프로필 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: PROFILE_QUERY_KEYS.all
      });
    }
  });
}

/**
 * 이메일 변경 훅
 * API: PATCH /api/mypage/email
 */
export function useUpdateEmail() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (email) => {
      if (!email || email.trim().length === 0) {
        throw new Error('이메일을 입력해주세요.');
      }
      
      // 간단한 이메일 유효성 검사
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        throw new Error('올바른 이메일 형식이 아닙니다.');
      }
      
      return UserProfileService.updateEmail({ email: email.trim() });
    },
    onMutate: async (newEmail) => {
      await queryClient.cancelQueries({
        queryKey: PROFILE_QUERY_KEYS.detail()
      });

      const previousProfile = queryClient.getQueryData(PROFILE_QUERY_KEYS.detail());

      queryClient.setQueryData(PROFILE_QUERY_KEYS.detail(), (oldData) => ({
        ...oldData,
        email: newEmail.trim()
      }));

      return { previousProfile };
    },
    onError: (error, variables, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(PROFILE_QUERY_KEYS.detail(), context.previousProfile);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PROFILE_QUERY_KEYS.all
      });
      
      // 이메일 변경 시 재로그인이 필요할 수 있음을 알림
      console.warn('이메일 변경 완료. JWT subject가 이메일인 경우 재로그인이 필요합니다.');
    }
  });
}

/**
 * 비밀번호 변경 훅 (새로 추가)
 * API: PATCH /api/mypage/password
 */
export function useUpdatePassword() {
  return useMutation({
    mutationFn: ({ currentPassword, newPassword }) => {
      if (!currentPassword || currentPassword.trim().length === 0) {
        throw new Error('현재 비밀번호를 입력해주세요.');
      }
      
      if (!newPassword || newPassword.length < 8) {
        throw new Error('새 비밀번호는 8자 이상 입력해주세요.');
      }
      
      if (currentPassword === newPassword) {
        throw new Error('현재 비밀번호와 새 비밀번호가 동일합니다.');
      }
      
      return UserProfileService.updatePassword({
        currentPassword,
        newPassword
      });
    },
    onSuccess: () => {
      console.warn('비밀번호 변경 완료. 재로그인이 필요합니다.');
    }
  });
}

/**
 * 프로필 이미지 변경 훅 (새로 추가)
 * API: PATCH /api/mypage/image
 */
export function useUpdateProfileImage() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (imageKey) => {
      if (!imageKey || imageKey.trim().length === 0) {
        throw new Error('이미지 키가 필요합니다.');
      }
      
      return UserProfileService.updateProfileImage({ imageKey: imageKey.trim() });
    },
    onMutate: async (newImageKey) => {
      await queryClient.cancelQueries({
        queryKey: PROFILE_QUERY_KEYS.detail()
      });

      const previousProfile = queryClient.getQueryData(PROFILE_QUERY_KEYS.detail());

      queryClient.setQueryData(PROFILE_QUERY_KEYS.detail(), (oldData) => ({
        ...oldData,
        imageKey: newImageKey.trim(),
        profileImageUrl: ProjectUtils.resolveImageUrl(newImageKey.trim())
      }));

      return { previousProfile };
    },
    onError: (error, variables, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(PROFILE_QUERY_KEYS.detail(), context.previousProfile);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: PROFILE_QUERY_KEYS.all
      });
    }
  });
}

/**
 * 프로필 관련 모든 작업을 통합 관리하는 복합 훅
 */
export function useProfileOperations() {
  const updateNickname = useUpdateNickname();
  const updateEmail = useUpdateEmail();
  const updatePassword = useUpdatePassword();
  const updateProfileImage = useUpdateProfileImage();

  // 전체 로딩 상태
  const isLoading = useMemo(() => {
    return (
      updateNickname.isPending ||
      updateEmail.isPending ||
      updatePassword.isPending ||
      updateProfileImage.isPending
    );
  }, [
    updateNickname.isPending,
    updateEmail.isPending,
    updatePassword.isPending,
    updateProfileImage.isPending
  ]);

  // 통합 에러 상태
  const error = useMemo(() => {
    return (
      updateNickname.error ||
      updateEmail.error ||
      updatePassword.error ||
      updateProfileImage.error
    );
  }, [
    updateNickname.error,
    updateEmail.error,
    updatePassword.error,
    updateProfileImage.error
  ]);

  // 액션 함수들
  const changeNickname = useCallback(async (nickname) => {
    return updateNickname.mutateAsync(nickname);
  }, [updateNickname]);

  const changeEmail = useCallback(async (email) => {
    return updateEmail.mutateAsync(email);
  }, [updateEmail]);

  const changePassword = useCallback(async (passwordData) => {
    return updatePassword.mutateAsync(passwordData);
  }, [updatePassword]);

  const changeProfileImage = useCallback(async (imageKey) => {
    return updateProfileImage.mutateAsync(imageKey);
  }, [updateProfileImage]);

  // 모든 에러 리셋
  const resetAllErrors = useCallback(() => {
    updateNickname.reset();
    updateEmail.reset();
    updatePassword.reset();
    updateProfileImage.reset();
  }, [updateNickname, updateEmail, updatePassword, updateProfileImage]);

  return {
    // 액션 함수들
    changeNickname,
    changeEmail,
    changePassword,
    changeProfileImage,
    
    // 상태들
    isLoading,
    error,
    
    // 개별 상태들
    isUpdatingNickname: updateNickname.isPending,
    isUpdatingEmail: updateEmail.isPending,
    isUpdatingPassword: updatePassword.isPending,
    isUpdatingImage: updateProfileImage.isPending,
    
    // 개별 에러들
    nicknameError: updateNickname.error,
    emailError: updateEmail.error,
    passwordError: updatePassword.error,
    imageError: updateProfileImage.error,
    
    // 성공 상태들
    isNicknameSuccess: updateNickname.isSuccess,
    isEmailSuccess: updateEmail.isSuccess,
    isPasswordSuccess: updatePassword.isSuccess,
    isImageSuccess: updateProfileImage.isSuccess,
    
    // 유틸리티
    resetAllErrors
  };
}

/**
 * 프로필 이미지 업로드 및 변경을 위한 통합 훅
 */
export function useProfileImageUpload() {
  const updateImage = useUpdateProfileImage();

  const uploadAndUpdateImage = useCallback(async (file) => {
    try {
      // 1. 이미지 업로드 (presigned URL 방식)
      const imageKey = await UserProfileService.uploadImageComplete(file);
      
      // 2. 프로필 이미지 변경
      await updateImage.mutateAsync(imageKey);
      
      return imageKey;
    } catch (error) {
      throw new Error(`프로필 이미지 업로드 실패: ${error.message}`);
    }
  }, [updateImage]);

  return {
    uploadAndUpdateImage,
    isUploading: updateImage.isPending,
    uploadError: updateImage.error,
    isUploadSuccess: updateImage.isSuccess
  };
}

// StudyService에 추가해야 할 메서드들 (예시)
/*
StudyService에 다음 메서드들을 추가해야 합니다:

// GET /api/mypage
static async getMyProfile() {
  const url = `${BASE_URL}/api/mypage`;
  return this.optimizedFetch(url, {
    method: 'GET',
    headers: this.getCommonHeaders()
  });
}

// PATCH /api/mypage/nickname  
static async updateNickname(data) {
  const url = `${BASE_URL}/api/mypage/nickname`;
  return this.optimizedFetch(url, {
    method: 'PATCH',
    headers: this.getCommonHeaders(),
    body: JSON.stringify(data)
  }, false);
}

// PATCH /api/mypage/email
static async updateEmail(data) {
  const url = `${BASE_URL}/api/mypage/email`;
  return this.optimizedFetch(url, {
    method: 'PATCH',
    headers: this.getCommonHeaders(),
    body: JSON.stringify(data)
  }, false);
}

// PATCH /api/mypage/password
static async updatePassword(data) {
  const url = `${BASE_URL}/api/mypage/password`;
  return this.optimizedFetch(url, {
    method: 'PATCH',
    headers: this.getCommonHeaders(),
    body: JSON.stringify(data)
  }, false);
}

// PATCH /api/mypage/image
static async updateProfileImage(data) {
  const url = `${BASE_URL}/api/mypage/image`;
  return this.optimizedFetch(url, {
    method: 'PATCH',
    headers: this.getCommonHeaders(),
    body: JSON.stringify(data)
  }, false);
}
*/

export default {
  useProfile,
  useUpdateNickname,
  useUpdateEmail,
  useUpdatePassword,
  useUpdateProfileImage,
  useProfileOperations,
  useProfileImageUpload
};