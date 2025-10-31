import { COLORS } from "../../../constants/colors.js";

export default function ModalOverlay({ onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {children}
    </div>
  );
}

export function ModalBox({ boxRef, onClose, width = 500, height = 500, children }) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
    e.currentTarget.style.color = "#fff";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = COLORS.PRIMARY;
  };

  return (
    <div
      ref={boxRef}
      className="relative rounded-2xl overflow-hidden bg-white"
      style={{
        width: `${width}px`,
        height: `${height}px`,
        border: `2px solid ${COLORS.PRIMARY}`,
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* 이미지 영역 */}
      <div className="w-full h-full flex items-center justify-center bg-white">
        <span className="text-gray-700 font-semibold">이미지 콘텐츠</span>
      </div>

      {/* 하단 확인 버튼 */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-12">
        <button
          onClick={(e) => { e.stopPropagation(); onClose(); }}
          style={{
            width: 120,
            height: 40,
            backgroundColor: "transparent",
            color: COLORS.PRIMARY,
            border: `2px solid ${COLORS.PRIMARY}`,
            borderRadius: 12,
            transition: "background-color .2s, color .2s",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          확인
        </button>
      </div>
      
      {/* children 영역 */}
      <div className="absolute top-4 left-4 right-4">
        {children}
      </div>
    </div>
  );
}