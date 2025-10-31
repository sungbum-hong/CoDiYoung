import { useCallback } from 'react';
import { COLORS } from '../constants/colors.js';

export const useButtonEvents = (variant, disabled, userEvents = {}) => {
  const handleMouseEnter = useCallback((e) => {
    // secondary 버튼의 특별한 hover 효과 (CSS로 대체 권장)
    if (variant === 'secondary' && !disabled) {
      e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
      e.currentTarget.style.color = COLORS.WHITE;
    }
    
    // 사용자 정의 이벤트 호출
    userEvents.onMouseEnter?.(e);
  }, [variant, disabled, userEvents.onMouseEnter]);

  const handleMouseLeave = useCallback((e) => {
    if (variant === 'secondary' && !disabled) {
      e.currentTarget.style.backgroundColor = 'transparent';
      e.currentTarget.style.color = COLORS.SECONDARY;
    }
    
    // 사용자 정의 이벤트 호출
    userEvents.onMouseLeave?.(e);
  }, [variant, disabled, userEvents.onMouseLeave]);

  const handleClick = useCallback((e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    userEvents.onClick?.(e);
  }, [disabled, userEvents.onClick]);

  return {
    handleMouseEnter,
    handleMouseLeave,
    handleClick
  };
};