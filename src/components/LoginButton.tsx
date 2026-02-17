import { COLORS } from '../constants/colors';
import { MESSAGES } from '../constants/messages';

// 컴포넌트 이름을 LoginButton으로 변경 (단수형)
export default function LoginButton({ onLoginClick }: { onLoginClick: () => void }) {

  return (
    <div className="flex items-center space-x-2">
      <button
        type="button"
        onClick={onLoginClick}
        className="btn-nav"
        style={{ color: COLORS.GRAY_700 }}
        onMouseEnter={(e) => (e.target as HTMLButtonElement).style.backgroundColor = COLORS.GRAY_100}
        onMouseLeave={(e) => (e.target as HTMLButtonElement).style.backgroundColor = 'transparent'}
        aria-label="로그인 모달 열기"
      >
        {MESSAGES.UI.LOGIN}
      </button>
    </div>
  );
}