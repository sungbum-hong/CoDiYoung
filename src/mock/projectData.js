/**
 * 프로젝트 Mock Data
 * Admin Content Management에서 사용되는 프로젝트 목록
 */

export const mockProjectData = [
  {
    id: 1,
    title: "React 기반 ToDo 애플리케이션",
    description: "React Hook과 Context API를 활용한 할일 관리 앱",
    projectImageUrl: "https://example.com/todo-app-image.jpg",
    createdAt: "2024-11-15T10:30:00Z",
    userId: 1,
    status: "ACTIVE",
    tags: ["React", "JavaScript", "CSS"]
  },
  {
    id: 2,
    title: "Node.js 백엔드 API 서버",
    description: "Express.js와 MongoDB를 사용한 RESTful API 서버 개발",
    projectImageUrl: null,
    createdAt: "2024-11-14T14:20:00Z",
    userId: 2,
    status: "ACTIVE",
    tags: ["Node.js", "Express", "MongoDB"]
  },
  {
    id: 3,
    title: "Vue.js 온라인 쇼핑몰",
    description: "Vue.js 3와 Composition API로 구현한 이커머스 플랫폼",
    projectImageUrl: "https://example.com/shopping-mall-image.jpg",
    createdAt: "2024-11-13T09:15:00Z",
    userId: 3,
    status: "COMPLETED",
    tags: ["Vue.js", "Vuex", "CSS"]
  },
  {
    id: 4,
    title: "Flutter 모바일 앱",
    description: "크로스 플랫폼 날씨 정보 앱",
    projectImageUrl: "https://example.com/weather-app-image.jpg",
    createdAt: "2024-11-12T16:45:00Z",
    userId: 4,
    status: "ACTIVE",
    tags: ["Flutter", "Dart", "Mobile"]
  },
  {
    id: 5,
    title: "Python 데이터 분석 대시보드",
    description: "Pandas와 Plotly를 활용한 데이터 시각화 도구",
    projectImageUrl: null,
    createdAt: "2024-11-11T11:30:00Z",
    userId: 5,
    status: "ACTIVE",
    tags: ["Python", "Pandas", "Plotly"]
  },
  {
    id: 6,
    title: "Spring Boot 게시판 시스템",
    description: "JPA와 Thymeleaf를 사용한 웹 게시판",
    projectImageUrl: "https://example.com/board-system-image.jpg",
    createdAt: "2024-11-10T13:20:00Z",
    userId: 6,
    status: "ACTIVE",
    tags: ["Spring Boot", "JPA", "Java"]
  },
  {
    id: 7,
    title: "Next.js 블로그 플랫폼",
    description: "정적 생성과 서버사이드 렌더링을 활용한 블로그",
    projectImageUrl: null,
    createdAt: "2024-11-09T08:00:00Z",
    userId: 7,
    status: "ACTIVE",
    tags: ["Next.js", "React", "Markdown"]
  },
  {
    id: 8,
    title: "AWS 클라우드 인프라 구축",
    description: "Docker와 Kubernetes를 활용한 마이크로서비스 배포",
    projectImageUrl: "https://example.com/cloud-infra-image.jpg",
    createdAt: "2024-11-08T15:40:00Z",
    userId: 8,
    status: "COMPLETED",
    tags: ["AWS", "Docker", "Kubernetes"]
  },
  {
    id: 9,
    title: "TypeScript 라이브러리 개발",
    description: "npm에 배포 가능한 유틸리티 라이브러리",
    projectImageUrl: null,
    createdAt: "2024-11-07T10:10:00Z",
    userId: 9,
    status: "ACTIVE",
    tags: ["TypeScript", "npm", "Library"]
  },
  {
    id: 10,
    title: "GraphQL API 서버",
    description: "Apollo Server와 Prisma를 사용한 GraphQL 백엔드",
    projectImageUrl: "https://example.com/graphql-api-image.jpg",
    createdAt: "2024-11-06T17:25:00Z",
    userId: 10,
    status: "ACTIVE",
    tags: ["GraphQL", "Apollo", "Prisma"]
  },
  {
    id: 11,
    title: "Android 네이티브 앱",
    description: "Kotlin으로 개발한 소셜 미디어 앱",
    projectImageUrl: null,
    createdAt: "2024-11-05T12:50:00Z",
    userId: 11,
    status: "ACTIVE",
    tags: ["Android", "Kotlin", "Mobile"]
  },
  {
    id: 12,
    title: "게임 개발 프로젝트",
    description: "Unity를 활용한 2D 퍼즐 게임",
    projectImageUrl: "https://example.com/puzzle-game-image.jpg",
    createdAt: "2024-11-04T09:35:00Z",
    userId: 12,
    status: "COMPLETED",
    tags: ["Unity", "C#", "Game"]
  },
  {
    id: 13,
    title: "머신러닝 이미지 분류기",
    description: "TensorFlow를 사용한 이미지 인식 모델",
    projectImageUrl: null,
    createdAt: "2024-11-03T14:15:00Z",
    userId: 13,
    status: "ACTIVE",
    tags: ["TensorFlow", "Python", "ML"]
  },
  {
    id: 14,
    title: "iOS 앱 개발",
    description: "SwiftUI로 구현한 건강 관리 앱",
    projectImageUrl: "https://example.com/health-app-image.jpg",
    createdAt: "2024-11-02T11:45:00Z",
    userId: 14,
    status: "ACTIVE",
    tags: ["iOS", "SwiftUI", "HealthKit"]
  },
  {
    id: 15,
    title: "블록체인 DApp 개발",
    description: "Ethereum 기반 탈중앙화 애플리케이션",
    projectImageUrl: null,
    createdAt: "2024-11-01T16:00:00Z",
    userId: 15,
    status: "ACTIVE",
    tags: ["Blockchain", "Ethereum", "Solidity"]
  }
];

/**
 * 프로젝트 목록 API 응답 형태로 변환
 */
export const getProjectListResponse = (page = 0, size = 10, sort = ['createdAt,DESC']) => {
  const sortField = sort[0].split(',')[0];
  const sortDirection = sort[0].split(',')[1] || 'ASC';

  // 정렬 적용
  let sortedProjects = [...mockProjectData];
  sortedProjects.sort((a, b) => {
    let aValue = a[sortField];
    let bValue = b[sortField];

    if (sortField === 'createdAt') {
      aValue = new Date(aValue);
      bValue = new Date(bValue);
    }

    if (sortDirection === 'DESC') {
      return bValue > aValue ? 1 : bValue < aValue ? -1 : 0;
    } else {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    }
  });

  // 페이지네이션 적용
  const startIndex = page * size;
  const endIndex = startIndex + size;
  const projects = sortedProjects.slice(startIndex, endIndex);

  const totalElements = mockProjectData.length;
  const totalPages = Math.ceil(totalElements / size);

  return {
    projects,
    currentPage: page,
    totalPages,
    totalElements,
    pageSize: size,
    hasNext: page < totalPages - 1,
    hasPrevious: page > 0,
    isEmpty: projects.length === 0
  };
};

/**
 * 특정 프로젝트 조회
 */
export const getProjectById = (id) => {
  return mockProjectData.find(project => project.id === parseInt(id));
};

/**
 * 프로젝트 상태별 조회
 */
export const getProjectsByStatus = (status) => {
  return mockProjectData.filter(project => project.status === status);
};

/**
 * 태그별 프로젝트 조회
 */
export const getProjectsByTag = (tag) => {
  return mockProjectData.filter(project =>
    project.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};