import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectGalleryModal from "./Modal/ProjectGalleryModal.jsx";
import { COLORS } from "../../utils/colors.js";

export default function ProjectSection({ projectCount = 8 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);

  const itemsPerPage = 4; // 한 번에 보여줄 항목 수

  const openModal = (index) => {
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  const handlePrevious = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    } else {
      // 무한 스크롤: 마지막 페이지로 이동
      const maxPages = Math.ceil(projectCount / itemsPerPage);
      setScrollIndex(maxPages - 1);
    }
  };

  const handleNext = () => {
    const maxPages = Math.ceil(projectCount / itemsPerPage);
    if (scrollIndex < maxPages - 1) {
      setScrollIndex(scrollIndex + 1);
    } else {
      // 무한 스크롤: 첫 페이지로 이동
      setScrollIndex(0);
    }
  };

  const visibleProjects = Array.from({ length: projectCount }).slice(
    scrollIndex * itemsPerPage,
    (scrollIndex + 1) * itemsPerPage
  );

  const currentPage = scrollIndex + 1;
  const totalPages = Math.ceil(projectCount / itemsPerPage);

  return (
    <section className="mt-12">
      <h2 className="font-medium mb-4" style={{ color: COLORS.GRAY_800 }}>참여 프로젝트</h2>
      <div className="rounded-2xl border-2 p-6 h-[360px] relative" style={{ borderColor: COLORS.BLUE_900 }}>
        {/* 화살표 버튼 */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
          style={{ backgroundColor: COLORS.WHITE, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_100}
          onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.WHITE}
        >
          <ChevronLeftIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10"
          style={{ backgroundColor: COLORS.WHITE, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_100}
          onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.WHITE}
        >
          <ChevronRightIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
        </button>

        {/* 프로젝트 아바타들 */}
        <div className="flex items-center justify-center gap-6 h-full">
          {visibleProjects.map((_, idx) => {
            const actualIndex = scrollIndex * itemsPerPage + idx;
            return (
              <ProjectAvatar key={actualIndex} onClick={() => openModal(actualIndex)} />
            );
          })}
        </div>

        {/* 페이지 인디케이터 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
          <span className="text-sm" style={{ color: COLORS.GRAY_600 }}>
            {currentPage} / {totalPages}
          </span>
        </div>
      </div>
      
      <ProjectGalleryModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        currentIndex={currentProjectIndex}
        totalItems={projectCount}
        onIndexChange={setCurrentProjectIndex}
      />
    </section>
  );
}

function ProjectAvatar({ onClick }) {
  return (
    <div 
      className="w-14 h-14 rounded-full cursor-pointer transition-colors"
      style={{ backgroundColor: COLORS.GRAY_300 }}
      onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_400}
      onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.GRAY_300} 
      onClick={onClick}
    />
  );
}