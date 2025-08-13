import { useState } from "react";
import StudyModal from "./Modal/StudyModal.jsx";

export default function StudySection({ studyCount = 4 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);

  const openModal = (index) => {
    setCurrentStudyIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="mt-10">
      <h2 className="text-gray-800 font-medium mb-4">스터디</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        {Array.from({ length: studyCount }).map((_, idx) => (
          <StudyCard key={idx} onClick={() => openModal(idx)} />
        ))}
      </div>
      
      <StudyModal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        currentIndex={currentStudyIndex}
        totalItems={studyCount}
        onIndexChange={setCurrentStudyIndex}
      >
        <h3 className="text-lg font-semibold mb-4">스터디 상세 정보</h3>
        <p>스터디에 대한 상세 정보가 여기에 표시됩니다.</p>
      </StudyModal>
    </section>
  );
}

function StudyCard({ onClick }) {
  return (
    <div 
      className="h-28 rounded-2xl bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors" 
      onClick={onClick}
    />
  );
}