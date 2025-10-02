import { COLORS } from "../../utils/colors.js";
import useStudyChannelStore from "../../stores/studyChannelStore.js";
import StudyModal from "./Modal/StudyModal.jsx";
import StudyCard from "./components/StudyCard.jsx";
import { useHorizontalScroll } from "./hooks/useHorizontalScroll.js";

export default function StudySection() {
  const { 
    study: { count: studyCount },
    openStudyModal
  } = useStudyChannelStore();

  const { railRef, scrollByCards } = useHorizontalScroll();

  const openModal = (index) => {
    openStudyModal(index);
  };

  return (
    <section className="mt-10">
      <h2 className="font-medium mb-4" style={{ color: COLORS.GRAY_800 }}>스터디</h2>

      <div className="relative min-h-[120px]">
        {/* 왼쪽 화살표 - 스터디가 있을 때만 표시 */}
        {studyCount > 0 && (
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
        )}

        {/* 가로 스크롤 레일: 100px 칼럼, 카드 스냅 */}
        <div
          ref={railRef}
          className="grid grid-flow-col auto-cols-[100px] gap-8 overflow-x-auto scroll-smooth
                     snap-x snap-mandatory px-12 py-2 min-h-[104px]
                     [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden"
        >
          {Array.from({ length: studyCount }).map((_, idx) => (
            <div key={idx} className="snap-start">
              <StudyCard onClick={() => openModal(idx)} />
            </div>
          ))}
        </div>

        {/* 오른쪽 화살표 - 스터디가 있을 때만 표시 */}
        {studyCount > 0 && (
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
        )}
      </div>

      <StudyModal>
        <h3 className="text-lg font-semibold mb-4">스터디 상세 정보</h3>
        <p>스터디에 대한 상세 정보가 여기에 표시됩니다.</p>
      </StudyModal>
    </section>
  );
}

