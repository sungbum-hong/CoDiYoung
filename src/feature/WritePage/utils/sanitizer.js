import DOMPurify from 'dompurify';

const ALLOWED_TAGS = [
  'p', 'br', 'strong', 'em', 'u', 's', 'code', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'blockquote', 'a', 'img', 'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'div', 'span', 'iframe'
];

const ALLOWED_ATTRIBUTES = {
  'a': ['href', 'title', 'target', 'rel'],
  'img': ['src', 'alt', 'title', 'width', 'height', 'data-id', 'data-key'],
  'iframe': ['src', 'width', 'height', 'frameborder', 'allowfullscreen'],
  'div': ['class', 'data-youtube-video', 'data-type', 'data-language'],
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
const YOUTUBE_DOMAINS = ['www.youtube.com', 'youtube.com', 'youtu.be'];

const isValidUrl = (url) => {
  try {
    const urlObj = new URL(url);
    return URL_PROTOCOLS.includes(urlObj.protocol);
  } catch {
    return false;
  }
};

const isValidYouTubeUrl = (url) => {
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
  ALLOW_DATA_ATTR: false,
  FORBID_SCRIPT: true,
  FORBID_TAGS: ['script', 'object', 'embed', 'form', 'input', 'button'],
  FORBID_ATTR: ['onload', 'onerror', 'onclick', 'onmouseover', 'onfocus', 'onblur'],
  
  CUSTOM_ELEMENT_HANDLING: {
    tagNameCheck: null,
    attributeNameCheck: null,
    allowCustomizedBuiltInElements: false,
  },
  
  transformCaseFunc: null,
  
  RETURN_DOM: false,
  RETURN_DOM_FRAGMENT: false,
  RETURN_DOM_IMPORT: false,
  RETURN_TRUSTED_TYPE: false,
  
  SANITIZE_DOM: true,
  SANITIZE_NAMED_PROPS: true,
  KEEP_CONTENT: true,
  
  WHOLE_DOCUMENT: false,
  RETURN_DOCUMENT_FRAGMENT: false,
  
  IN_PLACE: false,
};

export const sanitizeHtml = (dirty) => {
  if (!dirty || typeof dirty !== 'string') return '';
  
  const config = {
    ...sanitizeConfig,
    HOOK_URL_SANITIZE: (url, tagName, attrName) => {
      if (tagName === 'iframe' && attrName === 'src') {
        return isValidYouTubeUrl(url) ? url : '';
      }
      if (tagName === 'a' && attrName === 'href') {
        return isValidUrl(url) ? url : '';
      }
      if (tagName === 'img' && attrName === 'src') {
        return isValidUrl(url) ? url : '';
      }
      return url;
    },
    
    HOOK_ATTRIBUTE_SANITIZE: (value, tagName, attrName, policy) => {
      if (attrName === 'style') {
        return sanitizeCss(value);
      }
      return value;
    }
  };
  
  return DOMPurify.sanitize(dirty, config);
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
  return isValidYouTubeUrl(sanitizedUrl) ? sanitizedUrl : '';
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