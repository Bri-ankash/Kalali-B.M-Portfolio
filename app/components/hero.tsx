"use client";

import HeroGlow from "./hero-glow";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-between px-6 md:px-16 overflow-hidden">

      {/* glow background */}
      <HeroGlow />

      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-bold">
          KALALI B.M
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mt-4">
          Full-Stack Software Engineer
        </p>

        <p className="text-gray-400 mt-6 max-w-xl leading-relaxed">
          I turn ideas into working software—building platforms, systems, and tools that are practical, scalable, and ready for real-world use. Strong on both frontend and backend, focused on performance and reliability—built to work, built to last.
        </p>
      </motion.div>

      {/* RIGHT (PHOTO PLACEHOLDER) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 flex justify-center z-10"
      >
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur">
          <span className="text-gray-400">Your Photo</span>
        </div>
      </motion.div>

    </section>
  );
}
