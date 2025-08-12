// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
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

  const authPaths = ["/signin", "/findpassword", "/resetpassword", "/successresetpassword"];
  const onAuthRoute = authPaths.includes(location.pathname);

  // 인증 경로 접근 시 모달 자동 오픈
  useEffect(() => {
    setIsSignInOpen(onAuthRoute);
  }, [onAuthRoute]);

  // 모달 열릴 때 바디 스크롤 잠금
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = isSignInOpen ? "hidden" : prev || "";
    return () => (document.body.style.overflow = prev);
  }, [isSignInOpen]);

  const getModalTitle = () => {
    switch (location.pathname) {
      case "/findpassword":
        return "비밀번호 찾기";
      case "/resetpassword":
        return "비밀번호 재설정";
      case "/successresetpassword":
        return "비밀번호 재설정 완료";
      default:
        return "로그인";
    }
  };

  const getModalContent = () => {
    switch (location.pathname) {
      case "/findpassword":
        return <FindPassword />;
      case "/resetpassword":
        return <ResetPassword />;
      case "/successresetpassword":
        return <SuccessResetPassword />;
      default:
        return <SignIn onClose={handleModalClose} />;
    }
  };

  const handleLoginClick = () => {
    navigate("/signin");
    setIsSignInOpen(true);
  };

  const handleModalClose = () => {
    setIsSignInOpen(false);
    resetState();
    navigate("/"); // 필요 시 location.state?.from 등으로 되돌아가게 변경 가능
  };

  return (
    <header>
      {/* w-full + px-4 로 전체 폭에서 좌우 여백만 */}
       <div className="mx-auto w-full max-w-7xl h-16 px-11 pt-3 mb-5 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-gray-900 no-underline">
          CoDiYoung
        </Link>

        {!onAuthRoute && (
          <nav className="flex items-center">
            <button
              type="button"
              onClick={handleLoginClick}
              className="px-3 py-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              로그인
            </button>
          </nav>
        )}
      </div>

      {/* 모달/완료 화면 부분은 동일 */}
      <Modal
        isOpen={isSignInOpen && location.pathname !== "/successresetpassword"}
        onClose={handleModalClose}
        title={getModalTitle()}
      >
        {getModalContent()}
      </Modal>
      {isSignInOpen && location.pathname === "/successresetpassword" && (
        <div className="fixed inset-0 bg-white z-50">
          <SuccessResetPassword />
        </div>
      )}
    </header>
  );
}