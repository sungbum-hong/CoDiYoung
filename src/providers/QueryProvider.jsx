import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// React Query 클라이언트 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 기본 설정
      staleTime: 5 * 60 * 1000, // 5분간 신선
      gcTime: 10 * 60 * 1000,   // 10분 후 가비지 컬렉션 (구 cacheTime)
      retry: 1,                 // 실패 시 1번 재시도
      refetchOnWindowFocus: false, // 윈도우 포커스 시 재요청 안함
    },
    mutations: {
      retry: 0, // 뮤테이션은 재시도 안함
    },
  },
});

export default function QueryProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* 개발 환경에서만 DevTools 표시 */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools 
          initialIsOpen={false} 
          position="bottom-right"
        />
      )}
    </QueryClientProvider>
  );
}

// 다른 곳에서 사용할 수 있도록 export
export { queryClient };