import { createPortal } from "react-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useStudyChannelStore from "../../../stores/studyChannelStore.js";
import { useModalPosition } from "../hooks/useModalPosition.js";
import NavigationButton from "../components/NavigationButton.jsx";
import ModalOverlay, { ModalBox } from "../components/ModalOverlay.jsx";
import { mapImagesToContent } from "../../../utils/imageUtils.js";

export default function StudyModal({ children }) {
  const { 
    modals: { study: isOpen },
    study: { currentIndex, items: studyItems },
    closeModal,
    navigateStudy 
  } = useStudyChannelStore();
  
  // 현재 선택된 스터디 데이터
  const currentStudy = studyItems[currentIndex];
  
  const GAP = 40;
  const BTN = 40;
  const { boxRef, pos } = useModalPosition(isOpen, GAP, BTN);

  const handlePrevious = (e) => {
    e?.stopPropagation();
    navigateStudy('prev');
  };
  
  const handleNext = (e) => {
    e?.stopPropagation();
    navigateStudy('next');
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClose={() => closeModal('study')}>
      <ModalBox 
        boxRef={boxRef} 
        onClose={() => closeModal('study')}
        width={500}
        height={500}
      >
        <div className="w-full h-full p-6 bg-white overflow-auto">
          {currentStudy ? (
            <div className="h-full flex flex-col">
              <h3 className="text-lg font-semibold mb-4">
                스터디 {currentIndex + 1}
              </h3>
              
              <div className="flex-1 flex items-start justify-center">
                <div 
                  className="prose prose-sm max-w-full text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: mapImagesToContent(currentStudy.content, currentStudy.images) || '내용이 없습니다.'
                  }}
                  style={{
                    maxWidth: '100%',
                    wordBreak: 'break-word'
                  }}
                />
              </div>
              
              {/* 작성 날짜 표시 */}
              {currentStudy.createdAt && (
                <div className="mt-4 text-sm text-gray-400 text-center">
                  {new Date(currentStudy.createdAt).toLocaleDateString('ko-KR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    weekday: 'short'
                  })}
                </div>
              )}
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <span className="text-gray-500">스터디 데이터를 불러올 수 없습니다.</span>
            </div>
          )}
        </div>
      </ModalBox>

      {/* 네비게이션 버튼들 */}
      {isOpen && pos &&
        createPortal(
          <>
            <NavigationButton
              direction="prev"
              onClick={handlePrevious}
              buttonSize={BTN}
              style={{
                left: `${pos.left}px`,
                top: `${pos.top}px`,
              }}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </NavigationButton>

            <NavigationButton
              direction="next"
              onClick={handleNext}
              buttonSize={BTN}
              style={{
                right: `${pos.right}px`,
                top: `${pos.top}px`,
              }}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </NavigationButton>
          </>,
          document.body
        )}
    </ModalOverlay>
  );
}
