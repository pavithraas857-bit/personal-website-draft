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

  // Tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -12, y: x * 12 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* ── Left: Text ── */}
          <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Name */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              <span className="text-slate-100">Pavithraa </span>
              <span className="gradient-text">Satchithanantham</span>
            </h1>

            {/* Typewriter */}
            <div className="h-10 mb-6 flex items-center justify-center md:justify-start">
              <span className="font-mono text-lg sm:text-xl text-blue-300">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-blue-400 ml-0.5 align-middle animate-blink" />
              </span>
            </div>

            {/* Subtitle */}
            <p className="text-slate-400 text-base sm:text-lg mb-10 max-w-xl leading-relaxed">
              MS Computer Science · Arizona State University ·
              Building systems at the intersection of intelligence and engineering.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center w-full sm:w-auto">
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

          {/* ── Right: Tilt Card ── */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="cursor-pointer"
              style={{
                transform: `perspective(900px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transition:
                  tilt.x === 0 && tilt.y === 0
                    ? "transform 0.5s ease"
                    : "transform 0.1s ease",
              }}
            >
              {/* Gradient border wrapper */}
              <div
                className="p-[2px] rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.25)]"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
                }}
              >
                {/* Inner card */}
                <div className="w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE_PATH}/photo-asu.jpg`}
                    alt="Pavithraa Satchithanantham"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Subtle bottom gradient overlay */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(10,15,30,0.6) 0%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

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
