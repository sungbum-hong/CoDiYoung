import { useEffect, useRef, useState } from "react";

export function useModalPosition(isOpen, GAP = 40, BTN = 40) {
  const boxRef = useRef(null);
  const [pos, setPos] = useState(null);

  useEffect(() => {
    if (!isOpen) return;
    
    const update = () => {
      const el = boxRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const top = rect.top + rect.height / 2;
      const left = Math.max(8, rect.left - GAP - BTN);
      const right = Math.max(8, window.innerWidth - rect.right - GAP - BTN);
      setPos({ top, left, right });
    };

    update();
    const ro = new ResizeObserver(update);
    if (boxRef.current) ro.observe(boxRef.current);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    const id = requestAnimationFrame(update);
    
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
      cancelAnimationFrame(id);
    };
  }, [isOpen, GAP, BTN]);

  return { boxRef, pos };
}