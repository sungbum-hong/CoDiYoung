import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { COLORS } from '../../utils/colors';
import { CONFIG } from '../../constants/config';
import { MockProjectService, USE_MOCK_DATA } from '../../mock-logic/index.js';

export default function ProjectsPage() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  // URL 파라미터에서 현재 상태 읽기
  const sortType = searchParams.get('sort') || 'recent';
  const currentPage = parseInt(searchParams.get('page')) || 1;
  
  const ITEMS_PER_PAGE = 16;
  const TOTAL_PAGES = 4;

  // Mock 데이터 조회
  useEffect(() => {
    const fetchProjects = async () => {
      if (!USE_MOCK_DATA) {
        setIsLoading(false);
        return;
      }
      
      try {
        const response = await MockProjectService.getAllProjects();
        console.log('전체 프로젝트 데이터:', response);
        setProjects(response || []);
      } catch (error) {
        console.error('프로젝트 조회 실패:', error);
        setProjects([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
    if (page >= 1 && page <= TOTAL_PAGES) {
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

        {/* Responsive Grid: Mobile 2x8, Tablet 3x6, Desktop 4x4 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-32 gap-y-8">
          {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => {
            const globalIndex = (currentPage - 1) * ITEMS_PER_PAGE + index;
            const project = USE_MOCK_DATA && projects[globalIndex] ? projects[globalIndex] : null;
            const projectId = project?.id || globalIndex + 1;
            
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div
                  onClick={() => handleProjectClick(projectId)}
                  className="aspect-square rounded-lg cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 w-full"
                  style={{
                    backgroundColor: '#C4C4C4', // 플레이스홀더 색상
                  }}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleProjectClick(projectId);
                    }
                  }}
                  role="button"
                  aria-label={project ? `${project.title} 프로젝트 상세 보기` : `프로젝트 ${globalIndex + 1} 상세 보기`}
                >
                </div>
                
                {/* 모든 카드에 텍스트 표시 (네모 밖으로, 중앙정렬) */}
                <div className="mt-2 text-black">
                  <h3 className="font-bold text-sm mb-1">
                    {project?.title || "프로젝트명"}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {project?.slogan || "프로젝트 설명"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
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
          {Array.from({ length: TOTAL_PAGES }).map((_, index) => {
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
            disabled={currentPage === TOTAL_PAGES}
            className="p-2 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
            aria-label="다음 페이지"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}