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
        console.log("===== 단일 프로젝트 API 호출 =====");
        console.log(`API 엔드포인트: GET /api/project/${projectId}`);
        
        const response = await ProjectService.getProject(projectId);
        
        console.log("===== 단일 프로젝트 API 응답 =====");
        console.log('프로젝트 상세 데이터:', response);
        console.log('응답 타입:', typeof response);
        console.log('ID:', response?.id);
        console.log('Title:', response?.title);
        console.log('MemberBriefs:', response?.memberBriefs);
        console.log('Techs:', response?.techs);
        
        setProjectData(response);
      } catch (err) {
        console.log("===== 단일 프로젝트 API 에러 =====");
        console.error('프로젝트 조회 실패:', err);
        console.error('에러 메시지:', err.message);
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