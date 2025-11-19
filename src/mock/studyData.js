/**
 * 스터디 Mock Data
 * Admin Content Management에서 사용되는 스터디 목록
 */

export const mockStudyData = [
  {
    id: 1,
    content: "<p>React Hook을 활용한 상태 관리 스터디입니다. 함수형 컴포넌트에서 useState, useEffect 등을 깊이 있게 다룹니다.</p>",
    createdAt: "2024-11-15T10:30:00Z",
    userId: 1,
    firstImage: null
  },
  {
    id: 2,
    content: "<p>자바스크립트 ES6+ 문법 스터디</p><img data-key='js-logo-key' src='/images/js-logo.png' alt='JavaScript' />",
    createdAt: "2024-11-14T14:20:00Z",
    userId: 2,
    firstImage: "https://example.com/js-logo.png"
  },
  {
    id: 3,
    content: "<p>Node.js 백엔드 개발 스터디입니다.</p>",
    createdAt: "2024-11-13T09:15:00Z",
    userId: 3,
    firstImage: null
  },
  {
    id: 4,
    content: "<p>TypeScript 기초부터 고급까지</p><img data-key='ts-logo-key' src='/images/ts-logo.png' alt='TypeScript' />",
    createdAt: "2024-11-12T16:45:00Z",
    userId: 4,
    firstImage: "https://example.com/ts-logo.png"
  },
  {
    id: 5,
    content: "<p>CSS Grid와 Flexbox 레이아웃 마스터하기</p>",
    createdAt: "2024-11-11T11:30:00Z",
    userId: 5,
    firstImage: null
  },
  {
    id: 6,
    content: "<p>Vue.js 3 Composition API 스터디</p><img data-key='vue-logo-key' src='/images/vue-logo.png' alt='Vue.js' />",
    createdAt: "2024-11-10T13:20:00Z",
    userId: 6,
    firstImage: "https://example.com/vue-logo.png"
  },
  {
    id: 7,
    content: "<p>데이터베이스 설계 및 최적화 스터디</p>",
    createdAt: "2024-11-09T08:00:00Z",
    userId: 7,
    firstImage: null
  },
  {
    id: 8,
    content: "<p>Python Flask 웹 개발</p><img data-key='python-logo-key' src='/images/python-logo.png' alt='Python' />",
    createdAt: "2024-11-08T15:40:00Z",
    userId: 8,
    firstImage: "https://example.com/python-logo.png"
  },
  {
    id: 9,
    content: "<p>Git & GitHub 협업 워크플로우 스터디</p>",
    createdAt: "2024-11-07T10:10:00Z",
    userId: 9,
    firstImage: null
  },
  {
    id: 10,
    content: "<p>알고리즘 문제 해결 스터디</p>",
    createdAt: "2024-11-06T17:25:00Z",
    userId: 10,
    firstImage: null
  },
  {
    id: 11,
    content: "<p>Docker 컨테이너 기초부터 실습까지</p><img data-key='docker-logo-key' src='/images/docker-logo.png' alt='Docker' />",
    createdAt: "2024-11-05T12:50:00Z",
    userId: 11,
    firstImage: "https://example.com/docker-logo.png"
  },
  {
    id: 12,
    content: "<p>Next.js 풀스택 개발 스터디</p>",
    createdAt: "2024-11-04T09:35:00Z",
    userId: 12,
    firstImage: null
  },
  {
    id: 13,
    content: "<p>AWS 클라우드 서비스 활용법</p>",
    createdAt: "2024-11-03T14:15:00Z",
    userId: 13,
    firstImage: null
  },
  {
    id: 14,
    content: "<p>MongoDB NoSQL 데이터베이스</p><img data-key='mongo-logo-key' src='/images/mongo-logo.png' alt='MongoDB' />",
    createdAt: "2024-11-02T11:45:00Z",
    userId: 14,
    firstImage: "https://example.com/mongo-logo.png"
  },
  {
    id: 15,
    content: "<p>Spring Boot 백엔드 개발 스터디</p>",
    createdAt: "2024-11-01T16:00:00Z",
    userId: 15,
    firstImage: null
  }
];

/**
 * 스터디 목록 API 응답 형태로 변환
 */
export const getStudyListResponse = (page = 0, size = 10, sort = ['createdAt,DESC']) => {
  const sortField = sort[0].split(',')[0];
  const sortDirection = sort[0].split(',')[1] || 'ASC';

  // 정렬 적용
  let sortedStudies = [...mockStudyData];
  sortedStudies.sort((a, b) => {
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
  const studies = sortedStudies.slice(startIndex, endIndex);

  const totalElements = mockStudyData.length;
  const totalPages = Math.ceil(totalElements / size);

  return {
    studies,
    currentPage: page,
    totalPages,
    totalElements,
    pageSize: size,
    hasNext: page < totalPages - 1,
    hasPrevious: page > 0,
    isEmpty: studies.length === 0
  };
};

/**
 * 특정 스터디 조회
 */
export const getStudyById = (id) => {
  return mockStudyData.find(study => study.id === parseInt(id));
};