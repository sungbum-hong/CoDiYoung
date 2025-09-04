import BaseModal from '../../../../ui/BaseModal';
import Button from '../../../../ui/Button';
import { COLORS } from '../../../../utils/colors';

export default function StudyModal({ 
  isOpen, 
  onClose, 
  selectedItem, 
  selectedStudy, 
  onEdit,
  getFirstImageFromContent 
}) {
  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
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
          {selectedStudy ? (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                스터디 {(selectedItem ?? 0) + 1}
              </h3>
              <div className="flex justify-center items-center h-64">
                {getFirstImageFromContent(selectedStudy.content) ? (
                  <img 
                    src={getFirstImageFromContent(selectedStudy.content)}
                    alt="스터디 이미지"
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                ) : (
                  <div className="text-center text-gray-500">
                    <p>이미지 없음</p>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                빈 슬롯 {(selectedItem ?? 0) + 1}
              </h3>
              <p className="text-gray-500">아직 작성된 글이 없습니다.</p>
              <p className="text-sm text-gray-400 mt-2">새 글을 작성해보세요!</p>
            </div>
          )}
        </div>

        {/* 하단 버튼 */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-24">
          <Button
            variant="outline"
            onClick={onEdit}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = COLORS.PRIMARY;
            }}
            style={{
              width: '120px',
              height: '40px',
              backgroundColor: 'transparent',
              color: COLORS.PRIMARY,
              borderColor: COLORS.PRIMARY,
              transition: 'background-color .2s, color .2s',
            }}
          >
            수정
          </Button>
          
          <Button
            variant="outline"
            onClick={onClose}
            style={{ width: '120px', height: '40px' }}
          >
            닫기
          </Button>
        </div>
      </div>
    </BaseModal>
  );
}