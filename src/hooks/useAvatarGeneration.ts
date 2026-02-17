import { useCallback } from "react";

export const useAvatarGeneration = (rows: any[] = [], options: any = {}) => {
  const getAvatar = useCallback((category: string, index: number) => {
    return `https://api.dicebear.com/9.x/avataaars/svg?seed=${category}-${index}`;
  }, []);

  return { getAvatar, isLoading: false };
};
