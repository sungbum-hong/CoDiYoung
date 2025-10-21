import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import ProjectDetailModal from "./components/ProjectDetailModal.jsx";
import ProjectCard from "./components/ProjectCard.jsx";
import { CONFIG } from '../../constants/config.js';
import { COLORS } from '../../utils/colors.js';
import { MESSAGES } from '../../constants/messages.js';
import { useBackgroundHover } from '../../hooks/useHoverStyle.js';
import { useMainHomeProjects } from './hooks/useMainHomeQueries.js';
import { useProjectModal } from './hooks/useProjectModal.js';

export default function ProjectSection({
  title = MESSAGES.SECTIONS.PROJECT_LIST,
}) {
  // React Query를 사용한 프로젝트 데이터 로드
  const { data: projects = [], isLoading, error } = useMainHomeProjects();

  // 모달 관리 훅
  const {
    isModalOpen,
    selectedProjectId,
    handleProjectClick,
    closeModal,
    handleMoreClick,
    onCardKeyDown
  } = useProjectModal();
  
  // 호버 효과 훅들
  const moreButtonHover = useBackgroundHover('transparent', COLORS.GRAY_100);

  const gap = CONFIG.CARD.PROJECT.GAP;

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <section className="relative mb-21">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-bold text-2xl">{title}</h2>
          <button
            className="p-2 rounded-full transition-colors"
            style={{ backgroundColor: "transparent" }}
            aria-label="전체 프로젝트 보기"
            disabled
          >
            <EllipsisHorizontalIcon className="w-5 h-5" style={{ color: COLORS.GRAY_400 }} />
          </button>
        </div>
        <div
          className="flex items-center justify-center w-full text-gray-500"
          style={{
            height: `${CONFIG.CARD.PROJECT.HEIGHT + 60}px`,
            fontSize: '16px'
          }}
        >
          프로젝트 데이터를 불러오는 중...
        </div>
      </section>
    );
  }

  // 에러 상태 처리
  if (error) {
    return (
      <section className="relative mb-21">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-bold text-2xl">{title}</h2>
          <button
            className="p-2 rounded-full transition-colors"
            style={{ backgroundColor: "transparent" }}
            aria-label="전체 프로젝트 보기"
            disabled
          >
            <EllipsisHorizontalIcon className="w-5 h-5" style={{ color: COLORS.GRAY_400 }} />
          </button>
        </div>
        <div
          className="flex items-center justify-center w-full text-red-500"
          style={{
            height: `${CONFIG.CARD.PROJECT.HEIGHT + 60}px`,
            fontSize: '16px'
          }}
        >
          프로젝트 데이터를 불러오는데 실패했습니다: {error.message}
        </div>
      </section>
    );
  }

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

     

      {/* 카드 영역 */}
      <div
        className="flex overflow-x-auto scroll-smooth"
        style={{
          // 스크롤바 감추기(FF/IE/Edge)
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          // 뷰포트 폭을 프로젝트 개수에 맞게 조정 (최대 CONFIG.LAYOUT.GRID.PROJECT_COLUMNS개까지)
          width: projects.length > 0 
            ? `calc(${Math.min(projects.length, CONFIG.LAYOUT.GRID.PROJECT_COLUMNS)} * ${CONFIG.CARD.PROJECT.WIDTH}px + (${Math.min(projects.length, CONFIG.LAYOUT.GRID.PROJECT_COLUMNS) - 1} * ${CONFIG.CARD.PROJECT.GAP}px))`
            : `calc(${CONFIG.LAYOUT.GRID.PROJECT_COLUMNS} * ${CONFIG.CARD.PROJECT.WIDTH}px + (${CONFIG.LAYOUT.GRID.PROJECT_COLUMNS} - 1) * ${CONFIG.CARD.PROJECT.GAP}px)`,
          // 프로젝트가 있든 없든 일정한 높이 유지 (카드 높이 + 하단 정보 영역)
          minHeight: `${CONFIG.CARD.PROJECT.HEIGHT + 60}px`, // 카드 256px + 텍스트 영역 60px
          margin: '0 auto',
          gap: gap,
        }}
      >
        {/* 스크롤바 감추기(webkit) */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar { display: none; height: 0; width: 0; }
        `}</style>

        {projects.length > 0 ? (
          projects.map((project, i) => (
            <ProjectCard
              key={project?.id || i}
              index={i}
              project={project}
              onProjectClick={handleProjectClick}
              onCardKeyDown={onCardKeyDown}
            />
          ))
        ) : (
          // 프로젝트가 없을 때 빈 공간 유지
          <div 
            className="flex items-center justify-center w-full text-gray-500"
            style={{ 
              height: `${CONFIG.CARD.PROJECT.HEIGHT + 60}px`,
              fontSize: '16px'
            }}
          >
            프로젝트가 없습니다
          </div>
        )}
      </div>

      

      <ProjectDetailModal
        isOpen={isModalOpen}
        onClose={closeModal}
        projectId={selectedProjectId}
        project={projects.find(p => p?.id === selectedProjectId) || null}
      />
    </section>
  );
}
