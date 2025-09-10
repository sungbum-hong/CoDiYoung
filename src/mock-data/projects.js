// Mock 프로젝트 데이터

export const mockProjects = [
  {
    id: 1,
    title: "React + TypeScript 스터디",
    description: "함께 성장하는 프론트엔드 개발자 모집",
    categoryId: 1,
    createdBy: 1,
    createdAt: "2025-01-10T10:00:00Z",
    imageUrl: null,
    leaderImage: "https://via.placeholder.com/100x100?text=L1",
    slogan: "코드로 세상을 바꾸자!",
    memberBriefs: [
      {
        userId: 1,
        name: "김지호",
        profileUrl: "https://via.placeholder.com/50x50?text=김"
      },
      {
        userId: 2,
        name: "박민수",
        profileUrl: null
      }
    ],
    memberCount: 2,
    capacity: 5,
    kakakoLink: "https://open.kakao.com/o/example1",
    leaderId: 1,
    positions: ["frontend", "backend"],
    techs: ["react", "typescript", "nodejs"],
    questions: ["왜 이 프로젝트에 참여하고 싶나요?", "개발 경험을 알려주세요."]
  },
  {
    id: 2,
    title: "Node.js 백엔드 프로젝트",
    description: "실무 경험을 쌓을 수 있는 백엔드 프로젝트",
    categoryId: 2,
    createdBy: 3,
    createdAt: "2025-01-09T14:30:00Z",
    imageUrl: "https://via.placeholder.com/300x200?text=Project2",
    leaderImage: null,
    slogan: "실무 중심 개발",
    memberBriefs: [
      {
        userId: 3,
        name: "이영희",
        profileUrl: null
      }
    ],
    memberCount: 1,
    capacity: 4,
    kakakoLink: "https://open.kakao.com/o/example2",
    leaderId: 3,
    positions: ["backend", "fullstack"],
    techs: ["nodejs", "express", "mongodb"],
    questions: ["백엔드 개발 경험이 있나요?"]
  },
  {
    id: 3,
    title: "Flutter 앱 개발 팀",
    description: "모바일 앱 개발 프로젝트",
    categoryId: 3,
    createdBy: 4,
    createdAt: "2025-01-08T09:15:00Z",
    imageUrl: null,
    leaderImage: "https://via.placeholder.com/100x100?text=L4",
    slogan: "모바일로 세상과 연결하기",
    memberBriefs: [
      {
        userId: 4,
        name: "최준호",
        profileUrl: "https://via.placeholder.com/50x50?text=최"
      },
      {
        userId: 5,
        name: "정수진",
        profileUrl: "https://via.placeholder.com/50x50?text=정"
      },
      {
        userId: 6,
        name: "한민재",
        profileUrl: null
      }
    ],
    memberCount: 3,
    capacity: 6,
    kakakoLink: "https://open.kakao.com/o/example3",
    leaderId: 4,
    positions: ["mobile", "design"],
    techs: ["flutter", "dart", "firebase"],
    questions: ["Flutter 경험이 있나요?", "디자인 툴 사용 가능한가요?"]
  }
];

// 사용자별 관계 데이터
export const userProjects = {
  // 진행 중인 프로젝트 (사용자가 참여 중)
  progressing: [1], // 1번 프로젝트 참여 중
  
  // 신청 중인 프로젝트 (사용자가 신청만 함)
  applied: [2, 3], // 2, 3번 프로젝트에 신청 중
};