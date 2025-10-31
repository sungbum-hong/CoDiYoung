import { useQuery } from '@tanstack/react-query';
import { AdminApiService } from '../../../services/admin/adminApi';
import { calculateAdminHomeChartData } from '../../../utils/chartUtils';

/**
 * 관리자 홈 데이터 조회 React Query 훅
 * @param {Object} options - 쿼리 옵션
 * @param {number|null} options.lastUserId - 마지막 사용자 ID (페이지네이션)
 * @param {number} options.limit - 조회할 데이터 개수
 * @returns {Object} React Query 결과 객체
 */
export function useAdminHomeData(options = {}) {
  const { lastUserId = null, limit = 10 } = options;

  const query = useQuery({
    queryKey: ['admin', 'home', { lastUserId, limit }],
    queryFn: () => AdminApiService.getHomeData(lastUserId, limit),
    staleTime: 5 * 60 * 1000, // 5분
    cacheTime: 10 * 60 * 1000, // 10분
    retry: (failureCount, error) => {
      // 권한 관련 에러는 재시도하지 않음
      if (error?.message?.includes('권한') || error?.message?.includes('403')) {
        return false;
      }
      return failureCount < 3;
    },
    refetchOnWindowFocus: false,
  });

  // 차트 데이터 계산
  const chartData = query.data?.data ? calculateAdminHomeChartData(query.data.data) : null;

  return {
    // 원본 데이터
    users: query.data?.data || [],
    nextCursor: query.data?.nextCursor,
    hasNext: query.data?.hasNext || false,

    // 계산된 차트 데이터
    chartData,

    // React Query 상태
    isLoading: query.isLoading,
    isError: query.isError,
    error: query.error,
    refetch: query.refetch,

    // 편의 메서드
    retry: () => query.refetch(),
  };
}