import { useState } from 'react';
import { sanitizeUrl } from '../utils/sanitizer.js';

export const useLinkHandler = (editor) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkData, setLinkData] = useState({ text: '', url: '' });

  const handleLinkClick = () => {
    console.log('🔗 [useLinkHandler] handleLinkClick 시작');
    console.log('🔗 [useLinkHandler] 에디터 상태:', !!editor);
    
    if (!editor) {
      console.log('🔗 [useLinkHandler] 에디터가 없음');
      return;
    }

    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, '');
    const currentLink = editor.getAttributes('link');
    
    console.log('🔗 [useLinkHandler] 선택된 텍스트:', text);
    console.log('🔗 [useLinkHandler] 현재 링크 속성:', currentLink);
    console.log('🔗 [useLinkHandler] 선택 범위:', { from, to });
    
    setLinkData({ 
      text: text, 
      url: currentLink.href || '' 
    });
    setIsLinkModalOpen(true);
    console.log('🔗 [useLinkHandler] 링크 모달 열림');
  };

  const handleLinkSubmit = (linkText, linkUrl) => {
    console.log('🔗 [useLinkHandler] handleLinkSubmit 시작');
    console.log('🔗 [useLinkHandler] 링크 텍스트:', linkText);
    console.log('🔗 [useLinkHandler] 링크 URL:', linkUrl);
    console.log('🔗 [useLinkHandler] 에디터 상태:', !!editor);
    
    if (!editor) {
      console.log('🔗 [useLinkHandler] 에디터가 없음');
      return;
    }

    if (!linkUrl) {
      console.log('🔗 [useLinkHandler] URL이 없어서 링크 제거');
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    let url = linkUrl.trim();
    console.log('🔗 [useLinkHandler] 입력 URL (trim 후):', url);
    
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
      console.log('🔗 [useLinkHandler] https 추가 후 URL:', url);
    }

    const sanitizedUrl = sanitizeUrl(url);
    console.log('🔗 [useLinkHandler] sanitizeUrl 결과:', sanitizedUrl);
    
    if (!sanitizedUrl) {
      console.warn('🔗 [useLinkHandler] 유효하지 않은 URL:', linkUrl);
      
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff6b6b;
        color: white;
        padding: 12px 24px;
        border-radius: 6px;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      `;
      notification.textContent = '유효하지 않은 URL입니다.';
      
      document.body.appendChild(notification);
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 3000);
      
      return;
    }

    const { from, to } = editor.state.selection;
    const hasTextSelection = from !== to;
    console.log('🔗 [useLinkHandler] 텍스트 선택 여부:', hasTextSelection);
    console.log('🔗 [useLinkHandler] 선택 범위:', { from, to });

    if (hasTextSelection) {
      console.log('🔗 [useLinkHandler] 선택된 텍스트에 링크 적용');
      const result = editor.chain().focus().extendMarkRange('link').setLink({ href: sanitizedUrl }).run();
      console.log('🔗 [useLinkHandler] setLink 결과:', result);
    } else {
      const text = linkText || sanitizedUrl;
      const sanitizedText = text.replace(/[<>"'&]/g, (char) => {
        const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' };
        return entities[char];
      });
      
      console.log('🔗 [useLinkHandler] 새로운 링크 삽입');
      console.log('🔗 [useLinkHandler] 텍스트:', sanitizedText);
      console.log('🔗 [useLinkHandler] URL:', sanitizedUrl);
      
      const result = editor.chain().focus().insertContent(`<a href="${sanitizedUrl}">${sanitizedText}</a>`).run();
      console.log('🔗 [useLinkHandler] insertContent 결과:', result);
    }
  };

  const closeLinkModal = () => setIsLinkModalOpen(false);

  return {
    isLinkModalOpen,
    linkData,
    handleLinkClick,
    handleLinkSubmit,
    closeLinkModal
  };
};