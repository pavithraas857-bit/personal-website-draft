import { EDUCATION } from "@/lib/data";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 max-w-6xl mx-auto">
      <SectionHeading>Education</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EDUCATION.map((edu) => (
          <div
            key={edu.institution}
            className="glass card-glow rounded-xl p-7 flex flex-col gap-3"
          >
            {/* Institution icon */}
            <div className="w-10 h-10 rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center mb-1">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
              </svg>
            </div>

            <div>
              <p className="font-mono text-xs text-blue-700 mb-1">{edu.period}</p>
              <h3 className="font-semibold text-slate-900 text-lg leading-snug mb-1">
                {edu.degree}
              </h3>
              {edu.note && (
                <p className="text-blue-600 text-sm font-medium italic">{edu.note}</p>
              )}
              <p className="text-slate-700 font-medium">{edu.institution}</p>
              <p className="text-slate-500 text-sm">{edu.location}</p>
            </div>

            <div className="mt-auto pt-3 border-t border-blue-200/60 flex items-center gap-2">
              <span className="text-xs font-mono text-slate-500">GPA</span>
              <span className="text-sm font-bold text-green-700 bg-green-50 border border-green-300 px-2.5 py-0.5 rounded-full font-mono">
                {edu.gpa}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
