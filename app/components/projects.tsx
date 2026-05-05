import Link from "next/link";
import Reveal from "./reveal";

export default function Projects() {
  const projects = [
    { name: "Servigo", slug: "servigo" },
    { name: "Smart-Pochi", slug: "smart-pochi" },
    { name: "ChamaKash", slug: "chamakash" },
    { name: "Dishi-Poa", slug: "dishi-poa" },
    { name: "Tovia Academy", slug: "tovia-academy" }
  ];

  return (
    <section className="px-6 max-w-6xl mx-auto pb-32">

      <div className="mb-14">
        <h2 className="text-4xl font-bold">
          Engineering Case Studies
        </h2>

        <p className="text-gray-400 mt-3 max-w-xl">
          Real systems built for fintech, SaaS, and automation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">

        {projects.map((p) => (
          <Reveal key={p.slug}>
            <Link href={`/projects/${p.slug}`}>
              <div className="
                group p-6 rounded-2xl
                bg-white/5 backdrop-blur-xl
                transition-all duration-300

                hover:-translate-y-3
                hover:bg-white/10
                hover:shadow-[0_30px_80px_rgba(0,0,0,0.4)]
              ">

                <h3 className="text-xl font-semibold group-hover:text-white">
                  {p.name}
                </h3>

                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  SaaS platform • Scalable backend • Production-ready architecture
                </p>

                <p className="text-xs text-gray-500 mt-6">
                  Open case study →
                </p>

              </div>
            </Link>
          </Reveal>
        ))}

      </div>

    </section>
  );
}
