import { useState } from "react";
import { COLORS } from "../../../../utils/colors.js";
import { ProjectService } from "../../../../services/projectService.js";

export default function ImageUploadSection({ onImageUpload }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const validateImageFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      throw new Error('JPG, PNG, GIF, WEBP 형식의 이미지만 업로드 가능합니다.');
    }

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      throw new Error('이미지 크기는 5MB 이하여야 합니다.');
    }

    return true;
  };

  const handleImageUpload = async (file) => {
    try {
      validateImageFile(file);
      setIsUploading(true);

      
      // ProjectService의 이미지 업로드 사용
      const imageKey = await ProjectService.uploadProjectImage(file);
      
      const uploadResult = { key: imageKey };
      onImageUpload(uploadResult);

      // 미리보기 생성
      const reader = new FileReader();
      reader.onload = (e) => setImagePreview(e.target.result);
      reader.readAsDataURL(file);

    } catch (error) {
      console.error('이미지 업로드 에러:', error);
      alert('이미지 업로드에 실패했습니다: ' + error.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleImageUpload(files[0]);
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
    e.target.value = '';
  };

  const handleImageRemove = () => {
    setImagePreview(null);
    onImageUpload(null);
  };

  return (
    <div 
      className={`w-full h-40 border-2 rounded-md flex items-center justify-center relative cursor-pointer transition-all duration-200 ${
        isDragOver ? 'border-dashed scale-105' : 'border-solid'
      }`}
      style={{ 
        borderColor: isDragOver ? COLORS.PRIMARY : COLORS.PRIMARY,
        backgroundColor: isDragOver ? `${COLORS.PRIMARY}10` : 'transparent'
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('imageFileInput').click()}
    >
      {isUploading ? (
        <div className="flex flex-col items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2" 
               style={{ borderColor: COLORS.PRIMARY }}></div>
          <p className="mt-2 text-sm" style={{ color: COLORS.GRAY_400 }}>업로드 중...</p>
        </div>
      ) : imagePreview ? (
        <div className="relative w-full h-full">
          <img 
            src={imagePreview} 
            alt="업로드된 이미지" 
            className="w-full h-full object-cover rounded-md"
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleImageRemove();
            }}
            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
          >
            ×
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-sm text-center" style={{ color: COLORS.GRAY_400 }}>
            {isDragOver ? '파일을 여기에 놓으세요' : '이미지 업로드 (선택사항)'}
          </p>
        </div>
      )}
      
      <input
        id="imageFileInput"
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
}