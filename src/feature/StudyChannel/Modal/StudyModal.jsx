import { createPortal } from "react-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useStudyChannelStore from "../../../stores/studyChannelStore.js";
import { useModalPosition } from "../hooks/useModalPosition.js";
import NavigationButton from "../components/NavigationButton.jsx";
import ModalOverlay, { ModalBox } from "../components/ModalOverlay.jsx";

export default function StudyModal({ children }) {
  const { 
    modals: { study: isOpen },
    study: { currentIndex },
    closeModal,
    navigateStudy 
  } = useStudyChannelStore();
  
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
        <div className="w-full h-full flex items-center justify-center bg-white">
          <span className="text-gray-700 font-semibold">이미지 {currentIndex + 1}</span>
        </div>
        {children}
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
