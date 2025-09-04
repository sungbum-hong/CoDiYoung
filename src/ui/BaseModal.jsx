// src/ui/BaseModal.jsx
import { useEffect, useRef } from 'react';
import { COLORS, COLOR_VARIANTS } from '../utils/colors.js';
import { CONFIG } from '../constants/config.js';

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
  const dialogRef = useRef(null);
  const titleId = showTitle && title ? 'base-modal-title' : undefined;

  // body 스크롤 잠금
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

  // ESC로 닫기 + 열릴 때 포커스
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', onKeyDown);
    // 모달 컨테이너에 포커스를 주는 대신 input에 autoFocus를 맡김
    // requestAnimationFrame(() => dialogRef.current?.focus());
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null; // 닫혀 있으면 완전 언마운트

  const modalSize = CONFIG.MODAL_SIZES[size] || CONFIG.MODAL_SIZES.DEFAULT;

  const handleOverlayClick = (e) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <>
      {/* 모달 타이틀 (선택적) */}
      {showTitle && title && (
        <div
          className={`fixed top-10 left-1/2 -translate-x-1/2 pointer-events-none`}
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

      {/* 모달 배경 오버레이 (헤더보다 위에 있도록 z 올림) */}
      <div
        className="fixed inset-0 flex items-center justify-center"
        style={{ zIndex: CONFIG.Z_INDEX.MODAL_BACKDROP, backgroundColor: `${COLORS.BLACK}66` }}
        onClick={handleOverlayClick}
      >
        {/* 모달 컨텐츠 */}
        <div
          ref={dialogRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className={`relative rounded-lg shadow-lg outline-none ${className}`}
          style={{
            zIndex: CONFIG.Z_INDEX.MODAL_CONTENT,
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
