import ProjectInfo from './ProjectInfo.jsx';
import MemberDisplay from './MemberDisplay.jsx';

export default function ProjectCard({ project, index }) {
  return (
    <div key={index} className="relative w-full h-full">
      {/* 프로젝트 이미지 */}
      <div
        className="absolute w-[70px] h-[70px] rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600"
        style={{ left: "20px", top: "12px" }}
      >
        프로젝트
        <br />
        이미지
      </div>

      {/* 프로젝트 정보 */}
      <ProjectInfo project={project} />

      {/* 멤버 및 기술 표시 */}
      <MemberDisplay project={project} />
    </div>
  );
}