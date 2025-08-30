import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import BaseModal from '../../../ui/BaseModal';
import Button from '../../../ui/Button';
import { COLORS } from '../../../utils/colors';

export default function DatePickerModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleConfirm = () => {
    console.log('Selected date:', selectedDate);
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title="날짜 선택"
      size="CUSTOM"
      style={{
        width: '420px',
        height: 'auto',
        maxWidth: '90vw',
        border: 'none',
        boxShadow: 'none'
      }}
    >
      <div className="p-2 flex flex-col items-center gap-4">
        {/* DatePicker 컴포넌트 */}
        <div className="datepicker-wrapper">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            locale={ko}
            calendarClassName="custom-calendar"
            formatWeekDay={(nameOfDay) => nameOfDay.charAt(0)}
            renderCustomHeader={({ date, changeYear, changeMonth, decreaseMonth, increaseMonth, prevMonthButtonDisabled, nextMonthButtonDisabled }) => (
              <div className="custom-header flex items-center justify-between px-4 py-2">
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="nav-button"
                >
                  {"<"}
                </button>
                <div className="month-year text-white font-semibold">
                  {date.toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'long'
                  })}
                </div>
                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="nav-button"
                >
                  {">"}
                </button>
              </div>
            )}
            dayClassName={(date) => 
              date.getTime() === selectedDate?.getTime() 
                ? "selected-day" 
                : "regular-day"
            }
          />
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-2 justify-end w-full">
          <Button 
            variant="outline" 
            onClick={onClose}
            style={{
              width: '60px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0'
            }}
          >
            취소
          </Button>
          <Button 
            variant="outline" 
            onClick={handleConfirm}
            style={{
              width: '60px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = COLORS.PRIMARY;
              e.target.style.color = "white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
              e.target.style.color = COLORS.PRIMARY;
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
        }
        
        .custom-calendar .react-datepicker__header {
          background-color: ${COLORS.PRIMARY};
          border-bottom: 1px solid ${COLORS.PRIMARY};
          border-radius: 12px 12px 0 0;
          padding: 16px 8px;
        }
        
        .custom-calendar .react-datepicker__current-month,
        .custom-calendar .react-datepicker__navigation {
          color: white;
          font-size: 18px;
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
        
        .custom-calendar .react-datepicker__day--selected,
        .custom-calendar .react-datepicker__day--keyboard-selected {
          background-color: ${COLORS.PRIMARY};
          color: white;
          border-radius: 50%;
          font-weight: bold;
        }
        
        .custom-calendar .react-datepicker__day:hover:not(.react-datepicker__day--disabled) {
          background-color: ${COLORS.PRIMARY};
          color: white;
          border-radius: 50%;
          opacity: 0.8;
        }
        
        .custom-calendar .react-datepicker__navigation--previous,
        .custom-calendar .react-datepicker__navigation--next {
          border-color: white transparent;
        }
        
        .custom-calendar .react-datepicker__navigation--previous:hover,
        .custom-calendar .react-datepicker__navigation--next:hover {
          border-color: rgba(255, 255, 255, 0.8) transparent;
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