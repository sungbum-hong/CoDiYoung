import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import UserProfile from '../UserProfile';

// React Router 모킹을 위한 래퍼
const RouterWrapper = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

// useNavigate 모킹
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

// 인증 훅들 모킹
jest.mock('../../hooks/useAuth', () => ({
  useAuthState: jest.fn(),
  useAuthActions: jest.fn(),
}));

jest.mock('../../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

// 상수들 모킹
jest.mock('../../constants/routes.js', () => ({
  ROUTES: {
    HOME: '/',
    PROFILE: '/profile'
  }
}));

jest.mock('../../constants/messages.js', () => ({
  MESSAGES: {
    UI: {
      MY_PROFILE: '내 프로필',
      LOGOUT: '로그아웃'
    }
  }
}));

// Heroicons 모킹
jest.mock('@heroicons/react/24/outline', () => ({
  UserCircleIcon: function MockUserCircleIcon(props) {
    return <div data-testid="user-circle-icon" {...props} />;
  }
}));

describe('UserProfile', () => {
  const mockUseAuthState = require('../../hooks/useAuth').useAuthState;
  const mockUseAuthActions = require('../../hooks/useAuth').useAuthActions;
  const mockUseAuth = require('../../contexts/AuthContext').useAuth;

  const mockHandleLogout = jest.fn();
  const mockResetState = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    
    mockUseAuthActions.mockReturnValue({
      handleLogout: mockHandleLogout
    });
    
    mockUseAuth.mockReturnValue({
      resetState: mockResetState
    });
  });

  it('아바타가 있는 사용자 프로필이 올바르게 렌더링된다', () => {
    mockUseAuthState.mockReturnValue({
      user: {
        name: 'Test User',
        avatar: 'https://example.com/avatar.jpg'
      }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const avatar = screen.getByAltText('Test User');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', 'https://example.com/avatar.jpg');
    expect(avatar).toHaveClass('w-8', 'h-8', 'rounded-full', 'object-cover');
  });

  it('아바타가 없는 사용자에게 기본 아이콘이 표시된다', () => {
    mockUseAuthState.mockReturnValue({
      user: {
        name: 'Test User',
        avatar: null
      }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const defaultIcon = screen.getByTestId('user-circle-icon');
    expect(defaultIcon).toBeInTheDocument();
    expect(defaultIcon).toHaveClass('w-8', 'h-8', 'text-gray-500');
  });

  it('프로필 버튼이 올바르게 렌더링된다', () => {
    mockUseAuthState.mockReturnValue({
      user: { name: 'Test User', avatar: null }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    // 메인 프로필 버튼을 찾기 (첫 번째 버튼)
    const profileButton = screen.getAllByRole('button')[0];
    expect(profileButton).toHaveClass(
      'p-1', 'rounded-full', 'hover:ring-2', 'hover:ring-gray-300', 'transition-all'
    );
  });

  it('호버 메뉴가 올바르게 렌더링된다', () => {
    mockUseAuthState.mockReturnValue({
      user: { name: 'Test User', avatar: null }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    // 메뉴 항목들 확인
    expect(screen.getByText('내 프로필')).toBeInTheDocument();
    expect(screen.getByText('로그아웃')).toBeInTheDocument();
  });

  it('내 프로필 클릭 시 프로필 페이지로 이동한다', () => {
    mockUseAuthState.mockReturnValue({
      user: { name: 'Test User', avatar: null }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const profileMenuItem = screen.getByText('내 프로필');
    fireEvent.click(profileMenuItem);

    expect(mockNavigate).toHaveBeenCalledWith('/profile');
  });

  it('로그아웃 클릭 시 로그아웃 처리가 실행된다', async () => {
    mockUseAuthState.mockReturnValue({
      user: { name: 'Test User', avatar: null }
    });

    mockHandleLogout.mockResolvedValue();

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const logoutMenuItem = screen.getByText('로그아웃');
    fireEvent.click(logoutMenuItem);

    await waitFor(() => {
      expect(mockHandleLogout).toHaveBeenCalledTimes(1);
      expect(mockResetState).toHaveBeenCalledTimes(1);
      expect(mockNavigate).toHaveBeenCalledWith('/');
    });
  });

  it('호버 메뉴가 올바른 CSS 클래스를 갖는다', () => {
    mockUseAuthState.mockReturnValue({
      user: { name: 'Test User', avatar: null }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const hoverMenu = screen.getByText('내 프로필').closest('div');
    expect(hoverMenu).toHaveClass(
      'absolute', 'right-0', 'mt-2', 'w-40', 'bg-white', 'rounded-md', 
      'shadow-lg', 'py-1', 'z-50', 'border', 'opacity-0', 'invisible',
      'group-hover:opacity-100', 'group-hover:visible', 'transition-all', 'duration-200'
    );
  });

  it('메뉴 아이템들이 올바른 CSS 클래스를 갖는다', () => {
    mockUseAuthState.mockReturnValue({
      user: { name: 'Test User', avatar: null }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const profileButton = screen.getByText('내 프로필');
    const logoutButton = screen.getByText('로그아웃');
    
    expect(profileButton).toHaveClass('btn-menu-item');
    expect(logoutButton).toHaveClass('btn-menu-item');
  });

  it('그룹 컨테이너가 올바른 구조를 갖는다', () => {
    mockUseAuthState.mockReturnValue({
      user: { name: 'Test User', avatar: null }
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const container = screen.getByText('내 프로필').closest('div[class*="relative group"]');
    expect(container).toHaveClass('relative', 'group');
  });

  it('사용자 정보가 null일 때도 기본 아이콘이 표시된다', () => {
    mockUseAuthState.mockReturnValue({
      user: null
    });

    render(
      <RouterWrapper>
        <UserProfile />
      </RouterWrapper>
    );

    const defaultIcon = screen.getByTestId('user-circle-icon');
    expect(defaultIcon).toBeInTheDocument();
  });
});