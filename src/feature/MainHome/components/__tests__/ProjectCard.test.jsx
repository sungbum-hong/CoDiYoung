import { render, screen, fireEvent } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

// 필요한 모킹
jest.mock('../../../../constants/config.js', () => ({
  CONFIG: {
    CARD: {
      PROJECT: {
        WIDTH: 200,
        HEIGHT: 150
      }
    },
    BORDER_RADIUS: {
      MEDIUM: 8
    }
  }
}));

jest.mock('../../../../utils/colors.js', () => ({
  COLORS: {
    GRAY_300: '#d1d5db',
    GRAY_400: '#9ca3af',
    GRAY_600: '#6b7280',
    GRAY_800: '#1f2937'
  }
}));

jest.mock('../../../../mock-logic/index.js', () => ({
  USE_MOCK_DATA: true
}));

jest.mock('../../../../hooks/useHoverStyle.js', () => ({
  useBackgroundHover: jest.fn(() => ({
    onMouseEnter: jest.fn(),
    onMouseLeave: jest.fn()
  }))
}));

describe('ProjectCard', () => {
  const mockProject = {
    title: 'React 프로젝트',
    slogan: '혁신적인 웹 애플리케이션'
  };

  const defaultProps = {
    index: 0,
    project: mockProject,
    onProjectClick: jest.fn(),
    onCardKeyDown: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('기본 프로젝트 카드가 올바르게 렌더링된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const card = screen.getByRole('button');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('aria-label', 'React 프로젝트 상세 보기');
  });

  it('프로젝트 정보가 올바르게 표시된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    expect(screen.getByText('프로젝트 1')).toBeInTheDocument();
    expect(screen.getByText('React 프로젝트')).toBeInTheDocument();
    expect(screen.getByText('혁신적인 웹 애플리케이션')).toBeInTheDocument();
  });

  it('프로젝트가 없을 때 기본 표시가 나타난다', () => {
    render(<ProjectCard {...defaultProps} project={null} />);
    
    expect(screen.getByText('프로젝트 1')).toBeInTheDocument();
    expect(screen.queryByText('React 프로젝트')).not.toBeInTheDocument();
    
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('aria-label', '프로젝트 1 상세 보기');
  });

  it('슬로건이 없을 때 기본 메시지가 표시된다', () => {
    const projectWithoutSlogan = {
      title: 'Vue 프로젝트',
      slogan: null
    };

    render(<ProjectCard {...defaultProps} project={projectWithoutSlogan} />);
    
    expect(screen.getByText('Vue 프로젝트')).toBeInTheDocument();
    expect(screen.getByText('슬로건이 없습니다')).toBeInTheDocument();
  });

  it('클릭 이벤트가 올바르게 동작한다', () => {
    const handleProjectClick = jest.fn();
    render(<ProjectCard {...defaultProps} onProjectClick={handleProjectClick} />);
    
    const card = screen.getByRole('button');
    fireEvent.click(card);
    
    expect(handleProjectClick).toHaveBeenCalledTimes(1);
    expect(handleProjectClick).toHaveBeenCalledWith(0);
  });

  it('키보드 이벤트가 올바르게 처리된다', () => {
    const handleCardKeyDown = jest.fn();
    render(<ProjectCard {...defaultProps} onCardKeyDown={handleCardKeyDown} />);
    
    const card = screen.getByRole('button');
    fireEvent.keyDown(card, { key: 'Enter' });
    
    expect(handleCardKeyDown).toHaveBeenCalledTimes(1);
    expect(handleCardKeyDown).toHaveBeenCalledWith(
      expect.objectContaining({ key: 'Enter' }),
      0
    );
  });

  it('카드가 올바른 스타일을 갖는다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const card = screen.getByRole('button');
    expect(card).toHaveClass(
      'flex', 'flex-col', 'items-center', 'justify-center', 
      'cursor-pointer', 'transition-colors', 'focus:outline-none',
      'focus:ring-2', 'focus:ring-offset-2', 'p-4'
    );
    
    expect(card).toHaveStyle({
      width: '200px',
      height: '150px',
      borderRadius: '8px',
      backgroundColor: '#d1d5db'
    });
  });

  it('컨테이너가 올바른 레이아웃을 갖는다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const container = screen.getByRole('button').parentElement;
    expect(container).toHaveClass('flex-shrink-0', 'flex', 'flex-col', 'items-center');
  });

  it('프로젝트 번호가 index + 1로 표시된다', () => {
    render(<ProjectCard {...defaultProps} index={2} />);
    
    expect(screen.getByText('프로젝트 3')).toBeInTheDocument();
  });

  it('프로젝트 제목과 슬로건이 올바른 스타일을 갖는다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const title = screen.getByText('React 프로젝트');
    expect(title).toHaveClass('text-sm', 'font-bold', 'mb-1');
    expect(title).toHaveStyle('color: #1f2937');
    
    const slogan = screen.getByText('혁신적인 웹 애플리케이션');
    expect(slogan).toHaveClass('text-xs');
    expect(slogan).toHaveStyle('color: #6b7280');
  });

  it('프로젝트 번호가 올바른 스타일을 갖는다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const projectNumber = screen.getByText('프로젝트 1');
    expect(projectNumber).toHaveClass('text-sm', 'font-medium');
    expect(projectNumber).toHaveStyle('color: #6b7280');
  });

  it('탭 인덱스가 올바르게 설정된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const card = screen.getByRole('button');
    expect(card).toHaveAttribute('tabIndex', '0');
  });

  it('프로젝트 정보 섹션이 조건부로 렌더링된다', () => {
    const { rerender } = render(<ProjectCard {...defaultProps} project={null} />);
    
    // 프로젝트가 없을 때
    expect(screen.queryByText('React 프로젝트')).not.toBeInTheDocument();
    
    // 프로젝트가 있을 때
    rerender(<ProjectCard {...defaultProps} project={mockProject} />);
    expect(screen.getByText('React 프로젝트')).toBeInTheDocument();
  });
});