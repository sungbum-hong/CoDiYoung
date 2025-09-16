import { COLORS } from "../../../utils/colors.js";

export function useHoverStyle() {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
    e.currentTarget.style.color = "#fff";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.color = COLORS.PRIMARY;
  };

  return {
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
}