import Image from "next/image";

export const ProjectTemplate = ({
  title,
  description,
  problem,
  solution,
  tech,
  impact,
  github,
  demo,
  screenshot,
  screenshotAlt,
}: {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string;
  impact: string;
  github?: string;
  demo?: string;
  screenshot?: string;
  screenshotAlt?: string;
}) => {
  return (
    <>
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="text-gray-400 mt-4">{description}</p>

      <div className="mt-7 flex flex-wrap items-center gap-5">

        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-32 rounded-[8px] border border-white/20 bg-white/10 px-5 py-2.5 text-center font-semibold transition hover:border-white/40 hover:bg-white/15"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-32 rounded-[8px] bg-white px-5 py-2.5 text-center font-semibold text-black transition hover:bg-white/90"
          >
            Live Demo
          </a>
        )}

      </div>

      {screenshot && (
        <div className="mt-8 overflow-hidden rounded-[8px] border border-white/10 bg-white/5 shadow-2xl shadow-black/30">
          <Image
            src={screenshot}
            alt={screenshotAlt ?? `${title} live demo screenshot`}
            width={1440}
            height={900}
            className="h-auto w-full"
            priority
          />
        </div>
      )}

      <section className="mt-10 space-y-6">

        <div>
          <h2 className="text-xl font-semibold text-red-400">Problem</h2>
          <p className="text-gray-300 mt-2">{problem}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-green-400">Solution</h2>
          <p className="text-gray-300 mt-2">{solution}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-400">Tech Stack</h2>
          <p className="text-gray-300 mt-2">{tech}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-purple-400">Impact</h2>
          <p className="text-gray-300 mt-2">{impact}</p>
        </div>

      </section>
    </>
  );
};
