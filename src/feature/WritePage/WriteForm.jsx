import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TiptapEditor from './TiptapEditor';
import Button from '../../ui/Button';

export default function WriteForm() {
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode && id) {
      const mockContent = `<p>아이템 ${id}의 기존 내용입니다.</p>`;
      setContent(mockContent);
    }
  }, [isEditMode, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!content.trim() || content === '<p></p>') {
      return;
    }

    if (isEditMode) {
      console.log(`아이템 ${id} 수정 완료:`, content);
      // TODO: 수정 API 호출
    } else {
      console.log('새 글 작성 완료:', content);
      // TODO: 작성 API 호출
    }
    
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm(`아이템 ${id}를 삭제하시겠습니까?`)) {
      console.log(`아이템 ${id} 삭제 완료`);
      // TODO: 삭제 API 호출
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
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
}