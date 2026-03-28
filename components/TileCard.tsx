"use client";

import type { Tile } from "@/lib/types";

interface TileCardProps {
  tile: Tile;
  onViewDetails: (tile: Tile) => void;
  delay?: number;
}

export default function TileCard({ tile, onViewDetails, delay = 0 }: TileCardProps) {
  return (
    <article
      className="glass card-glow rounded-xl overflow-hidden flex flex-col cursor-pointer"
      style={{ transitionDelay: `${delay}ms` }}
      onClick={() => onViewDetails(tile)}
    >
      {/* Thumbnail */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden shrink-0"
        style={{
          background: `linear-gradient(135deg, ${tile.theme.gradientFrom}, ${tile.theme.gradientTo})`,
        }}
      >
        {/* Grid-line depth overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.10) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute w-32 h-32 rounded-full opacity-20 blur-2xl"
          style={{ background: tile.theme.accentColor }}
        />
        {/* SVG icon */}
        <div
          className="relative w-14 h-14 text-white/75"
          dangerouslySetInnerHTML={{ __html: tile.theme.svgIcon }}
        />
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Date badge */}
        <span
          className="text-xs font-mono mb-2 inline-block px-2 py-0.5 rounded-full border w-fit"
          style={{
            color: tile.theme.accentColor,
            borderColor: `${tile.theme.accentColor}44`,
            background: `${tile.theme.accentColor}12`,
          }}
        >
          {tile.dateRange}
        </span>

        <h3 className="font-semibold text-slate-900 text-[0.95rem] leading-snug mb-1">
          {tile.title}
        </h3>
        <p className="text-sm text-slate-700 mb-0.5">{tile.organization}</p>
        <p className="text-xs text-slate-500 mb-4">{tile.location}</p>

        {/* First 3 tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {tile.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200"
            >
              {tag}
            </span>
          ))}
          {tile.tags.length > 3 && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
              +{tile.tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA */}
        <button
          className="mt-auto w-full py-2.5 text-sm border border-blue-400
                     text-blue-700 hover:text-blue-800 hover:bg-blue-50
                     hover:border-blue-500 rounded-lg transition-all font-medium"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails(tile);
          }}
        >
          View Details →
        </button>
      </div>
    </article>
  );
}
