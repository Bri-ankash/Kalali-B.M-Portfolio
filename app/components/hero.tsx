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

      <div className="z-10 max-w-4xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">

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

          <p className="mt-6 leading-relaxed" style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            I build complete software systems — from the database schema to the
            UI the user touches. I have shipped fintech platforms that process
            real M-Pesa transactions, marketplace systems with trust algorithms,
            and SaaS tools with subscription billing. Self-taught, production-hardened,
            and comfortable owning an entire product end-to-end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0"
        >
          <div
            className="w-56 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border"
            style={{ borderColor: "var(--card-border)", boxShadow: "0 8px 40px var(--accent-glow)" }}
          >
            <Image
              src="/brian.png"
              alt="Kalali B.M"
              width={320}
              height={400}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
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
