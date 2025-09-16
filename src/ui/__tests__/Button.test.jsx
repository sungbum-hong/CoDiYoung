import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

// 필요한 상수들 모킹
jest.mock('../../utils/colors.js', () => ({
  COLOR_VARIANTS: {
    button: {
      primary: { background: '#3b82f6', text: '#ffffff' },
      secondary: { background: '#f3f4f6', text: '#374151', border: '#d1d5db' }
    }
  },
  COLORS: {
    PRIMARY: '#3b82f6',
    SECONDARY: '#6b7280',
    WHITE: '#ffffff',
    BLACK: '#000000'
  }
}));

jest.mock('../../constants/config.js', () => ({
  CONFIG: {
    BUTTON_SIZES: {
      sm: { padding: '8px 12px', fontSize: '14px', height: '32px' },
      md: { padding: '10px 16px', fontSize: '16px', height: '40px' },
      lg: { padding: '12px 20px', fontSize: '18px', height: '48px' }
    },
    BORDER_RADIUS: { MEDIUM: 8 },
    ANIMATION: { TRANSITION_DURATION: 200 }
  }
}));

describe('Button', () => {
  it('기본 버튼이 올바르게 렌더링된다', () => {
    render(<Button>Click me</Button>);
    
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Click me');
  });

  it('다양한 variant가 올바르게 적용된다', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveClass('hover:brightness-90');

    rerender(<Button variant="secondary">Secondary</Button>);
    button = screen.getByRole('button');
    expect(button).not.toHaveClass('hover:brightness-90');

    rerender(<Button variant="outline">Outline</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('다양한 크기가 올바르게 적용된다', () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(<Button size="md">Medium</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    rerender(<Button size="lg">Large</Button>);
    button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('클릭 이벤트가 올바르게 동작한다', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled 상태가 올바르게 적용된다', () => {
    const handleClick = jest.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed');
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('다양한 type이 올바르게 설정된다', () => {
    const { rerender } = render(<Button type="button">Button</Button>);
    let button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');

    rerender(<Button type="submit">Submit</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');

    rerender(<Button type="reset">Reset</Button>);
    button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'reset');
  });

  it('secondary 버튼의 hover 효과가 동작한다', () => {
    render(<Button variant="secondary">Secondary</Button>);
    
    const button = screen.getByRole('button');
    
    // 마우스 진입 시
    fireEvent.mouseEnter(button);
    expect(button.style.backgroundColor).toBe('rgb(59, 130, 246)'); // PRIMARY color in RGB
    expect(button.style.color).toBe('rgb(255, 255, 255)'); // WHITE color in RGB
    
    // 마우스 이탈 시
    fireEvent.mouseLeave(button);
    expect(button.style.backgroundColor).toBe('transparent');
    expect(button.style.color).toBe('rgb(107, 114, 128)'); // SECONDARY color in RGB
  });

  it('사용자 정의 className과 style이 올바르게 적용된다', () => {
    render(
      <Button 
        className="custom-class" 
        style={{ margin: '10px' }}
      >
        Custom
      </Button>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveStyle('margin: 10px');
  });

  it('사용자 정의 마우스 이벤트 핸들러가 호출된다', () => {
    const handleMouseEnter = jest.fn();
    const handleMouseLeave = jest.fn();
    
    render(
      <Button 
        variant="secondary"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Hover me
      </Button>
    );
    
    const button = screen.getByRole('button');
    
    fireEvent.mouseEnter(button);
    expect(handleMouseEnter).toHaveBeenCalledTimes(1);
    
    fireEvent.mouseLeave(button);
    expect(handleMouseLeave).toHaveBeenCalledTimes(1);
  });

  it('추가 props가 올바르게 전달된다', () => {
    render(
      <Button 
        data-testid="custom-button"
        aria-label="Custom button"
      >
        Custom Props
      </Button>
    );
    
    const button = screen.getByTestId('custom-button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('aria-label', 'Custom button');
  });
});