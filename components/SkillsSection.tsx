import { SKILLS } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading>Skills</SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((group) => (
          <div key={group.category} className="glass rounded-xl p-5 card-glow">
            <h3 className="font-mono text-xs uppercase tracking-widest text-blue-700 mb-4">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm px-3 py-1 rounded-full
                             bg-blue-50 text-slate-700
                             border border-blue-200
                             hover:border-blue-500 hover:text-blue-700
                             transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
