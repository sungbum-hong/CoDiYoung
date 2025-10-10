import { COLORS } from "../../../utils/colors.js";
import TechStack from "../../../components/TechStack.jsx";

export default function TechList({ tech }) {
  console.log("===== TechList 컴포넌트 =====");
  console.log("받은 tech props:", tech);
  console.log("tech 타입:", typeof tech);
  console.log("tech 배열 여부:", Array.isArray(tech));
  console.log("tech 길이:", tech?.length);
  
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