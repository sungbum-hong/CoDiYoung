import { Node, mergeAttributes } from '@tiptap/core';
import { sanitizeYouTubeUrl } from '../utils/sanitizer.js';

// YouTube iframe 확장
const YouTube = Node.create({
  name: 'youtube',
  
  group: 'block',
  
  atom: true,
  
  addAttributes() {
    return {
      src: {
        default: null,
      },
      width: {
        default: 560,
      },
      height: {
        default: 315,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-youtube-video]',
        getAttrs: (dom) => {
          try {
            const iframe = dom.querySelector('iframe');
            if (iframe) {
              const src = iframe.getAttribute('src');
              const width = iframe.getAttribute('width') || '560';
              const height = iframe.getAttribute('height') || '315';
              
              return { src, width: parseInt(width), height: parseInt(height) };
            }
          } catch (error) {
            // 파싱 에러 시 기본값 반환
          }
          
          return null;
        },
      },
      {
        tag: 'iframe',
        getAttrs: (dom) => {
          try {
            const src = dom.getAttribute('src');
            const width = dom.getAttribute('width') || '560';
            const height = dom.getAttribute('height') || '315';
            
            return { src, width: parseInt(width), height: parseInt(height) };
          } catch (error) {
            return null;
          }
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const sanitizedSrc = sanitizeYouTubeUrl(HTMLAttributes.src);
    
    if (!sanitizedSrc) {
      return [
        'div',
        { 
          'data-youtube-video': 'error',
          style: 'margin: 1rem 0; padding: 1rem; border: 2px solid #ff6b6b; border-radius: 4px; background: #ffe0e0; color: #d63031; text-align: center;'
        },
        '⚠️ 유효하지 않은 YouTube URL입니다.'
      ];
    }
    
    return [
      'div', 
      { 'data-youtube-video': '', style: 'margin: 1rem 0; text-align: center;' },
      [
        'iframe', 
        mergeAttributes({
          src: sanitizedSrc,
          width: '100%',
          height: '400',
          frameborder: '0',
          allowfullscreen: '',
          loading: 'lazy',
          'data-lazy': 'true',
          style: 'width: 100%; max-width: 100%; aspect-ratio: 16/9;'
        })
      ]
    ];
  },

  addCommands() {
    return {
      setYouTubeVideo: (options) => ({ commands }) => {
        const sanitizedOptions = {
          ...options,
          src: sanitizeYouTubeUrl(options.src)
        };
        
        if (!sanitizedOptions.src) {
          console.warn('유효하지 않은 YouTube URL:', options.src);
          return false;
        }
        
        return commands.insertContent({
          type: this.name,
          attrs: sanitizedOptions,
        });
      },
    };
  },
});

export default YouTube;