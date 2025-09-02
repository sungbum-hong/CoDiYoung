import TiptapEditor from './TiptapEditor';
import { forwardRef, useImperativeHandle } from 'react';

const WriteForm = forwardRef(({ content, setContent, isLoading, onSave }, ref) => {
  console.log('🔄 WriteForm 컴포넌트 렌더링됨');
  
  console.log('📝 WriteForm 상태:', { content: content.length, isLoading });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSave();
  };

  // 부모 컴포넌트에서 직접 호출할 수 있도록 ref 노출
  useImperativeHandle(ref, () => ({
    handleSave: onSave
  }));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-lg">로딩 중...</div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
          <TiptapEditor
            content={content}
            onChange={setContent}
          />
        </div>
      </div>
    </form>
  );
});

WriteForm.displayName = 'WriteForm';

export default WriteForm;