import { useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import ProfileContent from './ProfileContent';
import StudyContent from './StudyContent';
import { MESSAGES } from '../../constants/messages';

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
        return <div className="bg-white shadow-sm rounded-md p-6 min-h-[300px]">프로젝트 목록 (구현 예정)</div>;
      case MESSAGES.SECTIONS.ATTENDANCE_CHECK:
        return <div className="bg-white shadow-sm rounded-md p-6 min-h-[300px]">출석체크 (구현 예정)</div>;
      default:
        return <ProfileContent />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-50 justify-center">
      {/* Wrapper 중앙 정렬, max-width 적용 */}
      <div className="flex w-full max-w-[1200px]">
        <ProfileSidebar 
          activeSection={activeSection} 
          onSectionChange={handleSectionChange} 
        />
        <main className="flex-1 p-6 md:pl-[6.9%]">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
