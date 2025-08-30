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
    <div className="w-full min-h-screen flex flex-col py-6 px-24">
      {/* 신청 프로젝트 + 아이콘 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">신청 프로젝트</h2>
          <button
            onClick={handleCreateClick}
            className="w-10 h-10 rounded-full bg-white border-2 border-violet-600 text-violet-600 
             hover:bg-violet-600 hover:text-white transition flex items-center justify-center text-sm shadow-sm">
            ➕
          </button>
        </div>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md flex items-center justify-center">
          <span className="font-bold text-lg">없음</span>
        </div>
      </div>

      {/* 진행 프로젝트 */}
      <div className="mb-10">
        <h2 className="text-lg font-semibold mb-8">진행 프로젝트</h2>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md flex items-center justify-center">
          <span className="font-bold text-lg">없음</span>
        </div>
      </div>

      {/* 프로젝트 - 페이지네이션 */}
      <div>
        <h2 className="text-sm font-semibold mb-3">프로젝트</h2>
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-[var(--color-gray-300)]" />
          <div className="w-6 h-6 rounded-full bg-[var(--color-gray-300)]" />
          <div className="w-6 h-6 rounded-full bg-[var(--color-gray-300)]" />
        </div>
      </div>
    </div>
  );
}
