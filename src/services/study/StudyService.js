import { ApiUtils } from "../common/api.utils.js";
import { ValidationUtils } from "../common/validation.utils.js";
import { BASE_URL, ENDPOINTS, STUDY_CONSTANTS } from "./study.constants.js";
import { ImageService } from "../imageService.js";

// 요청 캐시 및 중복 방지를 위한 Map
const requestCache = new Map();
const pendingRequests = new Map();
const abortControllers = new Map();

/**
 * 최적화된 스터디 서비스 클래스
 * - 모듈화된 구조로 리팩토링
 * - 업데이트된 API 명세서 기반
 */
export class StudyService {
  // === 스터디 생성 ===

  /**
   * 스터디 생성 (API 스펙: content, images만 필요)
   * @param {string} content - 스터디 내용
   * @param {Array} images - 이미지 배열 [{ key: string, sortOrder: number }]
   * @returns {Promise<Object>} 생성된 스터디 정보
   */
  static async createStudy(content, images = []) {
    try {
      // 1. 데이터 유효성 검사
      this.validateStudyCreateData({ content, images });

      const requestData = {
        content,
        images,
      };

      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions(
        "POST",
        headers,
        requestData,
      );

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STUDY_CREATE}`,
        options,
      );

      return await ApiUtils.handleResponse(response, "스터디 생성 실패");
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  // === 스터디 조회 ===

  /**
   * 스터디 ID로 조회
   * @param {number} studyId - 스터디 ID
   * @returns {Promise<Object>} 스터디 정보
   */
  static async getStudyById(studyId) {
    try {
      const headers = ApiUtils.getCommonHeaders(true, false); // 인증 선택사항
      const options = ApiUtils.createRequestOptions("GET", headers);

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STUDY_GET_BY_ID}/${studyId}`,
        options,
      );

      return await ApiUtils.handleResponse(response, "스터디 조회 실패");
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 사용자별 스터디 채널 조회
   * @param {number} userId - 사용자 ID
   * @returns {Promise<Object>} 사용자 스터디 채널 정보
   */
  static async getUserStudyChannel(userId) {
    try {
      // 스터디 채널은 공개 정보이므로 인증을 선택사항으로 변경
      const headers = ApiUtils.getCommonHeaders(true, false); // 인증 선택사항
      const options = ApiUtils.createRequestOptions("GET", headers);

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STUDY_GET_USER_CHANNEL}/${userId}`,
        options,
      );

      return await ApiUtils.handleResponse(
        response,
        "사용자 스터디 채널 조회 실패",
      );
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 사용자 스터디 목록 조회
   * @returns {Promise<Object>} 사용자 스터디 목록
   */
  static async getUserStudies() {
    try {
      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions("GET", headers);

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STUDY_GET_USER_STUDIES}`,
        options,
      );

      return await ApiUtils.handleResponse(
        response,
        "사용자 스터디 목록 조회 실패",
      );
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 카테고리별 그룹화된 스터디 조회
   * @returns {Promise<Object>} 카테고리별 스터디 목록
   */
  static async getGroupedStudies() {
    try {
      const cacheKey = "grouped-studies";

      // 캐시 확인
      if (requestCache.has(cacheKey)) {
        const cached = requestCache.get(cacheKey);
        if (Date.now() - cached.timestamp < STUDY_CONSTANTS.CACHE_TTL) {
          return cached.data;
        }
      }

      // 진행 중인 요청 확인
      if (pendingRequests.has(cacheKey)) {
        return await pendingRequests.get(cacheKey);
      }

      // 새 요청 시작
      const requestPromise = this.fetchGroupedStudies();
      pendingRequests.set(cacheKey, requestPromise);

      try {
        const result = await requestPromise;

        // 캐시 저장
        requestCache.set(cacheKey, {
          data: result,
          timestamp: Date.now(),
        });

        return result;
      } finally {
        pendingRequests.delete(cacheKey);
      }
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 그룹화된 스터디 실제 fetch 요청
   * @private
   */
  static async fetchGroupedStudies() {
    const headers = ApiUtils.getCommonHeaders(true, false); // 인증 선택사항
    const options = ApiUtils.createRequestOptions("GET", headers);

    const response = await fetch(
      `${BASE_URL}${ENDPOINTS.STUDY_GET_GROUPED}`,
      options,
    );

    return await ApiUtils.handleResponse(response, "그룹화된 스터디 조회 실패");
  }

  // === 스터디 수정/삭제 ===

  /**
   * 스터디 수정
   * @param {number} studyId - 스터디 ID
   * @param {Object} updateData - 수정할 데이터
   * @returns {Promise<Object>} 수정 결과
   */
  static async updateStudy(studyId, updateData) {
    try {
      // 유효성 검사
      this.validateStudyUpdateData(updateData);

      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions("PUT", headers, updateData);

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STUDY_UPDATE}/${studyId}`,
        options,
      );

      // 캐시 무효화
      this.invalidateCache();

      return await ApiUtils.handleResponse(response, "스터디 수정 실패");
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  /**
   * 스터디 삭제
   * @param {number} studyId - 스터디 ID
   * @returns {Promise<Object>} 삭제 결과
   */
  static async deleteStudy(studyId) {
    try {
      // 문자열인 경우 숫자로 변환
      const numericId =
        typeof studyId === "string" ? parseInt(studyId, 10) : studyId;

      if (!numericId || isNaN(numericId) || numericId <= 0) {
        throw new Error("유효하지 않은 스터디 ID입니다.");
      }

      const headers = ApiUtils.getCommonHeaders();
      const options = ApiUtils.createRequestOptions("DELETE", headers);

      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STUDY_DELETE}/${numericId}`,
        options,
      );

      // 캐시 무효화
      this.invalidateCache();

      return await ApiUtils.handleResponse(response, "스터디 삭제 실패");
    } catch (error) {
      ApiUtils.handleApiError(error);
    }
  }

