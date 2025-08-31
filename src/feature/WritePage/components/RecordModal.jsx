import { useNavigate } from 'react-router-dom';
import Button from '../../../ui/Button.jsx';

export default function RecordModal({ isOpen, onClose, message = "오늘도 수고했어!!", redirectTo = "/", onComplete, onCompleteRedirect, isLoading = false }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleConfirmClick = () => {
    if (isLoading) {
      return;
    }
    
    if (onComplete) {
      onComplete();
    } else if (onCompleteRedirect) {
      onCompleteRedirect();
    } else {
      navigate(redirectTo);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative w-screen h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-48">
          {message}
        </h1>
        <Button
          variant="primary"
          onClick={handleConfirmClick}
          disabled={isLoading}
          className="w-[300px] h-14 text-lg"
        >
          {isLoading ? "저장 중..." : "확인"}
        </Button>
      </div>
    </div>
  );
}