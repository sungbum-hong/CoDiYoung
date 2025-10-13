export function useProjectMapping(project) {
  const defaultProject = {
    name: '프로젝트 이름',
    slogan: '프로젝트 슬로건',
    leadImage: '',
    members: new Array(5).fill(null).map((_, i) => ({ id: i })),
    tech: new Array(3).fill(null).map((_, i) => ({ id: i })),
    description: '프로젝트 설명 또는 이미지가 들어갈 영역입니다.'
  };

  const projectData = project || defaultProject;


  const mappedData = {
    name: projectData.title || '프로젝트 이름',
    slogan: projectData.slogan || '프로젝트 슬로건', 
    leadImage: projectData.leaderImage || '',
    members: projectData.memberBriefs || [],
    tech: projectData.techs || [],
    description: projectData.content || '프로젝트 설명 또는 이미지가 들어갈 영역입니다.',
    projectId: projectData.id
  };


  return mappedData;
}