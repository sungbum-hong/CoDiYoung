import { useNavigate } from "react-router-dom";
import BaseModal from "../../../ui/BaseModal.jsx";
import Button from "../../../ui/Button.jsx";
import { MODAL_SIZES } from '../../../constants/sizes.js';
import { CONFIG } from '../../../constants/config.js';
import { COLORS } from "../../../utils/colors.js";
import { usePrimaryButtonHover } from "../../../hooks/useHoverStyle.js";
import { useAuthState } from "../../../hooks/useAuth.js";

export default function ProjectDetailModal({ isOpen, onClose, projectId, project }) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthState();
  
  // 호버 효과 훅 사용
  const primaryButtonHover = usePrimaryButtonHover(COLORS.PRIMARY);

  const handlePrimaryAction = () => {
    // 로그인 상태와 관계없이 동일한 프로젝트 상세 페이지로 이동
    navigate(`/project/${projectId}`);
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
        <div className="h-48 rounded-lg mb-6 flex items-center justify-center bg-gray-100 overflow-hidden">
          {project?.imageKey ? (
            <img 
              src={project.imageKey.startsWith('http') ? project.imageKey : `http://15.164.125.28:8080/storage/${project.imageKey}`}
              alt={project?.title || '프로젝트 이미지'}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
          ) : null}
          <div 
            className={`w-full h-full flex items-center justify-center ${project?.imageKey ? 'hidden' : 'flex'}`}
          >
            <p className="text-gray-500">프로젝트 이미지</p>
          </div>
        </div>

        {/* 하단 버튼 그룹 */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-24">
          {/* 로그인 상태에 따라 버튼 텍스트 변경 */}
          <Button
            variant="outline"
            onClick={handlePrimaryAction}
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
            {...primaryButtonHover}
          >
            {isAuthenticated ? '신청하기' : '구경하기'}
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
