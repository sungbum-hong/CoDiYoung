import { PencilIcon } from "@heroicons/react/24/outline";
import { COLORS } from "../../utils/colors";
import { useAvatarGeneration } from "../../hooks/useAvatarGeneration.js";
import { useStudyNavigation } from "./hooks/useStudyNavigation.js";
import { useCategoryConfig } from "./hooks/useCategoryConfig.js";
import { useAuth } from "../../contexts/AuthContext";
import { useMainHomeStudies } from "./hooks/useMainHomeQueries.js";
import CategoryCard from "./components/CategoryCard.jsx";

export default function StudyCategory() {
  const title = "스터디 채널";

  // React Query를 사용한 데이터 로드
  const {
    data: rows = [],
    isLoading: loading,
    error
  } = useMainHomeStudies({
    codingSize: 5,
    designSize: 5,
    videoSize: 5
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
    <section className="space-y-6 mb-21">
      <div className="flex items-center justify-between mb-7">
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
          <div key={r.label} className="mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-3 border-2"
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
            <div className="flex gap-4 justify-between">
              {r.count > 0 ? (
                r.users.slice(0, 5).map((user, i) => {
                  // API 응답 구조: { userId, userImage, category }
                  // 사용자 이미지가 있으면 우선 사용, 없으면 아바타 사용
                  const avatarSrc = user.userImage || getAvatar(r.label, i);
                  
                  return (
                    <CategoryCard
                      key={user.userId || i}  // ✅ studyId → userId로 변경
                      label={r.label}
                      index={i}
                      avatarSrc={avatarSrc}
                      isLoading={avatarLoading || loading}
                      onCategoryClick={handleCategoryClick}
                      userId={user.userId}  // ✅ userId 명시적 전달
                      userImage={user.userImage}  // userImage 전달
                      category={user.category}  // category 전달
                    />
                  );
                })
              ) : (
                <div className="text-gray-500 text-sm">
                  등록된 스터디 맴버가 없습니다.
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}