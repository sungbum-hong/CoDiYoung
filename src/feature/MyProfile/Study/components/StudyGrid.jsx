import { COLORS } from '../../../../utils/colors';

export default function StudyGrid({ 
  studyData, 
  isLoading, 
  onItemClick, 
  getFirstCharFromContent, 
  getFirstImageFromContent 
}) {
  const TOTAL_ITEMS = 30;

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
        const backgroundColor = hasStudy ? COLORS.SUCCESS || '#10b981' : COLORS.WHITE;
        const firstChar = hasStudy ? getFirstCharFromContent(hasStudy.content) : '';
        const firstImage = hasStudy ? getFirstImageFromContent(hasStudy.content) : null;
        
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
                <span className="text-2xl font-bold text-white">
                  {firstChar}
                </span>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}