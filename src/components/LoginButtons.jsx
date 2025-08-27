import { useAuthActions } from '../hooks/useAuth';

export default function LoginButtons({ onLoginClick }) {

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={onLoginClick}
        className="px-3 py-2 rounded text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
      >
        로그인
      </button>
    </div>
  );
}