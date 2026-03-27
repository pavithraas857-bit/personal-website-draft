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
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Canvas particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize, { passive: true });

    const COLORS = ["#3b82f6", "#7c3aed", "#60a5fa", "#a78bfa"];
    const particles = Array.from({ length: 100 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.8 + 0.8,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dist = Math.hypot(p.x - q.x, p.y - q.y);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(96, 165, 250, ${(1 - dist / 120) * 0.4})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    const current = PHRASES[phraseIndex];
    const speed = isDeleting ? 45 : 100;

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

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ display: "block" }}
      />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-transparent to-[#0a0f1e]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Profile photo placeholder */}
        <div
          className="mx-auto mb-8 w-28 h-28 rounded-full
                     border-2 border-blue-500/60
                     bg-gradient-to-br from-blue-900/80 to-violet-900/80
                     flex flex-col items-center justify-center
                     shadow-[0_0_30px_rgba(59,130,246,0.25)]
                     overflow-hidden"
        >
          {/* Drop your photo here — replace this div with <img src="..." /> */}
          <svg className="w-12 h-12 text-blue-400/60" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <span className="text-[10px] text-blue-400/50 font-mono mt-1">Photo</span>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
          <span className="text-slate-100">Pavithraa </span>
          <span className="gradient-text">Satchithanantham</span>
        </h1>

        {/* Typewriter */}
        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="font-mono text-lg sm:text-xl text-blue-300">
            {displayText}
            <span
              className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 align-middle animate-blink"
            />
          </span>
        </div>

        {/* Subtitle */}
        <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          MS Computer Science · Arizona State University ·
          Building systems at the intersection of intelligence and engineering.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollTo("#experience")}
            className="px-7 py-3 bg-blue-600 hover:bg-blue-500 text-white
                       rounded-lg font-semibold transition-all duration-200
                       shadow-[0_0_20px_rgba(59,130,246,0.35)]
                       hover:shadow-[0_0_32px_rgba(59,130,246,0.55)]
                       w-full sm:w-auto"
          >
            Explore My Work
          </button>
          <a
            href={`${BASE_PATH}/resume.pdf`}
            download
            className="px-7 py-3 glass border border-blue-500/40
                       text-blue-300 hover:text-white hover:border-blue-400
                       rounded-lg font-semibold transition-all duration-200
                       hover:bg-blue-600/20 w-full sm:w-auto text-center"
          >
            Download Resume ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 animate-bounce">
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
