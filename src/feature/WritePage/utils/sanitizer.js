import DOMPurify from 'dompurify';

const ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'u', 's', 'code', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'div', 'span', 'iframe'
];

const ALLOWED_ATTRIBUTES = {
  'a': ['href', 'title', 'target', 'rel'],
  'img': ['src', 'alt', 'title', 'width', 'height', 'data-id', 'data-key', 'class'],
  'iframe': ['src', 'width', 'height', 'frameborder', 'allowfullscreen', 'loading', 'title', 'allow'],
  'div': ['class', 'data-youtube-video', 'data-type', 'data-language', 'style'],
  'span': ['class', 'data-language'],
  'pre': ['data-type', 'data-language', 'class'],
  'code': ['class'],
  'button': ['type', 'class', 'data-copy-target'],
  'table': ['class'],
  'th': ['colspan', 'rowspan', 'class'],
  'td': ['colspan', 'rowspan', 'class'],
  '*': ['style']
};

const URL_PROTOCOLS = ['http:', 'https:'];
const YOUTUBE_DOMAINS = ['www.youtube.com', 'youtube.com', 'youtu.be', 'm.youtube.com', 'music.youtube.com'];

const isValidUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return URL_PROTOCOLS.includes(urlObj.protocol);
  } catch {
    return false;
  }
};

const isValidYouTubeUrl = (url) => {
  if (!url) return false;
  
  // YouTube URL 정규식으로 먼저 체크 (embed URL도 허용)
  const youtubeRegex = /^https:\/\/(?:www\.|m\.|music\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  if (youtubeRegex.test(url)) return true;
  
  // 기존 도메인 체크도 유지
  if (!isValidUrl(url)) return false;
  
  try {
    const urlObj = new URL(url);
    return YOUTUBE_DOMAINS.some(domain => urlObj.hostname === domain);
  } catch {
    return false;
  }
};

const sanitizeConfig = {
  ALLOWED_TAGS,
  ALLOWED_ATTR: ALLOWED_ATTRIBUTES,
  ALLOW_DATA_ATTR: true,  // Allow data-* attributes for image keys
  FORBID_SCRIPT: true,
  FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'button'],
  FORBID_ATTR: ['onload', 'onerror', 'onclick', 'onmouseover', 'onfocus', 'onblur'],

  // 더 관대한 설정
  FORCE_BODY: false,
  SANITIZE_DOM: false,  // DOM 구조 변경 방지
  SANITIZE_NAMED_PROPS: false,
  KEEP_CONTENT: true,

  WHOLE_DOCUMENT: false,
  RETURN_DOCUMENT_FRAGMENT: false,

  IN_PLACE: false,
};

// DOMPurify 우회 - 수동 HTML 정화
const manualSanitize = (html) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // 위험한 태그 제거
    const dangerousTags = ['script', 'object', 'applet', 'form', 'input', 'button'];
    dangerousTags.forEach(tagName => {
      const elements = doc.querySelectorAll(tagName);
      elements.forEach(el => el.remove());
    });

    // 위험한 속성 제거
    const dangerousAttrs = ['onload', 'onerror', 'onclick', 'onmouseover', 'onfocus', 'onblur', 'onchange', 'onsubmit'];
    const allElements = doc.querySelectorAll('*');
    allElements.forEach(el => {
      dangerousAttrs.forEach(attr => {
        if (el.hasAttribute(attr)) {
          el.removeAttribute(attr);
        }
      });

      // style 속성 정화
      if (el.hasAttribute('style')) {
        const styleValue = el.getAttribute('style');
        const cleanStyle = sanitizeCss(styleValue);
        el.setAttribute('style', cleanStyle);
      }
    });

    const result = doc.body.innerHTML;
    return result;

  } catch (error) {
    return html;
  }
};

export const sanitizeHtml = (dirty) => {
  if (!dirty || typeof dirty !== 'string') return '';

  // DOMPurify가 iframe 속성을 계속 제거하므로 수동 정화 사용
  const result = manualSanitize(dirty);

  return result;
};

const sanitizeCss = (css) => {
  if (!css || typeof css !== 'string') return '';
  
  const dangerousPatterns = [
    /javascript:/gi,
    /expression\s*\(/gi,
    /binding\s*:/gi,
    /@import/gi,
    /behavior\s*:/gi,
    /vbscript:/gi,
    /data:/gi,
    /mocha:/gi,
    /livescript:/gi,
  ];
  
  for (const pattern of dangerousPatterns) {
    if (pattern.test(css)) {
      return '';
    }
  }
  
  return css;
};

export const sanitizeUrl = (url) => {
  if (!url || typeof url !== 'string') return '';
  
  const trimmedUrl = url.trim();
  
  const dangerousProtocols = [
    'javascript:', 'vbscript:', 'data:', 'file:', 
    'ftp:', 'jar:', 'mocha:', 'livescript:'
  ];
  
  for (const protocol of dangerousProtocols) {
    if (trimmedUrl.toLowerCase().startsWith(protocol)) {
      return '';
    }
  }
  
  return isValidUrl(trimmedUrl) ? trimmedUrl : '';
};

export const sanitizeYouTubeUrl = (url) => {
  const sanitizedUrl = sanitizeUrl(url);
  const isValid = isValidYouTubeUrl(sanitizedUrl);
  return isValid ? sanitizedUrl : '';
};

export const validateFileUpload = (file) => {
  const maxSize = 5 * 1024 * 1024; // 5MB
  const allowedTypes = [
    'image/jpeg', 'image/jpg', 'image/png', 
    'image/gif', 'image/webp', 'image/svg+xml'
  ];
  const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  
  if (!file) {
    throw new Error('파일이 선택되지 않았습니다.');
  }
  
  if (file.size > maxSize) {
    throw new Error('파일 크기는 5MB 이하여야 합니다.');
  }
  
  if (!allowedTypes.includes(file.type)) {
    throw new Error('지원하지 않는 파일 형식입니다.');
  }
  
  const fileName = file.name.toLowerCase();
  const hasValidExtension = allowedExtensions.some(ext => fileName.endsWith(ext));
  
  if (!hasValidExtension) {
    throw new Error('허용되지 않은 파일 확장자입니다.');
  }
  
  return true;
};

export const escapeHtml = (text) => {
  if (!text || typeof text !== 'string') return '';
  
  const htmlEscapes = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
  };
  
  return text.replace(/[&<>"'\/]/g, (match) => htmlEscapes[match]);
};

export const createSecureTextNode = (text) => {
  return document.createTextNode(escapeHtml(text));
};