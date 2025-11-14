import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AdminApiService } from '../../../../services/admin/adminApi.js';

/**
 * 사용자 목록 조회 훅
 */
export function useUserList(params = {}) {
  const { lastUserId, limit = 10 } = params;

  const query = useQuery({
    queryKey: ['admin', 'users', 'list', { lastUserId, limit }],
    queryFn: () => AdminApiService.getUserInfoList(lastUserId, limit),
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
  });

  return {
    // API 응답 구조를 여러 가지로 시도 (실제 응답에 맞춰 조정 필요)
    users: query.data?.data || query.data?.users || query.data || [],
    nextCursor: query.data?.nextCursor,
    hasNext: query.data?.hasNext || false,
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    retry: query.refetch,
    // 디버깅을 위한 원본 데이터
    rawData: query.data
  };
}

/**
 * 사용자 생성 훅
 */
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData) => AdminApiService.createUser(userData),
    onSuccess: () => {
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['admin', 'users', 'list']
      });
    }
  });
}

/**
 * 오프라인 참가 횟수 업데이트 훅
 */
export function useUpdateOfflineCount() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ userId, count }) => AdminApiService.updateOfflineCount(userId, count),
    onSuccess: () => {
      // 사용자 목록과 홈 데이터 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['admin', 'users', 'list']
      });
      queryClient.invalidateQueries({
        queryKey: ['admin', 'home']
      });
    }
  });
}