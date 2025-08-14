import { useEffect } from 'react';
import { COLORS, COLOR_VARIANTS } from '../constants/colors.js';
import { MODAL_SIZES } from '../constants/sizes.js';

export default function BaseModal({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  size = 'DEFAULT',
  showTitle = true,
  closeOnOverlayClick = true,
  className = '',
  style = {} 
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalSize = MODAL_SIZES[size] || MODAL_SIZES.DEFAULT;
  
  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {/* 모달 타이틀 (선택적) */}
      {showTitle && title && (
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[60] pointer-events-none">
          <h1 className="text-2xl font-bold select-none" style={{ color: COLORS.GRAY_900 }}>{title}</h1>
        </div>
      )}

      {/* 모달 배경 오버레이 */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{ backgroundColor: `${COLORS.BLACK}66` }}
        onClick={handleOverlayClick}
      >
        {/* 모달 컨텐츠 */}
        <div
          className={`rounded-lg shadow-lg relative ${className}`}
          style={{
            backgroundColor: COLOR_VARIANTS.modal.background,
            width: size === 'DEFAULT' ? "68.5vw" : `${modalSize.width}px`,
            height: size === 'DEFAULT' ? "min(939px, 70vh)" : `${modalSize.height}px`,
            maxWidth: size === 'DEFAULT' ? "1316px" : `${modalSize.width}px`,
            border: `2px solid ${COLOR_VARIANTS.modal.border}`,
            ...style
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </>
  );
}