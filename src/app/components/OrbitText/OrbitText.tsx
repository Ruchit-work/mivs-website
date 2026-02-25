"use client";

const CONTENT = "MIVS";
const LETTERS = [...CONTENT, ...CONTENT]; // 8 letters for full ellipse (like CodePen content_to_show)
const SLICES = LETTERS.length * 2; // 16 slices for donut (like CodePen slices = content_to_show.size * 2)

export default function OrbitText({
  className = "",
  letterColor,
}: {
  className?: string;
  letterColor?: string;
}) {
  return (
    <div
      className={`orbit-text ${className}`}
      style={
        letterColor
          ? { ["--orbit-letter-color" as string]: letterColor }
          : undefined
      }
      aria-hidden
    >
      {Array.from({ length: SLICES }, (_, sliceI) => (
        <div
          key={sliceI}
          className="orbit-text__slice"
          style={{ ["--orbit-slice-i" as string]: sliceI }}
        >
          <div className="orbit-text__inner">
            {LETTERS.map((letter, i) => (
              <span
                key={i}
                className="orbit-text__letter"
                style={{ ["--orbit-letter-i" as string]: i }}
              >
                {letter}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
