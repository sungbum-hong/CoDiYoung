import React, { memo, type ReactNode, type ButtonHTMLAttributes } from 'react';

// 1. 타입을 미리 정의해두면 자동완성 됨!
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline'; // 오타 방지 굿
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean; // 있으면 좋음
}

const Button = memo(({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
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

  // 2. 타입스크립트가 여기서 `variant`가 잘못된 문자열이면 빨간 줄 띄워줌
  const variantStyle = variants[variant] || variants.primary;
  const sizeStyle = sizes[size] || sizes.md;

  const finalClassName = `
    ${baseStyle} 
    ${variantStyle} 
    ${sizeStyle} 
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''} 
    ${className}
  `.trim().replace(/\s+/g, ' '); // 공백 정리

  return (
    <button
      type={type}
      disabled={disabled}
      className={finalClassName}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
