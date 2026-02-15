import { useQuery } from "@tanstack/react-query";
import { PROJECTS } from "../../../mock/projects.js";

// Mock Data for Categories
const MOCK_STUDY_CATEGORIES = {
  coding: {
    content: [
      {
        userId: 1,
        userImage: "https://api.dicebear.com/9.x/avataaars/svg?seed=1",
        category: "coding",
      },
      {
        userId: 2,
        userImage: "https://api.dicebear.com/9.x/avataaars/svg?seed=2",
        category: "coding",
      },
    ],
  },
  design: {
    content: [
      {
        userId: 3,
        userImage: "https://api.dicebear.com/9.x/avataaars/svg?seed=3",
        category: "design",
      },
    ],
  },
  video: {
    content: [],
  },
};

/**
 * MainHome 전용 스터디 카테고리 데이터 조회
 */
export const useMainHomeStudies = (params = {}) => {
  return useQuery({
    queryKey: ["mainHome", "studies", "grouped", params],
    queryFn: async () => MOCK_STUDY_CATEGORIES,
    staleTime: Infinity,
    select: (data) => {
      const categoryMap = {
        coding: { label: "코딩", key: "coding" },
        design: { label: "디자인", key: "design" },
        video: { label: "영상편집", key: "video" },
      };

      return Object.entries(categoryMap).map(([key, config]) => {
        const categoryData = data?.[key];
        const users = categoryData?.content || [];

        return {
          label: config.label,
          key: key,
          count: users.length,
          users: users,
        };
      });
    },
  });
};

/**
 * MainHome 전용 프로젝트 데이터 조회
 */
export const useMainHomeProjects = () => {
  return useQuery({
    queryKey: ["mainHome", "projects"],
    queryFn: async () => PROJECTS,
    staleTime: Infinity,
    select: (data) => data || [],
  });
};

/**
 * MainHome 배너 목록 조회
 */
export const useMainHomeBanners = () => {
  return useQuery({
    queryKey: ["mainHome", "banners"],
    queryFn: async () => [],
    staleTime: Infinity,
    select: (data) => data || [],
  });
};

/**
 * MainHome 파트너 목록 조회
 */
export const useMainHomePartners = () => {
  return useQuery({
    queryKey: ["mainHome", "partners"],
    queryFn: async () => [],
    staleTime: Infinity,
    select: (data) => data || [],
  });
};
