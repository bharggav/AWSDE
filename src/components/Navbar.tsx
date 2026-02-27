import { motion } from 'framer-motion';
import { FiMoon, FiSun } from 'react-icons/fi';

type NavbarProps = {
  sections: string[];
  activeSection: string;
  onToggleTheme: () => void;
  theme: 'dark' | 'light';
};

const Navbar = ({ sections, activeSection, onToggleTheme, theme }: NavbarProps) => (
  <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-900/70 backdrop-blur-md dark:bg-slate-900/70">
    <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">AWS DE</span>
      <div className="hidden gap-2 md:flex">
        {sections.map((section) => (
          <a key={section} href={`#${section}`} className="relative px-3 py-1 text-sm capitalize text-slate-200/90">
            {section.replace('-', ' ')}
            {activeSection === section && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 -z-10 rounded-full bg-cyan-400/20"
                transition={{ type: 'spring', stiffness: 280, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>
      <button onClick={onToggleTheme} className="rounded-full border border-white/20 p-2 text-cyan-200">
        {theme === 'dark' ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  </nav>
);

export default Navbar;
