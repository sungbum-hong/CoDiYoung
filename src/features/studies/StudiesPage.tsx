'use client';

import { useState } from 'react';
import { MOCK_STUDY_MEMBERS, STUDY_CATEGORIES } from '../../mock/studies';
import StudyCategoryTabs from './components/StudyCategoryTabs';
import StudyMemberCard from './components/StudyMemberCard';
import { COLORS } from '../../constants/colors';

export default function StudiesPage() {
  const [activeTab, setActiveTab] = useState(STUDY_CATEGORIES[0].id);

  // Filter members based on active tab category id
  const filteredMembers = MOCK_STUDY_MEMBERS.filter(member => {
    return member.categoryId === activeTab;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Title */}
      <h1 
        className="text-3xl font-bold mb-12"
        style={{ color: COLORS.TEXT_PRIMARY }}
      >
        코디영 스터디 회원
      </h1>

      {/* Tabs */}
      <StudyCategoryTabs 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        categories={STUDY_CATEGORIES} 
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredMembers.map((member) => (
          <StudyMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
