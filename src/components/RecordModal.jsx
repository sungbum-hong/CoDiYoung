import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button.jsx';

export default function RecordModal({ isOpen, onClose }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="relative w-screen h-screen bg-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          오늘도 수고했어!!
        </h1>
        <Button variant="primary" onClick={handleHomeClick}>
          홈으로
        </Button>
      </div>
    </div>
  );
}