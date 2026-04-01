"use client";

import { useEffect, useRef, useState } from "react";
import { BASE_PATH } from "@/lib/data";

const PHRASES = [
  "AI & Software Engineer",
  "Building Agentic AI Systems",
  "RAG · LLM · Computer Vision",
  "Turning Ideas into Intelligence",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [heroOpacity, setHeroOpacity] = useState(1);

  // Typewriter
  const [displayText,  setDisplayText]  = useState("");
  const [phraseIndex,  setPhraseIndex]  = useState(0);
  const [charIndex,    setCharIndex]    = useState(0);
  const [isDeleting,   setIsDeleting]   = useState(false);

  // Scroll-based fade out
  useEffect(() => {
    const onScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / (window.innerHeight * 0.7));
      setHeroOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = PHRASES[phraseIndex];
    const speed   = isDeleting ? 45 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setDisplayText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (charIndex > 0) {
          setDisplayText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % PHRASES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-white"
    >
      {/* ── Left: Photo panel — capped at exactly viewport height ── */}
      <div
        className="relative w-full md:w-2/5 h-[52vh] md:h-screen shrink-0 overflow-hidden"
        style={{ opacity: heroOpacity }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE_PATH}/pavi_selfie_1.jpeg`}
          alt="Pavithraa Satchithanantham"
          className="w-full h-full object-contain object-top"
        />
        {/* Soft right-edge fade into white */}
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-r from-transparent to-white hidden md:block" />
        {/* Soft bottom-edge fade into white on mobile */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-white md:hidden" />
      </div>

      {/* ── Right: Content panel ── */}
      <div
        className="relative z-10 flex flex-col items-center justify-center flex-1
                   px-8 py-16 md:py-0 text-center"
        style={{ opacity: heroOpacity }}
      >
        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-5"
          style={{ animation: "fadeInUp 1.1s ease 0.4s both" }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #1d4ed8 0%, #7c3aed 50%, #db2777 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Pavithraa
          </span>
          <br />
          <span className="text-slate-700 font-light tracking-widest text-3xl sm:text-4xl md:text-5xl uppercase">
            Satchithanantham
          </span>
        </h1>

        {/* Typewriter */}
        <div
          className="mb-10 h-9 flex items-center"
          style={{ animation: "fadeInUp 1.1s ease 0.9s both" }}
        >
          <span className="font-mono text-lg sm:text-xl text-blue-600">
            {displayText}
            <span className="inline-block w-0.5 h-5 bg-blue-500 ml-0.5 align-middle animate-blink" />
          </span>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
          style={{ animation: "fadeInUp 1.1s ease 1.3s both" }}
        >
          <button
            onClick={() => scrollTo("#experience")}
            className="px-8 py-3 bg-white hover:bg-slate-50
                       text-slate-700 border border-slate-300 hover:border-slate-400
                       rounded-full font-semibold transition-all duration-300
                       shadow-sm w-full sm:w-auto"
          >
            Explore My Work
          </button>
          <a
            href={`${BASE_PATH}/resume.pdf`}
            download
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700
                       text-white border border-blue-600 hover:border-blue-700
                       rounded-full font-semibold transition-all duration-300
                       shadow-sm w-full sm:w-auto text-center"
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 animate-bounce"
        style={{ opacity: heroOpacity }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
