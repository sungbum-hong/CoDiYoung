import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// COLORS 모킹
jest.mock('../../utils/colors.js', () => ({
  COLORS: {
    GRAY_600: '#6b7280',
    GRAY_400: '#9ca3af'
  }
}));

describe('Footer', () => {
  it('기본 푸터가 올바르게 렌더링된다', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('relative', 'mt-10');
  });

  it('그라데이션 배경이 올바르게 적용된다', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveStyle({
      background: 'linear-gradient(to bottom, #f9f9ff, #f3e8ff)'
    });
  });

  it('로고 이미지가 올바르게 렌더링된다', () => {
    render(<Footer />);
    
    const logo = screen.getByAltText('Company Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/cdylogo.png');
    expect(logo).toHaveClass('h-14', 'w-auto');
  });

  it('메뉴 항목들이 올바르게 렌더링된다', () => {
    render(<Footer />);
    
    expect(screen.getByText('제휴문의')).toBeInTheDocument();
    expect(screen.getByText('신청하기')).toBeInTheDocument();
    expect(screen.getByText('SNS')).toBeInTheDocument();
  });

  it('저작권 문구가 올바르게 렌더링된다', () => {
    render(<Footer />);
    
    const copyright = screen.getByText('© 2025 YourCompany. All rights reserved.');
    expect(copyright).toBeInTheDocument();
    expect(copyright).toHaveClass('text-xs');
    expect(copyright).toHaveStyle('color: #9ca3af');
  });

  it('메뉴 컨테이너가 올바른 레이아웃을 갖는다', () => {
    render(<Footer />);
    
    // 메뉴들이 들어있는 div 찾기
    const menuContainer = screen.getByText('제휴문의').parentElement;
    expect(menuContainer).toHaveClass('flex', 'gap-12', 'ml-auto');
  });

  it('로고 위치가 올바르게 설정된다', () => {
    render(<Footer />);
    
    const logoContainer = screen.getByAltText('Company Logo').parentElement;
    expect(logoContainer).toHaveClass(
      'absolute', 'left-1', 'top-7/3', '-translate-y-1/2'
    );
  });

  it('메인 컨테이너가 올바른 스타일을 갖는다', () => {
    render(<Footer />);
    
    // 메인 컨테이너는 로고와 메뉴를 포함하는 div
    const mainContainer = screen.getByText('제휴문의').closest('div[class*="flex justify-between"]');
    expect(mainContainer).toHaveClass(
      'mb-18', 'flex', 'justify-between', 'items-center', 'text-sm', 'relative'
    );
    expect(mainContainer).toHaveStyle('color: #6b7280');
  });

  it('저작권 컨테이너가 올바른 레이아웃을 갖는다', () => {
    render(<Footer />);
    
    const copyrightContainer = screen.getByText('© 2025 YourCompany. All rights reserved.').parentElement;
    expect(copyrightContainer).toHaveClass('flex', 'justify-end', 'mt-4');
  });

  it('패딩과 마진이 올바르게 적용된다', () => {
    render(<Footer />);
    
    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveClass('px-9', 'pt-6', 'pb-3');
  });
});