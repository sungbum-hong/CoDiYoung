import { StudyService } from '../../../services/studyService.js';

export const useImageUpload = (editor) => {
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

  return {
    handleImageClick
  };
};