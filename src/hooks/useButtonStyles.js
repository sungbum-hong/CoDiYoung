import { useMemo, useCallback } from 'react';
import { COLOR_VARIANTS, COLORS } from '../utils/colors.js';
import { CONFIG } from '../constants/config.js';

export const useButtonStyles = (variant, size, style = {}) => {
  // Variant별 스타일을 메모이제이션
  const variantStyle = useMemo(() => {
    const styles = {
      primary: {
        backgroundColor: COLOR_VARIANTS.button.primary.background,
        color: COLOR_VARIANTS.button.primary.text,
        borderColor: 'transparent',
      },
      secondary: {
        backgroundColor: 'transparent',
        color: COLORS.SECONDARY,
        borderWidth: '2px',
        borderColor: COLORS.PRIMARY,
      },
      outline: {
        backgroundColor: COLOR_VARIANTS.button.secondary.background,
        color: COLOR_VARIANTS.button.secondary.text,
        borderWidth: '2px',
        borderColor: COLOR_VARIANTS.button.secondary.border,
      }
    };
    return styles[variant] || {};
  }, [variant]);

  // Size별 스타일을 메모이제이션
  const sizeStyle = useMemo(() => {
    const sizeConfig = CONFIG.BUTTON_SIZES[size];
    return {
      padding: sizeConfig.padding,
      fontSize: sizeConfig.fontSize,
      height: sizeConfig.height,
    };
  }, [size]);

  // 최종 버튼 스타일
  const buttonStyle = useMemo(() => ({
    ...variantStyle,
    ...sizeStyle,
    borderRadius: `${CONFIG.BORDER_RADIUS.MEDIUM}px`,
    transitionDuration: `${CONFIG.ANIMATION.TRANSITION_DURATION}ms`,
    ...style, // 사용자 정의 스타일을 마지막에 적용
  }), [variantStyle, sizeStyle, style]);

  // CSS 클래스명 생성
  const buttonClassName = useMemo(() => {
    const baseClasses = [
      'inline-flex',
      'items-center', 
      'justify-center',
      'font-medium',
      'transition-all',
      'shadow-sm',
      'focus:outline-none',
      'disabled:opacity-50',
      'disabled:cursor-not-allowed'
    ];

    // variant별 추가 클래스
    const variantClasses = {
      primary: ['hover:brightness-90'],
      secondary: ['hover:bg-[var(--color-primary)]', 'hover:text-white'],
      outline: ['hover:bg-opacity-10']
    };

    return [
      ...baseClasses,
      ...(variantClasses[variant] || [])
    ].join(' ');
  }, [variant]);

  return {
    buttonStyle,
    buttonClassName
  };
};