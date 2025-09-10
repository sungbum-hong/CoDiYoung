// Mock Project Service - 실제 API 대신 Mock 데이터 사용

import { mockProjects, userProjects } from '../mock-data/projects.js';
import { mockApplicants, emptyApplicants } from '../mock-data/applicants.js';

// Mock 딜레이 시뮬레이션 (실제 API 호출처럼)
const mockDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export class MockProjectService {
  
  // 모든 프로젝트 조회
  static async getAllProjects() {
    await mockDelay(300);
    return mockProjects;
  }

  // 단일 프로젝트 조회
  static async getProject(projectId) {
    await mockDelay(400);
    const project = mockProjects.find(p => p.id === parseInt(projectId));
    
    if (!project) {
      throw new Error('프로젝트를 찾을 수 없습니다.');
    }
    
    return project;
  }

  // 진행 중인 프로젝트 조회 (사용자가 참여 중인)
  static async getProgressingProjects() {
    await mockDelay(500);
    
    const progressingProjectIds = userProjects.progressing;
    const progressingProjects = mockProjects.filter(
      project => progressingProjectIds.includes(project.id)
    );
    
    // 단일 객체로 반환 (첫 번째 진행 프로젝트)
    return progressingProjects.length > 0 ? progressingProjects[0] : null;
  }

  // 신청 중인 프로젝트 조회 (사용자가 신청만 한)
  static async getAppliedProjects() {
    await mockDelay(400);
    
    const appliedProjectIds = userProjects.applied;
    
    // 빈 배열이면 그냥 빈 배열 반환 (에러 던지지 않음)
    if (appliedProjectIds.length === 0) {
      console.log('신청중인 프로젝트가 없습니다 - 빈 배열 반환');
      return [];
    }
    
    const appliedProjects = mockProjects.filter(
      project => appliedProjectIds.includes(project.id)
    );
    
    return appliedProjects;
  }

  // 프로젝트 신청자 조회
  static async getProjectApplicants(projectId) {
    await mockDelay(600);
    
    const applicants = mockApplicants[projectId] || emptyApplicants;
    
    if (applicants.length === 0) {
      console.log(`프로젝트 ${projectId}에는 신청자가 없습니다.`);
    }
    
    return applicants;
  }

  // 프로젝트 생성
  static async createProject(projectData) {
    await mockDelay(800);
    
    console.log('Mock에서 받은 프로젝트 생성 데이터:', projectData);
    
    const newProject = {
      id: mockProjects.length + 1,
      title: projectData.title || "",
      description: projectData.description || "",
      categoryId: 1,
      createdBy: 1, // 현재 사용자 ID
      createdAt: new Date().toISOString(),
      imageUrl: projectData.imageKey || null,
      leaderImage: null,
      slogan: projectData.slogan || null,
      memberBriefs: [
        {
          userId: 1,
          name: "프로젝트 생성자",
          profileUrl: null
        }
      ],
      memberCount: 1,
      capacity: projectData.capacity || 5, // 기본값 5
      kakakoLink: projectData.kakaoLink || "",
      leaderId: 1,
      positions: projectData.positions || [],
      techs: projectData.techs || [],
      questions: projectData.questions || []
    };
    
    // Mock 배열에 추가
    mockProjects.push(newProject);
    
    console.log('생성된 프로젝트:', newProject);
    console.log('현재 전체 프로젝트 목록:', mockProjects.length, '개');
    
    return { success: true, message: "프로젝트가 생성되었습니다" };
  }

  // 프로젝트 신청
  static async applyToProject(projectId, applicationData) {
    await mockDelay(700);
    
    console.log('신청 시도:', {
      projectId,
      currentProgressing: userProjects.progressing,
      currentApplied: userProjects.applied
    });
    
    // 이미 신청했는지 확인
    if (userProjects.applied.includes(parseInt(projectId))) {
      throw new Error('이미 신청한 프로젝트입니다.');
    }
    
    // 참여 중인 프로젝트에도 신청 가능하도록 주석 처리
    // if (userProjects.progressing.includes(parseInt(projectId))) {
    //   throw new Error('이미 참여 중인 프로젝트입니다.');
    // }
    
    // 신청 목록에 추가
    userProjects.applied.push(parseInt(projectId));
    
    // 신청자 목록에 추가
    const newApplicant = {
      userId: 99, // 현재 사용자 ID
      nickname: "현재사용자",
      profileImageUrl: null,
      answers: [
        {
          questionId: 1,
          question: "신청 동기",
          answerText: applicationData.answer
        }
      ]
    };
    
    if (!mockApplicants[projectId]) {
      mockApplicants[projectId] = [];
    }
    mockApplicants[projectId].push(newApplicant);
    
    console.log('신청 완료 후 상태:', {
      applied: userProjects.applied,
      newApplicant: newApplicant
    });
    
    return { success: true, message: "프로젝트 신청이 완료되었습니다" };
  }
}