import TechStack from '../../../components/TechStack.jsx';
import { COLORS } from "../../../utils/colors.js";
import { ProjectUtils } from "../Project/utils/ProjectUtils";

export default function MemberDisplay({ project, position = "left" }) {
  const positionStyle = position === "left" ? { left: "20px" } : {};

  const displayMembers = ProjectUtils.getDisplayMembers(project);

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
          // 리더가 포함된 전체 멤버 수를 고려하여 최대 표시 수 계산
          const totalMembersToShow = displayMembers.length;
          const maxDisplay = Math.min(2, totalMembersToShow);

          // displayMembers 배열의 실제 길이 기준으로 아이콘 생성
          return Array.from({ length: maxDisplay }, (_, i) => {
            const member = displayMembers[i]; // 해당 인덱스의 멤버 정보 (있을 수도 없을 수도)
            const displayName = ProjectUtils.getMemberDisplayName(member);

            if (member) {
              // 멤버 정보가 있으면 실제 멤버 표시
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
            } else {
              // 멤버 정보가 없으면 기본 아이콘 표시
              return (
                <div
                  key={i}
                  className="w-[38px] h-[38px] rounded-full bg-gray-300"
                  title={`팀원 ${i + 1}`}
                />
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
