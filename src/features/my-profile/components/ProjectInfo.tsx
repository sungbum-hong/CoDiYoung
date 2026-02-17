import { COLORS } from '../../../constants/colors';
import { useAuthState } from '../../../hooks/useAuth';

export default function ProjectInfo({ project, position = "left" }: { project: any; position?: string }) {
  const positionStyle = position === "left" ? { left: "198px" } : {};
  const { user } = useAuthState();

  
  // 현재 사용자가 프로젝트 팀장인지 확인
  const isProjectLeader = user && project && (
    project.creatorId === user.id || 
    project.leaderId === user.id ||
    project.userId === user.id ||
    project.ownerId === user.id
  );

  return (
    <div className="absolute space-y-1" style={{ ...positionStyle, top: "13px" }}>
      <div className="text-xs font-bold">
        프로젝트 명: {project.title || ""}
      </div>
      <div className="text-xs font-bold">
        참여 인원: {(() => {
          // 리더를 포함한 실제 참여 인원 계산
          const memberBriefsCount = project.memberBriefs?.length || 0;
          const hasLeader = project.leaderInfoProjection ? 1 : 0;
          const totalMembers = memberBriefsCount + hasLeader;
          return Math.max(1, totalMembers);
        })()}/{project.capacity ?? 0}명
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