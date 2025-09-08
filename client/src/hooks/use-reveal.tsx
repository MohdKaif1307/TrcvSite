import { useEffect } from "react";

function applyInitial(el: HTMLElement) {
  el.style.opacity = "0";
  el.style.transform = "translateY(16px)";
  el.style.transition = "opacity 700ms ease, transform 700ms ease";
}

function reveal(el: HTMLElement) {
  el.style.opacity = "1";
  el.style.transform = "translateY(0)";
}

export function GlobalReveal() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("section, [data-reveal]"));
    const seen = new WeakSet<HTMLElement>();

    targets.forEach((el) => applyInitial(el));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          if (!seen.has(el)) {
            seen.add(el);
            reveal(el);
            io.unobserve(el);
          }
        }
      });
    }, { threshold: 0.12 });

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}


