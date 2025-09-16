import { renderHook, waitFor } from '@testing-library/react';
import { useProjectData } from '../useProjectData';

// Mock 데이터
const mockProjects = [
  {
    id: 1,
    title: 'React 학습 프로젝트',
    description: 'React 기초부터 고급까지',
    techStacks: ['React', 'TypeScript', 'Next.js'],
    members: [
      { id: 1, name: '김철수', position: 'Frontend' },
      { id: 2, name: '이영희', position: 'Backend' }
    ],
    maxMembers: 5,
    currentMembers: 2,
    category: 'frontend',
    status: 'recruiting',
    createdAt: '2024-01-01',
  },
  {
    id: 2,
    title: 'Node.js API 서버',
    description: 'Express와 MongoDB를 활용한 API 서버',
    techStacks: ['Node.js', 'Express', 'MongoDB'],
    members: [
      { id: 3, name: '박민수', position: 'Backend' }
    ],
    maxMembers: 3,
    currentMembers: 1,
    category: 'backend',
    status: 'recruiting',
    createdAt: '2024-01-02',
  }
];

// fetch 모킹
global.fetch = jest.fn();

describe('useProjectData', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('초기 상태가 올바르게 설정된다', () => {
    const { result } = renderHook(() => useProjectData());
    
    expect(result.current.projects).toEqual([]);
    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);
  });

  it('프로젝트 데이터를 성공적으로 로드한다', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProjects,
    });
    
    const { result } = renderHook(() => useProjectData());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    expect(result.current.projects).toEqual(mockProjects);
    expect(result.current.error).toBe(null);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it('API 에러를 올바르게 처리한다', async () => {
    const errorMessage = 'Failed to fetch projects';
    fetch.mockRejectedValueOnce(new Error(errorMessage));
    
    const { result } = renderHook(() => useProjectData());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    expect(result.current.projects).toEqual([]);
    expect(result.current.error).toBe(errorMessage);
  });

  it('HTTP 에러 상태를 올바르게 처리한다', async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: 'Not Found',
    });
    
    const { result } = renderHook(() => useProjectData());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    expect(result.current.projects).toEqual([]);
    expect(result.current.error).toBe('HTTP error! status: 404');
  });

  it('빈 배열 응답을 올바르게 처리한다', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });
    
    const { result } = renderHook(() => useProjectData());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    expect(result.current.projects).toEqual([]);
    expect(result.current.error).toBe(null);
  });

  it('잘못된 JSON 응답을 처리한다', async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => {
        throw new Error('Invalid JSON');
      },
    });
    
    const { result } = renderHook(() => useProjectData());
    
    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
    
    expect(result.current.projects).toEqual([]);
    expect(result.current.error).toBe('Invalid JSON');
  });
});