import { useState, useEffect } from 'react';
import { createAvatar } from '@dicebear/core';
import { pixelArt } from '@dicebear/collection';

/**
 * 아바타 생성 커스텀 훅
 * @param {Array} categories - 카테고리 배열 [{ label, count }]
 * @param {Object} options - 아바타 생성 옵션
 * @returns {Object} { avatars, isLoading, error }
 */
export const useAvatarGeneration = (categories = [], options = {}) => {
  const [avatars, setAvatars] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const defaultOptions = {
    size: 96,
    ...options
  };

  useEffect(() => {
    if (categories.length === 0) return;

    // 이미 아바타가 생성되어 있으면 중복 실행 방지
    const totalAvatarsNeeded = categories.reduce((sum, cat) => sum + cat.count, 0);
    if (Object.keys(avatars).length === totalAvatarsNeeded) return;

    const generateAvatars = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const newAvatars = {};
        
        for (const category of categories) {
          for (let i = 0; i < category.count; i++) {
            const seed = `${category.label}-${i}`;
            
            // 이미 생성된 아바타는 스킵
            if (avatars[seed]) {
              newAvatars[seed] = avatars[seed];
              continue;
            }

            const avatar = createAvatar(pixelArt, {
              seed,
              ...defaultOptions,
            });
            
            newAvatars[seed] = await avatar.toDataUri();
          }
        }
        
        setAvatars(newAvatars);
      } catch (err) {
        console.error('아바타 생성 실패:', err);
        setError(err);
        // 실패 시 빈 상태로 설정하여 무한 로딩 방지
        setAvatars({});
      } finally {
        setIsLoading(false);
      }
    };

    generateAvatars();
  }, []); // options 변경도 감지

  /**
   * 특정 아바타 가져오기
   * @param {string} label - 카테고리 라벨
   * @param {number} index - 인덱스
   * @returns {string|null} 아바타 데이터 URL
   */
  const getAvatar = (label, index) => {
    const seed = `${label}-${index}`;
    return avatars[seed] || null;
  };

  /**
   * 아바타 재생성
   */
  const regenerateAvatars = () => {
    setAvatars({});
  };

  return {
    avatars,
    isLoading,
    error,
    getAvatar,
    regenerateAvatars
  };
};