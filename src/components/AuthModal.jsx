// src/components/AuthModal.jsx
import BaseModal from "../ui/BaseModal";
import SignInModal from "../feature/SignIn/SignInModal";

/**
 * 로그인 모달 컴포넌트
 * - 로그인 폼을 모달로 표시
 * - 인증 관련 전용 페이지에서는 표시되지 않음
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
      <SignInModal onClose={onClose} />
    </BaseModal>
  );
}
