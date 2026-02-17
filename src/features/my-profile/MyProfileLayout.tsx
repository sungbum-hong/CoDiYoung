'use client';

import { useState } from 'react';
import { MESSAGES } from '../../constants/messages';
import { COLORS } from '../../constants/colors';
import { MOCK_PROFILE, MOCK_ATTENDANCE, MOCK_MY_STUDIES, MOCK_MY_PROJECTS } from '../../mock/profile';
import ProfileHeader from '../profile/components/ProfileHeader';
import ProfileTabs from '../profile/components/ProfileTabs';
import ProfileContent from './Profile/ProfileContent';
import StudyContent from './Study/StudyContent';
import ProjectContent from './Project/ProjectContent';
import AttendanceContent from './AttendanceContent';

// Map existing mock data to new component formats
const mapUserProfile = (mockProfile: any) => ({
  name: mockProfile.user.nickname,
  // We pass tags directly for My Profile
  tags: mockProfile.user.tags,
  introduction: mockProfile.user.description,
  profileImage: mockProfile.user.avatar,
});

// ... mapAttendance, mapStudies, mapProjects (same as before or simplified)
// (Redefine them here if needed to be safe, but since I am replacing the whole file content mostly, I will include them)

const mapAttendance = (mockAttendance: any) => {
  const dates: string[] = [];
  Object.keys(mockAttendance).forEach(key => {
    const { year, month, checkedDates } = mockAttendance[key];
    checkedDates.forEach((day: number) => {
      dates.push(`${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
    });
  });
  return dates;
};

const mapStudies = (mockStudies: any, authorName: string) => {
    return mockStudies.map((study: any) => ({
        id: study.id,
        title: study.title,
        content: "작성한 글의 내용이 들어갑니다...", 
        createdAt: study.date.replace(/-/g, '.'),
        author: authorName,
        image: null
    }));
};

const mapProjects = (mockProjects: any) => {
    const all = [...mockProjects.ongoing, ...mockProjects.completed, ...mockProjects.interested];
    return all.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        recruitmentState: p.status,
        deadline: p.deadline,
        members: p.participantsCount || 1,
        positions: p.positions,
        isLiked: p.isLiked
    }));
};

// Reuse TAB_CONFIG
const TAB_CONFIG = [
  { id: MESSAGES.SECTIONS.PROFILE_INFO, label: '프로필' },
  { id: MESSAGES.SECTIONS.ATTENDANCE_CHECK, label: '출석체크' },
  { id: MESSAGES.SECTIONS.STUDY_LIST, label: '스터디 2' },
  { id: MESSAGES.SECTIONS.PROJECT_LIST, label: '프로젝트' },
];

export default function MyProfileLayout() {
  const [activeSection, setActiveSection] = useState<string>(MESSAGES.SECTIONS.PROFILE_INFO);

  const user = mapUserProfile(MOCK_PROFILE);
  const attendanceData = mapAttendance(MOCK_ATTENDANCE);
  // Using MOCK_STUDIES for simplicity in demo
  const studies = mapStudies(MOCK_MY_STUDIES, user.name); 
  const projects = mapProjects(MOCK_MY_PROJECTS);

  const renderContent = () => {
    switch (activeSection) {
      case MESSAGES.SECTIONS.PROFILE_INFO:
        return <ProfileContent />;
      case MESSAGES.SECTIONS.STUDY_LIST:
        // Use StudyContent (Original My Page component) or shared StudyListTab?
        // User said "differentiate". My Page likely needs Edit/Delete on studies.
        // Public Page is read-only.
        // Strategy: Use original components for My Page content to preserve "management" features if any.
        // Wait, StudyContent in MyProfile might be just a list too.
        // Let's stick to original content components for My Profile content area to be safe, 
        // BUT use shared Header/Tabs for visual consistency.
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
      {/* Shared Header with Edit capability */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProfileHeader user={user} isMyProfile={true} />
        <ProfileTabs activeTab={activeSection} onTabChange={setActiveSection} tabs={TAB_CONFIG} />
      </div>

      {/* Main Content Area */}
      <div className="min-h-[500px]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
            {renderContent()}
        </div>
      </div>
    </div>
  );
}
