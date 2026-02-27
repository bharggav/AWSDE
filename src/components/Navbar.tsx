import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

type NavbarProps = {
  sections: string[];
  activeSection: string;
  onToggleTheme: () => void;
  theme: 'dark' | 'light';
};

const Navbar = ({ sections, activeSection, onToggleTheme, theme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md ${
        theme === 'dark' ? 'border-white/10 bg-slate-900/70' : 'border-slate-300/70 bg-white/80'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <span className="text-lg font-extrabold tracking-[0.1em] text-cyan-700 dark:text-cyan-300">AWS DATA ENGINEER</span>

        <div className="hidden gap-2 md:flex">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`relative px-3 py-1 text-sm capitalize ${
                theme === 'dark' ? 'text-slate-200/90' : 'text-slate-700'
              }`}
            >
              {section.replace('-', ' ')}
              {activeSection === section && (
                <motion.span
                  layoutId="activeTab"
                  className={`absolute inset-0 -z-10 rounded-full ${
                    theme === 'dark' ? 'bg-cyan-400/20' : 'bg-cyan-500/20'
                  }`}
                  transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className={`rounded-full border p-2 ${
              theme === 'dark' ? 'border-white/20 text-cyan-200' : 'border-slate-300 text-cyan-700'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className={`rounded-full border p-2 md:hidden ${
              theme === 'dark' ? 'border-white/20 text-cyan-200' : 'border-slate-300 text-cyan-700'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`px-6 py-3 md:hidden ${theme === 'dark' ? 'border-t border-white/10' : 'border-t border-slate-300/70'}`}>
          <div className="flex flex-wrap gap-2">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className={`rounded-full px-3 py-1 text-sm capitalize ${
                  theme === 'dark' ? 'bg-white/10 text-slate-100' : 'bg-slate-200 text-slate-800'
                }`}
              >
                {section.replace('-', ' ')}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
