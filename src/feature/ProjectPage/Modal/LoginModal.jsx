export default function LoginModal({ onClose }) {
    return (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div 
          className="w-96 bg-white border-2 border-[#1a237e] rounded-xl shadow-lg p-6 text-center mx-4 rounded-[5px]"
          onClick={(e) => e.stopPropagation()}
        >
          <p className="mb-6">로그인 후 사용 가능한 서비스 입니다</p>
          <div className="flex justify-center gap-8">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">Icon</div>
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">Icon</div>
          </div>
        </div>
      </div>
    );
  }