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

      {/* CONTACT GRID (clean, no borders) */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* EMAILS */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white/80">
            <Mail size={18} />
            <span>Email</span>
          </div>

          <a href="mailto:Briankash61@gmail.com" className="block text-gray-300 hover:text-white transition">
            Briankash61@gmail.com
          </a>

          <a href="mailto:Kaliworks61@gmail.com" className="block text-gray-300 hover:text-white transition">
            Kaliworks61@gmail.com
          </a>
        </div>

        {/* PHONE / WHATSAPP */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white/80">
            <Phone size={18} />
            <span>Phone / WhatsApp</span>
          </div>

          <a href="tel:+254746951739" className="block text-gray-300 hover:text-white transition">
            0746951739
          </a>

          <a href="tel:+254718073997" className="block text-gray-300 hover:text-white transition">
            0718073997
          </a>
        </div>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mt-14">

        <a
          href="mailto:Briankash61@gmail.com"
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          Email Me
        </a>

        <a
          href="https://wa.me/254746951739"
          target="_blank"
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          WhatsApp
        </a>

        <a
          href="tel:+254718073997"
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          Call Me
        </a>

        <a
          href="https://github.com/Bri-ankash"
          target="_blank"
          className="px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
        >
          <Code size={16} />
          GitHub
        </a>

      </div>

    </section>
  );
}
