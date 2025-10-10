"use client";

import { useEffect, useMemo, useState } from "react";

function getScrollTop() {
  return (
    window.scrollY ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

function getScrollHeight() {
  const doc = document.documentElement;
  return Math.max(
    doc.scrollHeight,
    document.body.scrollHeight,
    doc.offsetHeight,
    document.body.offsetHeight
  );
}

export default function ScrollProgressBar({
  placeBelowHeader = true,
}: { placeBelowHeader?: boolean }) {
  const [progress, setProgress] = useState(0);
  const [headerH, setHeaderH] = useState<number>(64);

  // Hauteur du header
  useEffect(() => {
    const header = document.querySelector<HTMLElement>("[data-header]");
    const measure = () => setHeaderH(header?.offsetHeight ?? 64);
    measure();
    window.addEventListener("resize", measure);
    const ro = header ? new ResizeObserver(measure) : null;
    header && ro?.observe(header);
    return () => {
      window.removeEventListener("resize", measure);
      ro?.disconnect();
    };
  }, []);

  // Scroll progress
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const top = getScrollTop();
      const max = getScrollHeight() - document.documentElement.clientHeight;
      const value = max > 0 ? top / max : 0;
      setProgress(Math.min(1, Math.max(0, value)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const style = useMemo<React.CSSProperties>(
    () =>
      placeBelowHeader
        ? { top: headerH, left: 0, right: 0 }
        : { top: 0, left: 0, right: 0 },
    [placeBelowHeader, headerH]
  );

  return (
    <div
      // 🔸 hidden on desktop, visible only below sm breakpoint
      className="fixed sm:hidden z-[60] h-0.5 pointer-events-none"
      style={style}
      aria-hidden
    >
      <div
        className="h-full bg-[var(--progress-bar,_currentColor)]"
        style={{
          width: `${progress * 100}%`,
          transition: "width 120ms linear",
        }}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress * 100)}
        aria-label="Progression de lecture"
      />
    </div>
  );
}
