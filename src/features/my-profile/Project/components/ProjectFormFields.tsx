import { CalendarIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../../../constants/colors";
import Dropdown from "./Dropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";
import { validateKakaoOpenTalkLink } from "../utils/projectValidation";
import { 
  PARTICIPANT_OPTIONS, 
  POSITION_OPTIONS, 
  TECH_OPTIONS 
} from "../constants/projectOptions";

export default function ProjectFormFields({ formData, onInputChange, onDatePickerOpen }: { formData: any; onInputChange: (key: string, value: any) => void; onDatePickerOpen: () => void }) {
  const formatDate = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      {/* 프로젝트명 */}
      <input
        type="text"
        placeholder="프로젝트 명을 적어주세요"
        value={formData.projectName}
        onChange={(e) => onInputChange('projectName', e.target.value)}
        className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)]"
      />

      {/* 프로젝트 내용 */}
      <textarea
        placeholder="프로젝트 내용을 자세히 적어주세요"
        value={formData.description}
        onChange={(e) => onInputChange('description', e.target.value)}
        className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)] resize-none h-20"
        rows={3}
      />
      
      {/* 참여 인원 */}
      <Dropdown
        options={PARTICIPANT_OPTIONS}
        value={formData.participants}
        onChange={(value) => onInputChange('participants', value)}
        placeholder="참여 인원을 선택해주세요"
        className="w-full"
      />
      
      {/* 모집 마감일 */}
      <button
        type="button"
        onClick={onDatePickerOpen}
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
      
      {/* 포지션 */}
      <MultiSelectDropdown
        options={POSITION_OPTIONS}
        value={formData.position}
        onChange={(value) => onInputChange('position', value)}
        placeholder="포지션을 선택해주세요 (다중선택 가능)"
        className="w-full"
      />
      
      {/* 기술스택 */}
      <MultiSelectDropdown
        options={TECH_OPTIONS}
        value={formData.tech}
        onChange={(value) => onInputChange('tech', value)}
        placeholder="기술을 선택해주세요 (다중선택 가능)"
        className="w-full"
      />
      
      {/* 슬로건 */}
      <input
        type="text"
        placeholder="프로젝트 슬로건"
        value={formData.slogan}
        onChange={(e) => onInputChange('slogan', e.target.value)}
        className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)]"
      />

      {/* 질문 */}
      <textarea
        placeholder="지원자에게 물어볼 질문을 적어주세요 (예: 이 프로젝트에 지원한 동기는 무엇인가요?)"
        value={formData.questions}
        onChange={(e) => onInputChange('questions', e.target.value)}
        className="w-full border-2 border-[var(--color-primary)] rounded-md p-2 text-center placeholder-[var(--color-gray-400)] resize-none h-20"
        rows={3}
      />

      {/* 오픈채팅 링크 */}
      <div className="w-full">
        <input
          type="url"
          placeholder="카카오톡 오픈채팅 링크 (선택사항)"
          value={formData.openTalkLink}
          onChange={(e) => onInputChange('openTalkLink', e.target.value)}
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
    </>
  );
}