import { useState, useEffect, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import {
  ListBulletIcon,
  NumberedListIcon,
  Bars3BottomLeftIcon,
  Bars3Icon,
  Bars3BottomRightIcon,
  TableCellsIcon,
  LinkIcon,
  PhotoIcon,
  PlayIcon,
  ArrowsPointingOutIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

import { COLORS } from '../../utils/colors.js';
import { CONFIG } from '../../constants/config.js';

export default function TiptapEditor({ content, onChange }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showHTML, setShowHTML] = useState(false);
  const [isAlignDropdownOpen, setIsAlignDropdownOpen] = useState(false);
  const alignDropdownRef = useRef(null);

  // Helper function for button hover effects
  const buttonHoverHandlers = {
    onMouseEnter: (e) => e.target.style.backgroundColor = COLORS.GRAY_200,
    onMouseLeave: (e) => e.target.style.backgroundColor = 'transparent'
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'underline cursor-pointer',
          style: `color: ${COLORS.BLUE_600}`,
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: 'max-w-full h-auto rounded-lg',
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
    ],
    content: content || '',
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: 'focus:outline-none',
        'data-placeholder': '내용을 입력하세요...',
      },
    },
  });

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    function handleClickOutside(event) {
      if (alignDropdownRef.current && !alignDropdownRef.current.contains(event.target)) {
        setIsAlignDropdownOpen(false);
      }
    }

    if (isAlignDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isAlignDropdownOpen]);

  const setLink = () => {
    const previousUrl = editor?.getAttributes('link').href;
    const url = window.prompt('링크 URL을 입력하세요:', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor?.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor?.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  const addImage = () => {
    // 파일 입력 요소 생성
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      
      try {
        // StudyService를 동적으로 import
        const { StudyService } = await import('../../services/studyService.js');
        
        // 이미지 업로드
        const imageData = await StudyService.uploadImage(file);
        
        // 에디터에 이미지 삽입
        editor?.chain().focus().setImage({ src: imageData.url }).run();
      } catch (error) {
        console.error('이미지 업로드 실패:', error);
        alert('이미지 업로드에 실패했습니다: ' + error.message);
      }
    };
    
    input.click();
  };

  const addVideo = () => {
    const url = window.prompt('YouTube 또는 비디오 URL을 입력하세요:');
    if (url) {
      // 간단한 iframe 형태로 비디오 삽입
      const videoHtml = `<div class="video-wrapper" style="margin: 1rem 0;"><iframe src="${url}" width="${CONFIG.EDITOR.VIDEO.DEFAULT_WIDTH}" height="${CONFIG.EDITOR.VIDEO.DEFAULT_HEIGHT}" frameborder="0" allowfullscreen></iframe></div>`;
      editor?.chain().focus().insertContent(videoHtml).run();
    }
  };

  const insertTable = () => {
    // 간단한 HTML 테이블 삽입
    const tableHtml = CONFIG.EDITOR.TABLE.DEFAULT_HTML;
    editor?.chain().focus().insertContent(tableHtml).run();
  };

  const insertCode = () => {
    editor?.chain().focus().toggleCodeBlock().run();
  };

  const showHelp = () => {
    alert('에디터 사용법:\n- 텍스트를 드래그하여 선택\n- 툴바의 버튼들로 서식 적용\n- 이미지나 링크 URL 입력 가능');
  };

  if (!editor) {
    return null;
  }

  return (
    <div className={`tiptap-editor ${isFullscreen ? 'fixed inset-0 z-50 bg-white p-4' : ''} overflow-hidden`}
      style={{
        border: `1px solid ${COLORS.GRAY_300}`,
        borderRadius: `${CONFIG.BORDER_RADIUS.MEDIUM}px`,
        minHeight: `${CONFIG.EDITOR.MIN_HEIGHT}px`
      }}
    >
      {/* 툴바 - 왼쪽부터: bullet list, number list, 정렬방식, 표만들기, 링크, 이미지, 영상, 전체화면, 코드, 물음표 */}
      <div className="flex items-center gap-1 p-2 flex-wrap"
        style={{ borderBottom: `1px solid ${COLORS.GRAY_200}`, backgroundColor: COLORS.GRAY_50 }}
      >
        
        {/* 1. Bullet List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded transition-colors ${
            editor.isActive('bulletList') ? 'bg-gray-300' : ''
          }`}
          {...buttonHoverHandlers}
          title="글머리 기호"
        >
          <ListBulletIcon className="w-5 h-5" />
        </button>

        {/* 2. Number List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded  transition-colors ${
            editor.isActive('orderedList') ? 'bg-gray-300' : ''
          }`}
          title="번호 매기기"
        >
          <NumberedListIcon className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* 3. 정렬 방식 */}
        <div className="relative" ref={alignDropdownRef}>
          <button
            type="button"
            onClick={() => setIsAlignDropdownOpen(!isAlignDropdownOpen)}
            className="p-2 rounded  transition-colors"
            title="텍스트 정렬"
          >
            <Bars3Icon className="w-5 h-5" />
          </button>
          
          {isAlignDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button
                type="button"
                onClick={() => {
                  editor.chain().focus().setTextAlign('left').run();
                  setIsAlignDropdownOpen(false);
                }}
                className="w-full flex items-center px-3 py-2 hover:bg-gray-100 first:rounded-t-lg"
              >
                <Bars3BottomLeftIcon className="w-4 h-4 mr-2" />
              </button>
              <button
                type="button"
                onClick={() => {
                  editor.chain().focus().setTextAlign('center').run();
                  setIsAlignDropdownOpen(false);
                }}
                className="w-full flex items-center px-3 py-2 hover:bg-gray-100"
              >
                <Bars3Icon className="w-4 h-4 mr-2" />
              </button>
              <button
                type="button"
                onClick={() => {
                  editor.chain().focus().setTextAlign('right').run();
                  setIsAlignDropdownOpen(false);
                }}
                className="w-full flex items-center px-3 py-2 hover:bg-gray-100 last:rounded-b-lg"
              >
                <Bars3BottomRightIcon className="w-4 h-4 mr-2" />
              </button>
            </div>
          )}
        </div>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* 4. 표 만들기 */}
        <button
          type="button"
          onClick={insertTable}
          className="p-2 rounded  transition-colors"
          title="표 삽입"
        >
          <TableCellsIcon className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* 5. 링크 */}
        <button
          type="button"
          onClick={setLink}
          className={`p-2 rounded  transition-colors ${
            editor.isActive('link') ? 'bg-gray-300' : ''
          }`}
          title="링크"
        >
          <LinkIcon className="w-5 h-5" />
        </button>

        {/* 6. 이미지 */}
        <button
          type="button"
          onClick={addImage}
          className="p-2 rounded  transition-colors"
          title="이미지"
        >
          <PhotoIcon className="w-5 h-5" />
        </button>

        {/* 7. 영상 */}
        <button
          type="button"
          onClick={addVideo}
          className="p-2 rounded  transition-colors"
          title="비디오"
        >
          <PlayIcon className="w-5 h-5" />
        </button>

        <div className="w-px h-6 bg-gray-300 mx-1" />

        {/* 8. 전체화면 */}
        <button
          type="button"
          onClick={() => setIsFullscreen(!isFullscreen)}
          className="p-2 rounded  transition-colors"
          title="전체화면"
        >
          <ArrowsPointingOutIcon className="w-5 h-5" />
        </button>

        {/* 9. 코드 */}
        <button
          type="button"
          onClick={insertCode}
          className={`p-2 rounded  transition-colors ${
            editor.isActive('codeBlock') ? 'bg-gray-300' : ''
          }`}
          title="코드 블록"
        >
          <CodeBracketIcon className="w-5 h-5" />
        </button>

        {/* 10. 물음표 (도움말) */}
        <button
          type="button"
          onClick={showHelp}
          className="p-2 rounded  transition-colors"
          title="도움말"
        >
          <QuestionMarkCircleIcon className="w-5 h-5" />
        </button>
      </div>

      {/* 에디터 영역 */}
      <div className={`${isFullscreen ? 'h-full' : 'min-h-[550px]'} bg-white overflow-y-auto`}>
        {showHTML ? (
          <textarea 
            value={editor.getHTML()} 
            readOnly 
            className={`w-full ${isFullscreen ? 'h-full' : 'h-[300px]'} border-none p-4 font-mono text-sm resize-none`} 
          />
        ) : (
          <EditorContent editor={editor} />
        )}
      </div>
    </div>
  );
}
