import { useRef } from 'react';

// 훅들 import
import { useWritePage } from './hooks/useWritePage.js';
import { useWritePageModals } from './hooks/useWritePageModals.js';
import { useWritePageHeader } from './hooks/useWritePageHeader.js';

// 컴포넌트들 import
import WritePageHeader from './components/WritePageHeader.jsx';
import WriteForm from './WriteForm.jsx';
import RecordModal from './components/RecordModal';
import ConfirmModal from './components/ConfirmModal.jsx';

export default function WritePageLayout() {
  const writeFormRef = useRef(null);
  const {
    title,
    setTitle,
    content,
    setContent,
    isLoading,
    isEditMode,
    savedStudyId,
    modals,
    completeMessage,
    actions
  } = useWritePage();

  // 저장 로직을 실행하고 성공 시 모달을 표시하는 함수
  const handleRecordClick = () => {
    writeFormRef.current?.handleSave();
  };

  // 커스텀 훅들 사용
  const { getModalProps } = useWritePageModals(modals, actions, savedStudyId, completeMessage);
  const { getHeaderTitle, getEditModeButtons, getCreateModeButton } = useWritePageHeader(
    isEditMode, 
    actions, 
    handleRecordClick
  );

  return (
    <div className="min-h-screen">
      <div className="py-4 px-4">
        <WritePageHeader
          title={getHeaderTitle()}
          isEditMode={isEditMode}
          editButtons={getEditModeButtons()}
          createButton={getCreateModeButton()}
        />

        <div className="bg-white rounded-lg shadow-sm border">
          <WriteForm 
            ref={writeFormRef}
            title={title}
            setTitle={setTitle}
            content={content}
            setContent={setContent}
            isLoading={isLoading}
            onSave={actions.handleSave}
          />
        </div>
      </div>



      {/* 삭제 모달 */}
      <ConfirmModal 
        {...getModalProps('delete')}
        title="삭제하시겠습니까?"
        confirmText="삭제"
      />

      {/* 수정 모달 */}
      <ConfirmModal 
        {...getModalProps('edit')}
        title="수정하시겠습니까?"
        confirmText="수정"
      />
    </div>
  );
}
