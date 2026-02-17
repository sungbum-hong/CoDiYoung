import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AttendanceService } from '../../../services/AttendanceService';
import { useCallback, useMemo } from 'react';

// 출석 관련 쿼리 키
const ATTENDANCE_QUERY_KEYS = {
  all: ['attendance'] as const,
  calendar: () => [...ATTENDANCE_QUERY_KEYS.all, 'calendar'] as const,
  calendarMonth: (month: string) => [...ATTENDANCE_QUERY_KEYS.calendar(), month] as const,
  stats: () => [...ATTENDANCE_QUERY_KEYS.all, 'stats'] as const,
  statsMonth: (month: string) => [...ATTENDANCE_QUERY_KEYS.stats(), month] as const,
  check: () => [...ATTENDANCE_QUERY_KEYS.all, 'check'] as const,
};

/**
 * 출석 달력 조회 훅
 * API: GET /api/attendance/calendar
 */
export function useAttendanceCalendar(month?: string) {
  // 현재 월을 기본값으로 설정
  const currentMonth = month || (() => {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
  })();

  return useQuery({
    queryKey: ATTENDANCE_QUERY_KEYS.calendarMonth(currentMonth),
    queryFn: () => AttendanceService.getAttendanceCalendar(currentMonth),
    staleTime: 2 * 60 * 1000, // 2분간 캐시 (출석 데이터는 자주 변경될 수 있음)
    retry: (failureCount, error) => {
      if (error?.message?.includes('401')) return false;
      return failureCount < 1;
    },
    refetchOnWindowFocus: true, // 출석은 실시간성이 중요하므로 포커스 시 새로고침
    enabled: !!currentMonth && AttendanceService.isValidMonth(currentMonth),
    select: (data) => {
      // 출석 통계도 함께 계산해서 반환
      const totalDays = data?.days?.length || 0;
      const attendedDays = data?.days?.filter(day => day.checked).length || 0;
      const attendanceRate = totalDays > 0 ? Math.round((attendedDays / totalDays) * 100) : 0;

      return {
        month: data?.month,
        days: data?.days || [],
        stats: {
          totalDays,
          attendedDays,
          attendanceRate,
          missedDays: totalDays - attendedDays
        }
      };
    }
  });
}

/**
 * 현재 월 출석 조회 훅 (편의 훅)
 */
export function useCurrentMonthAttendance() {
  return useAttendanceCalendar(); // month 파라미터 없으면 현재 월 사용
}

/**
 * 출석 통계 조회 훅
 */
export function useAttendanceStats(month?: string) {
  const currentMonth = month || (() => {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
  })();

  return useQuery({
    queryKey: ATTENDANCE_QUERY_KEYS.statsMonth(currentMonth),
    queryFn: () => AttendanceService.getAttendanceStats(currentMonth),
    staleTime: 5 * 60 * 1000, // 통계는 5분간 캐시
    enabled: !!currentMonth && AttendanceService.isValidMonth(currentMonth),
    select: (data) => ({
      ...data,
      attendancePercentage: `${data.attendanceRate}%`,
      isGoodAttendance: data.attendanceRate >= 80,
      isPerfectAttendance: data.attendanceRate === 100,
      streakMessage: data.attendanceStreak > 0 ? 
        `${data.attendanceStreak}일 연속 출석중!` : '새로운 연속 출석을 시작하세요!'
    })
  });
}

/**
 * 출석 달성도 조회 훅
 */
export function useAttendanceAchievement(month?: string) {
  const currentMonth = month || (() => {
    const now = new Date();
    return `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}`;
  })();

  return useQuery({
    queryKey: [...ATTENDANCE_QUERY_KEYS.statsMonth(currentMonth), 'achievement'],
    queryFn: () => AttendanceService.getAttendanceAchievement(currentMonth),
    staleTime: 5 * 60 * 1000,
    enabled: !!currentMonth && AttendanceService.isValidMonth(currentMonth)
  });
}

/**
 * 오늘 출석 여부 확인 훅
 */
export function useTodayAttendance() {
  const now = new Date();
  const today = now.toISOString().split('T')[0]; // YYYY-MM-DD
  
  return useQuery({
    queryKey: [...ATTENDANCE_QUERY_KEYS.check(), today],
    queryFn: () => AttendanceService.isTodayAttended(),
    staleTime: 30 * 1000, // 30초간 캐시 (짧게 설정)
    refetchOnWindowFocus: true,
    refetchInterval: 60 * 1000, // 1분마다 자동 새로고침
  });
}

/**
 * 출석 대시보드 데이터를 위한 통합 훅 (프로필 페이지 전용)
 */
export function useAttendanceDashboard(month?: string) {
  const calendar = useAttendanceCalendar(month);
  const stats = useAttendanceStats(month);
  const achievement = useAttendanceAchievement(month);
  const todayAttendance = useTodayAttendance();

  const isLoading = useMemo(() => {
    return calendar.isLoading || stats.isLoading || achievement.isLoading || todayAttendance.isLoading;
  }, [calendar.isLoading, stats.isLoading, achievement.isLoading, todayAttendance.isLoading]);

  const error = useMemo(() => {
    return calendar.error || stats.error || achievement.error || todayAttendance.error;
  }, [calendar.error, stats.error, achievement.error, todayAttendance.error]);

  return {
    // 통합 데이터
    calendar: calendar.data,
    stats: stats.data,
    achievement: achievement.data,
    isTodayAttended: todayAttendance.data || false,
    
    // 통합 상태
    isLoading,
    error,
    
    // 개별 상태 (필요시 사용)
    calendarLoading: calendar.isLoading,
    statsLoading: stats.isLoading,
    achievementLoading: achievement.isLoading,
    
    // 새로고침
    refetchAll: () => {
      calendar.refetch();
      stats.refetch();
      achievement.refetch();
      todayAttendance.refetch();
    }
  };
}

export default {
  useAttendanceCalendar,
  useCurrentMonthAttendance,
  useAttendanceStats,
  useAttendanceAchievement,
  useTodayAttendance,
  useAttendanceDashboard
};