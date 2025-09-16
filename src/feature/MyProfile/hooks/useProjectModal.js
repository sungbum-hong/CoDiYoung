import { useState } from "react";

export function useProjectModal() {
  const [modals, setModals] = useState({
    create: false,
    edit: false,
    delete: false,
    complete: false,
    confirm: false,
  });
  const [modalMessage, setModalMessage] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  // 모달 열기
  const openModal = (modalType, project = null, message = '') => {
    setSelectedProject(project);
    setModalMessage(message);
    setModals(prev => ({ ...prev, [modalType]: true }));
  };

  // 모달 닫기
  const closeModal = (modalType) => {
    setModals(prev => ({ ...prev, [modalType]: false }));
    if (modalType === 'complete' || modalType === 'confirm') {
      setModalMessage('');
      setSelectedProject(null);
    }
  };

  // 모든 모달 닫기
  const closeAllModals = () => {
    setModals({
      create: false,
      edit: false,
      delete: false,
      complete: false,
      confirm: false,
    });
    setModalMessage('');
    setSelectedProject(null);
  };

  // 확인 모달 열기
  const openConfirmModal = (message, project = null) => {
    openModal('confirm', project, message);
  };

  // 완료 모달 열기
  const openCompleteModal = (message, project = null) => {
    openModal('complete', project, message);
  };

  // 삭제 확인 모달 열기
  const openDeleteModal = (project) => {
    openModal('delete', project, '정말 삭제하시겠습니까?');
  };

  // 특정 모달이 열려있는지 확인
  const isModalOpen = (modalType) => {
    return modals[modalType] || false;
  };

  // 아무 모달이라도 열려있는지 확인
  const isAnyModalOpen = () => {
    return Object.values(modals).some(isOpen => isOpen);
  };

  return {
    // 상태
    modals,
    modalMessage,
    selectedProject,
    
    // 기본 액션
    openModal,
    closeModal,
    closeAllModals,
    
    // 특화 액션
    openConfirmModal,
    openCompleteModal,
    openDeleteModal,
    
    // 유틸리티
    isModalOpen,
    isAnyModalOpen,
  };
}