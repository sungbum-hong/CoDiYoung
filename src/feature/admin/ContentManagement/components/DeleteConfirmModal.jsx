import { useState } from 'react';
import BaseModal from "../../../../ui/BaseModal.jsx";

/**
 * 삭제 확인 모달 (스터디/프로젝트 공용)
 * 3단 구조: Title - Form - Action Button
 */
export default function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  type, // 'study' 또는 'project'
  itemId
}) {
  const [reason, setReason] = useState('');

  const handleConfirm = () => {
    if (!reason) {
      alert('삭제 사유를 선택해주세요.');
      return;
    }
    onConfirm({ id: itemId, reason });
    onClose();
  };

  const reasonOptions = [
    { value: '', label: '삭제 사유를 선택하세요' },
    { value: '관리자 삭제', label: '관리자 삭제' },
    { value: '부적절한 콘텐츠', label: '부적절한 콘텐츠' },
    { value: '스팸 신고', label: '스팸 신고' },
    { value: '저작권 위반', label: '저작권 위반' },
    { value: '기타', label: '기타' }
  ];

  const typeLabel = type === 'study' ? '스터디' : '프로젝트';

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="CUSTOM"
      style={{
        width: '400px',
        height: '350px',
        maxWidth: '90vw',
        maxHeight: '90vh'
      }}
      closeOnOverlayClick={true}
    >
      <div className="flex flex-col h-full p-8">
        {/* 상단: 제목 (중앙 정렬) */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">
            {typeLabel} 삭제
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            ID {itemId}번 {typeLabel}를 삭제하시겠습니까?
          </p>
        </div>

        {/* 중간: 폼 영역 */}
        <div className="flex-1 flex flex-col justify-center">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            삭제 사유
          </label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-4 py-3 border-2 rounded-xl text-sm outline-none focus:ring-4 focus:ring-pink-100 transition-all"
            style={{ borderColor: '#FF0066' }}
          >
            {reasonOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* 하단: 액션 버튼 */}
        <div className="flex justify-center pt-6">
          <button
            onClick={handleConfirm}
            style={{
              width: '200px',
              height: '48px',
              backgroundColor: '#FF0066',
              color: 'white',
              border: '1px solid #FF0066',
              borderRadius: '24px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              outline: 'none'
            }}
          >
            삭제
          </button>
        </div>
      </div>
    </BaseModal>
  );
}