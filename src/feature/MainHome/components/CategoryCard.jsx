import { COLORS } from '../../../constants/colors.js';

export default function CategoryCard({ 
  label, 
  index, 
  avatarSrc, 
  isLoading, 
  onCategoryClick,
  userId,
  userImage,
  category
}) {
  return (
    <button
      key={index}
      onClick={() => onCategoryClick(label, userId)}
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
          onError={(e) => {
            // 이미지 로드 실패 시 기본 아바타 표시
            e.target.style.display = 'none';
            if (e.target.nextSibling) {
              e.target.nextSibling.style.display = 'flex';
            }
          }}
        />
      ) : null}
      <div 
        className="w-full h-full flex items-center justify-center text-xs text-gray-400"
        style={{ display: avatarSrc ? 'none' : 'flex' }}
      >
        {isLoading ? (
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        ) : (
          <div className="text-center">
            <div className="text-2xl mb-1">👤</div>
            <div className="text-xs">No Image</div>
          </div>
        )}
      </div>
    </button>
  );
}