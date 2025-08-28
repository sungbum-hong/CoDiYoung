// 설정값 및 매직넘버 상수
import { COLORS } from '../utils/colors.js';

export const CONFIG = {
  // 검증 설정
  VALIDATION: {
    PASSWORD_MIN_LENGTH: 8,
    EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    PASSWORD_PATTERNS: {
      LOWERCASE: /(?=.*[a-z])/,
      UPPERCASE: /(?=.*[A-Z])/,
      NUMBER: /(?=.*\d)/,
      SPECIAL: /(?=.*[!@#$%^&*])/,
    },
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
        <table class="editor-table">
          <tr>
            <th>헤더 1</th>
            <th>헤더 2</th>
            <th>헤더 3</th>
          </tr>
          <tr>
            <td>데이터 1</td>
            <td>데이터 2</td>
            <td>데이터 3</td>
          </tr>
          <tr>
            <td>데이터 4</td>
            <td>데이터 5</td>
            <td>데이터 6</td>
          </tr>
        </table>
      `
    }
  },

  // 레이아웃 설정
  LAYOUT: {
    HEADER_HEIGHT: 64, // 4rem
    HEADER_TOTAL_HEIGHT: 96, // Header 실제 높이: h-16(64) + pt-3(12) + mb-5(20)
    MAX_CONTENT_WIDTH: 1240,
    AUTH_MAX_WIDTH: 1120,
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

  // 버튼 크기 설정 (sizes.js에서 이동)
  BUTTON_SIZES: {
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
  },

  // API 엔드포인트 설정
  API: {
    AUTH: {
      LOGIN: '/api/auth/login',
      LOGOUT: '/api/auth/logout',
      PROFILE: '/api/auth/profile',
    },
  },

  // Z-Index 설정
  Z_INDEX: {
    MODAL_BACKDROP: 1100,
    MODAL_CONTENT: 1101,
    MODAL_TITLE: 1200,
  },

  // Input 크기 설정
  INPUT_SIZES: {
    sm: "h-10 text-sm px-3",
    md: "h-12 text-base px-4",
    lg: "h-14 text-lg px-5",
    xl: "h-16 text-xl px-6",
  },

  // 모달 크기 설정
  MODAL_SIZES: {
    DEFAULT: {
      width: 1316,
      height: 939,
      ratio: 939 / 1316,
    },
    PROJECT_DETAIL: {
      width: 704,
      height: 574,
      ratio: 574 / 704,
      startX: 416,
      startY: 1520,
      buttonWidth: 240,
      buttonHeight: 108,
    },
    SMALL: {
      width: 400,
      height: 300,
    },
  },

  // 아바타 크기 설정
  AVATAR_SIZES: {
    sm: 'w-10 h-10',
    md: 'w-12 h-12', 
    lg: 'w-56 h-56',
  },

  // 스터디 카테고리 설정
  STUDY_CATEGORIES: {
    coding: "코딩",
    design: "디자인", 
    video: "영상"
  },

  // 테스트 사용자 데이터
  TEST_USER: {
    name: "김지호",
    email: "test@example.com",
    avatar: null
  },

}