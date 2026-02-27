import SectionContainer from '../components/SectionContainer';

const diagrams = [
  'Streaming Ingestion Reference',
  'Batch ETL Orchestration',
  'Serverless Data Lake Blueprint',
  'Medallion Data Platform',
];

const ArchitectureSection = () => (
  <SectionContainer id="architecture">
    <h2 className="section-title">Architecture Showcase</h2>
    <div className="flex snap-x gap-4 overflow-x-auto pb-4">
      {diagrams.map((item) => (
        <div key={item} className="glass-card min-w-[280px] snap-start p-6 md:min-w-[420px]">
          <div className="mb-4 h-40 rounded-lg bg-gradient-to-br from-slate-800 to-slate-700" />
          <h3 className="text-lg">{item}</h3>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default ArchitectureSection;
