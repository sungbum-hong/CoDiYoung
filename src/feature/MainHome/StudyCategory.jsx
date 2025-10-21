import { PencilIcon } from "@heroicons/react/24/outline";
import { useRef, useCallback } from "react";
import { COLORS } from "../../utils/colors";
import { useAvatarGeneration } from "../../hooks/useAvatarGeneration.js";
import { useStudyNavigation } from "./hooks/useStudyNavigation.js";
import { useCategoryConfig } from "./hooks/useCategoryConfig.js";
import { useAuth } from "../../contexts/AuthContext";
import { useMainHomeStudies } from "./hooks/useMainHomeQueries.js";
import CategoryCard from "./components/CategoryCard.jsx";

export default function StudyCategory() {
  const title = "스터디 채널";

  // React Query를 사용한 데이터 로드 (사이즈 제한 제거)
  const {
    data: rows = [],
    isLoading: loading,
    error
  } = useMainHomeStudies({
    codingSize: 50,    // 5명 → 50명으로 증가
    designSize: 50,    // 5명 → 50명으로 증가
    videoSize: 50      // 5명 → 50명으로 증가
  });

  // 아바타 생성을 위한 유효한 rows만 필터링 (count > 0인 것만)
  const validRows = rows.filter(row => row.count > 0);
  
  // 커스텀 훅을 사용한 아바타 생성
  const { getAvatar, isLoading: avatarLoading, error: avatarError } = useAvatarGeneration(validRows, { size: 96 });
  
  // 네비게이션 훅
  const { handleCategoryClick, handleWriteClick } = useStudyNavigation();
  
  // 카테고리 설정 훅
  const { getCategoryConfig } = useCategoryConfig();

  // 인증 상태 확인
  const { isAuthenticated } = useAuth();

  // 드래그 스크롤 기능을 위한 훅
  const useDragScroll = () => {
    const scrollRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const handleMouseDown = useCallback((e) => {
      isDragging.current = true;
      startX.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeft.current = scrollRef.current.scrollLeft;
      scrollRef.current.style.cursor = 'grabbing';
    }, []);

    const handleMouseLeave = useCallback(() => {
      isDragging.current = false;
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
      }
    }, []);

    const handleMouseUp = useCallback(() => {
      isDragging.current = false;
      if (scrollRef.current) {
        scrollRef.current.style.cursor = 'grab';
      }
    }, []);

    const handleMouseMove = useCallback((e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX.current) * 2; // 스크롤 속도 조절
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
    }, []);

    return {
      scrollRef,
      handlers: {
        onMouseDown: handleMouseDown,
        onMouseLeave: handleMouseLeave,
        onMouseUp: handleMouseUp,
        onMouseMove: handleMouseMove,
      }
    };
  };

  const { scrollRef, handlers } = useDragScroll();

  // 로딩 상태 처리
  if (loading) {
    return (
      <section className="space-y-6 mb-21">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>
        <div className="text-center text-gray-500">
          스터디 데이터를 불러오는 중...
        </div>
      </section>
    );
  }

  // 에러 상태 처리
  if (error) {
    return (
      <section className="space-y-6 mb-21">
        <div className="flex items-center justify-between mb-7">
          <h2 className="font-bold text-2xl">{title}</h2>
        </div>
        <div className="text-center text-red-500">
          스터디 데이터를 불러오는데 실패했습니다: {error.message}
        </div>
      </section>
    );
  }

  return (
    <>
      <style jsx>{`
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
        .scroll-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <section className="space-y-4 mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-2xl">{title}</h2>
          {isAuthenticated && (
            <button
              onClick={handleWriteClick}
              className="p-2 rounded-full transition-colors"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor = COLORS.GRAY_100)
              }
              onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
            >
              <PencilIcon className="w-5 h-5" style={{ color: COLORS.GRAY_600 }} />
            </button>
          )}
        </div>

      {rows.map((r) => {
        const { color, icon: IconComponent } = getCategoryConfig(r.label);
        
        return (
          <div key={r.label} className="mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 border-2"
              style={{ 
                borderColor: color,
                backgroundColor: 'transparent'
              }}
            >
              <IconComponent 
                className="w-5 h-5"
                style={{ color: color }}
              />
              <p
                className="font-bold text-1.5xl"
                style={{ color: color }}
              >
                {r.label} ({r.count})
              </p>
            </div>
            <div
              ref={scrollRef}
              className="overflow-x-auto cursor-grab select-none scroll-container"
              style={{
                width: '100%',
                maxWidth: '100%',
              }}
              {...handlers}
            >
              <div
                className="flex gap-4 ml-10"
                style={{
                  width: 'max-content',
                  minWidth: '100%',
                }}
              >
                {r.count > 0 ? (
                  r.users.map((user, i) => {
                    const avatarSrc = user.userImage || getAvatar(r.label, i);

                    return (
                      <div
                        key={user.userId || i}
                        className="flex-shrink-0"
                        style={{
                          width: 'calc(20% - 0.8rem)', // 5개가 보이도록 (20% - gap)
                          minWidth: '96px', // 최소 크기 보장
                        }}
                      >
                        <CategoryCard
                          label={r.label}
                          index={i}
                          avatarSrc={avatarSrc}
                          isLoading={avatarLoading || loading}
                          onCategoryClick={handleCategoryClick}
                          userId={user.userId}
                          userImage={user.userImage}
                          category={user.category}
                        />
                      </div>
                    );
                  })
                ) : (
                  <div className="text-gray-500 text-sm">
                    등록된 스터디 맴버가 없습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
      </section>
    </>
  );
}