// 공통 로딩 컴포넌트
export default function LoadingFallback({ message = "로딩 중..." }) {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 border-2 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
        <span className="text-gray-600">{message}</span>
      </div>
    </div>
  );
}