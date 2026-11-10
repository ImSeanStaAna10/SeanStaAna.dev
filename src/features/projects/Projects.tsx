import React from 'react';
import { ArrowRight, ArrowUpRight, Github, Layers, ScanFace, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => (
  <section id="projects" className="section site-container" aria-labelledby="projects-heading">
    <div className="section-heading">
      <div><p className="eyebrow"><span>01</span> SELECTED WORK</p><h2 id="projects-heading">Built to solve.<br /><span>Designed to matter.</span></h2></div>
      <p>A closer look at the ideas I've brought to life, from backend architecture to the experience on screen.</p>
    </div>
    <div className="project-list">
      {projectsData.map((project, index) => (
        <article key={project.slug} className="featured-project">
          <Link to={'/projects/' + project.slug} className="project-image-link" aria-label={'Explore ' + project.title}>
            <div className="project-window-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>PROJECT SPOTLIGHT</span><ArrowUpRight size={20} /></div>
            <img src={project.previewImage} alt="Attendance management dashboard and face recognition scanner interface" width="1672" height="941" loading="lazy" />
            <span className="image-link-caption">A real look at the application <ArrowUpRight size={20} /></span>
          </Link>
          <div className="project-content">
            <div className="project-meta"><span>PROJECT {String(index + 1).padStart(2, '0')}</span><span className="tag">{project.category}</span>{project.projectStage && <span className="tag tag-accent">{project.projectStage}</span>}</div>
            <h3>{project.slug === 'automated-attendance-management-system' ? 'Attendance, made intelligent.' : project.title}</h3>
            <p className="project-subtitle">{project.title}</p>
            <p className="muted">{project.shortDescription}</p>
            <div className="project-capabilities">
              <span><ScanFace size={20} /> Face recognition</span><span><ShieldCheck size={20} /> Anti-spoofing</span><span><Layers size={20} /> Role-based access</span>
            </div>
            <div className="tag-list">{['Spring Boot', 'React', 'FastAPI', 'PostgreSQL', 'Docker'].filter(tech => project.technologies.includes(tech)).map(tech => <span className="tag" key={tech}>{tech}</span>)}</div>
            <div className="project-actions">
              <Link to={'/projects/' + project.slug} className="text-link">Explore case study <ArrowRight size={20} /></Link>
              <div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label={'GitHub repository for ' + project.title}><Github size={20} /></a>
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link secondary-link">Live demo <ArrowUpRight size={20} /></a>}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
    <a className="more-work-link" href="https://github.com/ImSeanStaAna10?tab=repositories" target="_blank" rel="noopener noreferrer">More experiments and projects on GitHub <ArrowUpRight size={20} /></a>
  </section>
);