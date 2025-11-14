import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminApiService } from '../../../../services/admin/adminApi.js';

/**
 * 현재 배너 조회 훅 (서버에서 API 지원 시 사용)
 */
export function useCurrentBanner() {
  return useQuery({
    queryKey: ['admin', 'banner', 'current'],
    queryFn: () => AdminApiService.getCurrentBanner(),
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
    // API가 구현되지 않은 경우 비활성화
    enabled: false
  });
}

/**
 * 이미지 업로드 훅
 */
export function useUploadImage() {
  return useMutation({
    mutationFn: (file) => AdminApiService.uploadImage(file)
  });
}

/**
 * 배너 추가 훅
 */
export function useAddBanner() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (imageKey) => AdminApiService.addBanner(imageKey),
    onSuccess: () => {
      // 배너 관련 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['admin', 'banner']
      });
    }
  });
}

/**
 * 이미지 업로드 후 배너 추가를 한번에 처리하는 훅
 */
export function useUploadAndAddBanner() {
  const uploadImageMutation = useUploadImage();
  const addBannerMutation = useAddBanner();

  const uploadAndAdd = async (file) => {
    try {
      // 1. 이미지 업로드
      const uploadResult = await uploadImageMutation.mutateAsync(file);
      const imageKey = uploadResult.imageKey || uploadResult.key || uploadResult.url;

      if (!imageKey) {
        throw new Error('이미지 업로드 결과에서 imageKey를 찾을 수 없습니다.');
      }

      // 2. 배너 추가
      const bannerResult = await addBannerMutation.mutateAsync(imageKey);

      return { upload: uploadResult, banner: bannerResult };
    } catch (error) {
      throw error;
    }
  };

  return {
    uploadAndAdd,
    isLoading: uploadImageMutation.isPending || addBannerMutation.isPending,
    error: uploadImageMutation.error || addBannerMutation.error
  };
}