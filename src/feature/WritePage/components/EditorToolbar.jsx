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

// 접근성 라벨과 설명
const TOOLBAR_LABELS = {
  bulletList: {
    label: '글머리 기호 목록',
    description: '글머리 기호 목록을 추가하거나 제거합니다',
    shortcut: 'Ctrl+Shift+8'
  },
  orderedList: {
    label: '번호 매기기 목록',
    description: '번호 매기기 목록을 추가하거나 제거합니다',
    shortcut: 'Ctrl+Shift+7'
  },
  alignment: {
    label: '텍스트 정렬',
    description: '텍스트 정렬 방식을 선택합니다',
    shortcut: '없음'
  },
  table: {
    label: '표',
    description: '표를 삽입하거나 삭제합니다',
    shortcut: '없음'
  },
  link: {
    label: '링크',
    description: '링크를 삽입하거나 편집합니다',
    shortcut: 'Ctrl+K'
  },
  image: {
    label: '이미지',
    description: '이미지를 업로드하고 삽입합니다',
    shortcut: '없음'
  },
  video: {
    label: '동영상',
    description: '유튜브 동영상을 삽입합니다',
    shortcut: '없음'
  },
  fullscreen: {
    label: '전체화면',
    description: '에디터를 전체화면으로 전환합니다',
    shortcut: 'F11'
  },
  codeBlock: {
    label: '코드 블록',
    description: '코드 블록을 삽입합니다',
    shortcut: 'Ctrl+Shift+9'
  },
  help: {
    label: '도움말',
    description: '키보드 단축키 도움말을 표시합니다',
    shortcut: 'F1'
  }
};

// 훅들 import
import { useToolbarDropdown } from '../hooks/useToolbarDropdown.js';
import { useToolbarActions } from '../hooks/useToolbarActions.js';
import { useToolbarStyle } from '../hooks/useToolbarStyle.js';

// 컴포넌트들 import
import AlignmentDropdown from './AlignmentDropdown.jsx';
import ToolbarButton from './ToolbarButton.jsx';
import ToolbarDivider from './ToolbarDivider.jsx';

