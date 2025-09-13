import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CONFIG } from "../../constants/config.js";
import useStudyChannelStore from "../../stores/studyChannelStore.js";
import ProfileSection from "./ProfileSection";
import AttendanceSection from "./AttendanceSection";
import StudySection from "./StudySection";
import ProjectSection from "./ProjectSection";

export default function StudyChannelPage() {
  const { category } = useParams();
  const { 
    setProfile, 
    setAttendance, 
    setStudyCount, 
    setProjectCount 
  } = useStudyChannelStore();

  const getCategoryTitle = (category) => {
    return CONFIG.STUDY_CATEGORIES[category] || CONFIG.STUDY_CATEGORIES.coding;
  };

  // 페이지 로드 시 초기 데이터 설정
  useEffect(() => {
    setProfile({ 
      category: getCategoryTitle(category), 
      studyCount: 1234 
    });
    setAttendance({ filled: 2 });
    setStudyCount(4);
    setProjectCount(3);
  }, [category, setProfile, setAttendance, setStudyCount, setProjectCount]);

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
