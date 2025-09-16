import { useState } from 'react';

export const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleFullscreenToggle = () => {
    setIsFullscreen(!isFullscreen);
  };

  return {
    isFullscreen,
    handleFullscreenToggle
  };
};