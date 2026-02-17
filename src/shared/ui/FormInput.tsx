import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { COLORS } from '../../constants/colors';
import { CONFIG } from '../../constants/config';

// 1. Props 정의
interface FormInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  type?: string;
  variant?: 'default' | 'signin'; // "outline" 같은 거 추가 가능
  size?: 'sm' | 'md' | 'lg' | 'xl';
  error?: string | boolean; // 에러 메시지 또는 boolean
  className?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = "",
  variant = "default",
  size = "md",
  ...props
}, ref) => {
  
  // 타입 가드: CONFIG에 사이즈가 있는지 확인
  const sizeStyles = CONFIG.INPUT_SIZES || { md: "p-2" };
  const currentSize = sizeStyles[size] || sizeStyles.md;

  const baseStyles = "w-full focus:outline-none transition-colors";

  // 스타일 계산 로직
  const getVariantStyles = () => {
    if (variant === 'signin') {
      return {
        className: "bg-white border-[2px] focus:ring-2 rounded-md",
        style: {
          borderColor: error ? COLORS.ERROR : COLORS.PRIMARY,
        }
      };
    }
    // 기본(언더라인형)
    return {
      className: `border-0 border-b-2 bg-transparent`,
      style: {
        borderBottomColor: error ? COLORS.ERROR : COLORS.GRAY_300,
      }
    };
  };

  const variantConfig = getVariantStyles();

  // 인라인 스타일과 클래스 분리
  const finalClassName = `
    ${baseStyles} 
    ${currentSize} 
    ${variantConfig.className} 
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="flex flex-col w-full">
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={finalClassName}
        style={{
          ...variantConfig.style,
          color: disabled ? COLORS.GRAY_500 : 'inherit'
        }}
        onFocus={(e) => {
          if (variant === 'signin') {
            e.currentTarget.style.borderColor = COLORS.PRIMARY;
          } else {
            e.currentTarget.style.borderBottomColor = COLORS.PRIMARY;
          }
        }}
        onBlur={(e) => {
          if (variant === 'signin') {
            e.currentTarget.style.borderColor = error ? String(COLORS.ERROR) : String(COLORS.PRIMARY);
          } else {
            e.currentTarget.style.borderBottomColor = error ? String(COLORS.ERROR) : String(COLORS.GRAY_300);
          }
        }}
        {...props}
      />
      {/* 에러 메시지가 문자열일 때만 출력 */}
      {typeof error === 'string' && error && (
        <p className="text-xs mt-1" style={{ color: COLORS.ERROR }}>{error}</p>
      )}
    </div>
  );
});

FormInput.displayName = 'FormInput';

export default FormInput;
