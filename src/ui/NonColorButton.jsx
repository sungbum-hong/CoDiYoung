export default function NonColorButton({
  children,
  onClick,
  type = "button",
  className = "",
  style = {},
  disabled = false,
}) {
  return (
    <button
      type={type} // 여기에 type 설정
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        bg-white border-2 border-[#722EFF] text-[#193794] rounded-[15px]
        transition-colors duration-200
        disabled:opacity-50 disabled:cursor-not-allowed
        px-5 py-3 w-55
        ${className}  // 외부에서 전달한 스타일 오버라이드 가능
      `}
      style={style}
    >
      {children}
    </button>
  );
}
