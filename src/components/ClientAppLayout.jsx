"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Header from "./Header.jsx";
import { AUTH_ROUTES } from "../constants/routes.js";
import { CONFIG } from "../constants/config.js";

export default function ClientAppLayout({ children }) {
  const pathname = usePathname();
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  // user로 시작하는 경로 패턴 매칭
  const hideHeaderOnUser = pathname.startsWith("/user/");
  const hideHeader = hideHeaderOnUser || isAuthRoute;

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

  // 레이아웃 스타일 정의 
  const base = "relative z-0";
  // NOTE: Tailwind does not support dynamic class names like start-[${val}]. 
  // We should ideally use style prop or predefined classes. 
  // However, keeping original logic for now, but converting config value usage if it was used in template literal.
  // The original used: min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)]
  // And: max-w-[${CONFIG.LAYOUT.MAX_CONTENT_WIDTH}px]
  
  const authLayout = `min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)] grid place-items-center overflow-hidden`;
  // Using style object for dynamic values is safer in Tailwind if arbitrary values are not detected at build time
  // But JIT might pick it up if the config file is constant. 
  // Let's keep it as string class for now, but if it fails, we move to style={{ maxWidth: ... }}
  const normalLayout = `max-w-[${CONFIG.LAYOUT.MAX_CONTENT_WIDTH}px] mx-auto px-6 md:px-24 lg:px-36`;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {!hideHeader && <Header disableAuthModal={isAuthRoute} />}
      <main className={`${base} ${isAuthRoute ? authLayout : normalLayout}`}>
        {children}
      </main>
    </div>
  );
}
