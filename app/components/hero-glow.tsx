"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const DESKTOP_PARTICLES = 96;
const MOBILE_PARTICLES = 58;
const CONNECT_DISTANCE = 165;
const CLOSE_REPEL_DISTANCE = 34;
const PARTICLE_GRAVITY = 0.014;
const POINTER_RADIUS = 210;
const POINTER_FORCE = 0.08;
const MAX_SPEED = 2.4;
const DAMPING = 0.985;

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  mass: number;
  radius: number;
};

export default function HeroGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const currentCanvas = canvasRef.current;
    if (!currentCanvas) return;
    const canvasElement: HTMLCanvasElement = currentCanvas;
    const context = canvasElement.getContext("2d");
    if (!context) return;
    const ctx: CanvasRenderingContext2D = context;

    let animationId: number | undefined;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reduceMotion = motionQuery.matches;
    const isDark = resolvedTheme === "dark";
    const rgb = isDark ? "0,229,190" : "0,71,255";
    const pointer = {
      x: 0,
      y: 0,
      active: false,
    };

    function clamp(value: number, max: number) {
      return Math.max(-max, Math.min(max, value));
    }

    function particleCount() {
      return window.innerWidth < 768 ? MOBILE_PARTICLES : DESKTOP_PARTICLES;
    }

    function createParticle(): Particle {
      const mass = 0.6 + Math.random() * 1.6;

      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        mass,
        radius: 1.1 + mass * 0.85,
      };
    }

    function createParticles() {
      particles = Array.from({ length: particleCount() }, createParticle);
    }

    function sizeCanvas() {
      const rect = canvasElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      canvasElement.width = Math.floor(width * dpr);
      canvasElement.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function connectParticles() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);

          if (dist < 1) continue;

          if (!reduceMotion && dist < CLOSE_REPEL_DISTANCE) {
            const force = (PARTICLE_GRAVITY * 9) / distSq;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            particles[i].vx -= fx * particles[j].mass;
            particles[i].vy -= fy * particles[j].mass;
            particles[j].vx += fx * particles[i].mass;
            particles[j].vy += fy * particles[i].mass;
          } else if (dist < CONNECT_DISTANCE) {
            if (!reduceMotion) {
              const force =
                (PARTICLE_GRAVITY * particles[i].mass * particles[j].mass) /
                Math.max(distSq, 80);
              const fx = (dx / dist) * force;
              const fy = (dy / dist) * force;

              particles[i].vx += fx;
              particles[i].vy += fy;
              particles[j].vx -= fx;
              particles[j].vy -= fy;
            }

            const alpha = (1 - dist / CONNECT_DISTANCE) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${rgb},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function applyPointerField() {
      if (!pointer.active || reduceMotion) return;

      for (const p of particles) {
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const distSq = dx * dx + dy * dy;

        if (distSq > POINTER_RADIUS * POINTER_RADIUS || distSq < 1) continue;

        const dist = Math.sqrt(distSq);
        const force = ((POINTER_RADIUS - dist) / POINTER_RADIUS) * POINTER_FORCE;

        p.vx += (dx / dist) * force * (2.2 / p.mass);
        p.vy += (dy / dist) * force * (2.2 / p.mass);
      }
    }

    function moveParticles() {
      for (const p of particles) {
        p.vx = clamp(p.vx * DAMPING, MAX_SPEED);
        p.vy = clamp(p.vy * DAMPING, MAX_SPEED);
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -8) p.x = width + 8;
        if (p.x > width + 8) p.x = -8;
        if (p.y < -8) p.y = height + 8;
        if (p.y > height + 8) p.y = -8;
      }
    }

    function drawParticles() {
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},0.58)`;
        ctx.fill();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      connectParticles();
      applyPointerField();
      if (!reduceMotion) moveParticles();
      drawParticles();

      if (!reduceMotion) {
        animationId = requestAnimationFrame(draw);
      }
    }

    function restart() {
      if (animationId !== undefined) cancelAnimationFrame(animationId);
      animationId = undefined;
      sizeCanvas();
      draw();
    }

    function updatePointer(event: PointerEvent) {
      const rect = canvasElement.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      pointer.x = x;
      pointer.y = y;
      pointer.active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
    }

    function releasePointer() {
      pointer.active = false;
    }

    function handleMotionChange() {
      reduceMotion = motionQuery.matches;
      restart();
    }

    const resizeObserver = new ResizeObserver(restart);

    restart();
    resizeObserver.observe(canvasElement);
    window.addEventListener("pointermove", updatePointer);
    window.addEventListener("pointerdown", updatePointer);
    window.addEventListener("pointerup", releasePointer);
    window.addEventListener("blur", releasePointer);
    motionQuery.addEventListener("change", handleMotionChange);

    return () => {
      if (animationId !== undefined) cancelAnimationFrame(animationId);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", updatePointer);
      window.removeEventListener("pointerdown", updatePointer);
      window.removeEventListener("pointerup", releasePointer);
      window.removeEventListener("blur", releasePointer);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      style={{ opacity: 0.78 }}
    />
  );
}
