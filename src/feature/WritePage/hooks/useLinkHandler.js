import { useState } from 'react';
import { sanitizeUrl } from '../utils/sanitizer.js';

export const useLinkHandler = (editor) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkData, setLinkData] = useState({ text: '', url: '' });

  const handleLinkClick = () => {
    
    if (!editor) {
      return;
    }

    const { from, to } = editor.state.selection;
    const text = editor.state.doc.textBetween(from, to, '');
    const currentLink = editor.getAttributes('link');
    
    
    setLinkData({ 
      text: text, 
      url: currentLink.href || '' 
    });
    setIsLinkModalOpen(true);
  };

  const handleLinkSubmit = (linkText, linkUrl) => {
    
    if (!editor) {
      return;
    }

    if (!linkUrl) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    let url = linkUrl.trim();
    
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    const sanitizedUrl = sanitizeUrl(url);
    
    if (!sanitizedUrl) {
      
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

    if (hasTextSelection) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: sanitizedUrl }).run();
    } else {
      const text = linkText || sanitizedUrl;
      const sanitizedText = text.replace(/[<>"'&]/g, (char) => {
        const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' };
        return entities[char];
      });
      
      
      editor.chain().focus().insertContent(`<a href="${sanitizedUrl}">${sanitizedText}</a>`).run();
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