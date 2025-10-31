import TechStack from '../../../components/TechStack.jsx';
import { COLORS } from "../../../constants/colors.js";
import { ProjectUtils } from "../Project/utils/ProjectUtils";

export default function MemberDisplay({ project, position = "left" }) {
  const positionStyle = position === "left" ? { left: "20px" } : {};

  // 신청 프로젝트의 경우 리더 정보가 없으므로 memberBriefs만 사용
  const isAppliedProject = !project.leaderInfoProjection;

  let displayMembers;
  if (isAppliedProject) {
    // 신청 프로젝트에서 memberBriefs가 비어있으면 현재 사용자를 표시
    const memberBriefs = project.memberBriefs || [];
    if (memberBriefs.length === 0 && project.memberCount > 0) {
      // memberBriefs가 비어있지만 memberCount가 있으면 기본 멤버 표시
      displayMembers = Array.from({ length: Math.min(2, project.memberCount) }, (_, i) => ({
        userId: null,
        name: `멤버 ${i + 1}`,
        profileKey: null
      }));
    } else {
      displayMembers = memberBriefs;
    }
  } else {
    displayMembers = ProjectUtils.getDisplayMembers(project);
  }


  return (
    <>
      {/* 크루 제목 */}
      <div
        className="absolute text-xs font-bold"
        style={{ ...positionStyle, top: "113px" }}
      >
        크루
      </div>

      {/* 크루 동그라미들 */}
      <div
        className="absolute flex gap-[20px]"
        style={{ ...positionStyle, top: "136px" }}
      >
        {(() => {
          const actualMemberCount = project.memberCount || displayMembers.length || 1;
          const maxDisplay = Math.min(2, displayMembers.length);

          // 실제 멤버들을 표시
          return displayMembers.slice(0, maxDisplay).map((member, i) => {
            if (isAppliedProject) {
              // 신청 프로젝트: memberBriefs 구조 사용
              const displayName = member.name || `팀원 ${i + 1}`;
              const imageUrl = ProjectUtils.resolveImageUrl(member.profileKey);

              return (
                <div
                  key={i}
                  className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs overflow-hidden"
                  title={displayName}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={displayName}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}

                  {/* 이미지가 없거나 로드 실패시 표시 */}
                  <div
                    className={`w-full h-full flex items-center justify-center ${imageUrl ? 'hidden' : 'flex'}`}
                  >
                    {displayName?.[0] ?? "?"}
                  </div>
                </div>
              );
            } else {
              // 진행 프로젝트: 기존 로직 사용
              const displayName = ProjectUtils.getMemberDisplayName(member);
              const imageUrl = ProjectUtils.getMemberImageUrl(member);

              return (
                <div
                  key={i}
                  className="w-[38px] h-[38px] rounded-full bg-gray-300 flex items-center justify-center text-xs overflow-hidden"
                  title={displayName || `팀원 ${i + 1}`}
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={displayName || '팀원'}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    displayName?.[0] ?? "?"
                  )}
                </div>
              );
            }
          });
        })()}
      </div>

      {/* 기술 제목 */}
      <div
        className="absolute text-xs font-bold"
        style={{ ...positionStyle, top: "182px" }}
      >
        기술
      </div>

      {/* 기술 스택 아이콘들 */}
      <div
        className="absolute flex items-center gap-[20px]"
        style={{ ...positionStyle, top: "205px", maxWidth: "200px" }}
      >
        {project.techs && project.techs.length > 0 ? (
          <TechStack 
            techs={project.techs} 
            displayMode="icons" 
            size="sm" 
            className="flex-wrap"
          />
        ) : (
          <div className="w-[38px] h-[38px] rounded-full" style={{ backgroundColor: COLORS.GRAY_200 }} />
        )}
      </div>
    </>
  );
}
