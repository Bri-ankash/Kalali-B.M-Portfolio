"use client";

import { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

const PARTICLE_COUNT = 80;
const MAX_DIST = 160;
const G = 0.012;
const MAX_SPEED = 1.8;
const REPEL_DIST = 30;

export default function HeroGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const isDark = resolvedTheme === "dark";
    const rgb = isDark ? "0,229,190" : "0,71,255";

    type Particle = {
      x: number; y: number;
      vx: number; vy: number;
      mass: number;
    };

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      mass: 0.5 + Math.random() * 1.5,
    }));

    function clamp(v: number, max: number) {
      return Math.max(-max, Math.min(max, v));
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      // Apply gravity between particles
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const dx = particles[j].x - particles[i].x;
          const dy = particles[j].y - particles[i].y;
          const distSq = dx * dx + dy * dy;
          const dist = Math.sqrt(distSq);

          if (dist < 1) continue;

          if (dist < REPEL_DIST) {
            // Repel when too close
            const force = G * 8 / distSq;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            particles[i].vx -= fx * particles[j].mass;
            particles[i].vy -= fy * particles[j].mass;
            particles[j].vx += fx * particles[i].mass;
            particles[j].vy += fy * particles[i].mass;
          } else if (dist < MAX_DIST) {
            // Attract within range
            const force = G * particles[i].mass * particles[j].mass / distSq;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            particles[i].vx += fx;
            particles[i].vy += fy;
            particles[j].vx -= fx;
            particles[j].vy -= fy;

            // Draw connection line
            const alpha = (1 - dist / MAX_DIST) * 0.2;
            ctx!.beginPath();
            ctx!.strokeStyle = `rgba(${rgb},${alpha})`;
            ctx!.lineWidth = 0.6;
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }

      // Move and draw
      for (const p of particles) {
        p.vx = clamp(p.vx, MAX_SPEED);
        p.vy = clamp(p.vy, MAX_SPEED);
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.mass * 1.2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${rgb},0.55)`;
        ctx!.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ opacity: 0.75 }}
    />
  );
}
