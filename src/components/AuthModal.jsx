// src/components/AuthModal.jsx
import BaseModal from "../ui/BaseModal";
import SignIn from "../pages/SignIn";
// ⛔️ 아래 세 개는 라우터에서 전체 페이지로 렌더되므로 모달에서 사용하지 않음
// import FindPassword from "../feature/SignIn/FindPassword";
// import ResetPassword from "../feature/SignIn/ResetPassword";
// import SuccessResetPassword from "../feature/SignIn/SuccessResetPassword";

/**
 * 변경 사항:
 * - 로그인(SignIn)만 모달 표시
 * - /signin, /findpassword, /resetpassword, /successresetpassword 에서는 렌더하지 않음
 * - isOpen === false 일 때 DOM에 남지 않음 (오버레이로 헤더 클릭 가림 방지)
 */
export default function AuthModal({
  isOpen = false,
  onClose,
  title = "로그인",
  currentPath = "",
}) {
  const DISABLE_ROUTES = [
    "/signin",
    "/findpassword",
    "/resetpassword",
    "/successresetpassword",
  ];

  // 모달이 닫혀있거나, 인증 관련 경로이면 아무것도 렌더하지 않음
  if (!isOpen || DISABLE_ROUTES.includes(currentPath)) return null;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="DEFAULT"
      showTitle={true}
      className="p-6"
    >
      <SignIn onClose={onClose} />
    </BaseModal>
  );
}
