import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../../utils/colors.js";

export default function StudyModal({
  isOpen,
  onClose,
  currentIndex = 0,
  totalItems = 1,
  onIndexChange,
}) {
  if (!isOpen) return null;

  const boxRef = useRef(null);          // 모달 박스 ref
  const [pos, setPos] = useState(null); // {left, right, top}
  const GAP = 40;   // 모달과 버튼 사이 간격(px) ← 여기만 조절하면 가로 위치 바뀜
  const BTN = 40;   // 버튼 지름(px)

  const handlePrevious = (e) => {
    e?.stopPropagation();
    const newIndex = (currentIndex - 1 + totalItems) % totalItems;
    onIndexChange?.(newIndex);
  };
  const handleNext = (e) => {
    e?.stopPropagation();
    const newIndex = (currentIndex + 1) % totalItems;
    onIndexChange?.(newIndex);
  };

  // 모달 박스 위치를 읽어 화살표 위치 계산
  useEffect(() => {
    if (!isOpen) return;
    const update = () => {
      const el = boxRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = rect.top + rect.height / 2;
      const left = Math.max(8, rect.left - GAP - BTN);                            // 왼쪽 버튼 x
      const right = Math.max(8, window.innerWidth - rect.right - GAP - BTN);      // 오른쪽 버튼 x (right 기준)
      setPos({ top, left, right });
    };
    update();
    const ro = new ResizeObserver(update);
    if (boxRef.current) ro.observe(boxRef.current);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    const id = requestAnimationFrame(update); // 초기 레이아웃 안정화 한 번 더
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
      cancelAnimationFrame(id);
    };
  }, [isOpen]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* 모달 상자 */}
      <div
        ref={boxRef}
        className="relative rounded-2xl overflow-hidden bg-white"
        style={{
          width: "500px",
          height: "500px",
          border: `2px solid ${COLORS.PRIMARY}`, // 보라 외곽선
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 전체 이미지 자리 */}
        <div className="w-full h-full flex items-center justify-center bg-white">
          <span className="text-gray-700 font-semibold">이미지 {currentIndex + 1}</span>
        </div>

        {/* 하단 버튼 (필요 시 유지) */}
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

      {/* === 모달 바깥(전역)으로 포털된 네비 버튼 === */}
      {isOpen && pos &&
        createPortal(
          <>
            {/* 왼쪽 */}
            <button
              type="button"
              aria-label="이전"
              onClick={handlePrevious}
              className="fixed -translate-y-1/2 grid place-items-center rounded-full border shadow
                         bg-white transition focus:outline-none"
              style={{
                left: `${pos.left}px`,
                top: `${pos.top}px`,
                width: BTN,
                height: BTN,
                borderColor: COLORS.PRIMARY,
                color: COLORS.PRIMARY,
                zIndex: 2147483647,
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
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            {/* 오른쪽 */}
            <button
              type="button"
              aria-label="다음"
              onClick={handleNext}
              className="fixed -translate-y-1/2 grid place-items-center rounded-full border shadow
                         bg-white transition focus:outline-none"
              style={{
                right: `${pos.right}px`,
                top: `${pos.top}px`,
                width: BTN,
                height: BTN,
                borderColor: COLORS.PRIMARY,
                color: COLORS.PRIMARY,
                zIndex: 2147483647,
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
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </>,
          document.body
        )}
    </div>
  );
}
