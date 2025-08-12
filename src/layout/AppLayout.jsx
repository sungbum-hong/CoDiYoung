// src/layout/AppLayout.jsx
import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header.jsx"

export default function AppLayout() {
  const { pathname } = useLocation()
  const hideHeader = pathname.startsWith("/user/") // 특정 페이지에서 헤더 숨기기 예시

  return (
    <div style={{ minHeight: "100vh", background: "#fafafa" }}>
      {!hideHeader && <Header />}
      <main style={{ maxWidth: 1240, margin: "0 auto", padding: 24 }}>
        <Outlet /> {/* 여기에 각 페이지가 렌더링됨 */}
      </main>
    </div>
  )
}
