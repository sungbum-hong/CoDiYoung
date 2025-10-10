import { COLORS } from "../../../utils/colors.js";
import { getFirstImageUrl } from "../../../utils/imageUtils.js";

// HTML 콘텐츠에서 data-key 속성을 가진 첫 번째 이미지의 key 추출
const getFirstImageFromContent = (content) => {
  if (!content) return null;
  
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const imgWithDataKey = doc.querySelector('img[data-key]');
    
    if (imgWithDataKey) {
      const dataKey = imgWithDataKey.getAttribute('data-key');
      console.log('🔍 [StudyCard] 발견된 이미지 key:', dataKey);
      
      // data-key를 실제 이미지 URL로 변환
      return `http://15.164.125.28:8080/api/storage/public-url?key=${encodeURIComponent(dataKey)}`;
    }
    
    return null;
  } catch (error) {
    console.error('StudyCard 이미지 추출 실패:', error);
    return null;
  }
};

export default function StudyCard({ onClick, study }) {
  console.log('🔍 [StudyCard] 전체 study 객체:', study);
  
  // 새로운 API 응답 구조에서 이미지 추출
  const getImageFromNewAPI = () => {
    console.log('🔍 [StudyCard] 이미지 추출 시작');
    console.log('- study?.firstImage:', study?.firstImage);
    console.log('- study?.images:', study?.images);
    console.log('- study?.content:', study?.content ? 'HTML 컨텐츠 있음' : '컨텐츠 없음');
    
    // 새 API 응답에서 firstImage 필드 사용
    if (study?.firstImage) {
      console.log('✅ [StudyCard] firstImage 필드 사용:', study.firstImage);
      return study.firstImage;
    }
    
    // 기존 images 배열 방식도 지원
    if (study?.images) {
      const imageUrl = getFirstImageUrl(study.images);
      console.log('✅ [StudyCard] images 배열에서 추출:', imageUrl);
      return imageUrl;
    }
    
    // HTML 콘텐츠에서 이미지 추출 (fallback)
    const htmlImageUrl = getFirstImageFromContent(study?.content);
    console.log('✅ [StudyCard] HTML에서 추출:', htmlImageUrl);
    return htmlImageUrl;
  };
  
  const firstImageUrl = getImageFromNewAPI();
  
  // 텍스트 내용에서 첫 글자 추출
  const getFirstChar = (htmlContent) => {
    if (!htmlContent) return '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const textContent = tempDiv.textContent || tempDiv.innerText || '';
    return textContent.trim().charAt(0);
  };
  
  const firstChar = study?.content ? getFirstChar(study.content) : '';

  console.log(`🔍 [StudyCard] 최종 결과 - studyId: ${study?.studyId}, firstChar: "${firstChar}", hasImage: ${!!firstImageUrl}, finalImageUrl: ${firstImageUrl}`);

  return (
    <div
      onClick={onClick}
      className="size-[100px] rounded-2xl cursor-pointer transition-all duration-200 overflow-hidden border-2 border-gray-200 hover:border-gray-300 hover:shadow-md"
      style={{ backgroundColor: COLORS.WHITE }}
    >
      {/* 이미지가 있는 경우 */}
      {firstImageUrl ? (
        <img 
          src={firstImageUrl}
          alt="스터디 이미지"
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('🚨 [StudyCard] 이미지 로드 실패:', firstImageUrl);
            console.error('- 에러 이벤트:', e);
            e.target.style.display = 'none';
            const fallbackDiv = e.target.nextSibling;
            if (fallbackDiv) {
              fallbackDiv.style.display = 'flex';
            }
          }}
          onLoad={() => {
            console.log('✅ [StudyCard] 이미지 로드 성공:', firstImageUrl);
          }}
        />
      ) : null}
      
      {/* 이미지가 없는 경우 첫 글자 표시 */}
      <div 
        className={`w-full h-full flex items-center justify-center ${firstImageUrl ? 'hidden' : 'flex'}`}
        style={{ backgroundColor: COLORS.GRAY_100 }}
      >
        {firstChar && (
          <span className="text-2xl font-bold text-gray-600">
            {firstChar}
          </span>
        )}
      </div>
    </div>
  );
}