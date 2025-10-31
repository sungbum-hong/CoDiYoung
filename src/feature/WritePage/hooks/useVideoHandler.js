import { useState } from 'react';

export const useVideoHandler = (editor) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleVideoSubmit = (videoUrl) => {
    if (!videoUrl) {
      return;
    }

    // 더 포괄적인 YouTube URL 정규식
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.|m\.|music\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;

    const match = videoUrl.match(youtubeRegex);

    if (match) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;

      const result = editor.chain().focus().setYouTubeVideo({
        src: embedUrl,
        width: 560,
        height: 315,
      }).run();

      if (!result) {
        alert('YouTube 영상 삽입에 실패했습니다. URL을 확인해주세요.');
      }
    } else {
      alert('올바른 YouTube URL을 입력해주세요. 예: https://www.youtube.com/watch?v=LmZD-TU96q4');
    }

    setIsVideoModalOpen(false);
  };

  const closeVideoModal = () => setIsVideoModalOpen(false);

  return {
    isVideoModalOpen,
    handleVideoClick,
    handleVideoSubmit,
    closeVideoModal
  };
};