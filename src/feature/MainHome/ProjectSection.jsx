import { useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import ProjectDetailModal from "../../ui/ProjectDetailModal.jsx";

export default function ProjectSection({ title = "프로젝트", itemCount = 10 }) {
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
      const cardWidth = 192; // w-48 = 12rem = 192px
      const gap = 20; // gap-5 = 1.25rem = 20px
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
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
        aria-label="이전 프로젝트 보기"
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
      </button>

      {/* 카드 영역 */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth scrollbar-hide"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          width: 'calc(5 * 192px + 4 * 20px)', // 5개 카드 + 4개 gap
          margin: '0 auto'
        }}
      >
        {Array.from({ length: itemCount }).map((_, i) => (
          <div
            key={i}
            className="bg-gray-300 w-48 h-60 rounded-2xl flex-shrink-0 flex items-center justify-center hover:bg-gray-400 transition-colors cursor-pointer"
            onClick={() => handleProjectClick(i)}
          >
          </div>
        ))}
      </div>

      {/* 오른쪽 버튼 */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100 transition-colors"
        aria-label="다음 프로젝트 보기"
      >
        <ChevronRightIcon className="w-5 h-5 text-gray-600" />
      </button>

      <ProjectDetailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        projectIndex={selectedProjectIndex}
      />
    </section>
  );
}
