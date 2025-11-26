import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from '@tanstack/react-query';
import { AdminApiService } from '../../../../services/admin/adminApi.js';

/**
 * 사용자 목록 조회 훅
 */
export function useUserList(params = {}) {
  const { limit = 10 } = params;

  const query = useInfiniteQuery({
    queryKey: ['admin', 'users', 'list', { limit }],
    queryFn: ({ pageParam = null }) => AdminApiService.getUserInfoList(pageParam, limit),
    getNextPageParam: (lastPage) => {
      return lastPage.hasNext ? lastPage.nextCursor : undefined;
    },
    staleTime: 1000 * 60 * 5, // 5분
    gcTime: 1000 * 60 * 10, // 10분
  });

  return {
    data: query.data,
    users: query.data?.pages.flatMap(page => page.data) || [],
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: query.hasNextPage,
    isFetchingNextPage: query.isFetchingNextPage,
    retry: query.refetch
  };
}

/**
 * 사용자 생성 훅
 */
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (userData) => AdminApiService.createUser(userData),
    onSuccess: async () => {
      // 사용자 목록과 홈 데이터 캐시 무효화
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['admin', 'users', 'list'] }),
        queryClient.invalidateQueries({ queryKey: ['admin', 'home'] })
      ]);
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