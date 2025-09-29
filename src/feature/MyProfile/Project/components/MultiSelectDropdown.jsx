import { useState } from "react";
import { COLORS } from "../../../../utils/colors.js";

export default function MultiSelectDropdown({ options, value = [], onChange, placeholder, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabels = value.map(val => 
    options.find(option => option.value === val)?.label
  ).filter(Boolean);

  const toggleOption = (optionValue) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-2 rounded-md p-2 bg-white flex items-center justify-between min-h-[40px]"
        style={{ borderColor: COLORS.PRIMARY, color: selectedLabels.length > 0 ? 'black' : COLORS.GRAY_400 }}
      >
        <div className="flex-1 text-left">
          {selectedLabels.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {value.map((val) => {
                const option = options.find(opt => opt.value === val);
                return (
                  <span
                    key={val}
                    className="inline-flex items-center px-2 py-1 text-xs rounded cursor-pointer group"
                    style={{ backgroundColor: COLORS.PRIMARY, color: 'white' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOption(val);
                    }}
                  >
                    {option?.label}
                    <span className="ml-1 text-xs opacity-70 group-hover:opacity-100">×</span>
                  </span>
                );
              })}
            </div>
          ) : (
            <span className="text-center block">{placeholder}</span>
          )}
        </div>
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
              onClick={() => toggleOption(option.value)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors duration-150 flex items-center"
              style={{ 
                backgroundColor: value.includes(option.value) ? `${COLORS.PRIMARY}20` : 'transparent',
                color: 'black'
              }}
            >
              <span className="mr-2" style={{ color: COLORS.PRIMARY }}>
                {value.includes(option.value) ? '✓' : '○'}
              </span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}