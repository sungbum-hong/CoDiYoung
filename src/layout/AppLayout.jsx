// src/layout/AppLayout.jsx
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "../components/Header.jsx";
import { AUTH_ROUTES } from "../constants/routes.js";
import { CONFIG } from "../constants/config.js";

export default function AppLayout() {
  const { pathname } = useLocation();
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

  // 레이아웃 스타일 정의 (매직 넘버 제거)
  const base = "relative z-0";
  const authLayout = `min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)] grid place-items-center overflow-hidden`;
  const normalLayout = `max-w-[${CONFIG.LAYOUT.MAX_CONTENT_WIDTH}px] mx-10 px-4 sm:px-6 lg:px-6`;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {!hideHeader && <Header disableAuthModal={isAuthRoute} />}
      <main className={`${base} ${isAuthRoute ? authLayout : normalLayout}`}>
        <Outlet />
      </main>
    </div>
  );
}
