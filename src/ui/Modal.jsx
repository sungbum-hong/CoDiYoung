export default function Modal({ isOpen, onClose, children, title }) {
    if (!isOpen) return null;
  
    return (
      <>
        {/* 모달 바깥, 상단 중앙에 타이틀 */}
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[60] pointer-events-none">
          <h1 className="text-3xl font-bold text-gray-900 select-none">{title}</h1>
        </div>
  
        {/* 모달 배경 및 내용 */}
        <div
          className="fixed inset-0 flex items-center justify-center bg-white z-50"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-lg p-6 relative shadow-lg"
            style={{
              width: "80vw",
              height: "70vh",
              maxWidth: "1316px",
              maxHeight: "740px",
              border: "2px solid #193794",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
  