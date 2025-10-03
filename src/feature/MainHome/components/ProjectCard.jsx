import { useState, useEffect } from 'react';
import { CONFIG } from '../../../constants/config.js';
import { COLORS } from '../../../utils/colors.js';
import { ProjectService } from '../../../services/projectService.js';

export default function ProjectCard({ 
  index, 
  project, 
  onProjectClick, 
  onCardKeyDown 
}) {
  const [projectImageUrl, setProjectImageUrl] = useState(null);
  const cardWidth = CONFIG.CARD.PROJECT.WIDTH;

  // 프로젝트 이미지 URL 로드
  useEffect(() => {
    const loadProjectImage = async () => {
      if (!project?.imageKey) return;

      try {
        // imageKey가 이미 완전한 URL인지 확인
        if (project.imageKey.startsWith('http')) {
          setProjectImageUrl(project.imageKey);
        } else {
          const imageUrl = await ProjectService.getImageUrl(project.imageKey);
          setProjectImageUrl(imageUrl);
        }
      } catch (error) {
        console.error(`프로젝트 이미지 로드 실패:`, error);
      }
    };

    loadProjectImage();
  }, [project?.imageKey]);

  return (
    <div className="flex-shrink-0 flex flex-col items-center">
      <div
        role="button"
        tabIndex={0}
        onKeyDown={(e) => onCardKeyDown(e, index)}
        className="flex flex-col items-center justify-center cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 hover:shadow-lg"
        style={{
          width: cardWidth,
          height: CONFIG.CARD.PROJECT.HEIGHT,
          borderRadius: CONFIG.BORDER_RADIUS.MEDIUM,
          backgroundColor: projectImageUrl ? 'transparent' : COLORS.GRAY_100,
        }}
        onClick={() => onProjectClick(index)}
        aria-label={project ? `${project.title} 상세 보기` : `프로젝트 ${index + 1} 상세 보기`}
      >
        <div className="text-center w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          {projectImageUrl ? (
            <img 
              src={projectImageUrl}
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
            className={`text-sm font-medium w-full h-full flex items-center justify-center ${projectImageUrl ? 'hidden' : 'flex'}`}
            style={{ color: COLORS.GRAY_600 }}
          >
            프로젝트 {index + 1}
            {project?.imageKey && !projectImageUrl && (
              <div className="text-xs text-red-500 mt-1">
                이미지 로딩 중...
              </div>
            )}
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