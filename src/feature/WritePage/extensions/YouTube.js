import { Node, mergeAttributes } from '@tiptap/core';
import { sanitizeYouTubeUrl } from '../utils/sanitizer.js';

// YouTube iframe 노드 (올바른 렌더링)
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
        default: '100%',
      },
      height: {
        default: '400',
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-youtube-video]',
        getAttrs: (element) => {
          const iframe = element.querySelector('iframe');

          if (iframe && iframe.src) {
            return {
              src: iframe.src,
              width: iframe.width || '100%',
              height: iframe.height || '400',
            };
          } else if (iframe) {
            // src가 없는 iframe이라도 YouTube div로 인식하여 노드 생성
            // NodeView에서 사용자에게 URL 입력을 요청할 수 있도록 함
            return {
              src: '', // 빈 src로 노드 생성
              width: '100%',
              height: '400',
            };
          }

          return false;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    // 저장 시 완전한 iframe 구조로 저장
    return [
      'div',
      {
        'data-youtube-video': '',
        style: 'margin: 1rem 0; text-align: center; border-radius: 8px; overflow: hidden;',
      },
      [
        'iframe',
        {
          src: HTMLAttributes.src || '',
          width: HTMLAttributes.width || '100%',
          height: HTMLAttributes.height || '400',
          frameborder: '0',
          allowfullscreen: '',
          loading: 'lazy',
          style: 'width: 100%; max-width: 100%; aspect-ratio: 16/9; border: none;',
          title: 'YouTube video',
        },
      ],
    ];
  },

  addNodeView() {
    return ({ node, getPos, editor }) => {
      const srcUrl = node.attrs.src;

      // src가 없거나 null인 경우 사용자에게 URL 입력 요청
      if (!srcUrl || srcUrl === null || srcUrl === '') {
        const dom = document.createElement('div');
        dom.setAttribute('data-youtube-video', '');
        dom.style.cssText = 'margin: 1rem 0; padding: 2rem; background: #f8f9fa; border: 2px dashed #dee2e6; border-radius: 8px; text-align: center;';

        // URL 입력 UI 생성
        const container = document.createElement('div');
        container.innerHTML = `
          <div style="margin-bottom: 1rem; color: #6c757d; font-size: 14px;">
            💡 YouTube 영상 URL이 없습니다. 새로운 URL을 입력해주세요.
          </div>
          <div style="display: flex; gap: 8px; justify-content: center; align-items: center;">
            <input type="text" placeholder="YouTube URL을 입력하세요..."
                   style="flex: 1; max-width: 400px; padding: 8px 12px; border: 1px solid #ced4da; border-radius: 4px; font-size: 14px;" />
            <button style="padding: 8px 16px; background: #dc3545; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
              삭제
            </button>
            <button style="padding: 8px 16px; background: #007bff; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 14px;">
              추가
            </button>
          </div>
        `;

        const input = container.querySelector('input');
        const deleteBtn = container.querySelector('button[style*="dc3545"]');
        const addBtn = container.querySelector('button[style*="007bff"]');

        // 삭제 버튼 클릭
        deleteBtn.addEventListener('click', () => {
          if (typeof getPos === 'function') {
            try {
              const pos = getPos();
              if (pos !== undefined && editor && editor.view) {
                const transaction = editor.view.state.tr.delete(pos, pos + node.nodeSize);
                editor.view.dispatch(transaction);
              }
            } catch (error) {
              // Silent error handling
            }
          }
        });

        // 추가 버튼 클릭
        addBtn.addEventListener('click', () => {
          const url = input.value.trim();
          if (url) {
            // YouTube URL에서 비디오 ID 추출
            const youtubeRegex = /(?:https?:\/\/)?(?:www\.|m\.|music\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
            const match = url.match(youtubeRegex);

            if (match) {
              const videoId = match[1];
              const embedUrl = `https://www.youtube.com/embed/${videoId}`;

              // 현재 노드를 새로운 YouTube 노드로 교체
              if (typeof getPos === 'function') {
                try {
                  const pos = getPos();
                  if (pos !== undefined && editor && editor.view) {
                    const newNode = editor.schema.nodes.youtube.create({
                      src: embedUrl,
                      width: '100%',
                      height: '400'
                    });
                    const transaction = editor.view.state.tr.replaceWith(pos, pos + node.nodeSize, newNode);
                    editor.view.dispatch(transaction);
                  }
                } catch (error) {
                  // Silent error handling
                }
              }
            } else {
              alert('올바른 YouTube URL을 입력해주세요.');
            }
          }
        });

        // Enter 키 지원
        input.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            addBtn.click();
          }
        });

        dom.appendChild(container);

        return {
          dom,
          contentDOM: null,
          ignoreMutation: () => true,
        };
      }

      const dom = document.createElement('div');
      dom.setAttribute('data-youtube-video', '');
      dom.style.cssText = 'margin: 1rem 0; text-align: center; border-radius: 8px; overflow: hidden; position: relative;';

      // 로딩 상태 표시
      dom.innerHTML = '<div style="padding: 2rem; background: #f3f4f6; border-radius: 8px;">YouTube 영상을 로드하는 중...</div>';

      // iframe 비동기 생성
      setTimeout(() => {
        // src 속성이 비어있거나 잘못된 경우 방지
        if (srcUrl && srcUrl.match(/youtube\.com\/embed\//)) {
          const iframe = document.createElement('iframe');
          iframe.src = srcUrl;
          iframe.width = '100%';
          iframe.height = '400';
          iframe.frameBorder = '0';
          iframe.allowFullscreen = true;
          iframe.loading = 'lazy';
          iframe.style.cssText = 'width: 100%; max-width: 100%; aspect-ratio: 16/9; border: none; display: block;';
          iframe.title = 'YouTube video';

          // 로딩 메시지 제거하고 iframe 추가
          dom.innerHTML = '';
          dom.appendChild(iframe);
        } else {
          // 잘못된 URL인 경우 에러 메시지 표시
          dom.innerHTML = '<div style="padding: 2rem; background: #fee; border-radius: 8px; color: #c53030;">YouTube URL이 올바르지 않습니다: ' + (srcUrl || 'URL 없음') + '</div>';
        }
      }, 100);

      return {
        dom,
        contentDOM: null,
        ignoreMutation: () => true, // DOM 변경 무시
      };
    };
  },

  addCommands() {
    return {
      setYouTubeVideo: (options) => ({ commands }) => {
        // YouTube embed URL 검증 (www 포함)
        const url = options.src;

        if (!url) {
          return false;
        }

        const embedRegex = /youtube\.com\/embed\//;
        const isValidEmbed = url.match(embedRegex);

        if (!isValidEmbed) {
          return false;
        }

        const nodeData = {
          type: this.name,
          attrs: {
            src: url,
            width: options.width || '100%',
            height: options.height || '400',
          },
        };

        try {
          const result = commands.insertContent(nodeData);
          return result;
        } catch (error) {
          return false;
        }
      },
    };
  },
});

export default YouTube;