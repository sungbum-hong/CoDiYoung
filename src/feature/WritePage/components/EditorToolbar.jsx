import { useState } from 'react';
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

import { COLORS } from '../../../utils/colors.js';

export default function EditorToolbar({ 
  editor,
  onLinkClick,
  onImageClick, 
  onVideoClick,
  onTableClick,
  onFullscreenToggle
}) {
  const [isAlignDropdownOpen, setIsAlignDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  // 지원하는 언어 목록
  const supportedLanguages = [
    { value: '', label: '언어 선택' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'css', label: 'CSS' },
    { value: 'html', label: 'HTML' },
    { value: 'json', label: 'JSON' },
    { value: 'bash', label: 'Bash' },
    { value: 'sql', label: 'SQL' },
    { value: 'php', label: 'PHP' },
    { value: 'ruby', label: 'Ruby' },
    { value: 'go', label: 'Go' },
    { value: 'rust', label: 'Rust' },
    { value: 'swift', label: 'Swift' },
  ];

  if (!editor) {
    return null;
  }

  // 원래 TiptapEditor의 buttonHoverHandlers 복원
  const buttonHoverHandlers = {
    onMouseEnter: (e) => e.target.style.backgroundColor = COLORS.GRAY_200,
    onMouseLeave: (e) => e.target.style.backgroundColor = 'transparent'
  };

  const handleTableAction = () => {
    if (editor.isActive('table')) {
      // 현재 테이블 안에 있으면 테이블 삭제
      editor.chain().focus().deleteTable().run();
    } else {
      // 테이블 밖에 있으면 새 테이블 삽입
      if (onTableClick) {
        onTableClick();
      }
    }
  };

  return (
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
        className={`p-2 rounded transition-colors ${
          editor.isActive('orderedList') ? 'bg-gray-300' : ''
        }`}
        {...buttonHoverHandlers}
        title="번호 매기기"
      >
        <NumberedListIcon className="w-5 h-5" />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      {/* 3. 정렬 방식 드롭다운 */}
      <div className="relative">
        <button
          type="button"
          onClick={() => {
            setIsAlignDropdownOpen(!isAlignDropdownOpen);
            setIsLanguageDropdownOpen(false); // 다른 드롭다운 닫기
          }}
          className="p-2 rounded transition-colors"
          {...buttonHoverHandlers}
          title="정렬"
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

      {/* 4. 표 만들기/삭제 */}
      <button
        type="button"
        onClick={handleTableAction}
        className={`p-2 rounded transition-colors ${
          editor.isActive('table') ? 'bg-red-200 hover:bg-red-300' : ''
        }`}
        {...buttonHoverHandlers}
        title={editor.isActive('table') ? '표 삭제' : '표 삽입'}
        style={{
          backgroundColor: editor.isActive('table') ? '#fecaca' : 'transparent'
        }}
      >
        <TableCellsIcon className="w-5 h-5" />
      </button>

      {/* 5. 링크 */}
      <button
        type="button"
        onClick={onLinkClick}
        className="p-2 rounded transition-colors"
        {...buttonHoverHandlers}
        title="링크 삽입"
      >
        <LinkIcon className="w-5 h-5" />
      </button>

      {/* 6. 이미지 */}
      <button
        type="button"
        onClick={onImageClick}
        className="p-2 rounded transition-colors"
        {...buttonHoverHandlers}
        title="이미지 삽입"
      >
        <PhotoIcon className="w-5 h-5" />
      </button>

      {/* 7. 영상 */}
      <button
        type="button"
        onClick={onVideoClick}
        className="p-2 rounded transition-colors"
        {...buttonHoverHandlers}
        title="동영상 삽입"
      >
        <PlayIcon className="w-5 h-5" />
      </button>

      <div className="w-px h-6 bg-gray-300 mx-1" />

      {/* 8. 전체화면 */}
      <button
        type="button"
        onClick={onFullscreenToggle}
        className="p-2 rounded transition-colors"
        {...buttonHoverHandlers}
        title="전체화면"
      >
        <ArrowsPointingOutIcon className="w-5 h-5" />
      </button>

      {/* 9. 코드 */}
      <button
        type="button"
        onClick={() => {
          editor.chain().focus().toggleCodeBlock().run();
        }}
        className={`p-2 rounded transition-colors ${
          editor.isActive('codeBlock') ? 'bg-gray-300' : ''
        }`}
        {...buttonHoverHandlers}
        title="코드 블록"
      >
        <CodeBracketIcon className="w-5 h-5" />
      </button>

      {/* 10. 물음표 */}
      <button
        type="button"
        onClick={() => {
          // 도움말 기능은 필요시 구현
        }}
        className="p-2 rounded transition-colors"
        {...buttonHoverHandlers}
        title="도움말"
      >
        <QuestionMarkCircleIcon className="w-5 h-5" />
      </button>
    </div>
  );
}