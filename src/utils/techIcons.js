/**
 * 기술 스택 관련 유틸리티 함수들
 */

import { TECH_ICON_MAP } from '../constants/techIcons.js';

/**
 * 기술명 정규화 함수
 * @param {string} techName - 원본 기술명
 * @returns {string} 정규화된 기술명
 */
export const normalizeTechName = (techName) => {
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
export const getTechIcon = (techName) => {
  const normalizedName = normalizeTechName(techName);
  return TECH_ICON_MAP[normalizedName] || null;
};

/**
 * 기술 배열을 문자열로 변환
 * @param {string|Array} techs - 기술 스택 (문자열 또는 배열)
 * @returns {Array} 기술명 배열
 */
export const parseTechArray = (techs) => {
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
export const formatTechStack = (techs) => {
  const techArray = parseTechArray(techs);
  
  return techArray.map(techName => {
    const iconInfo = getTechIcon(techName);
    return {
      name: techName,
      normalizedName: normalizeTechName(techName),
      hasIcon: !!iconInfo && !!iconInfo.icon, // icon이 null이 아닌 경우에만 true
      ...(iconInfo || {})
    };
  });
};

export default {
  TECH_ICON_MAP,
  normalizeTechName,
  getTechIcon,
  parseTechArray,
  formatTechStack
};