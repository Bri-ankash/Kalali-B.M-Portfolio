"use client";

import HeroGlow from "./hero-glow";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-6 md:px-16 overflow-hidden">

      <HeroGlow />

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 z-10 max-w-xl"
      >
        <span
          className="inline-block text-xs font-mono tracking-widest uppercase mb-4 px-3 py-1 rounded-full border"
          style={{
            color: "var(--accent)",
            borderColor: "var(--card-border)",
            backgroundColor: "var(--card-bg)",
          }}
        >
          Available for hire
        </span>

        <h1
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
          style={{ color: "var(--header-color)" }}
        >
          KALALI<br />
          <span style={{ color: "var(--accent)" }}>B.M</span>
        </h1>

        <p
          className="text-xl md:text-2xl font-semibold mt-4"
          style={{ color: "var(--accent-soft)" }}
        >
          Full-Stack Software Engineer
        </p>

        <p
          className="mt-5 max-w-lg leading-relaxed text-base"
          style={{ color: "var(--text-muted)" }}
        >
          I turn ideas into working software — building platforms, systems, and
          tools that are practical, scalable, and ready for real-world use.
          Strong on both frontend and backend, focused on performance and
          reliability. Built to work, built to last.
        </p>

        <div className="flex flex-wrap gap-2 mt-8">
          {["FastAPI", "React", "Next.js", "PostgreSQL", "TypeScript", "M-Pesa"].map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full border font-mono"
              style={{
                borderColor: "var(--card-border)",
                color: "var(--text-muted)",
                backgroundColor: "var(--card-bg)",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* RIGHT — Photo placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 hidden md:flex justify-center z-10"
      >
        <div
          className="w-72 h-72 md:w-80 md:h-80 rounded-2xl flex items-center justify-center backdrop-blur"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--card-border)",
          }}
        >
          <span style={{ color: "var(--text-muted)" }}>Your Photo</span>
        </div>
      </motion.div>

    </section>
  );
}
