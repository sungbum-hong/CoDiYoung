import { COLORS } from "../../../utils/colors.js";

export default function MemberList({ members }) {
  return (
    <div>
      <h3 className="text-sm mb-4">팀원</h3>
      <div className="flex items-center gap-4">
        {members && members.length > 0 ? (
          members.map((member, idx) => (
            <div 
              key={member.userId || idx} 
              className="w-12 h-12 rounded-full flex items-center justify-center text-xs font-bold text-white" 
              style={{ backgroundColor: COLORS.PRIMARY }}
              title={member.name}
            >
              {member.name ? member.name[0].toUpperCase() : '?'}
            </div>
          ))
        ) : (
          <div className="w-12 h-12 rounded-full" style={{ backgroundColor: COLORS.GRAY_200 }} />
        )}
      </div>
    </div>
  );
}