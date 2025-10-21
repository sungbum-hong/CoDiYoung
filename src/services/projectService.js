import { AuthService } from './authService.js';
import { ImageService } from './imageService.js';

const BASE_URL = 'http://15.164.125.28:8080';

// API 엔드포인트 상수 (API 명세서 기준으로 수정)
const ENDPOINTS = {
  // 프로젝트 기본 CRUD
  PROJECT_CREATE: '/api/project/create',
  PROJECT_GET: '/api/project',
  PROJECT_GET_ALL: '/api/project/findAll',
  PROJECT_GET_PROGRESSING: '/api/project/find/progressing',
  PROJECT_GET_APPLIED: '/api/project/find/applied',
  PROJECT_GET_COMPLETED: '/api/project/find/completedProject', // 새로 추가
  PROJECT_APPLY: '/api/project/apply',
  
  // 프로젝트 신청 관리
  PROJECT_GET_APPLICANTS: '/api/project/projectApplication',
  PROJECT_APPROVE_APPLICANT: '/api/projectApplication',
  PROJECT_REJECT_APPLICANT: '/api/projectApplication',
  PROJECT_GET_QUESTIONS: '/api/projectApplication/questions',
  PROJECT_CANCEL: '/api/projectApplication/cancel',           // 추가
  PROJECT_COMPLETE: '/api/projectApplication/complete',       // 추가
  PROJECT_DELETE_BY_LEADER: '/api/project/delete/byProjectLeader', // 프로젝트 취소(개설자전용)
  
  // 이미지 업로드 관련 (추가)
  STORAGE_PRESIGN_PUT: '/api/storage/presign-put',           // 업로드용
  STORAGE_PRESIGN_GET: '/api/storage/presign-get',           // 조회용
  STORAGE_PUBLIC_URL: '/api/storage/public-url'              // 공개 URL
};

export class ProjectService {
  // 공통 헤더 생성
  static getCommonHeaders(includeContentType = true, requireAuth = true) {
    const headers = {};
    
    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
    }
    
    headers['Accept'] = 'application/json';
    
    // requireAuth가 true이면 토큰 검증
    if (requireAuth) {
      try {
        const token = AuthService.validateTokenBeforeRequest(true); // 토큰 필수
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        // 토큰 만료 시 에러를 상위로 전파
        throw error;
      }
    } else {
      // 조회 API의 경우 토큰이 있으면 포함, 없어도 OK
      try {
        const token = AuthService.validateTokenBeforeRequest(false); // 토큰 선택사항
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        // 토큰 만료 시에만 에러, 토큰 없음은 무시
        if (error.message.includes('만료')) {
          throw error;
        }
        // 토큰이 없는 경우는 무시하고 계속 진행
      }
    }
    
