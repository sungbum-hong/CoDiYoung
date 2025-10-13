import { useState, useEffect, useCallback } from "react";
import { ProjectService } from "../../../services/projectService.js";

export function useProjectData() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await ProjectService.getAllProjects();
      
      // API 응답이 페이지네이션 형태인 경우 content 배열 사용
      const projectList = response?.content || response || [];
      setProjects(projectList);
    } catch (error) {
      console.error('프로젝트 조회 실패:', error);
      setError(error);
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  // 프로젝트 변경 감지를 위한 이벤트 리스너 추가
  useEffect(() => {
    const handleProjectUpdate = () => {
      fetchProjects();
    };

    // 커스텀 이벤트 리스너 등록
    window.addEventListener('projectUpdated', handleProjectUpdate);
    window.addEventListener('projectCancelled', handleProjectUpdate);
    window.addEventListener('projectCompleted', handleProjectUpdate);

    return () => {
      window.removeEventListener('projectUpdated', handleProjectUpdate);
      window.removeEventListener('projectCancelled', handleProjectUpdate);
      window.removeEventListener('projectCompleted', handleProjectUpdate);
    };
  }, [fetchProjects]);

  return {
    projects,
    isLoading,
    error,
    fetchProjects, // 수동 새로고침을 위해 노출
  };
}