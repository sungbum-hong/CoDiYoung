import { CONFIG } from '../../../constants/config.js';
import { COLORS } from '../../../utils/colors.js';
import { USE_MOCK_DATA } from '../../../mock-logic/index.js';
import { useBackgroundHover } from '../../../hooks/useHoverStyle.js';

export default function ProjectCard({ 
  index, 
  project, 
  onProjectClick, 
  onCardKeyDown 
}) {
  const projectCardHover = useBackgroundHover(COLORS.GRAY_300, COLORS.GRAY_400);
  const cardWidth = CONFIG.CARD.PROJECT.WIDTH;

  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => onCardKeyDown(e, index)}
        className="flex flex-col items-center justify-center cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 p-4"
        style={{
          width: cardWidth,
          height: CONFIG.CARD.PROJECT.HEIGHT,
          borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
          backgroundColor: COLORS.GRAY_300,
        }}
        onClick={() => onProjectClick(index)}
        {...projectCardHover}
        aria-label={project ? `${project.title} 상세 보기` : `프로젝트 ${index + 1} 상세 보기`}
      >
        <div className="text-center w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          {project?.imageKey ? (
            <img 
              src={project.imageKey.startsWith('http') ? project.imageKey : `http://15.164.125.28:8080/storage/${project.imageKey}`}
              alt={project?.title || '프로젝트 이미지'}
              className="w-full h-full object-cover"
              style={{ borderRadius: CONFIG.BORDER_RADIUS.MEDIUM }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className={`text-sm font-medium w-full h-full flex items-center justify-center ${project?.imageKey ? 'hidden' : 'flex'}`}
            style={{ color: COLORS.GRAY_600 }}
          >
            프로젝트 {index + 1}
          </div>
        </div>
      </div>
      
      {/* Mock 데이터를 이미지 밑에 표시 */}
      {project && (
        <div className="text-center mt-2">
          <h3 className="text-sm font-bold mb-1" style={{ color: COLORS.GRAY_800 }}>
            {project.title}
          </h3>
          <p className="text-xs" style={{ color: COLORS.GRAY_600 }}>
            {project.slogan || "슬로건이 없습니다"}
          </p>
        </div>
      )}
    </div>
  );
}