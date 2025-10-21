import { useState } from "react";
import Avatar from "./Avatar.jsx";
import ApplicationModal from "./components/ApplicationModal.jsx";
import LoginModal from "./components/LoginModal.jsx";
import MemberList from "./components/MemberList.jsx";
import TechList from "./components/TechList.jsx";
import Button from "../../ui/Button.jsx";
import { COLORS } from '../../utils/colors.js';
import { useProjectMapping } from "./hooks/useProjectMapping.js";
import { useProgressingProjects } from "../MyProfile/hooks/useMyProfileProjectQueries.js";
import { useAuthState } from "../../hooks/useAuth.js";

export default function ProjectCard({ project }) {
  const { name, slogan, leadImage, members, tech, description, projectId } = useProjectMapping(project);
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated, user } = useAuthState();

  // React Query를 사용한 진행 중인 프로젝트 조회
  const userId = user?.userId ?? user?.id ?? null;
  const { data: progressingProjects = [] } = useProgressingProjects(userId, {
    enabled: isAuthenticated && !!userId
  });

  const handleApply = () => {
    // 비로그인 시 로그인 모달 표시
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }

    try {
      if (progressingProjects && progressingProjects.length > 0) {
        // 현재 프로젝트와 중복 확인
        const isDuplicate = progressingProjects.some(p => p.id === projectId);

        if (isDuplicate) {
          alert("이미 진행중인 프로젝트입니다. 하나의 프로젝트만 진행할 수 있습니다.");
          return;
        }

        // 다른 진행중인 프로젝트가 있는 경우 경고
        if (progressingProjects.length > 0) {
          const otherProjectTitles = progressingProjects.map(p => p.title).join(", ");
          const confirmApply = confirm(
            `현재 진행중인 프로젝트가 있습니다: ${otherProjectTitles}\n\n새로운 프로젝트를 신청하시겠습니까?`
          );

          if (!confirmApply) {
            return;
          }
        }
      }

      setIsApplicationModalOpen(true);

    } catch (error) {
      // 에러가 발생해도 신청은 허용 (네트워크 문제일 수 있음)
      console.error('프로젝트 중복 확인 중 오류:', error);
      setIsApplicationModalOpen(true);
    }
  };

  const closeApplicationModal = () => {
    setIsApplicationModalOpen(false);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
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
        <div className="border-2 rounded-2xl p-8 h-96 flex items-center justify-center mt-12 overflow-hidden" style={{ borderColor: COLORS.BORDER }}>
          {project?.imageKey ? (
            <img 
              src={project.imageKey.startsWith('http') ? project.imageKey : `http://15.164.125.28:8080/storage/${project.imageKey}`}
              alt={project?.title || '프로젝트 이미지'}
              className="w-full h-full object-cover rounded-xl"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className={`w-full h-full flex items-center justify-center ${project?.imageKey ? 'hidden' : 'flex'}`}
          >
            <p className="text-center text-lg" style={{ color: COLORS.GRAY_700 }}>{description}</p>
          </div>
        </div>
        
        {/* ApplicationModal */}
        {isApplicationModalOpen && (
          <ApplicationModal
            onClose={closeApplicationModal}
            project={project}
            projectName={name}
            projectId={projectId}
            description={description}
          />
        )}

        {/* LoginModal */}
        {isLoginModalOpen && (
          <LoginModal
            onClose={closeLoginModal}
          />
        )}
      </div>
    </div>
  );
}
