import { EditorContent } from '@tiptap/react';
import { useEffect } from 'react';

// 훅들 import
import { useEditorConfig } from './hooks/useEditorConfig.js';
import { useContentSync } from './hooks/useContentSync.js';
import { useLinkHandler } from './hooks/useLinkHandler.js';
import { useImageUpload } from './hooks/useImageUpload.js';
import { useVideoHandler } from './hooks/useVideoHandler.js';
import { useTableHandler } from './hooks/useTableHandler.js';
import { useFullscreen } from './hooks/useFullscreen.js';

// 컴포넌트들 import
import EditorToolbar from './components/EditorToolbar.jsx';
import LinkModal from './components/LinkModal.jsx';
import VideoModal from './components/VideoModal.jsx';
import EditorStyles from './components/EditorStyles.jsx';

export default function TiptapEditor({ content = '', onChange }) {
  // 훅들 사용
  const { editor, isUpdatingFromProps } = useEditorConfig(content, onChange);
  const { isFullscreen, handleFullscreenToggle } = useFullscreen();
  const { isLinkModalOpen, linkData, handleLinkClick, handleLinkSubmit, closeLinkModal } = useLinkHandler(editor);
  const { handleImageClick } = useImageUpload(editor);
  const { isVideoModalOpen, handleVideoClick, handleVideoSubmit, closeVideoModal } = useVideoHandler(editor);
  const { handleTableClick } = useTableHandler(editor);

  // 컨텐츠 동기화
  useContentSync(editor, content, isUpdatingFromProps);



  if (!editor) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div>에디터를 로딩중...</div>
      </div>
    );
  }
  
  // 한 번만 로그 출력 (중복 방지)
  useEffect(() => {
    if (editor) {
      // Editor initialized successfully
    }
  }, [editor]);

  return (
    <div className={`border border-gray-300 rounded-lg bg-white transition-all duration-300 ${
      isFullscreen 
        ? 'fixed inset-0 top-24 z-50 rounded-none overflow-auto' 
        : 'overflow-hidden'
    }`}>
      <div className={isFullscreen ? 'sticky top-0 z-10 bg-white' : ''}>
        <EditorToolbar
          editor={editor}
          onLinkClick={handleLinkClick}
          onImageClick={handleImageClick}
          onVideoClick={handleVideoClick}
          onTableClick={handleTableClick}
          onFullscreenToggle={handleFullscreenToggle}
        />
      </div>
      
      <div className="editor-content tiptap-editor">
        <EditorStyles />
        <EditorContent 
          editor={editor} 
          className={isFullscreen ? 'min-h-screen' : ''}
        />
      </div>

      <LinkModal
        isOpen={isLinkModalOpen}
        onClose={closeLinkModal}
        onSubmit={handleLinkSubmit}
        initialText={linkData.text}
        initialUrl={linkData.url}
      />

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={closeVideoModal}
        onSubmit={handleVideoSubmit}
      />
    </div>
  );
}