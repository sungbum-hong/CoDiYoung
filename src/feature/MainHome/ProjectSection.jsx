import { useRef, useState, useMemo, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectDetailModal from "./components/ProjectDetailModal.jsx";
import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../utils/colors.js';
import { MESSAGES } from '../../constants/messages.js';

export default function ProjectSection({
  title = MESSAGES.SECTIONS.PROJECT_LIST,
  itemCount = CONFIG.DEFAULTS.PROJECT_COUNT,
}) {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerView = CONFIG.LAYOUT.GRID.PROJECT_COLUMNS;
  const totalPages = Math.max(1, Math.ceil(itemCount / itemsPerView));

  const cardWidth = CONFIG.CARD.PROJECT.WIDTH;
  const gap = CONFIG.CARD.PROJECT.GAP;
  const scrollAmount = cardWidth + gap;

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const scroll = useCallback((direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "left") {
      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
        setCurrentPage(totalPages);
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentPage((prev) => Math.max(1, prev - 1));
      }
    } else {
      if (container.scrollLeft >= maxScroll - 1) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentPage(1);
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
      }
    }
  }, [scrollAmount, totalPages]);

  // 스크롤에 따라 페이지 동기화(사용자가 휠/드래그로 이동한 경우)
  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const page = Math.round(container.scrollLeft / scrollAmount) + 1;
    setCurrentPage(Math.min(totalPages, Math.max(1, page)));
  };

  const onCardKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleProjectClick(index);
    }
  };

  const ArrowButton = ({ side }) => {
    const isLeft = side === "left";
    const disabled = totalPages <= 1;

    return (
      <button
        type="button"
        onClick={() => !disabled && scroll(isLeft ? "left" : "right")}
        className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 
                    p-2 rounded-full z-10 shadow-md transition
                    focus:outline-none focus:ring-2 focus:ring-offset-2`}
        style={{
          backgroundColor: COLORS.WHITE,
          opacity: disabled ? 0.4 : 1,
        }}
        onMouseEnter={(e) => {
          if (!disabled) e.currentTarget.style.backgroundColor = COLORS.GRAY_100;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = COLORS.WHITE;
        }}
        aria-label={isLeft ? "이전 프로젝트 보기" : "다음 프로젝트 보기"}
        disabled={disabled}
      >
        {isLeft ? (
          <ChevronLeftIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
        ) : (
          <ChevronRightIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
        )}
      </button>
    );
  };

  return (
    <section className="relative mb-21">
      <h2 className="font-bold text-2xl mb-7">{title}</h2>

      {/* 화살표 버튼 */}
      <ArrowButton side="left" />

      {/* 카드 영역 */}
      <div
        ref={scrollRef}
        onScroll={onScroll}
        className="flex overflow-x-auto scroll-smooth"
        style={{
          // 스크롤바 감추기(FF/IE/Edge)
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          // 뷰포트 폭 고정(열 * 카드너비 + 간격)
          width: `calc(${CONFIG.LAYOUT.GRID.PROJECT_COLUMNS} * ${CONFIG.CARD.PROJECT.WIDTH}px + (${CONFIG.LAYOUT.GRID.PROJECT_COLUMNS} - 1) * ${CONFIG.CARD.PROJECT.GAP}px)`,
          margin: '0 auto',
          gap: gap,
        }}
      >
        {/* 스크롤바 감추기(webkit) */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; height: 0; width: 0; }
        `}</style>

        {Array.from({ length: itemCount }).map((_, i) => (
          <div key={i} className="flex-shrink-0 flex flex-col items-center">
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => onCardKeyDown(e, i)}
              className="flex items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                width: cardWidth,
                height: CONFIG.CARD.PROJECT.HEIGHT,
                borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
                backgroundColor: COLORS.GRAY_300,
              }}
              onClick={() => handleProjectClick(i)}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = COLORS.GRAY_400)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = COLORS.GRAY_300)}
              aria-label={`프로젝트 ${i + 1} 상세 보기`}
            />
            {/* 프로젝트 번호 */}
            <span
              className="text-sm font-medium mt-2"
              style={{ color: COLORS.GRAY_600 }}
            >
              {i + 1}
            </span>
          </div>
        ))}
      </div>

      {/* 화살표 버튼 */}
      <ArrowButton side="right" />

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectIndex={selectedProjectIndex}
      />
    </section>
  );
}
