import { COLORS } from "../../../constants/colors.js"

export const useWritePageHeader = (isEditMode, isViewMode, actions, handleRecordClick) => {
  const getHeaderTitle = () => '스터디';

  const getViewModeButtons = () => [
    {
      key: 'edit',
      text: '수정',
      onClick: () => actions.navigateToEdit(),
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

  const getEditModeButtons = () => [
    {
      key: 'complete',
      text: '완료',
      onClick: () => actions.openModal('edit'),
      style: {
        backgroundColor: 'transparent',
        color: COLORS.PRIMARY,
        borderColor: COLORS.PRIMARY,
        transition: 'background-color .2s, color .2s',
      }
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
    getViewModeButtons,
    getEditModeButtons,
    getCreateModeButton
  };
};