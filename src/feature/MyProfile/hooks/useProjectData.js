import { useState, useEffect } from "react";
import { ProjectService } from "../../../services/projectService.js";
import { MockProjectService, USE_MOCK_DATA } from "../../../mock-logic/index.js";

export function useProjectData() {
  const [progressingProjects, setProgressingProjects] = useState([]);
  const [appliedProjects, setAppliedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 진행 프로젝트 조회
  const fetchProgressingProjects = async () => {
    try {
      const response = USE_MOCK_DATA
        ? await MockProjectService.getProgressingProjects()
        : await ProjectService.getProgressingProjects();
      console.log("진행 프로젝트 응답:", response);
      
      if (response) {
        const projectsArray = Array.isArray(response) ? response : [response];
        setProgressingProjects(projectsArray);
        return projectsArray;
      } else {
        setProgressingProjects([]);
        return [];
      }
    } catch (error) {
      console.error("진행 프로젝트 조회 실패:", error);
      setError(error);
      setProgressingProjects([]);
      return [];
    }
  };

  // 신청 프로젝트 조회
  const fetchAppliedProjects = async () => {
    try {
      const response = USE_MOCK_DATA
        ? await MockProjectService.getAppliedProjects()
        : await ProjectService.getAppliedProjects();
      console.log("신청 프로젝트 응답:", response);
      
      if (response) {
        const projectsArray = Array.isArray(response) ? response : [response];
        setAppliedProjects(projectsArray);
        return projectsArray;
      } else {
        setAppliedProjects([]);
        return [];
      }
    } catch (error) {
      console.error("신청 프로젝트 조회 실패:", error);
      setError(error);
      setAppliedProjects([]);
      return [];
    }
  };

  // 모든 프로젝트 데이터 조회
  const fetchAllProjects = async () => {
    setIsLoading(true);
    setError(null);
    try {
      await Promise.all([fetchProgressingProjects(), fetchAppliedProjects()]);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // 컴포넌트 마운트 시 데이터 조회
  useEffect(() => {
    console.log("ProjectContent Mock 데이터 사용 여부:", USE_MOCK_DATA);
    fetchAllProjects();
  }, []);

  return {
    progressingProjects,
    appliedProjects,
    isLoading,
    error,
    fetchProgressingProjects,
    fetchAppliedProjects,
    fetchAllProjects,
  };
}