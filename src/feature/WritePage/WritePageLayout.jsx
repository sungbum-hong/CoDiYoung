
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

// 훅들 import
import { useWritePage } from './hooks/useWritePage.js';
import { useWritePageModals } from './hooks/useWritePageModals.js';

// 컴포넌트들 import
import WriteForm from './WriteForm.jsx';
import RecordModal from './components/RecordModal.jsx';
import ConfirmModal from './components/ConfirmModal.jsx';

export default function WritePageLayout() {
  const navigate = useNavigate();
  const writeFormRef = useRef(null);
  const {
    title,
    setTitle,
    content,
    setContent,
    isLoading,
    isEditMode,
    isViewMode,
    savedStudyId,
    modals,
    completeMessage,
    actions
  } = useWritePage();

  // 저장 로직을 실행하고 성공 시 모달을 표시하는 함수
  const handleRecordClick = () => {
    writeFormRef.current?.handleSave();
  };
  
  const handleTempSave = () => {
      // Mock Temp Save
      alert("임시저장 되었습니다 (Mock)");
  };

  const { getModalProps } = useWritePageModals(modals, actions, savedStudyId, completeMessage);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header Area with Buttons */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
        {/* Back Button */}
        <button 
            onClick={() => navigate(-1)}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
            <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
        </button>

        {/* Action Buttons */}
        <div className="flex gap-3">
             <button
                onClick={handleTempSave}
                className="px-4 py-2 text-sm text-[#7C4DFF] font-medium border border-[#7C4DFF] rounded-lg hover:bg-purple-50 transition-colors"
             >
                임시저장
             </button>
             <button
                onClick={handleRecordClick}
                className="px-6 py-2 text-sm text-white font-medium bg-[#7C4DFF] rounded-lg hover:bg-[#6c42e0] transition-colors shadow-sm"
             >
                등록
             </button>
        </div>
      </div>

      {/* 2. Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Title Input */}
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요."
            className="w-full text-3xl font-bold text-gray-900 placeholder-gray-300 border-none outline-none mb-6"
        />

        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Editor Area */}
        <div className="bg-white">
          <WriteForm
            ref={writeFormRef}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            isLoading={isLoading}
            onSave={actions.handleSave}
            showToolbar={!isViewMode}
            readOnly={isViewMode}
          />
        </div>
      </div>

      {/* 모달들 (기존 로직 유지) */}
      <RecordModal
        {...getModalProps('record')}
        message="오늘도 수고했어!!"
      />
      <RecordModal
        {...getModalProps('complete')}
      />
      <ConfirmModal
        {...getModalProps('delete')}
        title="삭제하시겠습니까?"
        confirmText="삭제"
      />
      <ConfirmModal
        {...getModalProps('edit')}
        title="수정하시겠습니까?"
        confirmText="수정"
      />
    </div>
  );
}
