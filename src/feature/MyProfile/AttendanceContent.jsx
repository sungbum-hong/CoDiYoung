import { useState, useCallback } from 'react';
import { CalendarIcon } from '@heroicons/react/24/outline';
import Button from '../../ui/Button';
import AttendanceStars from './AttendanceStars';
import DatePickerModal from './Study/DatePickerModal';

export default function AttendanceContent() {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // 콜백으로 성능 최적화
  const handleCalendarClick = useCallback(() => {
    setIsDatePickerOpen(true);
  }, []);

  const closeDatePicker = useCallback(() => {
    setIsDatePickerOpen(false);
  }, []);

  return (
    <div className="bg-white py-6 px-7 min-h-[500px]">
      {/* 헤더 영역 - 오른쪽 정렬 */}
      <div className="flex justify-end items-center mb-12">
        {/* 달력 버튼 - 오른쪽에 배치 */}
        <Button
          variant="secondary"
          onClick={handleCalendarClick}
          className="!rounded-full !w-10 !h-10 !p-0 flex items-center justify-center"
          title="달력 보기"
          style={{
            minWidth: '40px',
            minHeight: '40px',
            width: '40px',
            height: '40px',
          }}
        >
          <CalendarIcon className="w-5 h-5" />
        </Button>
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