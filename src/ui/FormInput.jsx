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
}) {
  const baseStyles = "w-full p-2 md:p-3 focus:outline-none transition-colors";
  
  const getVariantStyles = () => {
    if (variant === 'signin') {
      return `rounded-[20px] bg-white border-[3px] ${
        error ? 'border-red-500' : 'border-[#193794]'
      } focus:ring-2 focus:ring-purple-500 focus:border-[#193794]`;
    }
    
    return `border-0 border-b-2 bg-transparent ${
      error ? 'border-red-500' : 'border-gray-300'
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
        className={`
          ${baseStyles}
          ${getVariantStyles()}
          ${disabled ? 'text-gray-500' : ''}
          ${className}
        `}
      />
      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}