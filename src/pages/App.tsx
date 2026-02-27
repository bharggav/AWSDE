import { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 transition-colors duration-500 dark:text-slate-100">
      <Navbar sections={sectionIds} activeSection={activeSection} onToggleTheme={toggleTheme} theme={theme} />
      <ParticleBackground />
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
