export type Skill = { name: string; level: number };
export type Project = {
  title: string;
  description: string;
  stack: string[];
  github: string;
};
export type Experience = {
  company: string;
  role: string;
  period: string;
  achievements: string[];
};

export const skills: Skill[] = [
  { name: 'AWS (S3, Glue, Redshift, Lambda, Step Functions, SNS, SQS)', level: 95 },
  { name: 'PySpark / Spark', level: 90 },
  { name: 'Python', level: 92 },
  { name: 'SQL', level: 93 },
  { name: 'Airflow', level: 85 },
  { name: 'Kafka / MQTT', level: 84 },
  { name: 'CI/CD', level: 80 },
];

export const projects: Project[] = [
  {
    title: 'Real-time IoT ingestion pipeline',
    description: 'Built a scalable ingestion layer using MQTT, Kinesis and Lambda to process telemetry in near real-time.',
    stack: ['AWS IoT Core', 'Lambda', 'Kinesis', 'S3', 'QuickSight'],
    github: 'https://github.com/example/iot-pipeline',
  },
  {
    title: 'Glue → Redshift ETL framework',
    description: 'Created a metadata-driven ETL framework with Glue jobs, partition strategy, and Redshift optimization.',
    stack: ['Glue', 'PySpark', 'Redshift', 'Step Functions'],
    github: 'https://github.com/example/glue-redshift-etl',
  },
  {
    title: 'Serverless data lake',
    description: 'Designed a serverless lake architecture with secure ingestion, cataloging, and Athena self-service analytics.',
    stack: ['S3', 'Lake Formation', 'Glue Catalog', 'Athena'],
    github: 'https://github.com/example/serverless-lake',
  },
  {
    title: 'Spark transformation pipelines',
    description: 'Developed reusable Spark transformations with quality checks, unit tests, and CI/CD deployment workflows.',
    stack: ['Spark', 'Python', 'Airflow', 'Docker', 'GitHub Actions'],
    github: 'https://github.com/example/spark-transformations',
  },
];

export const experience: Experience[] = [
  {
    company: 'Cloud Data Systems',
    role: 'Senior AWS Data Engineer',
    period: '2022 - Present',
    achievements: [
      'Reduced ETL processing time by 45% with Spark tuning and partitioning strategy.',
      'Implemented event-driven ingestion patterns across 20+ microservices.',
    ],
  },
  {
    company: 'InsightWorks Analytics',
    role: 'ETL Developer',
    period: '2019 - 2022',
    achievements: [
      'Delivered enterprise ETL framework on AWS Glue for 12 business domains.',
      'Improved data quality with automated validation and anomaly alerting.',
    ],
  },
];
