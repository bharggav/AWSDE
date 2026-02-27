import { motion } from 'framer-motion';

type Dot = { id: number; size: number; x: string; y: string; duration: number; delay: number };

const dots: Dot[] = Array.from({ length: 18 }).map((_, idx) => ({
  id: idx,
  size: (idx % 4) + 2,
  x: `${(idx * 17) % 100}%`,
  y: `${(idx * 29) % 100}%`,
  duration: 8 + (idx % 5),
  delay: idx * 0.2,
}));

const ParticleBackground = () => (
  <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.15),transparent_30%)]" />
    {dots.map((dot) => (
      <motion.span
        key={dot.id}
        className="absolute rounded-full bg-cyan-300/20"
        style={{ width: dot.size * 4, height: dot.size * 4, left: dot.x, top: dot.y }}
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
        transition={{ repeat: Infinity, duration: dot.duration, delay: dot.delay, ease: 'easeInOut' }}
      />
    ))}
  </div>
);

export default ParticleBackground;
