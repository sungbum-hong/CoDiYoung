import { useState, useCallback } from 'react';
import { FaEllipsisH } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useStudyList, useDeleteStudy } from './hooks/useContentManagement';
import ContentDetailModal from './components/ContentDetailModal.jsx';
import DeleteConfirmModal from './components/DeleteConfirmModal.jsx';

/**
 * 스터디 섹션 컨테이너 컴포넌트
 * API 데이터를 활용한 스터디 목록 표시
 */
export default function StudySection() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState(['createdAt,DESC']);
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [studyToDelete, setStudyToDelete] = useState(null);

  // React Query 훅으로 스터디 데이터 관리
  const {
    studies,
    currentPage,
    totalPages,
    totalElements,
    pageSize,
    hasNext,
    hasPrevious,
    isEmpty,
    isLoading,
    isError,
    error,
    retry
  } = useStudyList({ page, size: 5, sort });

  const deleteStudyMutation = useDeleteStudy();

  // 스터디 보기 핸들러
  const handleStudyView = useCallback((study) => {
    setSelectedStudy(study);
    setIsDetailModalOpen(true);
  }, []);

  // 스터디 삭제 핸들러
  const handleStudyDelete = useCallback((study) => {
    setStudyToDelete(study);
    setIsDeleteModalOpen(true);
  }, []);

  // 삭제 확인 핸들러
  const handleDeleteConfirm = useCallback((deleteData) => {
    deleteStudyMutation.mutate(deleteData);
    setIsDeleteModalOpen(false);
    setStudyToDelete(null);
  }, [deleteStudyMutation]);

  // 컨텐츠에서 첫 번째 텍스트 글자 추출
  const getFirstChar = useCallback((content) => {
    if (!content) return '';
    const textOnly = content.replace(/<[^>]*>/g, '').trim();
    return textOnly.charAt(0).toUpperCase();
  }, []);

  // 메뉴 클릭 핸들러 (더보기)
  const handleMenuClick = useCallback(() => {
    navigate('/admin/content/studies');
  }, [navigate]);

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="mb-20">
        <div className="flex justify-between mb-20">
          <h1 className="text-2xl">스터디</h1>
          <button
            className="p-2 rounded-full text-white bg-[#FF0066]"
            onClick={handleMenuClick}
          >
            <FaEllipsisH size={20} />
          </button>
        </div>
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500">스터디 목록을 불러오는 중...</div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (isError) {
    return (
      <div className="mb-20">
        <div className="flex justify-between mb-20">
          <h1 className="text-2xl">스터디</h1>
          <button
            className="p-2 rounded-full text-white bg-[#FF0066]"
            onClick={handleMenuClick}
          >
            <FaEllipsisH size={20} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-32">
          <div className="text-red-500 mb-2">
            {error?.message || '스터디 목록을 불러오는데 실패했습니다.'}
          </div>
          <button
            onClick={retry}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-20">
      <div className="flex justify-between mb-20">
        <h1 className="text-2xl">스터디</h1>
        <button
          className="p-2 rounded-full text-white bg-[#FF0066]"
          onClick={handleMenuClick}
        >
          <FaEllipsisH size={20} />
        </button>
      </div>

      {/* 빈 상태 */}
      {isEmpty ? (
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500">등록된 스터디가 없습니다.</div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {studies.map((study) => (
            <div
              key={study.id}
              className="border border-indigo-600 w-25 h-25 rounded-3xl hover:bg-gray-50 transition-colors flex flex-col p-4"
            >
              {/* 스터디 내용 */}
              <div className="flex-1 flex flex-col justify-center text-center">
                <div className="text-6xl font-bold text-gray-700 mb-2">
                  {getFirstChar(study.content) || 'S'}
                </div>
              </div>

              {/* 하단 버튼들 */}
              <div className="flex justify-center gap-2 mt-3 pt-2 border-t border-gray-200">
                <button
                  onClick={() => handleStudyView(study)}
                  className="text-xs text-gray-600 hover:text-gray-800 transition-colors"
                >
                  보기
                </button>
                <span className="text-xs text-gray-300">|</span>
                <button
                  onClick={() => handleStudyDelete(study)}
                  disabled={deleteStudyMutation.isPending}
                  className="text-xs text-red-600 hover:text-red-800 transition-colors disabled:opacity-50"
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
        </div>
      )}


      {/* 상세보기 모달 */}
      <ContentDetailModal
        isOpen={isDetailModalOpen}
        onClose={() => {
          setIsDetailModalOpen(false);
          setSelectedStudy(null);
        }}
        content={selectedStudy}
        type="study"
      />

      {/* 삭제 확인 모달 */}
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setStudyToDelete(null);
        }}
        onConfirm={handleDeleteConfirm}
        type="study"
        itemId={studyToDelete?.id}
      />
    </div>
  );
}