  // === 유틸리티 메서드 ===

  /**
   * 스터디 생성 데이터 유효성 검사 (새 API 스펙)
   * @param {Object} data - { content: string, images: Array }
   * @throws {Error} 유효성 검사 실패 시 에러
   */
  static validateStudyCreateData(data) {
    ValidationUtils.validateRequired(data, ["content"]);

    if (
      !data.content ||
      data.content.trim() === "" ||
      data.content === "<p></p>"
    ) {
      throw new Error("스터디 내용을 입력해주세요.");
    }

    if (data.images && !Array.isArray(data.images)) {
      throw new Error("이미지 데이터 형식이 올바르지 않습니다.");
    }

    return true;
  }

  /**
   * 스터디 생성 데이터 유효성 검사 (레거시 - 프로젝트용)
   * @param {Object} studyData - 검사할 스터디 데이터
   * @throws {Error} 유효성 검사 실패 시 에러
   */
  static validateStudyData(studyData) {
    ValidationUtils.validateRequired(studyData, [
      "title",
      "description",
      "category",
    ]);

    ValidationUtils.validateStringLength(
      studyData.title,
      "제목",
      STUDY_CONSTANTS.MAX_TITLE_LENGTH,
    );

    ValidationUtils.validateStringLength(
      studyData.description,
      "설명",
      STUDY_CONSTANTS.MAX_DESCRIPTION_LENGTH,
    );

    if (studyData.capacity) {
      ValidationUtils.validateNumberRange(
        studyData.capacity,
        "모집인원",
        STUDY_CONSTANTS.MIN_CAPACITY,
      );
    }

    return true;
  }

  /**
   * 스터디 수정 데이터 유효성 검사
   * @param {Object} updateData - 검사할 수정 데이터
   * @throws {Error} 유효성 검사 실패 시 에러
   */
  static validateStudyUpdateData(updateData) {
    if (updateData.title) {
      ValidationUtils.validateStringLength(
        updateData.title,
        "제목",
        STUDY_CONSTANTS.MAX_TITLE_LENGTH,
      );
    }

    if (updateData.description) {
      ValidationUtils.validateStringLength(
        updateData.description,
        "설명",
        STUDY_CONSTANTS.MAX_DESCRIPTION_LENGTH,
      );
    }

    if (updateData.capacity) {
      ValidationUtils.validateNumberRange(
        updateData.capacity,
        "모집인원",
        STUDY_CONSTANTS.MIN_CAPACITY,
      );
    }

    return true;
  }

  /**
   * 캐시 무효화
   * @private
   */
  static invalidateCache() {
    requestCache.clear();
  }

  /**
   * 진행 중인 요청 취소
   * @param {string} requestKey - 취소할 요청 키
   */
  static cancelRequest(requestKey) {
    if (abortControllers.has(requestKey)) {
      abortControllers.get(requestKey).abort();
      abortControllers.delete(requestKey);
      pendingRequests.delete(requestKey);
    }
  }

  /**
   * 모든 진행 중인 요청 취소
   */
  static cancelAllRequests() {
    abortControllers.forEach((controller, key) => {
      controller.abort();
    });
    abortControllers.clear();
    pendingRequests.clear();
  }
}

export default StudyService;
