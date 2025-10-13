import { useState, useEffect } from "react";
import { ProjectService } from "../../../services/projectService.js";

export function useProjectDetail(projectId) {
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      if (!projectId) return;
      
      setIsLoading(true);
      try {
        
        const response = await ProjectService.getProject(projectId);
        
        
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