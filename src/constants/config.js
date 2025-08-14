// 설정값 및 매직넘버 상수
import { COLORS } from './colors.js';

export const CONFIG = {
  // 환경값
  ENV: {
    MODE: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.MODE) || 'development',
    API_BASE_URL: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_BASE_URL) || 'http://localhost:3000',
    FEATURE_FLAGS: {
      USE_MOCK_DATA: (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_USE_MOCK_DATA) === 'true',
    }
  },
  // 검증 설정
  VALIDATION: {
    PASSWORD_MIN_LENGTH: 8,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },

  // 출석 체크 설정
  ATTENDANCE: {
    TOTAL_DAYS: 42,
    DEFAULT_ATTENDED: 2,
    GRID_ROWS: 3,
    GRID_COLUMNS: 14,
    TOTAL_COUNT: 30, // 월 기준
  },

  // 에디터 설정
  EDITOR: {
    MIN_HEIGHT: 300,
    DEFAULT_PADDING: 16,
    LINE_HEIGHT: 1.6,
    HELP_TIMEOUT: 3000,
    VIDEO: {
      DEFAULT_WIDTH: "560",
      DEFAULT_HEIGHT: "315"
    },
    TABLE: {
      DEFAULT_ROWS: 3,
      DEFAULT_COLS: 3,
      DEFAULT_HTML: `
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <th style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">헤더 1</th>
            <th style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">헤더 2</th>
            <th style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">헤더 3</th>
          </tr>
          <tr>
            <td style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">데이터 1</td>
            <td style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">데이터 2</td>
            <td style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">데이터 3</td>
          </tr>
          <tr>
            <td style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">데이터 4</td>
            <td style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">데이터 5</td>
            <td style="border: 1px solid ${COLORS.TABLE_BORDER}; padding: 8px;">데이터 6</td>
          </tr>
        </table>
      `
    }
  },

  // 레이아웃 설정
  LAYOUT: {
    HEADER_HEIGHT: 64, // 4rem
    MAX_CONTENT_WIDTH: 1240,
    CONTAINER_PADDING: {
      MOBILE: 16, // 1rem
      TABLET: 24, // 1.5rem  
      DESKTOP: 48, // 3rem
    },
    GRID: {
      STUDY_COLUMNS: 12,
      PROJECT_COLUMNS: 5,
      PARTNER_GAP: 128, // gap-32 = 8rem = 128px
    }
  },

  // 카드/아이템 설정
  CARD: {
    PROJECT: {
      WIDTH: 192,
      GAP: 20,
      HEIGHT: 256,
    },
    STUDY: {
      DEFAULT_COUNT: 9,
      GRID_COLUMNS: 3,
    },
    PARTNER: {
      WIDTH: 108, // w-27 = 6.75rem
      HEIGHT: 60,  // h-15 = 3.75rem
      GAP: 32,
    }
  },

  // 애니메이션 설정
  ANIMATION: {
    TRANSITION_DURATION: 200,
    FADE_DURATION: 300,
    SLIDE_DURATION: 250,
    BOUNCE_DURATION: 500,
  },

  // 폼 설정
  FORM: {
    DEBOUNCE_DELAY: 300,
    AUTO_SAVE_INTERVAL: 30000, // 30초
  },

  // 기본 카운트/제한값
  DEFAULTS: {
    STUDY_COUNT: 1234,
    PROJECT_COUNT: 10,
    TEAM_MEMBERS_COUNT: 5,
    TECH_STACK_COUNT: 3,
    PARTNERS_COUNT: 5,
    PAGINATION_SIZE: 10,
    SEARCH_MIN_LENGTH: 2,
  },

  // Border Radius 설정
  BORDER_RADIUS: {
    SMALL: 5,
    MEDIUM: 15,
    LARGE: 20,
    EXTRA_LARGE: 25,
  },

  // Z-Index 설정 (레이어 관리)
  Z_INDEX: {
    DROPDOWN: 10,
    STICKY: 20,
    MODAL_BACKDROP: 40,
    MODAL: 50,
    TOOLTIP: 60,
    NOTIFICATION: 70,
    OVERLAY: 80,
    LOADING: 90,
  },

  // 브레이크포인트 (Tailwind 기준)
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    XXL: 1536,
  },

  // 미디어 쿼리
  MEDIA_QUERIES: {
    MOBILE: '@media (max-width: 767px)',
    TABLET: '@media (min-width: 768px) and (max-width: 1023px)', 
    DESKTOP: '@media (min-width: 1024px)',
  }
}