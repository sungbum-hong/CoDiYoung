// src/components/Header.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useUI } from "../contexts/UIContext";
import { ROUTES } from "../constants/routes";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useUI();

  // 로그인/인증 관련 경로
  const AUTH_ROUTES = ["/signin", "/findpassword", "/resetpassword", "/successresetpassword"];
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
    }
  };

  const handleProfileClick = () => {
    navigate(ROUTES.PROFILE);
  };

  return (
    <header className="relative z-[1000]">
      <div className="mx-auto w-full max-w-7xl h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-5 flex items-center justify-between">
        
        {/* 로고 → 홈 */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="font-extrabold text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="메인으로 이동"
        >
          CoDiYoung
        </button>

        {/* 인증 상태에 따른 우측 메뉴 */}
        {!isAuthRoute && (
          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              // 로그인된 상태 - hover 드롭다운 프로필 메뉴
              <div className="relative group">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold cursor-pointer hover:bg-blue-600 transition-colors">
                  {user?.nickname?.charAt(0) || 'U'}
                </div>

                {/* 호버 드롭다운 메뉴 */}
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <button
                    onClick={handleProfileClick}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                  >
                    내 프로필
                  </button>
                  
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors text-left"
                  >
                    로그아웃
                  </button>
                </div>
              </div>
            ) : (
              // 로그인하지 않은 상태
              <Link
                to="/signin"
                className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                로그인
              </Link>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
