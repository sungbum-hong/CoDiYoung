import { ImageService } from '../../../services/imageService.js';
import { validateFileUpload } from '../utils/sanitizer.js';

export const useImageUpload = (editor) => {
  const handleImageClick = async () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      try {
        validateFileUpload(file);
        
        const imageKey = await ImageService.uploadImage(file);
        const imageUrl = await ImageService.getImageUrl(imageKey);
        const imageData = { url: imageUrl, key: imageKey };
        if (imageData.url) {
          editor.chain().focus().setImage({ 
            src: imageData.url,
            'data-id': imageData.id || 0,
            'data-key': imageData.key || imageData.url,
            alt: file.name.replace(/\.[^/.]+$/, ''),
            title: file.name
          }).run();
        }
      } catch (error) {
        const errorMessage = error.message || '이미지 업로드에 실패했습니다';
        
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
        notification.textContent = errorMessage;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
          if (notification.parentNode) {
            notification.parentNode.removeChild(notification);
          }
        }, 5000);
        
        // Silent error handling
      }
    };
    
    input.click();
  };

  return {
    handleImageClick
  };
};