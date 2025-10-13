import { useState, useEffect } from "react";
import { ProjectService } from "../../../services/projectService.js";

export function useProjectData() {
  const [progressingProjects, setProgressingProjects] = useState([]);
  const [appliedProjects, setAppliedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 진행 프로젝트 조회
  const fetchProgressingProjects = async () => {
    try {
      
      const response = await ProjectService.getProgressingProjects();
      
      
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
      
      const response = await ProjectService.getAppliedProjects();
      
      
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
      
      // 404나 "신청중인 프로젝트가 없습니다" 에러는 정상 상황
      if (
        error.message.includes("신청중인 프로젝트가 없습니다") ||
        error.message.includes("404")
      ) {
        setAppliedProjects([]);
        return [];
      }
      
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