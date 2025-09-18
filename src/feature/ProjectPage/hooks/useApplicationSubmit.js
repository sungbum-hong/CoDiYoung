import { useState } from "react";
import { ProjectService } from "../../../services/projectService.js";

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
        projectId: parseInt(projectId),
        position: formData.position,
        techs: formData.tech.join(", "),
        answers: [
          {
            questionId: 1, // 임시 questionId (실제로는 동적으로 설정해야 함)
            answer: formData.question
          }
        ]
      };

      console.log('===== 프로젝트 신청 API 호출 =====');
      console.log(`API 엔드포인트: POST /api/project/apply/${projectId}`);
      console.log('신청 데이터:', JSON.stringify(applicationData, null, 2));
      console.log('프로젝트 ID:', projectId);
      
      const response = await ProjectService.applyToProject(projectId, applicationData);
      
      console.log('===== 프로젝트 신청 API 응답 =====');
      console.log('신청 응답:', response);
      
      setIsCompleted(true);
      setIsSubmitting(false);
      return true;
      
    } catch (error) {
      console.log('===== 프로젝트 신청 API 에러 =====');
      console.error('신청 실패:', error);
      console.error('에러 메시지:', error.message);
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