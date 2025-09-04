import { Node, mergeAttributes } from '@tiptap/core';

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
    return [
      'div', 
      { 'data-youtube-video': '', style: 'margin: 1rem 0; text-align: center;' },
      [
        'iframe', 
        mergeAttributes({
          src: HTMLAttributes.src,
          width: '100%',
          height: '400',
          frameborder: '0',
          allowfullscreen: '',
          style: 'width: 100%; max-width: 100%; aspect-ratio: 16/9;'
        })
      ]
    ];
  },

  addCommands() {
    return {
      setYouTubeVideo: (options) => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
    };
  },
});

export default YouTube;