import SectionContainer from '../components/SectionContainer';

const badges = ['AWS Certified Data Engineer', 'AWS Solutions Architect', 'AWS Developer Associate'];

const CertificationsSection = () => (
  <SectionContainer id="certifications">
    <h2 className="section-title">Certifications</h2>
    <div className="grid gap-4 md:grid-cols-3">
      {badges.map((badge) => (
        <div key={badge} className="glass-card p-6 text-center">
          <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-cyan-500/25" />
          <p>{badge}</p>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default CertificationsSection;
