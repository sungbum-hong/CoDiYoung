import { useState, useEffect } from "react";
import { ProjectService } from "../../../services/projectService.js";

export function useProjectData() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        console.log('실제 API 사용 중: /api/project/findAll');
        const response = await ProjectService.getAllProjects();
        
        console.log('MainHome 프로젝트 데이터:', response);
        
        // API 응답이 페이지네이션 형태인 경우 content 배열 사용
        const projectList = response?.content || response || [];
        console.log('추출된 프로젝트 리스트:', projectList);
        setProjects(projectList);
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