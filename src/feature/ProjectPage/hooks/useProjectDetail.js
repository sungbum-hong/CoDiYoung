import { useState, useEffect } from "react";
import { MockProjectService, USE_MOCK_DATA } from "../../../mock-logic/index.js";

export function useProjectDetail(projectId) {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;
      
      setIsLoading(true);
      try {
        const response = USE_MOCK_DATA 
          ? await MockProjectService.getProject(projectId)
          : null;
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

  return {
    projectData,
    isLoading,
    error
  };
}