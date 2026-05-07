"use client";

import Link from "next/link";

const projects = [
  {
    name: "Servigo",
    headline: "A full marketplace built from scratch — backend, frontend, trust system, payments.",
    desc: "Engineered an end-to-end service marketplace for Africa. Built a custom Servigo Score trust algorithm that ranks providers by behaviour, a private booking chat system with 30-day auto-delete, M-Pesa escrow flow, Google reCAPTCHA v3, email OTP auth, and a badge system. 20 categories, 180+ subcategories seeded. Kenyan-law Terms of Service included.",
    slug: "servigo",
    tag: "Marketplace · SaaS",
    stack: ["FastAPI", "React", "Vite", "Neon PostgreSQL", "M-Pesa"],
    status: "Live",
    url: "https://servigo-8ri4.onrender.com",
  },
  {
    name: "Smart Pochi",
    headline: "M-Pesa financial analysis SaaS — parses your statements and tells you exactly where your money goes.",
    desc: "Built a SaaS that accepts M-Pesa PDF and CSV statements, parses them, and generates financial intelligence. Includes 7 premium dashboard tabs: Cash Flow Forecast, Net Worth Tracker, Tax Estimator, Money Leak Detector, Financial Health Score, KPI Dashboard, and Loan Calculator. Migrated from SQLite to Neon PostgreSQL in production, with 2FA, admin portal, and subscription billing.",
    slug: "smart-pochi",
    tag: "Fintech · SaaS",
    stack: ["FastAPI", "Python 3.11", "Neon PostgreSQL", "Render"],
    status: "Live",
    url: "https://smart-pochi.onrender.com",
  },
  {
    name: "ChamaKash",
    headline: "Group savings infrastructure for African investment groups.",
    desc: "Designing a platform for chama groups to manage collective savings, contributions, and internal lending. Handles member roles, contribution schedules, interest calculations, and financial reporting — replacing WhatsApp groups and paper records.",
    slug: "chamakash",
    tag: "Fintech · Savings",
    stack: ["FastAPI", "React", "PostgreSQL"],
    status: "In Development",
    url: null,
  },
  {
    name: "Dishi Poa",
    headline: "Food ordering platform optimised for local Kenyan restaurants.",
    desc: "Building an order and delivery management system tailored to small restaurant operations — menu management, real-time order flow, kitchen display, and basic delivery dispatch. Designed for low-bandwidth environments.",
    slug: "dishi-poa",
    tag: "E-commerce · Logistics",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    status: "In Development",
    url: null,
  },
  {
    name: "Tovia Academy",
    headline: "A structured learning platform — not a YouTube playlist.",
    desc: "Building a cohort-based learning platform with gated course content, progress tracking, instructor dashboards, and certificate generation. Designed to replace informal WhatsApp-based tutoring with an actual product.",
    slug: "tovia-academy",
    tag: "EdTech · Platform",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    status: "In Development",
    url: null,
  },
];

export default function Projects() {
  return (
    <section className="px-6 max-w-5xl mx-auto py-16">

      <div className="mb-14">
        <span className="text-xs mono tracking-widest uppercase" style={{ color: "var(--accent)" }}>
          Selected Work
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2" style={{ color: "var(--header-color)" }}>
          What I have built
        </h2>
        <p className="mt-3 max-w-xl" style={{ color: "var(--text-muted)" }}>
          Real systems. Real users. Real money moving through them.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
            <div className="project-card">

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-extrabold mono" style={{ color: "var(--card-border)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold" style={{ color: "var(--header-color)" }}>
                      {p.name}
                    </h3>
                    <p className="text-xs mono mt-0.5" style={{ color: "var(--text-muted)" }}>{p.tag}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: p.status === "Live" ? "#22c55e" : "var(--text-muted)" }} />
                    <span className="text-xs mono" style={{ color: "var(--text-muted)" }}>{p.status}</span>
                  </div>
                  {p.url && (
                    
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs mono px-3 py-1 rounded-full border transition-colors hover:border-current"
                      style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
                    >
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {/* Headline */}
              <p className="text-base font-semibold mb-3" style={{ color: "var(--text)" }}>
                {p.headline}
              </p>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                {p.desc}
              </p>

              {/* Bottom */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs mono px-2 py-0.5 rounded border"
                      style={{ borderColor: "var(--card-border)", color: "var(--text-muted)" }}>
                      {s}
                    </span>
                  ))}
                </div>
                <span className="text-sm font-semibold flex items-center gap-1 transition-all group-hover:gap-2"
                  style={{ color: "var(--accent)" }}>
                  Read case study <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
