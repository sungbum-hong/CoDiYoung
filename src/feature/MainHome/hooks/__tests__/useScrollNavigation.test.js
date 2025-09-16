import { renderHook, act } from '@testing-library/react';
import { useScrollNavigation } from '../useScrollNavigation';

// Mock DOM methods
const mockScrollTo = jest.fn();
const mockAddEventListener = jest.fn();
const mockRemoveEventListener = jest.fn();

// Mock HTMLElement
Object.defineProperty(HTMLElement.prototype, 'scrollTo', {
  writable: true,
  value: mockScrollTo,
});

Object.defineProperty(HTMLElement.prototype, 'addEventListener', {
  writable: true,
  value: mockAddEventListener,
});

Object.defineProperty(HTMLElement.prototype, 'removeEventListener', {
  writable: true,
  value: mockRemoveEventListener,
});

// Mock scrollWidth and clientWidth
Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
  configurable: true,
  get: function() {
    return 1000; // 스크롤 가능한 전체 너비
  },
});

Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
  configurable: true,
  get: function() {
    return 300; // 보이는 영역 너비
  },
});

describe('useScrollNavigation', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('초기 상태가 올바르게 설정된다', () => {
    const { result } = renderHook(() => useScrollNavigation());
    
    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(1);
    expect(result.current.scrollRef).toBeDefined();
    expect(typeof result.current.scroll).toBe('function');
    expect(typeof result.current.onScroll).toBe('function');
  });

  it('다음 페이지로 스크롤할 수 있다', () => {
    const { result } = renderHook(() => useScrollNavigation());
    
    // Mock DOM element
    const mockElement = {
      scrollTo: mockScrollTo,
      scrollWidth: 1000,
      clientWidth: 300,
    };
    result.current.scrollRef.current = mockElement;
    
    act(() => {
      result.current.scroll('next');
    });
    
    expect(mockScrollTo).toHaveBeenCalledWith({
      left: 300,
      behavior: 'smooth'
    });
    expect(result.current.currentPage).toBe(2);
  });

  it('이전 페이지로 스크롤할 수 있다', () => {
    const { result } = renderHook(() => useScrollNavigation());
    
    // Mock DOM element
    const mockElement = {
      scrollTo: mockScrollTo,
      scrollWidth: 1000,
      clientWidth: 300,
    };
    result.current.scrollRef.current = mockElement;
    
    // 먼저 다음 페이지로 이동
    act(() => {
      result.current.scroll('next');
    });
    
    expect(result.current.currentPage).toBe(2);
    
    // 이전 페이지로 이동
    act(() => {
      result.current.scroll('prev');
    });
    
    expect(mockScrollTo).toHaveBeenLastCalledWith({
      left: 0,
      behavior: 'smooth'
    });
    expect(result.current.currentPage).toBe(1);
  });

  it('마지막 페이지에서 다음으로 스크롤 시 첫 페이지로 이동한다 (순환)', () => {
    const { result } = renderHook(() => useScrollNavigation());
    
    const mockElement = {
      scrollTo: mockScrollTo,
      scrollWidth: 900, // 3페이지 (300 * 3)
      clientWidth: 300,
    };
    result.current.scrollRef.current = mockElement;
    
    // 3페이지로 이동
    act(() => {
      result.current.scroll('next'); // 2페이지
    });
    act(() => {
      result.current.scroll('next'); // 3페이지
    });
    
    expect(result.current.currentPage).toBe(3);
    
    // 마지막 페이지에서 다음으로 이동 (순환)
    act(() => {
      result.current.scroll('next');
    });
    
    expect(mockScrollTo).toHaveBeenLastCalledWith({
      left: 0,
      behavior: 'smooth'
    });
    expect(result.current.currentPage).toBe(1);
  });

  it('첫 페이지에서 이전으로 스크롤 시 마지막 페이지로 이동한다 (순환)', () => {
    const { result } = renderHook(() => useScrollNavigation());
    
    const mockElement = {
      scrollTo: mockScrollTo,
      scrollWidth: 900, // 3페이지
      clientWidth: 300,
    };
    result.current.scrollRef.current = mockElement;
    
    // 첫 페이지에서 이전으로 이동 (순환)
    act(() => {
      result.current.scroll('prev');
    });
    
    expect(mockScrollTo).toHaveBeenCalledWith({
      left: 600, // 마지막 페이지 (3페이지 - 1) * 300
      behavior: 'smooth'
    });
    expect(result.current.currentPage).toBe(3);
  });

  it('스크롤 이벤트를 올바르게 처리한다', () => {
    const { result } = renderHook(() => useScrollNavigation());
    
    const mockElement = {
      scrollLeft: 150, // 첫 번째 페이지의 중간
      clientWidth: 300,
    };
    
    const scrollEvent = {
      target: mockElement
    };
    
    act(() => {
      result.current.onScroll(scrollEvent);
    });
    
    expect(result.current.currentPage).toBe(1);
  });

  it('ref가 없을 때 안전하게 처리한다', () => {
    const { result } = renderHook(() => useScrollNavigation());
    
    // ref를 null로 설정
    result.current.scrollRef.current = null;
    
    act(() => {
      result.current.scroll('next');
    });
    
    // 에러가 발생하지 않아야 함
    expect(result.current.currentPage).toBe(1);
  });
});