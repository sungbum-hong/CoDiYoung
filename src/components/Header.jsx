import { Link, useLocation } from "react-router-dom";
import AuthModalManager from "./AuthModalManager";

export default function Header() {
  const { pathname } = useLocation();
  const hideLoginButton = pathname === "/signin"; // 로그인 페이지일 때 버튼 숨김

  return (
    <header>
      <div className="mx-auto w-full max-w-7xl h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-5 flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="font-extrabold text-gray-900 no-underline">
          CoDiYoung
        </Link>

        {/* 로그인 버튼 (AuthModalManager) - /signin 페이지에서는 안 보이게 */}
        {!hideLoginButton && <AuthModalManager />}
      </div>
    </header>
  );
}
