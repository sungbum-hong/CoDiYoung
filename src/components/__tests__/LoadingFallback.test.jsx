import { render, screen } from '@testing-library/react';
import LoadingFallback from '../LoadingFallback';

// COLORS 모킹
jest.mock('../../utils/colors.js', () => ({
  COLORS: {
    PRIMARY: '#3b82f6',
    GRAY_600: '#6b7280'
  }
}));

describe('LoadingFallback', () => {
  it('기본 로딩 컴포넌트가 올바르게 렌더링된다', () => {
    render(<LoadingFallback />);
    
    const loadingContainer = screen.getByText('로딩 중...').closest('div');
    expect(loadingContainer).toBeInTheDocument();
  });

  it('기본 메시지가 올바르게 표시된다', () => {
    render(<LoadingFallback />);
    
    const message = screen.getByText('로딩 중...');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: #6b7280');
  });

  it('사용자 정의 메시지가 올바르게 표시된다', () => {
    render(<LoadingFallback message="데이터를 불러오는 중..." />);
    
    const message = screen.getByText('데이터를 불러오는 중...');
    expect(message).toBeInTheDocument();
    expect(message).toHaveStyle('color: #6b7280');
    
    // 기본 메시지는 표시되지 않음
    expect(screen.queryByText('로딩 중...')).not.toBeInTheDocument();
  });

  it('로딩 스피너가 올바르게 렌더링된다', () => {
    render(<LoadingFallback />);
    
    // 스피너 엘리먼트 찾기 (animate-spin 클래스를 가진 div)
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass(
      'w-4', 'h-4', 'border-2', 'border-t-transparent', 'rounded-full', 'animate-spin'
    );
  });

  it('스피너 스타일이 올바르게 적용된다', () => {
    render(<LoadingFallback />);
    
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toHaveStyle({
      borderColor: '#3b82f6',
      borderTopColor: 'transparent'
    });
  });

  it('컨테이너 레이아웃이 올바르게 구성된다', () => {
    render(<LoadingFallback />);
    
    // 메인 컨테이너
    const mainContainer = screen.getByText('로딩 중...').closest('div[class*="flex justify-center"]');
    expect(mainContainer).toHaveClass('flex', 'justify-center', 'items-center', 'h-32');
    
    // 내부 flex 컨테이너
    const innerContainer = screen.getByText('로딩 중...').parentElement;
    expect(innerContainer).toHaveClass('flex', 'items-center', 'gap-2');
  });

  it('빈 메시지를 전달해도 올바르게 동작한다', () => {
    render(<LoadingFallback message="" />);
    
    // 빈 메시지를 포함하는 span 엘리먼트 찾기
    const messageElement = document.querySelector('span[style*="color"]');
    expect(messageElement).toBeInTheDocument();
    expect(messageElement.textContent).toBe('');
    
    // 스피너는 여전히 표시됨
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('컴포넌트 구조가 올바르게 중첩된다', () => {
    render(<LoadingFallback message="테스트 메시지" />);
    
    // 구조 확인: div > div > (spinner + span)
    const message = screen.getByText('테스트 메시지');
    const innerContainer = message.parentElement;
    const mainContainer = innerContainer.parentElement;
    
    expect(mainContainer).toHaveClass('flex', 'justify-center', 'items-center', 'h-32');
    expect(innerContainer).toHaveClass('flex', 'items-center', 'gap-2');
    
    // 스피너와 메시지가 같은 컨테이너에 있는지 확인
    const spinner = document.querySelector('.animate-spin');
    expect(spinner.parentElement).toBe(innerContainer);
  });

  it('접근성을 위한 기본 구조가 올바르다', () => {
    render(<LoadingFallback />);
    
    // 로딩 상태를 나타내는 텍스트가 있는지 확인
    const loadingText = screen.getByText('로딩 중...');
    expect(loadingText).toBeInTheDocument();
    
    // 시각적 로딩 인디케이터(스피너)가 있는지 확인
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });
});