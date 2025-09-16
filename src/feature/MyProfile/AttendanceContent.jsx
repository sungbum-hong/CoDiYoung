import { useState } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { COLORS } from '../../utils/colors';
import { usePrimaryButtonHover } from '../../hooks/useHoverStyle.js';
import AttendanceStars from './AttendanceStars';
import DatePickerModal from './Study/DatePickerModal';

export default function AttendanceContent() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  
  // 호버 효과 훅 사용
  const primaryButtonHover = usePrimaryButtonHover(COLORS.PRIMARY);

  const handleCalendarClick = () => {
    setIsDatePickerOpen(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  return (
    <div className="bg-white py-6 px-7 min-h-[500px]">
      {/* 헤더 영역 */}
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-xl font-semibold text-gray-800">출석 현황</h2>
        
        {/* 달력 아이콘 */}
        <button 
          onClick={handleCalendarClick}
          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: COLORS.WHITE,
            border: `2px solid ${COLORS.PRIMARY}`,
            color: COLORS.PRIMARY
          }}
          {...primaryButtonHover}
          title="달력 보기"
        >
          <CalendarIcon className="w-5 h-5" />
        </button>
      </div>
      
      {/* 출석 별 표시 */}
      <AttendanceStars />

      {/* 달력 모달 */}
      <DatePickerModal 
        isOpen={isDatePickerOpen}
        onClose={closeDatePicker}
      />
    </div>
  );
}