"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(
  () => import("./ParticleBackground"),
  { ssr: false }
);

export default function ParticleBackgroundClient({
  particleCount = 80,
  dotColor = "255, 255, 255",
  className = "",
}: {
  particleCount?: number;
  dotColor?: string;
  className?: string;
}) {
  return (
    <ParticleBackground
      particleCount={particleCount}
      dotColor={dotColor}
      className={className}
    />
  );
}
