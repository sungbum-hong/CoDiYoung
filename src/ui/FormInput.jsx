import { COLORS } from '../constants/colors.js';
import { CONFIG } from '../constants/config.js';

// src/ui/FormInput.jsx
export default function FormInput({
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  className = "",
  variant = "default",
  size = "md",            // ← 추가: sm | md | lg | xl
}) {
  // 크기 프리셋
  const sizeStyles = {
    sm: "h-10 text-sm px-3",
    md: "h-12 text-base px-4",
    lg: "h-14 text-lg px-5",
    xl: "h-16 text-xl px-6",
  };

  // 공통 베이스 (세로패딩은 size 프리셋으로 통일하므로 p-* 제거)
  const baseStyles = "w-full focus:outline-none transition-colors";

  const getVariantStyles = () => {
    if (variant === 'signin') {
      return {
        className: "bg-white border-[2px] focus:ring-2 focus:ring-purple-500",
        style: {
          borderRadius: `${CONFIG.BORDER_RADIUS.MEDIUM}px`,
          borderColor: error ? COLORS.ERROR : COLORS.PRIMARY,
          focusBorderColor: COLORS.PRIMARY,
        }
      };
    }
    // 기본(언더라인형)
    return {
      className: `border-0 border-b-2 bg-transparent placeholder-gray-500`,
      style: {
        borderBottomColor: error ? COLORS.ERROR : COLORS.GRAY_300,
        focusBorderBottomColor: COLORS.PRIMARY,
      }
    };
  };

  const variantConfig = getVariantStyles();

  const inputStyle = {
    ...variantConfig.style,
  };

  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={[
          baseStyles,
          sizeStyles[size] || sizeStyles.md, // ← 크기 적용
          variantConfig.className,
          disabled ? "text-gray-500" : "",
          className,                          // ← 필요 시 추가 오버라이드
        ].join(" ")}
        style={inputStyle}
        onFocus={(e) => {
          if (variant === 'signin') {
            e.target.style.borderColor = COLORS.PRIMARY;
          } else {
            e.target.style.borderBottomColor = COLORS.PRIMARY;
          }
        }}
        onBlur={(e) => {
          if (variant === 'signin') {
            e.target.style.borderColor = error ? COLORS.ERROR : COLORS.PRIMARY;
          } else {
            e.target.style.borderBottomColor = error ? COLORS.ERROR : COLORS.GRAY_300;
          }
        }}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}