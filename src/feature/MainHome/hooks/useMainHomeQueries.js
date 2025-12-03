import { useQuery } from '@tanstack/react-query';
import { StudyService } from '../../../services/study/StudyService.js';
import { ProjectService } from '../../../services/project/ProjectService.js';
import { HomeService } from '../../../services/homeService.js';

/**
 * MainHome 전용 스터디 카테고리 데이터 조회
 * @param {Object} params - 카테고리별 사이즈 설정
 */
export const useMainHomeStudies = (params = {}) => {
  const defaultParams = {
    codingSize: 5,
    designSize: 5,
    videoSize: 5
  };

  const queryParams = { ...defaultParams, ...params };

  return useQuery({
    queryKey: ['mainHome', 'studies', 'grouped', queryParams],
    queryFn: () => StudyService.getGroupedStudies(queryParams),
    staleTime: 5 * 60 * 1000, // 5분 캐시
    select: (data) => {
      // 카테고리 매핑
      const categoryMap = {
        coding: { label: "코딩", key: "coding" },
        design: { label: "디자인", key: "design" },
        video: { label: "영상편집", key: "video" }
      };

      // 표시할 행 데이터 생성
      return Object.entries(categoryMap).map(([key, config]) => {
        const categoryData = data?.[key];
        const users = categoryData?.content || [];

        return {
          label: config.label,
          key: key,
          count: users.length,
          users: users  // API 응답 구조: { userId, userImage, category }
        };
      });
    },
    retry: 1
  });
};

/**
 * MainHome 전용 프로젝트 데이터 조회
 */
export const useMainHomeProjects = () => {
  return useQuery({
    queryKey: ['mainHome', 'projects'],
    queryFn: () => ProjectService.getAllProjects(),
    staleTime: 10 * 60 * 1000, // 10분 캐시 (메인 홈이므로 더 긴 캐시)
    select: (data) => {
      // 프로젝트 데이터 가공
      return data?.content || data || [];
    },
    retry: 1
  });
};

/**
 * MainHome 배너 목록 조회
 */
export const useMainHomeBanners = () => {
  return useQuery({
    queryKey: ['mainHome', 'banners'],
    queryFn: () => HomeService.getBanners(),
    staleTime: 10 * 60 * 1000,
    select: (data) => data || [],
    retry: 1
  });
};

/**
 * MainHome 파트너 목록 조회
 */
export const useMainHomePartners = () => {
  return useQuery({
    queryKey: ['mainHome', 'partners'],
    queryFn: () => HomeService.getPartners(),
    staleTime: 10 * 60 * 1000,
    select: (data) => data || [],
    retry: 1
  });
};