export default function Modal({ isOpen, onClose, children, title }) {
    if (!isOpen) return null;
  
    return (
      <>
        {/* 모달 바깥, 상단 중앙에 타이틀 */}
        <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[60] pointer-events-none">
          <h1 className="text-2xl font-bold text-gray-900 select-none">{title}</h1>
        </div>
  
        {/* 모달 배경 및 내용 */}
        <div
          className="fixed inset-0 bg-white z-50"
          onClick={onClose}
        >
          <div
            className="bg-white rounded-lg p-6 absolute shadow-lg"
            style={{
              width: "68.5vw",
              height: "min(939px, 70vh)",
              maxWidth: "1316px",
              border: "2px solid #193794",
              left: "50%",
              top: "20%",
              transform: "translateX(-50%)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      </>
    );
  }
  