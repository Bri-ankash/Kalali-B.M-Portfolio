export const ProjectTemplate = ({
  title,
  description,
  problem,
  solution,
  tech,
  impact,
  github,
  demo,
}: {
  title: string;
  description: string;
  problem: string;
  solution: string;
  tech: string;
  impact: string;
  github?: string;
  demo?: string;
}) => {
  return (
    <>
      <h1 className="text-5xl font-bold">{title}</h1>

      <p className="text-gray-400 mt-4">{description}</p>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mt-6">

        {github && (
          <a
            href={github}
            target="_blank"
            className="px-4 py-2 rounded-lg bg-white/10 border border-white/20"
          >
            GitHub
          </a>
        )}

        {demo && (
          <a
            href={demo}
            target="_blank"
            className="px-4 py-2 rounded-lg bg-white text-black"
          >
            Live Demo
          </a>
        )}

      </div>

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
