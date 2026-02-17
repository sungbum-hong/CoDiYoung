
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const AttendanceCalendar = ({ year, month, checkedDates, today }: { year: number; month: number; checkedDates: number[]; today: number }) => {
  // Get the number of days in the month
  const daysInMonth = new Date(year, month, 0).getDate();
  // Get the day of the week for the 1st of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

  // Generate calendar days
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Padding for empty slots
  }
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Month Header */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronLeftIcon className="w-5 h-5 text-gray-500" />
        </button>
        <h2 className="text-lg font-bold">
          {year}. {month}
        </h2>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <ChevronRightIcon className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Week Header */}
      <div className="grid grid-cols-7 mb-4">
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day} className="text-center text-sm font-bold text-gray-400">
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid */}
      <div className="grid grid-cols-7 gap-y-6">
        {days.map((day, index) => {
          if (!day) return <div key={`empty-${index}`} />;
          
          const isToday = day === today;
          const isChecked = checkedDates.includes(day);

          return (
            <div key={day} className="flex justify-center items-center">
              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium
                  ${
                    isToday
                      ? 'bg-[#FF4081] text-white' // Today (Hot Pink)
                      : isChecked
                      ? 'bg-[#FF80AB] text-white' // Checked (Lighter Pink)
                      : 'text-gray-700'
                  }
                `}
              >
                {day}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AttendanceCalendar;
