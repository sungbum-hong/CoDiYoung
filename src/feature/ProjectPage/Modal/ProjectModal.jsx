import { useNavigate } from "react-router-dom";
import NonColorButton from "../../../ui/NonColorButton.jsx";

export default function ProjectModal({ isOpen, onClose, projectIndex }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleExplore = () => {
    navigate(`/project/${projectIndex + 1}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="bg-white border-2 border-[#193794] rounded-lg p-6 w-96 max-w-md mx-4">
        <div className="text-center mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            프로젝트 #{projectIndex + 1}
          </h3>
          
          {/* 프로젝트 이미지 영역 */}
          <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-500">프로젝트 이미지</p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <NonColorButton
            onClick={handleExplore}
            className="flex-1 py-2 px-4 font-medium"
          >
            구경하기
          </NonColorButton>
          <NonColorButton
            onClick={onClose}
            className="flex-1 py-2 px-4 font-medium"
          >
            닫기
          </NonColorButton>
        </div>
      </div>
    </div>
  );
}