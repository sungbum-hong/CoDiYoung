/**
 * 차트 데이터 계산 유틸리티
 */

/**
 * 관리자 홈 차트 데이터 계산
 * @param {Array} users - 사용자 데이터 배열
 * @returns {Object} 계산된 차트 데이터
 */
export function calculateAdminHomeChartData(users = []) {
  if (!Array.isArray(users)) {
    return {
      totalUsers: 0,
      totalStudyCount: 0,
      totalProjectCount: 0,
      totalOfflineCount: 0,
      usersWithProfileImage: 0,
      chartData: []
    };
  }

  const totalUsers = users.length;
  const totalStudyCount = users.reduce((sum, user) => sum + (user.studyCount || 0), 0);
  const totalProjectCount = users.reduce((sum, user) => sum + (user.projectCount || 0), 0);
  const totalOfflineCount = users.reduce((sum, user) => sum + (user.offlineCount || 0), 0);
  const usersWithProfileImage = users.filter(user => user.profileImage).length;

  const chartData = [
    { name: "프로필", value: usersWithProfileImage },
    { name: "이름", value: totalUsers },
    { name: "스터디", value: totalStudyCount },
    { name: "프로젝트", value: totalProjectCount },
    { name: "오프라인", value: totalOfflineCount },
  ];

  return {
    totalUsers,
    totalStudyCount,
    totalProjectCount,
    totalOfflineCount,
    usersWithProfileImage,
    chartData
  };
}

/**
 * 차트 바 높이 계산
 * @param {number} value - 현재 값
 * @param {number} maxValue - 최대 값
 * @param {number} maxHeight - 최대 높이 (px)
 * @returns {number} 계산된 높이
 */
export function calculateBarHeight(value, maxValue, maxHeight = 120) {
  if (maxValue === 0) return 0;
  return Math.round((value / maxValue) * maxHeight);
}