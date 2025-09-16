import { useState } from "react";
import { MockProjectService, USE_MOCK_DATA } from "../../../mock-logic/index.js";

export function useApplicationSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const submitApplication = async (projectId, formData) => {
    if (!projectId) {
      alert("프로젝트 ID가 없습니다.");
      return false;
    }

    setIsSubmitting(true);
    
    try {
      const applicationData = {
        answer: formData.question,
        position: formData.position,
        techs: formData.tech.join(", ")
      };

      console.log('신청 데이터:', applicationData);
      console.log('프로젝트 ID:', projectId);
      console.log('Mock 데이터 사용 여부:', USE_MOCK_DATA);
      
      const response = USE_MOCK_DATA 
        ? await MockProjectService.applyToProject(projectId, applicationData)
        : null;
      
      console.log('신청 응답:', response);
      
      setIsCompleted(true);
      setIsSubmitting(false);
      return true;
      
    } catch (error) {
      console.error('신청 실패:', error);
      alert("신청 중 오류가 발생했습니다: " + error.message);
      setIsSubmitting(false);
      return false;
    }
  };

  const closeSuccess = () => {
    setIsCompleted(false);
  };

  return {
    isSubmitting,
    isCompleted,
    submitApplication,
    closeSuccess
  };
}