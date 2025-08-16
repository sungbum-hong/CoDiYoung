// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const AUTH_ROUTES = ["/signin", "/findpassword", "/resetpassword", "/successresetpassword"];
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  return (
    <header className="relative z-[1000]">
      <div className="mx-auto w-full max-w-7xl h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-5 flex items-center justify-between">
        {/* 로고 → 홈 */}
        <Link
          to="/"
          className="font-extrabold text-gray-900 no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="메인으로 이동"
        >
          CoDiYoung
        </Link>

        {/* 인증 경로가 아닐 때만 페이지 이동 버튼 */}
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
