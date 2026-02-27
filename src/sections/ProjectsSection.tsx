import { FiGithub } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';
import { projects } from '../data/portfolioData';

const ProjectsSection = () => (
  <SectionContainer id="projects">
    <h2 className="section-title">Projects</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {projects.map((project) => (
        <article key={project.title} className="glass-card group flex flex-col gap-4 p-6 transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-slate-700 dark:text-slate-300">{project.description}</p>
          <div className="rounded-lg border border-dashed border-cyan-300/40 p-4 text-center text-sm text-cyan-700 dark:text-cyan-200">Architecture Diagram Placeholder</div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs text-cyan-700 dark:text-cyan-200">{item}</span>
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-2 text-cyan-700 hover:text-cyan-500 dark:text-cyan-300 dark:hover:text-cyan-200">
            <FiGithub /> GitHub
          </a>
        </article>
      ))}
    </div>
  </SectionContainer>
);

export default ProjectsSection;
