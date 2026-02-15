import { useCallback } from "react";

export const useAvatarGeneration = (rows, options) => {
  const getAvatar = useCallback((category, index) => {
    return `https://api.dicebear.com/9.x/avataaars/svg?seed=${category}-${index}`;
  }, []);

  return { getAvatar, isLoading: false };
};
