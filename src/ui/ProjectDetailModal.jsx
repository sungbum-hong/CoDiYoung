import { useNavigate } from "react-router-dom";
import NonColorButton from "./NonColorButton.jsx";

export default function ProjectDetailModal({ isOpen, onClose, projectIndex }) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleExplore = () => {
    navigate(`/project/${projectIndex + 1}`);
    onClose();
  };

// 피그마 → 웹 비율
const ratio = 704 / 1090; // 약 0.646

// 모달 시작 위치(피그마 페이지 기준)
const modalStartX = 416;
const modalStartY = 1520;

// 버튼 크기 변환
const btnWidth = 240 * ratio;
const btnHeight = 108 * ratio;

// 버튼A 위치 (모달 내부 기준 → 비율 변환)
const btnA_X = (643 - modalStartX) * ratio;
const btnA_Y = (1762 - modalStartY) * ratio;

// 버튼B 위치
const btnB_X = (1119 - modalStartX) * ratio;
const btnB_Y = (1768 - modalStartY) * ratio;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="relative bg-white border-2 border-[#193794] rounded-lg w-[90%] max-w-[704px] mx-4 h-[574px]">
        
        {/* 프로젝트 이미지 */}
        <div className="h-48 rounded-lg mb-4 flex items-center justify-center">
          <p className="text-gray-500">프로젝트 이미지</p>
        </div>

        {/* 버튼 A */}
        <NonColorButton
  onClick={handleExplore}
  className="absolute font-medium"
  style={{
    width: "155px",
    height: "70px",
    left: "147px",
    top: "450px",
  }}
>
  구경하기
</NonColorButton>

<NonColorButton
  onClick={onClose}
  className="absolute font-medium"
  style={{
    width: "155px",
    height: "70px",
    left: "454px",
    top: "454px",
  }}
>
  닫기
</NonColorButton>

      </div>
    </div>
  );
}
