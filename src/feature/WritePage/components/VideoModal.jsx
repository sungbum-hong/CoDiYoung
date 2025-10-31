import { useState } from 'react';
import BaseModal from '../../../ui/BaseModal.jsx';
import Button from '../../../ui/Button.jsx';
import { COLORS } from "../../../constants/colors.js";

export default function VideoModal({ isOpen, onClose, onSubmit }) {
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = () => {
    onSubmit(videoUrl.trim());
    handleClose();
  };

  const handleClose = () => {
    setVideoUrl('');
    onClose();
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      size="CUSTOM"
      style={{ width: '400px', height: '250px' }}
    >
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-lg font-semibold mb-4">YouTube 비디오 추가</h3>
        
        <div className="flex-1">
          <div>
            <label className="block text-sm font-medium mb-2">YouTube URL</label>
            <input
              type="url"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
              style={{ 
                borderColor: COLORS.GRAY_300,
                focusRingColor: COLORS.PRIMARY 
              }}
              autoFocus
            />
            <p className="text-xs text-gray-500 mt-1">
              YouTube URL을 붙여넣으세요
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-2 mt-4">
          <Button variant="outline" onClick={handleClose}>
            취소
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSubmit}
            disabled={!videoUrl.trim()}
          >
            추가
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}