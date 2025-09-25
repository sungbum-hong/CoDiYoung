import { useState, useEffect } from "react";

export function useProjectData() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      
      try {
        setIsLoading(true);
        setError(null);
        const response = await MockProjectService.getAllProjects();
        console.log('MainHome 프로젝트 데이터:', response);
        setProjects(response || []);
      } catch (error) {
        console.error('프로젝트 조회 실패:', error);
        setError(error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return {
    projects,
    isLoading,
    error,
  };
}