import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminApiService } from '../../../../services/admin/adminApi.js';
import { ImageService } from '../../../../services/imageService.js';

/**
 * 현재 배너 조회 훅 (서버에서 API 지원 시 사용)
 */
/**
 * 현재 배너 목록 조회 훅
 */
export function useBannerList() {
  return useQuery({
    queryKey: ['admin', 'banner', 'list'],
    queryFn: async () => {
      const response = await AdminApiService.getBannerList();
      return response;
    },
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
  });
}

/**
 * 이미지 업로드 훅
 */
export function useUploadImage() {
  return useMutation({
    mutationFn: async (file) => {
      const imageKey = await ImageService.uploadImage(file);
      return { imageKey };
    }
  });
}

/**
 * 배너 추가 훅
 */
/**
 * 배너 추가 훅
 */
export function useAddBanner() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => AdminApiService.addBanner(data),
    onSuccess: () => {
      // 배너 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['admin', 'banner', 'list']
      });
    }
  });
}

/**
 * 배너 삭제 훅
 */
export function useDeleteBanner() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (bannerId) => AdminApiService.deleteBanner(bannerId),
    onSuccess: () => {
      // 배너 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['admin', 'banner', 'list']
      });
    }
  });
}

/**
 * 이미지 업로드 및 배너 추가 통합 훅
 */
export function useUploadAndAddBanner() {
  const uploadImageMutation = useUploadImage();
  const addBannerMutation = useAddBanner();

  const uploadAndAdd = async (file, link = '') => {
    try {
      // 1. 이미지 업로드
      const { imageKey } = await uploadImageMutation.mutateAsync(file);

      if (!imageKey) {
        throw new Error('이미지 업로드 결과에서 imageKey를 찾을 수 없습니다.');
      }

      // 2. 배너 추가
      const result = await addBannerMutation.mutateAsync({ imageKey, link });

      return result;
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