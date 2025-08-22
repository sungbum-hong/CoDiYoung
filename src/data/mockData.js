// Mock Data for CoDiYoung Platform
// 실제 데이터베이스 구조를 기반으로 한 더미데이터

export const mockData = {
  // 사용자 데이터
  users: [
    {
      id: 1,
      email: "john.dev@gmail.com",
      password: "$2b$10$hashedpassword1",
      nickname: "코딩존",
      created_at: "2024-01-15T09:00:00Z",
      updated_at: "2024-08-20T14:30:00Z"
    },
    {
      id: 2,
      email: "sarah.designer@naver.com", 
      password: "$2b$10$hashedpassword2",
      nickname: "디자인사라",
      created_at: "2024-02-10T10:15:00Z",
      updated_at: "2024-08-19T16:20:00Z"
    },
    {
      id: 3,
      email: "mike.video@kakao.com",
      password: "$2b$10$hashedpassword3", 
      nickname: "영상마이크",
      created_at: "2024-03-05T11:30:00Z",
      updated_at: "2024-08-18T09:45:00Z"
    },
    {
      id: 4,
      email: "emma.leader@gmail.com",
      password: "$2b$10$hashedpassword4",
      nickname: "리더엠마",
      created_at: "2024-01-20T08:45:00Z", 
      updated_at: "2024-08-20T12:10:00Z"
    },
    {
      id: 5,
      email: "alex.fullstack@outlook.com",
      password: "$2b$10$hashedpassword5",
      nickname: "풀스택알렉스",
      created_at: "2024-02-28T13:20:00Z",
      updated_at: "2024-08-19T18:30:00Z"
    }
  ],

  // 사용자 역할
  user_roles: [
    { id: 1, user_id: 1, role_name: "MEMBER" },
    { id: 2, user_id: 2, role_name: "MEMBER" },
    { id: 3, user_id: 3, role_name: "MEMBER" },
    { id: 4, user_id: 4, role_name: "PROJECT_LEADER" },
    { id: 5, user_id: 5, role_name: "MEMBER" }
  ],

  // 이메일 인증
  email_verifications: [
    {
      id: 1,
      user_id: 1,
      code: "ABC123",
      expires_at: "2024-08-21T10:00:00Z",
      verified_at: "2024-01-15T09:05:00Z"
    },
    {
      id: 2, 
      user_id: 2,
      code: "XYZ789",
      expires_at: "2024-08-21T11:00:00Z",
      verified_at: "2024-02-10T10:20:00Z"
    }
  ],

  // 스터디 카테고리
  study_categories: [
    { id: 1, name: "코딩" },
    { id: 2, name: "디자인" }, 
    { id: 3, name: "영상편집" }
  ],

  // 기술 태그
  tech_tags: [
    { id: 1, name: "React" },
    { id: 2, name: "Node.js" },
    { id: 3, name: "TypeScript" },
    { id: 4, name: "Figma" },
    { id: 5, name: "Photoshop" },
    { id: 6, name: "Premiere Pro" },
    { id: 7, name: "After Effects" },
    { id: 8, name: "MongoDB" },
    { id: 9, name: "Express" },
    { id: 10, name: "TailwindCSS" }
  ],

  // 프로젝트 멤버 역할
  project_member_roles: [
    { id: 1, role_name: "LEADER" },
    { id: 2, role_name: "FRONTEND" },
    { id: 3, role_name: "BACKEND" },
    { id: 4, role_name: "DESIGNER" },
    { id: 5, role_name: "VIDEO_EDITOR" }
  ],

  // 프로젝트
  projects: [
    {
      id: 1,
      title: "스터디 관리 플랫폼",
      description: "React와 Node.js를 활용한 온라인 스터디 관리 플랫폼 개발 프로젝트입니다. 출석체크, 과제 관리, 실시간 채팅 기능을 포함합니다.",
      category_id: 1,
      created_by: 4,
      created_at: "2024-07-01T09:00:00Z",
      updated_at: "2024-08-20T15:30:00Z"
    },
    {
      id: 2, 
      title: "브랜딩 디자인 프로젝트",
      description: "스타트업을 위한 통합 브랜딩 디자인 작업입니다. 로고, 명함, 웹사이트 디자인을 포함한 전체 브랜드 아이덴티티를 구축합니다.",
      category_id: 2,
      created_by: 2,
      created_at: "2024-07-15T10:30:00Z", 
      updated_at: "2024-08-19T11:45:00Z"
    },
    {
      id: 3,
      title: "유튜브 채널 영상 제작",
      description: "교육용 유튜브 채널을 위한 영상 콘텐츠 제작 프로젝트입니다. 기획부터 촬영, 편집까지 전 과정을 담당합니다.", 
      category_id: 3,
      created_by: 3,
      created_at: "2024-08-01T14:20:00Z",
      updated_at: "2024-08-20T09:15:00Z"
    }
  ],

  // 프로젝트 멤버
  project_members: [
    { id: 1, project_id: 1, user_id: 4, role_id: 1, joined_at: "2024-07-01T09:00:00Z", left_at: null },
    { id: 2, project_id: 1, user_id: 1, role_id: 2, joined_at: "2024-07-02T10:00:00Z", left_at: null },
    { id: 3, project_id: 1, user_id: 5, role_id: 3, joined_at: "2024-07-03T11:00:00Z", left_at: null },
    { id: 4, project_id: 2, user_id: 2, role_id: 1, joined_at: "2024-07-15T10:30:00Z", left_at: null },
    { id: 5, project_id: 2, user_id: 1, role_id: 4, joined_at: "2024-07-16T09:15:00Z", left_at: null },
    { id: 6, project_id: 3, user_id: 3, role_id: 1, joined_at: "2024-08-01T14:20:00Z", left_at: null },
    { id: 7, project_id: 3, user_id: 5, role_id: 5, joined_at: "2024-08-02T15:30:00Z", left_at: null }
  ],

  // 프로젝트 기술스택
  project_techs: [
    { id: 1, project_id: 1, tech_tag_id: 1 }, // React
    { id: 2, project_id: 1, tech_tag_id: 2 }, // Node.js  
    { id: 3, project_id: 1, tech_tag_id: 3 }, // TypeScript
    { id: 4, project_id: 1, tech_tag_id: 8 }, // MongoDB
    { id: 5, project_id: 1, tech_tag_id: 10 }, // TailwindCSS
    { id: 6, project_id: 2, tech_tag_id: 4 }, // Figma
    { id: 7, project_id: 2, tech_tag_id: 5 }, // Photoshop  
    { id: 8, project_id: 3, tech_tag_id: 6 }, // Premiere Pro
    { id: 9, project_id: 3, tech_tag_id: 7 }  // After Effects
  ],

  // 프로젝트 지원
  project_applications: [
    {
      id: 1,
      project_id: 1,
      applicant_id: 2,
      status: "PENDING",
      created_at: "2024-08-15T10:00:00Z",
      reviewed_at: null,
      reviewer_id: null
    },
    {
      id: 2,
      project_id: 2, 
      applicant_id: 3,
      status: "APPROVED",
      created_at: "2024-08-10T14:30:00Z",
      reviewed_at: "2024-08-11T09:15:00Z",
      reviewer_id: 2
    },
    {
      id: 3,
      project_id: 1,
      applicant_id: 5,
      status: "REJECTED", 
      created_at: "2024-08-05T16:20:00Z",
      reviewed_at: "2024-08-06T11:45:00Z",
      reviewer_id: 4
    }
  ],

  // 프로젝트 질문
  project_questions: [
    {
      id: 1,
      project_id: 1,
      content: "React 개발 경험이 어느 정도 되시나요?",
      created_by: 4,
      created_at: "2024-07-05T09:30:00Z"
    },
    {
      id: 2,
      project_id: 1, 
      content: "주 몇 시간 정도 프로젝트에 참여 가능하신가요?",
      created_by: 4,
      created_at: "2024-07-05T09:35:00Z"
    },
    {
      id: 3,
      project_id: 2,
      content: "포트폴리오를 공유해 주실 수 있나요?",
      created_by: 2,
      created_at: "2024-07-20T11:00:00Z"
    }
  ],

  // 프로젝트 답변
  project_answers: [
    {
      id: 1,
      question_id: 1,
      content: "약 2년 정도 React 개발 경험이 있습니다. 최근에는 Next.js와 TypeScript도 함께 사용하고 있습니다.",
      created_by: 1,
      created_at: "2024-07-06T14:20:00Z"
    },
    {
      id: 2,
      question_id: 2,
      content: "주 15~20시간 정도 투자 가능합니다.",
      created_by: 1, 
      created_at: "2024-07-06T14:25:00Z"
    },
    {
      id: 3,
      question_id: 3,
      content: "포트폴리오 링크입니다: https://portfolio.example.com",
      created_by: 1,
      created_at: "2024-07-21T10:15:00Z"
    }
  ],

  // 스터디 채널
  study_channels: [
    {
      id: 1,
      project_id: 1,
      url: "https://discord.gg/study-platform",
      created_at: "2024-07-01T09:30:00Z"
    },
    {
      id: 2,
      project_id: 2,
      url: "https://slack.com/branding-design",
      created_at: "2024-07-15T11:00:00Z"
    },
    {
      id: 3,
      project_id: 3,
      url: "https://discord.gg/youtube-video",
      created_at: "2024-08-01T15:00:00Z"
    }
  ],

  // 일일 출석
  daily_attendance: [
    // 사용자 1의 최근 출석 기록
    { id: 1, user_id: 1, date: "2024-08-19", status: "PRESENT", checked_at: "2024-08-19T09:30:00Z" },
    { id: 2, user_id: 1, date: "2024-08-20", status: "PRESENT", checked_at: "2024-08-20T10:15:00Z" },
    { id: 3, user_id: 1, date: "2024-08-18", status: "ABSENT", checked_at: null },
    
    // 사용자 2의 최근 출석 기록  
    { id: 4, user_id: 2, date: "2024-08-19", status: "PRESENT", checked_at: "2024-08-19T08:45:00Z" },
    { id: 5, user_id: 2, date: "2024-08-20", status: "PRESENT", checked_at: "2024-08-20T09:20:00Z" },
    { id: 6, user_id: 2, date: "2024-08-18", status: "PRESENT", checked_at: "2024-08-18T10:30:00Z" },

    // 사용자 3의 최근 출석 기록
    { id: 7, user_id: 3, date: "2024-08-19", status: "LATE", checked_at: "2024-08-19T11:30:00Z" },
    { id: 8, user_id: 3, date: "2024-08-20", status: "PRESENT", checked_at: "2024-08-20T09:00:00Z" },
    { id: 9, user_id: 3, date: "2024-08-18", status: "PRESENT", checked_at: "2024-08-18T08:15:00Z" },

    // 사용자 4의 최근 출석 기록
    { id: 10, user_id: 4, date: "2024-08-19", status: "PRESENT", checked_at: "2024-08-19T08:00:00Z" },
    { id: 11, user_id: 4, date: "2024-08-20", status: "PRESENT", checked_at: "2024-08-20T08:30:00Z" },
    { id: 12, user_id: 4, date: "2024-08-18", status: "PRESENT", checked_at: "2024-08-18T08:45:00Z" },

    // 사용자 5의 최근 출석 기록
    { id: 13, user_id: 5, date: "2024-08-19", status: "ABSENT", checked_at: null },
    { id: 14, user_id: 5, date: "2024-08-20", status: "PRESENT", checked_at: "2024-08-20T10:45:00Z" },
    { id: 15, user_id: 5, date: "2024-08-18", status: "PRESENT", checked_at: "2024-08-18T09:30:00Z" }
  ]
};

