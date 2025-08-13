export default function ProjectGalleryModal({ isOpen, onClose, currentIndex = 0, totalItems = 1, onIndexChange }) {
  if (!isOpen) return null;

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
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* 모달 박스 */}
      <div
        className="relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 원형 이미지 영역 */}
        <div className="relative">
          {/* 이전 버튼 */}
          <button
            onClick={handlePrevious}
            className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all z-20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>

          {/* 다음 버튼 */}
          <button
            onClick={handleNext}
            className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all z-20"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>

          {/* 원형 테두리와 이미지 */}
          <div className="w-[600px] h-[600px] rounded-full bg-gray-300 flex items-center justify-center p-32 relative">
            {/* 이미지 영역 */}
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
              <span className="text-gray-500 text-lg">이미지 {currentIndex + 1}</span>
            </div>
            
            {/* 확인 버튼 */}
            <button
              onClick={onClose}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 border border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium z-20"
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}