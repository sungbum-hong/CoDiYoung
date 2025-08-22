
export default function ProjectContent() {

  return (
    <div className="w-full min-h-screen flex flex-col p-6">
      {/* 상단 아이콘 */}
      <div className="flex justify-end mb-6">
        <button className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center text-sm">
          개설 아이콘
        </button>
      </div>

      {/* 신청 프로젝트 */}
      <div className="mb-10">
        <h2 className="text-sm font-medium mb-2">신청 프로젝트</h2>
        <div className="w-full max-w-xl h-64 border-2 border-purple-600 rounded-md flex items-center justify-center">
          <span className="font-bold text-lg">없음</span>
        </div>
      </div>

      {/* 진행 프로젝트 */}
      <div className="mb-10">
        <h2 className="text-sm font-medium mb-2">진행 프로젝트</h2>
        <div className="w-full max-w-xl h-64 border-2 border-purple-600 rounded-md flex items-center justify-center">
          <span className="font-bold text-lg">없음</span>
        </div>
      </div>

      {/* 프로젝트 - 페이지네이션 */}
      <div>
        <h2 className="text-sm font-medium mb-3">프로젝트</h2>
        <div className="flex space-x-4">
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
          <div className="w-6 h-6 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}