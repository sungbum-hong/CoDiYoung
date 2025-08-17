// src/layout/AppLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header.jsx";

export default function AppLayout() {
  const { pathname } = useLocation();

  const AUTH_ROUTES = ["/signin", "/findpassword", "/resetpassword", "/successresetpassword"];
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  const hideHeaderOnUser = pathname.startsWith("/user/");
  const hideHeader = hideHeaderOnUser;

  // ✅ 인증 페이지일 때 페이지 스크롤 완전 차단 (html/body)
  useEffect(() => {
    if (isAuthRoute) {
      const prevHtml = document.documentElement.style.overflowY;
      const prevBody = document.body.style.overflowY;
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
      return () => {
        document.documentElement.style.overflowY = prevHtml;
        document.body.style.overflowY = prevBody;
      };
    }
  }, [isAuthRoute]);

  // Header 실제 높이 보정: h-16(64) + pt-3(12) + mb-5(20) = 96px
   const base = "relative z-0 mx-auto px-4 sm:px-6 lg:px-6"; // ← z-0 추가
  const authLayout =
    "max-w-[1120px] min-h-[calc(100dvh-96px)] grid place-items-center overflow-hidden";
  const normalLayout = "max-w-[1240px]";

  return (
    <div className="min-h-screen overflow-x-hidden">
      {!hideHeader && <Header disableAuthModal={isAuthRoute} />}
      <main className={`${base} ${isAuthRoute ? authLayout : normalLayout}`}>
        <Outlet />
      </main>
    </div>
  );
}
