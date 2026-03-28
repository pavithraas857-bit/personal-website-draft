"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:sapavi001@gmail.com",
    display: "sapavi001@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pavithraa-satchithanantham",
    display: "linkedin.com/in/pavithraa-satchithanantham",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/pavithraas857-bit",
    display: "github.com/pavithraas857-bit",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    window.location.href = `mailto:sapavi001@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto">
      <SectionHeading>Get In Touch</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: links */}
        <div className="flex flex-col gap-4">
          <p className="text-slate-600 text-sm leading-relaxed mb-2">
            I&apos;m always open to new opportunities, collaborations, and interesting conversations.
            Feel free to reach out.
          </p>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 glass rounded-lg px-4 py-3 card-glow
                         text-slate-700 hover:text-blue-600 transition-all group"
            >
              <span className="text-blue-600 group-hover:text-blue-500 transition-colors shrink-0">
                {link.icon}
              </span>
              <div className="min-w-0">
                <p className="text-xs text-slate-500 font-mono mb-0.5">{link.label}</p>
                <p className="text-sm truncate">{link.display}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-mono text-slate-600 mb-1.5">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full glass rounded-lg px-4 py-2.5 text-sm text-slate-900
                         placeholder:text-slate-400 focus:outline-none
                         focus:border-blue-500 border border-blue-200 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-600 mb-1.5">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full glass rounded-lg px-4 py-2.5 text-sm text-slate-900
                         placeholder:text-slate-400 focus:outline-none
                         focus:border-blue-500 border border-blue-200 transition-colors"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-600 mb-1.5">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full glass rounded-lg px-4 py-2.5 text-sm text-slate-900
                         placeholder:text-slate-400 focus:outline-none
                         focus:border-blue-500 border border-blue-200
                         transition-colors resize-none"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold
                       rounded-lg transition-all duration-200
                       shadow-[0_0_16px_rgba(37,99,235,0.2)]
                       hover:shadow-[0_0_24px_rgba(37,99,235,0.35)]"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
