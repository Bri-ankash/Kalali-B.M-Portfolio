"use client";

import { Mail, MessageCircle, Code } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "Briankash61@gmail.com · Kaliworks61@gmail.com",
    href: "mailto:Briankash61@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp / Call / SMS",
    value: "0746951739 · 0718073997",
    href: "https://wa.me/254746951739",
  },
  {
    icon: Code,
    label: "GitHub",
    value: "github.com/Bri-ankash",
    href: "https://github.com/Bri-ankash",
  },
];

export default function HireMe() {
  return (
    <section className="py-24">
      <div className="text-center mb-12">
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "var(--accent)" }}>
          Contact
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2" style={{ color: "var(--header-color)" }}>
          Let&apos;s build something impactful
        </h2>
        <p className="mt-3" style={{ color: "var(--text-muted)" }}>
          Open to internships, remote roles, and SaaS engineering opportunities.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 max-w-lg mx-auto">
        {contacts.map(({ icon: Icon, label, value, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer"
            className="w-full flex items-center gap-4 px-6 py-4 rounded-xl border transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--card-border)", color: "var(--text)" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)"; }}
          >
            <Icon size={18} style={{ color: "var(--accent)" }} />
            <div>
              <p className="text-xs font-mono" style={{ color: "var(--text-muted)" }}>{label}</p>
              <p className="text-sm font-medium">{value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