import { COLORS } from "../../../constants/colors.js"

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
    <div 
      className="flex items-center gap-1 p-2 flex-wrap"
      style={{ borderBottom: `1px solid ${COLORS.GRAY_200}`, backgroundColor: COLORS.GRAY_50 }}
      role="toolbar"
      aria-label="텍스트 편집 도구모음"
      aria-orientation="horizontal"
    >
      
      {/* 1. Bullet List */}
      <ToolbarButton
        onClick={() => handleListToggle('bullet')}
        isActive={editor.isActive('bulletList')}
        title={TOOLBAR_LABELS.bulletList.label}
        icon={ListBulletIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.bulletList.label}
        aria-describedby="bulletList-desc"
        aria-pressed={editor.isActive('bulletList')}
        aria-keyshortcuts={TOOLBAR_LABELS.bulletList.shortcut}
        data-action="bulletList"
      />
      <div id="bulletList-desc" className="sr-only">
        {TOOLBAR_LABELS.bulletList.description}
      </div>

      {/* 2. Number List */}
      <ToolbarButton
        onClick={() => handleListToggle('ordered')}
        isActive={editor.isActive('orderedList')}
        title={TOOLBAR_LABELS.orderedList.label}
        icon={NumberedListIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.orderedList.label}
        aria-describedby="orderedList-desc"
        aria-pressed={editor.isActive('orderedList')}
        aria-keyshortcuts={TOOLBAR_LABELS.orderedList.shortcut}
        data-action="orderedList"
      />
      <div id="orderedList-desc" className="sr-only">
        {TOOLBAR_LABELS.orderedList.description}
      </div>

      <ToolbarDivider />

      {/* 3. 정렬 방식 드롭다운 */}
      <div role="group" aria-labelledby="alignment-group-label">
        <div id="alignment-group-label" className="sr-only">텍스트 정렬 옵션</div>
        <AlignmentDropdown
          isOpen={isAlignDropdownOpen}
          onToggle={toggleAlignDropdown}
          onAlign={onAlign}
          buttonHoverHandlers={buttonHoverHandlers}
          aria-label={TOOLBAR_LABELS.alignment.label}
          aria-describedby="alignment-desc"
          aria-expanded={isAlignDropdownOpen}
          aria-haspopup="menu"
        />
        <div id="alignment-desc" className="sr-only">
          {TOOLBAR_LABELS.alignment.description}
        </div>
      </div>

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
        aria-label={editor.isActive('table') ? '표 삭제' : '표 삽입'}
        aria-describedby="table-desc"
        aria-pressed={editor.isActive('table')}
        data-action="table"
      />
      <div id="table-desc" className="sr-only">
        {TOOLBAR_LABELS.table.description}
      </div>

      {/* 5. 링크 */}
      <ToolbarButton
        onClick={onLinkClick}
        isActive={false}
        title={TOOLBAR_LABELS.link.label}
        icon={LinkIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.link.label}
        aria-describedby="link-desc"
        aria-keyshortcuts={TOOLBAR_LABELS.link.shortcut}
        data-action="link"
      />
      <div id="link-desc" className="sr-only">
        {TOOLBAR_LABELS.link.description}
      </div>

      {/* 6. 이미지 */}
      <ToolbarButton
        onClick={onImageClick}
        isActive={false}
        title={TOOLBAR_LABELS.image.label}
        icon={PhotoIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.image.label}
        aria-describedby="image-desc"
        data-action="image"
      />
      <div id="image-desc" className="sr-only">
        {TOOLBAR_LABELS.image.description}
      </div>

      {/* 7. 영상 */}
      <ToolbarButton
        onClick={onVideoClick}
        isActive={false}
        title={TOOLBAR_LABELS.video.label}
        icon={PlayIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.video.label}
        aria-describedby="video-desc"
        data-action="video"
      />
      <div id="video-desc" className="sr-only">
        {TOOLBAR_LABELS.video.description}
      </div>

      <ToolbarDivider aria-hidden="true" />

      {/* 8. 전체화면 */}
      <ToolbarButton
        onClick={onFullscreenToggle}
        isActive={false}
        title={TOOLBAR_LABELS.fullscreen.label}
        icon={ArrowsPointingOutIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.fullscreen.label}
        aria-describedby="fullscreen-desc"
        aria-keyshortcuts={TOOLBAR_LABELS.fullscreen.shortcut}
        data-action="fullscreen"
      />
      <div id="fullscreen-desc" className="sr-only">
        {TOOLBAR_LABELS.fullscreen.description}
      </div>

      {/* 9. 코드 */}
      <ToolbarButton
        onClick={handleCodeBlock}
        isActive={editor.isActive('codeBlock')}
        title={TOOLBAR_LABELS.codeBlock.label}
        icon={CodeBracketIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.codeBlock.label}
        aria-describedby="codeBlock-desc"
        aria-pressed={editor.isActive('codeBlock')}
        aria-keyshortcuts={TOOLBAR_LABELS.codeBlock.shortcut}
        data-action="codeBlock"
      />
      <div id="codeBlock-desc" className="sr-only">
        {TOOLBAR_LABELS.codeBlock.description}
      </div>

      {/* 10. 도움말 */}
      <ToolbarButton
        onClick={() => {
          // 단축키 도움말 표시
          const helpMessage = Object.entries(TOOLBAR_LABELS)
            .filter(([_, info]) => info.shortcut !== '없음')
            .map(([key, info]) => `${info.label}: ${info.shortcut}`)
            .join(', ');
          
          const event = new CustomEvent('show-help', { detail: helpMessage });
          document.dispatchEvent(event);
        }}
        isActive={false}
        title={TOOLBAR_LABELS.help.label}
        icon={QuestionMarkCircleIcon}
        buttonHoverHandlers={buttonHoverHandlers}
        aria-label={TOOLBAR_LABELS.help.label}
        aria-describedby="help-desc"
        aria-keyshortcuts={TOOLBAR_LABELS.help.shortcut}
        data-action="help"
      />
      <div id="help-desc" className="sr-only">
        {TOOLBAR_LABELS.help.description}
      </div>
    </div>
  );
}