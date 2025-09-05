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
      alert('스터디를 불러오는데 실패했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 저장 처리
  const handleSave = async () => {
    if (!content.trim() || content === '<p></p>') {
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      
      if (isEditMode) {
        alert('수정이 완료되었습니다.');
      } else {
        const result = await StudyService.createStudy(content);
        
        const studyId = result.id || result.studyId;
        setSavedStudyId(studyId);
        
        // 글 작성 성공 시 출석체크
        try {
          await StudyService.checkAttendance();
        } catch (attendanceError) {
          // 출석체크 실패해도 글 작성은 성공으로 처리
        }
        
        setModals(prev => ({ ...prev, record: true }));
      }
    } catch (error) {
      alert('저장에 실패했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 삭제 처리
  const handleDelete = async () => {
    try {
      await StudyService.deleteStudy(id);
      setModals(prev => ({ ...prev, delete: false }));
      setCompleteMessage(MESSAGES.UI.DELETE_COMPLETE);
      setModals(prev => ({ ...prev, complete: true }));
    } catch (error) {
      alert('삭제에 실패했습니다: ' + error.message);
      setModals(prev => ({ ...prev, delete: false }));
    }
  };

  // 수정 처리
  const handleEdit = () => {
    setModals(prev => ({ ...prev, edit: false }));
    setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
    setSavedStudyId(id); // 현재 수정중인 studyId 설정
    setModals(prev => ({ ...prev, complete: true }));
  };

  // 모달 제어
  const openModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: true }));
  };

  const closeModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: false }));
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