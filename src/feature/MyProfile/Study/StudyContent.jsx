import { COLORS } from "../../../utils/colors";
import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom"; // ★ 추가
import { useNavigate } from "react-router-dom";
import BaseModal from "../../../ui/BaseModal";
import Button from "../../../ui/Button";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import DatePickerModal from "./DatePickerModal";

export default function StudyContent() {
  const TOTAL_ITEMS = 30; // 30개 고정
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = useCallback((index) => {
    setSelectedItem(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedItem(null);
  }, []);

  const handleCalendarClick = useCallback(() => {
    setIsDatePickerOpen(true);
  }, []);

  const closeDatePicker = useCallback(() => {
    setIsDatePickerOpen(false);
  }, []);

  const handleEdit = useCallback(() => {
    if (selectedItem != null) navigate(`/write/${selectedItem + 1}`);
  }, [navigate, selectedItem]);

  const handleDelete = useCallback(() => {
    if (selectedItem != null) {
      console.log(`아이템 ${selectedItem + 1} 삭제`);
      // TODO: 실제 삭제 로직 연동
    }
  }, [selectedItem]);

  // ★ 모달 내 아이템 좌/우 이동(루프)
  const goPrev = useCallback(() => {
    setSelectedItem((i) =>
      i == null ? 0 : (i - 1 + TOTAL_ITEMS) % TOTAL_ITEMS
    );
  }, []);
  const goNext = useCallback(() => {
    setSelectedItem((i) => (i == null ? 0 : (i + 1) % TOTAL_ITEMS));
  }, []);

  // ★ 모달 열렸을 때 키보드 ←/→로 이동
  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (e) => {
      const tag = (e.target?.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || e.target?.isContentEditable)
        return;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, goPrev, goNext]);

  const onCalendarEnter = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.PRIMARY;
    el.style.color = COLORS.WHITE;
  };
  const onCalendarLeave = (e) => {
    const el = e.currentTarget;
    el.style.backgroundColor = COLORS.WHITE;
    el.style.color = COLORS.PRIMARY;
  };

  const onItemKeyDown = (e, index) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleItemClick(index);
    }
  };

  return (
    <main className="flex-1 py-6 px-24 overflow-auto">
      <div className="w-full h-full">
        {/* 상단 달력 아이콘 */}
        <div className="flex justify-end mb-12">
          <button
            onClick={handleCalendarClick}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: COLORS.WHITE,
              border: `2px solid ${COLORS.PRIMARY}`,
              color: COLORS.PRIMARY,
            }}
            onMouseEnter={onCalendarEnter}
            onMouseLeave={onCalendarLeave}
            title="달력"
            aria-label="달력 열기"
          >
            <CalendarIcon className="w-5 h-5" />
          </button>
        </div>

        {/* 카드 그리드: 가로 5 × 세로 6 */}
        <div
          className="grid grid-cols-5 gap-x-2 gap-y-3"
          style={{ gridTemplateRows: "repeat(6, 1fr)" }}
        >
          {Array.from({ length: TOTAL_ITEMS }).map((_, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`아이템 ${index + 1} 열기`}
              onClick={() => handleItemClick(index)}
              onKeyDown={(e) => onItemKeyDown(e, index)}
              className="w-[90px] h-[90px] rounded-lg border-2 flex items-center justify-center cursor-pointer transition-transform duration-200 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: COLORS.GRAY_300,
                backgroundColor: COLORS.WHITE,
              }}
            >
              <span className="text-xs text-gray-400">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 상세 모달 */}
      <BaseModal
        isOpen={isModalOpen}
        onClose={closeModal}
        size="CUSTOM"
        style={{
          width: "min(90vw, 500px)",
          height: "min(80vh, 500px)",
          maxWidth: "500px",
        }}
      >
        {/* ⬇⬇⬇ 앵커 id + overflow-visible 추가 */}
        <div
          id="study-modal-anchor"
          className="relative w-full h-full p-6 overflow-visible"
        >
          {/* TODO: 상세 내용 */}
          <div className="text-center mt-2 mb-16">
            <h3 className="text-lg font-semibold">
              스터디 {(selectedItem ?? 0) + 1}
            </h3>
          </div>

          {/* 하단 버튼 */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex gap-24">
          <Button
            variant="outline"
            onClick={handleEdit}
            // ↓ hover 효과
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = COLORS.PRIMARY;
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = COLORS.PRIMARY;
            }}
  // (선택) 키보드 포커스에도 동일 효과 주고 싶으면 아래 두 줄도 추가
  // onFocus={(e) => { e.currentTarget.style.backgroundColor = COLORS.PRIMARY; e.currentTarget.style.color = 'white'; }}
  // onBlur={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = COLORS.PRIMARY; }}
            style={{
              width: '120px',
              height: '40px',
              backgroundColor: 'transparent', // 기본 상태
              color: COLORS.PRIMARY,           // 기본 텍스트 색
              borderColor: COLORS.PRIMARY,     // 외곽선 색
              transition: 'background-color .2s, color .2s',
            }}>수정
            </Button>
            <Button
              variant="outline"
              onClick={closeModal}
              style={{ width: '120px', height: '40px' }}
            >
              닫기
            </Button>
          </div>
        </div>
      </BaseModal>

      {/* ★ 모달 바깥(오버레이 위) 화살표 버튼들 */}
      <OutsideNavButtons
        open={isModalOpen}
        onPrev={goPrev}
        onNext={goNext}
        color={COLORS.PRIMARY}
        gap={48} // ← 모달과 버튼 사이 간격(px). 0에 가까울 수록 간격 좁아짐, 숫자 늘어 날수록 간격 넓어짐
        btn={40} // ← 버튼 지름(px)
      />

      {/* 달력 모달 */}
      <DatePickerModal isOpen={isDatePickerOpen} onClose={closeDatePicker} />
    </main>
  );
}

