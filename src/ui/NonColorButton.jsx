import React from "react";

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
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-white border-2 border-[#193794] text-[#193794] rounded-[5px]
                  transition-colors duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed
                  ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
