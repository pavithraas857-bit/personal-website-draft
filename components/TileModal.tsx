"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Tile } from "@/lib/types";

interface TileModalProps {
  tile: Tile | null;
  onClose: () => void;
}

export default function TileModal({ tile, onClose }: TileModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    if (tile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [tile]);

  return (
    <AnimatePresence>
      {tile && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(4, 8, 20, 0.85)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
        >
          {/* Backdrop blur layer */}
          <div className="absolute inset-0 backdrop-blur-sm" />

          <motion.div
            key="modal-card"
            className="relative glass rounded-2xl w-full max-w-2xl max-h-[90vh]
                       overflow-y-auto border border-blue-500/30
                       shadow-[0_0_60px_rgba(59,130,246,0.15)]"
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Thumbnail banner */}
            <div
              className="h-52 relative flex items-center justify-center rounded-t-2xl overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${tile.theme.gradientFrom}, ${tile.theme.gradientTo})`,
              }}
            >
              {/* Grid overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
                  backgroundSize: "22px 22px",
                }}
              />
              {/* Glow */}
              <div
                className="absolute w-48 h-48 rounded-full opacity-25 blur-3xl"
                style={{ background: tile.theme.accentColor }}
              />
              {/* Icon */}
              <div
                className="relative w-16 h-16 text-white/80"
                dangerouslySetInnerHTML={{ __html: tile.theme.svgIcon }}
              />
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full
                           bg-black/40 hover:bg-black/60 text-white/70 hover:text-white
                           flex items-center justify-center transition-all text-lg leading-none"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full border"
                style={{
                  color: tile.theme.accentColor,
                  borderColor: `${tile.theme.accentColor}44`,
                  background: `${tile.theme.accentColor}12`,
                }}
              >
                {tile.dateRange}
              </span>

              <h2 className="text-xl md:text-2xl font-bold text-slate-100 mt-3 mb-1 leading-snug">
                {tile.title}
              </h2>
              <p className="text-slate-300 mb-0.5">{tile.organization}</p>
              <p className="text-sm text-slate-500 mb-6">{tile.location}</p>

              {/* Bullet points */}
              <ul className="space-y-4 mb-7">
                {tile.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300 leading-relaxed">
                    <span
                      className="mt-0.5 shrink-0 font-bold"
                      style={{ color: tile.theme.accentColor }}
                    >
                      ▹
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* All tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-blue-900/30">
                {tile.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full border bg-slate-800/60 text-slate-300 border-slate-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
