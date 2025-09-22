import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { StudyService } from '../../../services/studyService.js';

// 프로필 데이터를 가져오는 React Query 훅
export function useProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: StudyService.getMyProfile,
    staleTime: 5 * 60 * 1000, // 5분 동안 fresh
    cacheTime: 10 * 60 * 1000, // 10분 동안 캐시 유지
    retry: 2, // 실패 시 2번 재시도
    refetchOnWindowFocus: false, // 창 포커스 시 자동 refetch 비활성화
  });
}

// 닉네임 변경 mutation 훅
export function useUpdateNickname() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: StudyService.updateNickname,
    onSuccess: () => {
      // 성공 시 프로필 캐시 무효화하여 최신 데이터 가져오기
      queryClient.invalidateQueries(['profile']);
      alert('닉네임이 성공적으로 변경되었습니다.');
    },
    onError: (error) => {
      alert('닉네임 변경에 실패했습니다: ' + error.message);
    }
  });
}

// 이메일 변경 mutation 훅
export function useUpdateEmail() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: StudyService.updateEmail,
    onSuccess: () => {
      // 성공 시 프로필 캐시 무효화하여 최신 데이터 가져오기
      queryClient.invalidateQueries(['profile']);
      alert('이메일이 성공적으로 변경되었습니다.');
    },
    onError: (error) => {
      alert('이메일 변경에 실패했습니다: ' + error.message);
    }
  });
}