import { useParams } from "react-router-dom";
import StudyChannelHeader from "../feature/StudyChannel/StudyChannelHeader";
import ProfileSection from "../feature/StudyChannel/ProfileSection";
import AttendanceSection from "../feature/StudyChannel/AttendanceSection";
import StudySection from "../feature/StudyChannel/StudySection";
import ProjectSection from "../feature/StudyChannel/ProjectSection";

export default function StudyChannel() {
  const { category } = useParams();
  const attendanceFilledCount = 2;

  const getCategoryTitle = (category) => {
    const categoryMap = {
      coding: "코딩",
      design: "디자인", 
      video: "영상"
    };
    return categoryMap[category] || "코딩";
  };

  return (
    <div className="min-h-screen bg-white">
      <StudyChannelHeader />

      <main className="max-w-6xl mx-auto px-6 pb-16">
        <ProfileSection 
          category={getCategoryTitle(category)} 
          studyCount={1234} 
        />
        <AttendanceSection attendanceFilledCount={attendanceFilledCount} />
        <StudySection studyCount={4} />
        <ProjectSection projectCount={3} />
      </main>
    </div>
  );
}
