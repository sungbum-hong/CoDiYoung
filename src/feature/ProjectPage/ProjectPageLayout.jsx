import { useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard.jsx";
import { useProjectDetail } from "./hooks/useProjectDetail.js";

export default function ProjectPageLayout() {
  const { projectId } = useParams();
  const numericProjectId = projectId ? parseInt(projectId, 10) : null;
  const { data: projectData, isLoading, error } = useProjectDetail(numericProjectId);


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">로딩 중...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg text-red-600">오류: {error?.message || '알 수 없는 오류가 발생했습니다.'}</div>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">프로젝트를 찾을 수 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ProjectCard project={projectData} />
    </div>
  );
}