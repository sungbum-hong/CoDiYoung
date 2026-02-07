
import { useState } from 'react';
import { MOCK_MY_PROJECTS } from "../../../services/profile/mockProfileData.js";
import MyProjectCard from "./MyProjectCard";
import ProjectCreateForm from "./ProjectCreateForm";

export default function ProjectContent() {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreateProject = () => {
    setIsCreating(true);
  };

  const handleBackFromCreate = () => {
    setIsCreating(false);
  };

  if (isCreating) {
    return <ProjectCreateForm onBack={handleBackFromCreate} />;
  }

  return (
    <div className="bg-white min-h-screen py-8 relative">
      {/* Create Project Button (Fixed/Floating as per design it seems static top-right relative to content, but here distinct) */}
      <div className="flex justify-end mb-8">
        <button
            onClick={handleCreateProject}
            className="bg-[#7C4DFF] text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:bg-[#6c42e0] transition-colors text-sm"
        >
            프로젝트 만들기
        </button>
      </div>

      <div className="space-y-16">
        {/* 1. Interested Projects */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-6">관심 프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_MY_PROJECTS.interested.map(project => (
                <MyProjectCard key={project.id} project={project} type="interested" />
            ))}
          </div>
        </section>

        {/* 2. Applied Projects */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-6">신청 프로젝트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_MY_PROJECTS.applied.map(project => (
                <MyProjectCard key={project.id} project={project} type="applied" />
            ))}
            {/* Empty state specifically for applied if empty? No, mock has data */}
          </div>
        </section>

        {/* 3. Ongoing Projects */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-6">진행 프로젝트</h2>
          {MOCK_MY_PROJECTS.ongoing.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {MOCK_MY_PROJECTS.ongoing.map(project => (
                    <MyProjectCard key={project.id} project={project} type="ongoing" />
                ))}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-lg p-8 text-center text-gray-400 text-sm">
                진행 중인 프로젝트가 없습니다.
            </div>
          )}
        </section>

        {/* 4. Completed Projects */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-6">완료 프로젝트</h2>
          {MOCK_MY_PROJECTS.completed.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 {MOCK_MY_PROJECTS.completed.map(project => (
                    <MyProjectCard key={project.id} project={project} type="completed" />
                ))}
            </div>
          ) : (
             // Layout to match empty space if needed, or just text
             <div className="h-20"></div> 
          )}
        </section>
      </div>
    </div>
  );
}
