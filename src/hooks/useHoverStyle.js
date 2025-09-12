import { useCallback } from 'react';

/**
 * 호버 효과 커스텀 훅
 * @param {Object} normalStyle - 기본 스타일
 * @param {Object} hoverStyle - 호버 시 스타일
 * @returns {Object} { onMouseEnter, onMouseLeave }
 */
export const useHoverStyle = (normalStyle = {}, hoverStyle = {}) => {
  const onMouseEnter = useCallback((e) => {
    Object.entries(hoverStyle).forEach(([key, value]) => {
      e.currentTarget.style[key] = value;
    });
  }, [hoverStyle]);

  const onMouseLeave = useCallback((e) => {
    Object.entries(normalStyle).forEach(([key, value]) => {
      e.currentTarget.style[key] = value;
    });
  }, [normalStyle]);

  return { onMouseEnter, onMouseLeave };
};

/**
 * 프라이머리 버튼 호버 효과 (자주 사용되는 패턴)
 * @param {string} primaryColor - 프라이머리 색상
 * @returns {Object} { onMouseEnter, onMouseLeave }
 */
export const usePrimaryButtonHover = (primaryColor) => {
  return useHoverStyle(
    {
      backgroundColor: 'transparent',
      color: primaryColor
    },
    {
      backgroundColor: primaryColor,
      color: 'white'
    }
  );
};

/**
 * 배경색 변경 호버 효과
 * @param {string} normalBg - 기본 배경색
 * @param {string} hoverBg - 호버 시 배경색
 * @returns {Object} { onMouseEnter, onMouseLeave }
 */
export const useBackgroundHover = (normalBg, hoverBg) => {
  return useHoverStyle(
    { backgroundColor: normalBg },
    { backgroundColor: hoverBg }
  );
};