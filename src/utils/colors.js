// CSS 변수를 사용하는 색상 유틸리티 함수
export const getCSSVar = (varName) => `var(--color-${varName})`;

// 자주 사용되는 색상들을 CSS 변수로 매핑
export const COLORS = {
  // 주요 브랜드 색상
  PRIMARY: getCSSVar('primary'),
  SECONDARY: getCSSVar('secondary'),
  ACCENT: getCSSVar('accent'),
  BORDER: getCSSVar('border'),
  
  // 기타 색상
  WHITE: getCSSVar('white'),
  BLACK: getCSSVar('black'),
  
  // 상태 색상
  ERROR: getCSSVar('error'),
  SUCCESS: getCSSVar('success'),
  WARNING: getCSSVar('warning'),
  
  // 회색 계열
  GRAY_50: getCSSVar('gray-50'),
  GRAY_100: getCSSVar('gray-100'),
  GRAY_200: getCSSVar('gray-200'),
  GRAY_300: getCSSVar('gray-300'),
  GRAY_400: getCSSVar('gray-400'),
  GRAY_500: getCSSVar('gray-500'),
  GRAY_600: getCSSVar('gray-600'),
  GRAY_700: getCSSVar('gray-700'),
  GRAY_800: getCSSVar('gray-800'),
  GRAY_900: getCSSVar('gray-900'),
  
  // 파스텔/기타 색상
  BLUE_600: getCSSVar('blue-600'),
  BLUE_800: getCSSVar('blue-800'),
  BLUE_900: getCSSVar('blue-900'),
  RED_600: getCSSVar('red-600'),
  
  // 테이블 및 에디터용 색상  
  TABLE_BORDER: getCSSVar('table-border'),
  TABLE_HEADER_BG: getCSSVar('table-header-bg'),
  EDITOR_BORDER: getCSSVar('editor-border'),
  
  // 특수 색상
  CUSTOM_GRAY: getCSSVar('custom-gray'),
};

// 자주 사용되는 색상 조합 (CSS 변수 버전)
export const COLOR_VARIANTS = {
  button: {
    primary: {
      background: COLORS.PRIMARY,
      text: COLORS.WHITE,
      hover: `color-mix(in srgb, ${COLORS.PRIMARY} 80%, transparent)`,
      focus: `color-mix(in srgb, ${COLORS.PRIMARY} 30%, transparent)`,
    },
    secondary: {
      background: COLORS.WHITE,
      text: COLORS.SECONDARY,
      border: COLORS.PRIMARY,
      hover: COLORS.PRIMARY,
      hoverText: COLORS.WHITE,
    }
  },
  input: {
    border: COLORS.PRIMARY,
    focus: COLORS.PRIMARY,
    error: COLORS.ERROR,
  },
  modal: {
    border: COLORS.SECONDARY,
    background: COLORS.WHITE,
  }
};