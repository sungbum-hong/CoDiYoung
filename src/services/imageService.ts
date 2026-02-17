// Mock Image Service
// TODO: Replace with actual API implementation when backend is ready

export const ImageService = {
  /**
   * 이미지 업로드
   */
  uploadImage: async (file: File): Promise<string> => {
    // Mock: 랜덤 이미지 URL 반환
    return `https://api.dicebear.com/9.x/avataaars/svg?seed=${Date.now()}`;
  },

  /**
   * 이미지 삭제
   */
  deleteImage: async (imageKey: string): Promise<void> => {
    return;
  },

  /**
   * 이미지 URL 가져오기
   */
  getImageUrl: (imageKey: string): string => {
    return imageKey;
  },
};
