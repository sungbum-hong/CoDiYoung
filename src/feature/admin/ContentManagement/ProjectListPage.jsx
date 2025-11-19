import { useState, useCallback } from 'react';
import { useProjectList, useDeleteProject } from './hooks/useContentManagement';
import ContentDetailModal from './components/ContentDetailModal.jsx';
import DeleteConfirmModal from './components/DeleteConfirmModal.jsx';

/**
 * 프로젝트 리스트 전체 페이지
 * Grid 기반 컬렉션 UI + 페이지네이션
 */
export default function ProjectListPage() {
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState(['createdAt,DESC']);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const pageSize = 24; // 6x4 그리드 (24개 아이템)

  // React Query 훅으로 프로젝트 데이터 관리
  const {
    projects,
    currentPage,
    totalPages,
    totalElements,
    hasNext,
    hasPrevious,
    isEmpty,
    isLoading,
    isError,
    error,
    retry
  } = useProjectList({ page, size: pageSize, sort });

  const deleteProjectMutation = useDeleteProject();

  // 프로젝트 보기 핸들러
  const handleProjectView = useCallback((project) => {
    setSelectedProject(project);
    setIsDetailModalOpen(true);
  }, []);

  // 프로젝트 삭제 핸들러
  const handleProjectDelete = useCallback((project) => {
    setProjectToDelete(project);
    setIsDeleteModalOpen(true);
  }, []);

  // 삭제 확인 핸들러
  const handleDeleteConfirm = useCallback((deleteData) => {
    deleteProjectMutation.mutate(deleteData);
    setIsDeleteModalOpen(false);
    setProjectToDelete(null);
  }, [deleteProjectMutation]);

  // 페이지네이션 핸들러
  const handlePageChange = useCallback((newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // 프로젝트 제목에서 첫 번째 텍스트 글자 추출
  const getFirstChar = useCallback((title) => {
    if (!title) return '';
    const textOnly = title.replace(/<[^>]*>/g, '').trim();
    return textOnly.charAt(0).toUpperCase();
  }, []);

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">프로젝트 목록</h1>
          <div className="flex items-center justify-center h-64">
            <div className="text-gray-500">프로젝트 목록을 불러오는 중...</div>
          </div>
        </div>
      </div>
    );
  }

  // 에러 상태
  if (isError) {
    return (
      <div className="min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">프로젝트 목록</h1>
          <div className="flex flex-col items-center justify-center h-64">
            <div className="text-red-500 mb-4">
              {error?.message || '프로젝트 목록을 불러오는데 실패했습니다.'}
            </div>
            <button
              onClick={retry}
              className="px-6 py-3 bg-[#FF0066] text-white rounded-lg transition-colors"
            >
              다시 시도
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* 페이지 제목 */}
        <h1 className="text-3xl font-bold text-center mb-8">프로젝트 목록</h1>

        {/* 빈 상태 */}
        {isEmpty ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-gray-500 text-lg mb-2">등록된 프로젝트가 없습니다.</div>
              <div className="text-sm text-gray-400">새로운 프로젝트가 등록되면 여기에 표시됩니다.</div>
            </div>
          </div>
        ) : (
          <>
            {/* 프로젝트 그리드 - 6x4 형태 */}
            <div className="grid grid-cols-6 gap-x-6 gap-y-6 max-w-7xl mx-auto mb-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="border border-indigo-600 w-25 h-25 rounded-3xl transition-colors flex flex-col p-4"
                >
                  {/* 프로젝트 내용 */}
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="text-6xl font-bold text-gray-700 mb-2">
                      {project.projectImageUrl ? (
                        <img
                          src={project.projectImageUrl}
                          alt={`프로젝트 ${project.id}`}
                          className="w-16 h-16 object-cover rounded-lg mx-auto"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                      ) : null}
                      <span
                        style={{ display: project.projectImageUrl ? 'none' : 'block' }}
                        className="text-6xl font-bold text-gray-700"
                      >
                        {getFirstChar(project.title) || 'P'}
                      </span>
                    </div>
                  </div>

                  {/* 하단 버튼들 */}
                  <div className="flex justify-center gap-2 mt-3 pt-2 border-t border-gray-200">
                    <button
                      onClick={() => handleProjectView(project)}
                      className="text-xs text-gray-600 transition-colors"
                    >
                      보기
                    </button>
                    <span className="text-xs text-gray-300">|</span>
                    <button
                      onClick={() => handleProjectDelete(project)}
                      disabled={deleteProjectMutation.isPending}
                      className="text-xs text-red-600 transition-colors disabled:opacity-50"
                    >
                      삭제
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!hasPrevious}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  이전
                </button>

                {/* 페이지 번호들 */}
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      currentPage === index
                        ? 'bg-[#FF0066] text-white'
                        : 'border border-gray-300 text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!hasNext}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  다음
                </button>
              </div>
            )}

            {/* 결과 정보 */}
            <div className="text-center text-sm text-gray-500 mt-6">
              총 {totalElements}개의 프로젝트
            </div>
          </>
        )}

        {/* 상세보기 모달 */}
        <ContentDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => {
            setIsDetailModalOpen(false);
            setSelectedProject(null);
          }}
          content={selectedProject}
          type="project"
        />

        {/* 삭제 확인 모달 */}
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setProjectToDelete(null);
          }}
          onConfirm={handleDeleteConfirm}
          type="project"
          itemId={projectToDelete?.id}
        />
      </div>
    </div>
  );
}