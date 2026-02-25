"use client";

const SPEED = 10; // higher = slower letter reveal

function splitIntoWordsAndLetters(line: string): { word: string; letters: string[] }[] {
  return line.split(" ").map((word) => ({
    word,
    letters: word.split(""),
  }));
}

interface GlitchHeroTitleProps {
  lines: string[];
  className?: string;
}

export default function GlitchHeroTitle({ lines, className = "" }: GlitchHeroTitleProps) {
  return (
    <h1
      className={`glitch-hero-title ${className}`}
      aria-label={lines.join(" ")}
    >
      {lines.map((line, lineIndex) => {
        const words = splitIntoWordsAndLetters(line);
        let globalLetterIndex = 0;
        return (
          <span key={lineIndex} className="glitch-hero-line">
            {words.flatMap(({ letters }, wordIndex) => {
              const startLetterIndex = globalLetterIndex;
              globalLetterIndex += letters.length + 1;
              const wordEl = (
                <span key={wordIndex} className="glitch-hero-word animate">
                  {letters.map((char, ci) => {
                    const delay = (startLetterIndex + ci) * 0.03 * (SPEED / 10);
                    return (
                      <span
                        key={ci}
                        className="glitch-hero-letter"
                        style={{ animationDelay: `${delay}s` }}
                        aria-hidden
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              );
              return wordIndex === 0 ? [wordEl] : [" ", wordEl];
            })}
            {lineIndex < lines.length - 1 ? <br /> : null}
          </span>
        );
      })}
    </h1>
  );
}
