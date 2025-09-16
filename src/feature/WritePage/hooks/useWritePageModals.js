export const useWritePageModals = (modals, actions, savedStudyId, completeMessage) => {
  const getModalProps = (modalType) => {
    switch (modalType) {
      case 'record':
        return {
          isOpen: modals.record,
          onClose: () => actions.closeModal('record'),
          studyId: savedStudyId
        };
      case 'complete':
        return {
          isOpen: modals.complete,
          onClose: () => actions.closeModal('complete'),
          message: completeMessage,
          studyId: completeMessage === '삭제 완료' ? null : savedStudyId,
          redirectTo: completeMessage === '삭제 완료' ? '/' : undefined
        };
      case 'delete':
        return {
          isOpen: modals.delete,
          onClose: () => actions.closeModal('delete'),
          onConfirm: actions.handleDelete
        };
      case 'edit':
        return {
          isOpen: modals.edit,
          onClose: () => actions.closeModal('edit'),
          onConfirm: actions.handleEdit
        };
      default:
        return {};
    }
  };

  return {
    getModalProps
  };
};