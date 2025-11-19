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

  const pageSize = 12; // Grid에 적합한 개수

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
              className="px-6 py-3 bg-[#FF0066] text-white rounded-lg hover:bg-pink-700 transition-colors"
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
            {/* 프로젝트 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-200 overflow-hidden group"
                >
                  {/* 프로젝트 이미지 영역 */}
                  <div className="aspect-square bg-gray-100 relative overflow-hidden">
                    {project.projectImageUrl ? (
                      <img
                        src={project.projectImageUrl}
                        alt={`프로젝트 ${project.id}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400" style={{ display: project.projectImageUrl ? 'none' : 'flex' }}>
                      <span className="text-sm">이미지 없음</span>
                    </div>
                  </div>

                  {/* 프로젝트 정보 */}
                  <div className="p-4">
                    <div className="text-sm text-gray-600 mb-2">ID: {project.id}</div>
                    {project.title && (
                      <div className="text-lg font-medium text-gray-900 mb-3 line-clamp-2">
                        {project.title}
                      </div>
                    )}

                    {/* 액션 버튼들 */}
                    <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                      <button
                        onClick={() => handleProjectView(project)}
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        보기
                      </button>
                      <button
                        onClick={() => handleProjectDelete(project)}
                        disabled={deleteProjectMutation.isPending}
                        className="text-sm text-red-600 hover:text-red-800 transition-colors disabled:opacity-50"
                      >
                        삭제
                      </button>
                    </div>
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
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!hasNext}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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