import { useNavigate } from "react-router-dom";
import BaseModal from "../../../ui/BaseModal.jsx";
import Button from "../../../ui/Button.jsx";
import { MODAL_SIZES } from '../../../constants/sizes.js';
import { CONFIG } from '../../../constants/config.js';
import { COLORS } from "../../../utils/colors.js";

export default function ProjectDetailModal({ isOpen, onClose, projectIndex }) {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate(`/project/${projectIndex + 1}`);
    onClose();
  };

  // 버튼 공통 사이즈(기존 로직 유지)
  const modalConfig = MODAL_SIZES.PROJECT_DETAIL;
  const btnStyle = {
    width: `${modalConfig.buttonWidth || CONFIG.CARD.PROJECT.WIDTH}px`,
    height: `${modalConfig.buttonHeight || 70}px`,
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="CUSTOM" // ✅ WritePageLayout과 동일
      style={{ width: '500px', height: '500px', maxWidth: '500px' }} // ✅ 동일 크기
    >
      <div className="relative w-full h-full p-6">
        {/* 이미지/프리뷰 영역 */}
        <div className="h-48 rounded-lg mb-6 flex items-center justify-center">
          <p className="text-gray-500">프로젝트 이미지</p>
        </div>

        {/* 하단 버튼 그룹 */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-24">
          {/* ✅ 확인(구경하기): WritePageLayout처럼 hover 시 보라 배경 + 흰 글자 */}
          <Button
            variant="outline"
            onClick={handleExplore}
            className="font-medium h-10 w-[150px]"
            style={{
              ...btnStyle,
              width: 150,
              height: 40,
              backgroundColor: 'transparent',
              color: COLORS.PRIMARY,
              borderColor: COLORS.PRIMARY,
              transition: 'background-color .2s, color .2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = COLORS.PRIMARY;
            }}
            
    

          >
            구경하기
          </Button>
          {/* ✅ 취소(닫기): WritePageLayout과 같은 닫기 동작 */}
          <Button
            variant="outline"
            onClick={onClose}

            className="font-medium h-10 w-[150px]"
            style={{ ...btnStyle, width: 150, height: 40 }}
          >
            취소
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}
