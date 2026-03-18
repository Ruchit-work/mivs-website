"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type AnimatedHeadingProps = {
  staticPrefix?: string;
  staticSuffix?: string;
  words?: string[];
  intervalMs?: number;
  className?: string;
  wordClassName?: string;
};

const DEFAULT_WORDS = [
  "Transforms",
  "Optimizes",
  "Automates",
  "Scales",
  "Accelerates",
  "Reinvents",
];

export default function AnimatedHeading({
  staticPrefix = "AI Automation That",
  staticSuffix = "How Businesses Operate",
  words = DEFAULT_WORDS,
  intervalMs = 2000,
  className = "font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 text-center",
  wordClassName = "relative inline-block text-indigo-600",
}: AnimatedHeadingProps) {
  const [index, setIndex] = useState(0);

  const minWidthCh = useMemo(() => {
    if (!words.length) return 0;
    const longest = words.reduce(
      (max, w) => (w.length > max ? w.length : max),
      0
    );
    return longest + 1;
  }, [words]);

  useEffect(() => {
    if (!words.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [words, intervalMs]);

  const currentWord = words[index] ?? "";

  return (
    <h1 className={className}>
      <span className="inline-block">{staticPrefix}&nbsp;</span>
      <span
        className="inline-flex justify-center items-baseline align-middle"
        style={{ minWidth: `${minWidthCh}ch` }}
        aria-live="polite"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={currentWord}
            className={wordClassName}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{
              duration: 0.45,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            {currentWord}
          </motion.span>
        </AnimatePresence>
      </span>
      <span className="inline-block">&nbsp;{staticSuffix}</span>
    </h1>
  );
}

