import { useState, useCallback } from 'react';
import { FaEllipsisH } from "react-icons/fa";
import { useStudyList, useDeleteStudy } from './hooks/useContentManagement';

/**
 * 스터디 섹션 컨테이너 컴포넌트
 * API 데이터를 활용한 스터디 목록 표시
 */
export default function StudySection() {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState(['createdAt,DESC']);

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

  // 스터디 클릭 핸들러
  const handleStudyClick = useCallback((study) => {
    // TODO: 스터디 상세 모달이나 페이지로 이동
    alert(`스터디 상세 보기 (ID: ${study.id})`);
  }, []);

  // 스터디 삭제 핸들러
  const handleStudyDelete = useCallback((study) => {
    const reason = prompt(`스터디 "${study.id}"를 삭제하는 이유를 입력하세요:`);
    if (reason && reason.trim()) {
      if (confirm(`정말로 스터디 ID ${study.id}를 삭제하시겠습니까?`)) {
        deleteStudyMutation.mutate({
          id: study.id,
          reason: reason.trim()
        });
      }
    }
  }, [deleteStudyMutation]);

  // 메뉴 클릭 핸들러
  const handleMenuClick = useCallback(() => {
    // TODO: 메뉴 모달이나 드롭다운 표시
    alert('스터디 관리 메뉴');
  }, []);

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
              className="relative border border-indigo-600 w-25 h-25 rounded-3xl hover:bg-gray-50 transition-colors flex flex-col items-center justify-center p-4"
            >
              {/* 삭제 버튼 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleStudyDelete(study);
                }}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors"
                disabled={deleteStudyMutation.isPending}
              >
                ×
              </button>

              {/* 스터디 내용 */}
              <div
                className="text-center cursor-pointer w-full h-full flex flex-col justify-center"
                onClick={() => handleStudyClick(study)}
              >
                <div className="text-sm font-medium text-gray-900 mb-2">
                  ID: {study.id}
                </div>
                {study.content && (
                  <div className="text-xs text-gray-600 line-clamp-3">
                    {study.content}
                  </div>
                )}
                {study.createdAt && (
                  <div className="text-xs text-gray-400 mt-2">
                    {new Date(study.createdAt).toLocaleDateString()}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 페이지네이션 정보 */}
      {!isEmpty && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          총 {totalElements}개 중 {studies.length}개 표시 (페이지 {currentPage + 1}/{totalPages})
        </div>
      )}
    </div>
  );
}