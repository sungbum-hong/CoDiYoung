import { useAuthActions } from '../hooks/useAuth';

export default function LoginButtons({ onLoginClick }) {
  const { loginWithTestData } = useAuthActions();

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={onLoginClick}
        className="px-3 py-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        로그인
      </button>
      {/* 테스트용 버튼 - 실제 구현 시 제거 */}
      <button
        type="button"
        onClick={loginWithTestData}
        className="px-3 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
      >
        테스트 로그인
      </button>
    </div>
  );
}