import { useState } from "react";
import BaseModal from "../../../ui/BaseModal.jsx";
import FormInput from "../../../ui/FormInput.jsx";
import Button from "../../../ui/Button.jsx";
import { COLORS } from "../../../utils/colors.js";
import { MockProjectService, USE_MOCK_DATA } from "../../../mock-logic/index.js";
// import { ProjectService } from "../../../services/projectService.js";

// 드롭다운 옵션 정의
const POSITION_OPTIONS = [
  { value: "frontend", label: "프론트엔드" },
  { value: "backend", label: "백엔드" },
  { value: "fullstack", label: "풀스택" },
  { value: "design", label: "디자인" },
  { value: "mobile", label: "모바일" },
  { value: "data", label: "데이터분석" }
];

const TECH_OPTIONS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue.js" },
  { value: "angular", label: "Angular" },
  { value: "nodejs", label: "Node.js" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "spring", label: "Spring" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "flutter", label: "Flutter" },
  { value: "react-native", label: "React Native" },
  { value: "figma", label: "Figma" }
];

// 커스텀 드롭다운 컴포넌트
function Dropdown({ options, value, onChange, placeholder, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-2 rounded-md p-2 text-left bg-white flex items-center justify-between"
        style={{ borderColor: COLORS.PRIMARY, color: selectedOption ? 'black' : COLORS.GRAY_400 }}
      >
        <span className="flex-1">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="ml-2" style={{ color: COLORS.PRIMARY }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute z-10 w-full mt-1 bg-white border-2 rounded-md shadow-lg max-h-48 overflow-y-auto"
          style={{ borderColor: COLORS.PRIMARY }}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors duration-150"
              style={{ 
                backgroundColor: value === option.value ? COLORS.PRIMARY : 'transparent',
                color: value === option.value ? 'white' : 'black'
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 다중 선택 드롭다운 컴포넌트
function MultiSelectDropdown({ options, value = [], onChange, placeholder, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabels = value.map(val => 
    options.find(option => option.value === val)?.label
  ).filter(Boolean);

  const toggleOption = (optionValue) => {
    const newValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue];
    onChange(newValue);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full border-2 rounded-md p-2 bg-white flex items-center justify-between min-h-[40px]"
        style={{ borderColor: COLORS.PRIMARY, color: selectedLabels.length > 0 ? 'black' : COLORS.GRAY_400 }}
      >
        <div className="flex-1 text-left">
          {selectedLabels.length > 0 ? (
            <div className="flex flex-wrap gap-1">
              {value.map((val) => {
                const option = options.find(opt => opt.value === val);
                return (
                  <span
                    key={val}
                    className="inline-flex items-center px-2 py-1 text-xs rounded cursor-pointer group"
                    style={{ backgroundColor: COLORS.PRIMARY, color: 'white' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleOption(val);
                    }}
                  >
                    {option?.label}
                    <span className="ml-1 text-xs opacity-70 group-hover:opacity-100">
                      ×
                    </span>
                  </span>
                );
              })}
            </div>
          ) : (
            <span>{placeholder}</span>
          )}
        </div>
        <span className="ml-2" style={{ color: COLORS.PRIMARY }}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute z-10 w-full mt-1 bg-white border-2 rounded-md shadow-lg max-h-48 overflow-y-auto"
          style={{ borderColor: COLORS.PRIMARY }}
        >
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => toggleOption(option.value)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors duration-150 flex items-center"
              style={{ 
                backgroundColor: value.includes(option.value) ? `${COLORS.PRIMARY}20` : 'transparent',
                color: 'black'
              }}
            >
              <span className="mr-2" style={{ color: COLORS.PRIMARY }}>
                {value.includes(option.value) ? '✓' : '○'}
              </span>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ApplicationModal({ onClose, projectName = "프로젝트", projectId }) {
  const [formData, setFormData] = useState({
    question: "",
    position: "",
    tech: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTextareaChange = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
    handleInputChange('question', e.target.value);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    // focus 시 내용에 맞게 높이 조정
    setTimeout(() => {
      const textarea = e.target;
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }, 0);
  };

  const handleBlur = () => {
    setIsFocused(false);
    // focus 해제 시 높이 원상복귀
    setTimeout(() => {
      const textarea = document.querySelector('.question-textarea');
      if (textarea) {
        textarea.style.height = '44px'; // 원래 최소 높이로 복귀
      }
    }, 0);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    if (!projectId) {
      alert("프로젝트 ID가 없습니다.");
      return;
    }

    setIsSubmitting(true);
    
    try {
      // API 스펙에 맞게 데이터 구성
      const applicationData = {
        answer: formData.question,
        position: formData.position,
        techs: formData.tech.join(", ") // 배열을 문자열로 변환
      };

      console.log('신청 데이터:', applicationData);
      console.log('프로젝트 ID:', projectId);
      console.log('Mock 데이터 사용 여부:', USE_MOCK_DATA);
      
      const response = USE_MOCK_DATA 
        ? await MockProjectService.applyToProject(projectId, applicationData)
        : null; // 실제 API는 주석 처리됨
      
      // 실제 API 호출 코드 (주석 처리)
      /*
      const apiResponse = await fetch(`/api/projects/${projectId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
        },
        body: JSON.stringify(applicationData)
      });
      
      if (!apiResponse.ok) {
        const errorText = await apiResponse.text();
        throw new Error(`신청 실패: ${errorText}`);
      }
      
      response = await apiResponse.json();
      */
      
      console.log('신청 응답:', response);
      
      // 성공 처리 - 신청완료 모달 표시
      setIsCompleted(true);
      setIsSubmitting(false);
      
      // 폼 초기화
      setFormData({
        question: "",
        position: "",
        tech: []
      });
      
    } catch (error) {
      console.error('신청 실패:', error);
      alert("신청 중 오류가 발생했습니다: " + error.message);
      setIsSubmitting(false);
    }
  };

  const handleCloseSuccess = () => {
    setIsCompleted(false);
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
              onChange={handleTextareaChange}
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