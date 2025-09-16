import { useEffect } from 'react';

export const useContentSync = (editor, content, isUpdatingFromProps) => {
  const normalizeHTML = (html) => {
    return html?.replace(/<p><\/p>/g, '').replace(/^\s+|\s+$/g, '') || '';
  };

  const isEmptyContent = (content) => {
    return !content || content.trim() === '' || content === '<p></p>';
  };

  const restoreCursorPosition = (selection) => {
    if (!selection || selection.from > editor.state.doc.content.size) return;
    
    setTimeout(() => {
      try {
        editor.commands.setTextSelection(selection.from);
      } catch (e) {
        // 커서 복원 실패시 무시
      }
    }, 0);
  };

  useEffect(() => {
    if (!editor) return;

    const currentHTML = editor.getHTML();
    const normalizedContent = normalizeHTML(content);
    const normalizedCurrent = normalizeHTML(currentHTML);

    if (normalizedContent === normalizedCurrent) return;
    if (editor.isFocused) return;

    isUpdatingFromProps.current = true;
    const currentSelection = editor.state.selection;

    if (isEmptyContent(content)) {
      editor.commands.clearContent();
    } else {
      editor.commands.setContent(content, false);
      restoreCursorPosition(currentSelection);
    }

    setTimeout(() => {
      isUpdatingFromProps.current = false;
    }, 0);
  }, [content, editor, isUpdatingFromProps]);
};