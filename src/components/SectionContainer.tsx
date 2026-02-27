import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

type SectionContainerProps = PropsWithChildren<{ id: string; className?: string }>;

const SectionContainer = ({ id, className, children }: SectionContainerProps) => (
  <motion.section
    id={id}
    className={`mx-auto max-w-6xl px-6 py-20 ${className ?? ''}`}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
  >
    {children}
  </motion.section>
);

export default SectionContainer;
