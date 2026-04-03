import SectionHeading from "./SectionHeading";

const HIGHLIGHTS = [
  { icon: "🏆", label: "National Hackathon Winner" },
  { icon: "🌍", label: "International Hackathon Runner-up" },
  { icon: "📄", label: "2× IEEE Publications" },
  { icon: "🥇", label: "National Gold Medal - Karate Kumite" },
  { icon: "🥉", label: "National Bronze Medal - Karate Kata" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 max-w-4xl mx-auto">
      <SectionHeading>About Me</SectionHeading>

      <div className="flex flex-col gap-10">

        {/* Opening hook — cinematic pull-quote */}
        <blockquote className="relative pl-6 border-l-4 border-blue-500/40">
          <p className="text-slate-600 italic leading-relaxed text-base md:text-lg">
            The room is loud. A hundred keyboards clacking and thirty-six hours on the clock.
            Somewhere in that chaos, there I am, sitting in front of a screen, stitching together
            an AI solution that didn&apos;t exist yesterday, and by morning, it&apos;ll win a
            national hackathon.
          </p>
        </blockquote>

        {/* Highlight chips */}
        <div className="flex flex-wrap gap-3">
          {HIGHLIGHTS.map((h) => (
            <span
              key={h.label}
              className="flex items-center gap-2 text-sm px-4 py-2 rounded-full
                         glass border border-blue-200 text-slate-700 font-medium"
            >
              <span>{h.icon}</span>
              {h.label}
            </span>
          ))}
        </div>

        {/* Body paragraphs */}
        <div className="space-y-6 text-slate-600 leading-relaxed text-[0.97rem]">
          <p>
            I&apos;m an AI Engineer and Software Engineer who builds intelligent solutions to
            real-world problems, not because it&apos;s trendy, but because it&apos;s the most
            meaningful work I can imagine. From traditional ML and neural networks to GenAI, LLMs,
            and Agentic AI, I&apos;ve built across the full spectrum of what intelligent software
            looks like today, with two research publications at internationally recognized IEEE
            conferences to show for it. I am a national hackathon winner and also a runner up at an international hackathon.
          </p>

          <p>
            But here&apos;s what most people don&apos;t expect: the same discipline that keeps me
            debugging at 3&nbsp;AM also earned me a national gold medal in Karate Kumite and a
            bronze in Kata. I am also a classically trained singer and Bharatnatyam dancer.
          </p>

          <p>
            Right now, I&apos;m focused on working with the best teams in the industry to push the
            boundaries of what AI can do. The long game? To become a voice that shapes this field,
            and to leave the world a little better than I found it.{" "}
            <span className="text-blue-600 font-medium">
              If you&apos;ve read this far, we probably share something in common. Let&apos;s talk.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}
