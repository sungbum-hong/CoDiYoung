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
        className="absolute flex flex-wrap gap-[10px] max-w-[200px]"
        style={{ ...positionStyle, top: "136px" }}
      >
        {(() => {
          const actualMemberCount = project.memberCount || displayMembers.length || 1;

          // 실제 인원수와 displayMembers 수 비교하여 부족한 경우 빈 멤버 추가
          let membersToShow = [...displayMembers];

          // displayMembers가 실제 인원수보다 적은 경우 빈 슬롯 추가
          if (membersToShow.length < actualMemberCount) {
            const missingCount = actualMemberCount - membersToShow.length;
            for (let i = 0; i < missingCount; i++) {
              membersToShow.push({
                userId: null,
                name: `팀원 ${membersToShow.length + i + 1}`,
                profileKey: null,
                isEmpty: true
              });
            }
          }

          // 실제 멤버들을 표시 (최대 6명까지 제한)
          const maxDisplay = Math.min(6, membersToShow.length);
          return membersToShow.slice(0, maxDisplay).map((member, i) => {
            const displayName = isAppliedProject
              ? (member.name || `팀원 ${i + 1}`)
              : (ProjectUtils.getMemberDisplayName(member) || `팀원 ${i + 1}`);

            const imageUrl = isAppliedProject
              ? ProjectUtils.resolveImageUrl(member.profileKey)
              : ProjectUtils.getMemberImageUrl(member);

            // 빈 슬롯인지 확인
            const isEmpty = member.isEmpty || (!imageUrl && !displayName);
            const bgColor = isEmpty ? 'bg-gray-200' : 'bg-gray-300';
            const borderStyle = isEmpty ? 'border-2 border-dashed border-gray-400' : '';

            return (
              <div
                key={i}
                className={`w-[38px] h-[38px] rounded-full ${bgColor} ${borderStyle} flex items-center justify-center text-xs overflow-hidden`}
                title={isEmpty ? '빈 슬롯' : displayName}
              >
                {!isEmpty && imageUrl ? (
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

                {/* 이미지가 없거나 빈 슬롯일 때 표시 */}
                <div
                  className={`w-full h-full flex items-center justify-center ${!isEmpty && imageUrl ? 'hidden' : 'flex'} ${isEmpty ? 'text-gray-400' : ''}`}
                >
                  {isEmpty ? "+" : (displayName?.[0] ?? "?")}
                </div>
              </div>
            );
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
