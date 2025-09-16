import { renderHook, act } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { useStudyNavigation } from '../useStudyNavigation';

// React Router DOM 모킹
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

// ROUTES 상수 모킹
jest.mock('../../../constants/routes', () => ({
  ROUTES: {
    STUDY_CATEGORY: '/study/:category',
    WRITE: '/write'
  }
}));

describe('useStudyNavigation', () => {
  const mockNavigate = jest.fn();
  
  beforeEach(() => {
    useNavigate.mockReturnValue(mockNavigate);
    jest.clearAllMocks();
  });

  it('카테고리 클릭 시 올바른 경로로 네비게이션한다', () => {
    const { result } = renderHook(() => useStudyNavigation());
    
    act(() => {
      result.current.handleCategoryClick('frontend');
    });
    
    expect(mockNavigate).toHaveBeenCalledWith('/study/frontend');
  });

  it('백엔드 카테고리 클릭 시 올바른 경로로 네비게이션한다', () => {
    const { result } = renderHook(() => useStudyNavigation());
    
    act(() => {
      result.current.handleCategoryClick('backend');
    });
    
    expect(mockNavigate).toHaveBeenCalledWith('/study/backend');
  });

  it('글쓰기 클릭 시 write 페이지로 이동한다', () => {
    const { result } = renderHook(() => useStudyNavigation());
    
    act(() => {
      result.current.handleWriteClick();
    });
    
    expect(mockNavigate).toHaveBeenCalledWith('/write');
  });

  it('카테고리 값이 없을 때도 안전하게 처리한다', () => {
    const { result } = renderHook(() => useStudyNavigation());
    
    act(() => {
      result.current.handleCategoryClick('');
    });
    
    expect(mockNavigate).toHaveBeenCalledWith('/study/');
  });

  it('특수 문자가 포함된 카테고리도 올바르게 처리한다', () => {
    const { result } = renderHook(() => useStudyNavigation());
    
    act(() => {
      result.current.handleCategoryClick('full-stack');
    });
    
    expect(mockNavigate).toHaveBeenCalledWith('/study/full-stack');
  });
});