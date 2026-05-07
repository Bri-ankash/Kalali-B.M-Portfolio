"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Download } from "lucide-react";
import HeroGlow from "./hero-glow";

const techStack = [
  "FastAPI",
  "React",
  "Next.js",
  "PostgreSQL",
  "TypeScript",
  "Python",
  "JavaScript",
  "Node.js",
  "SQLite",
  "Neon DB",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
  "OAuth2",
  "Docker",
  "Git",
  "GitHub",
  "Render",
  "Vercel",
  "M-Pesa API",
  "WebSockets",
  "Framer Motion",
  "Linux",
  "Bash",
  "Redis",
  "HTML5",
  "CSS3",
  "Figma",
  "Prisma",
  "Pydantic",
];

const floatVariants = ["floatA", "floatB", "floatC"];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative isolate min-h-screen overflow-hidden px-6 pb-16 pt-24 md:px-12 lg:px-16">
      <HeroGlow />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-10rem)] w-full max-w-6xl flex-col justify-center gap-14">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1
            className="text-5xl font-extrabold tracking-tight md:text-7xl lg:text-8xl"
            style={{ color: "var(--header-color)" }}
          >
            KALALI <span style={{ color: "var(--accent)" }}>B.M</span>
          </h1>

          <p
            className="mt-4 text-xl font-semibold md:text-2xl"
            style={{ color: "var(--accent-soft)" }}
          >
            Full-Stack Software Engineer
          </p>
        </motion.div>

        <div className="hero-bio-layout">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="hero-bio-copy"
          >
            <p
              className="max-w-2xl text-base leading-8 md:text-lg"
              style={{ color: "var(--text-muted)" }}
            >
              I build complete software systems - from the database schema to
              the UI the user touches. I have shipped fintech platforms that
              process real M-Pesa transactions, marketplace systems with trust
              algorithms, and SaaS tools with subscription billing.
              Software developer from KCA UNIVERSITY. Production-hardened and
              comfortable owning an entire product end-to-end.
            </p>

            <a
              href="/brian-kalali-cv.pdf"
              download
              className="download-cv-button mt-7"
              aria-label="Download Brian Kalali Musau CV as a PDF"
            >
              <Download size={16} aria-hidden="true" />
              <span>Download CV</span>
            </a>
          </motion.div>

          <motion.figure
            initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="hero-bio-photo"
          >
            <div
              className="relative aspect-[4/5] w-full overflow-hidden rounded-[8px] border"
              style={{
                borderColor: "var(--card-border)",
                boxShadow: "0 18px 60px var(--accent-glow)",
              }}
            >
              <Image
                src="/brian.png"
                alt="Portrait of Kalali B.M, full-stack software engineer"
                fill
                sizes="(min-width: 1024px) 384px, (min-width: 768px) 288px, 304px"
                className="object-cover object-top"
                priority
              />
            </div>
            <figcaption className="sr-only">
              Kalali B.M profile photo
            </figcaption>
          </motion.figure>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          <p
            className="mb-6 text-center text-xs uppercase tracking-widest mono lg:text-left"
            style={{ color: "var(--text-muted)" }}
          >
            Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            {techStack.map((tech, i) => (
              <span
                key={tech}
                className="select-none rounded-full border px-3 py-1.5 text-xs mono"
                style={{
                  borderColor: "var(--card-border)",
                  color: "var(--text-muted)",
                  backgroundColor: "var(--card-bg)",
                  animationName: shouldReduceMotion
                    ? undefined
                    : floatVariants[i % 3],
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
      </div>
    </section>
  );
}
