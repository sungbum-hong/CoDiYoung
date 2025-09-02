import { useRef } from 'react';
import RecordModal from './components/RecordModal';
import Button from '../../ui/Button.jsx';
import BaseModal from '../../ui/BaseModal';
import { COLORS } from '../../utils/colors.js';
import { useWritePage } from './hooks/useWritePage.js';
import WriteForm from './WriteForm.jsx';

export default function WritePageLayout() {
  console.log('🔄 WritePageLayout 렌더링됨');
  
  const writeFormRef = useRef(null);
  const {
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
    console.log('📝 기록하기 버튼 클릭됨 - 저장 로직 실행');
    // ref를 통해 직접 저장 함수 호출
    writeFormRef.current?.handleSave();
  };

  return (
    <div className="min-h-screen">
      <div className="py-4 px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ color: COLORS.GRAY_900 }}>
            {isEditMode ? `스터디` : '스터디'}
          </h1>

          {isEditMode ? (
            <div className="flex space-x-3">
              {/* 수정 버튼 */}
              <Button
                variant="outline"
                className="h-8 w-[88px] focus:outline-none focus:ring-2"
                onClick={() => actions.openModal('edit')}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = COLORS.PRIMARY;
                }}
                style={{
                  backgroundColor: 'transparent',
                  color: COLORS.PRIMARY,
                  borderColor: COLORS.PRIMARY,
                  transition: 'background-color .2s, color .2s',
                }}
              >
                수정
              </Button>

              {/* 삭제 버튼 */}
              <Button
                variant="secondary"
                className="h-8 w-[88px]"
                onClick={() => actions.openModal('delete')}
              >
                삭제
              </Button>
            </div>
          ) : (
            <Button
              variant="secondary"
              className="h-8 w-32"
              onClick={handleRecordClick}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.PRIMARY;
              }}
              style={{
                backgroundColor: 'transparent',
                color: COLORS.PRIMARY,
                borderColor: COLORS.PRIMARY,
                transition: 'background-color .2s, color .2s',
              }}
            >
              기록하기
            </Button>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-sm border">
          <WriteForm 
            ref={writeFormRef}
            content={content}
            setContent={setContent}
            isLoading={isLoading}
            onSave={actions.handleSave}
          />
        </div>
      </div>

      {/* 기록 모달 */}
      <RecordModal 
        isOpen={modals.record} 
        onClose={() => actions.closeModal('record')} 
        studyId={savedStudyId}
      />

      {/* 완료 모달 */}
      <RecordModal
        isOpen={modals.complete}
        onClose={() => actions.closeModal('complete')}
        message={completeMessage}
        redirectTo="/"
      />

      {/* 삭제 모달 */}
      <BaseModal
        isOpen={modals.delete}
        onClose={() => actions.closeModal('delete')}
        size="CUSTOM"
        style={{ width: '500px', height: '500px', maxWidth: '500px' }}
      >
        <div className="relative w-full h-full p-6">
             <div className="absolute inset-x-0 top-[35%] -translate-y-1/2">
            <p className="text-lg text-gray-700 text-center">
              삭제하시겠습니까?
            </p>
        </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-24">
            <Button
              variant="outline"
              onClick={actions.handleDelete}
              style={{ width: '120px', height: '40px', backgroundColor: 'transparent', color: COLORS.PRIMARY, borderColor: COLORS.PRIMARY, transition: 'background-color .2s, color .2s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'; 
                e.currentTarget.style.color = COLORS.PRIMARY;
              }}
            >
              삭제
            </Button>
            <Button
              variant="outline"
              onClick={() => actions.closeModal('delete')}
              style={{ width: '120px', height: '40px' }}
            >
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>

      {/* 수정 모달 */}
      <BaseModal
        isOpen={modals.edit}
        onClose={() => actions.closeModal('edit')}
        size="CUSTOM"
        style={{ width: '500px', height: '500px', maxWidth: '500px' }}
      >
        <div className="relative w-full h-full p-6">
           <div className="absolute inset-x-0 top-[35%] -translate-y-1/2">
            <p className="text-lg text-gray-700 text-center">
              수정하시겠습니까?
            </p>
        </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-24">
            <Button
              variant="outline"
              onClick={actions.handleEdit}
              style={{ width: '120px', height: '40px', backgroundColor: 'transparent', color: COLORS.PRIMARY, borderColor: COLORS.PRIMARY, transition: 'background-color .2s, color .2s' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = COLORS.PRIMARY;
              }}
            >
              수정
            </Button>
            <Button
              variant="outline"
              onClick={() => actions.closeModal('edit')}
              style={{ width: '120px', height: '40px' }}
            >
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>
    </div>
  );
}
