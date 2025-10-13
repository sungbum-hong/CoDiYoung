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
      // formData.answers가 객체 형태 {questionId: answer}인지 확인
      let answers = [];
      
      if (formData.answers) {
        if (typeof formData.answers === 'object' && !Array.isArray(formData.answers)) {
          // 객체 형태: {questionId: answer}
          answers = Object.entries(formData.answers)
            .filter(([questionId, answer]) => answer && answer.trim()) // 빈 답변 필터링
            .map(([questionId, answer]) => ({
              questionId: parseInt(questionId),
              answer: answer.trim()
            }));
        } else if (Array.isArray(formData.answers)) {
          // 배열 형태: ["answer1", "answer2"]
          answers = formData.answers
            .filter(answer => answer && answer.trim()) // 빈 답변 필터링
            .map((answer, index) => ({
              questionId: index + 1, // 임시 처리
              answer: answer.trim()
            }));
        }
      } else if (formData.question && formData.question.trim()) {
        // 기존 단일 질문 형태
        answers = [{
          questionId: 1,
          answer: formData.question.trim()
        }];
      }

      // 답변이 없는 경우 에러
      if (answers.length === 0) {
        alert("모든 질문에 답변을 입력해주세요.");
        setIsSubmitting(false);
        return false;
      }

      const applicationData = {
        projectId: parseInt(projectId),
        position: formData.position,
        techs: formData.tech.join(", "),
        answers: answers
      };

      
      const response = await ProjectService.applyToProject(projectId, applicationData);
      
      
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