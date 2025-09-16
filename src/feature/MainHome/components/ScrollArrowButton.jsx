import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { COLORS } from '../../../utils/colors.js';
import { useBackgroundHover } from '../../../hooks/useHoverStyle.js';

export default function ScrollArrowButton({ 
  side, 
  totalPages, 
  onScroll, 
  disabled 
}) {
  const isLeft = side === "left";
  const isDisabled = disabled || totalPages <= 1;
  
  const arrowButtonHover = useBackgroundHover(COLORS.WHITE, COLORS.GRAY_100);

  return (
    <button
      type="button"
      onClick={() => !isDisabled && onScroll(isLeft ? "left" : "right")}
      className={`absolute ${isLeft ? "left-0" : "right-0"} top-1/2 -translate-y-1/2 
                  p-2 rounded-full z-10 shadow-md transition
                  focus:outline-none focus:ring-2 focus:ring-offset-2`}
      style={{
        backgroundColor: COLORS.WHITE,
        opacity: isDisabled ? 0.4 : 1,
      }}
      {...(!isDisabled && arrowButtonHover)}
      aria-label={isLeft ? "이전 프로젝트 보기" : "다음 프로젝트 보기"}
      disabled={isDisabled}
    >
      {isLeft ? (
        <ChevronLeftIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
      ) : (
        <ChevronRightIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
      )}
    </button>
  );
}