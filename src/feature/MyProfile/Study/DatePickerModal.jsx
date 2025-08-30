import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/locale';
import BaseModal from '../../../ui/BaseModal';
import Button from '../../../ui/Button';
import { COLORS } from '../../../utils/colors';

export default function DatePickerModal({ isOpen, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  // ✅ 현재 화면에 보이는 달을 추적
  const [viewDate, setViewDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
    // 선택 시 화면 달도 그 날짜가 포함된 달로 맞춤 (원치 않으면 이 줄 제거)
    setViewDate(date);
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
        boxShadow: 'none',
      }}
    >
      <div className="p-2 flex flex-col items-center gap-4">
        {/* DatePicker */}
        <div className="datepicker-wrapper">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            locale={ko}
            calendarClassName="custom-calendar"
            formatWeekDay={(nameOfDay) => nameOfDay.charAt(0)}
            fixedHeight={true}

            // 보이는 달 변경 추적
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

            /* ✅ 보이는 달(viewDate) 기준으로 클래스 구분 */
            dayClassName={(date) => {
              const sameMonth =
                date.getMonth() === viewDate.getMonth() &&
                date.getFullYear() === viewDate.getFullYear();
              return sameMonth ? 'regular-day' : 'outside-day';
            }}
          />
        </div>

        {/* 버튼 영역 */}
        <div className="flex gap-2 justify-end w-full px-10">
          <Button
            variant="outline"
            onClick={handleConfirm}
            style={{
              width: '60px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 12px',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = COLORS.PRIMARY;
            }}
          >
            확인
          </Button>
        </div>
      </div>

      {/* DatePicker 커스텀 스타일 */}
      <style jsx global>{`
        :root {
          --calendar-height: 400px;
        }

        .custom-calendar {
          border: none;
          border-radius: 12px;
          font-family: inherit;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-height: var(--calendar-height);
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

        /* 현재 보이는 달 날짜(진하게) */
        .custom-calendar .regular-day {
          color: #111827; /* gray-900 */
        }

        /* 다른 달 날짜(흐릿) */
        .custom-calendar .outside-day {
          color: #9ca3af; /* gray-400 */
          opacity: 0.5;
        }

        /* ✅ 다른 달 날짜가 선택/포커스되어도 하이라이트 제거 */
        .custom-calendar .outside-day.react-datepicker__day--selected,
        .custom-calendar .outside-day.react-datepicker__day--keyboard-selected {
          background: transparent !important;
          color: #9ca3af !important;
          font-weight: normal !important;
          outline: none !important;
        }

        /* hover도 흐릿 유지 */
        .custom-calendar .outside-day:hover {
          background: transparent;
          color: #9ca3af;
          opacity: 0.6;
        }

        /* 보이는 달에서 선택/포커스된 날짜 */
        .custom-calendar .react-datepicker__day--selected:not(.outside-day),
        .custom-calendar .react-datepicker__day--keyboard-selected:not(.outside-day) {
          background-color: ${COLORS.PRIMARY};
          color: white;
          border-radius: 50%;
          font-weight: bold;
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
