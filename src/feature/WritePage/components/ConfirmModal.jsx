import BaseModal from '../../../ui/BaseModal';
import Button from '../../../ui/Button.jsx';
import { COLORS } from '../../../utils/colors.js';

export default function ConfirmModal({ 
  isOpen, 
  onClose, 
  onConfirm, 
  title, 
  confirmText = "확인",
  cancelText = "닫기" 
}) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="CUSTOM"
      style={{ width: '500px', height: '500px', maxWidth: '500px' }}
    >
      <div className="relative w-full h-full p-6">
        <div className="absolute inset-x-0 top-[35%] -translate-y-1/2">
          <p className="text-lg text-gray-700 text-center">
            {title}
          </p>
        </div>

        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-24">
          <Button
            variant="secondary"
            onClick={onConfirm}
            style={{ 
              width: '120px', 
              height: '40px', 
              backgroundColor: 'transparent', 
              color: COLORS.PRIMARY, 
              borderColor: COLORS.PRIMARY, 
              transition: 'background-color .2s, color .2s' 
            }}
          >
            {confirmText}
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            style={{ width: '120px', height: '40px' }}
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}