import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { SkillsSection } from '@/sections/SkillsSection';
// import { CloudDevopsSection } from '@/sections/CloudDevopsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { CertificationsSection } from '@/sections/CertificationsSection';
import { GitHubStatsSection } from '@/sections/GitHubStatsSection';
import { ResumeSection } from '@/sections/ResumeSection';
import { ContactSection } from '@/sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        {/* <CloudDevopsSection /> */}
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <GitHubStatsSection />
        <ResumeSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
