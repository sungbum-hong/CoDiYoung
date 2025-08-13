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
    return `rounded-[15px] bg-white border-[2px] ${
    error ? 'border-red-500' : 'border-[#722EFF]'
    } focus:ring-2 focus:ring-purple-500 focus:border-[#722EFF]`;
    }
    // 기본(언더라인형)
    return `border-0 border-b-2 bg-transparent ${
      error ? "border-red-500" : "border-gray-300"
    } focus:border-[#722EFF] placeholder-gray-500`;
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
          getVariantStyles(),
          disabled ? "text-gray-500" : "",
          className,                          // ← 필요 시 추가 오버라이드
        ].join(" ")}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}
