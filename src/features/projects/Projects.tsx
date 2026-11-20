import React from 'react';
import { ExternalLink, Github, Layers, ScanFace, ShieldCheck, Sparkles, BookOpen, CodeXml } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedIcon } from '../../components/AnimatedIcon';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => (
  <section id="projects" className="section site-container" aria-labelledby="projects-heading">
    <div className="section-heading">
      <div><p className="eyebrow"><AnimatedIcon icon={Sparkles} variant="spark" />SELECTED WORK</p><h2 id="projects-heading">Built to solve.<br /><span>Made with intention.</span></h2></div>
      <p>Less talking about ideas.<br />More bringing them to life. Here's a look inside my latest build.</p>
    </div>
    <div className="project-list">
      {projectsData.map(project => {
        const attendance = project.slug === 'automated-attendance-management-system';
        return (
          <article key={project.slug} className="featured-project">
            <Link to={'/projects/' + project.slug} className="project-image-link" aria-label={'Explore ' + project.title}>
              <span className="project-spotlight"><AnimatedIcon icon={Sparkles} variant="spark" size={18} />THE PROJECT SPOTLIGHT</span>
              <div className="project-browser">
                <div className="project-window-bar"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>{attendance ? 'attendance.app / dashboard' : 'project / preview'}</span><CodeXml size={18} aria-hidden="true" /></div>
                <img src={project.previewImage} alt={attendance ? 'Attendance management dashboard and face recognition scanner interface' : project.title + ' application preview'} width="1672" height="941" loading="lazy" />
              </div>
              <span className="image-link-caption"><span className="preview-indicator" aria-hidden="true" />Real project. Real problem. Real solution.</span>
            </Link>
            <div className="project-content">
              <div className="project-meta"><span>FROM IDEA TO APPLICATION</span><span className="tag">{project.category}</span>{project.projectStage && <span className="tag tag-accent">{project.projectStage}</span>}</div>
              <h3>{attendance ? 'Attendance, made intelligent.' : project.title}</h3>
              <p className="project-subtitle">{project.title}</p>
              <p className="muted">{project.shortDescription}</p>
              {attendance && <div className="project-capabilities"><span><AnimatedIcon icon={ScanFace} variant="draw" />Face recognition</span><span><AnimatedIcon icon={ShieldCheck} variant="draw" />Anti-spoofing</span><span><AnimatedIcon icon={Layers} variant="float" />Role-based access</span></div>}
              <div className="tag-list">{project.technologies.filter(tech => ['Spring Boot', 'React', 'FastAPI', 'PostgreSQL', 'Docker'].includes(tech)).map(tech => <span className="tag" key={tech}>{tech}</span>)}</div>
              <div className="project-actions">
                <Link to={'/projects/' + project.slug} className="text-link"><AnimatedIcon icon={BookOpen} />Explore case study</Link>
                <div><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label={'GitHub repository for ' + project.title}><AnimatedIcon icon={Github} variant="wave" size={20} /></a>{project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-link secondary-link">Live demo<AnimatedIcon icon={ExternalLink} size={18} /></a>}</div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
    <a className="more-work-link" href="https://github.com/ImSeanStaAna10?tab=repositories" target="_blank" rel="noopener noreferrer"><AnimatedIcon icon={Github} variant="wave" size={20} />More little experiments live on GitHub</a>
  </section>
);