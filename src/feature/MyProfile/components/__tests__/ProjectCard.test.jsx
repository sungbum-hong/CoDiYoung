import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

// 자식 컴포넌트들 모킹
jest.mock('../ProjectInfo', () => {
  return function MockProjectInfo({ project }) {
    return <div data-testid="project-info">Project Info: {project?.title || 'No title'}</div>;
  };
});

jest.mock('../MemberDisplay', () => {
  return function MockMemberDisplay({ project }) {
    return <div data-testid="member-display">Member Display for: {project?.title || 'No project'}</div>;
  };
});

describe('ProjectCard', () => {
  const mockProject = {
    title: 'React 프로젝트',
    memberCount: 4,
    positions: ['Frontend', 'Backend'],
    kakakoLink: 'https://kakao.com/chat',
    memberBriefs: [
      { name: '김철수' },
      { name: '이영희' }
    ],
    techs: ['React', 'Node.js']
  };

  const defaultProps = {
    project: mockProject,
    index: 0
  };

  it('기본 프로젝트 카드가 올바르게 렌더링된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    // 텍스트가 br로 분리되어 있으므로 부분 매칭 사용
    const projectText = screen.getByText((content, element) => {
      return element?.textContent === '프로젝트이미지';
    });
    const container = projectText.closest('div[class*="relative w-full h-full"]');
    expect(container).toBeInTheDocument();
  });

  it('프로젝트 이미지 영역이 올바르게 렌더링된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    // CSS 선택자로 이미지 컨테이너 찾기
    const imageContainer = document.querySelector('.absolute.w-\\[70px\\].h-\\[70px\\].rounded-full.bg-gray-300');
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveTextContent('프로젝트이미지');
    
    expect(imageContainer).toHaveClass(
      'absolute', 'w-[70px]', 'h-[70px]', 'rounded-full', 
      'bg-gray-300', 'flex', 'items-center', 'justify-center', 
      'text-xs', 'text-gray-600'
    );
  });

  it('프로젝트 이미지가 올바른 위치에 있다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const imageContainer = document.querySelector('.absolute.w-\\[70px\\].h-\\[70px\\].rounded-full.bg-gray-300');
    expect(imageContainer).toHaveStyle({
      left: '20px',
      top: '12px'
    });
  });

  it('ProjectInfo 컴포넌트가 올바른 props로 렌더링된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const projectInfo = screen.getByTestId('project-info');
    expect(projectInfo).toBeInTheDocument();
    expect(projectInfo).toHaveTextContent('Project Info: React 프로젝트');
  });

  it('MemberDisplay 컴포넌트가 올바른 props로 렌더링된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const memberDisplay = screen.getByTestId('member-display');
    expect(memberDisplay).toBeInTheDocument();
    expect(memberDisplay).toHaveTextContent('Member Display for: React 프로젝트');
  });

  it('project가 null일 때도 올바르게 렌더링된다', () => {
    render(<ProjectCard project={null} index={1} />);
    
    const imageContainer = document.querySelector('.absolute.w-\\[70px\\].h-\\[70px\\].rounded-full.bg-gray-300');
    expect(imageContainer).toHaveTextContent('프로젝트이미지');
    expect(screen.getByTestId('project-info')).toHaveTextContent('Project Info: No title');
    expect(screen.getByTestId('member-display')).toHaveTextContent('Member Display for: No project');
  });

  it('컨테이너가 올바른 구조를 갖는다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const container = document.querySelector('.relative.w-full.h-full');
    expect(container).toHaveClass('relative', 'w-full', 'h-full');
  });

  it('다양한 index 값이 올바르게 처리된다', () => {
    render(<ProjectCard {...defaultProps} index={5} />);
    
    const container = document.querySelector('.relative.w-full.h-full');
    expect(container).toBeInTheDocument();
    // index는 내부적으로만 사용되므로 렌더링 확인만
  });

  it('빈 프로젝트 객체가 전달되어도 에러가 발생하지 않는다', () => {
    const emptyProject = {};
    render(<ProjectCard project={emptyProject} index={0} />);
    
    const imageContainer = document.querySelector('.absolute.w-\\[70px\\].h-\\[70px\\].rounded-full.bg-gray-300');
    expect(imageContainer).toHaveTextContent('프로젝트이미지');
    expect(screen.getByTestId('project-info')).toBeInTheDocument();
    expect(screen.getByTestId('member-display')).toBeInTheDocument();
  });

  it('프로젝트 이미지 텍스트가 줄바꿈으로 표시된다', () => {
    render(<ProjectCard {...defaultProps} />);
    
    const container = document.querySelector('.absolute.w-\\[70px\\].h-\\[70px\\].rounded-full.bg-gray-300');
    
    // br 태그가 있는지 확인
    const brElement = container.querySelector('br');
    expect(brElement).toBeInTheDocument();
    
    // 전체 텍스트 내용 확인
    expect(container).toHaveTextContent('프로젝트이미지');
  });
});