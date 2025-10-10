import { COLORS } from '../../../../utils/colors';
import useStudyUIStore from '../../../../stores/studyUIStore.js';
import { getFirstImageUrl } from '../../../../utils/imageUtils.js';

// HTML 콘텐츠에서 data-key 속성을 가진 첫 번째 이미지의 key 추출
const getFirstImageFromContent = (content) => {
  if (!content) return null;
  
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const imgWithDataKey = doc.querySelector('img[data-key]');
    
    if (imgWithDataKey) {
      const dataKey = imgWithDataKey.getAttribute('data-key');
      console.log('🔍 [getFirstImageFromContent] 발견된 이미지 key:', dataKey);
      
      // data-key를 실제 이미지 URL로 변환
      return `http://15.164.125.28:8080/api/storage/public-url?key=${encodeURIComponent(dataKey)}`;
    }
    
    return null;
  } catch (error) {
    console.error('이미지 추출 실패:', error);
    return null;
  }
};

export default function StudyGrid({ 
  studyData, 
  isLoading, 
  onItemClick,
  userProfile,
  profileImageUrl
}) {
  const { getFirstChar, getFirstImage } = useStudyUIStore();
  const TOTAL_ITEMS = 30;
  
  console.log('🎯 [StudyGrid] props 수신:', {
    studyDataLength: studyData?.length,
    isLoading,
    userProfile,
    profileImageUrl,
    hasProfileImageUrl: !!profileImageUrl
  });

  const handleKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onItemClick(index);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <span className="text-gray-500">스터디 데이터를 불러오는 중...</span>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-5 gap-x-2 gap-y-3"
      style={{ gridTemplateRows: "repeat(6, 1fr)" }}
    >
      {Array.from({ length: TOTAL_ITEMS }).map((_, index) => {
        const hasStudy = studyData[index];
        const borderColor = COLORS.GRAY_300;
        const backgroundColor =  COLORS.WHITE;
        const firstChar = hasStudy ? getFirstChar(hasStudy.content) : '';
        
        // 새로운 API 응답 구조에서 이미지 추출
        const getImageFromNewAPI = () => {
          if (!hasStudy) return null;
          
          // 새 API 응답에서 firstImage 필드 우선 사용
          if (hasStudy.firstImage) {
            return hasStudy.firstImage;
          }
          
          // 기존 images 배열 방식도 지원 (fallback)
          if (hasStudy.images) {
            return getFirstImageUrl(hasStudy.images);
          }
          
          // HTML 콘텐츠에서 이미지 추출 (마지막 fallback)
          return getFirstImageFromContent(hasStudy.content);
        };
        
        const firstImage = getImageFromNewAPI();
        
        // 디버깅: 첫 번째 스터디만 로그 출력
        if (index === 0 && hasStudy) {
          console.log('🖼️ [StudyGrid] 첫 번째 스터디 이미지 처리:', {
            studyId: hasStudy.studyId,
            firstImage: hasStudy.firstImage,
            content: hasStudy.content?.substring(0, 50) + '...',
            hasImages: !!hasStudy.images,
            images: hasStudy.images,
            firstChar,
            finalFirstImage: firstImage,
            profileImageUrl,
            userNickName: userProfile?.nickName
          });
        }
        
        return (
          <div
            key={index}
            role={hasStudy ? "button" : undefined}
            tabIndex={hasStudy ? 0 : -1}
            aria-label={hasStudy ? `스터디 ${index + 1} 보기` : undefined}
            onClick={hasStudy ? () => onItemClick(index) : undefined}
            onKeyDown={hasStudy ? (e) => handleKeyDown(e, index) : undefined}
            className={`w-[90px] h-[90px] rounded-lg border-2 flex items-center justify-center transition-all duration-200 overflow-hidden ${
              hasStudy 
                ? 'cursor-pointer hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2' 
                : 'cursor-default'
            }`}
            style={{
              borderColor: borderColor,
              backgroundColor: backgroundColor,
            }}
          >
            {hasStudy && firstImage ? (
              <img 
                src={firstImage}
                alt="스터디 이미지"
                className="w-full h-full object-cover"
              />
            ) : hasStudy && firstChar ? (
              <div className="text-center">
                <span className="text-6xl font-bold">
                  {firstChar}
                </span>
              </div>
            ) : hasStudy && profileImageUrl ? (
              <img 
                src={profileImageUrl}
                alt="유저 프로필 이미지"
                className="w-full h-full object-cover"
                onLoad={() => {
                  console.log('✅ [StudyGrid] 프로필 이미지 로드 성공:', profileImageUrl);
                }}
                onError={(e) => {
                  console.log('❌ [StudyGrid] 프로필 이미지 로드 실패:', profileImageUrl);
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) {
                    e.target.nextSibling.style.display = 'flex';
                  }
                }}
              />
            ) : hasStudy ? (
              <div className="text-center">
                <span className="text-6xl font-bold text-gray-500">
                  {userProfile?.nickName?.charAt(0)?.toUpperCase() || 'U'}
                </span>
                {index === 0 && console.log('🔤 [StudyGrid] 닉네임 첫 글자 표시:', userProfile?.nickName?.charAt(0)?.toUpperCase() || 'U')}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}