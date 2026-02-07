
import { useState } from 'react';
import { MOCK_GROUPED_STUDIES } from '../../services/study/mockStudyData.js';
import CategoryCard from './components/CategoryCard.jsx';
import { useAvatarGeneration } from '../../hooks/useAvatarGeneration.js';
import { useStudyNavigation } from './hooks/useStudyNavigation.js';

export default function StudyMembersPage() {
  const [activeTab, setActiveTab] = useState('coding'); // coding, design, video

  // Tab definitions
  const tabs = [
    { id: 'coding', label: '코딩' },
    { id: 'design', label: '디자인' },
    { id: 'video', label: '영상편집' },
  ];

  // Map tab IDs to data keys in MOCK_GROUPED_STUDIES
  const dataMap = {
    coding: 'coding',
    design: 'design',
    video: 'video',
  };

  const currentCategoryData = MOCK_GROUPED_STUDIES[dataMap[activeTab]];
  const users = currentCategoryData?.content || [];
  const categoryLabel = tabs.find(t => t.id === activeTab)?.label;

  // Avatar generation hook - need consistent avatars
  // We need to pass a "rows" structure similar to what StudyCategoryMock uses 
  // to reuse the hook effectively, or just pass the current list if the hook supports it.
  // Viewing usage in StudyCategoryMock: useAvatarGeneration(validRows, { size: 96 })
  // useAvatarGeneration hook expects an array of objects with { label, count }
  const hookInputRows = [{ label: categoryLabel, count: users.length }];
  const { getAvatar, isLoading: avatarLoading } = useAvatarGeneration(hookInputRows, { size: 96 });

  // Navigation hooks
  const { handleCategoryClick } = useStudyNavigation();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 mb-24 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">코디영 스터디 회원</h1>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-lg font-bold transition-colors relative ${
              activeTab === tab.id
                ? 'text-gray-900'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-900" />
            )}
          </button>
        ))}
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {users.map((user, i) => {
          const avatarSrc = user.userImage || getAvatar(categoryLabel, i);
          
          return (
            <CategoryCard
              key={user.userId || i}
              label={categoryLabel}
              index={i}
              avatarSrc={avatarSrc}
              isLoading={avatarLoading}
              onCategoryClick={handleCategoryClick}
              userId={user.userId}
              userImage={user.userImage}
              category={user.category}
              nickname={user.nickname}
              description={user.description}
            />
          );
        })}
        {/* Placeholder for empty state */}
        {users.length === 0 && (
          <div className="col-span-full py-20 text-center text-gray-500">
            해당 카테고리에 스터디 회원이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
