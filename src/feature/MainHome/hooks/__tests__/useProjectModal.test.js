import { renderHook, act } from '@testing-library/react';
import { useProjectModal } from '../useProjectModal';

// Mock 프로젝트 데이터
const mockProjects = [
  {
    id: 1,
    title: 'React 프로젝트',
    description: 'React 학습용 프로젝트',
    techStacks: ['React', 'TypeScript'],
  },
  {
    id: 2,
    title: 'Node.js 프로젝트',
    description: 'Node.js API 서버',
    techStacks: ['Node.js', 'Express'],
  }
];

// 키보드 이벤트 Mock
const createKeyboardEvent = (key) => ({
  key,
  preventDefault: jest.fn(),
  stopPropagation: jest.fn(),
});

describe('useProjectModal', () => {
  let originalAddEventListener;
  let originalRemoveEventListener;

  beforeEach(() => {
    // 이벤트 리스너 모킹
    originalAddEventListener = document.addEventListener;
    originalRemoveEventListener = document.removeEventListener;
    document.addEventListener = jest.fn();
    document.removeEventListener = jest.fn();
    jest.clearAllMocks();
  });

  afterEach(() => {
    document.addEventListener = originalAddEventListener;
    document.removeEventListener = originalRemoveEventListener;
  });

  it('초기 상태가 올바르게 설정된다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.selectedProjectIndex).toBe(-1);
    expect(typeof result.current.openModal).toBe('function');
    expect(typeof result.current.closeModal).toBe('function');
    expect(typeof result.current.nextProject).toBe('function');
    expect(typeof result.current.prevProject).toBe('function');
    expect(typeof result.current.handleCardKeyDown).toBe('function');
  });

  it('모달을 열고 프로젝트를 선택할 수 있다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    act(() => {
      result.current.openModal(0);
    });
    
    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.selectedProjectIndex).toBe(0);
    expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
  });

  it('모달을 닫을 수 있다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    // 먼저 모달 열기
    act(() => {
      result.current.openModal(0);
    });
    
    expect(result.current.isModalOpen).toBe(true);
    
    // 모달 닫기
    act(() => {
      result.current.closeModal();
    });
    
    expect(result.current.isModalOpen).toBe(false);
    expect(result.current.selectedProjectIndex).toBe(-1);
    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
  });

  it('다음 프로젝트로 이동할 수 있다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    act(() => {
      result.current.openModal(0);
    });
    
    expect(result.current.selectedProjectIndex).toBe(0);
    
    act(() => {
      result.current.nextProject();
    });
    
    expect(result.current.selectedProjectIndex).toBe(1);
  });

  it('마지막 프로젝트에서 다음으로 이동 시 첫 번째로 순환한다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    act(() => {
      result.current.openModal(1); // 마지막 프로젝트
    });
    
    expect(result.current.selectedProjectIndex).toBe(1);
    
    act(() => {
      result.current.nextProject();
    });
    
    expect(result.current.selectedProjectIndex).toBe(0); // 첫 번째로 순환
  });

  it('이전 프로젝트로 이동할 수 있다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    act(() => {
      result.current.openModal(1);
    });
    
    expect(result.current.selectedProjectIndex).toBe(1);
    
    act(() => {
      result.current.prevProject();
    });
    
    expect(result.current.selectedProjectIndex).toBe(0);
  });

  it('첫 번째 프로젝트에서 이전으로 이동 시 마지막으로 순환한다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    act(() => {
      result.current.openModal(0); // 첫 번째 프로젝트
    });
    
    expect(result.current.selectedProjectIndex).toBe(0);
    
    act(() => {
      result.current.prevProject();
    });
    
    expect(result.current.selectedProjectIndex).toBe(1); // 마지막으로 순환
  });

  it('Enter 키 이벤트를 올바르게 처리한다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    const enterEvent = createKeyboardEvent('Enter');
    
    act(() => {
      result.current.handleCardKeyDown(enterEvent, 0);
    });
    
    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.selectedProjectIndex).toBe(0);
    expect(enterEvent.preventDefault).toHaveBeenCalled();
  });

  it('Space 키 이벤트를 올바르게 처리한다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    const spaceEvent = createKeyboardEvent(' ');
    
    act(() => {
      result.current.handleCardKeyDown(spaceEvent, 1);
    });
    
    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.selectedProjectIndex).toBe(1);
    expect(spaceEvent.preventDefault).toHaveBeenCalled();
  });

  it('다른 키 이벤트는 무시한다', () => {
    const { result } = renderHook(() => useProjectModal(mockProjects));
    
    const tabEvent = createKeyboardEvent('Tab');
    
    act(() => {
      result.current.handleCardKeyDown(tabEvent, 0);
    });
    
    expect(result.current.isModalOpen).toBe(false);
    expect(tabEvent.preventDefault).not.toHaveBeenCalled();
  });

  it('빈 프로젝트 배열로도 안전하게 동작한다', () => {
    const { result } = renderHook(() => useProjectModal([]));
    
    act(() => {
      result.current.openModal(0);
    });
    
    expect(result.current.isModalOpen).toBe(true);
    expect(result.current.selectedProjectIndex).toBe(0);
    
    // 빈 배열이므로 다음/이전 동작이 안전해야 함
    act(() => {
      result.current.nextProject();
    });
    
    expect(result.current.selectedProjectIndex).toBe(0);
  });

  it('컴포넌트 언마운트 시 이벤트 리스너가 정리된다', () => {
    const { result, unmount } = renderHook(() => useProjectModal(mockProjects));
    
    act(() => {
      result.current.openModal(0);
    });
    
    unmount();
    
    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
  });
});