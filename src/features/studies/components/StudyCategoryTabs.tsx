import { COLORS } from '../../../constants/colors';

interface StudyCategoryTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  categories: { id: string; label: string; color?: string }[];
}

export default function StudyCategoryTabs({ activeTab, onTabChange, categories }: StudyCategoryTabsProps) {
  return (
    <div className="flex gap-8 mb-10 border-b" style={{ borderColor: COLORS.BORDER_SECONDARY }}>
      {categories.map((category) => {
        const isActive = activeTab === category.id;
        // Check if the category object has a specific color assigned (from mock/studies.js)
        // If not, fall back to TEXT_PRIMARY
        const activeColor = category.color || COLORS.TEXT_PRIMARY;
        
        return (
          <button
            key={category.id}
            onClick={() => onTabChange(category.id)}
            className="pb-4 text-xl font-bold transition-colors relative"
            style={{
              color: isActive ? activeColor : COLORS.TEXT_DISABLED,
            }}
          >
            {category.label}
            {isActive && (
              <div 
                className="absolute bottom-0 left-0 w-full h-1" 
                style={{ backgroundColor: activeColor }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
