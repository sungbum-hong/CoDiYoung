// src/layout/AppLayout.jsx
import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header.jsx"

export default function AppLayout() {
  const { pathname } = useLocation()
  const hideHeader = pathname.startsWith("/user/") // 특정 페이지에서 헤더 숨기기 예시

  return (
    <div className="min-h-screen bg-gray-50">
      {!hideHeader && <Header />}
      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-6">
        <Outlet /> {/* 여기에 각 페이지가 렌더링됨 */}
      </main>
    </div>
  )
}
