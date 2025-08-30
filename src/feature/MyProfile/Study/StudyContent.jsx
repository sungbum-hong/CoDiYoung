import { COLORS } from '../../../utils/colors';
import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseModal from '../../../ui/BaseModal';
import Button from '../../../ui/Button';
import { CalendarIcon } from '@heroicons/react/24/outline';
import DatePickerModal from './DatePickerModal';

export default function StudyContent() {
  const TOTAL_ITEMS = 30; // 30개 고정
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = useCallback((index) => {
    setSelectedItem(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedItem(null);
  }, []);

  const handleCalendarClick = useCallback(() => {
    setIsDatePickerOpen(true);
  }, []);

  const closeDatePicker = useCallback(() => {
    setIsDatePickerOpen(false);
  }, []);

  const handleEdit = useCallback(() => {
    if (selectedItem != null) navigate(`/write/${selectedItem + 1}`);
  }, [navigate, selectedItem]);

  const handleDelete = useCallback(() => {
    if (selectedItem != null) {
      console.log(`아이템 ${selectedItem + 1} 삭제`);
      // TODO: 실제 삭제 로직 연동
    }
  }, [selectedItem]);

  const onCalendarEnter = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.PRIMARY;
    el.style.color = COLORS.WHITE;
  };
  const onCalendarLeave = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.WHITE;
    el.style.color = COLORS.PRIMARY;
  };

  const onItemKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleItemClick(index);
    }
  };

  return (
    <main className="flex-1 py-6 px-24 overflow-auto">
      <div className="w-full h-full">
        {/* 상단 달력 아이콘 */}
        <div className="flex justify-end mb-12">
          <button
            onClick={handleCalendarClick}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: COLORS.WHITE,
              border: `2px solid ${COLORS.PRIMARY}`,
              color: COLORS.PRIMARY,
            }}
            onMouseEnter={onCalendarEnter}
            onMouseLeave={onCalendarLeave}
            title="달력"
            aria-label="달력 열기"
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 카드 그리드: 가로 5 × 세로 6, 작은 사이즈, 간격 좁게 */}
        <div
          className="grid grid-cols-5 gap-x-2 gap-y-3"
          style={{
            gridTemplateRows: 'repeat(6, 1fr)',
          }}
        >
          {Array.from({ length: TOTAL_ITEMS }).map((_, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`아이템 ${index + 1} 열기`}
              onClick={() => handleItemClick(index)}
              onKeyDown={(e) => onItemKeyDown(e, index)}
              className="w-[90px] h-[90px] rounded-lg border-2 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: COLORS.GRAY_300,
                backgroundColor: COLORS.WHITE,
              }}
            >
              <span className="text-xs text-gray-400">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 상세 모달 */}
      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={selectedItem != null ? `${selectedItem + 1}` : ''}
        size="CUSTOM"
        style={{
          width: 'min(90vw, 500px)',
          height: 'min(80vh, 500px)',
          maxWidth: '500px',
        }}
      >
        <div className="relative w-full h-full p-6">
          {/* TODO: 상세 내용 */}

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
            <Button variant="outline" onClick={handleEdit} style={{ width: '120px', height: '40px' }}>
              수정
            </Button>
            <Button variant="outline" onClick={closeModal} style={{ width: '120px', height: '40px' }}>
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>

      {/* 달력 모달 */}
      <DatePickerModal isOpen={isDatePickerOpen} onClose={closeDatePicker} />
    </main>
  );
}
