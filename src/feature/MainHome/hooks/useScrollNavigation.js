import { useRef, useState, useCallback } from "react";
import { CONFIG } from "../../../constants/config.js";

export function useScrollNavigation(itemCount) {
  const scrollRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerView = CONFIG.LAYOUT.GRID.PROJECT_COLUMNS;
  const totalPages = Math.max(1, Math.ceil(itemCount / itemsPerView));

  const cardWidth = CONFIG.CARD.PROJECT.WIDTH;
  const gap = CONFIG.CARD.PROJECT.GAP;
  const scrollAmount = cardWidth + gap;

  const scroll = useCallback((direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const maxScroll = container.scrollWidth - container.clientWidth;

    if (direction === "left") {
      if (container.scrollLeft <= 0) {
        container.scrollTo({ left: maxScroll, behavior: "smooth" });
        setCurrentPage(totalPages);
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
        setCurrentPage((prev) => Math.max(1, prev - 1));
      }
    } else {
      if (container.scrollLeft >= maxScroll - 1) {
        container.scrollTo({ left: 0, behavior: "smooth" });
        setCurrentPage(1);
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        setCurrentPage((prev) => Math.min(totalPages, prev + 1));
      }
    }
  }, [scrollAmount, totalPages]);

  // 스크롤에 따라 페이지 동기화(사용자가 휠/드래그로 이동한 경우)
  const onScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const page = Math.round(container.scrollLeft / scrollAmount) + 1;
    setCurrentPage(Math.min(totalPages, Math.max(1, page)));
  };

  return {
    scrollRef,
    currentPage,
    totalPages,
    scroll,
    onScroll,
  };
}