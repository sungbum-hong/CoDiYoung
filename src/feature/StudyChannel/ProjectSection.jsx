import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectGalleryModal from "./Modal/ProjectGalleryModal.jsx";
import { COLORS } from "../../utils/colors.js";
import useStudyChannelStore from "../../stores/studyChannelStore.js";

export default function ProjectSection() {
  const { 
    project: { count: projectCount, scrollIndex, itemsPerPage },
    openProjectModal,
    navigateProjectScroll 
  } = useStudyChannelStore();

  const openModal = (index) => {
    openProjectModal(index);
  };

  const handlePrevious = () => {
    navigateProjectScroll('prev');
  };

  const handleNext = () => {
    navigateProjectScroll('next');
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

        {/* 프로젝트 아바타들 */}
        <div className="flex gap-6 h-full">
          {visibleProjects.map((_, idx) => {
            const actualIndex = scrollIndex * itemsPerPage + idx;
            return (
              <ProjectAvatar key={actualIndex} onClick={() => openModal(actualIndex)} />
            );
          })}
        </div>

      </div>
      
      <ProjectGalleryModal />
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