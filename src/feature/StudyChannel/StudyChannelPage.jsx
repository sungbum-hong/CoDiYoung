import { useParams } from "react-router-dom";
import { CONFIG } from "../../constants/config.js";
import ProfileSection from "./ProfileSection";
import AttendanceSection from "./AttendanceSection";
import StudySection from "./StudySection";
import ProjectSection from "./ProjectSection";

export default function StudyChannelPage() {
  const { category } = useParams();
  const attendanceFilledCount = 2;

  const getCategoryTitle = (category) => {
    return CONFIG.STUDY_CATEGORIES[category] || CONFIG.STUDY_CATEGORIES.coding;
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
