import { COLORS } from '../../../utils/colors.js';

export default function ProjectInfo({ project, position = "left" }) {
  const positionStyle = position === "left" ? { left: "198px" } : {};

  return (
    <div className="absolute space-y-1" style={{ ...positionStyle, top: "13px" }}>
      <div className="text-xs font-bold">
        프로젝트 명: {project.title || ""}
      </div>
      <div className="text-xs font-bold">
        참여 인원: {project.memberCount ?? 0}명
      </div>
      <div className="text-xs font-bold">
        포지션:{" "}
        {project.position && Array.isArray(project.position)
          ? project.position.join(", ")
          : "미설정"}
      </div>
      <div className="text-xs font-bold">
        연락처:{" "}
        {project.kakaoLink ? (
          <a
            href={project.kakaoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 underline cursor-pointer"
          >
            {project.kakaoLink}
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}