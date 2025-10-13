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
    console.log('🎥 [YouTube Extension] renderHTML 시작, HTMLAttributes:', HTMLAttributes);
    
    // null이나 undefined 체크 추가
    if (!HTMLAttributes || !HTMLAttributes.src) {
      console.warn('🎥 [YouTube Extension] HTMLAttributes.src가 없음:', HTMLAttributes);
      return [
        'div',
        { 
          'data-youtube-video': 'error',
          style: 'margin: 1rem 0; padding: 1rem; border: 2px solid #ff6b6b; border-radius: 4px; background: #ffe0e0; color: #d63031; text-align: center;'
        },
        '⚠️ YouTube URL이 제공되지 않았습니다.'
      ];
    }
    
    const sanitizedSrc = sanitizeYouTubeUrl(HTMLAttributes.src);
    console.log('🎥 [YouTube Extension] renderHTML sanitized 결과:', sanitizedSrc);
    
    if (!sanitizedSrc) {
      console.warn('🎥 [YouTube Extension] sanitization 실패:', HTMLAttributes.src);
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
        console.log('🎥 [YouTube Extension] setYouTubeVideo 시작');
        console.log('🎥 [YouTube Extension] 받은 옵션:', options);
        
        const sanitizedOptions = {
          ...options,
          src: sanitizeYouTubeUrl(options.src)
        };
        
        console.log('🎥 [YouTube Extension] sanitized 결과:', sanitizedOptions);
        console.log('🎥 [YouTube Extension] sanitizeYouTubeUrl 결과:', sanitizedOptions.src);
        
        if (!sanitizedOptions.src) {
          console.warn('🎥 [YouTube Extension] 유효하지 않은 YouTube URL:', options.src);
          return false;
        }
        
        console.log('🎥 [YouTube Extension] insertContent 실행 중...');
        
        try {
          // 새로운 라인에 삽입하고 커서를 적절한 위치로 이동
          const result = commands.insertContent([
            {
              type: 'paragraph',
              content: []
            },
            {
              type: this.name,
              attrs: sanitizedOptions,
            },
            {
              type: 'paragraph',
              content: []
            }
          ]);
          
          console.log('🎥 [YouTube Extension] insertContent 결과:', result);
          return result;
        } catch (error) {
          console.error('🎥 [YouTube Extension] insertContent 에러:', error);
          // 기본 방식으로 다시 시도
          return commands.insertContent({
            type: this.name,
            attrs: sanitizedOptions,
          });
        }
      },
    };
  },
});

export default YouTube;