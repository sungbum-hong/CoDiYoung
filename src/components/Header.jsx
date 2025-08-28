// src/components/Header.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useUI } from "../contexts/UIContext";
import { ROUTES, AUTH_ROUTES } from "../constants/routes";
import { COLORS } from "../utils/colors.js";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useUI();

  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  const handleLogoClick = () => {
    try {
      navigate("/", { replace: false });
    } catch {
      // SPA 내비게이션 실패 시 하드 리다이렉트
      window.location.assign("/");
    }
  };

  const handleLogout = async () => {
    const result = await logout();
    if (result.success) {
      navigate(ROUTES.HOME);
      window.location.reload();
    }
  };

  const handleProfileClick = () => {
    navigate(ROUTES.PROFILE);
  };

  return (
    <header className="relative z-[1000]">
      <div className="mx-auto w-full max-w-7xl h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-5 flex items-center justify-between">
        {/* 로고 → 홈 */}
        <Link
          to="/"
          className="font-extrabold focus:outline-none focus:ring-2
          focus:ring-offset-2"
          style={{ color: COLORS.GRAY_900, focusRingColor: COLORS.PRIMARY }}
        >
          CoDiYoung
        </Link>

        {/* 인증 상태에 따른 우측 메뉴 */}
        {!isAuthRoute && (
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              // 로그인된 상태 - hover 드롭다운 프로필 메뉴
              <div className="relative group">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold cursor-pointer transition-colors"
                  style={{ 
                    backgroundColor: COLORS.PRIMARY, 
                    color: COLORS.WHITE 
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = COLORS.BLUE_600;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = COLORS.PRIMARY;
                  }}
                >
                  {user?.nickname?.charAt(0) || "U"}
                </div>

                {/* 호버 드롭다운 메뉴 */}
                <div 
                  className="absolute right-0 mt-2 w-32 rounded-lg shadow-lg border py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col"
                  style={{ 
                    backgroundColor: COLORS.WHITE, 
                    borderColor: COLORS.GRAY_200 
                  }}
                >
                  <button onClick={handleProfileClick} className="btn-dropdown">
                    내 프로필
                  </button>

                  <button onClick={handleLogout} className="btn-dropdown">
                    로그아웃
                  </button>
                </div>
              </div>
            ) : (
              // 로그인하지 않은 상태
              <Link to="/signin" className="btn-base">
                로그인
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
