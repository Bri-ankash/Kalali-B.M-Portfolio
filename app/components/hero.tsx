"use client";

import HeroGlow from "./hero-glow";
import { motion } from "framer-motion";
import Image from "next/image";

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

      {/* TOP ROW — Text left, Photo right */}
      <div className="z-10 max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* LEFT — Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight" style={{ color: "var(--header-color)" }}>
            KALALI <span style={{ color: "var(--accent)" }}>B.M</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold mt-4" style={{ color: "var(--text-muted)" }}>
            Full-Stack Software Engineer
          </p>

          <p className="mt-6 max-w-lg leading-relaxed" style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            I build complete software systems — from the database schema to the
            UI the user touches. I have shipped fintech platforms that process
            real M-Pesa transactions, marketplace systems with trust algorithms,
            and SaaS tools with subscription billing. Self-taught, production-hardened,
            and comfortable owning an entire product end-to-end.
          </p>
        </motion.div>

        {/* RIGHT — Photo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="shrink-0"
        >
          <div
            className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden"
            style={{ border: "1px solid var(--card-border)", boxShadow: "0 20px 60px var(--card-shadow)" }}
          >
            <Image
              src="/profile.png"
              alt="Kalali B.M"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Subtle accent overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-16"
              style={{ background: "linear-gradient(to top, var(--accent-glow), transparent)" }}
            />
          </div>
        </motion.div>

      </div>

      {/* TECH STACK — Below the row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="z-10 max-w-5xl mx-auto w-full mt-14"
      >
        <p className="text-xs mono tracking-widest uppercase mb-5" style={{ color: "var(--text-muted)" }}>
          Technologies
        </p>

        <div className="flex flex-wrap gap-3">
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
