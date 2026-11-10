import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, CheckCircle2, Copy, Github } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/layout/Footer';
import { projectsData } from './data/projects';

const contents = [
  ['overview', 'Overview'], ['problem', 'The problem'], ['goals', 'Project goals'],
  ['features', 'Key features'], ['architecture', 'Architecture'], ['challenges', 'Challenges'],
  ['solutions', 'The approach'], ['future', "What's next"], ['demo', 'Demo access'],
];

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find(item => item.slug === slug);
  const [copiedField, setCopiedField] = useState('');
  const [feedback, setFeedback] = useState('');
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  const copy = async (value: string, field: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(field);
      setFeedback('Copied to clipboard.');
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopiedField(''), 2000);
    } catch { setFeedback('Copy is unavailable. You can select and copy the value directly.'); }
  };

  if (!project) return <div className="project-detail"><Navbar /><main id="main-content" tabIndex={-1} className="site-container not-found"><p className="eyebrow">404 / PROJECT NOT FOUND</p><h1>This page is still unwritten.</h1><p className="muted">The project you are looking for could not be found.</p><Link to="/#projects" className="button button-primary"><ArrowLeft size={20} />Back to selected work</Link></main><Footer /></div>;

  const list = (items: string[]) => <ul>{items.map(item => <li key={item}><CheckCircle2 size={20} /><span>{item}</span></li>)}</ul>;
  const demoUrl = project.liveDemo?.url || project.liveUrl;

  return (
    <div className="project-detail">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="detail-container">
        <Link to="/#projects" className="text-link"><ArrowLeft size={20} />Back to selected work</Link>
        <div className="detail-heading"><div className="tag-list"><span className="tag">{project.category}</span>{project.projectStage && <span className="tag tag-accent">{project.projectStage}</span>}<span className="tag">PROJECT CASE STUDY</span></div><h1>{project.title}</h1><p className="muted">{project.shortDescription}</p></div>
        <div className="detail-preview"><img src={project.previewImage} alt="Attendance management dashboard and face recognition scanner" width="1672" height="941" /></div>
        <div className="detail-actions"><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="button button-primary"><Github size={20} />View repository <ArrowUpRight size={20} /></a>{demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="button button-quiet">Open live demo <ArrowUpRight size={20} /></a>}</div>
        <div className="detail-body">
          <nav className="detail-toc" aria-label="Case study contents"><span>IN THIS CASE STUDY</span>{contents.filter(([id]) => id !== 'demo' || project.liveDemo?.accounts.length).map(([id, label]) => <a key={id} href={'#case-' + id}>{label}</a>)}</nav>
          <div className="detail-sections">
            <section id="case-overview"><h2>Overview</h2><p>{project.overview}</p><div className="tag-list" style={{ marginTop: 24 }}>{project.technologies.map(tech => <span key={tech} className="tag">{tech}</span>)}</div></section>
            <section id="case-problem"><h2>The problem</h2><p>{project.problem}</p></section>
            <section id="case-goals"><h2>Project goals</h2>{list(project.goals)}</section>
            <section id="case-features"><h2>Key features</h2>{list(project.keyFeatures)}</section>
            <section id="case-architecture"><h2>Architecture</h2><p>{project.architecture}</p></section>
            <section id="case-challenges"><h2>The challenges</h2><p>{project.challenges}</p></section>
            <section id="case-solutions"><h2>The approach</h2><p>{project.solutions}</p></section>
            <section id="case-future"><h2>What's next</h2>{list(project.futureImprovements)}</section>
            {project.liveDemo && project.liveDemo.accounts.length > 0 && <section id="case-demo" className="demo-section"><h2>Try it for yourself.</h2><p>Use these demonstration accounts to explore the different roles in the application.</p><div className="demo-accounts">{project.liveDemo.accounts.map(account => <article key={account.role} className="demo-account"><h3>{account.role}</h3>{(['email', 'password'] as const).map(field => {
              const key = account.role + '-' + field;
              return <div key={field} className="credential"><span>{field === 'email' ? 'Email address' : 'Password'}</span><div><code>{account[field]}</code><button type="button" className="icon-button" onClick={() => void copy(account[field], key)} aria-label={'Copy ' + account.role + ' ' + field}>{copiedField === key ? <Check size={20} /> : <Copy size={20} />}</button></div></div>;
            })}</article>)}</div><div className="clipboard-feedback" role="status">{feedback}</div><a href={project.liveDemo.url} target="_blank" rel="noopener noreferrer" className="text-link">Open application <ArrowUpRight size={20} /></a></section>}
          </div>
        </div>
        <Link to="/#projects" className="text-link"><ArrowLeft size={20} />Back to selected work</Link>
      </main>
      <Footer />
    </div>
  );
};