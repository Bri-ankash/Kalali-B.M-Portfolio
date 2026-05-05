"use client";

import Link from "next/link";

const projects = [
  {
    name: "Servigo",
    desc: "SaaS system for service management and automation.",
    slug: "servigo"
  },
  {
    name: "Smart-Pochi",
    desc: "Financial tracking and smart savings system.",
    slug: "smart-pochi"
  },
  {
    name: "ChamaKash",
    desc: "Group savings and fintech coordination platform.",
    slug: "chamakash"
  },
  {
    name: "Dishi-Poa",
    desc: "Food ordering and delivery optimization system.",
    slug: "dishi-poa"
  },
  {
    name: "Tovia Academy",
    desc: "Learning platform for structured digital education.",
    slug: "tovia-academy"
  }
];

export default function Projects() {
  return (
    <section className="px-6 max-w-5xl mx-auto py-24">

      {/* UPDATED HEADER */}
      <h2 className="text-3xl font-bold mb-3">
        Engineering Case Studies
      </h2>

      <p className="text-gray-400 mb-10 max-w-2xl">
        Systems I have built in fintech, SaaS, and automation for real-world problems.
      </p>

      {/* CLEAN LIST (NO BOXES) */}
      <div className="space-y-10">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="block group"
          >
            <h3 className="text-2xl font-semibold group-hover:text-white/70 transition">
              {p.name}
            </h3>

            <p className="text-gray-400 mt-2">
              {p.desc}
            </p>

            <p className="text-sm text-white/50 mt-3 group-hover:text-white transition">
              Open case study →
            </p>
          </Link>
        ))}
      </div>

    </section>
  );
}
