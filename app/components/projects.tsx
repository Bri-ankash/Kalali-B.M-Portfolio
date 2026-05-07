"use client";

import Link from "next/link";

const projects = [
  {
    name: "Servigo",
    desc: "African service marketplace with M-Pesa escrow, Servigo Score trust algorithm, private booking chat, provider portfolios, and 180+ service categories across Kenya.",
    slug: "servigo",
    tag: "Marketplace · SaaS",
    stack: ["FastAPI", "React", "PostgreSQL", "M-Pesa"],
    status: "Live",
  },
  {
    name: "Smart Pochi",
    desc: "M-Pesa PDF/CSV financial analysis platform with cash flow forecasting, net worth tracking, tax estimation, and 7 premium intelligence dashboards.",
    slug: "smart-pochi",
    tag: "Fintech · SaaS",
    stack: ["FastAPI", "PostgreSQL", "Python", "Neon DB"],
    status: "Live",
  },
  {
    name: "ChamaKash",
    desc: "Group savings and investment coordination platform built for African chama groups — contribution tracking, lending, and financial reporting.",
    slug: "chamakash",
    tag: "Fintech · Savings",
    stack: ["FastAPI", "React", "PostgreSQL"],
    status: "In Development",
  },
  {
    name: "Dishi Poa",
    desc: "Food ordering and delivery optimization platform for local Kenyan restaurants with real-time order management and driver dispatch.",
    slug: "dishi-poa",
    tag: "E-commerce · Logistics",
    stack: ["Next.js", "Node.js", "PostgreSQL"],
    status: "In Development",
  },
  {
    name: "Tovia Academy",
    desc: "Structured digital learning platform with course management, progress tracking, and cohort-based learning flows.",
    slug: "tovia-academy",
    tag: "EdTech · Platform",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    status: "In Development",
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
          Engineering Case Studies
        </h2>
        <p className="mt-3 max-w-xl" style={{ color: "var(--text-muted)" }}>
          Production systems built for real users across fintech, SaaS, and marketplace verticals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
            <div className="project-card h-full flex flex-col justify-between min-h-[260px]">

              {/* Top row */}
              <div>
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl font-extrabold mono" style={{ color: "var(--card-border)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: p.status === "Live" ? "#22c55e" : "var(--text-muted)" }}
                    />
                    <span className="text-xs mono" style={{ color: "var(--text-muted)" }}>
                      {p.status}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-2 transition-colors" style={{ color: "var(--header-color)" }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                  {p.desc}
                </p>

                {/* Stack pills */}
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs mono px-2 py-0.5 rounded border"
                      style={{ borderColor: "var(--card-border)", color: "var(--text-muted)" }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
                <span className="text-xs mono" style={{ color: "var(--text-muted)" }}>{p.tag}</span>
                <span className="text-sm font-semibold flex items-center gap-1 transition-all group-hover:gap-2"
                  style={{ color: "var(--accent)" }}>
                  Case study <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
