export default function StudyModal({
  isOpen,
  onClose,
  currentIndex = 0,
  totalItems = 1,
  onIndexChange,
}) {
  if (!isOpen) return null; // 닫혀있으면 아무것도 렌더링 안 함

  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + totalItems) % totalItems;
    onIndexChange?.(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % totalItems;
    onIndexChange?.(newIndex);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/40"
      onClick={onClose}
    >
      {/* 모달 박스 */}
      <div
        className="relative rounded-lg overflow-y-auto"
        style={{
          width: "min(75vw, 600px)", // 최대 1040px, 90vw 이하
          maxHeight: "90vh", // 화면 90% 이상 안 넘어가게
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 이전 버튼 */}
        <button
          onClick={handlePrevious}
          className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all z-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* 다음 버튼 */}
        <button
          onClick={handleNext}
          className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all z-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        {/* 내부 콘텐츠 */}
        <div className="flex flex-col items-center p-6 md:p-8">
          {/* 이미지 영역 */}
          <div
            className="bg-white rounded-lg mb-6 flex items-center justify-center object-cover"
            style={{
              width: "62%", // 806 / 1300 ≈ 0.62
              aspectRatio: "806 / 927",
            }}
          >
            <span className="text-gray-500">이미지 {currentIndex + 1}</span>
          </div>

          {/* 버튼 영역 */}
          <button
            onClick={onClose}
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 border border-[var(--color-primary)] px-8 py-2.5 rounded-lg hover:bg-[var(--color-primary)] hover:text-[#FFFFFF] transition-colors font-medium z-20 cursor-pointer"
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
