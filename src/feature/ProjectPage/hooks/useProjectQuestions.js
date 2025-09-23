import { useQuery } from '@tanstack/react-query';
import { ProjectService } from '../../../services/projectService.js';

// 프로젝트 질문 데이터를 가져오는 React Query 훅
export function useProjectQuestions(projectId) {
  return useQuery({
    queryKey: ['projectQuestions', projectId],
    queryFn: () => ProjectService.getProjectQuestions(projectId),
    enabled: !!projectId, // projectId가 있을 때만 실행
    staleTime: 5 * 60 * 1000, // 5분 동안 fresh
    cacheTime: 10 * 60 * 1000, // 10분 동안 캐시 유지
    retry: 2, // 실패 시 2번 재시도
  });
}