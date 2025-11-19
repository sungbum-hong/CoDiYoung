import { useState, useCallback } from 'react';
import { FaEllipsisH } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useProjectList, useDeleteProject } from './hooks/useContentManagement';
import ContentDetailModal from './components/ContentDetailModal.jsx';
import DeleteConfirmModal from './components/DeleteConfirmModal.jsx';

/**
 * 프로젝트 섹션 컨테이너 컴포넌트
 * API 데이터를 활용한 프로젝트 목록 표시
 */
export default function ProjectSection() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState(['createdAt,DESC']);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

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

  // 프로젝트 제목에서 첫 번째 텍스트 글자 추출
  const getFirstChar = useCallback((title) => {
    if (!title) return '';
    const textOnly = title.replace(/<[^>]*>/g, '').trim();
    return textOnly.charAt(0).toUpperCase();
  }, []);

  // 메뉴 클릭 핸들러 (더보기)
  const handleMenuClick = useCallback(() => {
    navigate('/admin/content/projects');
  }, [navigate]);

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
              className="border border-indigo-600 w-25 h-25 rounded-3xl hover:bg-gray-50 transition-colors flex flex-col p-4"
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
                  className="text-xs text-gray-600 hover:text-gray-800 transition-colors"
                >
                  보기
                </button>
                <span className="text-xs text-gray-300">|</span>
                <button
                  onClick={() => handleProjectDelete(project)}
                  disabled={deleteProjectMutation.isPending}
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
  );
}