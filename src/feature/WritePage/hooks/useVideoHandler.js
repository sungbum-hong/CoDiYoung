import { useState } from 'react';

export const useVideoHandler = (editor) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const handleVideoClick = () => {
    setIsVideoModalOpen(true);
  };

  const handleVideoSubmit = (videoUrl) => {
    console.log('🎬 [useVideoHandler] handleVideoSubmit 시작');
    console.log('🎬 [useVideoHandler] 입력된 URL:', videoUrl);
    
    if (!videoUrl) {
      console.log('🎬 [useVideoHandler] URL이 비어있음');
      return;
    }

    // 더 포괄적인 YouTube URL 정규식
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.|m\.|music\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/;
    console.log('🎬 [useVideoHandler] 사용할 정규식:', youtubeRegex);
    
    const match = videoUrl.match(youtubeRegex);
    console.log('🎬 [useVideoHandler] 정규식 매치 결과:', match);
    
    if (match) {
      const videoId = match[1];
      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
      console.log('🎬 [useVideoHandler] 추출된 비디오 ID:', videoId);
      console.log('🎬 [useVideoHandler] 생성된 embed URL:', embedUrl);
      
      console.log('🎬 [useVideoHandler] 에디터 상태:', !!editor);
      console.log('🎬 [useVideoHandler] setYouTubeVideo 함수:', typeof editor?.chain()?.focus()?.setYouTubeVideo);
      
      try {
        const result = editor.chain().focus().setYouTubeVideo({
          src: embedUrl,
          width: 560,
          height: 315,
        }).run();
        console.log('🎬 [useVideoHandler] setYouTubeVideo 실행 결과:', result);
      } catch (error) {
        console.error('🎬 [useVideoHandler] setYouTubeVideo 에러:', error);
      }
    } else {
      console.log('🎬 [useVideoHandler] URL이 정규식과 매치되지 않음');
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