// 브랜드 색상 상수
export const COLORS = {
  // 주요 브랜드 색상
  PRIMARY: '#722EFF',        // 메인 퍼플 (버튼, 강조색)
  SECONDARY: '#193794',      // 서브 블루 (테두리, 보조색)
  ACCENT: '#15267E',         // 액센트 색상 (텍스트)
  BORDER: '#1a237e',         // 테두리 색상
  
  // 기타 색상
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  
  // 상태 색상
  ERROR: '#EF4444',
  SUCCESS: '#10B981',
  WARNING: '#F59E0B',
  
  // 회색 계열
  GRAY_50: '#F9FAFB',
  GRAY_100: '#F3F4F6',
  GRAY_200: '#E5E7EB',
  GRAY_300: '#D1D5DB',
  GRAY_400: '#9CA3AF',
  GRAY_500: '#6B7280',
  GRAY_600: '#4B5563',
  GRAY_700: '#374151',
  GRAY_800: '#1F2937',
  GRAY_900: '#111827',
  
  // 파스텔/기타 색상
  BLUE_600: '#2563EB',
  BLUE_800: '#1E3A8A',
  BLUE_900: '#1E40AF',
  RED_600: '#DC2626',
  
  // 테이블 및 에디터용 색상  
  TABLE_BORDER: '#CCC',
  TABLE_HEADER_BG: '#F2F2F2',
  EDITOR_BORDER: '#DDD',
  
  // 특수 색상
  CUSTOM_GRAY: '#6E6E6E',
}

// 자주 사용되는 색상 조합
export const COLOR_VARIANTS = {
  button: {
    primary: {
      background: COLORS.PRIMARY,
      text: COLORS.WHITE,
      hover: `${COLORS.PRIMARY}CC`, // opacity 80%
      focus: `${COLORS.PRIMARY}4D`, // opacity 30%
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
}