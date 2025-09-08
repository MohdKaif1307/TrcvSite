import { useEffect, useRef, useState, type PropsWithChildren } from "react";

type RevealProps = PropsWithChildren<{
  className?: string;
  /** slide direction in pixels on enter */
  y?: number;
  once?: boolean;
  delayMs?: number;
}>;

export function Reveal({ children, className, y = 24, once = true, delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, delayMs]);

  return (
    <div
      ref={ref}
      className={
        `${className ?? ""} ` +
        `${visible ? "opacity-100 translate-y-0" : `opacity-0 translate-y-[${y}px]`} ` +
        "transition-all duration-700 will-change-transform"
      }
      style={{ transform: visible ? undefined : `translateY(${y}px)` }}
    >
      {children}
    </div>
  );
}


