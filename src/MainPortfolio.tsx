import React from 'react';
import { Navbar } from './components/navigation/Navbar';
import { Hero } from './features/hero/Hero';
import { About } from './features/about/About';
import { Skills } from './features/skills/Skills';
import { Projects } from './features/projects/Projects';
import { GithubDashboard } from './features/github/GithubDashboard';
import { Experience } from './features/experience/Experience';
import { Certifications } from './features/certifications/Certifications';
import { CvSection } from './features/cv/CvSection';
import { Contact } from './features/contact/Contact';
import { Footer } from './components/layout/Footer';

export const MainPortfolio: React.FC = () => (
  <div className="portfolio-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar />
    <main id="main-content" tabIndex={-1}>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <GithubDashboard />
      <Certifications />
      <CvSection />
      <Contact />
    </main>
    <Footer />
  </div>
);