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

export const MainPortfolio: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <GithubDashboard />
        <Experience />
        <Certifications />
        <CvSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
