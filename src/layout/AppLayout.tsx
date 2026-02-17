// src/layout/AppLayout.jsx
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "../components/Header";
import { AUTH_ROUTES } from "../constants/routes";
import { CONFIG } from "../constants/config";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Route change handler can be implemented using useEffect with pathname if needed.
  // In Next.js, scroll restoration is automatic.
  
  // Example logic from original (simplified)
  const isAuthPage = Object.values(AUTH_ROUTES).some(route => pathname === route);

  const hideHeaderOnUser = pathname?.startsWith("/user/");
  const hideHeader = hideHeaderOnUser || isAuthPage;

  // ✅ 인증 페이지일 때 페이지 스크롤 완전 차단 (html/body)
  useEffect(() => {
    if (isAuthPage) {
      const prevHtml = document.documentElement.style.overflowY;
      const prevBody = document.body.style.overflowY;
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
      return () => {
        document.documentElement.style.overflowY = prevHtml;
        document.body.style.overflowY = prevBody;
      };
    }
  }, [isAuthPage]);

  // 레이아웃 스타일 정의 (매직 넘버 제거)
  const base = "relative z-0";
  const authLayout = `min-h-[calc(100dvh-${CONFIG.LAYOUT.HEADER_TOTAL_HEIGHT}px)] grid place-items-center overflow-hidden`;
  const normalLayout = `max-w-[${CONFIG.LAYOUT.MAX_CONTENT_WIDTH}px] mx-auto px-6 md:px-24 lg:px-36`;

  return (
    <div className="min-h-screen overflow-x-hidden">
      {!hideHeader && <Header disableAuthModal={isAuthPage} />}
      <main className={`${base} ${isAuthPage ? authLayout : normalLayout}`}>
        {children}
      </main>
    </div>
  );
}