    return headers;
  }

  // 공통 에러 핸들링
  static handleApiError(error, context = '') {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('네트워크 연결 오류가 발생했습니다.');
    }
    throw error;
  }

  // 공통 응답 처리 (OpenAPI 스키마 대응 개선)
  static async handleResponse(response, errorMessage = 'API 요청 실패', expectedSchema = null) {
    console.log('=== handleResponse 시작 ===');
    console.log('응답 상태:', response.status, response.statusText);
    console.log('응답 OK:', response.ok);

    if (!response.ok) {
      let errorData = {};
      let errorText = '';
      try {
        errorText = await response.text();
        console.log('에러 응답 텍스트:', errorText);
        if (errorText.trim()) {
          errorData = JSON.parse(errorText);
          console.log('파싱된 에러 데이터:', errorData);
        }
      } catch (e) {
        console.error('JSON 파싱 오류:', e);
        console.error('파싱 실패한 텍스트:', errorText);
        errorData = { message: errorText || '서버 에러가 발생했습니다.' };
      }
      const finalErrorMessage = errorData.message || `${errorMessage} (${response.status})`;
      console.error('최종 에러 메시지:', finalErrorMessage);
      throw new Error(finalErrorMessage);
    }

    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const text = await response.text();
        if (text.trim() === '') {
          return { success: true };
        }
        
        // JSON 형태인지 확인 (첫 글자가 { 또는 [로 시작)
        const trimmedText = text.trim();
        if (trimmedText.startsWith('{') || trimmedText.startsWith('[')) {
          const parsedData = JSON.parse(text);
          
          // 특정 응답 스키마에 대한 검증 및 처리
          if (expectedSchema === 'ProjectCompleteResponse') {
            // ProjectCompleteResponse 구조 검증
            if (parsedData.success !== undefined && parsedData.data !== undefined) {
              return parsedData;
            }
          }
          
          return parsedData;
        } else {
          // JSON이 아닌 텍스트지만 Content-Type이 JSON인 경우
          return { success: true, message: text };
        }
      } catch (e) {
        console.error('성공 응답 JSON 파싱 오류:', e);
        throw new Error('서버 응답을 파싱할 수 없습니다.');
      }
    } else {
      const text = await response.text();
      return text || { success: true };
    }
  }

  // === 이미지 업로드 관련 메서드 (신규 추가) ===
  
  /**
   * 이미지 업로드용 Presigned URL 발급
   * @param {string} filename - 파일명
   * @param {string} contentType - 파일 MIME 타입 (예: 'image/jpeg')
   * @returns {Object} { url, key } - 업로드 URL과 이미지 키
   */
  static async getPresignedUploadUrl(filename, contentType) {
    try {
      
      const params = new URLSearchParams({
        filename: filename,
        contentType: contentType
      });
      
      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_PUT}?${params}`,
        {
          method: 'POST',
          headers: this.getCommonHeaders(false) // Content-Type 제외
        }
      );

      const result = await this.handleResponse(response, 'Presigned URL 발급 실패');
      return result;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  /**
   * Presigned URL을 사용하여 이미지 직접 업로드
   * @param {string} presignedUrl - 발급받은 presigned URL
   * @param {File} file - 업로드할 파일
   * @param {string} contentType - 파일 MIME 타입
   */
  static async uploadImageToS3(presignedUrl, file, contentType) {
    try {
      
      const response = await fetch(presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': contentType
        },
        body: file
      });

      if (!response.ok) {
        throw new Error(`이미지 업로드 실패: ${response.status} ${response.statusText}`);
      }

      return true;
    } catch (error) {
      console.error('이미지 업로드 에러:', error);
      throw error;
    }
  }

  /**
   * 이미지 업로드 전체 플로우 (Presigned URL 발급 + 업로드)
   * @param {File} file - 업로드할 파일
   * @returns {string} imageKey - 업로드된 이미지의 키
   */
  static async uploadProjectImage(file) {
    return ImageService.uploadImage(file);
  }

  /**
   * 이미지 조회용 URL 가져오기
   * @param {string} imageKey - 이미지 키
   * @returns {string} 조회 가능한 URL
   */
  static async getImageUrl(imageKey) {
    try {
      
      const params = new URLSearchParams({ key: imageKey });
      
      const response = await fetch(
        `${BASE_URL}${ENDPOINTS.STORAGE_PRESIGN_GET}?${params}`,
        {
          method: 'GET',
          headers: this.getCommonHeaders(false, false) // 인증 불필요
        }
      );

      const result = await this.handleResponse(response, '이미지 URL 발급 실패');
      return result.url || result;
    } catch (error) {
      console.error('이미지 URL 발급 에러:', error);
      this.handleApiError(error);
    }
  }

  // === 프로젝트 관련 메서드 ===

  /**
   * 프로젝트 생성 (이미지 포함)
   * @param {Object} projectData - 프로젝트 데이터
   * @param {File} [imageFile] - 프로젝트 이미지 파일 (선택사항)
   */
  static async createProject(projectData, imageFile = null) {
    try {
      
      // 1. 데이터 유효성 검사
      this.validateProjectData(projectData);
      
      // 2. 이미지 파일 검증 (있는 경우)
      if (imageFile) {
        this.validateImageFile(imageFile);
      }
      
      let finalProjectData = { ...projectData };
      
      // 3. 이미지가 있으면 먼저 업로드
      if (imageFile) {
        const imageKey = await this.uploadProjectImage(imageFile);
        finalProjectData.imageKey = imageKey;
      }
      
      const bodyString = JSON.stringify(finalProjectData);

      const headers = this.getCommonHeaders();

      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_CREATE}`, {
        method: 'POST',
        headers: headers,
        body: bodyString,
        mode: 'cors',
        credentials: 'include'
      });

      return await this.handleResponse(response, '프로젝트 생성 실패');
    } catch (error) {
      console.error('프로젝트 생성 에러:', error);
      console.error('에러 상세:', error.stack);
      this.handleApiError(error);
    }
  }

  /**
   * 단일 프로젝트 조회 (OneProjectResponse 스키마)
   * @param {number} projectId - 프로젝트 ID
   * @returns {Object} OneProjectResponse - content, leaderImage, memberBriefs, techs(배열) 포함
   */
  static async getProject(projectId) {
    try {
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET}/${projectId}`, {
        method: 'GET',
        headers: this.getCommonHeaders(true, false) // 인증 선택사항
      });

      const result = await this.handleResponse(response, '프로젝트 조회 실패');
      
      // OpenAPI 스키마: OneProjectResponse
      // 필드: id, title, content, slogan, leaderImage, memberBriefs, techs(배열)
      return result;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  /**
   * 모든 프로젝트 조회 (AllProjectResponse 스키마, 페이징 지원)
   * @param {Object} options - 페이징 옵션
   * @param {number} options.page - 페이지 번호 (0부터 시작)
   * @param {number} options.size - 페이지 크기
   * @param {string[]} options.sort - 정렬 조건 배열
   * @returns {Object} AllProjectResponse - id, slogan, title, imageKey, createdAt 포함
   */
  static async getAllProjects(options = {}) {
    try {
      
      const {
        page = 0,
        size = 10,
        sort = ['createdAt,DESC']
      } = options;

      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('size', size.toString());
      
      // 정렬 조건 추가
      sort.forEach(sortParam => {
        params.append('sort', sortParam);
      });


      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_ALL}?${params}`, {
        method: 'GET',
        headers: this.getCommonHeaders(true, false) // 인증 선택사항
      });

      const result = await this.handleResponse(response, '프로젝트 목록 조회 실패');
      
      // OpenAPI 스키마: AllProjectResponse
      // 필드: id, slogan, title, imageKey, createdAt
      return result;
    } catch (error) {
      this.handleApiError(error);
    }
  }

  /**
   * 진행 중인 프로젝트 조회
   */
  static async getProgressingProjects() {
    try {
      console.group('📋 [DEBUG] 진행 중인 프로젝트 조회 API 호출');

      const headers = this.getCommonHeaders();
      console.log('📤 요청 정보:', {
        url: `${BASE_URL}${ENDPOINTS.PROJECT_GET_PROGRESSING}`,
        method: 'GET',
        headers
      });

      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_PROGRESSING}`, {
        method: 'GET',
        headers: headers
      });

      console.log('📥 HTTP 응답:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok
      });

      const result = await this.handleResponse(response, '진행 프로젝트 조회 실패');

      console.log('✅ 진행 프로젝트 조회 응답:', {
        resultType: Array.isArray(result) ? 'Array' : typeof result,
        resultLength: Array.isArray(result) ? result.length : 'N/A',
        result
      });

      // 각 프로젝트의 currentUserStatus 상세 분석
      if (result && typeof result === 'object') {
        if (Array.isArray(result)) {
          console.log('📊 진행 중인 프로젝트 배열 상세 분석:');
          result.forEach((project, index) => {
            console.log(`  [${index}] 프로젝트 ${project.id || 'N/A'} - ${project.title || 'No Title'}:`, {
              currentUserStatus: project.currentUserStatus,
              status: project.status,
              isLeader: project.isLeader,
              isOwner: project.isOwner,
              role: project.role,
              completionStatus: project.completionStatus,
              completionSummary: project.completionSummary
            });
          });
        } else {
          // 단일 객체인 경우
          console.log('📊 진행 중인 프로젝트 단일 객체 상세 분석:', {
            projectId: result.id,
            title: result.title,
            currentUserStatus: result.currentUserStatus,
            status: result.status,
            isLeader: result.isLeader,
            isOwner: result.isOwner,
            role: result.role,
            completionStatus: result.completionStatus,
            completionSummary: result.completionSummary,
            memberCount: result.memberCount,
            capacity: result.capacity,
            complicatedCount: result.complicatedCount,
            전체객체: result
          });

          // memberBriefs 상세 분석
          if (result.memberBriefs && Array.isArray(result.memberBriefs)) {
            console.log('👥 memberBriefs 상세 분석:', {
              memberCount: result.memberBriefs.length,
              members: result.memberBriefs.map((member, index) => ({
                index,
                userId: member.userId,
                name: member.name,
                profileKey: member.profileKey
              }))
            });
          } else {
            console.log('❌ memberBriefs가 없거나 배열이 아님:', result.memberBriefs);
          }
        }
      }

      console.groupEnd();

      return result;
    } catch (error) {
      console.group('❌ [DEBUG] 진행 프로젝트 조회 에러');
      console.error('진행 프로젝트 조회 에러:', error);
      console.groupEnd();
      this.handleApiError(error);
    }
  }

  /**
   * 신청한 프로젝트 조회
   */
  static async getAppliedProjects() {
    try {
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_APPLIED}`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '신청 프로젝트 조회 실패');
    } catch (error) {
      this.handleApiError(error);
    }
  }

  /**
   * 완료된 프로젝트 조회 (페이지네이션 지원)
   * @param {Object} options - 페이징 옵션
   * @param {number} options.page - 페이지 번호 (0부터 시작)
   * @param {number} options.size - 페이지 크기
   * @param {string[]} options.sort - 정렬 조건 배열
   * @returns {Object} 완료된 프로젝트 목록 (페이지네이션 포함)
   * 
   * API 응답 구조:
   * {
   *   totalElements: number,
   *   totalPages: number,
   *   pageable: { paged, pageNumber, pageSize, offset, sort, unpaged },
   *   size: number,
   *   content: [{ id: number, logoImageURL: string }],
   *   number: number,
   *   sort: [{ direction, nullHandling, ascending, property, ignoreCase }],
   *   numberOfElements: number,
   *   first: boolean,
   *   last: boolean,
   *   empty: boolean
   * }
   */
  static async getCompletedProjects(options = {}) {
    try {
      
      const {
        page = 0,
        size = 10,
        sort = ['createdAt,DESC']
      } = options;

      const params = new URLSearchParams();
      params.append('page', page.toString());
      params.append('size', size.toString());
      
      // 정렬 조건 추가
      sort.forEach(sortParam => {
        params.append('sort', sortParam);
      });


      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_COMPLETED}?${params}`, {
        method: 'GET',
        headers: this.getCommonHeaders() // 로그인된 사용자 정보 필요
      });

      const result = await this.handleResponse(response, '완료된 프로젝트 조회 실패');
      
      
      return result;
    } catch (error) {
      console.error('완료된 프로젝트 조회 에러:', error);
      this.handleApiError(error);
    }
  }

  /**
   * 프로젝트 신청
   * @param {number} projectId - 프로젝트 ID
   * @param {Object} applicationData - 신청 데이터
   */
  static async applyToProject(projectId, applicationData) {
    try {
      console.log('=== ProjectService.applyToProject 시작 ===');
      console.log('projectId:', projectId);
      console.log('applicationData:', applicationData);

      // 1. 신청 데이터 유효성 검사
      console.log('유효성 검사 시작...');
      this.validateApplicationData(applicationData);
      console.log('유효성 검사 통과');

      // 2. techs 필드 정규화 (배열로) - API 명세서에 따라 배열이어야 함
      const normalizedData = {
        ...applicationData,
        techs: this.normalizeTechsToArray(applicationData.techs)
      };

      console.log('techs 정규화 후:', normalizedData.techs);

      // URL 파라미터에 이미 projectId가 있으므로 body에서 제거
      if (normalizedData.projectId !== undefined) {
        console.log('body에서 projectId 제거');
        delete normalizedData.projectId;
      }

      console.log('최종 정규화된 데이터:', normalizedData);

      // answers 배열 구조 상세 확인
      if (normalizedData.answers && normalizedData.answers.length > 0) {
        console.log('answers 배열 상세:', normalizedData.answers.map((answer, index) => ({
          index,
          questionId: answer.questionId,
          questionIdType: typeof answer.questionId,
          answer: answer.answer,
          answerType: typeof answer.answer,
          answerLength: answer.answer ? answer.answer.length : 0
        })));
      }

      const headers = this.getCommonHeaders();
      console.log('요청 헤더:', headers);

      const requestUrl = `${BASE_URL}${ENDPOINTS.PROJECT_APPLY}/${projectId}`;
      console.log('요청 URL:', requestUrl);
      console.log('요청 body:', JSON.stringify(normalizedData));

      // JSON 직렬화 시 안전한 방식 사용
      const requestBody = JSON.stringify(normalizedData, null, 0);
      console.log('요청 body 길이:', requestBody.length);
      console.log('요청 body 바이트 길이:', new Blob([requestBody]).size);

      // JSON이 올바르게 파싱되는지 검증
      try {
        const parsed = JSON.parse(requestBody);
        console.log('JSON 파싱 검증 성공:', parsed);
      } catch (e) {
        console.error('JSON 파싱 검증 실패:', e);
        throw new Error('JSON 직렬화 실패');
      }

      // 완전히 성공하는 다른 API와 동일한 형식으로 변경
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': headers['Authorization']
        },
        mode: 'cors',
        credentials: 'include',
        body: requestBody
      });

      console.log('응답 상태:', response.status);
      console.log('응답 헤더:', response.headers);

      const result = await this.handleResponse(response, '프로젝트 신청 실패');
      console.log('=== ProjectService.applyToProject 성공 ===');
      return result;
    } catch (error) {
      console.error('=== ProjectService.applyToProject 실패 ===');
      console.error('에러 타입:', error.constructor.name);
      console.error('에러 메시지:', error.message);
      console.error('에러 스택:', error.stack);
      this.handleApiError(error);
    }
  }

  /**
   * 프로젝트 신청 취소
   * @param {number} projectId - 프로젝트 ID
   */
  static async cancelProjectApplication(projectId) {
    try {
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_CANCEL}/${projectId}`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '프로젝트 신청 취소 실패');
    } catch (error) {
      console.error('프로젝트 신청 취소 에러:', error);
      this.handleApiError(error);
    }
  }

  /**
   * 프로젝트 완료 처리
   * @param {number} projectId - 프로젝트 ID
   */
  static async completeProject(projectId) {
    try {
      console.group('🚀 [DEBUG] 프로젝트 완료 API 호출');
      console.log('📤 요청 정보:', {
        projectId,
        url: `${BASE_URL}${ENDPOINTS.PROJECT_COMPLETE}/${projectId}`,
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_COMPLETE}/${projectId}`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      console.log('📥 HTTP 응답:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries())
      });

      const result = await this.handleResponse(response, '프로젝트 완료 처리 실패', 'ProjectCompleteResponse');

      console.log('✅ 완료 API 최종 응답:', result);
      console.groupEnd();

      return result;
    } catch (error) {
      console.group('❌ [DEBUG] 프로젝트 완료 API 에러');
      console.error('프로젝트 완료 처리 에러:', error);
      console.log('에러 발생 시점:', {
        projectId,
        url: `${BASE_URL}${ENDPOINTS.PROJECT_COMPLETE}/${projectId}`
      });
      console.groupEnd();
      this.handleApiError(error);
    }
  }

  // === 프로젝트 신청 관리 메서드 ===

  /**
   * 프로젝트 신청자 조회
   * @param {number} projectId - 프로젝트 ID
   */
  static async getProjectApplicants(projectId) {
    try {
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_APPLICANTS}/${projectId}/applicants`, {
        method: 'GET',
        headers: this.getCommonHeaders()
      });

      const result = await this.handleResponse(response, '신청자 조회 실패');
      
      return result;
    } catch (error) {
      console.error("신청자 조회 실패:", error);
      this.handleApiError(error);
    }
  }

  /**
   * 신청자 승인
   * @param {number} projectId - 프로젝트 ID
   * @param {number} userId - 사용자 ID
   */
  static async approveApplicant(projectId, userId) {
    try {
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_APPROVE_APPLICANT}/${projectId}/applicants/${userId}/approve`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      const result = await this.handleResponse(response, '신청자 승인 실패');
      
      return result;
    } catch (error) {
      console.error("신청자 승인 실패:", error);
      this.handleApiError(error);
    }
  }

  /**
   * 신청자 거절
   * @param {number} projectId - 프로젝트 ID
   * @param {number} userId - 사용자 ID
   */
  static async rejectApplicant(projectId, userId) {
    try {
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_REJECT_APPLICANT}/${projectId}/applicants/${userId}/reject`, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      const result = await this.handleResponse(response, '신청자 거절 실패');
      
      return result;
    } catch (error) {
      console.error("신청자 거절 실패:", error);
      this.handleApiError(error);
    }
  }

  /**
   * 프로젝트 질문 조회
   * @param {number} projectId - 프로젝트 ID
   */
  static async getProjectQuestions(projectId) {
    try {
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_GET_QUESTIONS}/${projectId}`, {
        method: 'GET',
        headers: this.getCommonHeaders(true, false) // 인증 선택사항
      });

      const result = await this.handleResponse(response, '프로젝트 질문 조회 실패');
      
      return result;
    } catch (error) {
      console.error("프로젝트 질문 조회 실패:", error);
      this.handleApiError(error);
    }
  }

  /**
   * 프로젝트 취소 (개설자 전용)
   * 팀원이 1명이라도 있으면 취소 불가능
   * @param {number} projectId - 프로젝트 ID
   */
  static async deleteProjectByLeader(projectId) {
    try {
      
      // 유효성 검사
      if (!projectId || typeof projectId !== 'number') {
        throw new Error('유효하지 않은 프로젝트 ID입니다.');
      }
      
      const headers = this.getCommonHeaders();
      
      const response = await fetch(`${BASE_URL}${ENDPOINTS.PROJECT_DELETE_BY_LEADER}/${projectId}`, {
        method: 'PUT',
        headers: headers,
        mode: 'cors',
        credentials: 'include'
      });


      return await this.handleResponse(response, '프로젝트 취소 실패');
    } catch (error) {
      console.error('프로젝트 취소 API 에러:', error);
      console.error('에러 상세:', {
        message: error.message,
        stack: error.stack,
        name: error.name,
        projectId: projectId
      });
      this.handleApiError(error);
    }
  }

  // === 유틸리티 메서드 ===

  /**
   * techs 필드 데이터 타입 정규화
   * @param {string|string[]} techs - 기술 스택 (문자열 또는 배열)
   * @returns {string} 정규화된 문자열
   */
  static normalizeTechsToString(techs) {
    if (Array.isArray(techs)) {
      return techs.join(', ');
    }
    return techs || '';
  }

  /**
   * techs 필드 데이터 타입 정규화 (배열로)
   * @param {string|string[]} techs - 기술 스택 (문자열 또는 배열)
   * @returns {string[]} 정규화된 배열
   */
  static normalizeTechsToArray(techs) {
    if (typeof techs === 'string') {
      return techs.split(',').map(tech => tech.trim()).filter(tech => tech.length > 0);
    }
    return Array.isArray(techs) ? techs : [];
  }

  /**
   * 파일 유효성 검사
   * @param {File} file - 검사할 파일
   * @param {number} maxSize - 최대 파일 크기 (바이트)
   * @param {string[]} allowedTypes - 허용되는 MIME 타입 배열
   */
  static validateImageFile(file, maxSize = 5 * 1024 * 1024, allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']) {
    if (!file) {
      throw new Error('파일이 선택되지 않았습니다.');
    }

    if (file.size > maxSize) {
      throw new Error(`파일 크기가 너무 큽니다. 최대 ${Math.round(maxSize / 1024 / 1024)}MB까지 업로드 가능합니다.`);
    }

    if (!allowedTypes.includes(file.type)) {
      throw new Error(`지원하지 않는 파일 형식입니다. (지원 형식: ${allowedTypes.join(', ')})`);
    }

    return true;
  }

  /**
   * 프로젝트 생성 데이터 유효성 검사 (CreateProjectRequest 스키마 기준)
   * @param {Object} projectData - 검사할 프로젝트 데이터
   */
  static validateProjectData(projectData) {
    const required = ['title', 'description', 'capacity'];
    const missing = required.filter(field => !projectData[field]);
    
    if (missing.length > 0) {
      throw new Error(`필수 필드가 누락되었습니다: ${missing.join(', ')}`);
    }

    // 필드별 타입 및 길이 검증
    if (typeof projectData.title !== 'string' || projectData.title.length > 100) {
      throw new Error('제목은 100자 이하의 문자열이어야 합니다.');
    }

    if (typeof projectData.description !== 'string' || projectData.description.length > 1000) {
      throw new Error('설명은 1000자 이하의 문자열이어야 합니다.');
    }

    if (typeof projectData.capacity !== 'number' || projectData.capacity < 1) {
      throw new Error('모집인원은 1 이상의 숫자여야 합니다.');
    }

    // 선택적 필드 검증
    if (projectData.positions && !Array.isArray(projectData.positions)) {
      throw new Error('positions는 배열이어야 합니다.');
    }

    if (projectData.techs && !Array.isArray(projectData.techs)) {
      throw new Error('techs는 배열이어야 합니다.');
    }

    if (projectData.questions && !Array.isArray(projectData.questions)) {
      throw new Error('questions는 배열이어야 합니다.');
    }

    return true;
  }

  /**
   * 프로젝트 신청 데이터 유효성 검사 (ApplyProjectRequest 스키마 기준)
   * @param {Object} applicationData - 검사할 신청 데이터
   */
  static validateApplicationData(applicationData) {
    const required = ['position', 'techs', 'answers'];
    const missing = required.filter(field => !applicationData[field]);
    
    if (missing.length > 0) {
      throw new Error(`필수 필드가 누락되었습니다: ${missing.join(', ')}`);
    }

    // 필드별 타입 검증
    if (typeof applicationData.position !== 'string') {
      throw new Error('position은 문자열이어야 합니다.');
    }

    if (!Array.isArray(applicationData.techs)) {
      throw new Error('techs는 배열이어야 합니다.');
    }

    if (!Array.isArray(applicationData.answers)) {
      throw new Error('answers는 배열이어야 합니다.');
    }

    // projectId는 선택사항 (URL 파라미터로 전달되므로)
    if (applicationData.projectId !== undefined && typeof applicationData.projectId !== 'number') {
      throw new Error('projectId는 숫자여야 합니다.');
    }

    // answers 배열 내부 검증
    applicationData.answers.forEach((answer, index) => {
      if (typeof answer.questionId !== 'number') {
        throw new Error(`answers[${index}].questionId는 숫자여야 합니다.`);
      }
      if (typeof answer.answer !== 'string') {
        throw new Error(`answers[${index}].answer는 문자열이어야 합니다.`);
      }
    });

    return true;
  }
}

export default ProjectService;