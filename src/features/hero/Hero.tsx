import React from 'react';
import { ArrowDown, ArrowDownRight, ArrowUpRight, CodeXml, Github, Hand, Linkedin, MapPin } from 'lucide-react';
import { profileData } from '../../data/profile';
import { availabilityData } from '../../data/availability';

export const Hero: React.FC = () => (
  <section className="hero site-container" aria-labelledby="hero-heading">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="availability"><span className="status-dot" />{availabilityData.status}</div>
        <p className="hero-intro">Hello, I'm Sean Sta Ana <Hand size={24} aria-hidden="true" /></p>
        <h1 id="hero-heading">Thoughtful code.<br /><span>Real-world</span><br />impact.</h1>
        <p className="hero-description">An aspiring software engineer turning complex problems into useful, reliable applications. Building across the full stack, always learning along the way.</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">Explore my work <ArrowDownRight size={20} /></a>
          <a href="#contact" className="button button-quiet">Let's connect <ArrowUpRight size={20} /></a>
        </div>
        <div className="hero-socials">
          <span>Find me on</span>
          <a href={profileData.github} target="_blank" rel="noopener noreferrer"><Github size={20} /> GitHub <ArrowUpRight size={18} /></a>
          <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /> LinkedIn <ArrowUpRight size={18} /></a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-topline"><span>THE PERSON BEHIND THE CODE</span><span>01 / INTRO</span></div>
        <div className="portrait-frame">
          <img src={profileData.avatarUrl} alt={profileData.name} width="800" height="800" />
          <span className="portrait-corner" aria-hidden="true"><ArrowUpRight size={32} strokeWidth={1.8} /></span>
        </div>
        <div className="portrait-caption"><div><strong>Sean Chandrick B. Sta Ana</strong><span>{profileData.title}</span></div><span className="portrait-symbol" aria-hidden="true"><CodeXml size={28} /></span></div>
        <div className="location-line"><MapPin size={18} /> {profileData.location}<span>LET'S BUILD SOMETHING GOOD.</span></div>
      </div>
    </div>
    <div className="hero-bottom"><a href="#projects"><ArrowDown size={18} /> Scroll to explore</a><p>FULL STACK DEVELOPMENT <span>/</span> BACKEND SYSTEMS <span>/</span> AI INTEGRATION</p></div>
  </section>
);