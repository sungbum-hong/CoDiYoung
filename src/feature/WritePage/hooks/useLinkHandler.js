import { useState } from 'react';

export const useLinkHandler = (editor) => {
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [linkData, setLinkData] = useState({ text: '', url: '' });

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
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    let url = linkUrl;
    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    const { from, to } = editor.state.selection;
    const hasTextSelection = from !== to;

    if (hasTextSelection) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
    } else {
      const text = linkText || url;
      editor.chain().focus().insertContent(`<a href="${url}">${text}</a>`).run();
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