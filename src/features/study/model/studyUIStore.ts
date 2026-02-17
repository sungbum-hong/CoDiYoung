import { create } from 'zustand';

interface StudyUIState {
  modals: {
    study: boolean;
    datePicker: boolean;
  };
  selectedIndex: number | null;
  selectedStudyId: number | null;
  openStudyModal: (index: number, studyId: number) => void;
  closeModal: (type: 'study' | 'datePicker') => void;
  openDatePickerModal: () => void;
  getFirstChar: (htmlContent: string) => string;
  getFirstImage: (htmlContent: string) => string | null;
  getIntroduction: (htmlContent: string) => string;
}

// UI 상태만 관리하는 Zustand 스토어
const useStudyUIStore = create<StudyUIState>((set, get) => ({
  // === 모달 상태 ===
  modals: {
    study: false,
    datePicker: false
  },
  
  // === 선택된 아이템 정보 ===
  selectedIndex: null,
  selectedStudyId: null,
  
  // === 액션들 ===
  openStudyModal: (index: number, studyId: number) => {
    set({
      selectedIndex: index,
      selectedStudyId: studyId,
      modals: { study: true, datePicker: false }
    });
  },
  
  closeModal: (type: 'study' | 'datePicker') => {
    set((state) => ({
      modals: { ...state.modals, [type]: false },
      // 스터디 모달이 닫힐 때 선택 정보 초기화
      ...(type === 'study' && {
        selectedIndex: null,
        selectedStudyId: null
      })
    }));
  },
  
  openDatePickerModal: () => {
    set((state) => ({
      modals: { ...state.modals, datePicker: true }
    }));
  },
  
  // === 유틸리티 함수들 (props로 전달할 필요 없음!) ===
  getFirstChar: (htmlContent: string) => {
    if (!htmlContent) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    return textContent.trim().charAt(0);
  },
  
  getFirstImage: (htmlContent: string) => {
    if (!htmlContent) return null;
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const imgElement = tempDiv.querySelector('img');
    return imgElement ? imgElement.src : null;
  },
  
  getIntroduction: (htmlContent: string) => {
    if (!htmlContent) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    return textContent.trim().substring(0, 100);
  }
}));

export default useStudyUIStore;