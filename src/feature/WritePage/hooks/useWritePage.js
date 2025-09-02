import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StudyService } from '../../../services/studyService.js';
import { MESSAGES } from '../../../constants/messages.js';

export function useWritePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  // 상태 관리
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [savedStudyId, setSavedStudyId] = useState(null);

  // 모달 상태 관리
  const [modals, setModals] = useState({
    record: false,
    delete: false,
    edit: false,
    complete: false,
  });
  const [completeMessage, setCompleteMessage] = useState('');

  // 초기 데이터 로드
  useEffect(() => {
    if (isEditMode && id) {
      loadStudy();
    }
  }, [isEditMode, id]);

  const loadStudy = async () => {
    try {
      setIsLoading(true);
      const studyData = await StudyService.getStudy(id);
      setContent(studyData.content || '');
    } catch (error) {
      console.error('스터디 로드 실패:', error);
      alert('스터디를 불러오는데 실패했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 저장 처리
  const handleSave = async () => {
    console.log('📝 글 작성 시도 시작');
    
    if (!content.trim() || content === '<p></p>') {
      console.warn('⚠️ 내용이 비어있음');
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      console.log('🔄 저장 프로세스 시작');
      setIsLoading(true);
      
      if (isEditMode) {
        console.log(`✏️ 수정 모드 - 아이템 ${id} ${MESSAGES.UI.EDIT_COMPLETE}`);
        alert('수정이 완료되었습니다.');
      } else {
        console.log('📝 신규 작성 모드');
        const result = await StudyService.createStudy(content);
        console.log('📡 StudyService.createStudy 응답:', result);
        
        const studyId = result.id || result.studyId;
        setSavedStudyId(studyId);
        setModals(prev => ({ ...prev, record: true }));
      }
    } catch (error) {
      console.error('❌ 저장 실패:', error);
      alert('저장에 실패했습니다: ' + error.message);
    } finally {
      console.log('🔄 로딩 상태 해제');
      setIsLoading(false);
    }
  };

  // 삭제 처리
  const handleDelete = async () => {
    try {
      console.log(`아이템 ${id} 삭제 시작`);
      await StudyService.deleteStudy(id);
      console.log(`아이템 ${id} 삭제 완료`);
      setModals(prev => ({ ...prev, delete: false }));
      setCompleteMessage(MESSAGES.UI.DELETE_COMPLETE);
      setModals(prev => ({ ...prev, complete: true }));
    } catch (error) {
      console.error('삭제 실패:', error);
      alert('삭제에 실패했습니다: ' + error.message);
      setModals(prev => ({ ...prev, delete: false }));
    }
  };

  // 수정 처리
  const handleEdit = () => {
    console.log(`아이템 ${id} 수정 완료`);
    setModals(prev => ({ ...prev, edit: false }));
    setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
    setModals(prev => ({ ...prev, complete: true }));
  };

  // 모달 제어
  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
    
    // 삭제 완료 후 홈페이지로 이동
    if (modalName === 'complete' && completeMessage === MESSAGES.UI.DELETE_COMPLETE) {
      navigate('/');
    }
  };

  // 취소 (홈으로 이동)
  const handleCancel = () => {
    navigate('/');
  };

  return {
    // 상태
    content,
    setContent,
    isLoading,
    isEditMode,
    savedStudyId,
    modals,
    completeMessage,

    // 액션
    actions: {
      handleSave,
      handleDelete,
      handleEdit,
      handleCancel,
      openModal,
      closeModal,
    },
  };
}