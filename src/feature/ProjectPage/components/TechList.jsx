import { COLORS } from "../../../utils/colors.js";

export default function TechList({ tech }) {
  return (
    <div>
      <h3 className="text-sm mb-4">기술</h3>
      <div className="flex items-center gap-6">
        {tech && tech.length > 0 ? (
          tech.map((techItem, idx) => (
            <div 
              key={idx} 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white" 
              style={{ backgroundColor: COLORS.PRIMARY }}
              title={techItem}
            >
              {typeof techItem === 'string' ? techItem.slice(0, 2).toUpperCase() : '?'}
            </div>
          ))
        ) : (
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: COLORS.GRAY_200 }} />
        )}
      </div>
    </div>
  );
}