import { createPortal } from "react-dom";

export default function ErrorModal({ open, message, onClose, onFindPassword, primary }) {
  if (!open) return null;
  
  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"
        onClick={onClose}
      />
      {/* dialog */}
      <div
        role="alertdialog"
        aria-labelledby="signin-error-title"
        aria-describedby="signin-error-desc"
        className="absolute left-1/2 top-[40%] -translate-x-1/2
                   w-[90%] max-w-[420px] rounded-2xl bg-white shadow-2xl
                   border border-red-200 p-5"
      >
        <div className="grid place-items-center">
          <p id="signin-error-desc" className="text-center text-sm text-red-700">
            {typeof message === 'string' ? message : message?.message || '알 수 없는 오류가 발생했습니다.'}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
}