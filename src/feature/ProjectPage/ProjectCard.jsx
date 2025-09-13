import { useState } from "react";
import Avatar from "./Avatar.jsx";
import ApplicationModal from "./components/ApplicationModal.jsx";
import Button from "../../ui/Button.jsx";
import { COLORS } from '../../utils/colors.js';
const defaultProject = {
  name: '프로젝트 이름',
  slogan: '프로젝트 슬로건',
  leadImage: '', // optional image url
  members: new Array(5).fill(null).map((_, i) => ({ id: i })),
  tech: new Array(3).fill(null).map((_, i) => ({ id: i })),
  description: '프로젝트 설명 또는 이미지가 들어갈 영역입니다.'
};

export default function ProjectCard({ project = defaultProject }) {
  // API 응답 구조에 맞게 매핑
  const name = project.title || project.name || '프로젝트 이름';
  const slogan = project.questions?.[0] || project.slogan || '프로젝트 슬로건';
  const leadImage = project.imageUrl || project.leadImage || '';
  const members = project.memberBriefs || project.members || [];
  const tech = project.techs || project.tech || [];
  const description = project.description || '프로젝트 설명 또는 이미지가 들어갈 영역입니다.';
  const projectId = project.id;
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const handleApply = () => {
    setIsApplicationModalOpen(true);
  };

  const closeApplicationModal = () => {
    setIsApplicationModalOpen(false);
  };

  return (
    <div className="max-w-6xl mx-auto px-6">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-44 py-6">
        <div className="flex-shrink-0">
          <Avatar size="lg" src={leadImage} alt="팀장 이미지" />
        </div>

        <div className="flex flex-col justify-between h-56 items-center md:items-start text-center md:text-left">
          <h2 className="text-lg md:text-xl font-medium">{name}</h2>
          <p className="text-base md:text-lg" style={{ color: COLORS.GRAY_700 }}>{slogan}</p>

          <Button variant="secondary"
            onClick={handleApply}
            className="w-32 h-8"
          >
            신청하기
          </Button>
        </div>
      </div>

      {/* Members & Tech */}
      <div className="mt-12 space-y-8">
        <div>
          <h3 className="text-sm mb-4">팀원</h3>
          <div className="flex items-center gap-4">
            {members && members.length > 0 ? (
              members.map((member, idx) => (
                <div 
                  key={member.userId || idx} 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white" 
                  style={{ backgroundColor: COLORS.PRIMARY }}
                  title={member.name}
                >
                  {member.name ? member.name[0].toUpperCase() : '?'}
                </div>
              ))
            ) : (
              <div className="w-12 h-12 rounded-full" style={{ backgroundColor: COLORS.GRAY_200 }} />
            )}
          </div>
        </div>

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
      </div>

      {/* Big description / image box */}
      <div className="mt-10 relative">
        <div className="border-2 rounded-2xl p-8 h-96 flex items-center justify-center mt-12" style={{ borderColor: COLORS.BORDER }}>
          <p className="text-center text-lg" style={{ color: COLORS.GRAY_700 }}>{description}</p>
        </div>
        
        {/* ApplicationModal */}
        {isApplicationModalOpen && (
          <ApplicationModal 
            onClose={closeApplicationModal} 
            projectName={name}
            projectId={projectId}
          />
        )}
      </div>
    </div>
  );
}