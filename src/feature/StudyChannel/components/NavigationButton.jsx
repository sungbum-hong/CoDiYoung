import { COLORS } from "../../../constants/colors.js";

export default function NavigationButton({ 
  direction, 
  onClick, 
  style = {}, 
  buttonSize = 40,
  children 
}) {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
    e.currentTarget.style.color = "#fff";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "#fff";
    e.currentTarget.style.color = COLORS.PRIMARY;
  };

  return (
    <button
      type="button"
      aria-label={direction === 'prev' ? '이전' : '다음'}
      onClick={onClick}
      className="fixed -translate-y-1/2 grid place-items-center rounded-full border shadow
                 bg-white transition focus:outline-none"
      style={{
        width: buttonSize,
        height: buttonSize,
        borderColor: COLORS.PRIMARY,
        color: COLORS.PRIMARY,
        zIndex: 2147483647,
        ...style
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
}