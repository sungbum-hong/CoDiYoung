/**
 * 서비스 모듈 통합 인덱스
 * 모든 서비스를 중앙에서 관리하고 export
 */

// 공통 유틸리티
export { ApiUtils } from './common/api.utils.js';
export { ValidationUtils } from './common/validation.utils.js';

// 도메인별 서비스
export { ProjectService } from './project/ProjectService.js';
export { StudyService } from './study/StudyService.js';
export { UserProfileService } from './userProfile/UserProfileService.js';

// 기존 서비스 (리팩토링 대상)
export { AuthService } from './authService.js';
export { ImageService } from './imageService.js';

// 서비스 별칭 (하위 호환성)
export { ProjectService as default } from './project/ProjectService.js';

/**
 * 서비스 레지스트리
 * 모든 서비스에 대한 메타데이터
 */
export const SERVICE_REGISTRY = {
  project: {
    service: 'ProjectService',
    description: '프로젝트 관련 기능',
    modules: [
      'project.create.js',
      'project.get.js',
      'project.apply.js',
      'project.complete.js',
      'project.image.js'
    ]
  },
  study: {
    service: 'StudyService',
    description: '스터디 관련 기능',
    modules: ['StudyService.js']
  },
  userProfile: {
    service: 'UserProfileService',
    description: '사용자 프로필 관련 기능',
    modules: ['UserProfileService.js']
  },
  auth: {
    service: 'AuthService',
    description: '인증 관련 기능',
    modules: ['authService.js']
  },
  image: {
    service: 'ImageService',
    description: '이미지 업로드 관련 기능',
    modules: ['imageService.js']
  }
};

/**
 * 서비스 헬스체크
 * 모든 서비스의 상태를 확인
 */
export const checkServicesHealth = async () => {
  const health = {};

  for (const [key, config] of Object.entries(SERVICE_REGISTRY)) {
    try {
      // 각 서비스가 제대로 로드되는지 확인
      const service = await import(`./${key === 'auth' ? 'authService.js' : key === 'image' ? 'imageService.js' : `${key}/${config.service}.js`}`);
      health[key] = {
        status: 'ok',
        service: config.service,
        loaded: !!service
      };
    } catch (error) {
      health[key] = {
        status: 'error',
        service: config.service,
        error: error.message
      };
    }
  }

  return health;
};