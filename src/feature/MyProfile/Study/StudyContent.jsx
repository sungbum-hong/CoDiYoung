import { COLORS } from '../../../utils/colors';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BaseModal from '../../../ui/BaseModal';
import Button from '../../../ui/Button';
import { CalendarIcon } from '@heroicons/react/24/outline';
import DatePickerModal from './DatePickerModal';

export default function StudyContent() {
  const totalItems = 24;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (index) => {
    setSelectedItem(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const handleCalendarClick = () => {
    setIsDatePickerOpen(true);
  };

  const closeDatePicker = () => {
    setIsDatePickerOpen(false);
  };

  const handleEdit = () => {
    navigate(`/write/${selectedItem + 1}`);
  };

  const handleDelete = () => {
    console.log(`아이템 ${selectedItem + 1} 삭제`);
  };

  return (
    <main className="flex-1 p-4 md:p-6 overflow-auto">
      <div className="w-full h-full">
        {/* 상단 달력 아이콘 */}
        <div className="flex justify-end mb-4">
          <button 
            onClick={handleCalendarClick}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200"
            style={{
              backgroundColor: COLORS.WHITE,
              border: `2px solid ${COLORS.PRIMARY}`,
              color: COLORS.PRIMARY
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = COLORS.PRIMARY;
              e.target.style.color = COLORS.WHITE;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = COLORS.WHITE;
              e.target.style.color = COLORS.PRIMARY;
            }}
            title="달력"
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>
        
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 h-full"
          style={{
            gap: 'min(3vw, 20px)',
            gridTemplateRows: 'repeat(6, 1fr)'
          }}
        >
          {[...Array(totalItems)].map((_, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(index)}
              className="aspect-square rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all duration-200 hover:shadow-md hover:scale-105"
              style={{
                borderColor: COLORS.GRAY_300,
                backgroundColor: COLORS.WHITE,
                minWidth: 'min(15vw, 120px)',
                maxWidth: 'min(20vw, 150px)'
              }}
            >
              <span className="text-xs sm:text-sm text-gray-400">
                {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={`아이템 ${selectedItem + 1}`}
        size="CUSTOM"
        style={{
          width: '500px',
          height: '500px',
          maxWidth: '500px'
        }}
      >
        <div className="relative w-full h-full p-6">
          <div className="mb-4">
          
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleEdit}
              style={{
                width: '120px',
                height: '40px'
              }}
            >
              수정
            </Button>
            <Button 
              variant="outline" 
              onClick={closeModal}
              style={{
                width: '120px',
                height: '40px'
              }}
            >
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>

      {/* 달력 모달 */}
      <DatePickerModal 
        isOpen={isDatePickerOpen}
        onClose={closeDatePicker}
      />
    </main>
  );
}