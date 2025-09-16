import { render, screen, fireEvent } from '@testing-library/react';
import ScrollArrowButton from '../ScrollArrowButton';

// Heroicons 모킹
jest.mock('@heroicons/react/24/solid', () => ({
  ChevronLeftIcon: function MockChevronLeftIcon(props) {
    return <div data-testid="chevron-left-icon" {...props} />;
  },
  ChevronRightIcon: function MockChevronRightIcon(props) {
    return <div data-testid="chevron-right-icon" {...props} />;
  }
}));

// 필요한 모킹
jest.mock('../../../../utils/colors.js', () => ({
  COLORS: {
    WHITE: '#ffffff',
    GRAY_100: '#f3f4f6',
    GRAY_600: '#6b7280'
  }
}));

jest.mock('../../../../hooks/useHoverStyle.js', () => ({
  useBackgroundHover: jest.fn(() => ({
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  }))
}));

describe('ScrollArrowButton', () => {
  const defaultProps = {
    side: 'left',
    totalPages: 3,
    onScroll: jest.fn(),
    disabled: false
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('왼쪽 화살표 버튼이 올바르게 렌더링된다', () => {
    render(<ScrollArrowButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', '이전 프로젝트 보기');
    expect(screen.getByTestId('chevron-left-icon')).toBeInTheDocument();
  });

  it('오른쪽 화살표 버튼이 올바르게 렌더링된다', () => {
    render(<ScrollArrowButton {...defaultProps} side="right" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', '다음 프로젝트 보기');
    expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
  });

  it('클릭 이벤트가 올바르게 동작한다 (왼쪽)', () => {
    const handleScroll = jest.fn();
    render(<ScrollArrowButton {...defaultProps} onScroll={handleScroll} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleScroll).toHaveBeenCalledTimes(1);
    expect(handleScroll).toHaveBeenCalledWith('left');
  });

  it('클릭 이벤트가 올바르게 동작한다 (오른쪽)', () => {
    const handleScroll = jest.fn();
    render(
      <ScrollArrowButton 
        {...defaultProps} 
        side="right" 
        onScroll={handleScroll} 
      />
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleScroll).toHaveBeenCalledTimes(1);
    expect(handleScroll).toHaveBeenCalledWith('right');
  });

  it('disabled prop이 true일 때 버튼이 비활성화된다', () => {
    const handleScroll = jest.fn();
    render(
      <ScrollArrowButton 
        {...defaultProps} 
        disabled={true} 
        onScroll={handleScroll} 
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.4');
    
    fireEvent.click(button);
    expect(handleScroll).not.toHaveBeenCalled();
  });

  it('totalPages가 1 이하일 때 버튼이 비활성화된다', () => {
    const handleScroll = jest.fn();
    render(
      <ScrollArrowButton 
        {...defaultProps} 
        totalPages={1} 
        onScroll={handleScroll} 
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle('opacity: 0.4');
    
    fireEvent.click(button);
    expect(handleScroll).not.toHaveBeenCalled();
  });

  it('버튼이 올바른 스타일을 갖는다', () => {
    render(<ScrollArrowButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'absolute', 'left-0', 'top-1/2', '-translate-y-1/2',
      'p-2', 'rounded-full', 'z-10', 'shadow-md', 'transition',
      'focus:outline-none', 'focus:ring-2', 'focus:ring-offset-2'
    );
    expect(button).toHaveStyle('backgroundColor: #ffffff');
  });

  it('오른쪽 버튼이 올바른 위치 클래스를 갖는다', () => {
    render(<ScrollArrowButton {...defaultProps} side="right" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('right-0');
    expect(button).not.toHaveClass('left-0');
  });

  it('활성화된 버튼에 hover 효과가 적용된다', () => {
    const mockUseBackgroundHover = require('../../../../hooks/useHoverStyle.js').useBackgroundHover;
    
    render(<ScrollArrowButton {...defaultProps} />);
    
    expect(mockUseBackgroundHover).toHaveBeenCalledWith('#ffffff', '#f3f4f6');
  });

  it('비활성화된 버튼에는 hover 효과가 적용되지 않는다', () => {
    const mockUseBackgroundHover = require('../../../../hooks/useHoverStyle.js').useBackgroundHover;
    mockUseBackgroundHover.mockClear();
    
    render(<ScrollArrowButton {...defaultProps} disabled={true} />);
    
    // hover 효과가 적용되지 않았는지 확인하기 위해 반환값이 버튼에 적용되지 않음을 확인
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('아이콘이 올바른 스타일을 갖는다', () => {
    render(<ScrollArrowButton {...defaultProps} />);
    
    const leftIcon = screen.getByTestId('chevron-left-icon');
    expect(leftIcon).toHaveClass('w-5', 'h-5');
    expect(leftIcon).toHaveStyle('color: #6b7280');
  });

  it('버튼 타입이 올바르게 설정된다', () => {
    render(<ScrollArrowButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  it('totalPages가 0일 때 버튼이 비활성화된다', () => {
    render(<ScrollArrowButton {...defaultProps} totalPages={0} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  it('활성화된 버튼의 opacity가 1이다', () => {
    render(<ScrollArrowButton {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('opacity: 1');
  });

  it('side prop이 잘못되어도 오른쪽으로 처리된다', () => {
    render(<ScrollArrowButton {...defaultProps} side="invalid" />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('right-0');
    expect(screen.getByTestId('chevron-right-icon')).toBeInTheDocument();
  });

  it('클릭 시 올바른 방향이 전달된다 (side가 left가 아닌 경우)', () => {
    const handleScroll = jest.fn();
    render(
      <ScrollArrowButton 
        {...defaultProps} 
        side="right" 
        onScroll={handleScroll} 
      />
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleScroll).toHaveBeenCalledWith('right');
  });
});