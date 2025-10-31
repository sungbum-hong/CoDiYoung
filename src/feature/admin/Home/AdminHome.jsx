import { useCallback } from 'react';
import { useAdminHomeData } from '../hooks/useAdminHomeData';
import AdminHomeView from '../components/AdminHomeView';

/**
 * 관리자 홈 컨테이너 (로직 담당)
 */
export default function AdminHome() {
  // React Query 훅으로 데이터 관리
  const {
    users,
    chartData,
    isLoading,
    isError,
    error,
    retry
  } = useAdminHomeData();

  // 사용자 편집 핸들러
  const handleEditUser = useCallback((user) => {
    // TODO: 사용자 편집 모달이나 페이지로 이동
  }, []);

  // 재시도 핸들러
  const handleRetry = useCallback(() => {
    retry();
  }, [retry]);

  return (
    <AdminHomeView
      isLoading={isLoading}
      isError={isError}
      error={error}
      chartData={chartData}
      users={users}
      onRetry={handleRetry}
      onEditUser={handleEditUser}
    />
  );
}
