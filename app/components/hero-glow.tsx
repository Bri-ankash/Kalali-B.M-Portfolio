"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute top-[-200px] left-1/2
          w-[600px] h-[600px]
          bg-indigo-500/20 blur-[120px]
          rounded-full
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute bottom-[-200px] right-[-150px]
          w-[500px] h-[500px]
          bg-pink-500/10 blur-[120px]
          rounded-full
        "
      />

    </div>
  );
}
