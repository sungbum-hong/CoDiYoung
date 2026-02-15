import React, { memo } from 'react';

const Button = memo(({
  children,
  onClick,
  type = "button",
  variant = "primary", // 'primary' | 'secondary' | 'outline'
  size = "md", // 'sm' | 'md' | 'lg'
  className = "",
  style = {},
  disabled = false,
  ...props
}) => {
  // Simple style mapping since hooks are removed
  const baseStyle = "rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-purple-600 text-white hover:bg-purple-700 focus:ring-purple-500",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-purple-500"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base"
  };

  const finalClassName = `${baseStyle} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={finalClassName}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;