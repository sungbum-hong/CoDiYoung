import { COLORS } from "../../../utils/colors.js";
import useStudyChannelStore from "../../../stores/studyChannelStore.js";

export default function ProjectGalleryModal({
  // ✅ 원하는 크기로 손쉽게 조절
  circleSize = 500,   // 원형(이미지) 지름
  buttonSize = 48,    // 좌우 화살표 버튼 지름
  gap = 24,           // 원형과 버튼 사이 간격
}) {
  const { 
    modals: { project: isOpen },
    project: { currentIndex, count: totalItems },
    closeModal,
    navigateProject 
  } = useStudyChannelStore();
  
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
          {/* 왼쪽 버튼 — 원형 바깥쪽에 위치 */}
          <button
            onClick={handlePrevious}
            aria-label="이전"
            className="absolute top-1/2 -translate-y-1/2 grid place-items-center rounded-full border shadow transition focus:outline-none"
            style={{
              left: `-${gap + buttonSize}px`,
              width: `${buttonSize}px`,
              height: `${buttonSize}px`,
              backgroundColor: "#fff",
              borderColor: COLORS.PRIMARY,
              color: COLORS.PRIMARY,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = COLORS.PRIMARY;
            }}
          >
            {/* 왼쪽 화살표 아이콘 */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* 오른쪽 버튼 — 원형 바깥쪽에 위치 */}
          <button
            onClick={handleNext}
            aria-label="다음"
            className="absolute top-1/2 -translate-y-1/2 grid place-items-center rounded-full border shadow transition focus:outline-none"
            style={{
              right: `-${gap + buttonSize}px`,
              width: `${buttonSize}px`,
              height: `${buttonSize}px`,
              backgroundColor: "#fff",
              borderColor: COLORS.PRIMARY,
              color: COLORS.PRIMARY,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#fff";
              e.currentTarget.style.color = COLORS.PRIMARY;
            }}
          >
            {/* 오른쪽 화살표 아이콘 */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>

          {/* === 원형 테두리 + 이미지 === */}
          <div
            className="rounded-full flex items-center justify-center p-32 relative shadow-inner"
            style={{ width: circleSize, height: circleSize, backgroundColor: "#fff" }}
          >
            {/* 실제 이미지가 들어갈 자리 */}
            <div className="w-full h-full rounded-full flex items-center justify-center">
              <span className="text-gray-500 text-lg">이미지 {currentIndex + 1}</span>
            </div>

            {/* 확인 버튼 (원형 하단 안쪽) — 필요시 유지/제거 */}
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = COLORS.PRIMARY;
              }}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
