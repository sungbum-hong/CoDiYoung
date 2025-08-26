
import { useState } from "react";

function ProjectCreateForm({ onBack }) {
  return (
    <div className="w-full max-w-md">
      <h2 className="text-sm mb-4 font-medium">프로젝트 개설</h2>

      <div className="border-2 border-purple-400 rounded-lg p-6 flex flex-col items-center gap-4">
        {/* 이미지 업로드 영역 */}
        <div className="w-full h-40 border-2 border-purple-400 rounded-md flex items-center justify-center text-gray-400">
          이미지
        </div>

        {/* 입력 필드 */}
        <input
          type="text"
          placeholder="프로젝트 명을 적어주세요"
          className="w-full border-2 border-purple-400 rounded-md p-2 text-center placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="참여 인원을 입력해주세요"
          className="w-full border-2 border-purple-400 rounded-md p-2 text-center placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="포지션을 정해주세요"
          className="w-full border-2 border-purple-400 rounded-md p-2 text-center placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="기술을 선택해주세요"
          className="w-full border-2 border-purple-400 rounded-md p-2 text-center placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="질문1"
          className="w-full border-2 border-purple-400 rounded-md p-2 text-center placeholder-gray-400"
        />
        <input
          type="text"
          placeholder="질문2"
          className="w-full border-2 border-purple-400 rounded-md p-2 text-center placeholder-gray-400"
        />

        {/* 버튼 영역 */}
        <div className="flex justify-between w-full mt-4">
          <button className="flex-1 border-2 border-purple-400 rounded-md py-2 mx-1">
            개설
          </button>
          <button className="flex-1 border-2 border-purple-400 rounded-md py-2 mx-1">
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectContent() {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateClick = () => {
    setShowCreateForm(true);
  };

  const handleBackClick = () => {
    setShowCreateForm(false);
  };

  if (showCreateForm) {
    return (
      <div className="w-full min-h-screen flex flex-col p-6">
        <ProjectCreateForm onBack={handleBackClick} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col p-6">
      {/* 상단 아이콘 */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={handleCreateClick}
          className="w-14 h-14 rounded-full bg-violet-600 text-white hover:bg-violet-700 transition flex items-center justify-center text-sm"
        >
          ➕
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