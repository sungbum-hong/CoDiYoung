import { useState, useEffect } from 'react';
import { StudyService } from '../../services/studyService.js';

export default function AttendanceStars() {
  const ROWS = 3;
  const COLS = 10;
  const TOTAL_DAYS = ROWS * COLS;
  
  const [attendanceData, setAttendanceData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString().slice(0, 7)); // YYYY-MM

  // 출석 데이터 로드
  useEffect(() => {
    loadAttendanceData();
  }, [currentMonth]);

  const loadAttendanceData = async () => {
    try {
      setIsLoading(true);
      const data = await StudyService.getAttendanceCalendar(currentMonth);
      setAttendanceData(data.days || []);
    } catch (error) {
      setAttendanceData([]);
    } finally {
      setIsLoading(false);
    }
  };

  // 날짜별 출석 상태 확인
  const isAttendedOnDay = (dayNumber) => {
    if (!attendanceData.length) return false;
    
    // dayNumber는 1부터 시작하므로 인덱스는 dayNumber - 1
    const dayData = attendanceData[dayNumber - 1];
    return dayData && dayData.checked;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <span className="text-gray-500">출석 현황 로딩중...</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-15 mt-5">
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-10">
          {Array.from({ length: COLS }).map((_, colIndex) => {
            const starIndex = rowIndex * COLS + colIndex;
            const dayNumber = starIndex + 1;
            const isAttended = isAttendedOnDay(dayNumber);
            
            // 현재 월의 실제 날짜인지 확인 (30일 초과하는 별은 비활성화)
            const isValidDay = dayNumber <= attendanceData.length;

            return (
              <span
                key={colIndex}
                className={`text-5xl cursor-pointer transition-colors ${
                  !isValidDay
                    ? "text-[var(--color-gray-200)] opacity-50" // 유효하지 않은 날짜
                    : isAttended
                    ? "text-[var(--color-blue-600)]" // 출석한 날
                    : "text-[var(--color-gray-300)]" // 출석하지 않은 날
                }`}
                title={
                  !isValidDay 
                    ? `유효하지 않은 날짜` 
                    : `${currentMonth}-${dayNumber.toString().padStart(2, '0')} ${isAttended ? '출석' : '미출석'}`
                }
              >
                ★
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}
