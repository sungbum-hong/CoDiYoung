import BaseModal from "../../../../ui/BaseModal.jsx";
import { useStudyDetail, useProjectDetail } from "../hooks/useContentManagement";
import LoadingSpinner from "../../components/LoadingSpinner";

/**
 * 컨텐츠 상세보기 모달 (스터디/프로젝트 공용)
 * 피그마 디자인: 2-영역 레이아웃 (상단 콘텐츠 + 하단 액션 버튼)
 */
export default function ContentDetailModal({
  isOpen,
  onClose,
  content,
  type // 'study' 또는 'project'
}) {
  if (!content) return null;

  const isStudy = type === 'study';
  const isProject = type === 'project';

  // 상세 데이터 조회
  const { data: studyDetail, isLoading: isStudyLoading } = useStudyDetail(
    isStudy && isOpen ? content.id : null
  );

  const { data: projectDetail, isLoading: isProjectLoading } = useProjectDetail(
    isProject && isOpen ? content.id : null
  );

  const isLoading = isStudy ? isStudyLoading : isProjectLoading;
  const detailData = isStudy ? studyDetail : projectDetail;

  // 로딩 중일 때
  if (isLoading) {
    return (
      <BaseModal
        isOpen={isOpen}
        onClose={onClose}
        size="CUSTOM"
        style={{ width: '500px', height: '600px' }}
      >
        <LoadingSpinner />
      </BaseModal>
    );
  }

  // 데이터가 없을 때 (에러 등)
  if (!detailData) return null;

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="CUSTOM"
      style={{
        width: '500px',
        height: '600px',
        maxWidth: '90vw',
        maxHeight: '90vh'
      }}
      className="overflow-hidden"
      closeOnOverlayClick={true}
    >
      <div className="relative w-full h-full">
        {/* 상단 영역: 메인 콘텐츠 (세로 중앙보다 조금 위쪽에 수평 중앙 정렬) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-20">
          <div className="text-center space-y-6 px-8">
            {/* 스터디 전용: 내용 */}
            {isStudy && detailData.content && (
              <div
                className="text-lg text-gray-800 max-w-md mx-auto leading-relaxed"
                dangerouslySetInnerHTML={{ __html: detailData.content }}
              />
            )}

            {/* 스터디 전용: 이미지 목록 */}
            {isStudy && detailData.images && detailData.images.length > 0 && (
              <div className="flex gap-2 overflow-x-auto py-2 justify-center">
                {detailData.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.url}
                    alt={`스터디 이미지 ${idx}`}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                ))}
              </div>
            )}

            {/* 프로젝트 전용: 이미지 (projectImageUrl 또는 imageUrl) */}
            {isProject && (detailData.projectImageUrl || detailData.imageUrl) && (
              <div className="flex justify-center">
                <img
                  src={detailData.projectImageUrl || detailData.imageUrl}
                  alt={`프로젝트 ${detailData.id}`}
                  className="w-40 h-40 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center text-sm text-gray-500 hidden">
                  이미지 없음
                </div>
              </div>
            )}

            {/* 프로젝트 전용: 제목 (있는 경우) */}
            {isProject && detailData.title && (
              <div className="text-lg text-gray-800 font-medium max-w-md mx-auto">
                {detailData.title}
              </div>
            )}

            {/* 프로젝트 내용 (API에서 content로 옴) */}
            {isProject && detailData.content && (
              <div className="text-base text-gray-600 max-w-md mx-auto mt-2 whitespace-pre-wrap">
                {detailData.content}
              </div>
            )}
          </div>
        </div>

        {/* 하단 영역: 액션 버튼 (고정 위치) */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex justify-center">
            <button
              onClick={onClose}
              style={{
                width: '200px',
                height: '48px',
                backgroundColor: '#FF0066',
                color: 'white',
                border: '1px solid #FF0066',
                borderRadius: '24px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                outline: 'none'
              }}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </BaseModal>
  );
}