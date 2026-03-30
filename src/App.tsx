import { Navbar } from "@/components/portfolio/navbar";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { CertificationsSection } from "@/components/portfolio/certifications-section";
import { LeadershipSection } from "@/components/portfolio/leadership-section";
import { GallerySection } from "@/components/portfolio/gallery-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Mail, ArrowUpRight } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <span className="text-xs font-bold text-white">FM</span>
          </div>
          <span className="text-sm font-medium text-foreground/50">
            Fariss Achraf - Innovation & Technology Management
          </span>
        </div>
        <div className="flex items-center gap-5 text-sm text-foreground/40">
          <a
            href="mailto:Achraf_fariss@um5.ac.ma"
            className="hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Achraf_fariss@um5.ac.ma</span>
          </a>
          <a
            href="https://linkedin.com/in/achraffariss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-300 transition-colors flex items-center gap-1"
          >
            LinkedIn <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
        <p className="text-xs text-foreground/25">
          (c) {new Date().getFullYear()} Fariss Achraf. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <LeadershipSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
