import { useState } from "react";
import { CalendarIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../../utils/colors.js";
import Button from "../../../ui/Button";
import { ProjectService } from "../../../services/projectService.js";
import { StudyService } from "../../../services/studyService.js";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import BaseModal from "../../../ui/BaseModal";

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

// 프로젝트용 날짜 선택 모달
function ProjectDatePickerModal({ isOpen, onClose, selectedDate, onDateChange }) {
  const [tempDate, setTempDate] = useState(selectedDate || new Date());
  const [viewDate, setViewDate] = useState(selectedDate || new Date());

  const handleDateChange = (date) => {
    setTempDate(date);
    setViewDate(date);
  };

  const handleConfirm = () => {
    onDateChange(tempDate);
    onClose();
  };

  const handleCancel = () => {
    setTempDate(selectedDate || new Date());
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleCancel}
      title="모집 마감일 선택"
      size="CUSTOM"
      style={{
        width: '420px',
        height: 'auto',
        maxWidth: '90vw',
        border: 'none',
        boxShadow: 'none',
      }}
    >
      <div className="p-2 flex flex-col items-center gap-4">
        {/* 안내 메시지 */}
        <div className="text-sm text-gray-600 text-center px-4">
          모집 기간은 오늘부터 최대 30일까지 설정할 수 있습니다.
        </div>
        
        <div className="datepicker-wrapper">
          <DatePicker
            selected={tempDate}
            onChange={handleDateChange}
            inline
            locale={ko}
            calendarClassName="custom-calendar"
            formatWeekDay={(nameOfDay) => nameOfDay.charAt(0)}
            fixedHeight={true}
            minDate={new Date()} // 오늘 이후 날짜만 선택 가능
            maxDate={(() => {
              const maxDate = new Date();
              maxDate.setDate(maxDate.getDate() + 30); // 오늘부터 30일 후까지
              return maxDate;
            })()} // 최대 30일 후까지 선택 가능
            onMonthChange={(d) => setViewDate(d)}
            onYearChange={(d) => setViewDate(d)}
            renderCustomHeader={({
              date,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div className="custom-header flex items-center justify-between px-4 py-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="nav-button"
                >
                  {'<'}
                </button>
                <div className="month-year text-white font-semibold">
                  {date.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                  })}
                </div>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="nav-button"
                >
                  {'>'}
                </button>
              </div>
            )}
            dayClassName={(date) => {
              const sameMonth =
                date.getMonth() === viewDate.getMonth() &&
                date.getFullYear() === viewDate.getFullYear();
              return sameMonth ? 'regular-day' : 'outside-day';
            }}
          />
        </div>

        <div className="flex gap-2 justify-end w-full px-10">
          <Button
            variant="outline"
            onClick={handleCancel}
            style={{
              width: '60px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 12px',
            }}
          >
            취소
          </Button>
          <Button
            variant="secondary"
            onClick={handleConfirm}
            style={{
              width: '60px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 12px',
            }}
          >
            확인
          </Button>
        </div>
      </div>

      {/* DatePicker 커스텀 스타일 */}
      <style jsx global>{`
        .custom-calendar {
          border: none;
          border-radius: 12px;
          font-family: inherit;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-height: 400px;
        }

        .custom-calendar .react-datepicker__header {
          background-color: ${COLORS.PRIMARY};
          border-bottom: 1px solid ${COLORS.PRIMARY};
          border-radius: 12px 12px 0 0;
          padding: 16px 8px;
        }

        .custom-calendar .react-datepicker__day-name {
          color: white;
          font-weight: 600;
          width: 40px;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
        }

        .custom-calendar .react-datepicker__day {
          width: 40px;
          height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 3px;
          border-radius: 4px;
          transition: all 0.2s ease;
          font-size: 16px;
        }

        .custom-calendar .regular-day {
          color: #111827;
        }

        .custom-calendar .outside-day {
          color: #9ca3af;
          opacity: 0.5;
        }

        .custom-calendar .outside-day.react-datepicker__day--selected,
        .custom-calendar .outside-day.react-datepicker__day--keyboard-selected {
          background: transparent !important;
          color: #9ca3af !important;
          font-weight: normal !important;
          outline: none !important;
        }

        .custom-calendar .outside-day:hover {
          background: transparent;
          color: #9ca3af;
          opacity: 0.6;
        }

        .custom-calendar .react-datepicker__day--selected:not(.outside-day),
        .custom-calendar .react-datepicker__day--keyboard-selected:not(.outside-day) {
          background-color: ${COLORS.PRIMARY};
          color: white;
          border-radius: 50%;
          font-weight: bold;
        }

        /* 30일 이후 날짜들 (비활성화된 날짜) */
        .custom-calendar .react-datepicker__day--disabled {
          color: #d1d5db !important; /* gray-300 */
          background-color: #f9fafb !important; /* gray-50 */
          cursor: not-allowed !important;
          opacity: 0.6 !important;
        }

        .custom-calendar .react-datepicker__day--disabled:hover {
          background-color: #f9fafb !important;
          color: #d1d5db !important;
        }

        .custom-header .nav-button {
          background: none;
          border: none;
          color: white;
          font-size: 18px;
          cursor: pointer;
          padding: 4px 8px;
          border-radius: 4px;
          transition: background-color 0.2s;
        }

        .custom-header .nav-button:hover {
          background-color: rgba(255, 255, 255, 0.2);
        }

        .custom-header .nav-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </BaseModal>
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
    deadline: null, // 모집마감일 추가
    position: [], // 배열로 변경
    tech: [], // 배열로 변경
    slogan: '',
    motivation: '',
    openTalkLink: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // 이미지 업로드 관련 상태
  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [imageUploadLoading, setImageUploadLoading] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // 날짜 선택 관련 핸들러
  const handleDateClick = () => {
    setIsDatePickerOpen(true);
  };

  const handleDatePickerClose = () => {
    setIsDatePickerOpen(false);
  };

  const handleDateChange = (date) => {
    handleInputChange('deadline', date);
  };

  // 날짜 포맷팅 함수
  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // 이미지 업로드 관련 함수들
  const validateImageFile = (file) => {
    // 파일 타입 검증
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('JPG, PNG, GIF, WEBP 형식의 이미지만 업로드 가능합니다.');
      return false;
    }

    // 파일 크기 검증 (5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      alert('이미지 크기는 5MB 이하여야 합니다.');
      return false;
    }

    return true;
  };

  const handleImageUpload = async (file) => {
    if (!validateImageFile(file)) return;

    setImageUploadLoading(true);
    try {
      console.log('=== 이미지 업로드 시작 ===');
      console.log('파일 정보:', {
        name: file.name,
        size: file.size,
        type: file.type
      });

      // StudyService의 이미지 업로드 기능 사용
      const uploadResult = await StudyService.uploadImage(file);
      console.log('이미지 업로드 결과:', uploadResult);

      setUploadedImage(uploadResult);

      // 미리보기 생성
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);

      console.log('이미지 업로드 완료');
    } catch (error) {
      console.error('이미지 업로드 에러:', error);
      alert('이미지 업로드에 실패했습니다: ' + error.message);
    } finally {
      setImageUploadLoading(false);
    }
  };

  // 드래그 앤 드롭 핸들러
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleImageUpload(files[0]); // 첫 번째 파일만 처리
    }
  };

  // 파일 선택 핸들러
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
    // input 초기화
    e.target.value = '';
  };

  // 이미지 제거
  const handleImageRemove = () => {
    setUploadedImage(null);
    setImagePreview(null);
  };

  // 카카오톡 오픈채팅 링크 유효성 검사
  const validateKakaoOpenTalkLink = (url) => {
    if (!url.trim()) return true; // 빈 값은 허용
    
    const kakaoOpenTalkPattern = /^https:\/\/open\.kakao\.com\/o\/[a-zA-Z0-9]+$/;
    return kakaoOpenTalkPattern.test(url);
  };

  const handleCreateProject = async () => {
    if (!formData.projectName.trim()) {
      alert('프로젝트 명을 입력해주세요.');
      return;
    }

    // 오픈톡 링크 유효성 검사
    if (formData.openTalkLink && !validateKakaoOpenTalkLink(formData.openTalkLink)) {
      alert('올바른 카카오톡 오픈채팅 링크를 입력해주세요.\n예: https://open.kakao.com/o/g6RZJeyg');
      return;
    }

    const token = localStorage.getItem('auth_token');

    if (!token) {
      alert('로그인이 필요합니다. 다시 로그인해주세요.');
      return;
    }

    setIsLoading(true);
    
    try {
      const projectData = {
        title: formData.projectName || "",
        description: formData.motivation || "",
        imageKey: uploadedImage?.key || "", 
        slogan: formData.slogan || "",
        capacity: formData.participants || 1,
        positions: formData.position || [],
        techs: formData.tech || [],
        questions: formData.slogan ? [formData.slogan] : [],
        kakaoLink: formData.openTalkLink || ""
      };

      console.log('===== 프로젝트 생성 API 호출 =====');
      console.log('API 엔드포인트: POST /api/project/create');
      console.log('전송할 프로젝트 데이터:', JSON.stringify(projectData, null, 2));
      console.log('포지션 배열:', formData.position);
      console.log('기술스택 배열:', formData.tech);
      console.log('참여인원:', formData.participants);

      const response = await ProjectService.createProject(projectData);
      
      console.log('===== API 응답 =====');
      console.log('프로젝트 생성 응답:', response);
      console.log('응답 상태:', response?.status || 'undefined');
      
      setIsSuccess(true);
      
      // 성공 후 새로고침으로 프로젝트 목록 갱신
      setTimeout(() => {
        window.location.reload(); // 새로고침으로 최신 데이터 반영
      }, 2000);
      
    } catch (error) {
      console.log('===== API 에러 =====');
      console.error('프로젝트 생성 에러:', error);
      console.error('에러 메시지:', error.message);
      console.error('에러 스택:', error.stack);
      alert('프로젝트 생성에 실패했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-sm mb-4 font-medium text-center">프로젝트 개설</h2>

      <div className="border-2 rounded-lg p-6 flex flex-col items-center gap-4" style={{ borderColor: COLORS.PRIMARY }}>
        {/* 이미지 업로드 영역 */}
        <div 
          className={`w-full h-40 border-2 rounded-md flex items-center justify-center relative cursor-pointer transition-all duration-200 ${
            isDragOver ? 'border-dashed scale-105' : 'border-solid'
          }`}
          style={{ 
            borderColor: isDragOver ? COLORS.PRIMARY : COLORS.PRIMARY,
            backgroundColor: isDragOver ? `${COLORS.PRIMARY}10` : 'transparent'
          }}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById('imageFileInput').click()}
        >
          {imageUploadLoading ? (
            <div className="flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: COLORS.PRIMARY }}></div>
              <p className="mt-2 text-sm" style={{ color: COLORS.GRAY_400 }}>업로드 중...</p>
            </div>
          ) : imagePreview ? (
            <div className="relative w-full h-full">
              <img 
                src={imagePreview} 
                alt="업로드된 이미지" 
                className="w-full h-full object-cover rounded-md"
              />
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageRemove();
                }}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <p className="text-sm text-center" style={{ color: COLORS.GRAY_400 }}>
                {isDragOver ? '파일을 여기에 놓으세요' : '이미지 업로드'}
              </p>
            </div>
          )}
          
          {/* 숨겨진 파일 input */}
          <input
            id="imageFileInput"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
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
        
        {/* 모집 마감일 선택 */}
        <button
          type="button"
          onClick={handleDateClick}
          className="w-full border-2 rounded-md p-2 text-center bg-white flex items-center justify-between"
          style={{ 
            borderColor: COLORS.PRIMARY, 
            color: formData.deadline ? 'black' : COLORS.GRAY_400 
          }}
        >
          <span className="flex-1">
            {formData.deadline ? formatDate(formData.deadline) : "모집 마감일을 선택해주세요 (최대 30일)"}
          </span>
          <CalendarIcon className="w-5 h-5" style={{ color: COLORS.PRIMARY }} />
        </button>
        
        {/* 포지션 드롭다운 */}
        <MultiSelectDropdown
          options={POSITION_OPTIONS}
          value={formData.position}
          onChange={(value) => handleInputChange('position', value)}
          placeholder="포지션을 선택해주세요 (다중선택 가능)"
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
        <div className="w-full">
          <input
            type="url"
            placeholder="카카오톡 오픈채팅 링크 (예: https://open.kakao.com/o/g6RZJeyg)"
            value={formData.openTalkLink}
            onChange={(e) => handleInputChange('openTalkLink', e.target.value)}
            className={`w-full border-2 rounded-md p-2 text-center placeholder-[var(--color-gray-400)] ${
              formData.openTalkLink && !validateKakaoOpenTalkLink(formData.openTalkLink)
                ? 'border-red-500 bg-red-50' 
                : 'border-[var(--color-primary)]'
            }`}
          />
          {formData.openTalkLink && !validateKakaoOpenTalkLink(formData.openTalkLink) && (
            <p className="text-red-500 text-xs mt-1 text-center">
              올바른 카카오톡 오픈채팅 링크를 입력해주세요
            </p>
          )}
          <p className="text-gray-500 text-xs mt-1 text-center">
            형식: https://open.kakao.com/o/xxxxxxx
          </p>
        </div>

        {/* 성공 메시지 */}
        {isSuccess && (
          <div className="w-full text-center p-4 rounded-md" style={{ backgroundColor: `${COLORS.PRIMARY}20`, color: COLORS.PRIMARY }}>
            프로젝트 생성 완료! 페이지를 새로고침합니다...
          </div>
        )}


        {/* 버튼 영역 */}
        <div className="flex justify-between w-full mt-4 gap-2">
          <Button 
            variant="secondary"
            onClick={handleCreateProject}
            disabled={isLoading || isSuccess}
            className="flex-1"
          >
            {isLoading ? '생성 중...' : '개설'}
          </Button>
          <Button 
            variant="outline"
            onClick={onBack}
            disabled={isLoading}
            className="flex-1"
          >
            취소
          </Button>
        </div>
      </div>

      {/* 날짜 선택 모달 */}
      <ProjectDatePickerModal
        isOpen={isDatePickerOpen}
        onClose={handleDatePickerClose}
        selectedDate={formData.deadline}
        onDateChange={handleDateChange}
      />
    </div>
  );
}