export const MOCK_PROFILE = {
  user: {
    nickname: "디자인 취준생",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
    tags: ["디자인", "영상편집"],
    description: "안녕하세요 영상편집 공부하는 디자이너 입니다!",
    studyField: "디자인",
    email: "CDY1234@gmail.com",
  },
};

export const MOCK_ATTENDANCE = {
  // 2025-12 Mock Data
  "2025-12": {
    checkedDates: [5, 10, 11, 13, 15, 16], // Days that are checked
    today: 5, // Simulation: Today is Dec 5th
    month: 12,
    year: 2025,
  },
};

export const STUDY_FIELDS = [
  "디자인",
  "프론트엔드",
  "백엔드",
  "기획",
  "영상편집",
];

export const MOCK_MY_STUDIES = [
  {
    id: 1,
    date: "2025.12.22",
    title: "프리미어 프로를 영문판 변경 방법",
    content:
      "application 검색하면 언어가 뜸 두번째에 있는건 두개의 언어를 같이 쓸거냐고 묻는거임 (두번째 언어는 영어) 그래서 체크하면 두개 다뜸 영어만 쓰고 싶으면 체크 해제하고 첫번째 en_U...",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=300&auto=format&fit=crop",
    user: {
      nickname: "디자인 취준생",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
    },
  },
  {
    id: 2,
    date: "2025.12.20",
    title: "현직에서는 이런 순서로 편집해요",
    content:
      "편집해야할 영상의 원본 소대들을 데탑은 D드라이브, 노트북의 경우 외장하드에 저장하는 것을 선호함\n폴더 정리의 경우 날짜순으로 정리하는게 편함",
    image:
      "https://images.unsplash.com/photo-1574717432707-c6780e59a418?q=80&w=300&auto=format&fit=crop",
    user: {
      nickname: "디자인 취준생",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
    },
  },
  {
    id: 3,
    date: "2025.12.19",
    title: "소소한 컷 편집 팁",
    content:
      "자막템플릿이 있으면 좋음\n자막템플릿을 만들어 놓은 프로젝트 파일을 하나 미리 만들어 놓고 그거를 불러오면 좋음...",
    image:
      "https://images.unsplash.com/photo-1626544827763-d516dce335ca?q=80&w=300&auto=format&fit=crop",
    user: {
      nickname: "디자인 취준생",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
    },
  },
  {
    id: 4,
    date: "2025.12.08",
    title: "BGM, 효과음, 효과",
    content:
      "BGM : 유튜브 스튜디오 BGM Official : artlist 인스타그램, 틱톡 : 캡컷 등\n브 효과 : 비공식적인건 유튜브에서 (ex. snow green screen 검색하면 나옴)\n공식적인건 envato market에서",
    image: null,
    user: {
      nickname: "디자인 취준생",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
    },
  },
  {
    id: 5,
    date: "2025.12.08",
    title: "BGM, 효과음, 효과",
    content:
      "BGM : 유튜브 스튜디오 BGM Official : artlist 인스타그램, 틱톡 : 캡컷 등\n브 효과 : 비공식적인건 유튜브에서 (ex. snow green screen 검색하면 나옴)\n공식적인건 envato market에서",
    image: null,
    user: {
      nickname: "디자인 취준생",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
    },
  },
];

export const MOCK_MY_PROJECTS = {
  interested: [
    {
      id: 1,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      status: "참여 인원 : 인원 미정",
      deadline: "2026-01-01",
      positions: ["디자이너", "백엔드"],
      participantsCount: 1,
      isLiked: true,
      user: {
        nickname: "디자인 취준생",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
      },
    },
    {
      id: 2,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      status: "참여 인원 : 인원 미정",
      deadline: "2026-01-01",
      positions: ["디자이너", "백엔드"],
      participantsCount: 1,
      isLiked: true,
      user: {
        nickname: "디자인 취준생",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
      },
    },
    {
      id: 3,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      status: "참여 인원 : 인원 미정",
      deadline: "2026-01-01",
      positions: ["디자이너", "백엔드"],
      participantsCount: 1,
      isLiked: true,
      user: {
        nickname: "디자인 취준생",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
      },
    },
  ],
  applied: [
    {
      id: 4,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      status: "참여 인원 : 인원 미정",
      deadline: "2026-01-01",
      positions: ["디자이너", "백엔드"],
      participantsCount: 1,
      isLiked: true,
      user: {
        nickname: "디자인 취준생",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
      },
    },
    {
      id: 5,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      status: "참여 인원 : 인원 미정",
      deadline: "2026-01-01",
      positions: ["디자이너", "백엔드"],
      participantsCount: 1,
      isLiked: true,
      user: {
        nickname: "디자인 취준생",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
      },
    },
    {
      id: 6,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      status: "참여 인원 : 인원 미정",
      deadline: "2026-01-01",
      positions: ["디자이너", "백엔드"],
      participantsCount: 1,
      isLiked: true,
      user: {
        nickname: "디자인 취준생",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Molly",
      },
    },
  ],
  ongoing: [],
  completed: [],
};
