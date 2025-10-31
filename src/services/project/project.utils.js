import { ValidationUtils } from '../common/validation.utils.js';
import { PROJECT_CONSTANTS } from './project.constants.js';

/**
 * 프로젝트 관련 유틸리티 함수
 */
export class ProjectUtils {
  /**
   * techs 필드 데이터 타입 정규화 (문자열로)
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
   * 프로젝트 생성 데이터 유효성 검사 (CreateProjectRequest 스키마 기준)
   * @param {Object} projectData - 검사할 프로젝트 데이터
   * @throws {Error} 유효성 검사 실패 시 에러
   */
  static validateProjectData(projectData) {
    // 필수 필드 검증
    ValidationUtils.validateRequired(projectData, ['title', 'description', 'capacity']);

    // 개별 필드 검증
    ValidationUtils.validateStringLength(
      projectData.title,
      '제목',
      PROJECT_CONSTANTS.MAX_TITLE_LENGTH
    );

    ValidationUtils.validateStringLength(
      projectData.description,
      '설명',
      PROJECT_CONSTANTS.MAX_DESCRIPTION_LENGTH
    );

    ValidationUtils.validateNumberRange(
      projectData.capacity,
      '모집인원',
      PROJECT_CONSTANTS.MIN_CAPACITY
    );

    // 선택적 필드 검증
    if (projectData.positions) {
      ValidationUtils.validateArray(projectData.positions, 'positions', false);
    }

    if (projectData.techs) {
      ValidationUtils.validateArray(projectData.techs, 'techs', false);
    }

    if (projectData.questions) {
      ValidationUtils.validateArray(projectData.questions, 'questions', false);
    }

    return true;
  }

  /**
   * 프로젝트 신청 데이터 유효성 검사 (ApplyProjectRequest 스키마 기준)
   * @param {Object} applicationData - 검사할 신청 데이터
   * @throws {Error} 유효성 검사 실패 시 에러
   */
  static validateApplicationData(applicationData) {
    // 필수 필드 검증
    ValidationUtils.validateRequired(applicationData, ['position', 'techs', 'answers']);

    // 개별 필드 타입 검증
    if (typeof applicationData.position !== 'string') {
      throw new Error('position은 문자열이어야 합니다.');
    }

    ValidationUtils.validateArray(applicationData.techs, 'techs');
    ValidationUtils.validateArray(applicationData.answers, 'answers');

    // projectId는 선택사항 (URL 파라미터로 전달되므로)
    if (applicationData.projectId !== undefined) {
      ValidationUtils.validateNumberRange(applicationData.projectId, 'projectId', 1);
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

  /**
   * 이미지 파일 유효성 검사
   * @param {File} file - 검사할 파일
   * @throws {Error} 파일 검증 실패 시 에러
   */
  static validateImageFile(file) {
    return ValidationUtils.validateImageFile(
      file,
      PROJECT_CONSTANTS.MAX_IMAGE_SIZE,
      PROJECT_CONSTANTS.ALLOWED_IMAGE_TYPES
    );
  }
}