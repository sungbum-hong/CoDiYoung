import { useNavigate } from "react-router-dom";
import BaseModal from "../../../ui/BaseModal.jsx";
import Button from "../../../ui/Button.jsx";
import { MODAL_SIZES } from '../../../constants/sizes.js';
import { CONFIG } from '../../../constants/config.js';

export default function ProjectDetailModal({ isOpen, onClose, projectIndex }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/project/${projectIndex + 1}`);
    onClose();
  };

  const modalConfig = MODAL_SIZES.PROJECT_DETAIL;

  // 버튼 공통 사이즈(기존 값 유지)
  const btnStyle = {
    width: `${modalConfig.buttonWidth || CONFIG.CARD.PROJECT.WIDTH}px`,
    height: `${modalConfig.buttonHeight || 70}px`,
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="PROJECT_DETAIL"
      showTitle={false}
      className="w-[90%] max-w-[704px] mx-4"
    >
      {/* 상대 위치 기준 래퍼 */}
      <div className="relative">
        {/* 프로젝트 이미지 */}
        <div className="h-48 rounded-lg mb-4 flex items-center justify-center">
          <p className="text-gray-500">프로젝트 이미지</p>
        </div>

        {/* 버튼 그룹: 하단 중앙 고정 */}
        <div className="absolute top-110 left-1/2 -translate-x-1/2 z-20 flex flex-col sm:flex-row gap-15">
          <Button
            variant="secondary"
            onClick={handleExplore}
            className="font-medium cursor-pointer transition-colors
             hover:!bg-[var(--color-primary)] hover:!text-white"
            style={{ btnStyle, width:150,  height:50}}
            >
            구경하기
          </Button>

          <Button
            variant="secondary"
            onClick={onClose}
      className="font-medium cursor-pointer
           bg-transparent text-black
           hover:!bg-transparent hover:!text-black"
            style={{ btnStyle, width:150,  height: 50  }}
          >
            닫기
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}