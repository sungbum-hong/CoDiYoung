import { useState } from 'react';

export const useVideoHandler = (editor) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleVideoSubmit = (videoUrl) => {
    if (!videoUrl) return;

    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = videoUrl.match(youtubeRegex);
    
    if (match) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      
      editor.chain().focus().setYouTubeVideo({
        src: embedUrl,
        width: 560,
        height: 315,
      }).run();
    } else {
      alert('올바른 YouTube URL을 입력해주세요.');
    }
  };

  const closeVideoModal = () => setIsVideoModalOpen(false);

  return {
    isVideoModalOpen,
    handleVideoClick,
    handleVideoSubmit,
    closeVideoModal
  };
};