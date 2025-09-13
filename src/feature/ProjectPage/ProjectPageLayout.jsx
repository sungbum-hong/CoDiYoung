import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";
import { MockProjectService, USE_MOCK_DATA } from "../../mock-logic/index.js";
// import { ProjectService } from "../../services/projectService.js";

export default function ProjectPageLayout() {
  const { projectId } = useParams();
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mock 데이터 조회
  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;
      
      setIsLoading(true);
      try {
        const response = USE_MOCK_DATA 
          ? await MockProjectService.getProject(projectId)
          : null; // 실제 API는 주석 처리됨
        console.log('프로젝트 상세 데이터:', response);
        setProjectData(response);
      } catch (err) {
        console.error('프로젝트 조회 실패:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [projectId]);

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
        <div className="text-lg text-red-600">오류: {error}</div>
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