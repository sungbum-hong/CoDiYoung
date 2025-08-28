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

  const handleRecordClick = () => {
    setIsRecordModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const closeRecordModal = () => {
    setIsRecordModalOpen(false);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const closeCompleteModal = () => {
    setIsCompleteModalOpen(false);
  };

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
      <div className="max-w-6xl py-4 px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ color: COLORS.GRAY_900 }}>
            {isEditMode ? `스터디 수정 - 아이템 ${id}` : '스터디'}
          </h1>
          {isEditMode ? (
            <div className="flex space-x-3">
              <Button 
                variant="secondary" 
                className='w-32 h-8' 
                onClick={handleDeleteClick}
              >
                삭제
              </Button>
              <Button 
                variant="outline" 
                className='w-32 h-8' 
                onClick={handleEditClick}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = COLORS.PRIMARY;
                  e.target.style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = COLORS.PRIMARY;
                }}
              >
                수정
              </Button>
            </div>
          ) : (
            <Button 
              variant="secondary" 
              className='w-32 h-8' 
              onClick={handleRecordClick}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = COLORS.PRIMARY;
                e.target.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = COLORS.PRIMARY;
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
      
      <RecordModal isOpen={isRecordModalOpen} onClose={closeRecordModal} />
      
      <RecordModal 
        isOpen={isCompleteModalOpen} 
        onClose={closeCompleteModal} 
        message={completeMessage}
      />
      
      <BaseModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        title={`아이템 ${id} 삭제`}
        size="CUSTOM"
        style={{
          width: '500px',
          height: '300px',
          maxWidth: '500px'
        }}
      >
        <div className="relative w-full h-full p-6">
          <div className="mb-4 flex items-center justify-center h-32">
            <p className="text-lg text-gray-700">삭제하시겠습니까?</p>
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleDeleteConfirm}
              style={{
                width: '120px',
                height: '40px'
              }}
            >
              삭제
            </Button>
            <Button 
              variant="outline" 
              onClick={closeDeleteModal}
              style={{
                width: '120px',
                height: '40px'
              }}
            >
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>
                
      <BaseModal
        isOpen={isEditModalOpen}
        onClose={closeEditModal}
        title={`아이템 ${id} 수정`}
        size="CUSTOM"
        style={{
          width: '500px',
          height: '300px',
          maxWidth: '500px'
        }}
      >
        <div className="relative w-full h-full p-6">
          <div className="mb-4 flex items-center justify-center h-32">
            <p className="text-lg text-gray-700">수정하시겠습니까?</p>
          </div>
          
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4">
            <Button 
              variant="outline" 
              onClick={handleEditConfirm}
              style={{
                width: '120px',
                height: '40px'
              }}
            >
              수정
            </Button>
            <Button 
              variant="outline" 
              onClick={closeEditModal}
              style={{
                width: '120px',
                height: '40px'
              }}
            >
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>
    </div>
  );
}