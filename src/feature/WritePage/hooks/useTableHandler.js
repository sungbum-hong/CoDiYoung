export const useTableHandler = (editor) => {
  const handleTableClick = () => {
    if (!editor) return;

    if (editor.isActive('table')) {
      alert('테이블 안에서는 새로운 테이블을 삽입할 수 없습니다.');
      return;
    }

    editor
      .chain()
      .focus()
      .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
      .run();
  };

  return {
    handleTableClick
  };
};