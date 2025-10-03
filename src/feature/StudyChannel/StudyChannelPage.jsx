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
      console.log('=== 스터디 채널 데이터 로드 ===', userChannelData);
      console.log('studies 객체:', userChannelData.studies);
      console.log('studies 전체 구조:', JSON.stringify(userChannelData.studies, null, 2));
      
      setProfile({ 
        category: userChannelData.category || '코딩',
        studyCount: userChannelData.studyCount || 0,
        userImageUrl: userChannelData.userImageUrl
      });
      
      // 출석 데이터 설정
      if (userChannelData.month) {
        const filledDays = userChannelData.month.days?.filter(day => day.checked).length || 0;
        setAttendance({ filled: filledDays });
      }
      
      // 스터디 데이터 설정 (API 스펙에 맞춰 수정)
      const studyData = userChannelData.studies?.content || [];
      console.log('=== 스터디 데이터 설정 ===');
      console.log('studyData:', studyData);
      console.log('첫 번째 스터디:', studyData[0]);
      console.log('첫 번째 스터디 이미지:', studyData[0]?.images);
      
      // 실제 API 데이터 사용 (images 필드는 없으므로 content만 사용)
      const processedStudyData = studyData.map(study => ({
        ...study,
        images: [], // API에서 images 필드를 제공하지 않으므로 빈 배열
        createdAt: new Date().toISOString() // createdAt도 없으므로 현재 시간 사용
      }));
      
      setStudyCount(userChannelData.studies?.totalElements || 0);
      setStudyItems(processedStudyData);
      
      console.log('=== 최종 설정된 스터디 데이터 ===');
      console.log('processedStudyData:', processedStudyData);
      
      // 완료된 프로젝트 데이터 설정
      const completedProjects = userChannelData.completedProject || [];
      console.log('=== 완료된 프로젝트 데이터 설정 ===');
      console.log('완료된 프로젝트:', completedProjects);
      console.log('프로젝트 수:', completedProjects.length);
      
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

  // 에러 상태
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">스터디 채널 정보를 불러오는데 실패했습니다.</p>
          <p className="text-gray-600">{error.message}</p>
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
