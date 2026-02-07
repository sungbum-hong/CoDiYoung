import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MOCK_ATTENDANCE } from '../../services/profile/mockProfileData.js';
import AttendanceCalendar from './AttendanceCalendar';

export default function AttendanceContent() {
  // Use Dec 2025 mock data
  const { checkedDates, today, month, year } = MOCK_ATTENDANCE["2025-12"];
  
  // Demo State for "Study Completed"
  const [isStudyCompleted, setIsStudyCompleted] = useState(false);

  // If completed, increment count
  const attendedCount = isStudyCompleted ? checkedDates.length + 1 : checkedDates.length;
  // If completed, add today to checked dates for visualization
  const currentCheckedDates = isStudyCompleted ? [...checkedDates, today] : checkedDates;

  return (
    <div className="bg-white min-h-[500px] flex flex-col items-center pt-8 relative">
      {/* Demo Toggle Button (dev only) */}
      <div className="absolute top-0 right-0 p-2 opacity-50 hover:opacity-100 transition-opacity">
        <button 
          onClick={() => setIsStudyCompleted(!isStudyCompleted)}
          className="bg-gray-200 text-xs px-2 py-1 rounded"
        >
          {isStudyCompleted ? "Reset Demo" : "Simulate Complete"}
        </button>
      </div>

      {/* 1. Header Texts */}
      <h3 className="text-xl text-gray-900 mb-6 font-medium">
        {isStudyCompleted ? (
             <>
                오늘의 <Link to="/write" className="font-bold underline decoration-pink-500 underline-offset-4 text-gray-900 cursor-pointer hover:text-pink-600 transition-colors">스터디</Link> 기록완료
             </>
        ) : (
             <>
                오늘의 <Link to="/write" className="font-bold underline decoration-pink-500 underline-offset-4 text-gray-900 cursor-pointer hover:text-pink-600 transition-colors">스터디</Link>를 기록해주세요.
             </>
        )}
      </h3>
      
      <p className="text-gray-900 mb-12 font-medium">
        이번달 출석횟수 : <span className="text-[#FF4081] font-bold">{attendedCount}회</span>
      </p>

      {/* 2. Calendar */}
      <div className="w-full px-4">
        <AttendanceCalendar 
          year={year} 
          month={month} 
          checkedDates={currentCheckedDates}
          today={today}
        />
      </div>
    </div>
  );
}