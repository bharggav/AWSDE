import { FormEvent } from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import SectionContainer from '../components/SectionContainer';

const ContactSection = () => {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <SectionContainer id="contact" className="pb-28">
      <h2 className="section-title">Contact</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <form onSubmit={onSubmit} className="glass-card space-y-4 p-6">
          <input className="w-full rounded-lg border border-white/20 bg-white/5 p-3" placeholder="Name" required />
          <input className="w-full rounded-lg border border-white/20 bg-white/5 p-3" type="email" placeholder="Email" required />
          <textarea className="h-28 w-full rounded-lg border border-white/20 bg-white/5 p-3" placeholder="Message" required />
          <button className="rounded-lg bg-cyan-400 px-5 py-2 font-semibold text-slate-900">Send Message</button>
        </form>
        <div className="glass-card space-y-4 p-6 text-lg">
          <a href="mailto:you@example.com" className="flex items-center gap-3 hover:text-cyan-300"><FiMail /> you@example.com</a>
          <a href="https://linkedin.com" className="flex items-center gap-3 hover:text-cyan-300"><FiLinkedin /> LinkedIn</a>
          <a href="https://github.com" className="flex items-center gap-3 hover:text-cyan-300"><FiGithub /> GitHub</a>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactSection;
