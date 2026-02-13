import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WorkExperienceSection from "@/components/WorkExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ProjectsSection />
    <WorkExperienceSection />
    <CertificationsSection />
    <ContactSection />
    <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
      © 2026 Bushra Siraj. All rights reserved.
    </footer>
  </div>
);

export default Index;
