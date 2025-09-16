import { COLORS } from "../../../utils/colors.js";
import useStudyChannelStore from "../../../stores/studyChannelStore.js";
import NavigationButton from "../components/NavigationButton.jsx";
import { useHoverStyle } from "../hooks/useHoverStyle.js";

export default function ProjectGalleryModal({
  // ✅ 원하는 크기로 손쉽게 조절
  circleSize = 500,   // 원형(이미지) 지름
  buttonSize = 48,    // 좌우 화살표 버튼 지름
  gap = 24,           // 원형과 버튼 사이 간격
}) {
  const { 
    modals: { project: isOpen },
    project: { currentIndex },
    closeModal,
    navigateProject 
  } = useStudyChannelStore();
  
  const hoverStyle = useHoverStyle();
  
  if (!isOpen) return null;

  const handlePrevious = (e) => {
    e?.stopPropagation();
    navigateProject('prev');
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    navigateProject('next');
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 p-4"
      onClick={() => closeModal('project')}
    >
      {/* 모달 박스 */}
      <div
        className="relative flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* === 원형 이미지 영역 (컨테이너) === */}
        <div className="relative" style={{ width: circleSize, height: circleSize }}>
          {/* 네비게이션 버튼들 */}
          <NavigationButton
            direction="prev"
            onClick={handlePrevious}
            buttonSize={buttonSize}
            style={{
              position: 'absolute',
              left: `-${gap + buttonSize}px`,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: "#fff",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </NavigationButton>

          <NavigationButton
            direction="next"
            onClick={handleNext}
            buttonSize={buttonSize}
            style={{
              position: 'absolute',
              right: `-${gap + buttonSize}px`,
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: "#fff",
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </NavigationButton>

          {/* === 원형 테두리 + 이미지 === */}
          <div
            className="rounded-full flex items-center justify-center p-32 relative shadow-inner"
            style={{ width: circleSize, height: circleSize, backgroundColor: "#fff" }}
          >
            {/* 실제 이미지가 들어갈 자리 */}
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">이미지 {currentIndex + 1}</span>
            </div>

            {/* 확인 버튼 */}
            <button
              onClick={() => closeModal('project')}
              className="absolute bottom-20 left-1/2 -translate-x-1/2 rounded-full font-medium cursor-pointer transition-colors"
              style={{
                width: 100,
                height: 40,
                backgroundColor: "transparent",
                color: COLORS.PRIMARY,
                border: `2px solid ${COLORS.PRIMARY}`,
              }}
              {...hoverStyle}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
