import { useNavigate } from 'react-router-dom';
import BaseModal from '../../../ui/BaseModal.jsx';
import Button from '../../../ui/Button.jsx';

export default function LoginModal({ onClose, onProviderLogin }) {
  const navigate = useNavigate();

  const goLogin = () => {
    onClose?.();
    navigate('/signin'); // 로그인 페이지 경로
  };

  const handleProvider = (provider) => {
    // 필요 시 상위에서 처리할 수 있게 콜백 제공
    onProviderLogin?.(provider);
    // 또는 바로 이동/요청하도록 바꿔도 됩니다.
  };

  return (
    <BaseModal
      isOpen={true}
      onClose={onClose}
      size="SMALL"
      showTitle={false}
      className="w-96 max-w-[90vw] p-13 text-center"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-24">로그인이 필요해요</h2>
      {/* 액션 버튼 */}
      <div className="flex justify-center gap-7">
        <Button
          variant="primary"
          onClick={goLogin}
          className="h-10 px-5 border transition-colors
                     hover:bg-[#722EFF] hover:text-white hover:border-[#722EFF]
                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#722EFF]/40
                     active:bg-[#5d24cc]"
        >
          로그인
        </Button>
        <Button
          variant="secondary"
          onClick={onClose}
          className="h-10 px-4 "
        >
          닫기
        </Button>
      </div>
    </BaseModal>
  );
}