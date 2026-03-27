import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <ExperienceSection />

        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <ProjectsSection />

        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <SkillsSection />

        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <EducationSection />

        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <AwardsSection />

        <div className="max-w-6xl mx-auto px-4">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
        </div>

        <ContactSection />
      </main>

      <footer className="text-center py-10 text-slate-600 text-xs font-mono border-t border-blue-900/20 mt-8">
        <span>© 2025 Pavithraa Satchithanantham</span>
        <span className="mx-2 text-blue-900">·</span>
        <span>Built with Next.js + Tailwind CSS</span>
      </footer>
    </>
  );
}
