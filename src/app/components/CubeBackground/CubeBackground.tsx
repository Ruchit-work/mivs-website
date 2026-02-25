"use client";

/**
 * Stripe-style 3D cubes: soft shadows, varied sizes, muted palette (white / green / peach),
 * slow individual rotation. CodePen pqt/MEvRyX style.
 */
const CUBES = [
  { id: 1, size: "m", pos: "right", tint: "white" },
  { id: 2, size: "s", pos: "left", tint: "green" },
  { id: 3, size: "xs", pos: "center", tint: "peach" },
  { id: 4, size: "s", pos: "bottom", tint: "white" },
];

function Cube({ id, size, pos, tint }: { id: number; size: string; pos: string; tint: string }) {
  return (
    <div className={`cube-bg__cube cube-bg__cube--${id} cube-bg__cube--${size} cube-bg__cube--${pos} cube-bg__cube--${tint}`}>
      <div className="cube-bg__shadow" aria-hidden />
      <div className="cube-bg__sides">
        <div className="cube-bg__side cube-bg__side--front" />
        <div className="cube-bg__side cube-bg__side--back" />
        <div className="cube-bg__side cube-bg__side--left" />
        <div className="cube-bg__side cube-bg__side--right" />
        <div className="cube-bg__side cube-bg__side--top" />
        <div className="cube-bg__side cube-bg__side--bottom" />
      </div>
    </div>
  );
}

export default function CubeBackground({ className = "" }: { className?: string }) {
  return (
    <div className={`cube-bg ${className}`} aria-hidden>
      <div className="cube-bg__scene">
        {CUBES.map((c) => (
          <Cube key={c.id} id={c.id} size={c.size} pos={c.pos} tint={c.tint} />
        ))}
      </div>
    </div>
  );
}
