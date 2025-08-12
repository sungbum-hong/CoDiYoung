import React from "react";

export default function StudyModal({ isOpen, onClose, currentIndex = 0, totalItems = 1, onIndexChange }) {
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
    className="fixed inset-0 flex items-center justify-center z-50"
    onClick={onClose}
  >
    {/* 모달 박스 */}
    <div
      className="
    bg-gray-300 rounded-lg shadow-lg 
    w-[90vw] max-w-[650px] lg:max-w-[1040px]
    h-auto max-h-[90vh]
    p-6 lg:p-12 flex flex-col items-center relative
    mx-4 overflow-hidden
  "
      onClick={(e) => e.stopPropagation()}
    >
      {/* 이전 버튼 */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>

      {/* 다음 버튼 */}
      <button
        onClick={handleNext}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>

      {/* 이미지 영역 */}
      <div className="bg-white sm:w-[400px] sm:h-[460px] md:w-[500px] md:h-[575px] lg:w-[645px] lg:h-[720px] flex items-center justify-center rounded-lg mb-6 flex-shrink-0 object-cover">
        <span className="text-gray-500">이미지 {currentIndex + 1}</span>
      </div>

      {/* 확인 버튼 */}
      <button
        onClick={onClose}
        className="border border-blue-500 text-blue-500 px-6 py-2 rounded h"
      >
        확인
      </button>
    </div>
  </div>
  );
}
