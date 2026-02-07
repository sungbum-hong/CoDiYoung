
import { useNavigate } from "react-router-dom";
import Avatar from "./Avatar.jsx";
import ApplicationModal from "./components/ApplicationModal.jsx";
import LoginModal from "./components/LoginModal.jsx";
import Button from "../../ui/Button.jsx";
import { COLORS } from '../../constants/colors.js';
import { CONFIG } from "../../constants/config.js";
import { useAuthState } from "../../hooks/useAuth.js";
import { useState } from "react";

export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthenticated } = useAuthState();

  // Use values directly from project or fallbacks
  const title = project?.title || "";
  const createdAt = project?.createdAt || "2025-12-22"; // default date
  const userName = project?.user?.name || "사용자";
  const userAvatar = project?.user?.avatar;
  
  // Left Column Data
  const recruitmentCount = project?.recruitmentCount || "인원 미정";
  const deadline = project?.deadline || "2026-01-01";
  const positions = project?.positions || [];
  const techStack = project?.techStack || [];
  const slogan = project?.slogan || "슬로건이 없습니다.";
  const questions = project?.questions || [];
  const openTalkLink = project?.openTalkLink || "";

  // Right Column Data
  const description = project?.description || "";
  const detailedDescription = project?.detailedDescription || description;
  const imageKey = project?.imageKey;
  const thumbnail = project?.thumbnail;

  const handleApply = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    setIsApplicationModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-20">
      {/* 1. Top Navigation & Title Section */}
      <div className="mb-10">
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 text-gray-500 hover:text-gray-900 transition-colors"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <h1 className="text-3xl font-bold text-gray-900 mb-4 leading-tight max-w-4xl">
          {title}
        </h1>

        <div className="flex items-center gap-2 text-gray-600">
          <div className="w-6 h-6 rounded-full overflow-hidden bg-gray-100 items-center justify-center flex">
             {userAvatar ? (
                <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
             ) : (
                <span className="text-xs">👤</span>
             )}
          </div>
          <span className="font-medium text-sm text-gray-900">{userName}</span>
          <span className="text-sm text-gray-400">{createdAt}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* 2. Left Column (Info) */}
        <div className="lg:col-span-4 space-y-12">
          {/* Info Block */}
          <div className="space-y-6">
            <div className="grid grid-cols-[100px_1fr] gap-x-4 gap-y-6 items-baseline">
              <span className="text-gray-500 font-medium">모집 인원</span>
              <span className="text-gray-900 font-medium">{recruitmentCount}</span>

              <span className="text-gray-500 font-medium">마감일</span>
              <span className="text-gray-900 font-medium">{deadline}</span>

              <span className="text-gray-500 font-medium self-center">포지션</span>
              <div className="flex flex-wrap gap-2">
                {positions.map((pos) => (
                  <span key={pos} className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                    {pos}
                  </span>
                ))}
              </div>

              <span className="text-gray-500 font-medium self-center">기술</span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Slogan */}
          <div className="space-y-2">
            <h3 className="text-gray-500 font-medium mb-2">슬로건</h3>
            <p className="font-bold text-lg text-gray-900 leading-snug">
              {slogan}
            </p>
          </div>

          {/* Questions */}
          {questions.length > 0 && (
             <div className="space-y-4">
               <h3 className="text-gray-500 font-medium">질문</h3>
               <div className="space-y-4">
                 {questions.map((q, idx) => (
                   <div key={idx} className="p-4 bg-gray-50 rounded-xl text-gray-800 text-sm font-medium leading-relaxed">
                     {q}
                   </div>
                 ))}
               </div>
             </div>
          )}

          {/* Open Link */}
          <div className="space-y-2">
            <h3 className="text-gray-500 font-medium">오픈톡 링크</h3>
            <a href={`https://${openTalkLink}`} target="_blank" rel="noreferrer" className="text-gray-900 font-medium hover:underline block truncate">
              {openTalkLink}
            </a>
          </div>
        </div>

        {/* 3. Right Column (Content) */}
        <div className="lg:col-span-8 space-y-8">
            {/* Image Box */}
            <div className="w-full h-[400px] bg-gray-200 rounded-none overflow-hidden flex items-center justify-center">
                 {/* Placeholder or Image */}
                 {imageKey || thumbnail ? (
                     <img 
                       src={imageKey ? (imageKey.startsWith('http') ? imageKey : `${CONFIG.API.BASE_URL}/storage/${imageKey}`) : thumbnail} 
                       alt={title} 
                       className="w-full h-full object-cover"
                     />
                 ) : (
                     <span className="text-gray-400">이미지 없음</span>
                 )}
            </div>

            {/* Description Text */}
            <div className="whitespace-pre-wrap text-gray-800 leading-relaxed text-sm">
                {detailedDescription}
            </div>
        </div>
      </div>

      {/* Modals */}
      {isApplicationModalOpen && (
        <ApplicationModal
          onClose={() => setIsApplicationModalOpen(false)}
          project={project}
          projectName={title}
          projectId={project?.id}
          description={description}
        />
      )}
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} />
      )}
    </div>
  );
}
