import BaseModal from "../ui/BaseModal";
import SignIn from "../pages/SignIn";
import FindPassword from "../feature/SignIn/FindPassword";
import ResetPassword from "../feature/SignIn/ResetPassword";
import SuccessResetPassword from "../feature/SignIn/SuccessResetPassword";

export default function AuthModal({ 
  isOpen, 
  onClose, 
  title, 
  currentPath 
}) {
  const getModalContent = () => {
    switch (currentPath) {
      case "/findpassword":
        return <FindPassword />;
      case "/resetpassword":
        return <ResetPassword />;
      case "/successresetpassword":
        return <SuccessResetPassword />;
      default:
        return <SignIn onClose={onClose} />;
    }
  };

  return (
    <>
      {/* 모달 */}
      <BaseModal
        isOpen={isOpen && currentPath !== "/successresetpassword"}
        onClose={onClose}
        title={title}
        size="DEFAULT"
        showTitle={true}
        className="p-6"
        style={{
          left: "50%",
          top: "20%",
          transform: "translateX(-50%)",
          position: "absolute",
        }}
      >
        {getModalContent()}
      </BaseModal>
      
      {/* 성공 화면 - 전체 화면 표시 */}
      {isOpen && currentPath === "/successresetpassword" && (
        <div className="fixed inset-0 bg-white z-50">
          <SuccessResetPassword />
        </div>
      )}
    </>
  );
}