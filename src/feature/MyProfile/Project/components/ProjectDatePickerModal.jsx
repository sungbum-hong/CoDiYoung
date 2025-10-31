import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import BaseModal from "../../../../ui/BaseModal";
import Button from "../../../../ui/Button";
import { COLORS } from "../../../../constants/colors.js";

export default function ProjectDatePickerModal({ isOpen, onClose, selectedDate, onDateChange }) {
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
      <style>{`
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

        .custom-calendar .react-datepicker__day--disabled {
          color: #d1d5db !important;
          background-color: #f9fafb !important;
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