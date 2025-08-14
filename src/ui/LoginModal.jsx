import BaseModal from './BaseModal.jsx';

export default function LoginModal({ onClose }) {
    return (
      <BaseModal
        isOpen={true}
        onClose={onClose}
        size="SMALL"
        showTitle={false}
        className="w-96 p-6 text-center mx-4"
      >
        <p className="mb-6">로그인 후 사용 가능한 서비스 입니다</p>
        <div className="flex justify-center gap-8">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">Icon</div>
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">Icon</div>
        </div>
      </BaseModal>
    );
}