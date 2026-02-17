export const MOCK_PROFILE = {
  user: {
    nickname: "코딩왕",
    email: "mock@example.com",
    studyField: "코딩",
    description: "안녕하세요! 열심히 코딩 공부 중인 개발자입니다.",
    tags: ["코딩", "디자인"],
  },
};

export const STUDY_FIELDS = [
  "코딩",
  "디자인",
  "영상편집",
  "어학",
  "취업",
  "기타",
];

export const MOCK_MY_PROJECTS = {
  interested: [
    {
      id: 1,
      title: "React 프로젝트",
      description: "React로 쇼핑몰 만들기",
      category: "coding",
      positions: ["프론트엔드", "디자이너"],
      status: "모집중",
      deadline: "2024-03-01",
      isLiked: true,
      participantsCount: 3,
      user: { nickname: "리더1", avatar: null },
    },
    {
      id: 2,
      title: "UI/UX 스터디",
      description: "피그마 기초부터",
      category: "design",
      positions: ["디자이너"],
      status: "모집완료",
      deadline: "2024-02-28",
      isLiked: false,
      participantsCount: 5,
      user: { nickname: "디자인고수", avatar: null },
    },
  ],
  applied: [
    {
      id: 3,
      title: "알고리즘 스터디",
      description: "매일 1문제 풀기",
      category: "coding",
      positions: ["백엔드", "프론트엔드"],
      status: "모집중",
      deadline: "2024-03-15",
      isLiked: true,
      participantsCount: 2,
      user: { nickname: "알고리즘신", avatar: null },
    },
  ],
  ongoing: [
    {
      id: 4,
      title: "Next.js 포트폴리오",
      description: "나만의 포트폴리오 만들기",
      category: "coding",
      positions: ["프론트엔드"],
      status: "진행중",
      deadline: "2024-04-01",
      isLiked: true,
      participantsCount: 1,
      user: { nickname: "나", avatar: null },
    },
  ],
  completed: [],
};

export const MOCK_ATTENDANCE = {
  "2025-12": {
    checkedDates: [
      1, 2, 5, 8, 9, 12, 13, 15, 16, 19, 20, 22, 23, 26, 27, 29, 30,
    ],
    today: 15,
    month: 12,
    year: 2025,
  },
};

export const MOCK_MY_STUDIES = [
  { id: 1, title: "오늘의 코딩 공부", date: "2024-02-15", status: "completed" },
  { id: 2, title: "디자인 기초", date: "2024-02-14", status: "completed" },
];
