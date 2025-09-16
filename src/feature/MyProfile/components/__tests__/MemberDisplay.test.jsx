import { render, screen } from '@testing-library/react';
import MemberDisplay from '../MemberDisplay';

describe('MemberDisplay', () => {
  const mockProject = {
    memberBriefs: [
      { name: '김철수' },
      { name: '이영희' },
      { name: '박민수' }
    ],
    techs: ['React', 'Node.js', 'TypeScript']
  };

  const defaultProps = {
    project: mockProject,
    position: 'left'
  };

  it('기본 멤버 디스플레이가 올바르게 렌더링된다', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    expect(screen.getByText('크루')).toBeInTheDocument();
    expect(screen.getByText('기술')).toBeInTheDocument();
  });

  it('크루 제목이 올바른 위치와 스타일을 갖는다', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    const crewTitle = screen.getByText('크루');
    expect(crewTitle).toHaveClass('absolute', 'text-xs', 'font-bold');
    expect(crewTitle).toHaveStyle({
      left: '20px',
      top: '113px'
    });
  });

  it('기술 제목이 올바른 위치와 스타일을 갖는다', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    const techTitle = screen.getByText('기술');
    expect(techTitle).toHaveClass('absolute', 'text-xs', 'font-bold');
    expect(techTitle).toHaveStyle({
      left: '20px',
      top: '182px'
    });
  });

  it('멤버 아바타가 올바르게 렌더링된다 (최대 2개)', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    // 첫 번째 멤버 (김철수의 '김')
    expect(screen.getByText('김')).toBeInTheDocument();
    // 두 번째 멤버 (이영희의 '이')
    expect(screen.getByText('이')).toBeInTheDocument();
    // 세 번째 멤버는 표시되지 않음 (slice(0, 2))
    expect(screen.queryByText('박')).not.toBeInTheDocument();
  });

  it('멤버 아바타가 올바른 스타일을 갖는다', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    // 김 텍스트를 포함하는 직접적인 div 요소 찾기
    const memberAvatar = screen.getByText('김').closest('div[class*="w-[38px] h-[38px]"]');
    expect(memberAvatar).toHaveClass(
      'w-[38px]', 'h-[38px]', 'rounded-full', 'bg-gray-300',
      'flex', 'items-center', 'justify-center', 'text-xs'
    );
  });

  it('멤버 컨테이너가 올바른 위치를 갖는다', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    const memberContainer = screen.getByText('김').closest('div[class*="absolute flex gap-[20px]"]');
    expect(memberContainer).toHaveStyle({
      left: '20px',
      top: '136px'
    });
    expect(memberContainer).toHaveClass('absolute', 'flex', 'gap-[20px]');
  });

  it('memberBriefs가 없을 때 기본 아바타가 표시된다', () => {
    const projectWithoutMembers = { ...mockProject, memberBriefs: null };
    render(<MemberDisplay project={projectWithoutMembers} />);
    
    const avatars = document.querySelectorAll('.w-\\[38px\\].h-\\[38px\\].rounded-full.bg-gray-300');
    expect(avatars).toHaveLength(3); // 2개의 기본 아바타 + 1개의 기술 아바타
    
    // 텍스트가 없는 빈 아바타들 확인
    const emptyAvatars = Array.from(avatars).filter(avatar => !avatar.textContent.trim());
    expect(emptyAvatars).toHaveLength(2);
  });

  it('memberBriefs가 빈 배열일 때 기본 아바타가 표시된다', () => {
    const projectWithEmptyMembers = { ...mockProject, memberBriefs: [] };
    render(<MemberDisplay project={projectWithEmptyMembers} />);
    
    const avatars = document.querySelectorAll('.w-\\[38px\\].h-\\[38px\\].rounded-full.bg-gray-300');
    expect(avatars).toHaveLength(3); // 2개의 기본 아바타 + 1개의 기술 아바타
  });

  it('멤버의 이름이 없을 때 물음표가 표시된다', () => {
    const projectWithNoName = {
      memberBriefs: [{ name: null }, { name: '' }],
      techs: ['React']
    };
    render(<MemberDisplay project={projectWithNoName} />);
    
    expect(screen.getAllByText('?')).toHaveLength(2);
  });

  it('기술 아바타가 올바르게 렌더링된다', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    // 첫 번째 기술의 첫 2글자 (React → Re)
    expect(screen.getByText('Re')).toBeInTheDocument();
  });

  it('기술 아바타가 올바른 위치를 갖는다', () => {
    render(<MemberDisplay {...defaultProps} />);
    
    const techContainer = screen.getByText('Re').closest('div[class*="absolute"]');
    expect(techContainer).toHaveStyle({
      left: '20px',
      top: '205px'
    });
  });

  it('기술이 없을 때 미설정이 표시된다', () => {
    const projectWithoutTechs = { ...mockProject, techs: null };
    render(<MemberDisplay project={projectWithoutTechs} />);
    
    expect(screen.getByText('미설정')).toBeInTheDocument();
  });

  it('빈 기술 배열일 때 미설정이 표시된다', () => {
    const projectWithEmptyTechs = { ...mockProject, techs: [] };
    render(<MemberDisplay project={projectWithEmptyTechs} />);
    
    expect(screen.getByText('미설정')).toBeInTheDocument();
  });

  it('기술이 배열이 아닐 때 미설정이 표시된다', () => {
    const projectWithInvalidTechs = { ...mockProject, techs: 'React' };
    render(<MemberDisplay project={projectWithInvalidTechs} />);
    
    expect(screen.getByText('미설정')).toBeInTheDocument();
  });

  it('position이 left가 아닐 때 left 스타일이 적용되지 않는다', () => {
    render(<MemberDisplay {...defaultProps} position="right" />);
    
    const crewTitle = screen.getByText('크루');
    expect(crewTitle.style.left).toBe('');
    expect(crewTitle).toHaveStyle({ top: '113px' });
  });

  it('position prop의 기본값이 left로 작동한다', () => {
    render(<MemberDisplay project={mockProject} />);
    
    const crewTitle = screen.getByText('크루');
    expect(crewTitle).toHaveStyle({
      left: '20px',
      top: '113px'
    });
  });

  it('짧은 기술명이 올바르게 처리된다', () => {
    const projectWithShortTech = { ...mockProject, techs: ['JS'] };
    render(<MemberDisplay project={projectWithShortTech} />);
    
    expect(screen.getByText('JS')).toBeInTheDocument();
  });

  it('한 글자 기술명이 올바르게 처리된다', () => {
    const projectWithOneCharTech = { ...mockProject, techs: ['R'] };
    render(<MemberDisplay project={projectWithOneCharTech} />);
    
    expect(screen.getByText('R')).toBeInTheDocument();
  });

  it('멤버가 1명일 때도 올바르게 처리된다', () => {
    const projectWithOneMember = {
      ...mockProject,
      memberBriefs: [{ name: '김철수' }]
    };
    render(<MemberDisplay project={projectWithOneMember} />);
    
    expect(screen.getByText('김')).toBeInTheDocument();
    // 1명만 있어도 2개까지 표시하므로 slice(0, 2)의 결과는 1개
  });
});