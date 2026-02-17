export const MOCK_PUBLIC_PROFILE = {
  user: {
    name: "디자인 취준생",
    category: "디자인", // Label for the badge
    introduction: "안녕하세요 영상편집 공부하는 학생입니다!\n잘부탁 드립니다",
    profileImage: null,
  },
  stats: {
    attendanceCount: 5,
    studyCount: 5,
    projectCount: 2,
  },
  attendance: [
    // format: YYYY-MM-DD
    "2025-12-05",
    "2025-12-10",
    "2025-12-11",
    "2025-12-13",
    "2025-12-15",
    "2025-12-16",
    "2025-12-19",
  ],
  studies: [
    {
      id: 1,
      title: "프리미어 프로를 영문판 변경 방법",
      content:
        "application 검색하면 언어가 뜸 두번째에 있는건 두개의 언어를 같이 쓸거냐고 묻는거임 (두번째 언어는 영어) 그래서 체크하면 두개 다뜸 영어만 쓰고 싶으면 두번째 체크 해제하고 첫번째 en_U...",
      createdAt: "2025.12.22",
      author: "디자인 취준생",
      image: "https://placehold.co/100x100/333/FFF?text=IMG", // Placeholder
    },
    {
      id: 2,
      title: "현직에서는 이런 순서로 편집해요",
      content:
        "편집해야할 영상의 원본 소스들을 데탐은 D드라이브, 노트북의 경우 외장하드에 저장하는 것을 선호함\n폴더 정리의 경우 날짜순으로 정리하는게 편함",
      createdAt: "2025.12.20",
      author: "디자인 취준생",
      image: "https://placehold.co/100x100/333/FFF?text=IMG",
    },
    {
      id: 3,
      title: "소소한 컷 편집 팁",
      content:
        "자막템플릿이 있으면 좋음\n자막템플릿을 만들어 놓은 프로젝트 파일을 하나 미리 만들어 놓고 그거를 불러오면 좋음...",
      createdAt: "2025.12.19",
      author: "디자인 취준생",
      image: "https://placehold.co/100x100/333/FFF?text=IMG",
    },
    {
      id: 4,
      title: "BGM, 효과음, 효과",
      content:
        "BGM : 유튜브 스튜디오 BGM Official : artlist 인스타그램, 틱톡 : 검증된 음원\n브 효과 : 비공식적인건 유튜브에서 (ex. snow green screen 검색하면 나옴)\n공식적인건 envato market에서",
      createdAt: "2025.12.08",
      author: "디자인 취준생",
      image: null, // No image case
    },
  ],
  completedProjects: [
    {
      id: 1,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      description: "1인가구는 더 이상 특정 세대의 라이프스타일이 아닌...",
      recruitmentState: "모집중", // Or completed logic? Layout shows cards.
      deadline: "2026-01-01",
      members: 1, // +1 etc
      positions: ["디자이너", "백엔드"],
      isLiked: true,
    },
    {
      id: 2,
      title: "1인 가구를 위한 식사 플랫폼 프로젝트 (단기간 프로젝트)",
      description: "1인가구는 더 이상 특정 세대의 라이프스타일이 아닌...",
      recruitmentState: "모집완료",
      deadline: "2026-01-01",
      members: 1,
      positions: ["디자이너", "백엔드"],
      isLiked: true,
    },
  ],
};
