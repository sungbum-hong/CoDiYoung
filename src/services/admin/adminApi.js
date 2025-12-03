import { ApiUtils } from '../common/api.utils.js';
import { CONFIG } from '../../constants/config.js';

const BASE_URL = CONFIG.API.BASE_URL;

/**
 * Admin API 서비스
 * 관리자 전용 API 호출 담당 (fetchWrapper 기반)
 */
export class AdminApiService {

  /**
   * 관리자 로그인
   * @param {string} email - 관리자 이메일 또는 아이디
   * @param {string} password - 비밀번호
   * @returns {Promise<Object>} 로그인 결과
   */
  static async adminLogin(email, password) {
    const url = `${BASE_URL}/api/admin/login`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'POST',
      body: { email, password },
      requireAuth: false, // 로그인이므로 인증 불필요
      errorMessage: '관리자 로그인 실패',
      context: 'Admin Login'
    });
  }

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

  /**
   * 스터디 상세 조회
   * @param {number} studyId - 스터디 ID
   * @returns {Promise<Object>} 스터디 상세 데이터
   */
  static async getStudyDetail(studyId) {
    const url = `${BASE_URL}/api/admin/findStudy/${studyId}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '스터디 상세 조회 실패',
      context: 'Admin Study Detail'
    });
  }

  /**
   * 스터디 삭제
   * @param {Object} deleteData - 삭제 데이터
   * @param {number} deleteData.id - 스터디 ID
   * @param {string} deleteData.reason - 삭제 사유
   * @returns {Promise<Object>} 삭제 결과
   */
  static async deleteStudy(deleteData) {
    const url = `${BASE_URL}/api/admin/deleteStudy`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'DELETE',
      body: deleteData,
      requireAuth: true,
      errorMessage: '스터디 삭제 실패',
      context: 'Admin Study Delete'
    });
  }

  /**
   * 일반 유저 생성 (회원가입)
   * @param {Object} userData - 사용자 데이터
   * @returns {Promise<Object>} 생성 결과
   */
  static async createUser(userData) {
    const url = `${BASE_URL}/api/admin/create`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'POST',
      body: userData,
      requireAuth: true,
      errorMessage: '사용자 생성 실패',
      context: 'Admin User Create'
    });
  }

  /**
   * 배너 추가
   * @param {string} imageKey - 이미지 키
   * @param {string} url - 배너 클릭 시 이동할 URL (옵션)
   * @returns {Promise<Object>} 배너 추가 결과
   */
  static async addBanner({ imageKey, link }) {
    const requestUrl = `${BASE_URL}/api/admin/addBanner`;

    return await ApiUtils.fetchWrapper(requestUrl, {
      method: 'POST',
      requireAuth: true,
      body: { imageKey, link },
      errorMessage: '배너 추가 실패',
      context: 'Admin Banner Add'
    });
  }

  /**
   * 유저 정보 목록 조회
   * @param {number|null} lastUserId - 마지막 사용자 ID (커서 스크롤)
   * @param {number} limit - 조회할 데이터 개수 (기본값: 10)
   * @returns {Promise<Object>} 유저 정보 목록
   */
  static async getUserInfoList(lastUserId = null, limit = 10) {
    const queryParams = new URLSearchParams();
    if (lastUserId) queryParams.append('lastUserId', lastUserId);
    queryParams.append('limit', limit);

    const url = `${BASE_URL}/api/admin/getUserInfoList?${queryParams.toString()}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '유저 정보 목록 조회 실패',
      context: 'Admin User Info List'
    });
  }

  /**
   * 오프라인 참가 횟수 변경
   * @param {number} userId - 사용자 ID
   * @param {number} count - 오프라인 참여 횟수
   * @returns {Promise<Object>} 업데이트 결과
   */
  static async updateOfflineCount(userId, count) {
    const url = `${BASE_URL}/api/admin/updateOffline`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'POST',
      requireAuth: true,
      body: { userId, count },
      errorMessage: '오프라인 참가 횟수 업데이트 실패',
      context: 'Admin Update Offline Count'
    });
  }

  /**
   * 배너 전체 조회
   * @returns {Promise<Array>} 배너 목록 ([{ id, imageUrl }])
   */
  static async getBannerList() {
    const url = `${BASE_URL}/api/admin/findAllBanner`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '배너 목록 조회 실패',
      context: 'Admin Get Banner List'
    });
  }

  /**
   * 배너 단건 조회
   * @param {number} bannerId - 배너 ID
   * @returns {Promise<Object>} 배너 상세 ({ id, imageUrl })
   */
  static async getBannerDetail(bannerId) {
    const url = `${BASE_URL}/api/admin/findOneBanner/${bannerId}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '배너 상세 조회 실패',
      context: 'Admin Get Banner Detail'
    });
  }

  /**
   * 이미지 업로드 (필요시 구현)
   * @param {File} file - 업로드할 이미지 파일
   * @returns {Promise<Object>} 업로드 결과 (imageKey 포함)
   */
  static async uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    const url = `${BASE_URL}/api/admin/uploadImage`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'POST',
      body: formData,
      requireAuth: true,
      errorMessage: '이미지 업로드 실패',
      context: 'Admin Upload Image',
      isFormData: true // FormData 처리를 위한 플래그
    });
  }

  /**
   * 배너 삭제 (필요시 구현)
   * @param {string} bannerId - 배너 ID
   * @returns {Promise<Object>} 삭제 결과
   */
  static async deleteBanner(bannerId) {
    const url = `${BASE_URL}/api/admin/deleteBanner/${bannerId}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'DELETE',
      requireAuth: true,
      errorMessage: '배너 삭제 실패',
      context: 'Admin Delete Banner'
    });
  }

  /**
   * 프로젝트 상세 조회 (필요시 구현)
   * @param {number} projectId - 프로젝트 ID
   * @returns {Promise<Object>} 프로젝트 상세 데이터
   */
  static async getProjectDetail(projectId) {
    const url = `${BASE_URL}/api/admin/findSingleProject/${projectId}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '프로젝트 상세 조회 실패',
      context: 'Admin Project Detail'
    });
  }

  /**
   * 프로젝트 삭제 (필요시 구현)
   * @param {Object} deleteData - 삭제 데이터
   * @param {number} deleteData.id - 프로젝트 ID
   * @param {string} deleteData.reason - 삭제 사유
   * @returns {Promise<Object>} 삭제 결과
   */
  static async deleteProject(deleteData) {
    const url = `${BASE_URL}/api/admin/deleteProject`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'DELETE',
      body: deleteData,
      requireAuth: true,
      errorMessage: '프로젝트 삭제 실패',
      context: 'Admin Project Delete'
    });
  }
  /**
   * 파트너 전체 조회
   * @returns {Promise<Array>} 파트너 목록 ([{ id, name, imageUrl }])
   */
  static async getPartnerList() {
    const url = `${BASE_URL}/api/admin/findAllPartner`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '파트너 목록 조회 실패',
      context: 'Admin Get Partner List'
    });
  }

  /**
   * 파트너 단건 조회
   * @param {number} partnerId - 파트너 ID
   * @returns {Promise<Object>} 파트너 상세 ({ id, name, imageUrl })
   */
  static async getPartnerDetail(partnerId) {
    const url = `${BASE_URL}/api/admin/findOnePartner/${partnerId}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'GET',
      requireAuth: true,
      errorMessage: '파트너 상세 조회 실패',
      context: 'Admin Get Partner Detail'
    });
  }

  /**
   * 파트너 추가
   * @param {Object} partnerData - 파트너 데이터
   * @param {string} partnerData.name - 파트너 이름
   * @param {string} partnerData.imageKey - 이미지 키
   * @param {string} partnerData.link - 파트너 링크 (옵션)
   * @returns {Promise<Object>} 추가 결과
   */
  static async addPartner(partnerData) {
    const url = `${BASE_URL}/api/admin/addPartner`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'POST',
      requireAuth: true,
      body: partnerData,
      errorMessage: '파트너 추가 실패',
      context: 'Admin Add Partner'
    });
  }
  /**
   * 파트너 삭제
   * @param {number} partnerId - 파트너 ID
   * @returns {Promise<Object>} 삭제 결과
   */
  static async deletePartner(partnerId) {
    const url = `${BASE_URL}/api/admin/deletePartner/${partnerId}`;

    return await ApiUtils.fetchWrapper(url, {
      method: 'DELETE',
      requireAuth: true,
      errorMessage: '파트너 삭제 실패',
      context: 'Admin Delete Partner'
    });
  }
}