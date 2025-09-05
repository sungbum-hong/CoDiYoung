import { COLORS } from "../../../utils/colors";
import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CalendarIcon } from "@heroicons/react/24/outline";
import DatePickerModal from "./DatePickerModal";
import { StudyService } from "../../../services/studyService.js";

// 분리된 컴포넌트들 import
import StudyGrid from "./components/StudyGrid.jsx";
import StudyModal from "./components/StudyModal.jsx";
import NavigationButtons from "./components/NavigationButtons.jsx";

export default function StudyContent() {
  const TOTAL_ITEMS = 30; // 30개 고정
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [studyData, setStudyData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const navigate = useNavigate();

  // 스터디 데이터 로드
  useEffect(() => {
    loadStudyData();
  }, []);

  const loadStudyData = async () => {
    try {
      setIsLoading(true);
      const data = await StudyService.getAllStudies(0, TOTAL_ITEMS);
      setStudyData(data.content || data || []);
    } catch (error) {
      setStudyData([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleItemClick = useCallback(async (index) => {
    setSelectedItem(index);
    
    // 해당 인덱스에 스터디 데이터가 있는지 확인
    const study = studyData[index];
    if (study) {
      try {
        // 개별 스터디 상세 정보 조회
        const detailData = await StudyService.getStudyById(study.id);
        setSelectedStudy(detailData);
      } catch (error) {
        setSelectedStudy(study); // 기본 데이터라도 표시
      }
    } else {
      setSelectedStudy(null);
    }
    
    setIsModalOpen(true);
  }, [studyData]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedItem(null);
    setSelectedStudy(null);
  }, []);

  const handleCalendarClick = useCallback(() => {
    setIsDatePickerOpen(true);
  }, []);

  const closeDatePicker = useCallback(() => {
    setIsDatePickerOpen(false);
  }, []);

  const handleEdit = useCallback(() => {
    if (selectedItem != null && selectedStudy) {
      navigate(`/write/${selectedStudy.id}`);
    }
  }, [navigate, selectedItem, selectedStudy]);

  const handleDelete = useCallback(() => {
    if (selectedItem != null) {
      // TODO: 실제 삭제 로직 연동
    }
  }, [selectedItem]);

  // 데이터가 있는 다음/이전 슬롯 찾기
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
    
    return null; // 데이터가 있는 슬롯이 없음
  }, [studyData]);

  // 모달 내 아이템 좌/우 이동(데이터가 있는 슬롯만)
  const goPrev = useCallback(async () => {
    const nextIndex = findNextDataSlot(selectedItem, 'prev');
    if (nextIndex === null) return; // 데이터가 있는 슬롯이 없으면 이동하지 않음
    
    setSelectedItem(nextIndex);
    
    const study = studyData[nextIndex];
    if (study) {
      try {
        const detailData = await StudyService.getStudyById(study.id);
        setSelectedStudy(detailData);
      } catch (error) {
        setSelectedStudy(study);
      }
    }
  }, [selectedItem, studyData, findNextDataSlot]);
  
  const goNext = useCallback(async () => {
    const nextIndex = findNextDataSlot(selectedItem, 'next');
    if (nextIndex === null) return; // 데이터가 있는 슬롯이 없으면 이동하지 않음
    
    setSelectedItem(nextIndex);
    
    const study = studyData[nextIndex];
    if (study) {
      try {
        const detailData = await StudyService.getStudyById(study.id);
        setSelectedStudy(detailData);
      } catch (error) {
        setSelectedStudy(study);
      }
    }
  }, [selectedItem, studyData, findNextDataSlot]);

  // 모달 열렸을 때 키보드 ←/→로 이동 (데이터가 있는 슬롯만)
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => {
      const tag = (e.target?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target?.isContentEditable)
        return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, goPrev, goNext]);

  // HTML에서 첫 글자 추출하는 함수
  const getFirstCharFromContent = (htmlContent) => {
    if (!htmlContent) return '';
    
    // HTML 태그 제거하고 텍스트만 추출
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    // 첫 번째 문자 반환 (공백 제외)
    const firstChar = textContent.trim().charAt(0);
    return firstChar;
  };

  // HTML에서 첫 번째 이미지 추출하는 함수
  const getFirstImageFromContent = (htmlContent) => {
    if (!htmlContent) return null;
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const imgElement = tempDiv.querySelector('img');
    
    return imgElement ? imgElement.src : null;
  };

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

  const getIntroductionFromContent = (htmlContent) => {
    if (!htmlContent) return '';
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    
    const introduction = textContent.trim().substring(0, 100);
    return introduction;
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
          getFirstCharFromContent={getFirstCharFromContent}
          getFirstImageFromContent={getFirstImageFromContent}
        />
      </div>

      {/* 상세 모달 */}
      <StudyModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedItem={selectedItem}
        selectedStudy={selectedStudy}
        onEdit={handleEdit}
        getFirstImageFromContent={getFirstImageFromContent}
        getIntroductionFromContent={getIntroductionFromContent}
      />

      {/* 모달 밖 화살표 버튼들 (데이터가 있는 슬롯만 이동) */}
      <NavigationButtons
        open={isModalOpen}
        onPrev={goPrev}
        onNext={goNext}
        color={COLORS.PRIMARY}
        gap={48}
        btn={40}
      />

      {/* 달력 모달 */}
      <DatePickerModal isOpen={isDatePickerOpen} onClose={closeDatePicker} />
    </main>
  );
}