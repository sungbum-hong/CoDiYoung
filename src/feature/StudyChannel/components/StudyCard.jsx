import { COLORS } from "../../../utils/colors.js";
import { getFirstImageUrl } from "../../../utils/imageUtils.js";

export default function StudyCard({ onClick, study }) {
  // 스터디 데이터에서 첫 번째 이미지 URL 가져오기
  const firstImageUrl = study?.images ? getFirstImageUrl(study.images) : null;
  
  
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
            e.target.nextSibling.style.display = 'flex';
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