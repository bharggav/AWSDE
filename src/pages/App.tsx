import { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import { useTheme } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useActiveSection';

const HeroSection = lazy(() => import('../sections/HeroSection'));
const AboutSection = lazy(() => import('../sections/AboutSection'));
const SkillsSection = lazy(() => import('../sections/SkillsSection'));
const ProjectsSection = lazy(() => import('../sections/ProjectsSection'));
const ArchitectureSection = lazy(() => import('../sections/ArchitectureSection'));
const ExperienceSection = lazy(() => import('../sections/ExperienceSection'));
const CertificationsSection = lazy(() => import('../sections/CertificationsSection'));
const ContactSection = lazy(() => import('../sections/ContactSection'));

const sectionIds = ['hero', 'about', 'skills', 'projects', 'architecture', 'experience', 'certifications', 'contact'];

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection(sectionIds);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 dark:text-slate-100">
      <Navbar sections={sectionIds} activeSection={activeSection} onToggleTheme={toggleTheme} theme={theme} />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_30%)]" />
      <Suspense fallback={<div className="px-6 py-40 text-center">Loading portfolio...</div>}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </Suspense>
    </div>
  );
};

export default App;
