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
      console.log("===== 진행 프로젝트 API 호출 =====");
      console.log("API 엔드포인트: GET /api/project/find/progressing");
      
      const response = await ProjectService.getProgressingProjects();
      
      console.log("===== 진행 프로젝트 API 응답 =====");
      console.log("응답 데이터:", response);
      console.log("응답 타입:", typeof response);
      console.log("배열 여부:", Array.isArray(response));
      
      if (response) {
        const projectsArray = Array.isArray(response) ? response : [response];
        console.log("설정할 프로젝트 배열:", projectsArray);
        setProgressingProjects(projectsArray);
        return projectsArray;
      } else {
        console.log("응답이 없어서 빈 배열로 설정");
        setProgressingProjects([]);
        return [];
      }
    } catch (error) {
      console.log("===== 진행 프로젝트 API 에러 =====");
      console.error("진행 프로젝트 조회 실패:", error);
      console.error("에러 메시지:", error.message);
      setError(error);
      setProgressingProjects([]);
      return [];
    }
  };

  // 신청 프로젝트 조회
  const fetchAppliedProjects = async () => {
    try {
      console.log("===== 신청 프로젝트 API 호출 =====");
      console.log("API 엔드포인트: GET /api/project/find/applied");
      
      const response = await ProjectService.getAppliedProjects();
      
      console.log("===== 신청 프로젝트 API 응답 =====");
      console.log("응답 데이터:", response);
      console.log("응답 타입:", typeof response);
      console.log("배열 여부:", Array.isArray(response));
      
      if (response) {
        const projectsArray = Array.isArray(response) ? response : [response];
        console.log("설정할 신청 프로젝트 배열:", projectsArray);
        setAppliedProjects(projectsArray);
        return projectsArray;
      } else {
        console.log("신청 프로젝트 응답이 없어서 빈 배열로 설정");
        setAppliedProjects([]);
        return [];
      }
    } catch (error) {
      console.log("===== 신청 프로젝트 API 에러 =====");
      console.error("신청 프로젝트 조회 실패:", error);
      console.error("에러 메시지:", error.message);
      
      // 404나 "신청중인 프로젝트가 없습니다" 에러는 정상 상황
      if (
        error.message.includes("신청중인 프로젝트가 없습니다") ||
        error.message.includes("404")
      ) {
        console.log("신청 프로젝트가 없음 - 정상 상황");
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
    console.log("===== useProjectData 초기화 =====");
    console.log("실제 API 연동으로 프로젝트 데이터 조회 시작");
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