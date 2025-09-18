import { useState } from "react";
import Avatar from "./Avatar.jsx";
import ApplicationModal from "./components/ApplicationModal.jsx";
import MemberList from "./components/MemberList.jsx";
import TechList from "./components/TechList.jsx";
import Button from "../../ui/Button.jsx";
import { COLORS } from '../../utils/colors.js';
import { useProjectMapping } from "./hooks/useProjectMapping.js";
import { ProjectService } from "../../services/projectService.js";

export default function ProjectCard({ project }) {
  const { name, slogan, leadImage, members, tech, description, projectId } = useProjectMapping(project);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);

  const handleApply = async () => {
    try {
      console.log("===== 진행중인 프로젝트 중복 검사 =====");
      
      // 진행중인 프로젝트 조회
      const progressingProjects = await ProjectService.getProgressingProjects();
      console.log("진행중인 프로젝트:", progressingProjects);
      
      if (progressingProjects && progressingProjects.length > 0) {
        // 배열이 아닌 경우 배열로 변환
        const projectsArray = Array.isArray(progressingProjects) ? progressingProjects : [progressingProjects];
        
        // 현재 프로젝트와 중복 확인
        const isDuplicate = projectsArray.some(p => p.id === projectId);
        
        if (isDuplicate) {
          alert("이미 진행중인 프로젝트입니다. 하나의 프로젝트만 진행할 수 있습니다.");
          return;
        }
        
        // 다른 진행중인 프로젝트가 있는 경우 경고
        const hasOtherProjects = projectsArray.length > 0;
        if (hasOtherProjects) {
          const otherProjectTitles = projectsArray.map(p => p.title).join(", ");
          const confirmApply = confirm(
            `현재 진행중인 프로젝트가 있습니다: ${otherProjectTitles}\n\n새로운 프로젝트를 신청하시겠습니까?`
          );
          
          if (!confirmApply) {
            return;
          }
        }
      }
      
      console.log("중복 검사 통과 - 신청 모달 열기");
      setIsApplicationModalOpen(true);
      
    } catch (error) {
      console.error("진행중인 프로젝트 조회 실패:", error);
      // 에러가 발생해도 신청은 허용 (네트워크 문제일 수 있음)
      console.log("에러 발생으로 중복 검사 건너뛰고 신청 모달 열기");
      setIsApplicationModalOpen(true);
    }
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