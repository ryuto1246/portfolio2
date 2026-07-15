"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
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

  const advance = useCallback(
    (direction: 1 | -1) => {
      const el = scrollRef.current;
      if (!el) return;
      const firstChild = el.firstElementChild as HTMLElement | null;
      if (!firstChild) return;

      const gap = parseFloat(window.getComputedStyle(el).columnGap || "0");
      const step = firstChild.offsetWidth + gap;
      const oneSetWidth = items.length * step;

      if (direction === 1) {
        if (el.scrollLeft >= oneSetWidth) {
          el.scrollTo({
            left: el.scrollLeft - oneSetWidth,
            behavior: "instant",
          });
        }
        el.scrollBy({ left: step, behavior: "smooth" });
      } else {
        if (el.scrollLeft < step) {
          el.scrollTo({
            left: el.scrollLeft + oneSetWidth,
            behavior: "instant",
          });
        }
        el.scrollBy({ left: -step, behavior: "smooth" });
      }
    },
    [items.length],
  );

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
    if (!loop) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (isPausedRef.current) return;
      advance(1);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [loop, advance]);

  const pause = () => {
    isPausedRef.current = true;
  };
  const resume = () => {
    isPausedRef.current = false;
  };

  return (
    <div
      className="relative"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
    >
      <div
        ref={scrollRef}
        data-carousel
        className="flex items-start gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 scroll-pl-4"
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
      {loop && (
        <>
          <CarouselButton
            direction="prev"
            onClick={() => advance(-1)}
          />
          <CarouselButton
            direction="next"
            onClick={() => advance(1)}
          />
        </>
      )}
    </div>
  );
}

function CarouselButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isPrev ? "前へ" : "次へ"}
      data-carousel-button
      className={`hidden md:grid place-items-center absolute top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/85 backdrop-blur-sm ring-1 ring-border/70 shadow-md text-foreground/60 hover:bg-white hover:text-foreground hover:shadow-lg transition focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 ${
        isPrev ? "left-2" : "right-2"
      }`}
    >
      <svg
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
        aria-hidden
      >
        {isPrev ? (
          <polyline points="12 15 7 10 12 5" />
        ) : (
          <polyline points="8 5 13 10 8 15" />
        )}
      </svg>
    </button>
  );
}
