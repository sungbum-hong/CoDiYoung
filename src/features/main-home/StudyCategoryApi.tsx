import { PencilIcon } from '@heroicons/react/24/outline';
import { COLORS } from "../../constants/colors";
import { useAvatarGeneration } from "../../hooks/useAvatarGeneration";
import { useStudyNavigation } from "./hooks/useStudyNavigation";
import { useCategoryConfig } from "./hooks/useCategoryConfig";
import { useAuthState } from "../../hooks/useAuth";
import { useMainHomeStudies } from "./hooks/useMainHomeQueries";
import CategoryCard from "./components/CategoryCard";

export default function StudyCategoryApi() {
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
  const { getAvatar, isLoading: avatarLoading } = useAvatarGeneration(validRows, { size: 96 });
  
  // 네비게이션 훅
  const { handleCategoryClick, handleWriteClick } = useStudyNavigation();
  
  // 카테고리 설정 훅
  const { getCategoryConfig } = useCategoryConfig();

  // 인증 상태 확인
  const { isAuthenticated } = useAuthState();



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

      <section className="space-y-4 mb-16">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-2xl">{title}</h2>
          {isAuthenticated && (
            <button
              onClick={handleWriteClick}
              className="p-2 rounded-full transition-colors"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = COLORS.GRAY_100)
              }
              onMouseLeave={(e) => ((e.target as HTMLElement).style.backgroundColor = "transparent")}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {r.count > 0 ? (
                r.users.map((user, i) => {
                  const avatarSrc = user.userImage || getAvatar(r.label, i);

                  return (
                    <CategoryCard
                      key={user.userId || i}
                      label={r.label}
                      index={i}
                      avatarSrc={avatarSrc}
                      isLoading={avatarLoading || loading}
                      onCategoryClick={handleCategoryClick}
                      userId={String(user.userId)}
                      userImage={user.userImage}
                      category={user.category}
                    />
                  );
                })
              ) : (
                <div className="col-span-full text-gray-500 text-sm py-4">
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
