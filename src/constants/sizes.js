// 모달 크기 및 레이아웃 상수
export const MODAL_SIZES = {
  // 기본 모달 크기 (피그마 디자인 기준)
  DEFAULT: {
    width: 1316,
    height: 939,
    ratio: 939 / 1316, // height/width
  },
  
  // 프로젝트 상세 모달
  PROJECT_DETAIL: {
    width: 704,
    height: 574,
    ratio: 574 / 704,
    startX: 416,
    startY: 1520,
    buttonWidth: 240,
    buttonHeight: 108,
  },
  
  // 작은 모달 크기
  SMALL: {
    width: 400,
    height: 300,
  },
  
  // 반응형 브레이크포인트
  RESPONSIVE: {
    // Tailwind 기준
    sm: '640px',
    md: '768px', 
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
}

// 일반적인 spacing 값들
export const SPACING = {
  xs: '0.25rem',  // 4px
  sm: '0.5rem',   // 8px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
}

// 버튼 크기
export const BUTTON_SIZES = {
  sm: {
    padding: '0.5rem 1rem',
    fontSize: '0.875rem',
    height: '2rem',
  },
  md: {
    padding: '0.75rem 1.5rem', 
    fontSize: '1rem',
    height: '2.75rem',
  },
  lg: {
    padding: '1rem 2rem',
    fontSize: '1.125rem', 
    height: '3rem',
  },
}