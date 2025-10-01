"use client";
import { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[]; // Array of texts to cycle through
  speed?: number;
  deleteSpeed?: number;
  delayBetweenTexts?: number;
  initialDelay?: number;
  className?: string;
}

export default function Typewriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50,
  delayBetweenTexts = 2000,
  initialDelay = 0,
  className = "" 
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Initial delay before starting
    if (!hasStarted && initialDelay > 0) {
      const delayTimeout = setTimeout(() => {
        setHasStarted(true);
      }, initialDelay);
      return () => clearTimeout(delayTimeout);
    } else if (!hasStarted) {
      setHasStarted(true);
    }
  }, [initialDelay, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const currentText = texts[currentTextIndex];

    if (!isDeleting && currentCharIndex < currentText.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[currentCharIndex]);
        setCurrentCharIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && currentCharIndex === currentText.length) {
      // Finished typing, wait before deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenTexts);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCurrentCharIndex((prev) => prev - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentCharIndex === 0) {
      // Finished deleting, move to next text
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentCharIndex, isDeleting, hasStarted, texts, currentTextIndex, speed, deleteSpeed, delayBetweenTexts]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
