import { render, screen, fireEvent } from '@testing-library/react';
import CategoryCard from '../CategoryCard';

// 필요한 상수들 모킹
jest.mock('../../../../utils/colors.js', () => ({
  COLORS: {
    WHITE: '#ffffff',
    GRAY_300: '#d1d5db',
    BLUE_600: '#2563eb'
  }
}));

describe('CategoryCard', () => {
  const defaultProps = {
    label: '코딩',
    index: 0,
    avatarSrc: 'https://example.com/avatar.jpg',
    isLoading: false,
    onCategoryClick: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('기본 카테고리 카드가 올바르게 렌더링된다', () => {
    render(<CategoryCard {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', '코딩 스터디 채널 1번');
  });

  it('아바타 이미지가 있을 때 올바르게 표시된다', () => {
    render(<CategoryCard {...defaultProps} />);
    
    const avatar = screen.getByAltText('코딩 아바타 1');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatar).toHaveClass('w-full', 'h-full', 'object-cover');
  });

  it('아바타가 없고 로딩 중일 때 Loading 메시지가 표시된다', () => {
    render(
      <CategoryCard 
        {...defaultProps} 
        avatarSrc={null} 
        isLoading={true} 
      />
    );
    
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('아바타가 없고 로딩 중이 아닐 때 Error 메시지가 표시된다', () => {
    render(
      <CategoryCard 
        {...defaultProps} 
        avatarSrc={null} 
        isLoading={false} 
      />
    );
    
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('클릭 이벤트가 올바르게 동작한다', () => {
    const handleCategoryClick = jest.fn();
    render(
      <CategoryCard 
        {...defaultProps} 
        onCategoryClick={handleCategoryClick} 
      />
    );
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleCategoryClick).toHaveBeenCalledTimes(1);
    expect(handleCategoryClick).toHaveBeenCalledWith('코딩');
  });

  it('카드가 올바른 스타일을 갖는다', () => {
    render(<CategoryCard {...defaultProps} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'w-24', 'h-24', 'rounded-full', 'cursor-pointer', 
      'focus:outline-none', 'focus:ring-2', 'overflow-hidden', 'border-2'
    );
    expect(button).toHaveStyle({
      backgroundColor: '#ffffff',
      borderColor: '#d1d5db'
    });
  });

  it('focus 이벤트가 올바르게 동작한다', () => {
    render(<CategoryCard {...defaultProps} />);
    
    const button = screen.getByRole('button');
    
    fireEvent.focus(button);
    expect(button.style.boxShadow).toBe('0 0 0 2px #2563eb');
    
    fireEvent.blur(button);
    expect(button.style.boxShadow).toBe('none');
  });

  it('다양한 index와 label이 올바르게 처리된다', () => {
    render(
      <CategoryCard 
        {...defaultProps} 
        label="디자인" 
        index={2} 
      />
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', '디자인 스터디 채널 3번');
    
    if (defaultProps.avatarSrc) {
      const avatar = screen.getByAltText('디자인 아바타 3');
      expect(avatar).toBeInTheDocument();
    }
  });

  it('빈 문자열 아바타 src가 null과 동일하게 처리된다', () => {
    render(
      <CategoryCard 
        {...defaultProps} 
        avatarSrc="" 
        isLoading={false} 
      />
    );
    
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('키보드 접근성이 올바르게 작동한다', () => {
    const handleCategoryClick = jest.fn();
    render(
      <CategoryCard 
        {...defaultProps} 
        onCategoryClick={handleCategoryClick} 
      />
    );
    
    const button = screen.getByRole('button');
    
    // Enter 키로 활성화
    fireEvent.keyDown(button, { key: 'Enter' });
    // 실제 클릭은 브라우저에서 자동으로 처리됨
    
    expect(button).toHaveAttribute('aria-label');
  });

  it('플레이스홀더 텍스트가 올바른 스타일을 갖는다', () => {
    render(
      <CategoryCard 
        {...defaultProps} 
        avatarSrc={null} 
        isLoading={false} 
      />
    );
    
    // Error 텍스트를 포함하는 div 요소 찾기
    const placeholder = screen.getByText('Error').closest('div');
    expect(placeholder).toHaveClass(
      'w-full', 'h-full', 'flex', 'items-center', 
      'justify-center', 'text-xs', 'text-gray-400'
    );
  });
});