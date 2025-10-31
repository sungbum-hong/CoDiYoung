export default function EditorStyles() {
  return (
    <style>{`
      /* 접근성을 위한 스크린 리더 전용 클래스 */
      .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
      }

      /* 포커스 표시 개선 */
      .ProseMirror:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* 키보드 포커스용 고대비 아웃라인 */
      *:focus-visible {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }

      /* 고대비 모드 지원 */
      @media (prefers-contrast: high) {
        .ProseMirror {
          border-color: #000;
        }
        
        .ProseMirror *:focus {
          outline: 3px solid #000;
        }
      }

      /* 애니메이션 감소 모드 */
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
      /* 표 선택 및 드래그 기능 개선 */
      .tiptap-editor .ProseMirror .tableWrapper {
        margin: 1em 0;
        overflow-x: auto;
      }
      
      .tiptap-editor .ProseMirror table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 8px 0;
        overflow: hidden;
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        border: 2px solid transparent;
        padding: 4px;
      }

      /* 표 테두리 클릭 영역 확대 */
      .tiptap-editor .ProseMirror table::before {
        content: '';
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        pointer-events: auto;
        z-index: -1;
      }

      .tiptap-editor .ProseMirror td, 
      .tiptap-editor .ProseMirror th {
        min-width: 1em;
        border: 2px solid #ced4da;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        background: white;
        user-select: text;
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        pointer-events: auto;
      }

      .tiptap-editor .ProseMirror th {
        font-weight: bold;
        text-align: left;
        background-color: #f1f3f4;
      }

      /* 표 선택 및 셀 선택 스타일 */
      .tiptap-editor .ProseMirror .selectedCell,
      .ProseMirror .selectedCell {
        background-color: rgba(0, 150, 255, 0.3);
        outline: 2px solid #0096ff;
        position: relative;
      }

      /* 표 전체 선택 시 커스텀 클래스 */
      .tiptap-editor .ProseMirror table.table-selected {
        outline: 3px solid #0096ff;
        background-color: rgba(0, 150, 255, 0.2);
        border-radius: 4px;
        box-shadow: 0 0 0 2px rgba(0, 150, 255, 0.3);
      }

      /* 셀 선택 가능하도록 */
      .tiptap-editor .ProseMirror table {
        cursor: text;
      }

      .tiptap-editor .ProseMirror td,
      .tiptap-editor .ProseMirror th {
        cursor: text;
        position: relative;
      }

      /* 셀 호버 효과 */
      .tiptap-editor .ProseMirror td:hover,
      .tiptap-editor .ProseMirror th:hover {
        background-color: rgba(0, 150, 255, 0.1);
      }

      .tiptap-editor .ProseMirror .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: -2px;
        width: 4px;
        background-color: #3b82f6;
        pointer-events: none;
      }

      .tiptap-editor .ProseMirror table .column-resize-handle {
        pointer-events: all;
        cursor: col-resize;
      }

      /* 기본 선택 허용 */
      .tiptap-editor .ProseMirror {
        user-select: text;
      }

      .ProseMirror p {
        margin: 0;
      }

      /* 링크 스타일 - 강력한 특이성 */
      .tiptap-editor .ProseMirror a[href],
      .ProseMirror a[href],
      div[data-testid="editor-content"] a[href],
      .editor-link[href],
      .tiptap-editor a,
      .ProseMirror a {
        color: #3b82f6 !important;
        text-decoration: underline !important;
        cursor: pointer !important;
        transition: color 0.2s ease !important;
        border: none !important;
        background: transparent !important;
        font-weight: inherit !important;
      }

      .tiptap-editor .ProseMirror a[href]:hover,
      .ProseMirror a[href]:hover,
      div[data-testid="editor-content"] a[href]:hover,
      .editor-link[href]:hover,
      .tiptap-editor a:hover,
      .ProseMirror a:hover {
        color: #1d4ed8 !important;
        text-decoration: underline !important;
      }

      .tiptap-editor .ProseMirror a[href]:visited,
      .ProseMirror a[href]:visited,
      div[data-testid="editor-content"] a[href]:visited,
      .editor-link[href]:visited,
      .tiptap-editor a:visited,
      .ProseMirror a:visited {
        color: #7c3aed !important;
      }

      .tiptap-editor .ProseMirror a[href]:focus,
      .ProseMirror a[href]:focus,
      div[data-testid="editor-content"] a[href]:focus,
      .editor-link[href]:focus,
      .tiptap-editor a:focus,
      .ProseMirror a:focus {
        outline: 2px solid #3b82f6 !important;
        outline-offset: 2px !important;
        border-radius: 2px !important;
      }

      .ProseMirror pre {
        background: #f8f9fa;
        border-radius: 6px;
        color: #2d2d2d;
        font-family: 'SFMono-Regular', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace;
        font-size: 14px;
        line-height: 1.4;
        margin: 16px 0;
        padding: 16px;
        border: 1px solid #e9ecef;
      }

      .ProseMirror pre code {
        background: transparent;
        padding: 0;
        border-radius: 0;
      }

      .ProseMirror code {
        background-color: #f8f9fa;
        border-radius: 0.25rem;
        color: #e83e8c;
        font-family: 'JetBrainsMono', 'SFMono-Regular', 'SF Mono', 'Consolas', 'Liberation Mono', 'Menlo', monospace;
        font-size: 0.85em;
        padding: 0.2rem 0.4rem;
      }

      .ProseMirror pre code {
        background: none;
        color: inherit;
        font-size: inherit;
        padding: 0;
        border-radius: 0;
      }

      /* 구문 하이라이팅 스타일 */
      .ProseMirror .hljs-comment,
      .ProseMirror .hljs-quote {
        color: #6c757d;
        font-style: italic;
      }

      .ProseMirror .hljs-keyword,
      .ProseMirror .hljs-selector-tag,
      .ProseMirror .hljs-subst {
        color: #d73a49;
        font-weight: bold;
      }

      .ProseMirror .hljs-number,
      .ProseMirror .hljs-literal,
      .ProseMirror .hljs-variable,
      .ProseMirror .hljs-template-variable {
        color: #005cc5;
      }

      .ProseMirror .hljs-string,
      .ProseMirror .hljs-doctag {
        color: #032f62;
      }

      .ProseMirror .hljs-title,
      .ProseMirror .hljs-section,
      .ProseMirror .hljs-selector-id {
        color: #6f42c1;
        font-weight: bold;
      }

      .ProseMirror .hljs-type,
      .ProseMirror .hljs-class .hljs-title {
        color: #d73a49;
      }

      .ProseMirror .hljs-tag,
      .ProseMirror .hljs-name,
      .ProseMirror .hljs-attribute {
        color: #22863a;
      }

      .ProseMirror .hljs-regexp,
      .ProseMirror .hljs-link {
        color: #032f62;
      }

      .ProseMirror .hljs-symbol,
      .ProseMirror .hljs-bullet {
        color: #e36209;
      }

      .ProseMirror .hljs-built_in,
      .ProseMirror .hljs-builtin-name {
        color: #005cc5;
      }

      .ProseMirror .hljs-meta {
        color: #6c757d;
      }

      .ProseMirror .hljs-deletion {
        background: #ffeef0;
      }

      .ProseMirror .hljs-addition {
        background: #f0fff4;
      }

      /* 이미지 리사이저 스타일 */
      .ProseMirror .image-resizer {
        position: relative;
        display: inline-block;
        line-height: 0;
        max-width: 100%;
      }

      .ProseMirror .image-resizer img {
        max-width: 100%;
        height: auto;
        display: block;
        cursor: pointer;
      }

      .ProseMirror .resize-handle {
        position: absolute;
        width: 8px;
        height: 8px;
        background: #3b82f6;
        border: 1px solid white;
        border-radius: 50%;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .ProseMirror .image-resizer:hover .resize-handle {
        opacity: 1;
      }

      .ProseMirror .resize-handle:hover {
        background: #2563eb;
        transform: scale(1.2);
      }

      /* 리사이즈 중일 때 이미지 선택 방지 */
      .ProseMirror .image-resizer.resizing img {
        user-select: none;
        pointer-events: none;
      }

      /* 이미지 선택 시 테두리 */
      .ProseMirror .image-resizer.ProseMirror-selectednode {
        outline: 2px solid #3b82f6;
        border-radius: 4px;
      }

      .ProseMirror .image-resizer.ProseMirror-selectednode .resize-handle {
        opacity: 1;
      }

      /* YouTube 영상 스타일 */
      .ProseMirror div[data-youtube-video] {
        margin: 1rem 0;
        text-align: center;
        border-radius: 8px;
        overflow: hidden;
        position: relative;
        background: #f8f9fa;
        border: 1px solid #e9ecef;
      }

      .ProseMirror div[data-youtube-video] iframe {
        width: 100% !important;
        max-width: 100% !important;
        aspect-ratio: 16/9 !important;
        border: none !important;
        display: block !important;
      }

      /* YouTube 로딩 상태 */
      .ProseMirror div[data-youtube-video] .loading {
        padding: 2rem;
        color: #6c757d;
        font-size: 14px;
      }

      /* YouTube 선택 시 테두리 */
      .ProseMirror div[data-youtube-video].ProseMirror-selectednode {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
      }
    `}</style>
  );
}