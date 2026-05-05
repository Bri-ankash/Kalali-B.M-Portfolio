import Hero from "./components/hero";
import Projects from "./components/projects";
import HireMe from "./components/hire-me";
import ThemeToggle from "./components/theme-toggle";

export default function Home() {
  return (
    <main className="bg-black text-white">

      <ThemeToggle />

      <Hero />

      <Projects />

      <div className="px-6 max-w-5xl mx-auto pb-24">
        <HireMe />
      </div>

    </main>
  );
}
