import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { StudyService } from '../../../services/studyService.js';
import { MESSAGES } from '../../../constants/messages.js';

export function useWritePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  // 상태 관리
  const [title, setTitle] = useState('');
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
      console.log('Loading study with ID:', id); // 디버깅용
      const studyData = await StudyService.getStudy(id);
      console.log('Loaded study data:', studyData); // 디버깅용
      setTitle(studyData.title || '');
      setContent(studyData.content || '');
    } catch (error) {
      console.error('Study load error:', error); // 디버깅용
      alert('스터디를 불러오는데 실패했습니다: ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 콘텐츠에서 이미지 추출
  const extractImagesFromContent = (htmlContent) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');
    const images = doc.querySelectorAll('img');
    
    return Array.from(images).map((img, index) => ({
      id: parseInt(img.dataset.id) || 0, // 이미지 id 추가
      key: img.dataset.key || img.src,
      sortOrder: index
    }));
  };

  // 저장 처리
  const handleSave = async () => {
    if (!content.trim() || content === '<p></p>') {
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      
      // 콘텐츠에서 이미지 정보 추출
      const images = extractImagesFromContent(content);
      
      if (isEditMode) {
        // 이미지가 없을 때는 null로 전송 시도
        await StudyService.updateStudy(id, content, images.length > 0 ? images : null);
        // 백엔드 처리 시간을 위한 지연
        await new Promise(resolve => setTimeout(resolve, 1000));
        // 수정 후 최신 데이터 다시 로드
        await loadStudy();
        setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
        setSavedStudyId(id);
        setModals(prev => ({ ...prev, complete: true }));
      } else {
        const result = await StudyService.createStudy(content, images);
        
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
  const handleEdit = async () => {
    if (!content.trim() || content === '<p></p>') {
      alert('내용을 입력해주세요.');
      return;
    }

    try {
      setIsLoading(true);
      setModals(prev => ({ ...prev, edit: false }));
      
      // 콘텐츠에서 이미지 정보 추출
      const images = extractImagesFromContent(content);
      
      await StudyService.updateStudy(id, content, images.length > 0 ? images : null);
      
      // 백엔드 처리 시간을 위한 지연
      await new Promise(resolve => setTimeout(resolve, 1000));
      // 수정 후 최신 데이터 다시 로드
      await loadStudy();
      
      setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
      setSavedStudyId(id); // 현재 수정중인 studyId 설정
      setModals(prev => ({ ...prev, complete: true }));
    } catch (error) {
      alert('수정에 실패했습니다: ' + error.message);
      setModals(prev => ({ ...prev, edit: false }));
    } finally {
      setIsLoading(false);
    }
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
    title,
    setTitle,
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