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

  console.log("===== useProjectMapping 디버깅 =====");
  console.log("원본 프로젝트 데이터:", projectData);
  console.log("techs 필드:", projectData.techs);
  console.log("techs 타입:", typeof projectData.techs);
  console.log("techs 배열 여부:", Array.isArray(projectData.techs));

  const mappedData = {
    name: projectData.title || '프로젝트 이름',
    slogan: projectData.slogan || '프로젝트 슬로건', 
    leadImage: projectData.leaderImage || '',
    members: projectData.memberBriefs || [],
    tech: projectData.techs || [],
    description: projectData.content || '프로젝트 설명 또는 이미지가 들어갈 영역입니다.',
    projectId: projectData.id
  };

  console.log("매핑된 tech 데이터:", mappedData.tech);
  console.log("===========================");

  return mappedData;
}