// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import Modal from "../ui/Modal";
import SignIn from "../pages/SignIn";
import FindPassword from "../feature/SignIn/FindPassword";
import ResetPassword from "../feature/SignIn/ResetPassword";
import SuccessResetPassword from "../feature/SignIn/SuccessResetPassword";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { resetState } = useAuth();

  // URL이 인증 관련 경로일 때 모달 자동으로 열기
  useEffect(() => {
    const authPaths = ['/signin', '/findpassword', '/resetpassword', '/successresetpassword'];
    if (authPaths.includes(location.pathname)) {
      setIsSignInOpen(true);
    }
  }, [location.pathname]);

  const getModalTitle = () => {
    switch (location.pathname) {
      case '/findpassword':
        return '비밀번호 찾기';
      case '/resetpassword':
        return '비밀번호 재설정';
      case '/successresetpassword':
        return '비밀번호 재설정 완료';
      default:
        return '로그인';
    }
  };

  const getModalContent = () => {
    switch (location.pathname) {
      case '/findpassword':
        return <FindPassword />;
      case '/resetpassword':
        return <ResetPassword />;
      case '/successresetpassword':
        return <SuccessResetPassword />;
      default:
        return <SignIn onClose={handleModalClose} />;
    }
  };

  const handleLoginClick = () => {
    navigate('/signin');
    setIsSignInOpen(true);
  };

  const handleModalClose = () => {
    setIsSignInOpen(false);
    resetState();
    navigate('/');
  };

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
      <div className="max-w-4xl mx-auto h-14 flex items-center justify-between px-4">
        <Link to="/" className="font-extrabold text-gray-900 no-underline">
          CoDiYoung
        </Link>
        <nav className="flex space-x-2">
          <NavLink
            to="/list/coding"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-100 ${
                isActive ? "font-semibold text-purple-700" : "text-gray-700"
              }`
            }
          >
            코딩
          </NavLink>
          <NavLink
            to="/list/design"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-100 ${
                isActive ? "font-semibold text-purple-700" : "text-gray-700"
              }`
            }
          >
            디자인
          </NavLink>
          <NavLink
            to="/list/video"
            className={({ isActive }) =>
              `px-3 py-2 rounded hover:bg-gray-100 ${
                isActive ? "font-semibold text-purple-700" : "text-gray-700"
              }`
            }
          >
            영상
          </NavLink>
          <button
            onClick={handleLoginClick}
            className="px-3 py-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            로그인
          </button>
        </nav>
      </div>

      <Modal
        isOpen={isSignInOpen && location.pathname !== '/successresetpassword'}
        onClose={handleModalClose}
        title={getModalTitle()}
      >
        {getModalContent()}
      </Modal>

      {/* SuccessResetPassword를 전체 화면으로 렌더링 */}
      {isSignInOpen && location.pathname === '/successresetpassword' && (
        <div className="fixed inset-0 bg-white z-50">
          <SuccessResetPassword />
        </div>
      )}
    </header>
  );
}
