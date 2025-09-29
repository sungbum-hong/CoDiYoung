import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectGalleryModal from "./Modal/ProjectGalleryModal.jsx";
import { COLORS } from "../../utils/colors.js";
import useStudyChannelStore from "../../stores/studyChannelStore.js";

export default function ProjectSection() {
  const { 
    project: { items: projectItems, count: projectCount, scrollIndex, itemsPerPage },
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

  // 실제 프로젝트 데이터에서 현재 페이지에 표시할 항목들 계산
  const visibleProjects = projectItems.slice(
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
          {projectCount > 0 ? (
            visibleProjects.map((project, idx) => {
              const actualIndex = scrollIndex * itemsPerPage + idx;
              return (
                <ProjectAvatar 
                  key={project.id || actualIndex} 
                  project={project}
                  onClick={() => openModal(actualIndex)} 
                />
              );
            })
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              완료된 프로젝트가 없습니다.
            </div>
          )}
        </div>

        {/* 네비게이션 버튼들 - 프로젝트가 여러 페이지에 걸쳐 있을 때만 표시 */}
        {totalPages > 1 && (
          <>
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              title="이전 페이지"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              title="다음 페이지"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* 페이지 인디케이터 */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">
              {currentPage} / {totalPages}
            </div>
          </>
        )}

      </div>
      
      <ProjectGalleryModal />
    </section>
  );
}

function ProjectAvatar({ project, onClick }) {
  const { id, logoImageURL } = project;
  
  return (
    <div 
      className="w-14 h-14 rounded-full cursor-pointer transition-all duration-200 overflow-hidden border-2 border-gray-200 hover:border-blue-400 hover:scale-105 flex-shrink-0"
      onClick={onClick}
      title={`프로젝트 ${id}`}
    >
      {logoImageURL ? (
        <img 
          src={logoImageURL} 
          alt={`프로젝트 ${id} 로고`}
          className="w-full h-full object-cover"
          onError={(e) => {
            // 이미지 로드 실패 시 기본 배경으로 변경
            e.target.style.display = 'none';
            e.target.parentElement.style.backgroundColor = COLORS.GRAY_300;
            e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-xs text-gray-600 font-medium">${id}</div>`;
          }}
        />
      ) : (
        <div 
          className="w-full h-full flex items-center justify-center text-xs text-gray-600 font-medium"
          style={{ backgroundColor: COLORS.GRAY_300 }}
        >
          {id}
        </div>
      )}
    </div>
  );
}