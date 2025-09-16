import { useState } from "react";
import Avatar from "./Avatar.jsx";
import ApplicationModal from "./components/ApplicationModal.jsx";
import MemberList from "./components/MemberList.jsx";
import TechList from "./components/TechList.jsx";
import Button from "../../ui/Button.jsx";
import { COLORS } from '../../utils/colors.js';
import { useProjectMapping } from "./hooks/useProjectMapping.js";

export default function ProjectCard({ project }) {
  const { name, slogan, leadImage, members, tech, description, projectId } = useProjectMapping(project);
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
        <MemberList members={members} />
        <TechList tech={tech} />
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