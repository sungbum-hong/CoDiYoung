import BaseModal from "../../../ui/BaseModal.jsx";
import Button from "../../../ui/Button.jsx";
import { COLORS } from "../../../utils/colors.js";
import Dropdown from "./Dropdown.jsx";
import MultiSelectDropdown from "./MultiSelectDropdown.jsx";
import { POSITION_OPTIONS, TECH_OPTIONS } from "../constants/applicationOptions.js";
import { useApplicationForm } from "../hooks/useApplicationForm.js";
import { useTextareaResize } from "../hooks/useTextareaResize.js";
import { useApplicationSubmit } from "../hooks/useApplicationSubmit.js";

export default function ApplicationModal({ onClose, projectName = "프로젝트", projectId }) {
  const { formData, handleInputChange, validateForm, resetForm } = useApplicationForm();
  const { handleTextareaChange, handleFocus, handleBlur } = useTextareaResize();
  const { isSubmitting, isCompleted, submitApplication, closeSuccess } = useApplicationSubmit();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const success = await submitApplication(projectId, formData);
    if (success) {
      resetForm();
    }
  };

  const handleCloseSuccess = () => {
    closeSuccess();
    onClose();
  };

  return (
    <>
      {/* 신청 폼 모달 */}
      <BaseModal 
        isOpen={!isCompleted} 
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
            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.GRAY_700 }}>
              질문
            </label>
            <textarea
              className="question-textarea w-full border-2 rounded-md p-3 resize-none transition-all duration-200 focus:outline-none min-h-[44px] overflow-hidden"
              style={{ 
                borderColor: COLORS.PRIMARY,
                color: 'black'
              }}
              value={formData.question}
              onChange={(e) => handleTextareaChange(e, (value) => handleInputChange('question', value))}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder="질문을 입력해주세요"
              disabled={isSubmitting}
              rows={1}
            />
          </div>

          {/* 포지션 선택 */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.GRAY_700 }}>
              포지션
            </label>
            <Dropdown
              options={POSITION_OPTIONS}
              value={formData.position}
              onChange={(value) => handleInputChange("position", value)}
              placeholder="포지션을 선택해주세요"
              className="w-full"
            />
          </div>

          {/* 기술 다중선택 */}
          <div>
            <label className="block text-sm font-medium mb-2" style={{ color: COLORS.GRAY_700 }}>
              기술
            </label>
            <MultiSelectDropdown
              options={TECH_OPTIONS}
              value={formData.tech}
              onChange={(value) => handleInputChange("tech", value)}
              placeholder="기술을 선택해주세요 (다중선택 가능)"
              className="w-full"
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
              variant="outline"
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

      {/* 신청완료 모달 */}
      <BaseModal 
        isOpen={isCompleted} 
        onClose={handleCloseSuccess}
        style={{ 
          width: "400px", 
          height: "280px",
          maxWidth: "90vw"
        }}
      >
        <div className="bg-white rounded-2xl p-8 relative h-full flex flex-col justify-center items-center">
          <h2 className="text-xl font-bold text-center mb-4" style={{ color: COLORS.PRIMARY }}>
            신청완료
          </h2>
          <Button
            variant="secondary"
            onClick={handleCloseSuccess}
            className="px-8"
          >
            확인
          </Button>
        </div>
      </BaseModal>
    </>
  );
}