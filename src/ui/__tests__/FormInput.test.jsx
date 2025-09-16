import { render, screen, fireEvent } from '@testing-library/react';
import FormInput from '../FormInput';

// 필요한 상수들 모킹
jest.mock('../../utils/colors.js', () => ({
  COLORS: {
    PRIMARY: '#3b82f6',
    ERROR: '#ef4444',
    GRAY_300: '#d1d5db',
    GRAY_500: '#6b7280'
  }
}));

jest.mock('../../constants/config.js', () => ({
  CONFIG: {
    INPUT_SIZES: {
      sm: 'px-3 py-2 text-sm',
      md: 'px-4 py-3 text-base',
      lg: 'px-5 py-4 text-lg',
      xl: 'px-6 py-5 text-xl'
    },
    BORDER_RADIUS: { MEDIUM: 8 }
  }
}));

describe('FormInput', () => {
  it('기본 input이 올바르게 렌더링된다', () => {
    render(<FormInput placeholder="Enter text" />);
    
    const input = screen.getByPlaceholderText('Enter text');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('다양한 type이 올바르게 설정된다', () => {
    const { rerender } = render(<FormInput type="email" placeholder="Email" />);
    let input = screen.getByPlaceholderText('Email');
    expect(input).toHaveAttribute('type', 'email');

    rerender(<FormInput type="password" placeholder="Password" />);
    input = screen.getByPlaceholderText('Password');
    expect(input).toHaveAttribute('type', 'password');

    rerender(<FormInput type="number" placeholder="Number" />);
    input = screen.getByPlaceholderText('Number');
    expect(input).toHaveAttribute('type', 'number');
  });

  it('value와 onChange가 올바르게 동작한다', () => {
    const handleChange = jest.fn();
    render(
      <FormInput 
        value="test value" 
        onChange={handleChange}
        placeholder="Test input"
      />
    );
    
    const input = screen.getByPlaceholderText('Test input');
    expect(input).toHaveValue('test value');
    
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('error 상태가 올바르게 표시된다', () => {
    render(
      <FormInput 
        placeholder="Test input"
        error="This field is required"
      />
    );
    
    const input = screen.getByPlaceholderText('Test input');
    const errorMessage = screen.getByText('This field is required');
    
    expect(input).toBeInTheDocument();
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveStyle('color: #ef4444');
  });

  it('disabled 상태가 올바르게 적용된다', () => {
    render(<FormInput placeholder="Disabled input" disabled />);
    
    const input = screen.getByPlaceholderText('Disabled input');
    expect(input).toBeDisabled();
    expect(input).toHaveStyle('color: #6b7280');
  });

  it('required 속성이 올바르게 설정된다', () => {
    render(<FormInput placeholder="Required input" required />);
    
    const input = screen.getByPlaceholderText('Required input');
    expect(input).toHaveAttribute('required');
  });

  it('다양한 size가 올바르게 적용된다', () => {
    const { rerender } = render(<FormInput size="sm" placeholder="Small" />);
    let input = screen.getByPlaceholderText('Small');
    expect(input).toHaveClass('px-3', 'py-2', 'text-sm');

    rerender(<FormInput size="md" placeholder="Medium" />);
    input = screen.getByPlaceholderText('Medium');
    expect(input).toHaveClass('px-4', 'py-3', 'text-base');

    rerender(<FormInput size="lg" placeholder="Large" />);
    input = screen.getByPlaceholderText('Large');
    expect(input).toHaveClass('px-5', 'py-4', 'text-lg');

    rerender(<FormInput size="xl" placeholder="Extra Large" />);
    input = screen.getByPlaceholderText('Extra Large');
    expect(input).toHaveClass('px-6', 'py-5', 'text-xl');
  });

  it('default variant가 올바르게 적용된다', () => {
    render(<FormInput placeholder="Default variant" />);
    
    const input = screen.getByPlaceholderText('Default variant');
    expect(input).toHaveClass('border-0', 'border-b-2', 'bg-transparent');
  });

  it('signin variant가 올바르게 적용된다', () => {
    render(<FormInput variant="signin" placeholder="Signin variant" />);
    
    const input = screen.getByPlaceholderText('Signin variant');
    expect(input).toHaveClass('bg-white', 'border-[2px]', 'focus:ring-2');
  });

  it('focus/blur 이벤트가 올바르게 동작한다 (default variant)', () => {
    render(<FormInput placeholder="Focus test" />);
    
    const input = screen.getByPlaceholderText('Focus test');
    
    fireEvent.focus(input);
    expect(input.style.borderBottomColor).toBe('#3b82f6'); // PRIMARY color
    
    fireEvent.blur(input);
    expect(input.style.borderBottomColor).toBe('#d1d5db'); // GRAY_300 color
  });

  it('focus/blur 이벤트가 올바르게 동작한다 (signin variant)', () => {
    render(<FormInput variant="signin" placeholder="Signin focus test" />);
    
    const input = screen.getByPlaceholderText('Signin focus test');
    
    fireEvent.focus(input);
    expect(input.style.borderColor).toBe('#3b82f6'); // PRIMARY color
    
    fireEvent.blur(input);
    expect(input.style.borderColor).toBe('#3b82f6'); // PRIMARY color (no error)
  });

  it('error가 있을 때 focus/blur에서 error 색상이 적용된다', () => {
    render(
      <FormInput 
        placeholder="Error test"
        error="Test error"
      />
    );
    
    const input = screen.getByPlaceholderText('Error test');
    
    fireEvent.focus(input);
    expect(input.style.borderBottomColor).toBe('#3b82f6'); // Focus still PRIMARY
    
    fireEvent.blur(input);
    expect(input.style.borderBottomColor).toBe('#ef4444'); // ERROR color
  });

  it('error가 있을 때 signin variant에서 error 색상이 적용된다', () => {
    render(
      <FormInput 
        variant="signin"
        placeholder="Signin error test"
        error="Test error"
      />
    );
    
    const input = screen.getByPlaceholderText('Signin error test');
    
    fireEvent.focus(input);
    expect(input.style.borderColor).toBe('#3b82f6'); // Focus PRIMARY
    
    fireEvent.blur(input);
    expect(input.style.borderColor).toBe('#ef4444'); // ERROR color
  });

  it('사용자 정의 className이 올바르게 적용된다', () => {
    render(
      <FormInput 
        placeholder="Custom class"
        className="custom-input-class"
      />
    );
    
    const input = screen.getByPlaceholderText('Custom class');
    expect(input).toHaveClass('custom-input-class');
  });

  it('기본값들이 올바르게 설정된다', () => {
    render(<FormInput />);
    
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
    expect(input).not.toBeDisabled();
    expect(input).not.toHaveAttribute('required');
    expect(input).toHaveClass('px-4', 'py-3', 'text-base'); // md size
  });

  it('컨테이너 구조가 올바르게 렌더링된다', () => {
    render(
      <FormInput 
        placeholder="Container test"
        error="Test error"
      />
    );
    
    const container = screen.getByPlaceholderText('Container test').parentElement;
    expect(container).toHaveClass('flex', 'flex-col');
    
    const errorMessage = screen.getByText('Test error');
    expect(errorMessage).toHaveClass('text-xs');
  });
});