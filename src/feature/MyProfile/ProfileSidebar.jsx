import { COLORS } from '../../constants/colors';
import { MESSAGES } from '../../constants/messages';
import { CONFIG } from '../../constants/config';

export default function ProfileSidebar() {
  const menuItems = [MESSAGES.SECTIONS.PROFILE_INFO, MESSAGES.SECTIONS.STUDY_LIST, MESSAGES.SECTIONS.PROJECT_LIST, MESSAGES.SECTIONS.ATTENDANCE_CHECK];

  return (
    <aside 
      className="w-full md:w-1/4 p-6 flex flex-col items-center gap-8 shadow-sm"
      style={{ backgroundColor: COLORS.WHITE }}
    >
      
      {/* 프로필 이미지 */}
      <div 
        className="w-24 h-24 rounded-full flex items-center justify-center text-lg font-semibold"
        style={{ backgroundColor: COLORS.GRAY_300 }}
      >
        U1
      </div>
      
      {/* 메뉴 */}
      <nav 
        className="flex flex-col max-w-[150px]"
        style={{ gap: CONFIG.CARD.PROJECT.GAP }}
      >
        {menuItems.map((item) => (
          <button
            key={item}
            className="text-lg py-2 px-5 rounded-md transition"
            style={{
              border: `1px solid ${COLORS.PRIMARY}`,
              backgroundColor: 'transparent',
              ':hover': {
                backgroundColor: `${COLORS.PRIMARY}1A` // 10% opacity
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