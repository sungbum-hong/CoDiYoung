// 설정값 및 매직넘버 상수
import { COLORS } from '../utils/colors.js';

export const CONFIG = {
  // 검증 설정
  VALIDATION: {
    PASSWORD_MIN_LENGTH: 8,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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

}