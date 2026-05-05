"use client";

import { useState } from "react";

export default function ProjectModal({
  name,
  description,
}: {
  name: string;
  description: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-xs text-gray-400 mt-6"
      >
        Open case study →
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-zinc-900 p-8 rounded-2xl max-w-lg w-full">

            <h2 className="text-2xl font-bold">{name}</h2>

            <p className="text-gray-400 mt-4">
              {description}
            </p>

            <button
              onClick={() => setOpen(false)}
              className="mt-6 px-4 py-2 bg-white text-black rounded-lg"
            >
              Close
            </button>

          </div>

        </div>
      )}
    </>
  );
}
