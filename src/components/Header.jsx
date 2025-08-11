import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header style={{ position: "sticky", top: 0, background: "#fff", borderBottom: "1px solid #eee" }}>
      <div style={{ maxWidth: 960, margin: "0 auto", height: 56, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
        <Link to="/" style={{ fontWeight: 700, textDecoration: "none", color: "#111" }}>CoDiYoung</Link>
        <nav style={{ display: "flex", gap: 8 }}>
          <NavLink to="/list/coding">코딩</NavLink>
          <NavLink to="/list/design">디자인</NavLink>
          <NavLink to="/list/video">영상</NavLink>
          <NavLink to="/signin">로그인</NavLink>
        </nav>
      </div>
    </header>
  )
}
