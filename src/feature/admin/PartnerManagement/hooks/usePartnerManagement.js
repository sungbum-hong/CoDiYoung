import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminApiService } from '../../../../services/admin/adminApi.js';
import { ImageService } from '../../../../services/imageService.js';

/**
 * 파트너 목록 조회 훅
 */
export function usePartnerList() {
    return useQuery({
        queryKey: ['admin', 'partner', 'list'],
        queryFn: async () => {
            const response = await AdminApiService.getPartnerList();
            return Array.isArray(response) ? response : (response ? [response] : []);
        },
        staleTime: 1000 * 60 * 5, // 5분
        gcTime: 1000 * 60 * 10, // 10분
    });
}

/**
 * 이미지 업로드 훅 (Presigned URL 방식)
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
 * 파트너 추가 훅
 */
export function useAddPartner() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (partnerData) => AdminApiService.addPartner(partnerData),
        onSuccess: () => {
            // 파트너 목록 캐시 무효화
            queryClient.invalidateQueries({
                queryKey: ['admin', 'partner', 'list']
            });
        }
    });
}

/**
 * 파트너 삭제 훅
 */
export function useDeletePartner() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (partnerId) => AdminApiService.deletePartner(partnerId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['admin', 'partner', 'list']
            });
        }
    });
}

/**
 * 이미지 업로드 및 파트너 추가 통합 훅
 */
export function useUploadAndAddPartner() {
    const uploadImageMutation = useUploadImage();
    const addPartnerMutation = useAddPartner();

    const uploadAndAdd = async (file, name, link = '') => {
        try {
            // 1. 이미지 업로드
            const { imageKey } = await uploadImageMutation.mutateAsync(file);

            if (!imageKey) {
                throw new Error('이미지 업로드 결과에서 imageKey를 찾을 수 없습니다.');
            }

            // 2. 파트너 추가
            const result = await addPartnerMutation.mutateAsync({ name, imageKey, link });

            return result;
        } catch (error) {
            throw error;
        }
    };

    return {
        uploadAndAdd,
        isLoading: uploadImageMutation.isPending || addPartnerMutation.isPending,
        error: uploadImageMutation.error || addPartnerMutation.error
    };
}
