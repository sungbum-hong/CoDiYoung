// src/components/Header.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

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

        {/* 로그인 링크 (인증 페이지가 아닐 때만 표시) */}
        {!isAuthRoute && (
          <Link
            to="/signin"
            className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            로그인
          </Link>
        )}
      </div>
    </header>
  );
}
