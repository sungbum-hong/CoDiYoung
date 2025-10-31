import { COLORS } from "../../../constants/colors.js";
import { CONFIG } from "../../../constants/config.js";
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
      
      // data-key를 실제 이미지 URL로 변환
      return `${CONFIG.API.BASE_URL}/api/storage/public-url?key=${encodeURIComponent(dataKey)}`;
    }
    
    return null;
  } catch (error) {
    
    return null;
  }
};

export default function StudyCard({ onClick, study }) {
  
  // 새로운 API 응답 구조에서 이미지 추출
  const getImageFromNewAPI = () => {
    
    // 새 API 응답에서 firstImage 필드 사용
    if (study?.firstImage) {
      return study.firstImage;
    }
    
    // 기존 images 배열 방식도 지원
    if (study?.images) {
      const imageUrl = getFirstImageUrl(study.images);
      return imageUrl;
    }
    
    // HTML 콘텐츠에서 이미지 추출 (fallback)
    const htmlImageUrl = getFirstImageFromContent(study?.content);
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
            
            
            e.target.style.display = 'none';
            const fallbackDiv = e.target.nextSibling;
            if (fallbackDiv) {
              fallbackDiv.style.display = 'flex';
            }
          }}
          onLoad={() => {
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