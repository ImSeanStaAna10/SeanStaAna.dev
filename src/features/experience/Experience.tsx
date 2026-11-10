import React from 'react';
import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Plus } from 'lucide-react';
import { experienceData } from '../../data/experience';

export const Experience: React.FC = () => (
  <section id="experience" className="section experience-section" aria-labelledby="experience-heading">
    <div className="site-container experience-grid">
      <div className="experience-intro"><p className="eyebrow"><span>04</span> THE JOURNEY</p><h2 id="experience-heading">Every chapter<br /><span>adds perspective.</span></h2><p className="muted">A foundation in computer science, experience working with people, and a commitment to getting better at the craft.</p><a href="#cv" className="text-link">View my full resume <ArrowUpRight size={20} /></a></div>
      <div className="experience-list">{[...experienceData].sort((a, b) => Number(b.ongoing) - Number(a.ongoing)).map(item => {
        const Icon = item.type === 'Education' ? GraduationCap : BriefcaseBusiness;
        return <article key={item.id} className="experience-item"><div className="experience-meta"><span><Icon size={20} />{item.type}</span><span>{item.startDate} – {item.ongoing ? 'Present' : item.endDate}</span></div><h3>{item.title}</h3><p className="experience-org">{item.organization}</p><p className="muted">{item.description}</p><details className="experience-details"><summary>More about this chapter <Plus size={22} aria-hidden="true" /></summary><div>{item.responsibilities.length > 0 && <><h4>Responsibilities</h4><ul>{item.responsibilities.map(text => <li key={text}>{text}</li>)}</ul></>}{item.achievements.length > 0 && <><h4>Highlights</h4><ul>{item.achievements.map(text => <li key={text}>{text}</li>)}</ul></>}<div className="tag-list">{item.technologies.map(tech => <span className="tag" key={tech}>{tech}</span>)}</div></div></details></article>;
      })}</div>
    </div>
  </section>
);