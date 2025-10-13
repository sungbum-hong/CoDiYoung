import { useState } from "react";
import { ProjectService } from "../../../services/projectService.js";

export function useApplicantData() {
  const [projectApplicants, setProjectApplicants] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 프로젝트 신청자 조회
  const fetchProjectApplicants = async (projectId) => {
    if (!projectId) return [];

    try {
      setIsLoading(true);
      const response = await ProjectService.getProjectApplicants(projectId);
      
      if (response) {
        const applicantsArray = Array.isArray(response) ? response : [response];
        setProjectApplicants((prev) => ({
          ...prev,
          [projectId]: applicantsArray,
        }));
        return applicantsArray;
      } else {
        setProjectApplicants((prev) => ({
          ...prev,
          [projectId]: [],
        }));
        return [];
      }
    } catch (error) {
      console.error(`프로젝트 ${projectId} 신청자 조회 실패:`, error);
      
      // 401 인증 에러 또는 로그인 필요 에러인 경우 조용히 처리
      if (
        error.message.includes("로그인이 필요합니다") ||
        error.message.includes("401") ||
        error.message.includes("인증")
      ) {
        setProjectApplicants((prev) => ({
          ...prev,
          [projectId]: [],
        }));
        return [];
      }
      
      // 신청자가 없는 경우도 정상적인 상황
      if (
        error.message.includes("신청자가 없습니다") ||
        error.message.includes("404")
      ) {
        setProjectApplicants((prev) => ({
          ...prev,
          [projectId]: [],
        }));
        return [];
      }
      
      setError(error);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  // 여러 프로젝트의 신청자 데이터를 한번에 조회
  const fetchMultipleProjectApplicants = async (projects) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const promises = projects.map(project => {
        if (project.id) {
          return fetchProjectApplicants(project.id);
        } else {
          setProjectApplicants((prev) => ({
            ...prev,
            ["no-id"]: [],
          }));
          return Promise.resolve([]);
        }
      });

      await Promise.all(promises);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  // 특정 프로젝트의 신청자 수 조회
  const getApplicantCount = (projectId) => {
    return projectApplicants[projectId]?.length || 0;
  };

  // 특정 프로젝트의 신청자 목록 조회
  const getApplicants = (projectId) => {
    return projectApplicants[projectId] || [];
  };

  return {
    projectApplicants,
    isLoading,
    error,
    fetchProjectApplicants,
    fetchMultipleProjectApplicants,
    getApplicantCount,
    getApplicants,
  };
}