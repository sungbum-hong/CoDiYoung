import { COLORS } from '../../../utils/colors.js';

export const useWritePageHeader = (isEditMode, actions, handleRecordClick) => {
  const getHeaderTitle = () => {
    return isEditMode ? '스터디' : '스터디';
  };

  const getEditModeButtons = () => [
    {
      key: 'edit',
      text: '수정',
      onClick: () => actions.openModal('edit'),
      style: {
        backgroundColor: 'transparent',
        color: COLORS.PRIMARY,
        borderColor: COLORS.PRIMARY,
        transition: 'background-color .2s, color .2s',
      }
    },
    {
      key: 'delete',
      text: '삭제',
      onClick: () => actions.openModal('delete'),
      style: {}
    }
  ];

  const getCreateModeButton = () => ({
    text: '기록하기',
    onClick: handleRecordClick,
    style: {
      backgroundColor: 'transparent',
      color: COLORS.PRIMARY,
      borderColor: COLORS.PRIMARY,
      transition: 'background-color .2s, color .2s',
    }
  });

  return {
    getHeaderTitle,
    getEditModeButtons,
    getCreateModeButton
  };
};