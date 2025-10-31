import { COLORS } from "../../../constants/colors.js"

export const useToolbarStyle = () => {
  const buttonHoverHandlers = {
    onMouseEnter: (e) => e.target.style.backgroundColor = COLORS.GRAY_200,
    onMouseLeave: (e) => e.target.style.backgroundColor = 'transparent'
  };

  const getButtonClass = (isActive) => {
    return `p-2 rounded transition-colors ${isActive ? 'bg-gray-300' : ''}`;
  };

  const getTableButtonStyle = (isActive) => ({
    backgroundColor: isActive ? '#fecaca' : 'transparent'
  });

  return {
    buttonHoverHandlers,
    getButtonClass,
    getTableButtonStyle
  };
};