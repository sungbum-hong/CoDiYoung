import { CONFIG } from '../../constants/config.js';

export const BASE_URL = CONFIG.API.BASE_URL;

// API 엔드포인트 상수 - 업데이트된 명세서 기반
export const ENDPOINTS = {
  // 스터디 관련
  STUDY_CREATE: '/api/study/create',
  STUDY_GET_BY_ID: '/api/study',                    // /{studyId}
  STUDY_GET_USER_CHANNEL: '/api/study/user',        // /{userId}
  STUDY_UPDATE: '/api/study/update/study',          // /{studyId}
  STUDY_DELETE: '/api/study/delete',                // /{studyId}
  STUDY_GET_USER_STUDIES: '/api/study/users/studies',
  STUDY_GET_GROUPED: '/api/study/category/grouped',

  // 이미지 관련
  STORAGE_PRESIGN_PUT: '/api/storage/presign-put',
  STORAGE_PRESIGN_GET: '/api/storage/presign-get',
  STORAGE_PUBLIC_URL: '/api/storage/public-url'
};

// 스터디 관련 상수
export const STUDY_CONSTANTS = {
  MAX_TITLE_LENGTH: 100,
  MAX_DESCRIPTION_LENGTH: 1000,
  MIN_CAPACITY: 1,
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  CACHE_TTL: 5 * 60 * 1000, // 5분
  REQUEST_TIMEOUT: 10000 // 10초
};