import { COLORS } from '../../../utils/colors.js';

export default function CategoryCard({ 
  label, 
  index, 
  avatarSrc, 
  isLoading, 
  onCategoryClick 
}) {
  return (
    <button
      key={index}
      onClick={() => onCategoryClick(label)}
      className="w-24 h-24 rounded-full cursor-pointer focus:outline-none focus:ring-2 overflow-hidden border-2"
      style={{
        backgroundColor: COLORS.WHITE,
        borderColor: COLORS.GRAY_300,
      }}
      onFocus={(e) =>
        (e.target.style.boxShadow = `0 0 0 2px ${COLORS.BLUE_600}`)
      }
      onBlur={(e) => (e.target.style.boxShadow = "none")}
      aria-label={`${label} 스터디 채널 ${index + 1}번`}
    >
      {avatarSrc ? (
        <img 
          src={avatarSrc} 
          alt={`${label} 아바타 ${index + 1}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
          {isLoading ? 'Loading...' : 'Error'}
        </div>
      )}
    </button>
  );
}