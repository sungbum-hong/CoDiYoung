import { Node, mergeAttributes, nodeInputRule } from '@tiptap/core';

export default Node.create({
  name: 'image',

  addOptions() {
    return {
      inline: false,
      allowBase64: false,
      HTMLAttributes: {},
    };
  },

  inline() {
    return this.options.inline;
  },

  group() {
    return this.options.inline ? 'inline' : 'block';
  },

  draggable: true,

  addAttributes() {
    return {
      src: {
        default: null,
        parseHTML: element => element.getAttribute('src'),
        renderHTML: attributes => {
          if (!attributes.src) {
            return {};
          }

          return {
            src: attributes.src,
          };
        },
      },

      alt: {
        default: null,
        parseHTML: element => element.getAttribute('alt'),
        renderHTML: attributes => {
          if (!attributes.alt) {
            return {};
          }

          return {
            alt: attributes.alt,
          };
        },
      },

      title: {
        default: null,
        parseHTML: element => element.getAttribute('title'),
        renderHTML: attributes => {
          if (!attributes.title) {
            return {};
          }

          return {
            title: attributes.title,
          };
        },
      },

      width: {
        default: null,
        parseHTML: element => element.getAttribute('width'),
        renderHTML: attributes => {
          if (!attributes.width) {
            return {};
          }

          return {
            width: attributes.width,
          };
        },
      },

      height: {
        default: null,
        parseHTML: element => element.getAttribute('height'),
        renderHTML: attributes => {
          if (!attributes.height) {
            return {};
          }

          return {
            height: attributes.height,
          };
        },
      },

      'data-key': {
        default: null,
        parseHTML: element => element.getAttribute('data-key'),
        renderHTML: attributes => {
          if (!attributes['data-key']) {
            return {};
          }

          return {
            'data-key': attributes['data-key'],
          };
        },
      },

      'data-id': {
        default: null,
        parseHTML: element => element.getAttribute('data-id'),
        renderHTML: attributes => {
          if (!attributes['data-id']) {
            return {};
          }

          return {
            'data-id': attributes['data-id'],
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'img[src]',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    // width와 height 속성을 style로도 설정하여 확실하게 크기 적용
    const attrs = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes);

    // width와 height가 있으면 style에도 추가
    if (attrs.width || attrs.height) {
      const styles = [];
      if (attrs.width) styles.push(`width: ${attrs.width}px`);
      if (attrs.height) styles.push(`height: ${attrs.height}px`);

      // 기존 style과 병합
      const existingStyle = attrs.style || '';
      attrs.style = existingStyle + (existingStyle ? '; ' : '') + styles.join('; ');
    }

    return ['img', attrs];
  },

  addCommands() {
    return {
      setImage: options => ({ commands }) => {
        return commands.insertContent({
          type: this.name,
          attrs: options,
        });
      },
    };
  },

  addNodeView() {
    return ({ node, HTMLAttributes, getPos, editor }) => {

      const container = document.createElement('div');
      container.classList.add('image-resizer');
      container.style.cssText = `
        position: relative;
        display: inline-block;
        line-height: 0;
        max-width: 100%;
      `;

      const img = document.createElement('img');
      const mergedAttrs = mergeAttributes(this.options.HTMLAttributes, HTMLAttributes);

      Object.entries(mergedAttrs).forEach(([key, value]) => {
        img.setAttribute(key, value);
      });

      // 이미지 스타일 설정 - 저장된 크기가 있으면 적용
      let baseStyle = `
        max-width: 100%;
        display: block;
        cursor: pointer;
      `;

      // 저장된 width/height가 있으면 우선 적용
      if (node.attrs.width && node.attrs.height) {
        baseStyle += `width: ${node.attrs.width}px; height: ${node.attrs.height}px;`;
      } else {
        baseStyle += `height: auto;`;
      }

      img.style.cssText = baseStyle;

      let isResizing = false;
      let startX, startY, startWidth, startHeight;

      // 리사이즈 핸들 생성
      const createHandle = (position) => {
        const handle = document.createElement('div');
        handle.classList.add('resize-handle', `resize-handle-${position}`);
        handle.style.cssText = `
          position: absolute;
          width: 8px;
          height: 8px;
          background: #3b82f6;
          border: 1px solid white;
          border-radius: 50%;
          cursor: ${position.includes('n') || position.includes('s') ?
            (position.includes('e') || position.includes('w') ? 'nwse-resize' : 'ns-resize') :
            'ew-resize'};
          z-index: 10;
          opacity: 1;
          transition: opacity 0.2s;
        `;

        // 핸들 위치 설정
        switch(position) {
          case 'nw':
            handle.style.top = '-4px';
            handle.style.left = '-4px';
            handle.style.cursor = 'nw-resize';
            break;
          case 'ne':
            handle.style.top = '-4px';
            handle.style.right = '-4px';
            handle.style.cursor = 'ne-resize';
            break;
          case 'sw':
            handle.style.bottom = '-4px';
            handle.style.left = '-4px';
            handle.style.cursor = 'sw-resize';
            break;
          case 'se':
            handle.style.bottom = '-4px';
            handle.style.right = '-4px';
            handle.style.cursor = 'se-resize';
            break;
          case 'n':
            handle.style.top = '-4px';
            handle.style.left = '50%';
            handle.style.transform = 'translateX(-50%)';
            handle.style.cursor = 'n-resize';
            break;
          case 's':
            handle.style.bottom = '-4px';
            handle.style.left = '50%';
            handle.style.transform = 'translateX(-50%)';
            handle.style.cursor = 's-resize';
            break;
          case 'w':
            handle.style.top = '50%';
            handle.style.left = '-4px';
            handle.style.transform = 'translateY(-50%)';
            handle.style.cursor = 'w-resize';
            break;
          case 'e':
            handle.style.top = '50%';
            handle.style.right = '-4px';
            handle.style.transform = 'translateY(-50%)';
            handle.style.cursor = 'e-resize';
            break;
        }

        // 마우스 이벤트 핸들러
        handle.addEventListener('mousedown', (e) => {
          e.preventDefault();
          e.stopPropagation();

          isResizing = true;
          startX = e.clientX;
          startY = e.clientY;
          startWidth = img.offsetWidth;
          startHeight = img.offsetHeight;


          container.classList.add('resizing');
          document.addEventListener('mousemove', handleMouseMove);
          document.addEventListener('mouseup', handleMouseUp);
        });

        const handleMouseMove = (e) => {
          if (!isResizing) return;

          const deltaX = e.clientX - startX;
          const deltaY = e.clientY - startY;

          let newWidth = startWidth;
          let newHeight = startHeight;

          // Shift 키를 누르면 비례 유지, 아니면 자유 리사이즈
          const maintainAspectRatio = e.shiftKey;
          const aspectRatio = startWidth / startHeight;

          if (maintainAspectRatio) {
            // 비례 유지 모드
            if (position.includes('e') || position.includes('w')) {
              newWidth = Math.max(50, position.includes('e') ? startWidth + deltaX : startWidth - deltaX);
              newHeight = newWidth / aspectRatio;
            } else if (position.includes('s') || position.includes('n')) {
              newHeight = Math.max(50, position.includes('s') ? startHeight + deltaY : startHeight - deltaY);
              newWidth = newHeight * aspectRatio;
            }
          } else {
            // 자유 리사이즈 모드
            if (position.includes('e')) {
              newWidth = Math.max(50, startWidth + deltaX);
            } else if (position.includes('w')) {
              newWidth = Math.max(50, startWidth - deltaX);
            }

            if (position.includes('s')) {
              newHeight = Math.max(50, startHeight + deltaY);
            } else if (position.includes('n')) {
              newHeight = Math.max(50, startHeight - deltaY);
            }

            // 단일 방향 핸들 (n, s, w, e)
            if (position === 'e' || position === 'w') {
              // 가로만 조절
              newHeight = startHeight;
            } else if (position === 'n' || position === 's') {
              // 세로만 조절
              newWidth = startWidth;
            }
          }

          img.style.width = newWidth + 'px';
          img.style.height = newHeight + 'px';
        };

        const handleMouseUp = () => {
          if (isResizing) {
            isResizing = false;
            container.classList.remove('resizing');

            // 속성 업데이트
            const newWidth = img.offsetWidth;
            const newHeight = img.offsetHeight;

            if (typeof getPos === 'function') {
              editor.commands.updateAttributes('image', {
                width: newWidth.toString(),
                height: newHeight.toString()
              });
            }

            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
          }
        };

        return handle;
      };

      // 모든 리사이즈 핸들 추가
      const handles = ['nw', 'ne', 'sw', 'se', 'n', 's', 'w', 'e'].map(createHandle);
      handles.forEach(handle => container.appendChild(handle));

      // 더블클릭으로 title 편집
      img.addEventListener('dblclick', (e) => {
        e.preventDefault();
        const currentTitle = node.attrs.title || node.attrs.alt || 'Untitled';
        const newTitle = prompt('이미지 제목을 입력하세요:', currentTitle);

        if (newTitle !== null && newTitle !== currentTitle) {
          if (typeof getPos === 'function') {
            editor.commands.updateAttributes('image', {
              title: newTitle,
              alt: newTitle  // alt도 함께 업데이트
            });
          }
        }
      });

      // 컨테이너 호버 이벤트
      container.addEventListener('mouseenter', () => {
        handles.forEach(handle => handle.style.opacity = '1');
      });

      container.addEventListener('mouseleave', () => {
        if (!isResizing) {
          handles.forEach(handle => handle.style.opacity = '0');
        }
      });

      // 툴팁 표시를 위한 title 설정
      if (node.attrs.title) {
        img.title = node.attrs.title;
      }

      container.appendChild(img);

      return {
        dom: container,
        update: (updatedNode) => {
          if (updatedNode.type.name !== this.name) {
            return false;
          }

          // 속성 업데이트
          Object.entries(mergeAttributes(this.options.HTMLAttributes, updatedNode.attrs)).forEach(([key, value]) => {
            img.setAttribute(key, value);
          });

          // 크기 속성이 변경되었으면 스타일도 업데이트
          if (updatedNode.attrs.width && updatedNode.attrs.height) {
            img.style.width = updatedNode.attrs.width + 'px';
            img.style.height = updatedNode.attrs.height + 'px';
          }

          // title 속성이 변경되었으면 툴팁도 업데이트
          if (updatedNode.attrs.title) {
            img.title = updatedNode.attrs.title;
          }

          return true;
        }
      };
    };
  },
});