import { CONFIG } from '../../constants/config.js';

export const BASE_URL = CONFIG.API.BASE_URL;

// API 엔드포인트 상수 (API 명세서 기준)
export const ENDPOINTS = {
  // 프로젝트 기본 CRUD
  PROJECT_CREATE: '/api/project/create',
  PROJECT_GET: '/api/project',
  PROJECT_GET_ALL: '/api/project/findAll',
  PROJECT_GET_PROGRESSING: '/api/project/find/progressing',
  PROJECT_GET_APPLIED: '/api/project/find/applied',
  PROJECT_GET_COMPLETED: '/api/project/find/completedProject',
  PROJECT_APPLY: '/api/project/apply',

  // 프로젝트 신청 관리
  PROJECT_GET_APPLICANTS: '/api/project/projectApplication',
  PROJECT_APPROVE_APPLICANT: '/api/projectApplication',
  PROJECT_REJECT_APPLICANT: '/api/projectApplication',
  PROJECT_GET_QUESTIONS: '/api/projectApplication/questions',
  PROJECT_CANCEL: '/api/projectApplication/cancel',
  PROJECT_COMPLETE: '/api/projectApplication/complete',
  PROJECT_DELETE_BY_LEADER: '/api/project/delete/byProjectLeader',

  // 이미지 업로드 관련
  STORAGE_PRESIGN_PUT: '/api/storage/presign-put',
  STORAGE_PRESIGN_GET: '/api/storage/presign-get',
  STORAGE_PUBLIC_URL: '/api/storage/public-url'
};

// 프로젝트 관련 상수
export const PROJECT_CONSTANTS = {
  MAX_TITLE_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 1000,
  MIN_CAPACITY: 1,
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
};