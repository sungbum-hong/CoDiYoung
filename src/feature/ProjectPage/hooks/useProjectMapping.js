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
    name: projectData.title || projectData.name || '프로젝트 이름',
    slogan: projectData.questions?.[0] || projectData.slogan || '프로젝트 슬로건',
    leadImage: projectData.imageUrl || projectData.leadImage || '',
    members: projectData.memberBriefs || projectData.members || [],
    tech: projectData.techs || projectData.tech || [],
    description: projectData.description || '프로젝트 설명 또는 이미지가 들어갈 영역입니다.',
    projectId: projectData.id
  };

  return mappedData;
}