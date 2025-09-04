import { useState } from "react";
import { COLORS } from "../../../utils/colors.js";
import Button from "../../../ui/Button";

// 드롭다운 옵션 정의
const PARTICIPANT_OPTIONS = [
  { value: 1, label: "1명" },
  { value: 2, label: "2명" },
  { value: 3, label: "3명" },
  { value: 4, label: "4명" },
  { value: 5, label: "5명" },
  { value: 6, label: "6명" },
  { value: 7, label: "7명" },
  { value: 8, label: "8명" },
  { value: 9, label: "9명" },
  { value: 10, label: "10명" }
];

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
        className="w-full border-2 rounded-md p-2 text-center bg-white flex items-center justify-between"
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
            <span className="text-center block">{placeholder}</span>
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

export default function ProjectCreateForm({ onBack }) {
  const [formData, setFormData] = useState({
    projectName: '',
    participants: '',
    position: '',
    tech: [], // 배열로 변경
    slogan: '',
    motivation: '',
    openTalkLink: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-sm mb-4 font-medium text-center">프로젝트 개설</h2>

      <div className="border-2 rounded-lg p-6 flex flex-col items-center gap-4" style={{ borderColor: COLORS.PRIMARY }}>
        {/* 이미지 업로드 영역 */}
        <div className="w-full h-40 border-2 rounded-md flex items-center justify-center" style={{ borderColor: COLORS.PRIMARY, color: COLORS.GRAY_400 }}>
          이미지
        </div>

        {/* 입력 필드 */}
        <input
          type="text"
          placeholder="프로젝트 명을 적어주세요"
          value={formData.projectName}
          onChange={(e) => handleInputChange('projectName', e.target.value)}
          className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)]"
        />
        
        {/* 참여 인원 드롭다운 */}
        <Dropdown
          options={PARTICIPANT_OPTIONS}
          value={formData.participants}
          onChange={(value) => handleInputChange('participants', value)}
          placeholder="참여 인원을 선택해주세요"
          className="w-full"
        />
        
        {/* 포지션 드롭다운 */}
        <Dropdown
          options={POSITION_OPTIONS}
          value={formData.position}
          onChange={(value) => handleInputChange('position', value)}
          placeholder="포지션을 선택해주세요"
          className="w-full"
        />
        
        {/* 기술 다중선택 드롭다운 */}
        <MultiSelectDropdown
          options={TECH_OPTIONS}
          value={formData.tech}
          onChange={(value) => handleInputChange('tech', value)}
          placeholder="기술을 선택해주세요 (다중선택 가능)"
          className="w-full"
        />
        
        <input
          type="text"
          placeholder="프로젝트 슬로건"
          value={formData.slogan}
          onChange={(e) => handleInputChange('slogan', e.target.value)}
          className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)]"
        />
        <textarea
          placeholder="ex) 지원동기"
          value={formData.motivation}
          onChange={(e) => handleInputChange('motivation', e.target.value)}
          className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)] resize-none h-20"
          rows={3}
        />
        <input
          type="url"
          placeholder="오픈톡 링크"
          value={formData.openTalkLink}
          onChange={(e) => handleInputChange('openTalkLink', e.target.value)}
          className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)]"
        />

        {/* 버튼 영역 */}
        <div className="flex justify-between w-full mt-4 gap-2">
          <Button 
            variant="secondary"
            onClick={() => {/* TODO: 실제 프로젝트 생성 로직 */}}
            className="flex-1"
          >
            개설
          </Button>
          <Button 
            variant="outline"
            onClick={onBack}
            className="flex-1"
          >
            취소
          </Button>
        </div>
      </div>
    </div>
  );
}