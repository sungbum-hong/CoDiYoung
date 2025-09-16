import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

// React Router 모킹을 위한 래퍼
const RouterWrapper = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

// AuthModalManager 모킹
jest.mock('../AuthModalManager', () => {
  return function MockAuthModalManager() {
    return <div data-testid="auth-modal-manager">Auth Modal Manager</div>;
  };
});

// COLORS 모킹
jest.mock('../../utils/colors.js', () => ({
  COLORS: {
    GRAY_600: '#6b7280'
  }
}));

describe('Header', () => {
  it('기본 헤더가 올바르게 렌더링된다', () => {
    render(
      <RouterWrapper>
        <Header />
      </RouterWrapper>
    );
    
    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass('relative', 'z-[1000]');
  });

  it('로고 링크가 올바르게 렌더링된다', () => {
    render(
      <RouterWrapper>
        <Header />
      </RouterWrapper>
    );
    
    const logoLink = screen.getByRole('link');
    expect(logoLink).toHaveAttribute('href', '/');
    
    const logoImage = screen.getByAltText('CoDiYoung Logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/cdylogo.png');
    expect(logoImage).toHaveClass('h-9', 'w-auto');
  });

  it('AuthModalManager가 기본적으로 렌더링된다', () => {
    render(
      <RouterWrapper>
        <Header />
      </RouterWrapper>
    );
    
    const authModalManager = screen.getByTestId('auth-modal-manager');
    expect(authModalManager).toBeInTheDocument();
  });

  it('disableAuthModal이 true일 때 AuthModalManager가 렌더링되지 않는다', () => {
    render(
      <RouterWrapper>
        <Header disableAuthModal={true} />
      </RouterWrapper>
    );
    
    const authModalManager = screen.queryByTestId('auth-modal-manager');
    expect(authModalManager).not.toBeInTheDocument();
  });

  it('disableAuthModal이 false일 때 AuthModalManager가 렌더링된다', () => {
    render(
      <RouterWrapper>
        <Header disableAuthModal={false} />
      </RouterWrapper>
    );
    
    const authModalManager = screen.getByTestId('auth-modal-manager');
    expect(authModalManager).toBeInTheDocument();
  });

  it('헤더 레이아웃이 올바르게 구성된다', () => {
    render(
      <RouterWrapper>
        <Header />
      </RouterWrapper>
    );
    
    // 헤더 컨테이너 확인
    const headerContainer = screen.getByRole('banner').firstChild;
    expect(headerContainer).toHaveClass(
      'w-full', 'h-16', 'flex', 'items-center', 'justify-between'
    );
  });

  it('반응형 패딩 클래스가 올바르게 적용된다', () => {
    render(
      <RouterWrapper>
        <Header />
      </RouterWrapper>
    );
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('px-4', 'sm:px-6', 'lg:px-6');
    
    const headerContainer = header.firstChild;
    expect(headerContainer).toHaveClass('px-4', 'sm:px-6', 'lg:px-11');
  });

  it('z-index가 올바르게 설정된다', () => {
    render(
      <RouterWrapper>
        <Header />
      </RouterWrapper>
    );
    
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('z-[1000]');
  });

  it('마진과 패딩이 올바르게 적용된다', () => {
    render(
      <RouterWrapper>
        <Header />
      </RouterWrapper>
    );
    
    const headerContainer = screen.getByRole('banner').firstChild;
    expect(headerContainer).toHaveClass('pt-3', 'mb-12');
  });
});