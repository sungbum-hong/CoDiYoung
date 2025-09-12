import { useNavigate } from "react-router-dom";
import { PencilIcon, CodeBracketIcon, PaintBrushIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { ROUTES } from "../../constants/routes";
import { COLORS } from "../../utils/colors";
import { CONFIG } from "../../constants/config";
import { useAvatarGeneration } from "../../hooks/useAvatarGeneration.js";

export default function StudyCategory({
  title = "스터디 채널",
  rows = [
    { label: "코딩", count: 5 },
    { label: "디자인", count: 5 },
    { label: "영상편집", count: 5 },
  ],
}) {
  const navigate = useNavigate();
  
  // 커스텀 훅을 사용한 아바타 생성
  const { getAvatar, isLoading } = useAvatarGeneration(rows, { size: 96 });

  const handleCategoryClick = (category) => {
    navigate(`${ROUTES.STUDY_CATEGORY.replace(":category", category)}`);
  };

  const handleWriteClick = () => {
    navigate(ROUTES.WRITE);
  };

  const getCategoryConfig = (label) => {
    switch (label) {
      case "코딩":
        return { 
          color: "#ef4444", // red-500
          icon: CodeBracketIcon 
        };
      case "디자인":
        return { 
          color: "#eab308", // yellow-500
          icon: PaintBrushIcon 
        };
      case "영상편집":
        return { 
          color: "#8b5cf6", // violet-500
          icon: VideoCameraIcon 
        };
      default:
        return { 
          color: COLORS.GRAY_500, 
          icon: PencilIcon 
        };
    }
  };

  return (
    <section className="space-y-6 mb-21">
      <div className="flex items-center justify-between mb-7">
        <h2 className="font-bold text-2xl">{title}</h2>
        <button
          onClick={handleWriteClick}
          className="p-2 rounded-full transition-colors"
          style={{ backgroundColor: "transparent" }}
          onMouseEnter={(e) =>
            (e.target.style.backgroundColor = COLORS.GRAY_100)
          }
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          <PencilIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
        </button>
      </div>

      {rows.map((r) => {
        const { color, icon: IconComponent } = getCategoryConfig(r.label);
        
        return (
          <div key={r.label} className="mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 border-2"
              style={{ 
                borderColor: color,
                backgroundColor: 'transparent'
              }}
            >
              <IconComponent 
                className="w-5 h-5"
                style={{ color: color }}
              />
              <p
                className="font-bold text-1.5xl"
                style={{ color: color }}
              >
                {r.label}
              </p>
            </div>
            <div
              className="flex gap-4 justify-between"
            >
            {Array.from({ length: r.count }).map((_, i) => {
              const avatarSrc = getAvatar(r.label, i);
              
              return (
                <button
                  key={i}
                  onClick={() => handleCategoryClick(r.label)}
                  className="w-24 h-24 rounded-full cursor-pointer focus:outline-none focus:ring-2 overflow-hidden border-2"
                  style={{
                    backgroundColor: COLORS.WHITE,
                    borderColor: COLORS.GRAY_300,
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow = `0 0 0 2px ${COLORS.BLUE_600}`)
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "none")}
                  aria-label={`${r.label} 스터디 채널 ${i + 1}번`}
                >
                  {avatarSrc ? (
                    <img 
                      src={avatarSrc} 
                      alt={`${r.label} 아바타 ${i + 1}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                      {isLoading ? 'Loading...' : 'Error'}
                    </div>
                  )}
                </button>
              );
            })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
