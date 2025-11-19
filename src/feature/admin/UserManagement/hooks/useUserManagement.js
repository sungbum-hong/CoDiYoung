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

  // API 응답 데이터 처리
  const processedData = query.data || {};
  const usersList = Array.isArray(processedData) ? processedData :
                   (processedData.data || processedData.users || processedData.content || []);

  // 커서 기반 페이지네이션 정보 추출
  const hasNextPage = processedData.hasNext ||
                      processedData.hasNextPage ||
                      (usersList.length >= limit);

  const nextCursor = usersList.length > 0 ?
                     usersList[usersList.length - 1]?.id ||
                     usersList[usersList.length - 1]?.userId : null;

  return {
    users: usersList,
    nextCursor: nextCursor,
    hasNext: hasNextPage,
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