// 이 파일은 useProjectPageQueries.js의 useProjectApplication으로 대체되었습니다.
// 하위 호환성을 위해 새로운 훅을 래핑하여 기존 API를 유지합니다.

import { useState } from "react";
import { useProjectApplication } from './useProjectPageQueries.js';

export function useApplicationSubmit() {
  const [isCompleted, setIsCompleted] = useState(false);
  const { mutateAsync: applyToProject, isPending: isSubmitting, reset } = useProjectApplication();

  const submitApplication = async (projectId, formData) => {
    
    
    

    if (!projectId) {
      alert("프로젝트 ID가 없습니다.");
      return false;
    }

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
        return false;
      }

      const applicationData = {
        projectId: parseInt(projectId),
        position: formData.position,
        techs: formData.tech, // 배열 그대로 전달 (API 명세서에 따라)
        answers: answers
      };

      
      

      await applyToProject({ projectId, applicationData });

      
      setIsCompleted(true);
      return true;

    } catch (error) {
      
      
      
      
      alert("신청 중 오류가 발생했습니다: " + error.message);
      return false;
    }
  };

  const closeSuccess = () => {
    setIsCompleted(false);
    reset(); // React Query mutation 상태 리셋
  };

  return {
    isSubmitting,
    isCompleted,
    submitApplication,
    closeSuccess
  };
}