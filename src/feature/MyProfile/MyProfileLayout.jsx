import { useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './Profile/ProfileContent';
import StudyContent from './Study/StudyContent';
import ProjectContent from './Project/ProjectContent';
import AttendanceContent from './AttendanceContent';
import { MESSAGES } from '../../constants/messages';
import { CONFIG } from '../../constants/config';

export default function MyProfileLayout() {
  const [activeSection, setActiveSection] = useState(MESSAGES.SECTIONS.PROFILE_INFO);

  const handleSectionChange = (section) => setActiveSection(section);

  const renderContent = () => {
    switch (activeSection) {
      case MESSAGES.SECTIONS.PROFILE_INFO:
        return <ProfileContent />;
      case MESSAGES.SECTIONS.STUDY_LIST:
        return <StudyContent />;
      case MESSAGES.SECTIONS.PROJECT_LIST:
        return <ProjectContent />;
      case MESSAGES.SECTIONS.ATTENDANCE_CHECK:
        return <AttendanceContent />;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen justify-center">
      {/* Wrapper 중앙 정렬, max-width 적용 */}
      <div className={`flex w-full max-w-[${CONFIG.LAYOUT.MAX_CONTENT_WIDTH}px]`}>
        <ProfileSidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
        <main className="flex-1 px-5">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
