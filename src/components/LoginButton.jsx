import { useAuthActions } from '../hooks/useAuth';
import { COLORS } from '../utils/colors.js';
import { MESSAGES } from '../constants/messages.js';

// 컴포넌트 이름을 LoginButton으로 변경 (단수형)
export default function LoginButton({ onLoginClick }) {

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={onLoginClick}
        className="btn-nav"
        style={{ color: COLORS.GRAY_700 }}
        onMouseEnter={(e) => e.target.style.backgroundColor = COLORS.GRAY_100}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
        aria-label="로그인 모달 열기"
      >
        {MESSAGES.UI.LOGIN}
      </button>
    </div>
  );
}