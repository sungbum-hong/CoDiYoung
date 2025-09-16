import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AuthModalManager from '../AuthModalManager';

// React Router 모킹을 위한 래퍼
const RouterWrapper = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

// 인증 훅들 모킹
jest.mock('../../hooks/useAuthModal', () => ({
  useAuthModal: jest.fn(),
}));

jest.mock('../../hooks/useAuth', () => ({
  useAuthState: jest.fn(),
  useAuthActions: jest.fn(),
}));

// 컴포넌트들 모킹
jest.mock('../UserProfile', () => {
  return function MockUserProfile() {
    return <div data-testid="user-profile">User Profile Component</div>;
  };
});

jest.mock('../LoginButton', () => {
  return function MockLoginButton({ onLoginClick }) {
    return (
      <button data-testid="login-button" onClick={onLoginClick}>
        Login Button Component
      </button>
    );
  };
});

describe('AuthModalManager', () => {
  const mockUseAuthModal = require('../../hooks/useAuthModal').useAuthModal;
  const mockUseAuthState = require('../../hooks/useAuth').useAuthState;
  const mockUseAuthActions = require('../../hooks/useAuth').useAuthActions;

  const mockOpenSignIn = jest.fn();
  const mockCloseModal = jest.fn();
  const mockResetAuthState = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    
    mockUseAuthActions.mockReturnValue({
      resetAuthState: mockResetAuthState
    });
  });

  it('인증되지 않은 사용자에게 로그인 버튼이 표시된다', () => {
    mockUseAuthState.mockReturnValue({
      isAuthenticated: false
    });

    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: false,
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/' }
    });

    render(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(screen.getByTestId('login-button')).toBeInTheDocument();
    expect(screen.queryByTestId('user-profile')).not.toBeInTheDocument();
  });

  it('인증된 사용자에게 사용자 프로필이 표시된다', () => {
    mockUseAuthState.mockReturnValue({
      isAuthenticated: true
    });

    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: false,
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/' }
    });

    render(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(screen.getByTestId('user-profile')).toBeInTheDocument();
    expect(screen.queryByTestId('login-button')).not.toBeInTheDocument();
  });

  it('인증 관련 라우트에서는 인증 컴포넌트가 표시되지 않는다', () => {
    mockUseAuthState.mockReturnValue({
      isAuthenticated: false
    });

    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: true, // 인증 관련 라우트
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/signin' }
    });

    render(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(screen.queryByTestId('login-button')).not.toBeInTheDocument();
    expect(screen.queryByTestId('user-profile')).not.toBeInTheDocument();
  });

  it('네비게이션 컨테이너가 올바른 클래스를 갖는다', () => {
    mockUseAuthState.mockReturnValue({
      isAuthenticated: false
    });

    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: false,
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/' }
    });

    render(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('flex', 'items-center');
  });

  it('onAuthRoute가 false일 때만 네비게이션이 렌더링된다', () => {
    mockUseAuthState.mockReturnValue({
      isAuthenticated: false
    });

    const { rerender } = render(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    // onAuthRoute가 false일 때
    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: false,
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/' }
    });

    rerender(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // onAuthRoute가 true일 때
    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: true,
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/signin' }
    });

    rerender(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
  });

  it('컴포넌트가 인증 상태 변화에 따라 올바르게 리렌더링된다', () => {
    const { rerender } = render(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    // 인증되지 않은 상태
    mockUseAuthState.mockReturnValue({
      isAuthenticated: false
    });

    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: false,
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/' }
    });

    rerender(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(screen.getByTestId('login-button')).toBeInTheDocument();

    // 인증된 상태로 변경
    mockUseAuthState.mockReturnValue({
      isAuthenticated: true
    });

    rerender(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(screen.getByTestId('user-profile')).toBeInTheDocument();
    expect(screen.queryByTestId('login-button')).not.toBeInTheDocument();
  });

  it('모든 필요한 훅들이 호출된다', () => {
    mockUseAuthState.mockReturnValue({
      isAuthenticated: false
    });

    mockUseAuthModal.mockReturnValue({
      isSignInOpen: false,
      onAuthRoute: false,
      getModalTitle: jest.fn(),
      openSignIn: mockOpenSignIn,
      closeModal: mockCloseModal,
      location: { pathname: '/' }
    });

    render(
      <RouterWrapper>
        <AuthModalManager />
      </RouterWrapper>
    );

    expect(mockUseAuthState).toHaveBeenCalled();
    expect(mockUseAuthActions).toHaveBeenCalled();
    expect(mockUseAuthModal).toHaveBeenCalled();
  });
});