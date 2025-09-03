// src/components/Header.jsx
import { Link } from "react-router-dom";
import { COLORS } from "../utils/colors.js";
import AuthModalManager from "./AuthModalManager.jsx";

export default function Header({ disableAuthModal = false }) {
  return (
    <header className="relative z-[1000] px-4 sm:px-6 lg:px-6">
      <div className="w-full h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-12 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img src="/cdylogo.png" alt="CoDiYoung Logo" className="h-9 w-auto" />
      </Link>
        {/* AuthModalManager에서 인증 상태 관리 */}
        {!disableAuthModal && <AuthModalManager />}
      </div>
    </header>
  );
}
