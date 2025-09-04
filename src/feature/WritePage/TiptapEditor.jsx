import { useState, useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';

// Table 확장들 (Tiptap v3 방식 - named exports)
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableHeader } from '@tiptap/extension-table-header';
import { TableCell } from '@tiptap/extension-table-cell';

// 분리된 컴포넌트들 import
import YouTube from './extensions/YouTube.js';
import NotionCodeBlock from './extensions/NotionCodeBlock.js';
import EditorToolbar from './components/EditorToolbar.jsx';
import LinkModal from './components/LinkModal.jsx';
import VideoModal from './components/VideoModal.jsx';

import { StudyService } from '../../services/studyService.js';
import { COLORS } from '../../utils/colors.js';

// lowlight 인스턴스 생성 및 언어 등록
const lowlight = createLowlight();

// 기본 언어들 등록 (dynamic import 없이 간단하게)
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import python from 'highlight.js/lib/languages/python';
import java from 'highlight.js/lib/languages/java';
import cpp from 'highlight.js/lib/languages/cpp';
import css from 'highlight.js/lib/languages/css';
import xml from 'highlight.js/lib/languages/xml';
import json from 'highlight.js/lib/languages/json';
import bash from 'highlight.js/lib/languages/bash';

lowlight.register('javascript', javascript);
lowlight.register('js', javascript);
lowlight.register('typescript', typescript);
lowlight.register('ts', typescript);
lowlight.register('python', python);
lowlight.register('py', python);
lowlight.register('java', java);
lowlight.register('cpp', cpp);
lowlight.register('c++', cpp);
lowlight.register('css', css);
lowlight.register('html', xml);
lowlight.register('xml', xml);
lowlight.register('json', json);
lowlight.register('bash', bash);
lowlight.register('sh', bash);

export default function TiptapEditor({ content = '', onChange }) {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [linkData, setLinkData] = useState({ text: '', url: '' });
  const [isFullscreen, setIsFullscreen] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false, // 기본 CodeBlock 비활성화
        link: false, // 기본 Link 비활성화 (중복 방지)
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-600 underline hover:text-blue-800',
        },
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      YouTube,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: content && content.trim() !== '' ? content : '<p></p>',
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[400px] p-4',
      },
    },
  });

  // content가 변경될 때 에디터 업데이트
  useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      // content가 빈 문자열이면 에디터를 완전히 클리어
      if (content === '' || content === null || content === undefined) {
        editor.commands.clearContent();
      } else {
        editor.commands.setContent(content, false);
      }
    }
  }, [content, editor]);

  // 링크 처리
  const handleLinkClick = () => {
    if (!editor) return;

    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, '');
    
    setLinkData({ 
      text: text, 
      url: editor.getAttributes('link').href || '' 
    });
    setIsLinkModalOpen(true);
  };

  const handleLinkSubmit = (linkText, linkUrl) => {
    if (!editor) return;

    if (!linkUrl) {
      // URL이 없으면 링크 제거
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    // URL 형식 검증 및 자동 수정
    let url = linkUrl;
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    const { from, to } = editor.state.selection;
    const hasTextSelection = from !== to;

    if (hasTextSelection) {
      // 텍스트가 선택된 경우
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    } else {
      // 텍스트가 선택되지 않은 경우
      const text = linkText || url;
      editor.chain().focus().insertContent(`<a href="${url}">${text}</a>`).run();
    }
  };

  // 이미지 업로드 처리
  const handleImageClick = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      try {
        const imageData = await StudyService.uploadImage(file);
        if (imageData.url) {
          editor.chain().focus().setImage({ src: imageData.url }).run();
        }
      } catch (error) {
        alert('이미지 업로드에 실패했습니다: ' + error.message);
      }
    };
    
    input.click();
  };

  // YouTube 비디오 처리
  const handleVideoSubmit = (videoUrl) => {
    if (!videoUrl) return;

    // YouTube URL을 embed URL로 변환
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = videoUrl.match(youtubeRegex);
    
    if (match) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      
      editor.chain().focus().setYouTubeVideo({
        src: embedUrl,
        width: 560,
        height: 315,
      }).run();
    } else {
      alert('올바른 YouTube URL을 입력해주세요.');
    }
  };

  // 테이블 삽입
  const handleTableClick = () => {
    if (!editor) return;

    // 현재 커서가 테이블 안에 있는지 확인
    if (editor.isActive('table')) {
      // 이미 테이블 안에 있으면 알림만 표시하고 새 테이블 삽입 방지
      alert('테이블 안에서는 새로운 테이블을 삽입할 수 없습니다.');
      return;
    }

    // 테이블이 아닌 곳에서만 테이블 삽입
    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  // 전체화면 토글
  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };


  if (!editor) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div>에디터를 로딩중...</div>
      </div>
    );
  }

  return (
    <div className={`border border-gray-300 rounded-lg overflow-hidden bg-white transition-all duration-300 ${
      isFullscreen 
        ? 'fixed inset-0 z-50 rounded-none' 
        : ''
    }`}>
      <EditorToolbar
        editor={editor}
        onLinkClick={handleLinkClick}
        onImageClick={handleImageClick}
        onVideoClick={() => setIsVideoModalOpen(true)}
        onTableClick={handleTableClick}
        onFullscreenToggle={handleFullscreenToggle}
      />
      
      <div className="editor-content">
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
        <EditorContent 
          editor={editor} 
          className={isFullscreen ? 'min-h-screen' : ''}
        />
      </div>

      <LinkModal
        isOpen={isLinkModalOpen}
        onClose={() => setIsLinkModalOpen(false)}
        onSubmit={handleLinkSubmit}
        initialText={linkData.text}
        initialUrl={linkData.url}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onSubmit={handleVideoSubmit}
      />
    </div>
  );
}