import { useState } from "react";

export function useApplicationForm() {
  const [formData, setFormData] = useState({
    question: "",
    answers: {}, // 객체 형태로 변경: {questionId: answer}
    position: "",
    tech: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const errors = [];
    
    // answers가 객체 형태로 있으면 각 답변 검증, 없으면 기본 question 검증
    if (formData.answers && typeof formData.answers === 'object' && Object.keys(formData.answers).length > 0) {
      const emptyAnswers = Object.values(formData.answers).some(answer => !answer?.trim());
      if (emptyAnswers) {
        errors.push("모든 질문에 답변을 입력해주세요");
      }
    } else {
      if (!formData.question.trim()) errors.push("지원 동기를 입력해주세요");
    }
    
    if (!formData.position) errors.push("포지션을 선택해주세요");
    if (formData.tech.length === 0) errors.push("기술을 선택해주세요");
    
    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setFormData({
      question: "",
      answers: {}, // 객체 형태로 초기화
      position: "",
      tech: []
    });
  };

  return {
    formData,
    handleInputChange,
    validateForm,
    resetForm
  };
}