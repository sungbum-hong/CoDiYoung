import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProjectDetailModal from '../ProjectDetailModal';

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

// 모킹들
jest.mock('../../../../ui/BaseModal', () => {
  return function MockBaseModal({ isOpen, onClose, children, ...props }) {
    return isOpen ? (
      <div data-testid="base-modal" {...props}>
        {children}
      </div>
    ) : null;
  };
});

jest.mock('../../../../ui/Button', () => {
  return function MockButton({ children, onClick, ...props }) {
    return (
      <button data-testid="button" onClick={onClick} {...props}>
        {children}
      </button>
    );
  };
});

jest.mock('../../../../constants/sizes.js', () => ({
  MODAL_SIZES: {
    PROJECT_DETAIL: {
      buttonWidth: 150,
      buttonHeight: 40
    }
  }
}));

jest.mock('../../../../constants/config.js', () => ({
  CONFIG: {
    CARD: {
      PROJECT: {
        WIDTH: 200
      }
    }
  }
}));

jest.mock('../../../../utils/colors.js', () => ({
  COLORS: {
    PRIMARY: '#3b82f6'
  }
}));

jest.mock('../../../../hooks/useHoverStyle.js', () => ({
  usePrimaryButtonHover: jest.fn(() => ({
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  }))
}));

describe('ProjectDetailModal', () => {
  const defaultProps = {
    isOpen: true,
    onClose: jest.fn(),
    projectIndex: 0
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('모달이 열려있을 때 올바르게 렌더링된다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    expect(screen.getByTestId('base-modal')).toBeInTheDocument();
    expect(screen.getByText('프로젝트 이미지')).toBeInTheDocument();
  });

  it('모달이 닫혀있을 때 렌더링되지 않는다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} isOpen={false} />
      </RouterWrapper>
    );

    expect(screen.queryByTestId('base-modal')).not.toBeInTheDocument();
  });

  it('구경하기 버튼이 올바르게 렌더링된다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    const exploreButton = screen.getByText('구경하기');
    expect(exploreButton).toBeInTheDocument();
  });

  it('취소 버튼이 올바르게 렌더링된다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    const cancelButton = screen.getByText('취소');
    expect(cancelButton).toBeInTheDocument();
  });

  it('구경하기 버튼 클릭 시 올바른 경로로 이동한다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} projectIndex={2} />
      </RouterWrapper>
    );

    const exploreButton = screen.getByText('구경하기');
    fireEvent.click(exploreButton);

    expect(mockNavigate).toHaveBeenCalledWith('/project/3');
  });

  it('구경하기 버튼 클릭 시 모달이 닫힌다', () => {
    const handleClose = jest.fn();
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} onClose={handleClose} />
      </RouterWrapper>
    );

    const exploreButton = screen.getByText('구경하기');
    fireEvent.click(exploreButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('취소 버튼 클릭 시 모달이 닫힌다', () => {
    const handleClose = jest.fn();
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} onClose={handleClose} />
      </RouterWrapper>
    );

    const cancelButton = screen.getByText('취소');
    fireEvent.click(cancelButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('BaseModal에 올바른 props가 전달된다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    const modal = screen.getByTestId('base-modal');
    expect(modal).toBeInTheDocument();
    // MockBaseModal은 size prop을 HTML attribute로 전달하지 않으므로 다른 방식으로 검증
    expect(modal).toHaveStyle({
      width: '500px',
      height: '500px',
      maxWidth: '500px'
    });
  });

  it('모달 컨테이너가 올바른 클래스를 갖는다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    const container = screen.getByText('프로젝트 이미지').closest('div[class*="relative"]');
    expect(container).toHaveClass('relative', 'w-full', 'h-full', 'p-6');
  });

  it('이미지 영역이 올바른 스타일을 갖는다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    const imageArea = screen.getByText('프로젝트 이미지').parentElement;
    expect(imageArea).toHaveClass(
      'h-48', 'rounded-lg', 'mb-6', 'flex', 'items-center', 'justify-center'
    );
  });

  it('버튼 그룹이 올바른 위치에 있다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    const buttonGroup = screen.getByText('구경하기').closest('div[class*="absolute"]');
    expect(buttonGroup).toHaveClass(
      'absolute', 'bottom-20', 'left-1/2', '-translate-x-1/2', 'flex', 'gap-24'
    );
  });

  it('projectIndex가 0일 때 올바른 경로로 이동한다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} projectIndex={0} />
      </RouterWrapper>
    );

    const exploreButton = screen.getByText('구경하기');
    fireEvent.click(exploreButton);

    expect(mockNavigate).toHaveBeenCalledWith('/project/1');
  });

  it('hover 효과 훅이 구경하기 버튼에 적용된다', () => {
    const mockUsePrimaryButtonHover = require('../../../../hooks/useHoverStyle.js').usePrimaryButtonHover;
    
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    expect(mockUsePrimaryButtonHover).toHaveBeenCalledWith('#3b82f6');
  });

  it('버튼들이 올바른 variant를 갖는다', () => {
    render(
      <RouterWrapper>
        <ProjectDetailModal {...defaultProps} />
      </RouterWrapper>
    );

    const buttons = screen.getAllByTestId('button');
    expect(buttons).toHaveLength(2);
    
    buttons.forEach(button => {
      expect(button).toHaveAttribute('variant', 'outline');
    });
  });
});