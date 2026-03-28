import { AWARDS } from "@/lib/data";
import type { Award } from "@/lib/types";
import SectionHeading from "./SectionHeading";

function TimelineItem({ item, accentColor }: { item: Award; accentColor: string }) {
  return (
    <div className="relative pl-6">
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 border-[#f8faff]"
        style={{ background: accentColor }}
      />
      <p className="font-mono text-xs text-slate-500 mb-0.5">{item.date}</p>
      <p className="text-slate-900 font-semibold text-sm leading-snug mb-0.5">{item.title}</p>
      <p className="text-slate-500 text-xs">{item.organization}</p>
    </div>
  );
}

export default function AwardsSection() {
  const awards = AWARDS.filter((a) => a.type === "award");
  const pubs = AWARDS.filter((a) => a.type === "publication");

  return (
    <section id="awards" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading>Awards & Publications</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Awards */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
            <h3 className="font-mono text-sm uppercase tracking-widest text-yellow-600">
              Awards
            </h3>
          </div>
          <div className="relative pl-3 border-l border-yellow-300 space-y-7">
            {awards.map((award, i) => (
              <TimelineItem key={i} item={award} accentColor="#ca8a04" />
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-4 h-4 text-violet-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <h3 className="font-mono text-sm uppercase tracking-widest text-violet-600">
              Publications
            </h3>
          </div>
          <div className="relative pl-3 border-l border-violet-300 space-y-7">
            {pubs.map((pub, i) => (
              <TimelineItem key={i} item={pub} accentColor="#7c3aed" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
