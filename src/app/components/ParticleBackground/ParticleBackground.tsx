"use client";

import { useRef, useEffect } from "react";

const PARTICLE_COUNT = 80;
const MIN_RADIUS = 2;
const MAX_RADIUS = 4;
const BASE_SPEED = 0.4;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  directionX: number;
  directionY: number;
  radius: number;
  color: string;
  float: () => void;
  boundaryCheck: (ww: number, wh: number) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

function createParticle(ww: number, wh: number): Particle {
  const directionX = Math.random() > 0.5 ? 1 : -1;
  const directionY = Math.random() > 0.5 ? 1 : -1;
  const alpha = 0.45 + Math.random() * 0.45;
  const particle: Particle = {
    x: Math.random() * ww,
    y: Math.random() * wh,
    vx: BASE_SPEED * Math.random(),
    vy: BASE_SPEED * Math.random(),
    directionX,
    directionY,
    radius: MIN_RADIUS + Math.random() * (MAX_RADIUS - MIN_RADIUS),
    color: `rgba(255, 255, 255, ${alpha})`,
    float() {
      this.x += this.vx * this.directionX;
      this.y += this.vy * this.directionY;
    },
    boundaryCheck(ww, wh) {
      if (this.x >= ww) {
        this.x = ww;
        this.directionX *= -1;
      } else if (this.x <= 0) {
        this.x = 0;
        this.directionX *= -1;
      }
      if (this.y >= wh) {
        this.y = wh;
        this.directionY *= -1;
      } else if (this.y <= 0) {
        this.y = 0;
        this.directionY *= -1;
      }
    },
    draw(ctx) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },
  };
  return particle;
}

export default function ParticleBackground({
  className = "",
  particleCount = PARTICLE_COUNT,
  dotColor = "255, 255, 255",
}: {
  className?: string;
  particleCount?: number;
  dotColor?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let ww = container.clientWidth;
    let wh = container.clientHeight;

    function setSize() {
      const el = containerRef.current;
      const c = canvasRef.current;
      if (!el || !c) return;
      const context = c.getContext("2d");
      if (!context) return;
      ww = el.clientWidth;
      wh = el.clientHeight;
      if (ww <= 0 || wh <= 0) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      c.width = ww * dpr;
      c.height = wh * dpr;
      c.style.width = `${ww}px`;
      c.style.height = `${wh}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticles() {
      particlesRef.current = [];
      for (let i = 0; i < particleCount; i++) {
        const p = createParticle(ww, wh);
        p.color = `rgba(${dotColor}, ${0.45 + Math.random() * 0.45})`;
        particlesRef.current.push(p);
      }
    }

    function clear() {
      const context = canvasRef.current?.getContext("2d");
      if (!context) return;
      context.clearRect(0, 0, ww, wh);
    }

    function draw() {
      const particles = particlesRef.current;
      const context = canvasRef.current?.getContext("2d");
      if (!context) return;
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(context);
      }
    }

    function update() {
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.float();
        p.boundaryCheck(ww, wh);
      }
    }

    function animate() {
      if (ww > 0 && wh > 0) {
        clear();
        draw();
        update();
      }
      rafRef.current = requestAnimationFrame(animate);
    }

    setSize();
    createParticles();
    rafRef.current = requestAnimationFrame(animate);

    const onResize = () => {
      setSize();
      createParticles();
    };

    window.addEventListener("resize", onResize);
    const ro = new ResizeObserver(onResize);
    ro.observe(container);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [particleCount, dotColor]);

  return (
    <div ref={containerRef} className={`absolute inset-0 w-full h-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden
        style={{ display: "block" }}
      />
    </div>
  );
}
