import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TiptapEditor from './TiptapEditor';
import Button from '../../ui/Button';
import { MESSAGES } from '../../constants/messages.js';

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
      console.log(`아이템 ${id} ${MESSAGES.UI.EDIT_COMPLETE}:`, content);
      // TODO: 수정 API 호출
    } else {
      console.log(`${MESSAGES.UI.WRITE_COMPLETE}:`, content);
      // TODO: 작성 API 호출
    }
    
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm(`아이템 ${id}${MESSAGES.UI.DELETE_CONFIRM}`)) {
      console.log(`아이템 ${id} ${MESSAGES.UI.DELETE_COMPLETE}`);
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