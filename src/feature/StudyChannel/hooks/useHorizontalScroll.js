import { useRef } from "react";

export function useHorizontalScroll(cardSize = 100, gap = 32) {
  const railRef = useRef(null);

  const scrollByCards = (dir = 1) => {
    const rail = railRef.current;
    if (!rail) return;
    
    const computedGap = parseInt(getComputedStyle(rail).columnGap || "0", 10) || gap;
    const perPage = Math.max(1, Math.floor((rail.clientWidth + computedGap) / (cardSize + computedGap)));
    const step = perPage * (cardSize + computedGap);
    
    rail.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return {
    railRef,
    scrollByCards
  };
}