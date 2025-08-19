import { useRef, useState } from "react";
import StudyModal from "./Modal/StudyModal.jsx";

export default function StudySection({ studyCount = 12 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);
  const railRef = useRef(null);

  const openModal = (index) => {
    setCurrentStudyIndex(index);
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // 화살표 클릭 시 화면에 보이는 카드 개수만큼 부드럽게 이동
  const scrollByCards = (dir = 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const CARD = 100; // 카드 한 변
    const gap = parseInt(getComputedStyle(rail).columnGap || "0", 10) || 32; // gap-8 = 32px
    const perPage = Math.max(1, Math.floor((rail.clientWidth + gap) / (CARD + gap)));
    const step = perPage * (CARD + gap);
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section className="mt-10">
      <h2 className="text-gray-800 font-medium mb-4">스터디</h2>

      <div className="relative">
        {/* 왼쪽 화살표 */}
        <button
          onClick={() => scrollByCards(-1)}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                     h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur
                     shadow hover:bg-white"
          aria-label="이전"
          type="button"
        >
          ◀
        </button>

        {/* 가로 스크롤 레일: 100px 칼럼, 카드 스냅 */}
        <div
          ref={railRef}
          className="grid grid-flow-col auto-cols-[100px] gap-8 overflow-x-auto scroll-smooth
                     snap-x snap-mandatory px-12 py-2
                     [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
        >
          {Array.from({ length: studyCount }).map((_, idx) => (
            <div key={idx} className="snap-start">
              <StudyCard onClick={() => openModal(idx)} />
            </div>
          ))}
        </div>

        {/* 오른쪽 화살표 */}
        <button
          onClick={() => scrollByCards(1)}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                     h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur
                     shadow hover:bg-white"
          aria-label="다음"
          type="button"
        >
          ▶
        </button>
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
      onClick={onClick}
      className="size-[100px] rounded-2xl bg-gray-300 cursor-pointer hover:bg-gray-400 transition-colors"
    />
  );
}
