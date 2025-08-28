import { COLOR_VARIANTS, COLORS } from '../utils/colors.js';
import { CONFIG } from '../constants/config.js';

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary", // 'primary' | 'secondary' | 'outline'
  size = "md", // 'sm' | 'md' | 'lg'
  className = "",
  style = {},
  disabled = false,
  ...props
}) {
  // 버튼 variant별 스타일을 style 객체로 정의
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: COLOR_VARIANTS.button.primary.background,
          color: COLOR_VARIANTS.button.primary.text,
          borderColor: 'transparent',
        };
      case 'secondary':
        return {
          backgroundColor: COLOR_VARIANTS.button.secondary.background,
          color: COLOR_VARIANTS.button.secondary.text,
          borderWidth: '2px',
          borderColor: COLOR_VARIANTS.button.secondary.border,
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: COLORS.SECONDARY,
          borderWidth: '2px', 
          borderColor: COLORS.PRIMARY,
        };
      default:
        return {};
    }
  };

  // 버튼 크기별 스타일
  const sizeConfig = CONFIG.BUTTON_SIZES[size];
  const getSizeStyle = () => ({
    padding: sizeConfig.padding,
    fontSize: sizeConfig.fontSize,
    height: sizeConfig.height,
  });

  const buttonStyle = {
    ...getVariantStyle(),
    ...getSizeStyle(),
    borderRadius: `${CONFIG.BORDER_RADIUS.MEDIUM}px`,
    transitionDuration: `${CONFIG.ANIMATION.TRANSITION_DURATION}ms`,
    ...style, // 사용자 정의 스타일을 마지막에 적용
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        font-medium
        transition-all shadow-sm
        focus:outline-none
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:brightness-90
        ${className}
      `}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
}