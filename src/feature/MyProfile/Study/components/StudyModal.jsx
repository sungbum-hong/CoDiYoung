import BaseModal from '../../../../ui/BaseModal';
import Button from '../../../../ui/Button';
import { COLORS } from '../../../../constants/colors';
import useStudyUIStore from '../../../../stores/studyUIStore.js';
// 새로운 훅 import
import { useStudyDetail } from '../../../../hooks/useStudyQueries.js';
import { mapImagesToContent } from '../../../../utils/imageUtils.js';

export default function StudyModal({ onEdit }) {
  const {
    modals,
    selectedIndex,
    selectedStudyId,
    closeModal,
    getFirstImage,
    getIntroduction
  } = useStudyUIStore();

  const isOpen = modals.study;

  // 선택된 스터디 ID로 상세 정보 조회
  const {
    data: selectedStudy,
    isLoading: isStudyLoading,
    error: studyError
  } = useStudyDetail(selectedStudyId, {
    enabled: isOpen && !!selectedStudyId // 모달이 열려있고 ID가 있을 때만 실행
  });

  // 모달이 닫힐 때 처리
  const handleClose = () => {
    closeModal('study');
  };


  // 수정 버튼 클릭 처리
  const handleEdit = () => {
    if (selectedStudyId) {
      onEdit();
    }
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={handleClose}
      size="CUSTOM"
      style={{
        width: "min(90vw, 500px)",
        height: "min(80vh, 500px)",
        maxWidth: "500px",
      }}
    >
      <div
        id="study-modal-anchor"
        className="relative w-full h-full p-6 overflow-visible"
      >
        {/* 스터디 상세 내용 */}
        <div className="text-center mt-2 mb-16">
          {/* 로딩 상태 */}
          {isStudyLoading && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                스터디 {(selectedIndex ?? 0) + 1}
              </h3>
              <div className="flex justify-center items-center h-64">
                <div className="text-gray-500">
                  <p>로딩 중...</p>
                </div>
              </div>
            </div>
          )}

          {/* 에러 상태 */}
          {studyError && !isStudyLoading && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                스터디 {(selectedIndex ?? 0) + 1}
              </h3>
              <div className="flex justify-center items-center h-64">
                <div className="text-red-500">
                  <p>스터디를 불러오는데 실패했습니다.</p>
                  <p className="text-sm mt-2">{studyError.message}</p>
                </div>
              </div>
            </div>
          )}

          {/* 데이터가 있는 경우 */}
          {selectedStudy && !isStudyLoading && !studyError && (
            <div className="h-full flex items-center justify-center">
              {/* 이미지 우선 표시, 없으면 텍스트 컨텐츠 표시 */}
              {selectedStudy.firstImage ? (
                <img 
                  src={selectedStudy.firstImage}
                  alt="스터디 이미지"
                  className="max-w-full max-h-full object-contain rounded-lg"
                  onError={(e) => {
                    
                    // 이미지 로드 실패시 텍스트 컨텐츠로 대체
                    e.target.style.display = 'none';
                    const fallbackDiv = e.target.nextSibling;
                    if (fallbackDiv) {
                      fallbackDiv.style.display = 'block';
                    }
                  }}
                />
              ) : null}
              
              {/* 이미지가 없거나 로드 실패시 텍스트 컨텐츠 표시 */}
              <div 
                className={`prose prose-sm max-w-full px-4 text-gray-700 overflow-auto ${selectedStudy.firstImage ? 'hidden' : 'block'}`}
                dangerouslySetInnerHTML={{
                  __html: mapImagesToContent(selectedStudy.content, selectedStudy.images) || '내용이 없습니다.'
                }}
                style={{
                  maxWidth: '100%',
                  wordBreak: 'break-word'
                }}
              />
            </div>
          )}

          {/* 빈 슬롯인 경우 (ID가 없거나 데이터가 없음) */}
          {!selectedStudyId && !isStudyLoading && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                빈 슬롯 {(selectedIndex ?? 0) + 1}
              </h3>
              <p className="text-gray-500">아직 작성된 글이 없습니다.</p>
              <p className="text-sm text-gray-400 mt-2">새 글을 작성해보세요!</p>
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-24">
          {/* 수정 버튼 - 실제 스터디 데이터가 있을 때만 활성화 */}
          <Button
            variant="secondary"
            onClick={handleEdit}
            disabled={!selectedStudyId || isStudyLoading}
            style={{
              width: '120px',
              height: '40px',
              backgroundColor: 'transparent',
              color: (!selectedStudyId || isStudyLoading) ? COLORS.GRAY : COLORS.PRIMARY,
              borderColor: (!selectedStudyId || isStudyLoading) ? COLORS.GRAY : COLORS.PRIMARY,
              transition: 'background-color .2s, color .2s',
              cursor: (!selectedStudyId || isStudyLoading) ? 'not-allowed' : 'pointer'
            }}
          >
            {isStudyLoading ? '로딩...' : '수정'}
          </Button>

          {/* 닫기 버튼 */}
          <Button
            variant="outline"
            onClick={handleClose}
            style={{ width: '120px', height: '40px' }}
          >
            닫기
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}