import { useState, useEffect, useMemo, useRef } from 'react';
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
  
  // 생성 중복 방지를 위한 ref
  const isGeneratingRef = useRef(false);
  const lastCategoriesRef = useRef('');

  const defaultOptions = useMemo(() => ({
    size: 96,
    ...options
  }), [options.size]); // size만 감지

  useEffect(() => {
    // categories를 문자열로 변환해서 변화 감지
    const categoriesKey = !categories || categories.length === 0 ? '' : 
      JSON.stringify(categories.map(cat => ({ label: cat?.label, count: cat?.count })));

    // 이전과 같으면 중복 실행 방지
    if (categoriesKey === lastCategoriesRef.current || isGeneratingRef.current) {
      return;
    }

    lastCategoriesRef.current = categoriesKey;

    // 빈 카테고리일 때는 아바타 초기화
    if (!categories || categories.length === 0) {
      setAvatars({});
      setIsLoading(false);
      return;
    }

    const generateAvatars = async () => {
      if (isGeneratingRef.current) return;
      
      isGeneratingRef.current = true;
      setIsLoading(true);
      setError(null);
      
      try {
        const newAvatars = {};
        
        for (const category of categories) {
          if (!category || typeof category !== 'object' || !category.label || typeof category.count !== 'number') {
            continue;
          }
          
          for (let i = 0; i < category.count; i++) {
            const seed = `${category.label}-${i}`;

            try {
              const avatar = createAvatar(pixelArt, {
                seed,
                size: defaultOptions.size,
              });
              
              newAvatars[seed] = await avatar.toDataUri();
            } catch (avatarError) {
              newAvatars[seed] = null;
            }
          }
        }
        
        setAvatars(newAvatars);
      } catch (err) {
        setError(err);
        setAvatars({});
      } finally {
        setIsLoading(false);
        isGeneratingRef.current = false;
      }
    };

    generateAvatars();
  }, [categories, defaultOptions.size]); // 필요한 의존성만 포함

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