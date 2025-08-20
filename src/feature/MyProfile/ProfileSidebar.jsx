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
    <aside className="w-full md:w-1/3 bg-white shadow-sm min-h-screen flex flex-col items-center justify-start pt-8 px-4">
      <div 
        className="rounded-full bg-gray-300 flex items-center justify-center font-semibold text-lg mb-16"
        style={{
          width: 'min(20vw, 180px)',
          height: 'min(20vw, 180px)',
          aspectRatio: '1/1'
        }}
      >
        U1
      </div>

      <nav className="flex flex-col items-center w-full space-y-8">
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
            className="rounded-md border text-center transition-all duration-200 hover:bg-blue-500 hover:text-white active:bg-blue-600 text-sm md:text-base"
            onMouseEnter={(e) => {
              if (activeSection !== item) {
                e.target.style.backgroundColor = COLORS.PRIMARY;
                e.target.style.color = "white";
              }
            }}
            onMouseLeave={(e) => {
              if (activeSection !== item) {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = COLORS.PRIMARY;
              }
            }}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
