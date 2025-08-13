import { useState } from "react";
import ProjectGalleryModal from "./Modal/ProjectGalleryModal.jsx";

export default function ProjectSection({ projectCount = 3 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const openModal = (index) => {
    setCurrentProjectIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-12">
      <h2 className="text-gray-800 font-medium mb-4">참여 프로젝트</h2>
      <div className="rounded-2xl border-2 border-blue-900 p-6 h-[360px]">
        <div className="flex items-center gap-6">
          {Array.from({ length: projectCount }).map((_, idx) => (
            <ProjectAvatar key={idx} onClick={() => openModal(idx)} />
          ))}
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
      className="w-14 h-14 bg-gray-300 rounded-full cursor-pointer hover:bg-gray-400 transition-colors" 
      onClick={onClick}
    />
  );
}