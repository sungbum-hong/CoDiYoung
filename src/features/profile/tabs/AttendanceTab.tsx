'use client';

import { useState } from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, getDay, addMonths, subMonths, isSameMonth, isSameDay } from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { COLORS } from '../../../constants/colors';

export default function AttendanceTab({ attendanceData }: { attendanceData: string[] }) {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1)); // Default to Dec 2025 as per image
  
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentDate),
    end: endOfMonth(currentDate),
  });

  const startDay = getDay(startOfMonth(currentDate)); // 0 = Sunday
  const emptyDays = Array(startDay).fill(null);
  
  const handlePrevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const handleNextMonth = () => setCurrentDate(addMonths(currentDate, 1));

  // Count attendance for the current month
  const currentMonthAttendance = attendanceData.filter((dateStr: string) => 
    isSameMonth(new Date(dateStr), currentDate)
  ).length;

  return (
    <div className="flex flex-col items-center py-8 w-full max-w-xl mx-auto">
      <div className="mb-8 font-bold text-sm" style={{ color: COLORS.TEXT_PRIMARY }}>
        이번달 출석횟수 : <span style={{ color: COLORS.TEXT_INTERACTIVE_BRAND_PINK }}>{currentMonthAttendance}회</span>
      </div>

      {/* Calendar Header */}
      <div className="flex items-center gap-8 mb-8">
        <button onClick={handlePrevMonth} className="p-1 hover:bg-gray-100 rounded-full">
            <ChevronLeftIcon className="w-5 h-5" style={{ color: COLORS.TEXT_SECONDARY }} />
        </button>
        <h2 className="text-lg font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>
            {format(currentDate, 'yyyy. MM')}
        </h2>
        <button onClick={handleNextMonth} className="p-1 hover:bg-gray-100 rounded-full">
            <ChevronRightIcon className="w-5 h-5" style={{ color: COLORS.TEXT_SECONDARY }} />
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="w-full">
        {/* Days Header */}
        <div className="grid grid-cols-7 mb-4">
            {['일', '월', '화', '수', '목', '금', '토'].map(day => (
                <div key={day} className="text-center text-xs font-bold" style={{ color: COLORS.TEXT_PRIMARY }}>
                    {day}
                </div>
            ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7 gap-y-4">
            {emptyDays.map((_, i) => <div key={`empty-${i}`} />)}
            
            {daysInMonth.map(date => {
                const isAttended = attendanceData.some((attDate: string) => isSameDay(new Date(attDate), date));
                const dateNum = format(date, 'd');
                
                return (
                    <div key={date.toString()} className="flex justify-center items-center h-8">
                        {isAttended ? (
                            <div 
                                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium text-white shadow-sm"
                                style={{ backgroundColor: '#ff4d94' }} // Using hardcoded pink from image or variable
                            >
                                {dateNum}
                            </div>
                        ) : (
                            <span className="text-xs" style={{ color: COLORS.TEXT_SECONDARY }}>
                                {dateNum}
                            </span>
                        )}
                    </div>
                );
            })}
        </div>
      </div>
    </div>
  );
}
