import { COLORS } from '../../../constants/colors';

interface CategoryCardProps {
  label: string;
  index: number;
  avatarSrc?: string;
  isLoading?: boolean;
  onCategoryClick: (label: string, userId: string) => void;
  userId: string;
  userImage?: string;
  category: string;
  nickname?: string;
  description?: string;
}

export default function CategoryCard({ 
  label, 
  index, 
  avatarSrc, 
  isLoading, 
  onCategoryClick,
  userId,
  userImage,
  category,
  nickname,
  description
}: CategoryCardProps) {
  // 카테고리별 텍스트 색상 매핑 (이미지 참고)
  const getCategoryColor = (cat: string) => {
    switch(cat) {
      case '코딩': return '#FF4081'; // 핑크 (이미지와 유사)
      case '디자인': return '#FBC02D'; // 옐로우/머스타드 (이미지와 유사)
      case '영상편집': return '#7C4DFF'; // 보라 (이미지와 유사)
      default: return COLORS.GRAY_600;
    }
  };

  const categoryColor = getCategoryColor(label);

  return (
    <div
      key={index}
      className="group relative flex flex-col bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 h-full w-full"
    >
      {/* 1. Avatar Section (Top Left) */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 border border-gray-100">
          {isLoading ? (
            <div className="w-full h-full animate-pulse bg-gray-200" />
          ) : avatarSrc ? (
            <img 
              src={avatarSrc} 
              alt={`${nickname || userId} avatar`}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                if ((e.target as HTMLElement).nextSibling) {
                  ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = 'flex';
                }
              }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-300">
              <span className="text-2xl">👤</span>
            </div>
          )}
          {/* Fallback for image error */}
          <div 
            className="hidden w-full h-full items-center justify-center bg-gray-100 text-gray-300"
          >
            <span className="text-2xl">👤</span>
          </div>
        </div>
      </div>

      {/* 2. Category Label */}
      <div 
        className="text-sm font-bold mb-1"
        style={{ color: categoryColor }}
      >
        {label}
      </div>

      {/* 3. Nickname (Title) */}
      <h3 className="font-bold text-lg text-gray-900 mb-3 truncate">
        {nickname || userId || `User ${index + 1}`}
      </h3>

      {/* 4. Description */}
      <p className="text-gray-500 text-xs leading-relaxed mb-8 line-clamp-3 flex-grow h-[4.5em]">
        {description || "함께 성장하는 스터디원을 모집합니다! 열정 있는 분들과 함께하고 싶습니다."}
      </p>

      {/* 5. Profile Button (Bottom) */}
      <button
        onClick={() => onCategoryClick(label, userId)}
        className="w-full py-2 rounded-full border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        프로필보기
      </button>
    </div>
  );
}