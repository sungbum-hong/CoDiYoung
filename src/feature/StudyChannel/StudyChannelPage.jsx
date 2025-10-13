import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CONFIG } from "../../constants/config.js";
import useStudyChannelStore from "../../stores/studyChannelStore.js";
import { useUserStudyChannel } from "../../hooks/useStudyQueries.js";
import ProfileSection from "./ProfileSection";
import AttendanceSection from "./AttendanceSection";
import StudySection from "./StudySection";
import ProjectSection from "./ProjectSection";

export default function StudyChannelPage() {
  const { userId } = useParams();
  const { 
    setProfile, 
    setAttendance, 
    setStudyCount, 
    setProjectCount,
    setProjectItems,
    setStudyItems 
  } = useStudyChannelStore();

  // 사용자별 스터디 채널 데이터 조회
  const { data: userChannelData, isLoading, error } = useUserStudyChannel(
    userId, 
    { page: 0, size: 10, sort: ['createdAt,DESC'] },
    { enabled: !!userId }
  );

  // 데이터 로드 시 스토어 업데이트
  useEffect(() => {
    if (userChannelData) {
      // 실제 API 데이터 사용
      
      setProfile({ 
        category: userChannelData.category || '코딩',
        studyCount: userChannelData.studyCount || 0,
        userImageUrl: userChannelData.userImageUrl
      });
      
      // 출석 데이터 설정
      if (userChannelData.month) {
        // 체크된 날짜들의 날짜 번호 배열 생성
        const checkedDates = userChannelData.month.days
          ?.filter(day => day.checked)
          ?.map(day => new Date(day.date).getDate()) || [];
        
        
        setAttendance({ 
          filled: checkedDates.length,
          checkedDates: checkedDates  // 체크된 날짜 번호들 추가
        });
      }
      
      // 스터디 데이터 설정 (API 스펙에 맞춰 수정)
      const studyData = userChannelData.studies?.content || [];
      
      // 실제 API 데이터 사용 - firstImage 필드 보존
      const processedStudyData = studyData.map(study => {
        
        return {
          ...study,
          // firstImage 필드 보존 (새 API 스펙에 맞춤)
          createdAt: new Date().toISOString() // createdAt도 없으므로 현재 시간 사용
        };
      });
      
      setStudyCount(userChannelData.studies?.totalElements || 0);
      setStudyItems(processedStudyData);
      
      
      // 완료된 프로젝트 데이터 설정
      const completedProjects = userChannelData.completedProject || [];
      
      setProjectCount(completedProjects.length);
      setProjectItems(completedProjects);
    }
  }, [userChannelData, setProfile, setAttendance, setStudyCount, setProjectCount, setProjectItems, setStudyItems]);

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">스터디 채널 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  // 에러 상태 - 사용자를 찾을 수 없는 경우 처리
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">스터디 채널 정보를 불러오는데 실패했습니다.</p>
          <p className="text-gray-600">해당 사용자의 스터디 채널을 찾을 수 없거나 공개되지 않은 채널입니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-6">
        <ProfileSection />
        <AttendanceSection />
        <StudySection />
        <ProjectSection />
      </main>
    </div>
  );
}
