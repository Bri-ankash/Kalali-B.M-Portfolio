"use client";

import { Mail, MessageCircle, Phone, Code } from "lucide-react";

export default function HireMe() {
  return (
    <section className="px-6 max-w-5xl mx-auto py-24">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Let’s build something impactful
        </h2>

        <p className="text-gray-400 mt-3">
          Open to internships, remote roles, and SaaS engineering opportunities.
        </p>
      </div>

      {/* CLEAN INLINE CONTACTS */}
      <div className="flex flex-col items-center gap-4 text-gray-300">

        <a
          href="mailto:Briankash61@gmail.com"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Mail size={16} />
          Briankash61@gmail.com / Kaliworks61@gmail.com
        </a>

        <a
          href="https://wa.me/254746951739"
          target="_blank"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <MessageCircle size={16} />
          WhatsApp / Call / SMS: 0746951739 / 0718073997
        </a>

        <a
          href="https://github.com/Bri-ankash"
          target="_blank"
          className="flex items-center gap-2 hover:text-white transition"
        >
          <Code size={16} />
          GitHub Profile
        </a>

      </div>

    </section>
  );
}
