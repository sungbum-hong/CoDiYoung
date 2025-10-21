import { COLORS } from "../../../utils/colors.js";
import { ProjectUtils } from "../../MyProfile/Project/utils/ProjectUtils";

export default function MemberList({ members }) {
  return (
    <div>
      <h3 className="text-sm mb-4">팀원</h3>
      <div className="flex items-center gap-4">
        {members && members.length > 0 ? (
          members.map((member, idx) => {
            const imageUrl = ProjectUtils.getMemberImageUrl(member);
            const displayName = ProjectUtils.getMemberDisplayName(member);

            return (
              <div
                key={member.userId || idx}
                className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white overflow-hidden"
                style={{ backgroundColor: COLORS.PRIMARY }}
                title={displayName || '팀원'}
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={displayName || '팀원'}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  displayName ? displayName[0].toUpperCase() : '?'
                )}
              </div>
            );
          })
        ) : (
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: COLORS.GRAY_200 }} />
        )}
      </div>
    </div>
  );
}
