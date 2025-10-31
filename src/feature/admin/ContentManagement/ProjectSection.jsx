import { useState, useCallback } from 'react';
import { FaEllipsisH } from "react-icons/fa";
import { useProjectList } from './hooks/useContentManagement';

/**
 * 프로젝트 섹션 컨테이너 컴포넌트
 * API 데이터를 활용한 프로젝트 목록 표시
 */
export default function ProjectSection() {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState(['createdAt,DESC']);

  // React Query 훅으로 프로젝트 데이터 관리
  const {
    projects,
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
  } = useProjectList({ page, size: 5, sort });

  // 프로젝트 클릭 핸들러
  const handleProjectClick = useCallback((project) => {
    // TODO: 프로젝트 상세 모달이나 페이지로 이동
  }, []);

  // 메뉴 클릭 핸들러
  const handleMenuClick = useCallback(() => {
    // TODO: 메뉴 모달이나 드롭다운 표시
  }, []);

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="mb-20">
        <div className="flex justify-between mb-20">
          <h1 className="text-2xl">프로젝트</h1>
          <button
            className="p-2 rounded-full text-white bg-[#FF0066]"
            onClick={handleMenuClick}
          >
            <FaEllipsisH size={20} />
          </button>
        </div>
        <div className="flex items-center justify-center h-32">
          <div className="text-gray-500">프로젝트 목록을 불러오는 중...</div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (isError) {
    return (
      <div className="mb-20">
        <div className="flex justify-between mb-20">
          <h1 className="text-2xl">프로젝트</h1>
          <button
            className="p-2 rounded-full text-white bg-[#FF0066]"
            onClick={handleMenuClick}
          >
            <FaEllipsisH size={20} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-32">
          <div className="text-red-500 mb-2">
            {error?.message || '프로젝트 목록을 불러오는데 실패했습니다.'}
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
        <h1 className="text-2xl">프로젝트</h1>
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
          <div className="text-gray-500">등록된 프로젝트가 없습니다.</div>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border border-indigo-600 w-25 h-25 rounded-3xl cursor-pointer hover:bg-gray-50 transition-colors flex flex-col items-center justify-center p-4"
              onClick={() => handleProjectClick(project)}
            >
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900 mb-2">
                  ID: {project.id}
                </div>
                {project.projectImageUrl && (
                  <div className="mb-2">
                    <img
                      src={project.projectImageUrl}
                      alt={`프로젝트 ${project.id}`}
                      className="w-12 h-12 object-cover rounded-lg mx-auto"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="text-xs text-gray-400">
                  프로젝트
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 페이지네이션 정보 */}
      {!isEmpty && (
        <div className="mt-4 text-sm text-gray-500 text-center">
          총 {totalElements}개 중 {projects.length}개 표시 (페이지 {currentPage + 1}/{totalPages})
        </div>
      )}
    </div>
  );
}