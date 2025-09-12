import { create } from 'zustand';

const useStudyChannelStore = create((set, get) => ({
  // === 기본 정보 ===
  profile: {
    category: '코딩',
    studyCount: 1234
  },
  
  // === 출석 정보 ===
  attendance: {
    total: 30,
    filled: 2
  },
  
  // === 스터디 관련 ===
  study: {
    items: [],
    count: 12,
    currentIndex: 0,
    isLoading: false
  },
  
  // === 프로젝트 관련 ===
  project: {
    items: [],
    count: 8,
    currentIndex: 0,
    scrollIndex: 0,
    itemsPerPage: 4
  },
  
  // === 모달 상태 (통합 관리) ===
  modals: {
    study: false,
    project: false
  },
  
  // === 액션들 ===
  setProfile: (profile) => set((state) => ({ 
    profile: { ...state.profile, ...profile } 
  })),
  
  setAttendance: (attendance) => set((state) => ({ 
    attendance: { ...state.attendance, ...attendance } 
  })),
  
  // 스터디 액션
  setStudyItems: (items) => set((state) => ({ 
    study: { ...state.study, items } 
  })),
  
  setCurrentStudyIndex: (index) => set((state) => ({ 
    study: { ...state.study, currentIndex: index } 
  })),
  
  setStudyCount: (count) => set((state) => ({ 
    study: { ...state.study, count } 
  })),
  
  // 프로젝트 액션  
  setProjectItems: (items) => set((state) => ({ 
    project: { ...state.project, items } 
  })),
  
  setCurrentProjectIndex: (index) => set((state) => ({ 
    project: { ...state.project, currentIndex: index } 
  })),
  
  setProjectScrollIndex: (index) => set((state) => ({ 
    project: { ...state.project, scrollIndex: index } 
  })),
  
  setProjectCount: (count) => set((state) => ({ 
    project: { ...state.project, count } 
  })),
  
  // 모달 액션 (통합)
  openModal: (type) => set((state) => ({ 
    modals: { ...state.modals, [type]: true } 
  })),
  
  closeModal: (type) => set((state) => ({ 
    modals: { ...state.modals, [type]: false } 
  })),
  
  // 네비게이션 액션 (공통 로직)
  navigateStudy: (direction) => {
    const { study } = get();
    const newIndex = direction === 'next' 
      ? (study.currentIndex + 1) % study.count
      : (study.currentIndex - 1 + study.count) % study.count;
    set((state) => ({ 
      study: { ...state.study, currentIndex: newIndex } 
    }));
  },
  
  navigateProject: (direction) => {
    const { project } = get();
    const newIndex = direction === 'next'
      ? (project.currentIndex + 1) % project.count  
      : (project.currentIndex - 1 + project.count) % project.count;
    set((state) => ({ 
      project: { ...state.project, currentIndex: newIndex } 
    }));
  },

  // 프로젝트 스크롤 네비게이션
  navigateProjectScroll: (direction) => {
    const { project } = get();
    const maxPages = Math.ceil(project.count / project.itemsPerPage);
    
    let newScrollIndex;
    if (direction === 'next') {
      newScrollIndex = project.scrollIndex < maxPages - 1 
        ? project.scrollIndex + 1 
        : 0; // 무한 스크롤: 첫 페이지로
    } else {
      newScrollIndex = project.scrollIndex > 0 
        ? project.scrollIndex - 1 
        : maxPages - 1; // 무한 스크롤: 마지막 페이지로
    }
    
    set((state) => ({ 
      project: { ...state.project, scrollIndex: newScrollIndex } 
    }));
  },

  // 스터디 모달 열기 (인덱스와 함께)
  openStudyModal: (index) => {
    set((state) => ({
      study: { ...state.study, currentIndex: index },
      modals: { ...state.modals, study: true }
    }));
  },

  // 프로젝트 모달 열기 (인덱스와 함께)
  openProjectModal: (index) => {
    set((state) => ({
      project: { ...state.project, currentIndex: index },
      modals: { ...state.modals, project: true }
    }));
  },

  // 초기화 액션들
  resetStudyState: () => set((state) => ({
    study: {
      ...state.study,
      currentIndex: 0,
      isLoading: false
    },
    modals: { ...state.modals, study: false }
  })),

  resetProjectState: () => set((state) => ({
    project: {
      ...state.project,
      currentIndex: 0,
      scrollIndex: 0
    },
    modals: { ...state.modals, project: false }
  }))
}));

export default useStudyChannelStore;