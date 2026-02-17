// CSS 변수를 사용하는 색상 유틸리티 함수
export const getCSSVar = (varName: string) => `var(--color-${varName})`;

// 자주 사용되는 색상들을 CSS 변수로 매핑
export const COLORS = {
  // === Semantic Colors (New System) ===

  // Text
  TEXT_PRIMARY: getCSSVar("text-primary"),
  TEXT_SECONDARY: getCSSVar("text-secondary"),
  TEXT_TERTIARY: getCSSVar("text-tertiary"),
  TEXT_DISABLED: getCSSVar("text-disabled"),
  TEXT_INFO: getCSSVar("text-info"),
  TEXT_DANGER: getCSSVar("text-danger"),
  TEXT_WARNING: getCSSVar("text-warning"),
  TEXT_SUCCESS: getCSSVar("text-success"),
  TEXT_INVERSE: getCSSVar("text-interactive-inverse"),

  // Text Interactive
  TEXT_INTERACTIVE_BRAND_PINK: getCSSVar("text-interactive-brand-pink"),
  TEXT_INTERACTIVE_BRAND_PINK_HOVERED: getCSSVar(
    "text-interactive-brand-pink-hovered",
  ),
  TEXT_INTERACTIVE_BRAND_PINK_PRESSED: getCSSVar(
    "text-interactive-brand-pink-pressed",
  ),

  TEXT_INTERACTIVE_BRAND_YELLOW: getCSSVar("text-interactive-brand-yellow"),
  TEXT_INTERACTIVE_BRAND_YELLOW_HOVERED: getCSSVar(
    "text-interactive-brand-yellow-hovered",
  ),
  TEXT_INTERACTIVE_BRAND_YELLOW_PRESSED: getCSSVar(
    "text-interactive-brand-yellow-pressed",
  ),

  TEXT_INTERACTIVE_BRAND_PURPLE: getCSSVar("text-interactive-brand-purple"),
  TEXT_INTERACTIVE_BRAND_PURPLE_HOVERED: getCSSVar(
    "text-interactive-brand-purple-hovered",
  ),
  TEXT_INTERACTIVE_BRAND_PURPLE_PRESSED: getCSSVar(
    "text-interactive-brand-purple-pressed",
  ),

  // Background
  BG_PRIMARY: getCSSVar("bg-primary"),
  BG_SECONDARY: getCSSVar("bg-secondary"),
  BG_DISABLED: getCSSVar("bg-disabled"),
  BG_INFO: getCSSVar("bg-info"),
  BG_INFO_SUBTLE: getCSSVar("bg-info-subtle"),
  BG_DANGER: getCSSVar("bg-danger"),
  BG_DANGER_SUBTLE: getCSSVar("bg-danger-subtle"),
  BG_WARNING: getCSSVar("bg-warning"),
  BG_WARNING_SUBTLE: getCSSVar("bg-warning-subtle"),
  BG_SUCCESS: getCSSVar("bg-success"),
  BG_SUCCESS_SUBTLE: getCSSVar("bg-success-subtle"),

  // Border
  BORDER_PRIMARY: getCSSVar("border-primary"),
  BORDER_SECONDARY: getCSSVar("border-secondary"),
  BORDER_TERTIARY: getCSSVar("border-tertiary"),
  BORDER_FOCUS: getCSSVar("border-focus-ring"),

  // === Legacy / Base Compatibility ===
  PRIMARY: getCSSVar("primary"), // Maps to Purple 500
  SECONDARY: getCSSVar("secondary"), // Maps to Blue 900
  ACCENT: getCSSVar("accent"),
  BORDER: getCSSVar("border-primary"), // Updated to generic border

  WHITE: getCSSVar("white"),
  BLACK: getCSSVar("black"),

  ERROR: getCSSVar("error"), // Maps to Red 500
  SUCCESS: getCSSVar("success"), // Maps to Green 500
  WARNING: getCSSVar("warning"), // Maps to Orange 500

  // Neutral (Replacing Grays)
  GRAY_50: getCSSVar("neutral-50"),
  GRAY_100: getCSSVar("neutral-100"),
  GRAY_200: getCSSVar("neutral-200"),
  GRAY_300: getCSSVar("neutral-300"),
  GRAY_400: getCSSVar("neutral-400"),
  GRAY_500: getCSSVar("neutral-500"),
  GRAY_600: getCSSVar("neutral-600"),
  GRAY_700: getCSSVar("neutral-700"),
  GRAY_800: getCSSVar("neutral-800"),
  GRAY_900: getCSSVar("neutral-900"),

  // Brand Colors
  PURPLE_500: getCSSVar("purple-500"),
  BLUE_600: getCSSVar("blue-600"),
  RED_600: getCSSVar("red-600"),

  // Component Specific
  TABLE_BORDER: getCSSVar("table-border"),
  TABLE_HEADER_BG: getCSSVar("table-header-bg"),
  EDITOR_BORDER: getCSSVar("editor-border"),
} as const; // 🔥 핵심: 모든 값을 '리터럴 타입'으로 고정

// 자주 사용되는 색상 조합
export const COLOR_VARIANTS = {
  button: {
    primary: {
      background: COLORS.PURPLE_500,
      text: COLORS.WHITE,
      hover: `color-mix(in srgb, ${COLORS.PURPLE_500} 90%, black)`,
      focus: `color-mix(in srgb, ${COLORS.PURPLE_500} 80%, black)`,
    },
    secondary: {
      background: COLORS.WHITE,
      text: COLORS.TEXT_PRIMARY,
      border: COLORS.BORDER_PRIMARY,
      hover: COLORS.BG_SECONDARY,
    },
  },
  input: {
    border: COLORS.BORDER_PRIMARY,
    focus: COLORS.BORDER_FOCUS,
    error: COLORS.TEXT_DANGER,
    background: COLORS.BG_PRIMARY,
  },
  modal: {
    border: COLORS.BORDER_SECONDARY,
    background: COLORS.BG_PRIMARY,
  },
} as const;

export type ColorsType = typeof COLORS;
export type ColorVariantsType = typeof COLOR_VARIANTS;
