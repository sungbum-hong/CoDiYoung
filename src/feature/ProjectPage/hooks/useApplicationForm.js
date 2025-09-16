import { useState } from "react";

export function useApplicationForm() {
  const [formData, setFormData] = useState({
    question: "",
    position: "",
    tech: []
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const errors = [];
    if (!formData.question.trim()) errors.push("질문을 입력해주세요");
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