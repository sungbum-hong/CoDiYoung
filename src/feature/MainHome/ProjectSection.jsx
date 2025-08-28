import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectDetailModal from "./components/ProjectDetailModal.jsx";
import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../utils/colors.js';
import { MESSAGES } from '../../constants/messages.js';

export default function ProjectSection({ title = MESSAGES.SECTIONS.PROJECT_LIST, itemCount = CONFIG.DEFAULTS.PROJECT_COUNT }) {
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

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
      const container = scrollRef.current;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const itemsPerView = CONFIG.LAYOUT.GRID.PROJECT_COLUMNS;
      const totalPages = Math.ceil(itemCount / itemsPerView);
      
      if (direction === "left") {
        // 맨 왼쪽에서 왼쪽 화살표 클릭 시 맨 오른쪽으로 이동 (무한순환)
        if (container.scrollLeft <= 0) {
          container.scrollTo({
            left: maxScroll,
            behavior: "smooth",
          });
          setCurrentPage(totalPages);
        } else {
          container.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
          });
          setCurrentPage(prev => Math.max(1, prev - 1));
        }
      } else {
        // 맨 오른쪽에서 오른쪽 화살표 클릭 시 맨 왼쪽으로 이동 (무한순환)
        if (container.scrollLeft >= maxScroll) {
          container.scrollTo({
            left: 0,
            behavior: "smooth",
          });
          setCurrentPage(1);
        } else {
          container.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
          });
          setCurrentPage(prev => Math.min(totalPages, prev + 1));
        }
      }
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
          <div key={i} className="flex-shrink-0 flex flex-col items-center">
            <div
              className="flex items-center justify-center transition-colors cursor-pointer"
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
              onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_400}
              onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.GRAY_300}
            >
            </div>
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
