/**
 * 기술 스택 아이콘 매핑 유틸리티
 * react-icons의 Simple Icons를 사용
 */

import {
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiPython,
  SiSpring,
  SiJavascript,
  SiTypescript,
  SiFlutter,
  SiFigma,
  SiOracle,
} from 'react-icons/si';

// 기술별 아이콘 매핑
export const TECH_ICON_MAP = {
  // Frontend Frameworks
  'react': { 
    icon: SiReact, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'React': { 
    icon: SiReact, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'vue.js': { 
    icon: SiVuedotjs, 
    color: 'text-green-500', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'vue': { 
    icon: SiVuedotjs, 
    color: 'text-green-500', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'Vue.js': { 
    icon: SiVuedotjs, 
    color: 'text-green-500', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'angular': { 
    icon: SiAngular, 
    color: 'text-red-600', 
    bgColor: 'bg-red-50', 
    borderColor: 'border-red-200' 
  },
  'Angular': { 
    icon: SiAngular, 
    color: 'text-red-600', 
    bgColor: 'bg-red-50', 
    borderColor: 'border-red-200' 
  },
  
  // Backend & Runtime
  'node.js': { 
    icon: SiNodedotjs, 
    color: 'text-green-600', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'nodejs': { 
    icon: SiNodedotjs, 
    color: 'text-green-600', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'Node.js': { 
    icon: SiNodedotjs, 
    color: 'text-green-600', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'python': { 
    icon: SiPython, 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'Python': { 
    icon: SiPython, 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'java': { 
    icon: SiOracle, 
    color: 'text-orange-600', 
    bgColor: 'bg-orange-50', 
    borderColor: 'border-orange-200' 
  },
  'Java': { 
    icon: SiOracle, 
    color: 'text-orange-600', 
    bgColor: 'bg-orange-50', 
    borderColor: 'border-orange-200' 
  },
  'spring': { 
    icon: SiSpring, 
    color: 'text-green-600', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'Spring Boot': { 
    icon: SiSpring, 
    color: 'text-green-600', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  'spring boot': { 
    icon: SiSpring, 
    color: 'text-green-600', 
    bgColor: 'bg-green-50', 
    borderColor: 'border-green-200' 
  },
  
  // Languages
  'javascript': { 
    icon: SiJavascript, 
    color: 'text-yellow-500', 
    bgColor: 'bg-yellow-50', 
    borderColor: 'border-yellow-200' 
  },
  'JavaScript': { 
    icon: SiJavascript, 
    color: 'text-yellow-500', 
    bgColor: 'bg-yellow-50', 
    borderColor: 'border-yellow-200' 
  },
  'typescript': { 
    icon: SiTypescript, 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'TypeScript': { 
    icon: SiTypescript, 
    color: 'text-blue-600', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  
  // Mobile
  'flutter': { 
    icon: SiFlutter, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'Flutter': { 
    icon: SiFlutter, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'react native': { 
    icon: SiReact, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'reactnative': { 
    icon: SiReact, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  'React Native': { 
    icon: SiReact, 
    color: 'text-blue-500', 
    bgColor: 'bg-blue-50', 
    borderColor: 'border-blue-200' 
  },
  
  // Design & Tools
  'figma': { 
    icon: SiFigma, 
    color: 'text-purple-600', 
    bgColor: 'bg-purple-50', 
    borderColor: 'border-purple-200' 
  },
  'Figma': { 
    icon: SiFigma, 
    color: 'text-purple-600', 
    bgColor: 'bg-purple-50', 
    borderColor: 'border-purple-200' 
  },
};

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