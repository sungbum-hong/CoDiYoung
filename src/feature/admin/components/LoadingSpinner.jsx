/**
 * 로딩 스피너 컴포넌트
 */
export default function LoadingSpinner({ message = "데이터를 불러오는 중..." }) {
  return (
    <div className="p-6 flex items-center justify-center min-h-96">
      <div className="flex flex-col items-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2"
          style={{ borderColor: "#FF0066" }}
        ></div>
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  );
}