/**
 * 스터디 콘텐츠의 이미지에 URL을 매핑하는 유틸리티 함수
 * @param {string} content - HTML 콘텐츠
 * @param {Array} images - 이미지 배열 [{ url: string, sortOrder: number }]
 * @returns {string} URL이 매핑된 HTML 콘텐츠
 */
export const mapImagesToContent = (content, images) => {
  if (!content || !images || images.length === 0) return content;
  
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const imgElements = doc.querySelectorAll('img[data-key]');
    
    // sortOrder에 따라 이미지 URL 매핑
    imgElements.forEach((img, index) => {
      const imageData = images.find(imgObj => imgObj.sortOrder === index);
      if (imageData && imageData.url) {
        img.src = imageData.url;
        // 이미지 스타일 추가
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.borderRadius = '8px';
      }
    });
    
    return doc.body.innerHTML;
  } catch (error) {
    return content;
  }
};

/**
 * 스터디 콘텐츠에서 첫 번째 이미지 URL 추출
 * @param {Array} images - 이미지 배열
 * @returns {string|null} 첫 번째 이미지 URL 또는 null
 */
export const getFirstImageUrl = (images) => {
  if (!images || images.length === 0) return null;
  
  // sortOrder가 0인 이미지 또는 첫 번째 이미지 반환
  const firstImage = images.find(img => img.sortOrder === 0) || images[0];
  return firstImage?.url || null;
};