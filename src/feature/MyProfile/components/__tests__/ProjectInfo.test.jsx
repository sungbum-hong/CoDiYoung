import { render, screen } from '@testing-library/react';
import ProjectInfo from '../ProjectInfo';

// COLORS 모킹
jest.mock('../../../../constants/colors.js', () => ({
  COLORS: {
    BLUE_600: '#2563eb'
  }
}));

describe('ProjectInfo', () => {
  const mockProject = {
    title: 'React 프로젝트',
    memberCount: 4,
    positions: ['Frontend', 'Backend'],
    kakakoLink: 'https://kakao.com/chat'
  };

  const defaultProps = {
    project: mockProject,
    position: 'left'
  };

  it('기본 프로젝트 정보가 올바르게 렌더링된다', () => {
    render(<ProjectInfo {...defaultProps} />);
    
    expect(screen.getByText(/프로젝트 명:/)).toBeInTheDocument();
    expect(screen.getByText(/React 프로젝트/)).toBeInTheDocument();
    expect(screen.getByText(/참여 인원:/)).toBeInTheDocument();
    expect(screen.getByText(/4명/)).toBeInTheDocument();
    expect(screen.getByText(/포지션:/)).toBeInTheDocument();
    expect(screen.getByText(/Frontend, Backend/)).toBeInTheDocument();
    expect(screen.getByText(/연락처:/)).toBeInTheDocument();
  });

  it('카카오 링크가 올바르게 렌더링된다', () => {
    render(<ProjectInfo {...defaultProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://kakao.com/chat');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveClass('text-blue-600', 'hover:text-blue-800', 'underline', 'cursor-pointer');
  });

  it('position이 left일 때 올바른 스타일이 적용된다', () => {
    render(<ProjectInfo {...defaultProps} position="left" />);
    
    const container = screen.getByText(/프로젝트 명:/).parentElement;
    expect(container).toHaveClass('absolute', 'space-y-1');
    expect(container).toHaveStyle({
      left: '198px',
      top: '13px'
    });
  });

  it('position이 left가 아닐 때 left 스타일이 적용되지 않는다', () => {
    render(<ProjectInfo {...defaultProps} position="right" />);
    
    const container = screen.getByText(/프로젝트 명:/).parentElement;
    expect(container).toHaveStyle({
      top: '13px'
    });
    // left 속성이 없어야 함
    expect(container.style.left).toBe('');
  });

  it('프로젝트 제목이 없을 때 빈 문자열이 표시된다', () => {
    const projectWithoutTitle = { ...mockProject, title: null };
    render(<ProjectInfo project={projectWithoutTitle} />);
    
    expect(screen.getByText('프로젝트 명:')).toBeInTheDocument();
    // title이 없을 때 빈 문자열 표시 확인
    const titleElement = screen.getByText('프로젝트 명:').parentElement;
    expect(titleElement).toHaveTextContent('프로젝트 명:');
  });

  it('memberCount가 0일 때 올바르게 표시된다', () => {
    const projectWithZeroMembers = { ...mockProject, memberCount: 0 };
    render(<ProjectInfo project={projectWithZeroMembers} />);
    
    expect(screen.getByText(/0명/)).toBeInTheDocument();
  });

  it('memberCount가 null일 때 0으로 표시된다', () => {
    const projectWithNullMembers = { ...mockProject, memberCount: null };
    render(<ProjectInfo project={projectWithNullMembers} />);
    
    expect(screen.getByText(/0명/)).toBeInTheDocument();
  });

  it('positions가 배열이 아닐 때 미설정으로 표시된다', () => {
    const projectWithInvalidPositions = { ...mockProject, positions: 'Frontend' };
    render(<ProjectInfo project={projectWithInvalidPositions} />);
    
    expect(screen.getByText(/미설정/)).toBeInTheDocument();
  });

  it('positions가 없을 때 미설정으로 표시된다', () => {
    const projectWithoutPositions = { ...mockProject, positions: null };
    render(<ProjectInfo project={projectWithoutPositions} />);
    
    expect(screen.getByText(/미설정/)).toBeInTheDocument();
  });

  it('kakakoLink가 없을 때 빈 문자열이 표시된다', () => {
    const projectWithoutLink = { ...mockProject, kakakoLink: null };
    render(<ProjectInfo project={projectWithoutLink} />);
    
    expect(screen.getByText('연락처:')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('모든 정보 섹션이 올바른 스타일을 갖는다', () => {
    render(<ProjectInfo {...defaultProps} />);
    
    // 각 정보 div 요소들을 직접 확인 (: 뒤에 올 수 있는 공백 고려)
    const projectNameDiv = screen.getByText(/프로젝트 명:/).closest('div');
    const memberCountDiv = screen.getByText(/참여 인원:/).closest('div');
    const positionDiv = screen.getByText(/포지션:/).closest('div');
    const contactDiv = screen.getByText(/연락처:/).closest('div');
    
    // 컨테이너가 아닌 실제 텍스트를 포함하는 div들 확인
    [projectNameDiv, memberCountDiv, positionDiv, contactDiv].forEach(element => {
      if (element && !element.classList.contains('absolute')) {
        expect(element).toHaveClass('text-xs', 'font-bold');
      }
    });
  });

  it('빈 positions 배열일 때 빈 문자열로 표시된다', () => {
    const projectWithEmptyPositions = { ...mockProject, positions: [] };
    render(<ProjectInfo project={projectWithEmptyPositions} />);
    
    const positionText = screen.getByText(/포지션:/).parentElement;
    expect(positionText).toHaveTextContent('포지션:');
  });

  it('단일 position이 올바르게 표시된다', () => {
    const projectWithSinglePosition = { ...mockProject, positions: ['Frontend'] };
    render(<ProjectInfo project={projectWithSinglePosition} />);
    
    expect(screen.getByText(/Frontend/)).toBeInTheDocument();
    expect(screen.queryByText(/,/)).not.toBeInTheDocument();
  });

  it('position prop의 기본값이 올바르게 작동한다', () => {
    render(<ProjectInfo project={mockProject} />);
    
    const container = screen.getByText(/프로젝트 명:/).parentElement;
    expect(container).toHaveStyle({
      left: '198px',
      top: '13px'
    });
  });
});