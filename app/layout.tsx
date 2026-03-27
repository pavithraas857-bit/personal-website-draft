import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavithraa Satchithanantham — AI & Software Engineer",
  description:
    "Portfolio of Pavithraa Satchithanantham — MS Computer Science at Arizona State University. AI Engineer specializing in Agentic AI, RAG systems, LLMs, computer vision, and full-stack engineering.",
  openGraph: {
    title: "Pavithraa Satchithanantham — AI & Software Engineer",
    description:
      "MS Computer Science · ASU · Building intelligent systems at the intersection of AI and software engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#0a0f1e] text-slate-200 antialiased">{children}</body>
    </html>
  );
}
