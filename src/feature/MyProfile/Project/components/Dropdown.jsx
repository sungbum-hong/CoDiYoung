import { useState } from "react";
import { COLORS } from "../../../../utils/colors.js";

export default function Dropdown({ options, value, onChange, placeholder, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-2 rounded-md p-2 text-center bg-white flex items-center justify-between"
        style={{ borderColor: COLORS.PRIMARY, color: selectedOption ? 'black' : COLORS.GRAY_400 }}
      >
        <span className="flex-1">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="ml-2" style={{ color: COLORS.PRIMARY }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute z-10 w-full mt-1 bg-white border-2 rounded-md shadow-lg max-h-48 overflow-y-auto"
          style={{ borderColor: COLORS.PRIMARY }}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors duration-150"
              style={{ 
                backgroundColor: value === option.value ? COLORS.PRIMARY : 'transparent',
                color: value === option.value ? 'white' : 'black'
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}