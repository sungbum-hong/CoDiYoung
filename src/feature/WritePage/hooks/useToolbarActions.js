export const useToolbarActions = (editor) => {
  const handleTableAction = () => {
    if (editor.isActive('table')) {
      editor.chain().focus().deleteTable().run();
    } else {
      // 테이블 밖에 있으면 새 테이블 삽입을 위해 onTableClick 호출
      return 'insert';
    }
  };

  const handleAlignment = (align, closeDropdown) => {
    editor.chain().focus().setTextAlign(align).run();
    closeDropdown();
  };

  const handleListToggle = (type) => {
    if (type === 'bullet') {
      editor.chain().focus().toggleBulletList().run();
    } else if (type === 'ordered') {
      editor.chain().focus().toggleOrderedList().run();
    }
  };

  const handleCodeBlock = () => {
    editor.chain().focus().toggleCodeBlock().run();
  };

  return {
    handleTableAction,
    handleAlignment,
    handleListToggle,
    handleCodeBlock
  };
};