import { useState } from 'react';
import { useAttendanceCalendar } from './hooks/useAttendanceQueries.js'

export default function AttendanceStars() {
  const ROWS = 3;
  const COLS = 10;
  const TOTAL_DAYS = ROWS * COLS;

  // 현재 월 상태 관리
  const [currentMonth, setCurrentMonth] = useState(
    new Date().toISOString().slice(0, 7) // YYYY-MM
  );

  // 새로운 출석 훅 사용
  const {
    data: attendanceResponse,
    isLoading,
    error
  } = useAttendanceCalendar(currentMonth);

  // 출석 데이터 추출
  const attendanceData = attendanceResponse?.days || [];

  // 날짜별 출석 상태 확인
  const isAttendedOnDay = (dayNumber) => {
    if (!attendanceData.length) return false;
    
    // 현재 월의 실제 일수를 기준으로 검증
    if (dayNumber > attendanceData.length) return false;
    
    // API 응답에서 해당 날짜 찾기 (날짜 형식: YYYY-MM-DD)
    const targetDate = `${currentMonth}-${dayNumber.toString().padStart(2, '0')}`;
    const dayData = attendanceData.find(day => day.date === targetDate);
    
    return dayData?.checked || false;
  };

  // 로딩 상태 처리
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-40">
        <span className="text-gray-500">출석 현황 로딩중...</span>
      </div>
    );
  }

  // 에러 상태 처리
  if (error) {
    return (
      <div className="flex items-center justify-center h-40">
        <span className="text-red-500">
          출석 현황을 불러오는데 실패했습니다: {error.message}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-15 mt-5">

      {/* 별 그리드 렌더링 */}
      {Array.from({ length: ROWS }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex gap-10">
          {Array.from({ length: COLS }).map((_, colIndex) => {
            const starIndex = rowIndex * COLS + colIndex;
            const dayNumber = starIndex + 1;
            const isAttended = isAttendedOnDay(dayNumber);
            
            // 현재 월의 실제 날짜인지 확인
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
                    : `${currentMonth}-${dayNumber.toString().padStart(2, '0')} ${
                        isAttended ? '출석' : '미출석'
                      }`
                }
                onClick={() => {
                }}
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