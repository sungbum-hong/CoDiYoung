import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import AdminHomeChart from './AdminHomeChart';

/**
 * 관리자 홈 뷰 컴포넌트 (순수 UI)
 */
export default function AdminHomeView({
  isLoading,
  isError,
  error,
  chartData,
  users,
  onRetry,
  onEditUser
}) {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return <ErrorMessage error={error?.message || '알 수 없는 오류가 발생했습니다.'} onRetry={onRetry} />;
  }

  return (
    <div className="p-6">
      <AdminHomeChart
        chartData={chartData}
        users={users}
        onEditUser={onEditUser}
      />
    </div>
  );
}