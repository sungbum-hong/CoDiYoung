import {
  ListBulletIcon,
  NumberedListIcon,
  TableCellsIcon,
  LinkIcon,
  PhotoIcon,
  PlayIcon,
  ArrowsPointingOutIcon,
  CodeBracketIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

// 훅들 import
import { useToolbarDropdown } from '../hooks/useToolbarDropdown.js';
import { useToolbarActions } from '../hooks/useToolbarActions.js';
import { useToolbarStyle } from '../hooks/useToolbarStyle.js';

// 컴포넌트들 import
import AlignmentDropdown from './AlignmentDropdown.jsx';
import ToolbarButton from './ToolbarButton.jsx';
import ToolbarDivider from './ToolbarDivider.jsx';

import { COLORS } from '../../../utils/colors.js';

export default function EditorToolbar({ 
  editor,
  onLinkClick,
  onImageClick, 
  onVideoClick,
  onTableClick,
  onFullscreenToggle
}) {
  // 훅들 사용
  const { 
    isAlignDropdownOpen, 
    toggleAlignDropdown, 
    setIsAlignDropdownOpen 
  } = useToolbarDropdown();
  
  const { 
    handleTableAction, 
    handleAlignment, 
    handleListToggle, 
    handleCodeBlock 
  } = useToolbarActions(editor);
  
  const { 
    buttonHoverHandlers, 
    getButtonClass, 
    getTableButtonStyle 
  } = useToolbarStyle();

  if (!editor) {
    return null;
  }

  const onTableAction = () => {
    const action = handleTableAction();
    if (action === 'insert' && onTableClick) {
      onTableClick();
    }
  };

  const onAlign = (align) => {
    handleAlignment(align, () => setIsAlignDropdownOpen(false));
  };

  return (
    <div className="flex items-center gap-1 p-2 flex-wrap"
      style={{ borderBottom: `1px solid ${COLORS.GRAY_200}`, backgroundColor: COLORS.GRAY_50 }}
    >
      
      {/* 1. Bullet List */}
      <ToolbarButton
        onClick={() => handleListToggle('bullet')}
        isActive={editor.isActive('bulletList')}
        title="글머리 기호"
        icon={ListBulletIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      {/* 2. Number List */}
      <ToolbarButton
        onClick={() => handleListToggle('ordered')}
        isActive={editor.isActive('orderedList')}
        title="번호 매기기"
        icon={NumberedListIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      <ToolbarDivider />

      {/* 3. 정렬 방식 드롭다운 */}
      <AlignmentDropdown
        isOpen={isAlignDropdownOpen}
        onToggle={toggleAlignDropdown}
        onAlign={onAlign}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      <ToolbarDivider />

      {/* 4. 표 만들기/삭제 */}
      <ToolbarButton
        onClick={onTableAction}
        isActive={editor.isActive('table')}
        title={editor.isActive('table') ? '표 삭제' : '표 삽입'}
        icon={TableCellsIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        customClass={editor.isActive('table') ? 'bg-red-200 hover:bg-red-300' : ''}
        customStyle={getTableButtonStyle(editor.isActive('table'))}
      />

      {/* 5. 링크 */}
      <ToolbarButton
        onClick={onLinkClick}
        isActive={false}
        title="링크 삽입"
        icon={LinkIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      {/* 6. 이미지 */}
      <ToolbarButton
        onClick={onImageClick}
        isActive={false}
        title="이미지 삽입"
        icon={PhotoIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      {/* 7. 영상 */}
      <ToolbarButton
        onClick={onVideoClick}
        isActive={false}
        title="동영상 삽입"
        icon={PlayIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      <ToolbarDivider />

      {/* 8. 전체화면 */}
      <ToolbarButton
        onClick={onFullscreenToggle}
        isActive={false}
        title="전체화면"
        icon={ArrowsPointingOutIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      {/* 9. 코드 */}
      <ToolbarButton
        onClick={handleCodeBlock}
        isActive={editor.isActive('codeBlock')}
        title="코드 블록"
        icon={CodeBracketIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />

      {/* 10. 물음표 */}
      <ToolbarButton
        onClick={() => {
          // 도움말 기능은 필요시 구현
        }}
        isActive={false}
        title="도움말"
        icon={QuestionMarkCircleIcon}
        buttonHoverHandlers={buttonHoverHandlers}
      />
    </div>
  );
}