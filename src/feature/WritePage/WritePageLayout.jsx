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
  const [redirectTo, setRedirectTo] = useState('/');
  const [recordModalStep, setRecordModalStep] = useState('record'); // 'record' | 'complete' | 'saving'
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  // 새 ID 생성 함수 (테스트용)
  const generateNewId = () => {
    return Math.floor(Math.random() * 1000) + 1;
  };

  const handleRecordClick = () => {
    setIsRecordModalOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleRecordComplete = () => {
    // 저장 중 상태로 변경
    setRecordModalStep('saving');
    
    // 저장 시뮬레이션 (1.5초)
    setTimeout(() => {
      const newId = generateNewId();
      const newPath = `/write/${newId}`;
      
      setRedirectTo(newPath);
      setCompleteMessage(MESSAGES.UI.RECORD_COMPLETE || "오늘도 수고했어!!");
      setRecordModalStep('complete');
      
      // 완료 메시지 2초 후 자동 이동
      setTimeout(() => {
        navigate(newPath);
        setIsRecordModalOpen(false);
        setRecordModalStep('record');
      }, 2000);
    }, 1500);
  };

  // 완료 모달에서 즉시 이동 (사용자가 빨리 클릭하고 싶을 때)
  const handleImmediateRedirect = () => {
    navigate(redirectTo);
    setIsRecordModalOpen(false);
    setRecordModalStep('record');
  };

  const closeRecordModal = () => {
    setIsRecordModalOpen(false);
    setRecordModalStep('record'); // 초기 상태로 리셋
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

  const handleCompleteConfirm = () => {
    navigate(redirectTo);
    setIsCompleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    // TODO: 삭제 API 호출
    setIsDeleteModalOpen(false);
    setRedirectTo('/'); // 삭제 후에는 홈으로
    setCompleteMessage(MESSAGES.UI.DELETE_COMPLETE);
    setIsCompleteModalOpen(true);
  };

  const handleEditConfirm = () => {
    // TODO: 수정 API 호출
    setIsEditModalOpen(false);
    setRedirectTo(`/write/${id}`); // 수정 후에는 현재 페이지 유지
    setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
    setIsCompleteModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <div className="py-4 px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold" style={{ color: COLORS.GRAY_900 }}>
            {isEditMode ? `스터디 수정 - 아이템 ${id}` : '스터디'}
          </h1>
          {isEditMode ? (
            <div className="flex space-x-3">
              
              <Button 
                variant="secondary" 
                className='w-32 h-8' 
                onClick={handleEditClick}
              >
                수정
              </Button>
              <Button 
                variant="outline" 
                className='w-32 h-8' 
                onClick={handleDeleteClick}
              >
                삭제
              </Button>
            </div>
          ) : (
            <Button 
              variant="secondary" 
              className='w-32 h-8' 
              onClick={handleRecordClick}
            >
              기록하기
            </Button>
          )}
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border">
          {children}
        </div>
      </div>
      
      <RecordModal 
        isOpen={isRecordModalOpen} 
        onClose={closeRecordModal}
        onComplete={recordModalStep === 'record' ? handleRecordComplete : (recordModalStep === 'complete' ? handleImmediateRedirect : null)}
        message={
          recordModalStep === 'record' ? "오늘도 수고했어!!" : 
          recordModalStep === 'saving' ? "저장 중..." : 
          completeMessage
        }
        isLoading={recordModalStep === 'saving'}
        redirectTo={redirectTo}
      />

      {/* 수정/삭제 완료 모달 */}
      <RecordModal 
        isOpen={isCompleteModalOpen} 
        onClose={closeCompleteModal}
        onComplete={handleCompleteConfirm}
        message={completeMessage}
        redirectTo={redirectTo}
      />
      
      <BaseModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
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
              variant="secondary" 
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
              variant="secondary" 
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