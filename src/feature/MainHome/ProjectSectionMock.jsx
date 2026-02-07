import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProjectCard from "./components/ProjectCard.jsx";
import { MOCK_PROJECTS } from "../../services/project/mockProjectData.js";

export default function ProjectSectionMock() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTech, setSelectedTech] = useState(null);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [openFilter, setOpenFilter] = useState(null); // 'tech' | 'position' | null

  const itemsPerPage = 9;
  
  // 44페이지를 시뮬레이션하기 위해 데이터 뻥튀기 (9개 * 44페이지)
  // 필터링 테스트를 위해 일부 데이터의 태그를 랜덤하게 변경
  const totalProjectsRaw = Array(9 * 44).fill(null).map((_, i) => {
    const original = MOCK_PROJECTS[i % MOCK_PROJECTS.length];
    // 태그 다양화 (필터링 테스트용)
    let tags = [...original.tags];
    if (i % 3 === 0) tags = ["프론트엔드", "React"];
    if (i % 4 === 0) tags = ["백엔드", "Java"];
    if (i % 5 === 0) tags = ["디자이너", "Figma"];
    
    return { ...original, id: i + 1, title: `${original.title} (${i + 1})`, tags };
  });

  // 필터링 로직
  const filteredProjects = totalProjectsRaw.filter(project => {
    const matchTech = selectedTech ? project.tags.includes(selectedTech) : true;
    const matchPosition = selectedPosition ? project.tags.includes(selectedPosition) : true;
    return matchTech && matchPosition;
  });

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  
  // 현재 페이지 데이터 슬라이싱
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 페이지 변경 핸들러
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // 필터 옵션
  const techOptions = ["React", "Java", "Spring", "Node.js", "Python"];
  const positionOptions = ["프론트엔드", "백엔드", "디자이너", "기획자"];

  const toggleFilter = (filterName) => {
    setOpenFilter(openFilter === filterName ? null : filterName);
  };

  const handleFilterSelect = (type, value) => {
    if (type === 'tech') setSelectedTech(value === selectedTech ? null : value);
    if (type === 'position') setSelectedPosition(value === selectedPosition ? null : value);
    setOpenFilter(null);
    setCurrentPage(1); // 필터 변경 시 1페이지로 초기화
  };

  // 페이지네이션 렌더링 로직 (5개씩 보여주기)
  const renderPagination = () => {
    const pageGroupSize = 5;
    const currentGroup = Math.ceil(currentPage / pageGroupSize);
    const startPage = (currentGroup - 1) * pageGroupSize + 1;
    const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);
    
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    
    return (
      <div className="flex justify-center items-center gap-2 mt-12">
        {/* First Page */}
        <button 
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Prev Page */}
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        {/* Page Numbers (Block based) */}
        {pages.map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-8 h-8 rounded-full font-medium text-sm flex items-center justify-center transition-colors ${
              currentPage === page 
                ? "bg-purple-600 text-white" 
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
        
        {/* Next Page */}
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Last Page */}
        <button 
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    );
  };

  return (
    <section className="mb-24 relative">
      {/* Mock Data Indicator */}
      <div className="absolute -top-10 right-0 bg-yellow-100 text-yellow-800 text-xs font-bold px-3 py-1 rounded-full border border-yellow-300 z-10">
        ⚠️ TEST MODE (MOCK DATA)
      </div>

      {/* Header */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-6">
          <h2 className="font-bold text-2xl text-gray-900">프로젝트</h2>
          
          {/* Filters */}
          <div className="flex gap-2 relative">
            {/* Tech Filter */}
            <div className="relative">
              <button 
                onClick={() => toggleFilter('tech')}
                className={`px-3 py-1.5 text-sm border rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors ${selectedTech ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-600'}`}
              >
                {selectedTech || "기술스택"}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-3 h-3 transition-transform ${openFilter === 'tech' ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
              
              {openFilter === 'tech' && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1">
                  <button 
                    onClick={() => handleFilterSelect('tech', null)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-50"
                  >
                    전체
                  </button>
                  {techOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => handleFilterSelect('tech', option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedTech === option ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-700'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Position Filter */}
            <div className="relative">
              <button 
                onClick={() => toggleFilter('position')}
                className={`px-3 py-1.5 text-sm border rounded-md flex items-center gap-2 hover:bg-gray-50 transition-colors ${selectedPosition ? 'border-blue-500 text-blue-600 bg-blue-50' : 'border-gray-200 text-gray-600'}`}
              >
                {selectedPosition || "포지션"}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-3 h-3 transition-transform ${openFilter === 'position' ? 'rotate-180' : ''}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {openFilter === 'position' && (
                <div className="absolute top-full left-0 mt-1 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1">
                  <button 
                    onClick={() => handleFilterSelect('position', null)}
                    className="w-full text-left px-4 py-2 text-sm text-gray-500 hover:bg-gray-50"
                  >
                    전체
                  </button>
                  {positionOptions.map(option => (
                    <button
                      key={option}
                      onClick={() => handleFilterSelect('position', option)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${selectedPosition === option ? 'text-blue-600 font-bold bg-blue-50' : 'text-gray-700'}`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onProjectClick={(id) => navigate(`/project/${id}`)} 
          />
        ))}
      </div>

      {/* Pagination */}
      {renderPagination()}
    </section>
  );
}
