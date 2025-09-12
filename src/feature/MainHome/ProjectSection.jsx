import { useRef, useState, useMemo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ProjectDetailModal from "./components/ProjectDetailModal.jsx";
import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../utils/colors.js';
import { MESSAGES } from '../../constants/messages.js';
import { ROUTES } from '../../constants/routes.js';
import { MockProjectService, USE_MOCK_DATA } from '../../mock-logic/index.js';
import { useBackgroundHover } from '../../hooks/useHoverStyle.js';

export default function ProjectSection({
  title = MESSAGES.SECTIONS.PROJECT_LIST,
  itemCount = CONFIG.DEFAULTS.PROJECT_COUNT,
}) {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [projects, setProjects] = useState([]);
  
  // 호버 효과 훅들
  const moreButtonHover = useBackgroundHover('transparent', COLORS.GRAY_100);
  const projectCardHover = useBackgroundHover(COLORS.GRAY_300, COLORS.GRAY_400);
  const arrowButtonHover = useBackgroundHover(COLORS.WHITE, COLORS.GRAY_100);

  // Mock 데이터 조회
  useEffect(() => {
    const fetchProjects = async () => {
      if (!USE_MOCK_DATA) return;
      
      try {
        const response = await MockProjectService.getAllProjects();
        console.log('MainHome 프로젝트 데이터:', response);
        setProjects(response || []);
      } catch (error) {
        console.error('프로젝트 조회 실패:', error);
        setProjects([]);
      }
    };

    fetchProjects();
  }, []);

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

  const handleMoreClick = () => {
    navigate(ROUTES.PROJECTS);
  };

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
        {...(!disabled && arrowButtonHover)}
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
      <div className="flex items-center justify-between mb-7">
        <h2 className="font-bold text-2xl">{title}</h2>
        <button
          onClick={handleMoreClick}
          className="p-2 rounded-full transition-colors"
          style={{ backgroundColor: "transparent" }}
          {...moreButtonHover}
          aria-label="전체 프로젝트 보기"
        >
          <EllipsisHorizontalIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
        </button>
      </div>

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

        {Array.from({ length: itemCount }).map((_, i) => {
          // Mock 데이터가 있으면 해당 인덱스의 프로젝트 정보 사용, 없으면 기본값
          const project = USE_MOCK_DATA && projects[i] ? projects[i] : null;
          
          return (
            <div key={i} className="flex-shrink-0 flex flex-col items-center">
              <div
                role="button"
                tabIndex={0}
                onKeyDown={(e) => onCardKeyDown(e, i)}
                className="flex flex-col items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 p-4"
                style={{
                  width: cardWidth,
                  height: CONFIG.CARD.PROJECT.HEIGHT,
                  borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
                  backgroundColor: COLORS.GRAY_300,
                }}
                onClick={() => handleProjectClick(i)}
                {...projectCardHover}
                aria-label={project ? `${project.title} 상세 보기` : `프로젝트 ${i + 1} 상세 보기`}
              >
                <div className="text-center">
                  <div className="text-sm font-medium" style={{ color: COLORS.GRAY_600 }}>
                    프로젝트 {i + 1}
                  </div>
                </div>
              </div>
              
              {/* Mock 데이터를 이미지 밑에 표시 */}
              {project && (
                <div className="text-center mt-2">
                  <h3 className="text-sm font-bold mb-1" style={{ color: COLORS.GRAY_800 }}>
                    {project.title}
                  </h3>
                  <p className="text-xs" style={{ color: COLORS.GRAY_600 }}>
                    {project.slogan || "슬로건이 없습니다"}
                  </p>
                </div>
              )}
            </div>
          );
        })}
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
