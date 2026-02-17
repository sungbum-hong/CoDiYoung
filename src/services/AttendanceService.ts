// Mock Attendance Service
// TODO: Replace with actual API implementation when backend is ready

export interface AttendanceDay {
  date: string;
  checked: boolean;
}

export interface AttendanceCalendarData {
  month: string;
  days: AttendanceDay[];
}

export interface AttendanceStatsData {
  attendanceRate: number;
  attendanceStreak: number;
  totalDays: number;
  attendedDays: number;
}

export interface AttendanceAchievementData {
  level: number;
  title: string;
  badges: string[];
}

export const AttendanceService = {
  /**
   * 월 형식 검증 (YYYY-MM)
   */
  isValidMonth: (month: string): boolean => {
    return /^\d{4}-\d{2}$/.test(month);
  },

  /**
   * 출석 달력 조회
   */
  getAttendanceCalendar: async (month: string): Promise<AttendanceCalendarData> => {
    // Mock 데이터 반환
    const daysInMonth = new Date(parseInt(month.split('-')[0]), parseInt(month.split('-')[1]), 0).getDate();
    const days: AttendanceDay[] = Array.from({ length: daysInMonth }, (_, i) => ({
      date: `${month}-${String(i + 1).padStart(2, '0')}`,
      checked: Math.random() > 0.3, // 70% 출석률로 mock
    }));

    return {
      month,
      days,
    };
  },

  /**
   * 출석 통계 조회
   */
  getAttendanceStats: async (month: string): Promise<AttendanceStatsData> => {
    const calendar = await AttendanceService.getAttendanceCalendar(month);
    const totalDays = calendar.days.length;
    const attendedDays = calendar.days.filter(day => day.checked).length;
    const attendanceRate = Math.round((attendedDays / totalDays) * 100);

    return {
      attendanceRate,
      attendanceStreak: 3, // Mock: 3일 연속 출석
      totalDays,
      attendedDays,
    };
  },

  /**
   * 출석 달성도 조회
   */
  getAttendanceAchievement: async (month: string): Promise<AttendanceAchievementData> => {
    return {
      level: 2,
      title: '열정적인 학습자',
      badges: ['7일 연속 출석', '월 90% 이상 출석'],
    };
  },

  /**
   * 오늘 출석 여부 확인
   */
  isTodayAttended: async (): Promise<boolean> => {
    // Mock: 50% 확률로 출석
    return Math.random() > 0.5;
  },
};
