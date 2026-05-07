"use client";

import Link from "next/link";

const projects = [
  {
    name: "Servigo",
    desc: "African service marketplace with M-Pesa escrow, trust scoring, and 180+ service categories.",
    slug: "servigo",
    tag: "Marketplace · SaaS",
  },
  {
    name: "Smart Pochi",
    desc: "M-Pesa PDF/CSV financial analysis SaaS with AI-powered insights, forecasting, and premium dashboards.",
    slug: "smart-pochi",
    tag: "Fintech · SaaS",
  },
  {
    name: "ChamaKash",
    desc: "Group savings and fintech coordination platform built for African investment groups.",
    slug: "chamakash",
    tag: "Fintech · Savings",
  },
  {
    name: "Dishi Poa",
    desc: "Food ordering and delivery optimization system for local restaurants.",
    slug: "dishi-poa",
    tag: "E-commerce · Logistics",
  },
  {
    name: "Tovia Academy",
    desc: "Structured digital learning platform with course management and progress tracking.",
    slug: "tovia-academy",
    tag: "EdTech · Platform",
  },
];

export default function Projects() {
  return (
    <section className="px-6 max-w-5xl mx-auto py-16">

      <div className="mb-12">
        <span
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: "var(--accent)" }}
        >
          Selected Work
        </span>
        <h2
          className="text-4xl md:text-5xl font-extrabold mt-2"
          style={{ color: "var(--header-color)" }}
        >
          Engineering Case Studies
        </h2>
        <p className="mt-3 max-w-xl" style={{ color: "var(--text-muted)" }}>
          Systems I have built in fintech, SaaS, and automation — solving real
          problems for real people in Africa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
            <div className="project-card h-full flex flex-col justify-between">

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full border font-mono"
                    style={{
                      color: "var(--text-muted)",
                      borderColor: "var(--card-border)",
                    }}
                  >
                    {p.tag}
                  </span>
                </div>

                <h3
                  className="text-2xl font-bold mb-2 group-hover:opacity-80 transition-opacity"
                  style={{ color: "var(--header-color)" }}
                >
                  {p.name}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {p.desc}
                </p>
              </div>

              <div
                className="flex items-center gap-1 mt-6 text-sm font-medium transition-all group-hover:gap-2"
                style={{ color: "var(--accent)" }}
              >
                View case study
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </div>

            </div>
          </Link>
        ))}
      </div>

    </section>
  );
}
