import { COLORS } from "../../../utils/colors";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePickerModal from "./DatePickerModal";

// React Query & Zustand
import { useStudies } from "../../../hooks/useStudyQueries.js";
import useStudyUIStore from "../../../stores/studyUIStore.js";

// 분리된 컴포넌트들 import
import StudyGrid from "./components/StudyGrid.jsx";
import StudyModal from "./components/StudyModal.jsx";
import NavigationButtons from "./components/NavigationButtons.jsx";

export default function StudyContent() {
  const TOTAL_ITEMS = 30; // 30개 고정
  const navigate = useNavigate();
  
  // React Query로 서버 상태 관리
  const { data: studyData = [], isLoading } = useStudies({ size: TOTAL_ITEMS });
  
  // Zustand로 UI 상태 관리
  const { 
    modals, 
    selectedIndex,
    openStudyModal, 
    closeModal, 
    openDatePickerModal,
    getFirstChar,
    getFirstImage 
  } = useStudyUIStore();

  // 스터디 아이템 클릭 핸들러 (API 호출 없음! React Query가 알아서 캐싱)
  const handleItemClick = useCallback((index) => {
    const study = studyData[index];
    if (study) {
      openStudyModal(index, study.id);
    }
  }, [studyData, openStudyModal]);

  // 달력 모달 열기
  const handleCalendarClick = useCallback(() => {
    openDatePickerModal();
  }, [openDatePickerModal]);

  // 달력 모달 닫기
  const closeDatePicker = useCallback(() => {
    closeModal('datePicker');
  }, [closeModal]);

  // 편집 핸들러 (Zustand에서 선택된 스터디 ID 사용)
  const handleEdit = useCallback(() => {
    const study = studyData[selectedIndex];
    if (study?.id) {
      navigate(`/write/${study.id}`);
    }
  }, [navigate, selectedIndex, studyData]);

  // 네비게이션 핸들러들 (Zustand 상태 사용)
  const findNextDataSlot = useCallback((currentIndex, direction) => {
    let newIndex = currentIndex;
    let attempts = 0;
    
    while (attempts < TOTAL_ITEMS) {
      newIndex = direction === 'next' 
        ? (newIndex + 1) % TOTAL_ITEMS 
        : (newIndex - 1 + TOTAL_ITEMS) % TOTAL_ITEMS;
      
      if (studyData[newIndex]) {
        return newIndex;
      }
      attempts++;
    }
    
    return null;
  }, [studyData]);

  const goPrev = useCallback(() => {
    const nextIndex = findNextDataSlot(selectedIndex, 'prev');
    if (nextIndex !== null) {
      const study = studyData[nextIndex];
      openStudyModal(nextIndex, study.id);
    }
  }, [selectedIndex, studyData, findNextDataSlot, openStudyModal]);
  
  const goNext = useCallback(() => {
    const nextIndex = findNextDataSlot(selectedIndex, 'next');
    if (nextIndex !== null) {
      const study = studyData[nextIndex];
      openStudyModal(nextIndex, study.id);
    }
  }, [selectedIndex, studyData, findNextDataSlot, openStudyModal]);

  const onCalendarEnter = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.PRIMARY;
    el.style.color = COLORS.WHITE;
  };
  
  const onCalendarLeave = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.WHITE;
    el.style.color = COLORS.PRIMARY;
  };


  return (
    <main className="flex-1 py-6 px-24 overflow-auto">
      <div className="w-full h-full">
        {/* 상단 달력 아이콘 */}
        <div className="flex justify-end mb-12">
          <button
            onClick={handleCalendarClick}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: COLORS.WHITE,
              border: `2px solid ${COLORS.PRIMARY}`,
              color: COLORS.PRIMARY,
            }}
            onMouseEnter={onCalendarEnter}
            onMouseLeave={onCalendarLeave}
            title="달력"
            aria-label="달력 열기"
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 스터디 그리드 */}
        <StudyGrid
          studyData={studyData}
          isLoading={isLoading}
          onItemClick={handleItemClick}
        />
      </div>

      {/* 상세 모달 */}
      <StudyModal
        onEdit={handleEdit}
      />

      {/* 모달 밖 화살표 버튼들 (데이터가 있는 슬롯만 이동) */}
      <NavigationButtons
        open={modals.study}
        onPrev={goPrev}
        onNext={goNext}
        color={COLORS.PRIMARY}
        gap={48}
        btn={40}
      />

      {/* 달력 모달 */}
      <DatePickerModal isOpen={modals.datePicker} onClose={closeDatePicker} />
    </main>
  );
}