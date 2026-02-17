/**
 * 기술 스택 관련 유틸리티 함수들
 */

import { TECH_ICON_MAP } from '../../constants/techIcons';

/**
 * 기술명 정규화 함수
 * @param {string} techName - 원본 기술명
 * @returns {string} 정규화된 기술명
 */
export const normalizeTechName = (techName: string) => {
  if (!techName) return '';
  
  return techName
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s.]/g, '') // 특수문자 제거 (점은 vue.js 때문에 유지)
    .replace(/\s+/g, ' '); // 연속 공백을 하나로
};

/**
 * 기술명에 해당하는 아이콘 정보 조회
 * @param {string} techName - 기술명
 * @returns {Object|null} 아이콘 정보 객체 또는 null
 */
export const getTechIconData = (techName: string) => {
  if (!techName) return null;
  const normalized = normalizeTechName(techName);
  // @ts-ignore
  return TECH_ICON_MAP[normalized] || null;
};

/**
 * 기술 스택 목록에서 아이콘 데이터 배열 반환
 * @param {Array} techs - 기술 스택 배열
 * @returns {Array} 아이콘 데이터 배열
 */
export const getTechIcons = (techs: string[]) => {
  if (!techs || !Array.isArray(techs)) return [];
  
  return techs
    .map(tech => getTechIconData(tech))
    .filter(Boolean);
};



/**
 * 기술 배열을 문자열로 변환
 * @param {string|Array} techs - 기술 스택 (문자열 또는 배열)
 * @returns {Array} 기술명 배열
 */
export const parseTechArray = (techs: string | string[]) => {
  if (!techs) return [];
  
  if (Array.isArray(techs)) {
    return techs.map(tech => tech.trim()).filter(Boolean);
  }
  
  if (typeof techs === 'string') {
    return techs
      .split(/[,;]/) // 쉼표 또는 세미콜론으로 분리
      .map(tech => tech.trim())
      .filter(Boolean);
  }
  
  return [];
};

/**
 * 기술 스택 텍스트를 아이콘과 함께 표시할 수 있는 형태로 변환
 * @param {string|Array} techs - 기술 스택
 * @returns {Array} { name, icon, color, bgColor, borderColor } 객체 배열
 */
export const formatTechStack = (techs: string | string[]) => {
  const techArray = parseTechArray(techs);
  
  return techArray.map(techName => {
    const iconInfo = getTechIconData(techName);
    return {
      name: techName,
      normalizedName: normalizeTechName(techName),
      hasIcon: !!iconInfo && !!iconInfo.icon, // icon이 null이 아닌 경우에만 true
      ...(iconInfo || {})
    };
  });
};

/**
 * 주요 기술 스택(상위 3개)만 반환하고 나머지는 +N 처리
 * @param {Array} techs - 기술 스택 배열
 * @param {number} limit - 표시할 개수 (기본값 3)
 * @returns {Object} { visibleTechs, remainingCount }
 */
export const getTeckStackSummary = (techs: string[], limit = 3) => {
  const parsed = parseTechArray(techs);
  if (parsed.length <= limit) {
    return { visibleTechs: parsed, remainingCount: 0 };
  }
  return { 
    visibleTechs: parsed.slice(0, limit), 
    remainingCount: parsed.length - limit 
  };
};

export default {
  TECH_ICON_MAP,
  normalizeTechName,
  getTechIcon: getTechIconData,
  parseTechArray,
  formatTechStack,
  getTeckStackSummary
};