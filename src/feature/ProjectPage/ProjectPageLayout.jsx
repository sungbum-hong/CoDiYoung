import { useParams } from "react-router-dom";
import ProjectCard from "./ProjectCard.jsx";

export default function ProjectPageLayout() {
  const { projectId } = useParams();

  const projectData = {
    name: `프로젝트 ${projectId}`,
    slogan: '혁신적인 아이디어로 만드는 프로젝트',
    leadImage: '',
    members: new Array(5).fill(null).map((_, i) => ({ id: i })),
    tech: new Array(3).fill(null).map((_, i) => ({ id: i })),
    description: '프로젝트 설명 or 이미지'
  };

  return (
    <div className="min-h-screen">
      <ProjectCard project={projectData} />
    </div>
  );
}