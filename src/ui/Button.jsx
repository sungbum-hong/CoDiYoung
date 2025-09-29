import React, { memo } from 'react';
import { useButtonStyles } from '../hooks/useButtonStyles.js';
import { useButtonEvents } from '../hooks/useButtonEvents.js';

const Button = memo(({
  children,
  onClick,
  type = "button",
  variant = "primary", // 'primary' | 'secondary' | 'outline'
  size = "md", // 'sm' | 'md' | 'lg'
  className = "",
  style = {},
  disabled = false,
  onMouseEnter,
  onMouseLeave,
  ...props
}) => {
  const { buttonStyle, buttonClassName } = useButtonStyles(variant, size, style);
  const { handleMouseEnter, handleMouseLeave, handleClick } = useButtonEvents(
    variant, 
    disabled, 
    { onClick, onMouseEnter, onMouseLeave }
  );

  const finalClassName = `${buttonClassName} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={finalClassName}
      style={buttonStyle}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;