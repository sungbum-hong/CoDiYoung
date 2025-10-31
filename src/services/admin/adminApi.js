import { ApiUtils } from '../common/api.utils.js';
import { CONFIG } from '../../constants/config.js';

const BASE_URL = CONFIG.API.BASE_URL;

/**
 * Admin API 서비스
 * 관리자 전용 API 호출 담당 (fetchWrapper 기반)
 */
export class AdminApiService {

  /**
   * 관리자 홈 데이터 조회
   * @param {number|null} lastUserId - 마지막 사용자 ID (페이지네이션)
   * @param {number} limit - 조회할 데이터 개수 (기본값: 10)
   * @returns {Promise<Object>} 홈 데이터
   */
  static async getHomeData(lastUserId = null, limit = 10) {
    const queryParams = new URLSearchParams();
    if (lastUserId) queryParams.append('lastUserId', lastUserId);
    queryParams.append('limit', limit);

    const url = `${BASE_URL}/api/admin/home?${queryParams.toString()}`;

    const result = await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '관리자 홈 데이터 로드 실패',
      context: 'Admin Home Data'
    });

    // 권한 관련 에러 후처리
    if (!result) {
      throw new Error('관리자 권한이 필요합니다. 관리자 계정으로 로그인해주세요.');
    }

    return result;
  }

  /**
   * 관리자 계정 생성
   * @param {Object} adminData - 관리자 계정 데이터
   * @returns {Promise<Object>} 생성 결과
   */
  static async createAdmin(adminData) {
    const url = `${BASE_URL}/api/admin/createAdmin`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'POST',
      body: adminData,
      requireAuth: true,
      errorMessage: '관리자 생성 실패',
      context: 'Admin Create'
    });
  }

  /**
   * 스터디 목록 조회 (페이징)
   * @param {Object} params - 조회 파라미터
   * @param {number} params.page - 페이지 번호 (0-based)
   * @param {number} params.size - 페이지 크기
   * @param {string[]} params.sort - 정렬 조건 배열
   * @returns {Promise<Object>} 스터디 목록 데이터
   */
  static async getStudyList(params = {}) {
    const { page = 0, size = 10, sort = ['createdAt,DESC'] } = params;

    const queryParams = new URLSearchParams();
    queryParams.append('page', page);
    queryParams.append('size', size);
    sort.forEach(sortItem => queryParams.append('sort', sortItem));

    const url = `${BASE_URL}/api/admin/findStudyList?${queryParams.toString()}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '스터디 목록 조회 실패',
      context: 'Admin Study List'
    });
  }

  /**
   * 프로젝트 목록 조회 (페이징)
   * @param {Object} params - 조회 파라미터
   * @param {number} params.page - 페이지 번호 (0-based)
   * @param {number} params.size - 페이지 크기
   * @param {string[]} params.sort - 정렬 조건 배열
   * @returns {Promise<Object>} 프로젝트 목록 데이터
   */
  static async getProjectList(params = {}) {
    const { page = 0, size = 10, sort = ['createdAt,DESC'] } = params;

    const queryParams = new URLSearchParams();
    queryParams.append('page', page);
    queryParams.append('size', size);
    sort.forEach(sortItem => queryParams.append('sort', sortItem));

    const url = `${BASE_URL}/api/admin/findProjectList?${queryParams.toString()}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '프로젝트 목록 조회 실패',
      context: 'Admin Project List'
    });
  }
}