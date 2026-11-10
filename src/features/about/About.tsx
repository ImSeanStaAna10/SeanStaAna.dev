import React from 'react';
import { ArrowUpRight, Code2, Compass, Heart, Plus } from 'lucide-react';

const milestones = [
  { date: '2022', title: 'Finding my direction', description: 'Started at Taguig City University in Tourism while waiting for an opportunity to pursue a technology degree.' },
  { date: '2023', title: 'A new chapter in Computer Science', description: 'Shifted to Computer Science and began learning programming, backend development, and databases beyond the classroom.' },
  { date: '2024', title: 'Building a backend foundation', description: 'Worked on server-side functionality and database management for our thesis, using Node.js and Express.js.' },
  { date: '2025', title: 'From requirements to real software', description: 'Led a team building a booking management solution for a small business as part of our Software Engineering subject.' },
  { date: '2026', title: 'Learning through real projects', description: 'Started freelance and commissioned software work, explored AI-assisted development, and began pursuing software engineering internships.' },
];

export const About: React.FC = () => (
  <section id="about" className="section about-section" aria-labelledby="about-heading">
    <div className="site-container">
      <div className="about-grid">
        <div><p className="eyebrow"><span>02</span> A LITTLE ABOUT ME</p><h2 id="about-heading">Curiosity started it.<br /><span>Building keeps<br />me going.</span></h2><a href="#experience" className="text-link">Follow my journey <ArrowUpRight size={20} /></a></div>
        <div className="about-copy">
          <p className="large-copy">I'm a Computer Science student at Taguig City University, with a growing interest in the systems that make great software work.</p>
          <p className="muted">My path into tech wasn't a straight line. After starting college in Tourism, I shifted to Computer Science to pursue my curiosity about how things are built. That curiosity now takes the shape of full-stack applications, REST APIs, and machine learning integrations.</p>
          <p className="muted">I enjoy connecting the pieces: a clear interface, a dependable backend, and a database that makes sense. Along the way, I explore AI-assisted development while continuing to strengthen my software engineering foundations.</p>
          <div className="about-values"><span><Code2 size={20} /> Build with intention</span><span><Compass size={20} /> Stay curious</span><span><Heart size={20} /> Think about the user</span></div>
        </div>
      </div>
      <details className="journey-details"><summary>How I got here <span>MY JOURNEY, 2022–2026 <Plus className="details-plus" size={24} aria-hidden="true" /></span></summary><ol className="personal-timeline">{milestones.map(item => <li key={item.date}><span>{item.date}</span><div><h3>{item.title}</h3><p className="muted">{item.description}</p></div></li>)}</ol></details>
    </div>
  </section>
);