import { COLORS } from "../../utils/colors";
import { MESSAGES } from "../../constants/messages";
import { usePrimaryButtonHover } from "../../hooks/useHoverStyle.js";

export default function ProfileSidebar({ activeSection, onSectionChange }) {
  const menuItems = [
    MESSAGES.SECTIONS.PROFILE_INFO,
    MESSAGES.SECTIONS.STUDY_LIST,
    MESSAGES.SECTIONS.PROJECT_LIST,
    MESSAGES.SECTIONS.ATTENDANCE_CHECK,
  ];
  
  // 호버 효과 훅 사용
  const primaryButtonHover = usePrimaryButtonHover(COLORS.PRIMARY);

  return (
    <aside className="w-full md:w-1/3 bg-white shadow-sm min-h-screen flex flex-col items-center justify-start pt-22 px-4">
      <div 
        className="rounded-full flex items-center justify-center font-semibold text-lg mb-12"
        style={{
          backgroundColor: COLORS.GRAY_300,
          width: 'min(20vw, 180px)',
          height: 'min(20vw, 180px)',
          aspectRatio: '1/1'
        }}
      >
        U1
      </div>

      <nav className="flex flex-col items-center w-full space-y-14">
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => onSectionChange(item)}
            style={{
              backgroundColor: activeSection === item ? COLORS.PRIMARY : "transparent",
              color: activeSection === item ? "white" : COLORS.PRIMARY,
              borderColor: COLORS.PRIMARY,
              width: 'min(65%, 160px)',
              height: 'min(6vh, 48px)'
            }}
            className="rounded-md border text-center transition-all duration-200 hover:bg-[var(--color-primary)] hover:text-white active:bg-[var(--color-blue-600)] text-sm md:text-base"
            {...(activeSection !== item && primaryButtonHover)}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
