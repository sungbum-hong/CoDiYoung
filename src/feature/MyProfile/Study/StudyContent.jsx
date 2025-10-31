import { COLORS } from "../../../constants/colors.js";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePickerModal from "./DatePickerModal";

// React 19.2 Activity
import { Activity } from "react";

// React Query & Zustand
import { useUserStudies } from "../../../hooks/useStudyQueries.js";
import useStudyUIStore from "../../../stores/studyUIStore.js";
import { useProfile } from "../hooks/useProfile.js";
import { UserProfileService } from "../../../services/userProfile/UserProfileService.js";

// 분리된 컴포넌트
import StudyGrid from "./components/StudyGrid.jsx";
import StudyModal from "./components/StudyModal.jsx";
import NavigationButtons from "./components/NavigationButtons.jsx";

export default function StudyContent() {
  const TOTAL_ITEMS = 30;
  const navigate = useNavigate();

  // 프로필 조회
  const { data: userProfile } = useProfile();
  
  // 스터디 조회
  const { data: studyResponse, isLoading, error, refetch } = useUserStudies({
    page: 0, 
    size: TOTAL_ITEMS,
    sort: ['createdAt,DESC']
  });

  // Zustand 스터디 UI 상태
  const { modals, selectedIndex, openStudyModal, closeModal, openDatePickerModal } = useStudyUIStore();

  // studyData 생성
  const studyData = useMemo(() => {
    if (!studyResponse?.studies) return [];
    const padded = new Array(TOTAL_ITEMS).fill(null);
    studyResponse.studies.forEach((study, idx) => {
      if (idx < TOTAL_ITEMS) padded[idx] = study;
    });
    return padded;
  }, [studyResponse?.studies]);

  const profileImageUrl = useMemo(() => {
    if (!userProfile?.imageKey) return null;
    return UserProfileService.getProfileImageUrl(userProfile.imageKey);
  }, [userProfile?.imageKey]);

  const displayData = useMemo(() => {
    if (isLoading || error) return new Array(TOTAL_ITEMS).fill(null);
    return studyData;
  }, [studyData, isLoading, error]);

  const handleItemClick = useCallback((index) => {
    const study = displayData[index];
    if (study?.studyId) openStudyModal(index, study.studyId);
  }, [displayData, openStudyModal]);

  const handleCalendarClick = useCallback(() => {
    openDatePickerModal();
  }, [openDatePickerModal]);

  const closeDatePicker = useCallback(() => {
    closeModal('datePicker');
  }, [closeModal]);

  const handleEdit = useCallback(() => {
    const study = displayData[selectedIndex];
    if (study?.studyId) navigate(`/write/${study.studyId}`);
  }, [navigate, selectedIndex, displayData]);

  const findNextDataSlot = useCallback((currentIndex, direction) => {
    let newIndex = currentIndex;
    let attempts = 0;
    while (attempts < TOTAL_ITEMS) {
      newIndex = direction === 'next'
        ? (newIndex + 1) % TOTAL_ITEMS
        : (newIndex - 1 + TOTAL_ITEMS) % TOTAL_ITEMS;
      if (displayData[newIndex]) return newIndex;
      attempts++;
    }
    return null;
  }, [displayData]);

  const goPrev = useCallback(() => {
    const nextIndex = findNextDataSlot(selectedIndex, 'prev');
    if (nextIndex !== null) {
      const study = displayData[nextIndex];
      openStudyModal(nextIndex, study.studyId);
    }
  }, [selectedIndex, displayData, findNextDataSlot, openStudyModal]);

  const goNext = useCallback(() => {
    const nextIndex = findNextDataSlot(selectedIndex, 'next');
    if (nextIndex !== null) {
      const study = displayData[nextIndex];
      openStudyModal(nextIndex, study.studyId);
    }
  }, [selectedIndex, displayData, findNextDataSlot, openStudyModal]);

  const onCalendarEnter = useCallback((e) => {
    e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
    e.currentTarget.style.color = COLORS.WHITE;
  }, []);
  
  const onCalendarLeave = useCallback((e) => {
    e.currentTarget.style.backgroundColor = COLORS.WHITE;
    e.currentTarget.style.color = COLORS.PRIMARY;
  }, []);

  return (
    <main className="flex-1 py-6 px-24 overflow-auto">
      <div className="w-full h-full">
        {/* 달력 버튼 */}
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
          studyData={displayData}
          isLoading={isLoading}
          onItemClick={handleItemClick}
          error={error}
          onRetry={refetch}
          userProfile={userProfile}
          profileImageUrl={profileImageUrl}
        />

        {isLoading && (
          <div className="text-center py-8 text-gray-500">
            스터디 목록을 불러오는 중...
          </div>
        )}
        
        {error && (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">스터디 목록을 불러오는데 실패했습니다.</p>
            <button 
              onClick={refetch}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              다시 시도
            </button>
          </div>
        )}
      </div>

      {/* 모달들 - Activity 적용 */}
      <Activity mode={modals.study ? 'visible' : 'hidden'}>
        <StudyModal onEdit={handleEdit} />
      </Activity>

      <Activity mode={modals.datePicker ? 'visible' : 'hidden'}>
        <DatePickerModal isOpen={modals.datePicker} onClose={closeDatePicker} />
      </Activity>

      {/* 화살표 버튼 */}
      <NavigationButtons
        open={modals.study}
        onPrev={goPrev}
        onNext={goNext}
        color={COLORS.PRIMARY}
        gap={48}
        btn={40}
      />
    </main>
  );
}
