export default function ColorButton({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-[#722EFF] text-white rounded-[5px] px-5 py-2.5 
                  hover:brightness-90 transition-all duration-200 shadow-sm
                  focus:outline-none focus:ring-4 focus:ring-[#722EFF]/30
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${className}`}
    >
      {children}
    </button>
  );
}
