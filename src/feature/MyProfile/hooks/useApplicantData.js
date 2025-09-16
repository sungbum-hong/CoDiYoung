import { useState } from "react";
import { ProjectService } from "../../../services/projectService.js";
import { MockProjectService, USE_MOCK_DATA } from "../../../mock-logic/index.js";

export function useApplicantData() {
  const [projectApplicants, setProjectApplicants] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // 프로젝트 신청자 조회
  const fetchProjectApplicants = async (projectId) => {
    if (!projectId) return [];

    try {
      setIsLoading(true);
      const response = USE_MOCK_DATA
        ? await MockProjectService.getProjectApplicants(projectId)
        : await ProjectService.getProjectApplicants(projectId);
      
      console.log(`프로젝트 ${projectId} 신청자 응답:`, response);
      
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
      
      // 신청자가 없는 경우도 정상적인 상황
      if (
        error.message.includes("신청자가 없습니다") ||
        error.message.includes("404")
      ) {
        console.log(`프로젝트 ${projectId}에 신청자가 없음 - 정상 상황`);
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
          console.log(`프로젝트 ID가 null입니다:`, project.title);
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