import { COLORS } from "../../constants/colors";
import { MESSAGES } from "../../constants/messages";

export default function ProfileSidebar({ activeSection, onSectionChange }) {
  const menuItems = [
    MESSAGES.SECTIONS.PROFILE_INFO,
    MESSAGES.SECTIONS.STUDY_LIST,
    MESSAGES.SECTIONS.PROJECT_LIST,
    MESSAGES.SECTIONS.ATTENDANCE_CHECK,
  ];

  return (
    <aside className="w-full md:w-[35.6%] flex flex-col justify-between items-center bg-white shadow-sm min-h-screen p-6">
      
      {/* 프로필 */}
      <div className="w-[13.85%] max-w-[266px] aspect-square rounded-full bg-gray-300 flex items-center justify-center font-semibold text-lg">
  U1
</div>

      {/* 메뉴 */}
      <nav className="flex flex-col items-center w-full" style={{ gap: '132px' }}>
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => onSectionChange(item)}
            className={`w-full max-w-[220px] h-[3.25rem] rounded-md border text-center transition-colors
              
              bg-transparent text-[${COLORS.PRIMARY}] border-[${COLORS.PRIMARY}] hover:bg-[${COLORS.PRIMARY}]/10
              
              text-[1.25rem]`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* 맨 아래 로고 */}
      <div className="mb-[5%] text-lg font-semibold">
        CoDiYoung
      </div>
    </aside>
  );
}
