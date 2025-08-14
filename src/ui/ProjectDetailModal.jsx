import { useNavigate } from "react-router-dom";
import BaseModal from "./BaseModal.jsx";
import Button from "./Button.jsx";
import { MODAL_SIZES } from '../constants/sizes.js';
import { CONFIG } from '../constants/config.js';

export default function ProjectDetailModal({ isOpen, onClose, projectIndex }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/project/${projectIndex + 1}`);
    onClose();
  };

  const modalConfig = MODAL_SIZES.PROJECT_DETAIL;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="PROJECT_DETAIL"
      showTitle={false}
      className="w-[90%] max-w-[704px] mx-4"
    >
      {/* 프로젝트 이미지 */}
      <div className="h-48 rounded-lg mb-4 flex items-center justify-center">
        <p className="text-gray-500">프로젝트 이미지</p>
      </div>

      {/* 버튼들 */}
      <Button
        variant="secondary"
        onClick={handleExplore}
        className="absolute font-medium"
        style={{
          width: `${modalConfig.buttonWidth || CONFIG.CARD.PROJECT.WIDTH}px`,
          height: `${modalConfig.buttonHeight || 70}px`,
          left: `${modalConfig.startX || 147}px`,
          top: `${modalConfig.startY ? modalConfig.startY - 1070 : 450}px`,
        }}
      >
        구경하기
      </Button>

      <Button
        variant="secondary"
        onClick={onClose}
        className="absolute font-medium"
        style={{
          width: `${modalConfig.buttonWidth || CONFIG.CARD.PROJECT.WIDTH}px`,
          height: `${modalConfig.buttonHeight || 70}px`,
          left: `${(modalConfig.startX || 147) + 307}px`,
          top: `${modalConfig.startY ? modalConfig.startY - 1066 : 454}px`,
        }}
      >
        닫기
      </Button>
    </BaseModal>
  );
}
