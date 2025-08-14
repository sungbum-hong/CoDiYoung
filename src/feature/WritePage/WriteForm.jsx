import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TiptapEditor from './TiptapEditor';

export default function WriteForm() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!content.trim() || content === '<p></p>') {
      return;
    }

    // 글 저장 완료 후 홈으로 이동
    
    // 홈으로 이동
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <div className="space-y-6">
        {/* 내용 입력 - Tiptap 에디터 */}
        <div>
          <TiptapEditor
            content={content}
            onChange={setContent}
          />
        </div>

      </div>
    </form>
  );
}