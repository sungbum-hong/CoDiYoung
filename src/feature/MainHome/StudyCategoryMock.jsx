import { useRef } from "react";
import { COLORS } from "../../constants/colors.js";
import { useAvatarGeneration } from "../../hooks/useAvatarGeneration.js";
import { useStudyNavigation } from "./hooks/useStudyNavigation.js";
import { useCategoryConfig } from "./hooks/useCategoryConfig.js";
import { useAuthState } from "../../hooks/useAuth.js";
import CategoryCard from "./components/CategoryCard.jsx";
import { MOCK_GROUPED_STUDIES } from "../../services/study/mockStudyData.js";

export default function StudyCategoryMock() {
  const title = "코디영 스터디 회원";

  // Mock Data 사용
  const rows = [
    { label: "코딩", count: MOCK_GROUPED_STUDIES.coding.content.length, users: MOCK_GROUPED_STUDIES.coding.content },
    { label: "디자인", count: MOCK_GROUPED_STUDIES.design.content.length, users: MOCK_GROUPED_STUDIES.design.content },
    { label: "영상편집", count: MOCK_GROUPED_STUDIES.video.content.length, users: MOCK_GROUPED_STUDIES.video.content },
  ];

  // 아바타 생성을 위한 유효한 rows만 필터링 (count > 0인 것만)
  const validRows = rows.filter(row => row.count > 0);
  
  // 커스텀 훅을 사용한 아바타 생성
  const { getAvatar, isLoading: avatarLoading } = useAvatarGeneration(validRows, { size: 96 });
  
  // 네비게이션 훅
  const { handleCategoryClick, handleWriteClick } = useStudyNavigation();
  
  // 카테고리 설정 훅
  const { getCategoryConfig } = useCategoryConfig();

  // 인증 상태 확인
  const { isAuthenticated } = useAuthState();

  // 스크롤 핸들러
  const scrollRefs = useRef({});
  const handleScroll = (label, direction) => {
    const container = scrollRefs.current[label];
    if (container) {
      const scrollAmount = 300; // 카드 너비 + 갭
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="space-y-12 mb-24 relative">
        {/* Mock Data Indicator */}
        <div className="absolute -top-10 right-0 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-300 z-10">
          ⚠️ TEST MODE (MOCK DATA)
        </div>

        {/* Main Header */}
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
          <h2 className="font-bold text-2xl text-gray-900">{title}</h2>
          <button className="px-4 py-2 text-sm text-gray-500 border border-gray-200 rounded hover:bg-gray-50 transition-colors">
            모두 보기
          </button>
        </div>

        {/* Category Sections */}
        {rows.map((r) => {
          return (
            <div key={r.label} className="relative group/section">
              {/* Section Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-xl text-gray-800">{r.label}</h3>
              </div>

              {/* Scroll Button (Right) - Only show if more than 4 items */}
              {r.count >= 5 && (
                <button 
                  onClick={() => handleScroll(r.label, 'right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-gray-200 flex items-center justify-center text-gray-600 opacity-0 group-hover/section:opacity-100 transition-opacity hover:bg-gray-50"
                  style={{ transform: 'translate(50%, -50%)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              )}

              {/* Cards Container (Horizontal Scroll) */}
              <div
                ref={el => scrollRefs.current[r.label] = el}
                className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth -mx-6 px-6 md:mx-0 md:px-0"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {r.count > 0 ? (
                  r.users.map((user, i) => {
                    const avatarSrc = user.userImage || getAvatar(r.label, i);

                    return (
                      <div 
                        key={user.userId || i} 
                        className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[calc(25%-1.125rem)]"
                      >
                        <CategoryCard
                          label={r.label}
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
                      </div>
                    );
                  })
                ) : (
                  <div className="w-full text-gray-500 text-sm py-4">
                    등록된 스터디 맴버가 없습니다.
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}
