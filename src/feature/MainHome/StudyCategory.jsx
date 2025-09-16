import { PencilIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../utils/colors";
import { useAvatarGeneration } from "../../hooks/useAvatarGeneration.js";
import { useStudyNavigation } from "./hooks/useStudyNavigation.js";
import { useCategoryConfig } from "./hooks/useCategoryConfig.js";
import CategoryCard from "./components/CategoryCard.jsx";

export default function StudyCategory() {
  const title = "스터디 채널";
  const rows = [
    { label: "코딩", count: 5 },
    { label: "디자인", count: 5 },
    { label: "영상편집", count: 5 },
  ];

  // 커스텀 훅을 사용한 아바타 생성
  const { getAvatar, isLoading } = useAvatarGeneration(rows, { size: 96 });
  
  // 네비게이션 훅
  const { handleCategoryClick, handleWriteClick } = useStudyNavigation();
  
  // 카테고리 설정 훅
  const { getCategoryConfig } = useCategoryConfig();

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
                <CategoryCard
                  key={i}
                  label={r.label}
                  index={i}
                  avatarSrc={avatarSrc}
                  isLoading={isLoading}
                  onCategoryClick={handleCategoryClick}
                />
              );
            })}
            </div>
          </div>
        );
      })}
    </section>
  );
}
