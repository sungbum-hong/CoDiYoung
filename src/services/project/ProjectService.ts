// Mock Project Service
// TODO: Replace with actual API implementation when backend is ready

export interface Project {
  id: number;
  title: string;
  description: string;
  status: 'interested' | 'applied' | 'ongoing' | 'completed';
  category: string;
  memberCount?: number;
  maxMembers?: number;
  startDate?: string;
  endDate?: string;
  tags?: string[];
  currentUserStatus?: string;
  originalCurrentUserStatus?: string;
  memberBriefs?: any[];
  techs?: string[];
  position?: string[];
  imageKey?: string;
  leaderInfoProjection?: any;
  completionStatus?: string;
  completionSummary?: any;
}

export interface ProjectListResponse {
  content: Project[];
  totalElements: number;
  totalPages: number;
}

export const ProjectService = {
  /**
   * 사용자의 프로젝트 목록 조회
   */
  getUserProjects: async (userId: number, status?: string): Promise<ProjectListResponse> => {
    const mockProjects: Project[] = [
      {
        id: 1,
        title: 'Mock Project 1',
        description: 'This is a mock project',
        status: 'ongoing',
        category: '코딩',
        memberCount: 3,
        maxMembers: 5,
      },
      {
        id: 2,
        title: 'Mock Project 2',
        description: 'Another mock project',
        status: 'interested',
        category: '디자인',
      },
    ];

    const filtered = status 
      ? mockProjects.filter(p => p.status === status)
      : mockProjects;

    return {
      content: filtered,
      totalElements: filtered.length,
      totalPages: 1,
    };
  },

  /**
   * 진행 중인 프로젝트 조회
   */
  getProgressingProjects: async (): Promise<Project[]> => {
    return [
      {
        id: 1,
        title: 'Mock Progressing Project',
        description: 'This is in progress',
        status: 'ongoing',
        category: '코딩',
        currentUserStatus: 'MEMBER',
      }
    ];
  },

  /**
   * 신청한 프로젝트 조회
   */
  getAppliedProjects: async (): Promise<Project[]> => {
    return [
      {
        id: 2,
        title: 'Mock Applied Project',
        description: 'Waiting for approval',
        status: 'applied',
        category: '디자인',
        currentUserStatus: 'WAITING',
      }
    ];
  },

  /**
   * 완료된 프로젝트 조회
   */
  getCompletedProjects: async (params?: { page?: number; size?: number; sort?: string[] }): Promise<ProjectListResponse> => {
    return {
      content: [
        {
          id: 3,
          title: 'Mock Completed Project',
          description: 'Successfully completed',
          status: 'completed',
          category: '영상편집',
        }
      ],
      totalElements: 1,
      totalPages: 1,
    };
  },

  /**
   * 프로젝트 신청자 목록 조회
   */
  getProjectApplicants: async (projectId: number): Promise<any[]> => {
    return [
      {
        id: 1,
        name: 'Mock Applicant',
        email: 'applicant@example.com',
      }
    ];
  },

  /**
   * 프로젝트 상세 조회
   */
  getProject: async (projectId: number): Promise<Project> => {
    return {
      id: projectId,
      title: `Mock Project ${projectId}`,
      description: 'This is a mock project',
      status: 'ongoing',
      category: '코딩',
      memberCount: 3,
      maxMembers: 5,
    };
  },

  /**
   * 프로젝트 신청
   */
  applyToProject: async (projectId: number): Promise<void> => {
    return;
  },

  /**
   * 프로젝트 신청 취소
   */
  cancelProjectApplication: async (projectId: number): Promise<void> => {
    return;
  },

  /**
   * 진행 중인 프로젝트 삭제 (팀장용)
   */
  deleteProjectByLeader: async (projectId: number): Promise<void> => {
    return;
  },

  /**
   * 프로젝트 완료 처리
   */
  completeProject: async (projectId: number): Promise<any> => {
    return {
      isCompleted: true,
      status: 'COMPLETED',
      data: {
        userRole: 'LEADER',
        completionRate: 100,
        completedMembers: 5,
        totalMembers: 5,
      }
    };
  },

  /**
   * 프로젝트 생성
   */
  createProject: async (projectData: any): Promise<Project> => {
    return {
      id: Date.now(),
      title: projectData.title || 'New Project',
      description: projectData.description || '',
      status: 'ongoing',
      category: projectData.category || '코딩',
    };
  },

  /**
   * 프로젝트 관심 등록/해제
   */
  toggleProjectInterest: async (projectId: number): Promise<void> => {
    return;
  },
};