/** 모달 밖(전역)으로 포털해서 그리는 네비 버튼 */
function OutsideNavButtons({
  open,
  onPrev,
  onNext,
  color,
  gap = 12,
  btn = 40,
}) {
  const [pos, setPos] = useState({
    left: 10,
    right: 10,
    top: window.innerHeight / 2,
  });

  useEffect(() => {
    if (!open) return;

    const update = () => {
      const el = document.getElementById("study-modal-anchor");
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const top = rect.top + rect.height / 2; // 모달 세로 중앙
      // 모달 양옆으로 gap 떨어진 위치(버튼 지름 고려)
      const left = Math.max(8, rect.left - gap - btn);
      const right = Math.max(8, window.innerWidth - rect.right - gap - btn);

      setPos({ left, right, top });
    };

    // 처음 한 번 + 레이아웃 바뀔 때마다 재계산
    update();
    // 애니메이션/레이아웃 지연 대비 한 번 더
    const raf = requestAnimationFrame(update);

    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, gap, btn]);

  if (!open) return null;

  const Z = 2147483647; // 오버레이보다 위

  return createPortal(
    <>
      {/* 왼쪽 버튼 */}
      <button
        type="button"
        onClick={onPrev}
        aria-label="이전"
        className="fixed -translate-y-1/2
                   w-10 h-10 grid place-items-center rounded-full border shadow
                   bg-white text-[var(--c)] border-[var(--c)]
                   hover:bg-[var(--c)] hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-[var(--c)]/40"
        style={{
          "--c": color,
          left: `${pos.left}px`,
          top: `${pos.top}px`,
          zIndex: Z,
        }}
      >
        <ChevronLeftIcon className="w-5 h-5" />
      </button>

      {/* 오른쪽 버튼 */}
      <button
        type="button"
        onClick={onNext}
        aria-label="다음"
        className="fixed -translate-y-1/2
                   w-10 h-10 grid place-items-center rounded-full border shadow
                   bg-white text-[var(--c)] border-[var(--c)]
                   hover:bg-[var(--c)] hover:text-white
                   focus:outline-none focus:ring-2 focus:ring-[var(--c)]/40"
        style={{
          "--c": color,
          right: `${pos.right}px`,
          top: `${pos.top}px`,
          zIndex: Z,
        }}
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </>,
    document.body
  );
}
