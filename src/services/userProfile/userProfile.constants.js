import { CONFIG } from '../../constants/config.js';

export const BASE_URL = CONFIG.API.BASE_URL;

// 프로필 관련 API 엔드포인트
export const ENDPOINTS = {
  MYPAGE_GET: '/api/mypage',
  MYPAGE_UPDATE_NICKNAME: '/api/mypage/nickname',
  MYPAGE_UPDATE_EMAIL: '/api/mypage/email',
  MYPAGE_UPDATE_PASSWORD: '/api/mypage/password',
  MYPAGE_UPDATE_IMAGE: '/api/mypage/image',

  // 이미지 관련 (다른 서비스와 공통 사용)
  STORAGE_PRESIGN_PUT: '/api/storage/presign-put',
  STORAGE_PRESIGN: '/storage/presign',                    // 대체 API
  STORAGE_PRESIGN_GET: '/api/storage/presign-get',
  STORAGE_PUBLIC_URL: '/api/storage/public-url'
};

// 프로필 관련 상수
export const USER_PROFILE_CONSTANTS = {
  MAX_NICKNAME_LENGTH: 50,
  MIN_NICKNAME_LENGTH: 2,
  MAX_PASSWORD_LENGTH: 128,
  MIN_PASSWORD_LENGTH: 8,
  MAX_IMAGE_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp']
};