"use client";

import HeroGlow from "./hero-glow";
import { motion } from "framer-motion";

const techStack = [
  "FastAPI", "React", "Next.js", "PostgreSQL", "TypeScript",
  "Python", "JavaScript", "Node.js", "SQLite", "Neon DB",
  "Tailwind CSS", "REST APIs", "JWT Auth", "OAuth2", "Docker",
  "Git", "GitHub", "Render", "Vercel", "M-Pesa API",
  "WebSockets", "Framer Motion", "Linux", "Bash", "Redis",
  "HTML5", "CSS3", "Figma", "Prisma", "Pydantic",
];

const floatVariants = ["floatA", "floatB", "floatC"];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden pt-24 pb-12">

      <HeroGlow />

      {/* TOP — Name + Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10 max-w-4xl mx-auto w-full"
      >
        <span
          className="inline-block text-xs mono tracking-widest uppercase mb-5 px-3 py-1 rounded-full border"
          style={{ color: "var(--accent)", borderColor: "var(--card-border)", backgroundColor: "var(--card-bg)" }}
        >
          Open to remote roles · Nairobi, Kenya
        </span>

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight" style={{ color: "var(--header-color)" }}>
          KALALI <span style={{ color: "var(--accent)" }}>B.M</span>
        </h1>

        <p className="text-xl md:text-2xl font-semibold mt-3" style={{ color: "var(--text-muted)" }}>
          Full-Stack Software Engineer
        </p>

        <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
          I engineer production-ready systems from the ground up — fintech platforms, SaaS products,
          and APIs that handle real money and real users. I work across the full stack with a bias
          toward reliability, clean architecture, and shipping things that actually work.
        </p>
      </motion.div>

      {/* FLOATING TECH CLOUD */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="z-10 max-w-4xl mx-auto w-full mt-14"
      >
        <p className="text-xs mono tracking-widest uppercase mb-6" style={{ color: "var(--text-muted)" }}>
          Technologies
        </p>

        <div className="flex flex-wrap gap-3 justify-start">
          {techStack.map((tech, i) => (
            <span
              key={tech}
              className="text-xs mono px-3 py-1.5 rounded-full border select-none cursor-default"
              style={{
                borderColor: "var(--card-border)",
                color: "var(--text-muted)",
                backgroundColor: "var(--card-bg)",
                animationName: floatVariants[i % 3],
                animationDuration: `${3.5 + (i % 5) * 0.7}s`,
                animationDelay: `${(i % 7) * 0.2}s`,
                animationTimingFunction: "ease-in-out",
                animationIterationCount: "infinite",
                display: "inline-block",
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
