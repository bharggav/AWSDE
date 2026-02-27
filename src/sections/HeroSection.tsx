import { motion } from 'framer-motion';
import TypingText from '../components/TypingText';
import SectionContainer from '../components/SectionContainer';

const HeroSection = () => (
  <SectionContainer id="hero" className="pt-36">
    <div className="grid items-center gap-10 md:grid-cols-2">
      <div className="space-y-6">
        <TypingText text="Hi, I'm Bharggav Galla — AWS DATA ENGINEER" />
        <p className="max-w-xl text-slate-700 dark:text-slate-300">
          I design resilient cloud-native data platforms, production-grade ETL pipelines, and high-throughput streaming architectures.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-slate-900 transition hover:scale-105">View Projects</a>
          <a href="/resume.pdf" className="rounded-xl border border-cyan-300 px-5 py-3 font-semibold text-cyan-700 transition hover:bg-cyan-500/10 dark:text-cyan-200">Download Resume</a>
        </div>
      </div>
      <motion.div
        className="glass-card relative h-72 overflow-hidden p-6"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
      >
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/30 blur-3xl" />
        <p className="relative text-lg text-slate-800 dark:text-slate-100">Building modern AWS data systems with performance, governance, and scale.</p>
      </motion.div>
    </div>
  </SectionContainer>
);

export default HeroSection;
