import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { StudyService } from '../services/studyService.js';
import { QUERY_KEYS } from '../utils/queryKeys.js';

// === 조회 쿼리들 ===

/**
 * 스터디 목록 조회 (모든 페이지에서 공유)
 * @param {Object} filters - 필터 옵션
 * @param {number} [filters.page=0] - 페이지 번호
 * @param {number} [filters.size=30] - 페이지 크기
 * @param {string} [filters.category] - 카테고리 필터
 * @param {string} [filters.author] - 작성자 ID
 */
export const useStudies = (filters = {}) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.list(filters),
    queryFn: async () => {
      const { page = 0, size = 30, category, author } = filters;
      
      // 카테고리별 조회
      if (category) {
        return await StudyService.getStudiesByCategory(category, page, size);
      }
      
      // 작성자별 조회 (내 스터디)
      if (author) {
        return await StudyService.getMyStudies(author, page, size);
      }
      
      // 전체 조회
      const data = await StudyService.getAllStudies(page, size);
      return data.content || data || [];
    },
    staleTime: 5 * 60 * 1000, // 5분간 신선
    gcTime: 10 * 60 * 1000,   // 10분 후 가비지 컬렉션
    select: (data) => data.content || data || []
  });
};

/**
 * 개별 스터디 상세 조회
 * @param {string} id - 스터디 ID
 */
export const useStudyDetail = (id) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.detail(id),
    queryFn: () => StudyService.getStudyById(id),
    enabled: !!id, // ID가 있을 때만 실행
    staleTime: 10 * 60 * 1000, // 상세 정보는 더 오래 캐시
    retry: (failureCount, error) => {
      // 404 에러는 재시도하지 않음
      if (error?.response?.status === 404) return false;
      return failureCount < 1;
    }
  });
};

/**
 * 내 스터디 목록 조회 (MyProfile 전용)
 * @param {string} userId - 사용자 ID
 */
export const useMyStudies = (userId) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.my(userId),
    queryFn: () => StudyService.getMyStudies(userId),
    enabled: !!userId,
    staleTime: 3 * 60 * 1000, // 3분간 캐시
  });
};

/**
 * 카테고리별 스터디 조회 (StudyChannel 전용)
 * @param {string} category - 카테고리명
 */
export const useStudiesByCategory = (category) => {
  return useQuery({
    queryKey: QUERY_KEYS.studies.category(category),
    queryFn: () => StudyService.getStudiesByCategory(category),
    enabled: !!category,
    staleTime: 5 * 60 * 1000,
  });
};

// === 변경 뮤테이션들 ===

/**
 * 스터디 생성
 */
export const useCreateStudy = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (content) => {
      const result = await StudyService.createStudy(content);
      
      // 출석체크도 함께 실행
      try {
        await StudyService.checkAttendance();
      } catch (attendanceError) {
        console.warn('출석체크 실패:', attendanceError);
      }
      
      return result;
    },
    onSuccess: (newStudy) => {
      // 🎯 모든 스터디 목록 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.studies.lists(),
        exact: false
      });
      
      // 🎯 새 스터디를 상세 캐시에 미리 저장
      if (newStudy.id) {
        queryClient.setQueryData(
          QUERY_KEYS.studies.detail(newStudy.id),
          newStudy
        );
      }
      
      // 🎯 홈페이지 기본 목록에 optimistic update
      queryClient.setQueryData(
        QUERY_KEYS.studies.list({}),
        (oldData) => {
          if (!oldData) return [newStudy];
          return [newStudy, ...oldData];
        }
      );
    },
    onError: (error) => {
      console.error('스터디 생성 실패:', error);
    }
  });
};

/**
 * 스터디 수정
 */
export const useUpdateStudy = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: ({ id, content }) => StudyService.updateStudy(id, content),
    onSuccess: (updatedStudy, { id, content }) => {
      // 🎯 해당 스터디의 상세 캐시 업데이트
      queryClient.setQueryData(
        QUERY_KEYS.studies.detail(id),
        (oldData) => ({
          ...oldData,
          content,
          updatedAt: new Date().toISOString()
        })
      );
      
      // 🎯 모든 목록 캐시에서 해당 아이템 업데이트
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.studies.lists(),
        exact: false
      });
    },
    onError: (error) => {
      console.error('스터디 수정 실패:', error);
    }
  });
};

/**
 * 스터디 삭제
 */
export const useDeleteStudy = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: (id) => StudyService.deleteStudy(id),
    onSuccess: (_, deletedId) => {
      // 🎯 해당 스터디의 상세 캐시 제거
      queryClient.removeQueries({
        queryKey: QUERY_KEYS.studies.detail(deletedId)
      });
      
      // 🎯 모든 목록에서 해당 아이템 제거
      queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.studies.lists(),
        exact: false
      });
    },
    onError: (error) => {
      console.error('스터디 삭제 실패:', error);
    }
  });
};