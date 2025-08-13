import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../ui/Modal";
import SignIn from "../pages/SignIn";
import FindPassword from "../feature/SignIn/FindPassword";
import ResetPassword from "../feature/SignIn/ResetPassword";
import SuccessResetPassword from "../feature/SignIn/SuccessResetPassword";
import { useAuth } from "../contexts/AuthContext";

export default function AuthModalManager() {
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
    navigate("/");
  };

  return (
    <>
      {/* 로그인 버튼 */}
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

      {/* 모달 */}
      <Modal
        isOpen={isSignInOpen && location.pathname !== "/successresetpassword"}
        onClose={handleModalClose}
        title={getModalTitle()}
      >
        {getModalContent()}
      </Modal>
      
      {/* 성공 화면 */}
      {isSignInOpen && location.pathname === "/successresetpassword" && (
        <div className="fixed inset-0 bg-white z-50">
          <SuccessResetPassword />
        </div>
      )}
    </>
  );
}