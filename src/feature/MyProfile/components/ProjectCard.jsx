import ProjectInfo from './ProjectInfo.jsx';
import MemberDisplay from './MemberDisplay.jsx';

export default function ProjectCard({ project, index: _index, isSelected: _isSelected, onSelect }) {
  const handleSelect = () => {
    if (onSelect) {
      onSelect(project?.id);
    }
  };

  const handleKeyDown = (event) => {
    if (!onSelect) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(project?.id);
    }
  };

  return (
    <div
      className="relative w-full h-full"
      onClick={onSelect ? handleSelect : undefined}
      onKeyDown={onSelect ? handleKeyDown : undefined}
      role={onSelect ? 'button' : undefined}
      tabIndex={onSelect ? 0 : undefined}
      aria-pressed={undefined}
    >
      {/* 프로젝트 이미지 */}
      <div
        className="absolute w-[70px] h-[70px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600 overflow-hidden"
        style={{ left: "20px", top: "12px" }}
      >
        {project?.imageKey ? (
          <img 
            src={project.imageKey.startsWith('http') ? project.imageKey : `http://15.164.125.28:8080/storage/${project.imageKey}`}
            alt={project?.title || '프로젝트 이미지'}
            className="w-full h-full object-cover rounded-full"
            onError={(e) => {
              console.error('Image load error:', {
                src: e.target.src,
                project: project,
                imageKey: project?.imageKey
              });
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <div 
          className={`w-full h-full flex items-center justify-center text-xs text-gray-600 ${project?.imageKey ? 'hidden' : 'flex'}`}
        >
          프로젝트
          <br />
          이미지
        </div>
      </div>

      {/* 프로젝트 정보 */}
      <ProjectInfo project={project} />

      {/* 멤버 및 기술 표시 */}
      <MemberDisplay project={project} />
    </div>
  );
}
