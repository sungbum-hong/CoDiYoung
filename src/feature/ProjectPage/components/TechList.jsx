import { COLORS } from "../../../constants/colors.js";
import TechStack from "../../../components/TechStack.jsx";

export default function TechList({ tech }) {
  
  return (
    <div>
      <h3 className="text-sm mb-4">기술</h3>
      <div className="flex items-center gap-4">
        {tech && tech.length > 0 ? (
          <TechStack 
            techs={tech} 
            displayMode="icons" 
            size="lg" 
            className="flex-wrap"
          />
        ) : (
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: COLORS.GRAY_200 }} />
        )}
      </div>
    </div>
  );
}