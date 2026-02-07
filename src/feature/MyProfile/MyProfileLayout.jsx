
import { useState } from 'react';
import { MESSAGES } from '../../constants/messages';
import { COLORS } from '../../constants/colors.js';
import { MOCK_PROFILE } from '../../services/profile/mockProfileData.js';
import ProfileContent from './Profile/ProfileContent';
import StudyContent from './Study/StudyContent';
import ProjectContent from './Project/ProjectContent';
import AttendanceContent from './AttendanceContent';

// Define tab order and labels mapping
const TAB_CONFIG = [
  { id: MESSAGES.SECTIONS.PROFILE_INFO, label: '프로필' },
  { id: MESSAGES.SECTIONS.ATTENDANCE_CHECK, label: '출석체크' },
  { id: MESSAGES.SECTIONS.STUDY_LIST, label: '스터디 2' },
  { id: MESSAGES.SECTIONS.PROJECT_LIST, label: '프로젝트' },
];

export default function MyProfileLayout() {
  const [activeSection, setActiveSection] = useState(MESSAGES.SECTIONS.PROFILE_INFO);

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
    <div className="w-full min-h-screen bg-white">
      {/* 1. Top Header Profile Section */}
      <div className="flex flex-col items-center pt-16 pb-12">
        {/* Avatar */}
        <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
             {MOCK_PROFILE.user.avatar ? (
                <img src={MOCK_PROFILE.user.avatar} alt="Profile" className="w-full h-full object-cover" />
             ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl">👤</div>
             )}
            </div>
             {/* Camera Icon Overlay */}
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-gray-100 hover:bg-gray-50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>
        </div>

        {/* Nickname & Tags */}
        <div className="flex flex-col items-center gap-2 mb-4">
             <h2 className="text-xl font-bold text-gray-900">{MOCK_PROFILE.user.nickname}</h2>
             <div className="flex gap-2">
                 {MOCK_PROFILE.user.tags.map(tag => (
                     <span key={tag} className="px-3 py-1 rounded-lg border border-purple-500 text-purple-600 text-xs font-medium">
                         {tag}
                     </span>
                 ))}
             </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm">{MOCK_PROFILE.user.description}</p>
      </div>

      {/* 2. Navigation Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex justify-center gap-16">
          {TAB_CONFIG.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id)}
              className={`pb-4 px-2 text-sm font-medium transition-colors relative ${
                activeSection === tab.id
                  ? 'text-gray-900 font-bold'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
              {activeSection === tab.id && (
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-900" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 py-12">
        {renderContent()}
      </main>
    </div>
  );
}
