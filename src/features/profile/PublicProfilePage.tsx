'use client';

import { useState } from 'react';
import { MOCK_PUBLIC_PROFILE } from '../../mock/publicProfile';
import ProfileHeader from './components/ProfileHeader';
import ProfileTabs from './components/ProfileTabs';
import AttendanceTab from './tabs/AttendanceTab';
import StudyListTab from './tabs/StudyListTab';
import ProjectListTab from './tabs/ProjectListTab';

const TABS = [
  { id: 'attendance', label: '출석체크' },
  { id: 'study', label: `스터디 ${MOCK_PUBLIC_PROFILE.studies.length}` },
  { id: 'project', label: '완료 프로젝트' },
];

export default function PublicProfilePage({ username }: { username: string }) {
  const [activeTab, setActiveTab] = useState('attendance');
  const user = { ...MOCK_PUBLIC_PROFILE.user, name: decodeURIComponent(username) }; // Override name with param

  const renderTabContent = () => {
    switch (activeTab) {
      case 'attendance':
        return <AttendanceTab attendanceData={MOCK_PUBLIC_PROFILE.attendance} />;
      case 'study':
        return <StudyListTab studies={MOCK_PUBLIC_PROFILE.studies} />;
      case 'project':
        return <ProjectListTab projects={MOCK_PUBLIC_PROFILE.completedProjects} />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProfileHeader user={user} />
            <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} tabs={TABS} />
        </div>
        
        <div className="min-h-[500px]">
             {/* Content Area - centered and constrained width */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                 {renderTabContent()}
            </div>
        </div>
    </div>
  );
}
