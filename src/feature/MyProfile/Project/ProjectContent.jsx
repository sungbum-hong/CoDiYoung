import { UserIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";
import ProjectCreateForm from "./ProjectCreateForm";
import ApplicantListView from "./components/ApplicantListView";
import ProjectCard from "../components/ProjectCard.jsx";
import { useProjectData } from "../hooks/useProjectData.js";
import { useApplicantData } from "../hooks/useApplicantData.js";
import { useProjectNavigation } from "../hooks/useProjectNavigation.js";
import { useProjectModal } from "../hooks/useProjectModal.js";

export default function ProjectContent() {
  // 프로젝트 데이터 훅
  const { progressingProjects, appliedProjects, isLoading } = useProjectData();
  
  // 신청자 데이터 훅
  const { projectApplicants, fetchMultipleProjectApplicants } = useApplicantData();
  
  // 네비게이션 훅
  const {
    showCreateForm,
    showApplicantList,
    currentProjectId,
    handleCreateClick,
    handleBackClick,
    handleApplicantIconClick,
    handleBackToProjects,
  } = useProjectNavigation();
  
  // 모달 관리 훅
  const { modals, openModal, closeModal } = useProjectModal();

  // 프로젝트 데이터가 로드된 후 신청자 데이터 조회
  useEffect(() => {
    if (progressingProjects.length > 0) {
      fetchMultipleProjectApplicants(progressingProjects);
    }
  }, [progressingProjects, fetchMultipleProjectApplicants]);

  if (showCreateForm) {
    return (
      <div className="w-full min-h-screen flex flex-col items-center p-6">
        <ProjectCreateForm onBack={handleBackClick} />
      </div>
    );
  }

  if (showApplicantList) {
    const currentProject = progressingProjects.find(
      (p) => p.id === currentProjectId
    );
    const applicants = currentProjectId
      ? projectApplicants[currentProjectId] || []
      : [];

    return (
      <ApplicantListView
        applicants={applicants}
        projectTitle={currentProject?.title || "프로젝트"}
        onBack={handleBackToProjects}
      />
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col py-6 px-24">
      {/* 신청 프로젝트 + 아이콘 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">신청 프로젝트</h2>
          {/* 신청자/완료 이미지를 제목 오른쪽에 배치 */}
          <div className="flex gap-4">
            {/* 신청자 리스트 보기 버튼 */}
            <div className="flex gap-2">
              <button
                onClick={handleCreateClick}
                className="w-10 h-10 rounded-full bg-white border-2 border-violet-600 text-violet-600 
             hover:bg-violet-600 hover:text-white transition flex items-center justify-center text-sm shadow-sm"
              >
                ➕
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md relative">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">로딩 중...</span>
            </div>
          ) : progressingProjects && progressingProjects.length > 0 ? (
            <div className="w-full h-full overflow-y-auto">
              {progressingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">없음</span>
            </div>
          )}
        </div>
      </div>

      {/* 진행 프로젝트 */}
      <div className="mb-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold">진행 프로젝트</h2>
          {/* 신청자/완료 이미지를 제목 오른쪽에 배치 */}
          <div className="flex gap-4">
            {/* 신청자 리스트 보기 버튼 */}
            <div className="flex gap-2">
              {progressingProjects.length > 0 && progressingProjects[0] ? (
                progressingProjects[0].id ? (
                  <button
                    onClick={() =>
                      handleApplicantIconClick(progressingProjects[0].id)
                    }
                    className="w-[58px] h-[58px] rounded-full flex items-center justify-center text-sm font-bold text-white hover:scale-105 transition-transform cursor-pointer"
                    style={{ backgroundColor: "#6366F1" }}
                    title={`신청자 목록 보기 (${
                      projectApplicants[progressingProjects[0].id]?.length || 0
                    }명)`}
                  >
                    <UserIcon className="w-6 h-6 text-white" />
                  </button>
                ) : (
                  <div className="w-[58px] h-[58px] rounded-full bg-orange-200 flex items-center justify-center text-xs text-orange-700 font-semibold">
                    서버
                    <br />
                    이슈
                  </div>
                )
              ) : (
                <div className="w-[58px] h-[58px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
                  프로젝트
                  <br />
                  없음
                </div>
              )}
            </div>
            <div className="w-[58px] h-[58px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
              완료
              <br />
              이미지
            </div>
          </div>
        </div>
        <div className="w-full max-w-xl h-64 border-2 border-[var(--color-primary)] rounded-md relative">
          {isLoading ? (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">로딩 중...</span>
            </div>
          ) : progressingProjects && progressingProjects.length > 0 ? (
            <div className="w-full h-full overflow-y-auto">
              {progressingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-bold text-lg">없음</span>
            </div>
          )}
        </div>
      </div>

      {/* 프로젝트 - 페이지네이션 */}
      <div>
        <h2 className="text-sm font-semibold mb-3">프로젝트</h2>
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
