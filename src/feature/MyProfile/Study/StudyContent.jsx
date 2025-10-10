import { COLORS } from "../../../utils/colors";
import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePickerModal from "./DatePickerModal";

// React Query & Zustand - 새로운 훅 사용
import { useUserStudies } from "../../../hooks/useStudyQueries.js";
import useStudyUIStore from "../../../stores/studyUIStore.js";
import { useProfile } from "../hooks/useProfile.js";
import { UserProfileService } from "../../../services/userProfileService.js";

// 분리된 컴포넌트들 import
import StudyGrid from "./components/StudyGrid.jsx";
import StudyModal from "./components/StudyModal.jsx";
import NavigationButtons from "./components/NavigationButtons.jsx";

export default function StudyContent() {
  const TOTAL_ITEMS = 30; // 30개 고정
  const navigate = useNavigate();
  
  // 유저 프로필 정보 조회
  const { data: userProfile, isLoading: isProfileLoading } = useProfile();
  
  // 새로운 React Query 훅 사용 - /api/study/users/studies API 호출
  const { 
    data: studyResponse, 
    isLoading, 
    error,
    refetch 
  } = useUserStudies({
    page: 0, 
    size: 30, // TOTAL_ITEMS와 동일하게 설정
    sort: ['createdAt,DESC']
  });

  // Zustand 스터디 UI 상태 관리
  const { 
    modals, 
    selectedIndex,
    openStudyModal, 
    closeModal, 
    openDatePickerModal,
  } = useStudyUIStore();

  // API 응답에서 실제 스터디 데이터 추출
  const studyData = useMemo(() => {
    if (!studyResponse?.studies) return [];
    
    // 30개 슬롯에 맞춰 데이터 배치 (필요시)
    const studies = studyResponse.studies;
    const paddedData = new Array(TOTAL_ITEMS).fill(null);
    
    // 실제 스터디 데이터를 앞쪽 슬롯부터 채움
    studies.forEach((study, index) => {
      if (index < TOTAL_ITEMS) {
        paddedData[index] = study;
      }
    });
    
    return paddedData;
  }, [studyResponse?.studies]);

  // 유저 프로필 이미지 URL 생성
  const profileImageUrl = useMemo(() => {
    console.log('🖼️ [StudyContent] 프로필 이미지 URL 생성:', {
      userProfile,
      imageKey: userProfile?.imageKey,
      hasImageKey: !!userProfile?.imageKey
    });
    
    if (!userProfile?.imageKey) {
      console.log('⚠️ [StudyContent] imageKey 없음, 프로필 이미지 URL null 반환');
      return null;
    }
    
    const url = UserProfileService.getProfileImageUrl(userProfile.imageKey);
    console.log('✅ [StudyContent] 프로필 이미지 URL 생성됨:', url);
    return url;
  }, [userProfile?.imageKey]);

  // 로딩 중이거나 에러가 있을 때 처리
  const displayData = useMemo(() => {
    if (isLoading || error) {
      return new Array(TOTAL_ITEMS).fill(null);
    }
    return studyData;
  }, [studyData, isLoading, error]);

  // 스터디 아이템 클릭 핸들러
  const handleItemClick = useCallback((index) => {
    const study = displayData[index];
    if (study?.studyId) { // API 응답 구조에 맞춰 studyId 사용
      openStudyModal(index, study.studyId);
    }
  }, [displayData, openStudyModal]);

  // 달력 모달 열기
  const handleCalendarClick = useCallback(() => {
    openDatePickerModal();
  }, [openDatePickerModal]);

  // 달력 모달 닫기
  const closeDatePicker = useCallback(() => {
    closeModal('datePicker');
  }, [closeModal]);

  // 편집 핸들러
  const handleEdit = useCallback(() => {
    const study = displayData[selectedIndex];
    if (study?.studyId) { // API 응답 구조에 맞춰 studyId 사용
      navigate(`/write/${study.studyId}`);
    }
  }, [navigate, selectedIndex, displayData]);

  // 다음/이전 스터디 슬롯 찾기 (데이터가 있는 슬롯만)
  const findNextDataSlot = useCallback((currentIndex, direction) => {
    let newIndex = currentIndex;
    let attempts = 0;
    
    while (attempts < TOTAL_ITEMS) {
      newIndex = direction === 'next' 
        ? (newIndex + 1) % TOTAL_ITEMS 
        : (newIndex - 1 + TOTAL_ITEMS) % TOTAL_ITEMS;
      
      if (displayData[newIndex]) {
        return newIndex;
      }
      attempts++;
    }
    
    return null;
  }, [displayData]);

  // 이전 스터디로 이동
  const goPrev = useCallback(() => {
    const nextIndex = findNextDataSlot(selectedIndex, 'prev');
    if (nextIndex !== null) {
      const study = displayData[nextIndex];
      openStudyModal(nextIndex, study.studyId);
    }
  }, [selectedIndex, displayData, findNextDataSlot, openStudyModal]);
  
  // 다음 스터디로 이동
  const goNext = useCallback(() => {
    const nextIndex = findNextDataSlot(selectedIndex, 'next');
    if (nextIndex !== null) {
      const study = displayData[nextIndex];
      openStudyModal(nextIndex, study.studyId);
    }
  }, [selectedIndex, displayData, findNextDataSlot, openStudyModal]);

  // 달력 버튼 hover 효과
  const onCalendarEnter = useCallback((e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.PRIMARY;
    el.style.color = COLORS.WHITE;
  }, []);
  
  const onCalendarLeave = useCallback((e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.WHITE;
    el.style.color = COLORS.PRIMARY;
  }, []);

  // 에러 상태 처리
  if (error) {
    console.error('스터디 목록 조회 실패:', error);
    // 에러가 있어도 UI는 계속 렌더링 (빈 상태로)
  }

  // 디버깅을 위한 정보 (개발 환경에서만)
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 [StudyContent] 전체 상태:', {
      isLoading,
      error: error?.message,
      totalStudies: studyResponse?.totalElements || 0,
      studiesInCurrentPage: studyResponse?.studies?.length || 0,
      hasNext: studyResponse?.hasNext || false,
      currentPage: studyResponse?.currentPage || 0,
      userProfile: userProfile,
      profileImageUrl: profileImageUrl,
      isProfileLoading
    });
    
    console.log('📝 [StudyContent] 스터디 데이터 샘플:', {
      firstStudy: studyResponse?.studies?.[0],
      studyDataLength: displayData.length,
      displayDataSample: displayData.slice(0, 3)
    });
  }

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

        {/* 스터디 그리드 - 새로운 데이터 구조 사용 */}
        <StudyGrid
          studyData={displayData}
          isLoading={isLoading}
          onItemClick={handleItemClick}
          error={error}
          onRetry={refetch} // 재시도 기능 추가
          userProfile={userProfile}
          profileImageUrl={profileImageUrl}
        />

        {/* 로딩 또는 에러 상태 표시 */}
        {isLoading && (
          <div className="text-center py-8 text-gray-500">
            스터디 목록을 불러오는 중...
          </div>
        )}
        
        {error && (
          <div className="text-center py-8">
            <p className="text-red-500 mb-4">
              스터디 목록을 불러오는데 실패했습니다.
            </p>
            <button 
              onClick={refetch}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
              다시 시도
            </button>
          </div>
        )}

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