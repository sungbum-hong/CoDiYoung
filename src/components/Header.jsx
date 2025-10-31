
import AuthStatusBar from "./AuthStatusBar.jsx";

export default function Header({ disableAuthModal = false }) {
  const goToHomeHandle = () => {
    window.location.href = "/"; // 홈으로 이동 + 새로고침
  };

  return (
    <header className="relative z-[1000] px-4 sm:px-6 lg:px-6">
      <div className="w-full h-16 px-4 sm:px-6 lg:px-11 pt-3 mb-12 flex items-center justify-between">
        <button onClick={goToHomeHandle} className="flex items-center">
          <img src="/cdylogo.png" alt="CoDiYoung Logo" className="h-9 w-auto" />
        </button>
        {/* AuthStatusBar에서 인증 상태 관리 */}
        {!disableAuthModal && <AuthStatusBar />}
      </div>
    </header>
  );
}
