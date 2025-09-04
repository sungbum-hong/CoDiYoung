import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function NavigationButtons({
  open,
  onPrev,
  onNext,
  color,
  gap = 48,
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