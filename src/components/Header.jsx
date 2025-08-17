// src/components/Header.jsx
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const AUTH_ROUTES = ["/signin", "/findpassword", "/resetpassword", "/successresetpassword"];
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  return (
    <header className="relative z-[1000]">
      <div className="mx-auto w-full max-w-7xl h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-5 flex items-center justify-between">
        {/* 로고 → 홈 */}
        <button
          type="button"
          onClick={() => {
            const before = window.location.pathname + window.location.search + window.location.hash;
            navigate("/", { replace: false });
            // 혹시 SPA 내비가 막히면 0ms 뒤 하드 리다이렉트
            setTimeout(() => {
              const after = window.location.pathname + window.location.search + window.location.hash;
              if (after === before) window.location.assign("/");
            }, 0);
          }}
          className="font-extrabold text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          aria-label="메인으로 이동"
        >
          CoDiYoung
        </button>

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
