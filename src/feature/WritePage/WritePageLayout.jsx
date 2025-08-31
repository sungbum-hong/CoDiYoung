import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecordModal from './components/RecordModal';
import Button from '../../ui/Button.jsx';
import BaseModal from '../../ui/BaseModal';
import { COLORS } from '../../utils/colors.js';
import { MESSAGES } from '../../constants/messages.js';

export default function WritePageLayout({ children }) {
  const [isRecordModalOpen, setIsRecordModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);
  const [completeMessage, setCompleteMessage] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const handleRecordClick = () => setIsRecordModalOpen(true);
  const handleDeleteClick = () => setIsDeleteModalOpen(true);
  const handleEditClick = () => setIsEditModalOpen(true);

  const closeRecordModal = () => setIsRecordModalOpen(false);
  const closeDeleteModal = () => setIsDeleteModalOpen(false);
  const closeEditModal = () => setIsEditModalOpen(false);
  const closeCompleteModal = () => setIsCompleteModalOpen(false);

  const handleDeleteConfirm = () => {
    console.log(`아이템 ${id} 삭제 완료`);
    // TODO: 삭제 API 호출
    setIsDeleteModalOpen(false);
    setCompleteMessage(MESSAGES.UI.DELETE_COMPLETE);
    setIsCompleteModalOpen(true);
  };

  const handleEditConfirm = () => {
    console.log(`아이템 ${id} 수정 완료`);
    // TODO: 수정 API 호출
    setIsEditModalOpen(false);
    setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
    setIsCompleteModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <div className="py-4 px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ color: COLORS.GRAY_900 }}>
            {isEditMode ? `스터디 ${id}` : '스터디'}
          </h1>

          {isEditMode ? (
            <div className="flex space-x-3">
              {/* 수정 버튼 */}
              <Button
                variant="outline"
                className="h-8 w-[88px] focus:outline-none focus:ring-2"
                onClick={handleEditClick}
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
                onClick={handleDeleteClick}
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
          {children}
        </div>
      </div>

      {/* 기록 모달 */}
      <RecordModal isOpen={isRecordModalOpen} onClose={closeRecordModal} />

      {/* 완료 모달 */}
      <RecordModal
        isOpen={isCompleteModalOpen}
        onClose={closeCompleteModal}
        message={completeMessage}
      />

      {/* 삭제 모달 */}
      <BaseModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
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
              onClick={handleDeleteConfirm}
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
              onClick={closeDeleteModal}
              style={{ width: '120px', height: '40px' }}
            >
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>

      {/* 수정 모달 */}
      <BaseModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
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
              onClick={handleEditConfirm}
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
              onClick={closeEditModal}
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
