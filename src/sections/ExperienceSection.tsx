import SectionContainer from '../components/SectionContainer';
import { experience } from '../data/portfolioData';

const ExperienceSection = () => (
  <SectionContainer id="experience">
    <h2 className="section-title">Experience Timeline</h2>
    <div className="relative border-l border-cyan-300/40 pl-6">
      {experience.map((item) => (
        <div key={item.company} className="relative mb-8">
          <span className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-cyan-400" />
          <p className="text-sm text-cyan-300">{item.period}</p>
          <h3 className="text-xl font-semibold">{item.role} · {item.company}</h3>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-300">
            {item.achievements.map((achievement) => (
              <li key={achievement}>{achievement}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default ExperienceSection;
