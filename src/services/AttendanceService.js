import { MESSAGES } from '../constants/messages.js';
import { AuthService } from './authService.js';
import { CONFIG } from '../constants/config.js';


// 출석 관련 API 엔드포인트
const ENDPOINTS = {
  ATTENDANCE_CHECK: '/api/attendance/check',
  ATTENDANCE_CALENDAR: '/api/attendance/calendar'
};

/**
 * 출석 관련 서비스 클래스
 * - 출석 체크
 * - 출석 달력 조회
 * - 출석 통계 계산
 */
export class AttendanceService {
  // 공통 헤더 생성 (AuthService 의존)
  static getCommonHeaders(includeContentType = true, requireAuth = true) {
    const headers = {};

    if (includeContentType) {
      headers['Content-Type'] = 'application/json';
      headers['Accept'] = 'application/json';
    }

    if (requireAuth) {
      try {
        const token = AuthService.validateTokenBeforeRequest(true);
        if (token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
      } catch (error) {
        throw error;
      }
    }

    return headers;
  }

  // 공통 에러 핸들링
  static handleApiError(error, context = '') {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error(MESSAGES.ERRORS.NETWORK_ERROR);
    }
    throw error;
  }

  // 공통 응답 처리
  static async handleResponse(response, errorMessage = 'API 요청 실패') {
    if (!response.ok) {
      let errorData = {};
      try {
        const errorText = await response.text();
        if (errorText) {
          errorData = JSON.parse(errorText);
        }
      } catch (e) {
        // JSON 파싱 실패시 기본 에러 메시지 사용
      }

      const message = errorData.message || `${errorMessage} (${response.status})`;
      throw new Error(message);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    } else {
      const text = await response.text();
      return text || { success: true };
    }
  }

  // === 출석 체크 ===

  /**
   * 출석 체크
   * @returns {Promise<Object>} 출석 체크 결과
   */
  static async checkAttendance() {
    try {
      const url = `${CONFIG.API.BASE_URL}${ENDPOINTS.ATTENDANCE_CHECK}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: this.getCommonHeaders()
      });

      return await this.handleResponse(response, '출석 체크 실패');
    } catch (error) {
      this.handleApiError(error, 'checkAttendance');
    }
  }

  // === 출석 달력 조회 ===

  /**
   * 출석 달력 조회
   * @param {string} month - 조회할 월 (YYYY-MM 형식)
   * @returns {Promise<Object>} { month, days: [{ date, checked }] }
   */
  static async getAttendanceCalendar(month) {
    if (!month || typeof month !== 'string') {
      throw new Error('월 정보를 올바른 형식(YYYY-MM)으로 입력해주세요.');
    }

    // YYYY-MM 형식 검증
    const monthRegex = /^\d{4}-\d{2}$/;
    if (!monthRegex.test(month)) {
      throw new Error('월 형식은 YYYY-MM 이어야 합니다. (예: 2025-09)');
    }

    try {
      const url = `${CONFIG.API.BASE_URL}${ENDPOINTS.ATTENDANCE_CALENDAR}?month=${encodeURIComponent(month)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: this.getCommonHeaders(false) // Content-Type 불필요
      });

      return await this.handleResponse(response, '출석 달력 조회 실패');
    } catch (error) {
      this.handleApiError(error, 'getAttendanceCalendar');
    }
  }

  // === 편의 메서드들 ===

  /**
   * 현재 월의 출석 달력 조회
   * @returns {Promise<Object>} 현재 월의 출석 정보
   */
  static async getCurrentMonthAttendance() {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
    
    return this.getAttendanceCalendar(currentMonth);
  }

  /**
   * 오늘 출석했는지 확인
   * @returns {Promise<boolean>} 오늘 출석 여부
   */
  static async isTodayAttended() {
    try {
      const today = new Date();
      const currentMonth = `${today.getFullYear()}-${(today.getMonth() + 1).toString().padStart(2, '0')}`;
      const todayStr = today.toISOString().split('T')[0]; // YYYY-MM-DD

      const calendar = await this.getAttendanceCalendar(currentMonth);
      const todayRecord = calendar.days?.find(day => day.date === todayStr);

      return todayRecord?.checked || false;
    } catch (error) {
      return false;
    }
  }

  /**
   * 월 유효성 검사
   * @param {string} month - 검사할 월 문자열
   * @returns {boolean} 유효성 여부
   */
  static isValidMonth(month) {
    if (!month || typeof month !== 'string') return false;
    
    const monthRegex = /^\d{4}-\d{2}$/;
    if (!monthRegex.test(month)) return false;
    
    const [year, monthNum] = month.split('-');
    const yearNum = parseInt(year);
    const monthNumber = parseInt(monthNum);
    
    return yearNum >= 2020 && yearNum <= 2030 && monthNumber >= 1 && monthNumber <= 12;
  }
}

export default AttendanceService;