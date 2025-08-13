import { useState } from "react";
import Avatar from "./Avatar.jsx";
import LoginModal from "../../ui/LoginModal.jsx";
import NonColorButton from "../../ui/NonColorButton.jsx";
const defaultProject = {
  name: '프로젝트 이름',
  slogan: '프로젝트 슬로건',
  leadImage: '', // optional image url
  members: new Array(5).fill(null).map((_, i) => ({ id: i })),
  tech: new Array(3).fill(null).map((_, i) => ({ id: i })),
  description: '프로젝트 설명 또는 이미지가 들어갈 영역입니다.'
};

export default function ProjectCard({ project = defaultProject }) {
  const { name, slogan, leadImage, members, tech, description } = project;
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const handleApply = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-44">
        <div className="flex-shrink-0">
          <Avatar size="lg" src={leadImage} alt="팀장 이미지" />
        </div>

        <div className="flex flex-col justify-between h-56 items-center md:items-start text-center md:text-left">
          <h2 className="text-lg md:text-xl font-medium">{name}</h2>
          <p className="text-base md:text-lg text-gray-700">{slogan}</p>

          <NonColorButton
            onClick={handleApply}
            className="w-32 h-8"
          >
            신청하기
          </NonColorButton>
        </div>
      </div>

      {/* Members & Tech */}
      <div className="mt-12 space-y-8">
        <div>
          <h3 className="text-sm mb-4">팀원</h3>
          <div className="flex items-center gap-4">
            {members.map((m, idx) => (
              <div key={idx} className="w-12 h-12 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm mb-4">기술</h3>
          <div className="flex items-center gap-6">
            {tech.map((t, idx) => (
              <div key={idx} className="w-12 h-12 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      </div>

      {/* Big description / image box */}
      <div className="mt-10 relative">
        <div className="border-2 border-[#1a237e] rounded-2xl p-8 h-96 flex items-center justify-center">
          <p className="text-center text-lg text-gray-700">{description}</p>
        </div>
        
        {/* LoginModal */}
        {isLoginModalOpen && (
          <LoginModal onClose={closeLoginModal} />
        )}
      </div>
    </div>
  );
}