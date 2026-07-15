"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type ReactElement,
  type ReactNode,
} from "react";

const INTERVAL_MS = 4000;

export function CompanyCarousel({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const [loop, setLoop] = useState(false);

  const items = Children.toArray(children).filter(
    isValidElement,
  ) as ReactElement[];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const check = () => {
      const firstChild = el.firstElementChild as HTMLElement | null;
      if (!firstChild || items.length === 0) {
        setLoop(false);
        return;
      }
      const gap = parseFloat(window.getComputedStyle(el).columnGap || "0");
      const originalWidth =
        firstChild.offsetWidth * items.length + gap * (items.length - 1);
      setLoop(originalWidth > el.clientWidth);
    };

    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items.length]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || !loop) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (isPausedRef.current) return;

      const firstChild = el.firstElementChild as HTMLElement | null;
      if (!firstChild) return;

      const gap = parseFloat(window.getComputedStyle(el).columnGap || "0");
      const step = firstChild.offsetWidth + gap;
      const oneSetWidth = items.length * step;

      if (el.scrollLeft >= oneSetWidth) {
        el.scrollTo({ left: el.scrollLeft - oneSetWidth, behavior: "instant" });
      }
      el.scrollBy({ left: step, behavior: "smooth" });
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [loop, items.length]);

  const pause = () => {
    isPausedRef.current = true;
  };
  const resume = () => {
    isPausedRef.current = false;
  };

  return (
    <div
      ref={scrollRef}
      className="flex items-start gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 scroll-pl-4"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      {items}
      {loop &&
        items.map((child, i) =>
          cloneElement(child, {
            key: `clone-${i}`,
            "aria-hidden": true,
          } as Record<string, unknown>),
        )}
    </div>
  );
}
