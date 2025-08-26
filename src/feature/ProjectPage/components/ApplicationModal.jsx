import { useState } from "react";
import BaseModal from "../../../ui/BaseModal.jsx";
import FormInput from "../../../ui/FormInput.jsx";
import Button from "../../../ui/Button.jsx";
import { COLORS } from "../../../utils/colors.js";

export default function ApplicationModal({ onClose, projectName = "프로젝트" }) {
  const [formData, setFormData] = useState({
    question: "",
    position: ""
  });
  const [errors, setErrors] = useState({
    question: "",
    position: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field) => (e) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // 입력 시 에러 클리어
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.question.trim()) {
      newErrors.question = "질문 답변을 입력해주세요.";
    }
    
    if (!formData.position.trim()) {
      newErrors.position = "희망 포지션을 입력해주세요.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // TODO: 실제 API 호출
      console.log("프로젝트 신청:", formData);
      
      // Mock API 호출 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 성공 처리
      alert("프로젝트 신청이 완료되었습니다!");
      onClose();
    } catch (error) {
      console.error("신청 중 오류:", error);
      alert("신청 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <BaseModal 
      isOpen={true} 
      onClose={onClose}
      className="max-w-md w-full"
      style={{ 
        width: "480px", 
        height: "auto",
        maxWidth: "90vw"
      }}
    >
      <div className="bg-white rounded-2xl p-8 relative">

        {/* 헤더 */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-center mb-2">
            프로젝트 신청
          </h2>
          <p className="text-gray-600 text-center text-sm">
            {projectName}에 참여 신청을 위한 정보를 입력해주세요.
          </p>
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 질문 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              질문
            </label>
            <FormInput
              type="text"
              value={formData.question}
              onChange={handleInputChange("question")}
              error={errors.question}
              disabled={isSubmitting}
              variant="signin"
              size="lg"
            />
          </div>

          {/* 포지션 입력 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              포지션
            </label>
            <FormInput
              type="text"
              value={formData.position}
              onChange={handleInputChange("position")}
              error={errors.position}
              disabled={isSubmitting}
              variant="signin"
              size="lg"
            />
          </div>

          {/* 버튼 영역 */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              variant="secondary"
              disabled={isSubmitting}
              className="flex-1 py-3"
            >
              {isSubmitting ? "신청 중..." : "신청하기"}
            </Button>
            
            <Button
              type="button"
              variant="secondary"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 py-3"
            >
              닫기
            </Button>
          </div>
        </form>
      </div>
    </BaseModal>
  );
}