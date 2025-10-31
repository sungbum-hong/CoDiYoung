/**
 * 에러 메시지 컴포넌트
 */
export default function ErrorMessage({ error, onRetry }) {
  return (
    <div className="p-6 flex items-center justify-center min-h-96">
      <div className="text-center">
        <div className="text-red-500 mb-4">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
            />
          </svg>
        </div>
        <p className="text-red-600 font-medium mb-2">데이터 로드 실패</p>
        <p className="text-gray-600 mb-4">{error}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-[#FF0066] text-white rounded-lg hover:bg-[#E6005C] transition-colors"
          >
            다시 시도
          </button>
        )}
      </div>
    </div>
  );
}