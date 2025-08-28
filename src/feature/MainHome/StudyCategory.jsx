import { useNavigate } from "react-router-dom";
import { PencilIcon } from "@heroicons/react/24/outline";
import { ROUTES } from '../../constants/routes';
import { COLORS } from '../../utils/colors';
import { CONFIG } from '../../constants/config';

export default function StudyCategory({
  title = "스터디 채널",
  rows = [
    { label: "코딩", count: CONFIG.CARD.STUDY.DEFAULT_COUNT },
    { label: "디자인", count: CONFIG.CARD.STUDY.DEFAULT_COUNT },
    { label: "영상편집", count: CONFIG.CARD.STUDY.DEFAULT_COUNT },
  ],
}) {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`${ROUTES.STUDY_CATEGORY.replace(':category', category)}`);
  };

  const handleWriteClick = () => {
    navigate(ROUTES.WRITE);
  };

  return (
    <section className="space-y-6 mb-21">
      <div className="flex items-center justify-between mb-7">
        <h2 className="font-bold text-2xl">{title}</h2>
        <button 
          onClick={handleWriteClick}
          className="p-2 rounded-full transition-colors"
          style={{ backgroundColor: 'transparent' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_100}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        >
          <PencilIcon 
            className="w-5 h-5" 
            style={{ color: COLORS.GRAY_600 }}
          />
        </button>
      </div>

      {rows.map((r) => (
        <div key={r.label}>
          <p 
            className="font-bold text-1.5xl mb-3"
            style={{ color: COLORS.GRAY_500 }}
          >{r.label}</p>
          <div 
            className="grid gap-4"
            style={{ gridTemplateColumns: `repeat(${CONFIG.CARD.STUDY.DEFAULT_COUNT}, minmax(0, 1fr))` }}
          >
            {Array.from({ length: r.count }).map((_, i) => (
              <button
                key={i}
                onClick={() => handleCategoryClick(r.label)}
                className="w-12 h-12 rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: COLORS.GRAY_300,
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_400}
                onMouseLeave={(e) => e.target.style.backgroundColor = COLORS.GRAY_300}
                onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px ${COLORS.BLUE_600}`}
                onBlur={(e) => e.target.style.boxShadow = 'none'}
                aria-label={`${r.label} 스터디 채널 ${i + 1}번`}
              ></button>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
