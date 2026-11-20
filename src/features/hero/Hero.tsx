import React from 'react';
import { ArrowDown, Braces, CodeXml, Coffee, Github, Hand, Linkedin, MapPin, Pause, Play, Rocket, Sparkles, Terminal } from 'lucide-react';
import { AnimatedIcon } from '../../components/AnimatedIcon';
import { useMotionPreference } from '../../hooks/useMotionPreference';
import { profileData } from '../../data/profile';
import { availabilityData } from '../../data/availability';

export const Hero: React.FC = () => {
  const { paused, reduced, toggleMotion } = useMotionPreference();

  return (
    <section className="hero site-container" aria-labelledby="hero-heading">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot" />{availabilityData.status}</div>
          <p className="hero-intro">Hey there, I'm Sean <AnimatedIcon icon={Hand} variant="wave" size={26} loop /></p>
          <h1 id="hero-heading">Thoughtful code.<br /><span className="hero-word">Playful ideas.<svg viewBox="0 0 530 22" fill="none" preserveAspectRatio="none" aria-hidden="true"><path d="M4 14C143 0 344 0 525 9M52 20C214 9 341 8 476 16" /></svg></span><br />Real impact<span className="hero-period">.</span></h1>
          <p className="hero-description">A curious mind turning complex problems into useful digital experiences. Aspiring software engineer, full-stack builder, and always a work in progress.</p>
          <div className="hero-actions">
            <a href="#projects" className="button button-primary"><AnimatedIcon icon={Rocket} variant="float" />Explore my work</a>
            <a href="#contact" className="button button-quiet">Let's talk <AnimatedIcon icon={Coffee} variant="wave" /></a>
          </div>
          <div className="hero-socials">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer"><AnimatedIcon icon={Github} variant="wave" size={20} />GitHub</a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer"><AnimatedIcon icon={Linkedin} size={20} />LinkedIn</a>
            <span className="hero-social-note">A little more of me, online.</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-stage">
            <div className="stage-grid" aria-hidden="true" />
            <div className="stage-orbit orbit-one" aria-hidden="true" />
            <div className="stage-orbit orbit-two" aria-hidden="true" />
            <span className="stage-spark" aria-hidden="true"><AnimatedIcon icon={Sparkles} variant="spark" size={42} loop /></span>
            <span className="stage-label">A HUMAN BEHIND THE CODE</span>
            <div className="portrait-card">
              <div className="portrait-card-top"><span className="window-dots" aria-hidden="true"><i /><i /><i /></span><span>hello_world.tsx</span><AnimatedIcon icon={CodeXml} size={18} /></div>
              <div className="portrait-frame"><img src={profileData.avatarUrl} alt={profileData.name} width="800" height="800" loading="eager" /></div>
              <div className="portrait-caption"><div><strong>Sean Sta Ana</strong><span>{profileData.title}</span></div><AnimatedIcon icon={Braces} variant="pulse" size={30} loop /></div>
            </div>
            <div className="floating-badge badge-build"><span className="badge-icon"><AnimatedIcon icon={CodeXml} variant="draw" size={25} loop /></span><span><small>MY HAPPY PLACE</small><strong>Ideas into interfaces.</strong></span></div>
            <div className="floating-badge badge-learn"><AnimatedIcon icon={Rocket} variant="float" size={25} loop /><span>Always in build mode</span></div>
            <div className="code-note"><Terminal size={17} aria-hidden="true" /><code><span>const</span> mindset = <em>'keep learning'</em>;</code><span className="terminal-cursor" aria-hidden="true" /></div>
          </div>
          <div className="location-line"><MapPin size={17} aria-hidden="true" />{profileData.location}<span>IDEAS WELCOME.</span></div>
        </div>
      </div>
      <div className="hero-bottom">
        <a href="#projects"><AnimatedIcon icon={ArrowDown} variant="float" size={18} loop />Scroll. Explore. Say hello.</a>
        <div className="hero-disciplines"><span>Full stack</span><Sparkles size={14} aria-hidden="true" /><span>Backend systems</span><Sparkles size={14} aria-hidden="true" /><span>AI integration</span></div>
        <button className="motion-toggle" onClick={toggleMotion} disabled={reduced} aria-label={reduced ? 'Animations reduced by device setting' : paused ? 'Play animations' : 'Pause animations'} aria-pressed={paused} title={reduced ? 'Your device prefers reduced motion' : undefined}>{paused ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}<span>{reduced ? 'Motion reduced' : paused ? 'Motion paused' : 'Motion on'}</span></button>
      </div>
    </section>
  );
};