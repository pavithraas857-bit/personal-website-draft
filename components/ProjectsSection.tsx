"use client";

import { useEffect, useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";
import type { Tile } from "@/lib/types";
import TileCard from "./TileCard";
import TileModal from "./TileModal";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  const [selectedTile, setSelectedTile] = useState<Tile | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-24 px-4 max-w-6xl mx-auto section-hidden ${visible ? "section-visible" : ""}`}
    >
      <SectionHeading>Projects</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {PROJECTS.map((tile, i) => (
          <TileCard
            key={tile.id}
            tile={tile}
            onViewDetails={setSelectedTile}
            delay={i * 100}
          />
        ))}
      </div>
      <TileModal tile={selectedTile} onClose={() => setSelectedTile(null)} />
    </section>
  );
}
