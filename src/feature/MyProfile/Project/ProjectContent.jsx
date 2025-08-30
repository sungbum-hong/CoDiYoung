
import { useState } from "react";
import ProjectCreateForm from "./ProjectCreateForm";

export default function ProjectContent() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleBackClick = () => {
    setShowCreateForm(false);
  };

  if (showCreateForm) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center p-6">
        <ProjectCreateForm onBack={handleBackClick} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col p-6">
      {/* 상단 아이콘 */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={handleCreateClick}
          className="w-14 h-14 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition flex items-center justify-center text-sm"
        >
          ➕
        </button>
      </div>

      {/* 신청 프로젝트 */}
      <div className="mb-10">
        <h2 className="text-sm font-medium mb-2">신청 프로젝트</h2>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md flex items-center justify-center">
          <span className="font-bold text-lg">없음</span>
        </div>
      </div>

      {/* 진행 프로젝트 */}
      <div className="mb-10">
        <h2 className="text-sm font-medium mb-2">진행 프로젝트</h2>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md flex items-center justify-center">
          <span className="font-bold text-lg">없음</span>
        </div>
      </div>

      {/* 프로젝트 - 페이지네이션 */}
      <div>
        <h2 className="text-sm font-medium mb-3">프로젝트</h2>
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-[var(--color-gray-300)]" />
          <div className="w-6 h-6 rounded-full bg-[var(--color-gray-300)]" />
          <div className="w-6 h-6 rounded-full bg-[var(--color-gray-300)]" />
        </div>
      </div>
    </div>
  );
}