// 헬퍼 함수들
export const mockHelpers = {
  // 사용자 ID로 사용자 정보 조회
  getUserById: (id) => mockData.users.find(user => user.id === id),
  
  // 프로젝트 ID로 프로젝트 정보 조회 (멤버, 기술스택 포함)
  getProjectById: (id) => {
    const project = mockData.projects.find(p => p.id === id);
    if (!project) return null;
    
    const members = mockData.project_members
      .filter(pm => pm.project_id === id)
      .map(pm => ({
        ...pm,
        user: mockData.users.find(u => u.id === pm.user_id),
        role: mockData.project_member_roles.find(r => r.id === pm.role_id)
      }));
    
    const techs = mockData.project_techs
      .filter(pt => pt.project_id === id)
      .map(pt => mockData.tech_tags.find(t => t.id === pt.tech_tag_id));
    
    const category = mockData.study_categories.find(c => c.id === project.category_id);
    
    return { ...project, members, techs, category };
  },
  
  // 카테고리별 프로젝트 조회
  getProjectsByCategory: (categoryName) => {
    const category = mockData.study_categories.find(c => c.name === categoryName);
    if (!category) return [];
    
    return mockData.projects
      .filter(p => p.category_id === category.id)
      .map(p => mockHelpers.getProjectById(p.id));
  },
  
  // 사용자별 출석 통계
  getAttendanceStats: (userId) => {
    const attendances = mockData.daily_attendance.filter(a => a.user_id === userId);
    const totalDays = attendances.length;
    const presentDays = attendances.filter(a => a.status === 'PRESENT').length;
    const lateDays = attendances.filter(a => a.status === 'LATE').length;
    const absentDays = attendances.filter(a => a.status === 'ABSENT').length;
    
    return { totalDays, presentDays, lateDays, absentDays };
  },
  
  // 사용자가 참여 중인 프로젝트 조회
  getUserProjects: (userId) => {
    return mockData.project_members
      .filter(pm => pm.user_id === userId && !pm.left_at)
      .map(pm => mockHelpers.getProjectById(pm.project_id));
  }
};

export default mockData;