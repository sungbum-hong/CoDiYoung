// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";

export default function Header({ showLoginButton = true }) {
  const { pathname } = useLocation();

  return (
    <header className="hd">
      <div className="hd-inner">
        <Link to="/" className="logo" aria-label="홈으로">로고</Link>

        {showLoginButton && (
          <Link to="/signin" className="login-btn">로그인</Link>
        )}
      </div>
    </header>
  );
}
