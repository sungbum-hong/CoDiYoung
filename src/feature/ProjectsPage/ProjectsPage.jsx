import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { ProjectService } from '../../services/project/ProjectService.js';
import { CONFIG } from '../../constants/config.js';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    totalElements: 0,
    currentPage: 0,
    pageSize: 16
  });

  // URL 파라미터에서 현재 상태 읽기
  const sortType = searchParams.get('sort') || 'recent';
  const currentPage = parseInt(searchParams.get('page')) || 1;

  const ITEMS_PER_PAGE = 16;

  // 실제 API 데이터 조회
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // 정렬 타입에 따른 sort 파라미터 설정
        const sortParam = sortType === 'recent'
          ? ['createdAt,DESC']
          : ['createdAt,ASC']; // 인기순 로직은 추후 구현

        const response = await ProjectService.getAllProjects({
          page: currentPage - 1, // API는 0-based, UI는 1-based
          size: ITEMS_PER_PAGE,
          sort: sortParam
        });

        if (response && response.content) {
          setProjects(response.content);
          setPagination({
            totalPages: response.totalPages || 0,
            totalElements: response.totalElements || 0,
            currentPage: response.number || 0,
            pageSize: response.size || ITEMS_PER_PAGE
          });
        } else {
          setProjects([]);
          setPagination({
            totalPages: 0,
            totalElements: 0,
            currentPage: 0,
            pageSize: ITEMS_PER_PAGE
          });
        }
      } catch (err) {
        
        setError(err.message);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [currentPage, sortType]);

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  const handleSortChange = (newSortType) => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set('sort', newSortType);
    newSearchParams.set('page', '1'); // 정렬 변경 시 첫 페이지로
    setSearchParams(newSearchParams);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= pagination.totalPages) {
      const newSearchParams = new URLSearchParams(searchParams);
      newSearchParams.set('page', page.toString());
      setSearchParams(newSearchParams);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-gray-500">프로젝트를 불러오는 중...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <span className="text-red-500 block mb-4">프로젝트를 불러오는데 실패했습니다</span>
          <span className="text-gray-500 text-sm">{error}</span>
          <button
            onClick={() => window.location.reload()}
            className="block mx-auto mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6">
      <div>
        {/* Header with Tabs */}
        <div className="mb-6">
          <div className="flex items-center gap-6 mb-4">
            <button
              onClick={() => handleSortChange('recent')}
              className={`text-2xl font-bold pb-2 border-b-2 transition-colors ${
                sortType === 'recent'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400'
              }`}
            >
              최근순
            </button>
            <button
              onClick={() => handleSortChange('popular')}
              className={`text-2xl font-bold pb-2 border-b-2 transition-colors ${
                sortType === 'popular'
                  ? 'border-black text-black'
                  : 'border-transparent text-gray-400'
              }`}
            >
              인기순
            </button>
          </div>
        </div>

        {/* 실제 데이터 또는 빈 상태 처리 */}
        {projects.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <span className="text-gray-500 text-lg">등록된 프로젝트가 없습니다</span>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-32 gap-y-8">
            {projects.map((project, index) => {
              const imageUrl = project.imageKey
                ? (project.imageKey.startsWith('http')
                    ? project.imageKey
                    : `${CONFIG.API.BASE_URL}/storage/${project.imageKey}`)
                : null;

              return (
                <div key={project.id || index} className="flex flex-col items-center text-center">
                  <div
                    onClick={() => handleProjectClick(project.id)}
                    className="aspect-square rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full overflow-hidden"
                    style={{
                      backgroundColor: imageUrl ? 'transparent' : '#C4C4C4',
                    }}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleProjectClick(project.id);
                      }
                    }}
                    role="button"
                    aria-label={`${project.title} 프로젝트 상세 보기`}
                  >
                    {imageUrl ? (
                      <img
                        src={imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.backgroundColor = '#C4C4C4';
                        }}
                      />
                    ) : null}
                  </div>

                  {/* 프로젝트 정보 */}
                  <div className="mt-2 text-black">
                    <h3 className="font-bold text-sm mb-1" title={project.title}>
                      {project.title || "프로젝트명"}
                    </h3>
                    <p className="text-xs text-gray-600" title={project.slogan}>
                      {project.slogan || "프로젝트 설명"}
                    </p>
                    {project.completeDay && (
                      <p className="text-xs text-gray-500 mt-1">
                        완료예정: {new Date(project.completeDay).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination - 프로젝트가 있을 때만 표시 */}
        {pagination.totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              aria-label="이전 페이지"
            >
              <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: pagination.totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? 'bg-black text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pagination.totalPages}
              className="p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              aria-label="다음 페이지"
            >
              <ChevronRightIcon className="w-5 h-5 text-gray-600" />
            </button>

            {/* 페이지 정보 표시 */}
            <div className="ml-4 text-sm text-gray-500">
              총 {pagination.totalElements}개 프로젝트
            </div>
          </div>
        )}
      </div>
    </div>
  );
}