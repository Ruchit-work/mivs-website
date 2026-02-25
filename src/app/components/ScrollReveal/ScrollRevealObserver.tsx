"use client";

import { useEffect } from "react";

const ROOT_MARGIN = "0px 0px -40px 0px";
const THRESHOLD = 0.05;

function observeMain(main: Element): () => void {
  if (typeof IntersectionObserver === "undefined") return () => {};
  const sections = main.querySelectorAll("section");
  const toObserve = Array.from(sections).filter(
    (el) => !el.hasAttribute("data-scroll-reveal-skip")
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.setAttribute("data-scroll-revealed", "true");
      });
    },
    { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
  );

  toObserve.forEach((el, i) => {
    el.setAttribute("data-scroll-reveal", "");
    (el as HTMLElement).style.setProperty("--reveal-i", String(i));
    io.observe(el);
  });

  return () => io.disconnect();
}

export default function ScrollRevealObserver() {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const main = document.querySelector("main");
    if (!main) return;

    let disconnect: () => void = () => {};
    try {
      disconnect = observeMain(main);
    } catch {
      return;
    }

    if (typeof MutationObserver === "undefined") {
      return () => disconnect();
    }

    const mo = new MutationObserver(() => {
      disconnect();
      try {
        disconnect = observeMain(main);
      } catch {
        disconnect = () => {};
      }
    });

    mo.observe(main, { childList: true, subtree: false });

    return () => {
      mo.disconnect();
      disconnect();
    };
  }, []);

  return null;
}
