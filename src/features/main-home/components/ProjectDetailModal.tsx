'use client';

import { useRouter } from "next/navigation";
import BaseModal from "../../../shared/ui/BaseModal";
import Button from "../../../shared/ui/Button";
import { CONFIG } from '../../../constants/config';
import { COLORS } from "../../../constants/colors";
// import { usePrimaryButtonHover } from "../../../hooks/useHoverStyle"; // Commented out - file not found

interface ProjectDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | number;
  project?: {
    imageKey?: string;
    title?: string;
  };
}

export default function ProjectDetailModal({ isOpen, onClose, projectId, project }: ProjectDetailModalProps) {
  const router = useRouter();
  
  // const primaryButtonHover = usePrimaryButtonHover(COLORS.PRIMARY); // Commented out - hook not found

  const handlePrimaryAction = () => {
    router.push(`/project/${projectId}`);
    onClose();
  };

  // 버튼 공통 사이즈(기존 로직 유지)
  const modalConfig = CONFIG.MODAL_SIZES.PROJECT_DETAIL;
  const btnStyle = {
    width: `${modalConfig.buttonWidth || CONFIG.CARD.PROJECT.WIDTH}px`,
    height: `${modalConfig.buttonHeight || 70}px`,
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="DEFAULT" // Changed from CUSTOM to match BaseModal types
      style={{ width: '500px', height: '500px', maxWidth: '500px' }} // ✅ 동일 크기
    >
      <div className="relative w-full h-full p-6">
        {/* 이미지/프리뷰 영역 */}
        <div className="h-48 rounded-lg mb-6 flex items-center justify-center bg-gray-100 overflow-hidden">
          {project?.imageKey ? (
            <img 
              src={project.imageKey.startsWith('http') ? project.imageKey : `${CONFIG.API.BASE_URL}/storage/${project.imageKey}`}
              alt={project?.title || '프로젝트 이미지'}
              className="w-full h-full object-cover rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
                ((e.target as HTMLElement).nextSibling as HTMLElement).style.display = 'flex';
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
            // {...primaryButtonHover} // Commented out - hook not available
          >
            구경하기
          {/* {isAuthenticated ? '신청하기' : '구경하기'} */}
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
