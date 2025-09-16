export default function EditorStyles() {
  return (
    <style>{`
      .ProseMirror .tableWrapper {
        margin: 1em 0;
        overflow-x: auto;
      }
      
      .ProseMirror table {
        border-collapse: collapse;
        table-layout: fixed;
        width: 100%;
        margin: 0;
        overflow: hidden;
      }

      .ProseMirror td, .ProseMirror th {
        min-width: 1em;
        border: 2px solid #ced4da;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        background: white;
      }

      .ProseMirror th {
        font-weight: bold;
        text-align: left;
        background-color: #f1f3f4;
      }

      .ProseMirror .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0; right: 0; top: 0; bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
      }

      .ProseMirror .column-resize-handle {
        position: absolute;
        right: -2px;
        top: 0;
        bottom: -2px;
        width: 4px;
        background-color: #adf;
        pointer-events: none;
      }

      .ProseMirror table .column-resize-handle {
        pointer-events: all;
        cursor: col-resize;
      }

      .ProseMirror p {
        margin: 0;
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
    `}</style>
  );
}