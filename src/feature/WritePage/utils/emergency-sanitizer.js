/**
 * 긴급 XSS 방어 - DOMPurify 없이도 작동하는 기본 보안
 */

// DOMPurify 백업용 기본 sanitizer
const emergencySanitize = (html) => {
  if (!html || typeof html !== 'string') return '';
  
  // 1. 모든 script 태그 제거
  let cleaned = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // 2. 모든 이벤트 핸들러 제거
  cleaned = cleaned.replace(/\s*on\w+\s*=\s*["'][^"']*["']/gi, '');
  cleaned = cleaned.replace(/\s*on\w+\s*=\s*[^>\s]+/gi, '');
  
  // 3. javascript: 프로토콜 제거
  cleaned = cleaned.replace(/javascript:/gi, 'removed:');
  
  // 4. data: URL 제거 (HTML 포함된 경우)
  cleaned = cleaned.replace(/data:text\/html[^"'\s>]*/gi, 'removed:');
  
  // 5. expression() 제거 (CSS)
  cleaned = cleaned.replace(/expression\s*\([^)]*\)/gi, 'removed');
  
  // 6. 위험한 태그들 제거
  const dangerousTags = ['object', 'embed', 'form', 'input', 'button', 'iframe', 'frame', 'frameset', 'meta', 'link', 'style'];
  dangerousTags.forEach(tag => {
    const regex = new RegExp(`<${tag}\\b[^>]*>.*?<\\/${tag}>`, 'gi');
    cleaned = cleaned.replace(regex, '');
    // 단일 태그도 제거
    const singleRegex = new RegExp(`<${tag}\\b[^>]*\/?>`, 'gi');
    cleaned = cleaned.replace(singleRegex, '');
  });
  
  return cleaned;
};

// DOMPurify 사용 가능하면 사용, 아니면 기본 sanitizer 사용
export const secureSanitize = (html) => {
  try {
    // DOMPurify가 전역으로 로드되어 있는지 확인
    if (typeof window !== 'undefined' && window.DOMPurify) {
      console.log('🛡️ DOMPurify로 정화 중...');
      
      const config = {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td'],
        ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class'],
        FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'button', 'iframe', 'frame', 'meta', 'link', 'style'],
        FORBID_ATTR: ['onload', 'onerror', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onchange', 'onsubmit', 'style'],
        ALLOW_DATA_ATTR: false
      };
      
      return window.DOMPurify.sanitize(html, config);
    }
    
    // DOMPurify가 import로 로드되어 있는지 확인
    if (typeof DOMPurify !== 'undefined') {
      console.log('🛡️ DOMPurify(import)로 정화 중...');
      return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote', 'a', 'img'],
        FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'button'],
        FORBID_ATTR: ['onload', 'onerror', 'onclick', 'onmouseover', 'onfocus', 'onblur']
      });
    }
    
    // DOMPurify 없으면 긴급 정화기 사용
    console.warn('⚠️ DOMPurify 없음 - 긴급 정화기 사용');
    return emergencySanitize(html);
    
  } catch (error) {
    console.error('❌ 정화 중 오류:', error);
    // 오류 시에도 긴급 정화기 사용
    return emergencySanitize(html);
  }
};

// DOM에 직접 삽입하기 전 추가 검증
export const verifyClean = (html) => {
  const dangerous = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<object/i,
    /<embed/i,
    /<iframe/i
  ];
  
  for (const pattern of dangerous) {
    if (pattern.test(html)) {
      console.error('🚨 위험한 콘텐츠 감지:', html);
      return false;
    }
  }
  
  return true;
};

// 텍스트로만 삽입하는 안전한 방법
export const safeTextInsert = (element, text) => {
  if (element) {
    element.textContent = text; // HTML 해석 방지
  }
};

// 안전한 HTML 삽입
export const safeHtmlInsert = (element, html) => {
  if (!element) return;
  
  const cleaned = secureSanitize(html);
  
  if (verifyClean(cleaned)) {
    element.innerHTML = cleaned;
  } else {
    console.error('🚨 정화 후에도 위험한 콘텐츠 발견 - 텍스트로 삽입');
    element.textContent = html; // 안전하게 텍스트로만 삽입
  }
};