import SectionContainer from '../components/SectionContainer';

const AboutSection = () => (
  <SectionContainer id="about">
    <h2 className="section-title">About Me</h2>
    <div className="glass-card space-y-4 p-6">
      <p className="text-slate-700 dark:text-slate-200">
        I am Bharggav Galla, an AWS DATA ENGINEER / ETL Developer with 6+ years of experience delivering reliable data platforms, governed data lakes, and analytics-ready datasets.
      </p>
      <div className="grid gap-3 text-sm md:grid-cols-2">
        <div className="rounded-xl bg-cyan-500/10 p-3"><strong>Experience:</strong> 6+ years building AWS-native pipelines</div>
        <div className="rounded-xl bg-cyan-500/10 p-3"><strong>Core Strengths:</strong> Data Engineering, ETL, Streaming, Cloud Architecture</div>
      </div>
    </div>
  </SectionContainer>
);

export default AboutSection;
