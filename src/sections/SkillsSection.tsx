import { motion } from 'framer-motion';
import SectionContainer from '../components/SectionContainer';
import { skills } from '../data/portfolioData';

const SkillsSection = () => (
  <SectionContainer id="skills">
    <h2 className="section-title">Skills</h2>
    <div className="grid gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="glass-card p-4">
          <div className="mb-2 flex justify-between text-sm">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-700">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-blue-500"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default SkillsSection;
