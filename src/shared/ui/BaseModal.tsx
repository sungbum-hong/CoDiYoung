import { useEffect, useRef, type ReactNode } from 'react';
import { COLORS, COLOR_VARIANTS } from '../../constants/colors';
import { CONFIG } from '../../constants/config';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  size?: 'DEFAULT' | 'SMALL' | 'LARGE'; // 필요한 사이즈 추가
  showTitle?: boolean;
  closeOnOverlayClick?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

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
}: BaseModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = showTitle && title ? 'base-modal-title' : undefined;

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // ESC key handler
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // CONFIG 타입 안정성을 위해 any 우회 혹은 타입 정의 필요
  const modalSizes: any = CONFIG.MODAL_SIZES; 
  const modalSize = modalSizes[size] || modalSizes.DEFAULT;

  return (
    <>
      {/* Title */}
      {showTitle && title && (
        <div
          className="fixed top-10 left-1/2 -translate-x-1/2 pointer-events-none"
          // @ts-ignore - CONFIG 타입 추론이 안될 경우 대비
          style={{ zIndex: CONFIG.Z_INDEX.MODAL_TITLE }}
          aria-hidden="true"
        >
          <h1
            id={titleId}
            className="text-2xl font-bold select-none"
            style={{ color: COLORS.GRAY_900 }}
          >
            {title}
          </h1>
        </div>
      )}

      {/* Backdrop */}
      <div
        className="fixed inset-0 flex items-center justify-center cursor-pointer"
        style={{ 
          // @ts-ignore 
          zIndex: CONFIG.Z_INDEX.MODAL_BACKDROP, 
          backgroundColor: `${COLORS.BLACK}66` 
        }}
        onClick={(e) => {
          if (closeOnOverlayClick && e.target === e.currentTarget) {
            onClose();
          }
        }}
      >
        {/* Content */}
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={`relative rounded-lg shadow-lg outline-none cursor-auto ${className}`}
          style={{
            // @ts-ignore
            zIndex: CONFIG.Z_INDEX.MODAL_CONTENT,
            backgroundColor: COLOR_VARIANTS.modal.background,
            width: size === 'DEFAULT' ? "68.5vw" : `${modalSize?.width}px`,
            height: size === 'DEFAULT' ? "min(939px, 70vh)" : `${modalSize?.height}px`,
            maxWidth: size === 'DEFAULT' ? "1316px" : `${modalSize?.width}px`,
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
