import { render, screen, fireEvent } from '@testing-library/react';
import LoginButton from '../LoginButton';

// 필요한 상수들 모킹
jest.mock('../../utils/colors.js', () => ({
  COLORS: {
    GRAY_700: '#374151',
    GRAY_100: '#f3f4f6'
  }
}));

jest.mock('../../constants/messages.js', () => ({
  MESSAGES: {
    UI: {
      LOGIN: '로그인'
    }
  }
}));

describe('LoginButton', () => {
  it('기본 로그인 버튼이 올바르게 렌더링된다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    const button = screen.getByRole('button', { name: /로그인/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('로그인');
  });

  it('클릭 이벤트가 올바르게 동작한다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleLoginClick).toHaveBeenCalledTimes(1);
  });

  it('버튼의 기본 속성이 올바르게 설정된다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAttribute('aria-label', '로그인 모달 열기');
    expect(button).toHaveClass('btn-nav');
  });

  it('기본 스타일이 올바르게 적용된다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveStyle('color: #374151');
  });

  it('hover 효과가 올바르게 동작한다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    const button = screen.getByRole('button');
    
    // 마우스 진입 시
    fireEvent.mouseEnter(button);
    expect(button.style.backgroundColor).toBe('rgb(243, 244, 246)'); // GRAY_100 in RGB
    
    // 마우스 이탈 시  
    fireEvent.mouseLeave(button);
    expect(button.style.backgroundColor).toBe('transparent');
  });

  it('컨테이너 레이아웃이 올바르게 구성된다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('flex', 'items-center', 'space-x-2');
  });

  it('onLoginClick prop이 없어도 렌더링된다', () => {
    render(<LoginButton />);
    
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    
    // 클릭해도 에러가 발생하지 않아야 함
    fireEvent.click(button);
  });

  it('접근성 속성이 올바르게 설정된다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', '로그인 모달 열기');
  });

  it('로그인 텍스트가 메시지 상수에서 가져온다', () => {
    const handleLoginClick = jest.fn();
    render(<LoginButton onLoginClick={handleLoginClick} />);
    
    // 메시지 상수에서 정의한 텍스트가 표시되는지 확인
    expect(screen.getByText('로그인')).toBeInTheDocument();
  });
});