import { useState } from "react";
import { COLORS } from "../../../utils/colors.js";
import Button from "../../../ui/Button";
import { useProjectActions } from "../hooks/useMyProfileProjectQueries.js";
import ImageUploadSection from "./components/ImageUploadSection";
import ProjectFormFields from "./components/ProjectFormFields";
import ProjectDatePickerModal from "./components/ProjectDatePickerModal";
import { validateKakaoOpenTalkLink, validateProjectForm } from "./utils/projectValidation";

export default function ProjectCreateForm({ onBack }) {
  const [formData, setFormData] = useState({
    projectName: '',
    description: '',
    participants: '',
    deadline: null,
    position: [],
    tech: [],
    slogan: '',
    questions: '',
    openTalkLink: ''
  });

  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  // React Query를 사용한 프로젝트 생성
  const { createProjectAsync, isCreating } = useProjectActions();

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData);
  };

  const handleCreateProject = async () => {
    try {
      // 폼 유효성 검사
      const validation = validateProjectForm(formData);
      if (!validation.isValid) {
        alert(validation.message);
        return;
      }

      // API 명세서에 맞는 데이터 구조로 변환
      const projectData = {
        title: formData.projectName,
        description: formData.description,
        imageKey: uploadedImage?.key || "",
        slogan: formData.slogan,
        capacity: parseInt(formData.participants) || 0,
        positions: formData.position,
        techs: formData.tech,
        questions: formData.questions ? [formData.questions] : [],
        kakaoLink: formData.openTalkLink,
        completeDay: formData.deadline ?
          // 로컬 시간 기준으로 YYYY-MM-DD 형식 생성
          `${formData.deadline.getFullYear()}-${String(formData.deadline.getMonth() + 1).padStart(2, '0')}-${String(formData.deadline.getDate()).padStart(2, '0')}`
          :
          // 기본값을 현재 날짜로 설정
          (() => {
            const today = new Date();
            return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
          })()
      };

      // React Query를 사용한 프로젝트 생성
      await createProjectAsync(projectData);

      setIsSuccess(true);

      // 성공 후 페이지 새로고침
      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error('프로젝트 생성 실패:', error);
      alert('프로젝트 생성에 실패했습니다: ' + error.message);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="text-sm mb-4 font-medium text-center">프로젝트 개설</h2>

      <div className="border-2 rounded-lg p-6 flex flex-col items-center gap-4" 
           style={{ borderColor: COLORS.PRIMARY }}>
        
        {/* 이미지 업로드 섹션 */}
        <ImageUploadSection onImageUpload={handleImageUpload} />

        {/* 폼 필드들 */}
        <ProjectFormFields 
          formData={formData}
          onInputChange={handleInputChange}
          onDatePickerOpen={() => setIsDatePickerOpen(true)}
        />

        {/* 성공 메시지 */}
        {isSuccess && (
          <div className="w-full text-center p-4 rounded-md" 
               style={{ backgroundColor: `${COLORS.PRIMARY}20`, color: COLORS.PRIMARY }}>
            프로젝트 생성 완료! 페이지를 새로고침합니다...
          </div>
        )}

        {/* 버튼 영역 */}
        <div className="flex justify-between w-full mt-4 gap-2">
          <Button
            variant="secondary"
            onClick={handleCreateProject}
            disabled={isCreating || isSuccess}
            className="flex-1"
          >
            {isCreating ? '생성 중...' : '개설'}
          </Button>
          <Button
            variant="outline"
            onClick={onBack}
            disabled={isCreating}
            className="flex-1"
          >
            취소
          </Button>
        </div>
      </div>

      {/* 날짜 선택 모달 */}
      <ProjectDatePickerModal
        isOpen={isDatePickerOpen}
        onClose={() => setIsDatePickerOpen(false)}
        selectedDate={formData.deadline}
        onDateChange={(date) => handleInputChange('deadline', date)}
      />
    </div>
  );
}