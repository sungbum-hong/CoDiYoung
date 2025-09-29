import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { MESSAGES } from '../../../constants/messages.js';
import { sanitizeHtml } from '../utils/sanitizer.js';

// React Query 훅들 사용
import { 
  useStudyDetail, 
  useStudyOperations 
} from '../../../hooks/useStudyQueries.js';

// 출석 서비스 추가
import { AttendanceService } from '../../../services/AttendanceService.js';

/**
 * 안전하고 최적화된 스터디 작성/수정 페이지 훅
 * - 무한 리렌더링 방지
 * - 401 에러 처리
 * - 메모리 누수 방지
 */
export function useWritePage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  const isMounted = useRef(true);

  // 로컬 상태 관리 (UI 전용)
  const [content, setContent] = useState('');
  const [savedStudyId, setSavedStudyId] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  // 모달 상태 관리
  const [modals, setModals] = useState({
    record: false,
    delete: false,
    edit: false,
    complete: false,
  });
  const [completeMessage, setCompleteMessage] = useState('');

  // React Query 훅들 (안전한 설정)
  const {
    data: studyData,
    isLoading: isLoadingStudy,
    error: studyError,
    refetch: refetchStudy
  } = useStudyDetail(id, {
    enabled: isEditMode && !!id && isMounted.current,
    retry: (failureCount, error) => {
      // 401 에러는 재시도하지 않음
      if (error?.message?.includes('401')) return false;
      return failureCount < 1;
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 새로고침 방지
    onError: (error) => {
      if (!isMounted.current) return;
      
      if (error?.message?.includes('401')) {
        console.error('인증 오류:', error);
        navigate('/login'); // 인증 실패 시 로그인 페이지로 리다이렉트
        return;
      }
      
      console.error('스터디 로드 실패:', error);
      setErrorMessage(`스터디를 불러오는데 실패했습니다: ${error.message}`);
    }
  });

  const {
    createStudy,
    updateStudy,
    deleteStudy,
    isLoading: isMutating,
    isCreating,
    isUpdating,
    isDeleting,
    createError,
    updateError,
    deleteError,
    isCreateSuccess,
    isUpdateSuccess,
    isDeleteSuccess,
    resetAll
  } = useStudyOperations();

  // 컴포넌트 마운트 상태 추적
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  // 전체 로딩 상태
  const isLoading = useMemo(() => {
    return isLoadingStudy || isMutating;
  }, [isLoadingStudy, isMutating]);

  // 스터디 데이터 초기화 (한 번만 실행)
  useEffect(() => {
    if (studyData && !isInitialized && isMounted.current) {
      setContent(studyData.content || '');
      setIsInitialized(true);
    }
  }, [studyData, isInitialized]);

  // 에러 처리 (안전한 방식)
  const updateErrorMessage = useCallback((error, action) => {
    if (!isMounted.current) return;
    
    if (error?.message?.includes('401')) {
      navigate('/login');
      return;
    }
    
    setErrorMessage(`${action}에 실패했습니다: ${error.message}`);
  }, [navigate]);

  useEffect(() => {
    if (!isMounted.current) return;
    
    if (createError) {
      updateErrorMessage(createError, '작성');
    } else if (updateError) {
      updateErrorMessage(updateError, '수정');
    } else if (deleteError) {
      updateErrorMessage(deleteError, '삭제');
    } else if (!studyError) {
      setErrorMessage('');
    }
  }, [createError, updateError, deleteError, studyError, updateErrorMessage]);

  // 콘텐츠에서 이미지 추출
  const extractImagesFromContent = useCallback((htmlContent) => {
    if (!htmlContent) return [];
    
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlContent, 'text/html');
      const images = doc.querySelectorAll('img');
      
      return Array.from(images).map((img, index) => ({
        id: parseInt(img.dataset.id) || 0,
        key: img.dataset.key || img.src,
        sortOrder: index
      }));
    } catch (error) {
      console.warn('이미지 추출 실패:', error);
      return [];
    }
  }, []);

  // 폼 유효성 검사
  const validateContent = useCallback(() => {
    if (!content.trim() || content === '<p></p>') {
      setErrorMessage('내용을 입력해주세요.');
      return false;
    }
    return true;
  }, [content]);

  // 저장 처리 (안전한 방식 + 출석 체크 + 콘텐츠 정화)
  const handleSave = useCallback(async () => {
    if (!isMounted.current || !validateContent()) return;

    try {
      setErrorMessage('');
      
      // 콘텐츠 정화 처리
      const sanitizedContent = sanitizeHtml(content);
      if (!sanitizedContent) {
        setErrorMessage('올바르지 않은 콘텐츠입니다.');
        return;
      }
      
      const images = extractImagesFromContent(sanitizedContent);
      
      let result;
      if (isEditMode) {
        // 수정 모드 - 출석 체크 없음
        result = await updateStudy(id, sanitizedContent, images);
        if (isMounted.current) {
          setSavedStudyId(id);
          setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
          setModals(prev => ({ ...prev, complete: true }));
        }
      } else {
        // 생성 모드 - 출석 체크 포함
        result = await createStudy(sanitizedContent, images);
        
        if (isMounted.current && result) {
          const newStudyId = result?.id || result?.studyId;
          setSavedStudyId(newStudyId);
          
          // 스터디 생성 성공 후 출석 체크 시도
          try {
            await AttendanceService.checkAttendance();
            console.log('출석 체크 완료');
          } catch (attendanceError) {
            console.warn('출석 체크 실패:', attendanceError);
            // 출석 체크 실패해도 스터디 생성은 성공으로 처리
          }
          
          setModals(prev => ({ ...prev, record: true }));
        }
      }
    } catch (error) {
      console.error('저장 실패:', error);
      // 에러는 useStudyOperations와 useEffect에서 처리
    }
  }, [validateContent, extractImagesFromContent, content, isEditMode, id, updateStudy, createStudy]);

  // 삭제 처리 (안전한 방식)
  const handleDelete = useCallback(async () => {
    if (!isMounted.current || !id) return;

    try {
      setErrorMessage('');
      await deleteStudy(id);
      
      if (isMounted.current) {
        setModals(prev => ({ ...prev, delete: false }));
        setCompleteMessage(MESSAGES.UI.DELETE_COMPLETE);
        setModals(prev => ({ ...prev, complete: true }));
      }
    } catch (error) {
      console.error('삭제 실패:', error);
      if (isMounted.current) {
        setModals(prev => ({ ...prev, delete: false }));
      }
    }
  }, [id, deleteStudy]);

  // 수정 확인 처리
  const handleEdit = useCallback(async () => {
    if (!isMounted.current || !validateContent()) return;

    try {
      setErrorMessage('');
      setModals(prev => ({ ...prev, edit: false }));
      
      const sanitizedContent = sanitizeHtml(content);
      const images = extractImagesFromContent(sanitizedContent);
      await updateStudy(id, sanitizedContent, images);
      
      if (isMounted.current) {
        setSavedStudyId(id);
        setCompleteMessage(MESSAGES.UI.EDIT_COMPLETE);
        setModals(prev => ({ ...prev, complete: true }));
      }
    } catch (error) {
      console.error('수정 실패:', error);
      if (isMounted.current) {
        setModals(prev => ({ ...prev, edit: false }));
      }
    }
  }, [validateContent, extractImagesFromContent, content, id, updateStudy]);

  // 모달 제어 (안전한 방식)
  const openModal = useCallback((modalName) => {
    if (!isMounted.current) return;
    setModals(prev => ({ ...prev, [modalName]: true }));
  }, []);

  const closeModal = useCallback((modalName) => {
    if (!isMounted.current) return;
    
    setModals(prev => ({ ...prev, [modalName]: false }));
    
    // 완료/기록 모달 닫을 때 정리
    if (modalName === 'complete' || modalName === 'record') {
      resetAll();
      setErrorMessage('');
    }
  }, [resetAll]);

  // 취소 (안전한 네비게이션)
  const handleCancel = useCallback(() => {
    if (isMounted.current) {
      navigate('/');
    }
  }, [navigate]);

  // 에러 클리어
  const clearError = useCallback(() => {
    if (!isMounted.current) return;
    setErrorMessage('');
    resetAll();
  }, [resetAll]);

  // 폼 리셋
  const resetForm = useCallback(() => {
    if (!isMounted.current) return;
    
    setContent('');
    setErrorMessage('');
    setSavedStudyId(null);
    setCompleteMessage('');
    setIsInitialized(false);
    setModals({
      record: false,
      delete: false,
      edit: false,
      complete: false,
    });
    resetAll();
  }, [resetAll]);

  // 재시도 (안전한 방식)
  const handleRetry = useCallback(() => {
    if (!isMounted.current) return;
    
    if (studyError && isEditMode) {
      refetchStudy();
    } else {
      clearError();
    }
  }, [studyError, isEditMode, refetchStudy, clearError]);

  // 생성 성공 후 완료 모달 처리 (안전한 방식)
  useEffect(() => {
    if (!isMounted.current) return;
    
    if (isCreateSuccess && !modals.record) {
      setCompleteMessage('스터디가 성공적으로 작성되었습니다!');
      setModals(prev => ({ ...prev, complete: true }));
    }
  }, [isCreateSuccess, modals.record]);

  return {
    // 데이터 상태
    studyData,
    content,
    setContent,
    savedStudyId,
    isEditMode,

    // 로딩 상태
    isLoading,
    isLoadingStudy,
    isCreating,
    isUpdating,
    isDeleting,

    // 에러 상태
    errorMessage,
    studyError,
    
    // 성공 상태  
    isCreateSuccess,
    isUpdateSuccess,
    isDeleteSuccess,

    // 모달 상태
    modals,
    completeMessage,

    // 액션 함수들
    actions: {
      handleSave,
      handleDelete,
      handleEdit,
      handleCancel,
      openModal,
      closeModal,
      clearError,
      resetForm,
      handleRetry,
    },

    // 유틸리티 함수들
    utils: {
      extractImagesFromContent,
      validateContent,
    }
  };
}