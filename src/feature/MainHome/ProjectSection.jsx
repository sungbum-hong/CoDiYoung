import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectDetailModal from "../../ui/ProjectDetailModal.jsx";
import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../constants/colors.js';
import { MESSAGES } from '../../constants/messages.js';

export default function ProjectSection({ title = MESSAGES.SECTIONS.PROJECT_LIST, itemCount = CONFIG.DEFAULTS.PROJECT_COUNT }) {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = CONFIG.CARD.PROJECT.WIDTH;
      const gap = CONFIG.CARD.PROJECT.GAP;
      const scrollAmount = cardWidth + gap;
      
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative mb-21">
      <h2 className="font-bold text-2xl mb-7">{title}</h2>

      {/* 왼쪽 버튼 */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 shadow-md p-2 rounded-full z-10 transition-colors"
        style={{
          backgroundColor: COLORS.WHITE,
          ':hover': {
            backgroundColor: COLORS.GRAY_100
          }
        }}
        aria-label="이전 프로젝트 보기"
      >
        <ChevronLeftIcon 
          className="w-5 h-5" 
          style={{ color: COLORS.GRAY_600 }}
        />
      </button>

      {/* 카드 영역 */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          width: `calc(${CONFIG.LAYOUT.GRID.PROJECT_COLUMNS} * ${CONFIG.CARD.PROJECT.WIDTH}px + ${CONFIG.LAYOUT.GRID.PROJECT_COLUMNS - 1} * ${CONFIG.CARD.PROJECT.GAP}px)`,
          margin: '0 auto',
          gap: CONFIG.CARD.PROJECT.GAP
        }}
      >
        {Array.from({ length: itemCount }).map((_, i) => (
          <div
            key={i}
            className="flex-shrink-0 flex items-center justify-center transition-colors cursor-pointer"
            style={{
              width: CONFIG.CARD.PROJECT.WIDTH,
              height: CONFIG.CARD.PROJECT.HEIGHT,
              borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
              backgroundColor: COLORS.GRAY_300,
              ':hover': {
                backgroundColor: COLORS.GRAY_400
              }
            }}
            onClick={() => handleProjectClick(i)}
          >
          </div>
        ))}
      </div>

      {/* 오른쪽 버튼 */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 shadow-md p-2 rounded-full z-10 transition-colors"
        style={{
          backgroundColor: COLORS.WHITE,
          ':hover': {
            backgroundColor: COLORS.GRAY_100
          }
        }}
        aria-label="다음 프로젝트 보기"
      >
        <ChevronRightIcon 
          className="w-5 h-5" 
          style={{ color: COLORS.GRAY_600 }}
        />
      </button>

      <ProjectDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        projectIndex={selectedProjectIndex}
      />
    </section>
  );
}
