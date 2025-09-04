import { useState } from 'react';
import BaseModal from '../../../ui/BaseModal.jsx';
import Button from '../../../ui/Button.jsx';
import { COLORS } from '../../../utils/colors.js';

export default function LinkModal({ isOpen, onClose, onSubmit, initialText = '', initialUrl = '' }) {
  const [linkText, setLinkText] = useState(initialText);
  const [linkUrl, setLinkUrl] = useState(initialUrl);

  const handleSubmit = () => {
    onSubmit(linkText.trim(), linkUrl.trim());
    handleClose();
  };

  const handleClose = () => {
    setLinkText('');
    setLinkUrl('');
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      size="CUSTOM"
      style={{ width: '400px', height: '300px' }}
    >
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-lg font-semibold mb-4">링크 추가</h3>
        
        <div className="flex-1 space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">링크 텍스트</label>
            <input
              type="text"
              value={linkText}
              onChange={(e) => setLinkText(e.target.value)}
              placeholder="표시될 텍스트를 입력하세요"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              style={{ 
                borderColor: COLORS.GRAY_300,
                focusRingColor: COLORS.PRIMARY 
              }}
              autoFocus
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">URL</label>
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              style={{ 
                borderColor: COLORS.GRAY_300,
                focusRingColor: COLORS.PRIMARY 
              }}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={handleClose}>
            취소
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSubmit}
            disabled={!linkText.trim() && !linkUrl.trim()}
          >
            적용
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}