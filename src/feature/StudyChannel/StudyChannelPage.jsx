import { useParams } from "react-router-dom";
import ProfileSection from "./ProfileSection";
import AttendanceSection from "./AttendanceSection";
import StudySection from "./StudySection";
import ProjectSection from "./ProjectSection";

export default function StudyChannelPage() {
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
    <div className="min-h-screen">
      <main className="max-w-6xl mx-auto px-6">
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
