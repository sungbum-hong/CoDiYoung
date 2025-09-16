import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ProjectDetailModal from "./components/ProjectDetailModal.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import ScrollArrowButton from "./components/ScrollArrowButton.jsx";
import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../utils/colors.js';
import { MESSAGES } from '../../constants/messages.js';
import { USE_MOCK_DATA } from '../../mock-logic/index.js';
import { useBackgroundHover } from '../../hooks/useHoverStyle.js';
import { useProjectData } from './hooks/useProjectData.js';
import { useScrollNavigation } from './hooks/useScrollNavigation.js';
import { useProjectModal } from './hooks/useProjectModal.js';

export default function ProjectSection({
  title = MESSAGES.SECTIONS.PROJECT_LIST,
  itemCount = CONFIG.DEFAULTS.PROJECT_COUNT,
}) {
  // 프로젝트 데이터 훅
  const { projects } = useProjectData();
  
  // 스크롤 네비게이션 훅
  const { scrollRef, currentPage, totalPages, scroll, onScroll } = useScrollNavigation(itemCount);
  
  // 모달 관리 훅
  const { 
    isModalOpen, 
    selectedProjectIndex, 
    handleProjectClick, 
    closeModal, 
    handleMoreClick, 
    onCardKeyDown 
  } = useProjectModal();
  
  // 호버 효과 훅들
  const moreButtonHover = useBackgroundHover('transparent', COLORS.GRAY_100);

  const gap = CONFIG.CARD.PROJECT.GAP;

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
      <ScrollArrowButton 
        side="left" 
        totalPages={totalPages} 
        onScroll={scroll} 
      />

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
            <ProjectCard
              key={i}
              index={i}
              project={project}
              onProjectClick={handleProjectClick}
              onCardKeyDown={onCardKeyDown}
            />
          );
        })}
      </div>

      {/* 화살표 버튼 */}
      <ScrollArrowButton 
        side="right" 
        totalPages={totalPages} 
        onScroll={scroll} 
      />

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectIndex={selectedProjectIndex}
      />
    </section>
  );
}
