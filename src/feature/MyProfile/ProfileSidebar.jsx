// components/ProfileSidebar.jsx - 기존 레이아웃 구조 유지
import { COLORS } from "../../utils/colors";
import { MESSAGES } from "../../constants/messages";
import Button from "../../ui/Button";
import { useProfile } from "./hooks/useProfile.js";

export default function ProfileSidebar({ activeSection, onSectionChange }) {
  // React Query를 사용한 프로필 데이터
  const { data: profileData } = useProfile();

  const menuItems = [
    MESSAGES.SECTIONS.PROFILE_INFO,
    MESSAGES.SECTIONS.STUDY_LIST,
    MESSAGES.SECTIONS.PROJECT_LIST,
    MESSAGES.SECTIONS.ATTENDANCE_CHECK,
  ];

  // React Query 데이터에서 필요한 정보 추출
  const profileImage = profileData?.profileImageUrl || null;
  const nickname = profileData?.nickName || '';

  return (
    <aside className="w-full md:w-1/3 bg-white min-h-screen flex flex-col items-center justify-start pt-22 px-4">
      {/* 아바타 - 실제 프로필 이미지 또는 기본 이니셜 */}
      <div
        className="rounded-full flex items-center justify-center font-semibold text-lg mb-12 flex-shrink-0 overflow-hidden"
        style={{
          backgroundColor: profileImage ? 'transparent' : COLORS.GRAY_300,
          width: 'min(20vw, 180px)',     
          height: 'min(20vw, 180px)',     
          aspectRatio: '1/1',
          minWidth: '80px',               
          minHeight: '80px',
          maxWidth: '180px',
          maxHeight: '180px',
        }}
      >
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="프로필 이미지"
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{nickname ? nickname.charAt(0).toUpperCase() : 'U'}</span>
        )}
      </div>

      {/* 네비게이션 - 기존 구조 유지하면서 안정화 */}
      <nav className="flex flex-col items-center w-full space-y-14">
        {menuItems.map((item) => (
          <Button
            key={item}
            variant={activeSection === item ? "primary" : "secondary"}
            onClick={() => onSectionChange(item)}
            className="whitespace-nowrap text-sm md:text-base flex-shrink-0"
            style={{
              width: 'min(65%, 160px)',    
              height: 'max(44px, min(6vh, 48px))', 
              minWidth: '120px',
              minHeight: '44px',
              maxWidth: '200px',
              maxHeight: '48px',
            }}
          >
            {item}
          </Button>
        ))}
      </nav>
    </aside>
  );
}

// 대안 1: CSS Grid를 활용한 안정적 레이아웃
export function GridLayoutSidebar({ activeSection, onSectionChange }) {
  // React Query를 사용한 프로필 데이터
  const { data: profileData } = useProfile();

  const menuItems = [
    MESSAGES.SECTIONS.PROFILE_INFO,
    MESSAGES.SECTIONS.STUDY_LIST,
    MESSAGES.SECTIONS.PROJECT_LIST,
    MESSAGES.SECTIONS.ATTENDANCE_CHECK,
  ];

  // React Query 데이터에서 필요한 정보 추출
  const profileImage = profileData?.profileImageUrl || null;
  const nickname = profileData?.nickName || '';

  return (
    <aside 
      className="w-full md:w-1/3 bg-white shadow-sm min-h-screen px-4"
      style={{
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        gridTemplateColumns: '1fr',
        gap: '3rem',
        paddingTop: '5.5rem',
      }}
    >
      {/* 아바타 영역 */}
      <div className="flex justify-center">
        <div
          className="rounded-full flex items-center justify-center font-semibold text-lg overflow-hidden"
          style={{
            backgroundColor: profileImage ? 'transparent' : COLORS.GRAY_300,
            width: 'min(20vw, 180px)',
            height: 'min(20vw, 180px)',
            aspectRatio: '1/1',
            minWidth: '80px',
            minHeight: '80px',
          }}
        >
          {profileImage ? (
            <img 
              src={profileImage} 
              alt="프로필 이미지"
              className="w-full h-full object-cover"
            />
          ) : (
            <span>{nickname ? nickname.charAt(0).toUpperCase() : 'U'}</span>
          )}
        </div>
      </div>

      {/* 네비게이션 영역 */}
      <div 
        className="flex flex-col items-center"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3.5rem',
          justifyItems: 'center',
          alignContent: 'start',
        }}
      >
        {menuItems.map((item) => (
          <Button
            key={item}
            variant={activeSection === item ? "primary" : "secondary"}
            onClick={() => onSectionChange(item)}
            className="whitespace-nowrap text-sm md:text-base"
            style={{
              width: 'min(65%, 160px)',
              height: 'max(44px, min(6vh, 48px))',
              minWidth: '120px',
              minHeight: '44px',
            }}
          >
            {item}
          </Button>
        ))}
      </div>
    </aside>
  );
}

// 대안 2: 최소한의 수정으로 움직임만 해결
export function MinimalFixSidebar({ activeSection, onSectionChange }) {
  // React Query를 사용한 프로필 데이터
  const { data: profileData } = useProfile();

  const menuItems = [
    MESSAGES.SECTIONS.PROFILE_INFO,
    MESSAGES.SECTIONS.STUDY_LIST,
    MESSAGES.SECTIONS.PROJECT_LIST,
    MESSAGES.SECTIONS.ATTENDANCE_CHECK,
  ];

  // React Query 데이터에서 필요한 정보 추출
  const profileImage = profileData?.profileImageUrl || null;
  const nickname = profileData?.nickName || '';

  return (
    <aside 
      className="w-full md:w-1/3 bg-white shadow-sm min-h-screen flex flex-col items-center justify-start pt-22 px-4"
      style={{
        // ✅ 레이아웃 안정화를 위한 최소한의 추가
        contain: 'layout',
        willChange: 'auto',
      }}
    >
      {/* 아바타 - 실제 프로필 이미지 또는 기본 이니셜 */}
      <div
        className="rounded-full flex items-center justify-center font-semibold text-lg mb-12 overflow-hidden"
        style={{
          backgroundColor: profileImage ? 'transparent' : COLORS.GRAY_300,
          width: 'min(20vw, 180px)',
          height: 'min(20vw, 180px)',
          aspectRatio: '1/1',
          contain: 'layout size', // ✅ 레이아웃 격리
        }}
      >
        {profileImage ? (
          <img 
            src={profileImage} 
            alt="프로필 이미지"
            className="w-full h-full object-cover"
          />
        ) : (
          <span>{nickname ? nickname.charAt(0).toUpperCase() : 'U'}</span>
        )}
      </div>

      {/* 네비게이션 - 기존과 거의 동일 */}
      <nav className="flex flex-col items-center w-full space-y-14">
        {menuItems.map((item) => (
          <div key={item} style={{ contain: 'layout' }}>
            <Button
              variant={activeSection === item ? "primary" : "secondary"}
              onClick={() => onSectionChange(item)}
              className="whitespace-nowrap text-sm md:text-base"
              style={{
                width: 'min(65%, 160px)',
                height: 'min(6vh, 48px)',
                // ✅ 최소한의 안전장치
                minHeight: '40px',
                maxHeight: '56px',
              }}
            >
              {item}
            </Button>
          </div>
        ))}
      </nav>
    </aside>
  );
}