import HeroGlow from "../components/hero-glow";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
      <HeroGlow />
      <div className="relative z-10 max-w-4xl mx-auto">
        {children}
      </div>
    </main>
  );
}
